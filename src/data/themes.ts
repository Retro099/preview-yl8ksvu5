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
 // Later, data only: shiga: { light:{...}, dark:{...}, svg:`Lake Biwa water, gentle waves, a small boat` }
};
