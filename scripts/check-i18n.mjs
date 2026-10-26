// v6.3 single-source check. Run after `astro build` (npm run check:i18n). Exits 1 on any problem.
// 1) fr.json and ru.json have the same keys, none empty.
// 2) Every English text on an EN page that also appears unchanged on the JA/FR/RU page is reported as missing,
//    unless it is in ALLOW (names, brands, code) or inside an element marked lang="en" on purpose.
//    Commit titles from GitHub carry translate="no". A dictionary value equal to its key counts as intentional.
// 3) No value from src/data/metrics.json is typed by hand in a page or component (it must come from metrics.json).
import fs from 'fs'; import path from 'path';
const R = path.resolve('.'), bad = [];
const fr = JSON.parse(fs.readFileSync('src/i18n/fr.json')), ru = JSON.parse(fs.readFileSync('src/i18n/ru.json'));
for (const [a,b,n] of [[fr,ru,'ru'],[ru,fr,'fr']]) for (const k of Object.keys(a)) if (!(k in b)) bad.push(`dictionary: "${k.slice(0,70)}" missing in ${n}.json`);
for (const [d,n] of [[fr,'fr'],[ru,'ru']]) for (const [k,v] of Object.entries(d)) if (!v) bad.push(`dictionary: empty ${n} value for "${k.slice(0,70)}"`);
const ALLOW = new Set(JSON.parse(fs.readFileSync('scripts/i18n-allow.json')));
const strip = h => h.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'').replace(/<svg[\s\S]*?<\/svg>/g,'');
const dropLangEn = h => { // remove elements that are deliberately English (lang="en"), shallow but enough for our markup
  let out = h, re = /<(\w+)[^>]*\b(?:lang="en"|translate="no")[^>]*>/g, m; while ((m = re.exec(out))) { const tag = m[1], s = m.index; const e = out.indexOf(`</${tag}>`, s); if (e < 0) break; out = out.slice(0,s) + out.slice(e + tag.length + 3); re.lastIndex = s; } return out; };
const texts = h => new Set([...strip(h).matchAll(/>([^<]+)</g)].map(m => m[1].replace(/\s+/g,' ').trim().replace(/&#39;/g,"'").replace(/&amp;/g,'&').replace(/&quot;/g,'"')).filter(t => /[A-Za-z]{3,}.*\s.*[A-Za-z]{2,}/.test(t)));
const walk = d => fs.readdirSync(d,{withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(d,e.name)) : e.name.endsWith('.html') ? [path.join(d,e.name)] : []);
const D = 'dist/preview-yl8ksvu5'.replace(/.*/, fs.existsSync('dist/en') ? 'dist' : 'dist/preview-yl8ksvu5');
for (const f of walk(path.join(D,'en'))) {
  const en = texts(fs.readFileSync(f,'utf8'));
  for (const l of ['ja','fr','ru']) {
    const g = f.replace(`${path.sep}en${path.sep}`, `${path.sep}${l}${path.sep}`); if (!fs.existsSync(g)) { bad.push(`page missing: ${g}`); continue; }
    const other = texts(dropLangEn(fs.readFileSync(g,'utf8')));
    for (const t of other) if (en.has(t) && !ALLOW.has(t) && !(l==='fr'&&fr[t]===t) && !(l==='ru'&&ru[t]===t) && !/^[\w.-]+ · Prithivi Raj Mohanta$/.test(t)) bad.push(`${l}: untranslated "${t.slice(0,80)}" in ${path.relative(D,g)}`);
  }
}
const M = JSON.parse(fs.readFileSync('src/data/metrics.json')), vals = [];
const flat = (o) => Object.values(o).forEach(v => typeof v === 'object' ? flat(v) : vals.push(String(v)));
flat(M); const distinct = vals.filter(v => /[.%]/.test(v)); // decimals and percents are distinctive enough to search for
for (const f of [...walk('src/pages'), ...fs.readdirSync('src/pages',{recursive:true}).filter(x=>x.endsWith('.astro')).map(x=>path.join('src/pages',x)), ...fs.readdirSync('src/components').map(x=>path.join('src/components',x))])
  { if (!/\.(astro|ts|md)$/.test(f)) continue; const s = fs.readFileSync(f,'utf8'); for (const v of distinct) if (s.includes(v)) bad.push(`metrics: "${v}" typed by hand in ${f} (use metrics.json)`); }
if (bad.length) { console.error([...new Set(bad)].join('\n')); console.error(`check:i18n FAILED (${new Set(bad).size})`); process.exit(1); }
console.log('check:i18n OK');
