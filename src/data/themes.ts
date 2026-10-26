// Optional per-passenger dialog themes. Add a theme here, then set `theme` on a passenger in voices.ts.
// Each theme is a soft decorative SVG drawn behind the dialog text. Colours come from CSS vars (--t1..--t4) set per light/dark.
export type Theme = { svg: string; light: Record<string,string>; dark: Record<string,string> };
export const themes: Record<string, Theme> = {
 // Saitama: Kawagoe bell tower (Toki no Kane) and Chichibu moss-phlox (shibazakura) fields, sakura and sky tones.
 saitama: {
  light: { '--t1':'#EAF2FB', '--t2':'#FBE6EE', '--t3':'#F6D3E0', '--t4':'#E7DDE6' },
  dark:  { '--t1':'#1F2631', '--t2':'#2A2329', '--t3':'#33272F', '--t4':'#2C2A33' },
  svg: `<svg viewBox="0 0 560 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
<rect width="560" height="320" fill="var(--t1)"/>
<g fill="var(--t4)"><rect x="472" y="150" width="34" height="130"/><path d="M460 152h58l-10-12h-38z"/><rect x="476" y="112" width="26" height="32"/><path d="M466 114h46l-10-12h-26z"/><rect x="480" y="80" width="18" height="26"/><path d="M470 82h38l-19-20z"/><rect x="488" y="48" width="2" height="16"/></g>
<path d="M0 250Q140 214 280 240T560 230V320H0Z" fill="var(--t2)"/>
<path d="M0 274Q160 244 300 268T560 258V320H0Z" fill="var(--t3)"/>
<path d="M0 296Q150 276 290 294T560 286V320H0Z" fill="var(--t2)"/>
</svg>` },
 // Shiga: Lake Biwa, soft blue water, gentle waves, far hills, a small boat and a heron.
 shiga: {
  light: { '--t1':'#EEF6FB', '--t2':'#D6EAF5', '--t3':'#BFDDEE', '--t4':'#DCE6EE' },
  dark:  { '--t1':'#1C2530', '--t2':'#1F2E3B', '--t3':'#243645', '--t4':'#2A3340' },
  svg: `<svg viewBox="0 0 560 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
<rect width="560" height="320" fill="var(--t1)"/>
<path d="M0 226Q90 196 180 214T360 206T560 212V240H0Z" fill="var(--t4)"/>
<rect y="236" width="560" height="84" fill="var(--t2)"/>
<path d="M0 262q35-8 70 0t70 0t70 0t70 0t70 0t70 0t70 0t70 0" stroke="var(--t3)" stroke-width="4" fill="none"/>
<path d="M0 290q35-8 70 0t70 0t70 0t70 0t70 0t70 0t70 0t70 0" stroke="var(--t3)" stroke-width="4" fill="none"/>
<g fill="var(--t4)"><path d="M388 250h56l-8 10h-40z"/><rect x="414" y="226" width="3" height="24"/><path d="M417 228l18 18h-18z"/></g>
<g stroke="var(--t4)" stroke-width="3" fill="none" stroke-linecap="round"><path d="M120 252v-22"/><path d="M126 252v-22"/></g>
<path d="M108 232q14-14 30-4l4-16q2-6 8-4l8 2-8 2q-4 6-4 14q-4 10-20 10z" fill="var(--t4)"/>
</svg>` },
};
