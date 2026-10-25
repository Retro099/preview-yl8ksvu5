// Build-time: fetch public repos of Retro099. Falls back to cached/static list offline.
import fs from 'node:fs';
const out = new URL('../src/data/repos.json', import.meta.url);
const fallback = [
  { name: 'jp-meeting-to-crm-fields', url: 'https://github.com/Retro099/jp-meeting-to-crm-fields', updated: null },
  { name: 'japanese-rag-eval', url: 'https://github.com/Retro099/japanese-rag-eval', updated: null },
  { name: 'credit-card-fraud-detection', url: 'https://github.com/Retro099/credit-card-fraud-detection', updated: null },
];
try {
  const ctl = new AbortController(); setTimeout(() => ctl.abort(), 8000);
  const r = await fetch('https://api.github.com/users/Retro099/repos?sort=pushed&per_page=6&type=owner', { signal: ctl.signal, headers: { 'User-Agent': 'site-build' } });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const data = (await r.json()).filter(x => !x.fork && !x.archived && !x.private)
    .map(x => ({ name: x.name, url: x.html_url, updated: x.pushed_at?.slice(0,10) ?? null }));
  if (!data.length) throw new Error('empty');
  fs.writeFileSync(out, JSON.stringify(data, null, 2));
  console.log('repos: fetched', data.length);
} catch (e) {
  if (!fs.existsSync(out)) fs.writeFileSync(out, JSON.stringify(fallback, null, 2));
  console.log('repos: offline fallback (' + e.message + ')');
}
