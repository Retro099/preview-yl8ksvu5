import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://retro099.github.io',
  base: '/preview-yl8ksvu5',
  i18n: { locales: ['en','ja'], defaultLocale: 'en', routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false } },
  build: { inlineStylesheets: 'always' },
});
