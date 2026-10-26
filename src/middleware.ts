import { defineMiddleware } from 'astro:middleware';
import { translateHtml } from './i18n/translate';
// FR/RU pages render the English branch, then English strings are swapped for French/Russian at build time.
export const onRequest = defineMiddleware(async (ctx, next) => {
  const m = ctx.url.pathname.match(/\/(fr|ru)\//);
  const res = await next();
  if (!m || !(res.headers.get('content-type') ?? 'text/html').includes('html')) return res;
  const html = await res.text();
  return new Response(translateHtml(html, m[1] as 'fr'|'ru'), { status: res.status, headers: res.headers });
});
