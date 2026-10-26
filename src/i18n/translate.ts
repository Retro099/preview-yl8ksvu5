import fr from './fr.json'; import ru from './ru.json';
const D: Record<string, Record<string,string>> = { fr, ru };
const esc = (s:string) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
export function translateHtml(html: string, lang: 'fr'|'ru') {
  const d = D[lang];
  const keys = Object.keys(d).filter(k => d[k]).sort((a,b) => b.length - a.length);
  // 1) exact text between tags (trimmed) and exact attribute values; 2) longer raw snippets (keys containing '<').
  for (const k of keys.filter(k => k.includes('<'))) html = html.split(k).join(d[k]);
  html = html.replace(/>([^<]+)</g, (all, t) => { const s = t.trim(); const v = d[s] ?? d[s.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&')]; return v ? '>' + t.replace(s, esc(v)) + '<' : all; });
  html = html.replace(/\b(alt|aria-label|content|title|placeholder|data-[a-z-]+)="([^"]*)"/g, (all, a, t) => { const v = d[t] ?? d[t.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&')]; return v ? `${a}="${v.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}"` : all; });
  html = html.replace(/(?<!hreflang="en" )\blang="en"/g, `lang="${lang}"`);
  return html;
}
