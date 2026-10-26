// Toggle furigana on recruiter-facing JA pages (home, about, projects, talk).
export const SHOW_RUBY_ON_RECRUITER_PAGES = false;
// Portrait on home. Off until a new unblurred crop (ears included) is approved. File kept at public/portrait.webp.
export const showPortrait = false;
// Writing stays reachable at /writing/ but is hidden from the main nav until the first post exists.
export const SHOW_WRITING_IN_NAV = true;
// Analytics: set PUBLIC_GOATCOUNTER_CODE (e.g. in the workflow env) to enable. Unset = no script.
export const GOATCOUNTER = import.meta.env.PUBLIC_GOATCOUNTER_CODE || '';
// Public contact (source: Notion apply email / signature; LinkedIn from Social bot files).
export const CONTACT = { email:'retro099@protonmail.com', gmail:'godfathertrictric@gmail.com', github:'https://github.com/Retro099', linkedin:'https://www.linkedin.com/in/retro099', topmate:'https://topmate.io/prithivi_raj_mohanta' };
