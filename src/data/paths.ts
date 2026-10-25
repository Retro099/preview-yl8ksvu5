import { projects } from './projects';
export const paths = () => [{ params: { lang: 'en' } }, { params: { lang: 'ja' } }];
export const projectPaths = () => ['en','ja'].flatMap(lang => projects.map(p => ({ params: { lang, slug: p.slug } })));
