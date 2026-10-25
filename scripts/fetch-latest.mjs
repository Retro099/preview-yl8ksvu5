// Build-time: latest merged pull requests by Retro099 in his public repos (public API, no token).
// On failure keeps the previous file, or writes an empty list (the page then shows a GitHub link).
import fs from 'node:fs';
const out = new URL('../src/data/latest.json', import.meta.url);
try {
  const ctl = new AbortController(); setTimeout(() => ctl.abort(), 8000).unref();
  const r = await fetch('https://api.github.com/search/issues?q=author:Retro099+is:pr+is:merged+is:public&sort=updated&order=desc&per_page=15', { signal: ctl.signal, headers: { 'User-Agent': 'site-build', Accept: 'application/vnd.github+json' } });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const items = (await r.json()).items
    .map(i => ({ repo: i.repository_url.split('/').pop(), title: i.title, url: i.html_url, date: i.closed_at?.slice(0,10) }))
    .filter(i => !i.repo.startsWith('preview-'))
    .sort((a,b) => b.date.localeCompare(a.date)).slice(0,5);
  if (!items.length) throw new Error('empty');
  fs.writeFileSync(out, JSON.stringify(items, null, 2));
  console.log('latest: fetched', items.length);
} catch (e) {
  if (!fs.existsSync(out)) fs.writeFileSync(out, '[]');
  console.log('latest: fallback (' + e.message + ')');
}
