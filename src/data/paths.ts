import { projects } from './projects';
export const paths = () => ['en','ja','fr','ru'].map(lang => ({ params: { lang } }));
export const projectPaths = () => ['en','ja','fr','ru'].flatMap(lang => projects.map(p => ({ params: { lang, slug: p.slug } })));
