# REVIEW NOTES — v2 (2026-10-25)
Live (unlisted, noindex): https://retro099.github.io/preview-yl8ksvu5/en/ · https://retro099.github.io/preview-yl8ksvu5/ja/
Backup of v1: /workspace/site-backup-v1-2026-10-25.tgz

## What changed
- New nav: Projects · Writing · About · Advice · EN/日本語. Agent and Services pages removed.
- Home: hero (option A) → facts strip → 3 plain-title project cards (repo name small) → How I work → experience timeline → Writing ("starts after N2") → Contact.
- Case studies at /projects/<slug>: purpose / why this tech / what I did / result with test size / next / links (JA: 目的/技術選定の理由/工夫/結果/今後).
- New /now, /advice (single Topmate link, no prices), /writing, /about (自己紹介 / 技術スキル).
- All numbers come from src/data/metrics.json (hand-edited); copy reads from it.
- JA: です・ます, short sentences, ruby on hard kanji, English under every JA block.
- Daily rebuild already in the workflow (cron 06:00 IST); it does not touch metrics.

## DRAFT — please check
- ALL Japanese text is a DRAFT for your check (or the JLPT bot / a native checker).
- Hero wording (EN option A and the JA line).
- Education line is OMITTED: brief said "BPUT", source file says "GIFT, Bhubaneswar, May 2021". Which wording do you want, if any?
- Email: none in the source file marked public, so none on site. Want one?
- LinkedIn: no URL in the source file, so it's not linked yet. Send the URL.
- Military-family wording: not on the site. Book vs Social bot disagree; your call.
- Topmate pricing stays off the site (prices only on Topmate). Confirm.
- EN titles contain "Japanese" (one bot advised avoiding it); kept per your brief.
- CRM: unseen-attack result not shown on the card; mentioned only in words on the case study.

---
## v3 — "Washi Calm" (2026-10-25)
Backup of v2: /workspace/site-backup-v2-2026-10-25.tgz
- Palette cream #FAFAF7 / indigo #2B4C7E / warm #C8553D (N2 chip + learners door only); system fonts, body ≥16px, JA line-height 1.8, 44px tap targets, slim header, footer with build date.
- Home: one hero + portrait → facts strip → three doors (Recruiters: "Projects and contact" — no CV file exists; Learners: journey/now + quiet Advice/Topmate; Engineers: projects + GitHub).
- Project cards and case studies now have Metric/Result/Test size tables from metrics.json.
- Ruby: hidden on recruiter pages via SHOW_RUBY_ON_RECRUITER_PAGES in src/config.ts (CSS only, markup kept). /now and /writing keep ruby.
- GoatCounter: script loads only if PUBLIC_GOATCOUNTER_CODE is set (workflow reads repo variable GOATCOUNTER_CODE). Unset; no account made.
- Portrait: public/portrait.webp, 400px, 11.4KB, shoulders-up from src.jpg, background blurred via cutout mask; visually checked: no signs/cars/people. Has alt text.
- Verified: Actions success; 200 + noindex on EN/JA home and a project page; no horizontal overflow at 390px on 9 pages.
### Decisions needed
Education line (GIFT vs BPUT) · public email/LinkedIn URL · CV file · hero wording · military-family wording (currently omitted) · Topmate prices stay off · portrait OK? · GoatCounter sign-up if wanted.

---
## v3.1 — fix pass from Prithivi's phone review (2026-10-25)
Backup of v3: /workspace/site-backup-v3-2026-10-25.tgz
- Portrait off (config `showPortrait=false`; file kept). Redo later with an unblurred crop that keeps the ears.
- One name: header brand = "Prithivi" / 「プリティヴィ」; hero h1 = full name once (katakana on JA only). Other pages: h1 is the page title, no repeat.
- Hero: name → title line → one plain sentence. Facts strip: "Currently: In the hiring process with Japanese companies". "Visa sponsorship needed" moved to the recruiter door.
- Contact card (components/Contact.astro) on home + /about: retro099@protonmail.com, LinkedIn /in/retro099, GitHub, Topmate. No phone. The "GitHub is best" sentence was removed.
- Experience (data/profile.ts), newest first: Outlier AI Engineer (Contract) Jun 2024–present; self-employed Jul 2023–May 2024; GodSpeed Games Game Developer and Tester Jun 2022–Jun 2023 (Bunny Park, UE4/C++). The JLPT row was removed from the timeline. Education removed.
- Skills moved to the Projects page (includes game development).
- About rewritten (first person, facts only) and ends with the contact card.
- Writing: neutral "coming soon" line; hidden from the main nav (`SHOW_WRITING_IN_NAV=false`), still linked in the footer.
- JA pages are Japanese only. The J component keeps the English as an unrendered `en` prop. Translations are in JA-REVIEW-SHEET.md (not published).
- Now strip on home; /now says the CRM v1.1 evaluation run is in progress.
- Mobile spacing tightened; self-praise trimmed ("honest numbers" → "clear numbers").
- Verified: Actions success; 200 + noindex; no overflow at 390px on home/about/projects EN+JA.
### Notes / open
- Email: the public email was chosen from Notion (apply email and signature). Notion also lists Retro099@proton.me; confirm which one.
- LinkedIn URL is from the Social bot's Oct 14 snapshot (LinkedIn blocks automated checks, so it was not verified live).
- Sources say HelloTalk friends since Mar 2024; the brief's "learning Japanese since 2025" is not in the sources, so it was not used.

---
## v4 — living home page (2026-10-25)
Backup: /workspace/site-backup-v4-start-2026-10-25.tgz · git tag v3.1 (45adfd4) pushed · v4 commit 4167ab4.
- Header: small avatar mark + "Prithivi". Hero: hand-drawn SVG avatar (eyes follow pointer/touch, blink, head tilt, body shift; idles after 4 s; static with reduced motion or no JS) + full name once + title + plain sentence with the "Retro / old-fashioned" line.
- Three number tiles from metrics.json linking to project pages, with caveat line. Compact status line. Dated Now + "Latest on GitHub" (merged PRs via public search API at build time, scripts/fetch-latest.mjs, falls back to last file or a message).
- Doors, Experience, text contact row; footer "Updated <build date>". Projects grid and "How I work" removed from home (still on Projects pages).
- Revert: `git checkout v3.1` or restore the tarball.

---
## v4.2 — feedback pass (2026-10-25)
Backup: /workspace/site-backup-v41-2026-10-25.tgz · git tag v4.1 (9b2e5f4) pushed.
- Hero sentence: removed Retro / old-fashioned / social-media lines (EN+JA). Now: "I evaluate AI answers as a contractor and build small AI tools for Japanese text, and each project page shows how I tested it."
- Status strip: bordered label/value rows (label above value ≤420px, beside it 421–799px, 3 columns on desktop).
- Header on phones: brand + 日本語/EN pill on row 1, nav on row 2 (no wrap, scrolls if needed).
- Advice → "Talk with me" nav / "Book a 1:1 chat" page at /talk/ (JA 相談する / 1対1の相談), content from topmate.io/prithivi_raj_mohanta (route check 20 min, recruiter-call practice 30 min, written question 2-day reply; resumes & scout profiles). No prices. /advice/ meta-refreshes to /talk/.
- Favicon (svg + 32px png + apple-touch), OG/Twitter 1200x630 cards og-en.png / og-ja.png, per-page descriptions, canonical + x-default/en/ja hreflang (absolute with base path), 404 page. noindex kept.
- Verified (Playwright): 360/390/430/1280 × EN/JA × light/dark, all pages 200, no horizontal overflow, lang pill on brand row, status labels never wrap, name once in main.
- Not used from Topmate: "3+ years in AI/ML", "AI Engineer at Outlier" title wording, Wantedly link, "No fluff, bro".

---
## v4.3 — shorter number-tile labels (2026-10-25)
Backup: /workspace/site-backup-v43-start-2026-10-25.tgz · start commit 3895f4b (v4.2).
- Home tile labels shortened so each fits on one line at 390px (EN+JA, light+dark, checked with Playwright):
  - CRM: "Attacks that got through (before → after)" / 「攻撃が通った割合（対策の前→後）」
  - Search: "Japanese search: right passage in top 5" / 「文書検索で正解が上位5件に入った割合」
  - Fraud: "Fraud caught / alerts correct" / 「不正の検出率 / 警告の正しさ」
- Recall/precision wording stays on the project page. Numbers unchanged (metrics.json).
- Screenshots: site/screenshots/v43/. Revert: `git checkout v4.2`-equivalent commit 3895f4b or restore the tarball.

---
## v4.4 — dated Now items with verified facts (2026-10-25)
Backup: /workspace/site-backup-v44-start-2026-10-25.tgz · start commit a9af545 (v4.3).
- Home Now card and /now: heading "Updated 25 Oct 2026" / 「2026年10月25日 更新」.
- N2: started syllabus 2026-10-25 (Lesson 1); taking N2 on 6 Dec 2026 (from JLPT bot / Prithivi; not checked against admit card). No scores, no lesson counts, no study-since wording.
- CRM: larger evaluation with more tests in progress, currently paused; results later. As of 2026-10-25. No finish date, billing, or cost. "v1.1" wording removed.
- "Building this site" kept with no date (start date not verified).
- NowStrip component (not used on any page) updated to match.
- Screenshots: site/screenshots/v44/ (390px, EN/JA home + now, no overflow).
- Not changed: About still says "study Japanese every day" (EN/JA) — unverified "daily" claim; review.

## v4.5 — CRM Now item is running (2026-10-25)
Backup: /workspace/site-backup-v45-start-2026-10-25.tgz · start commit 0d64134 (v4.4).
- CRM Now item (home, /now, NowStrip; EN+JA): evaluation resumed 2026-10-25 and is running; all "paused"/一時停止 wording removed. As-of date kept 2026-10-25. No finish date, error, or cost.

## v4.6 — game developer role detail (2026-10-25)
Backup: /workspace/site-backup-v46-start-2026-10-25.tgz · start commit 607bddf (v4.5).
- Experience → GodSpeed Games line (data/profile.ts, EN+JA), from Prithivi's own words 2026-10-25: localization, testing whether the game worked on handheld devices, porting to handheld devices incl. touch controls. Kept existing role, dates, Remote/full-time, platforms.
- Confidentiality: Bunny Park named only as the game; no numbers, features, team size, shipped/sales claims.
- Projects skills row ('Game development (Unreal Engine 4, C++)') and About paragraph unchanged. About "every day" Japanese line confirmed by Prithivi 2026-10-25, stays.
- Screenshots: site/screenshots/v46/.

## v4.7 — flashcards + light Japanese-Indian theme (2026-10-25)
Backup: /workspace/site-backup-v47-start-2026-10-25.tgz · start commit 2b3fb84 (v4.6).
- Flashcards (components/FlashDeck.astro; home replaces number tiles, Projects replaces Card grid). Data: `flash` in data/projects.ts + metrics.json. Inline SVG art: meishi+hanko (CRM), book+bookmark+hanamaru (search), guard cat with magnifier (fraud). Tints indigo/sakura/turmeric, seigaiha corner. Flip: button + aria-pressed, inert on hidden face, focus moves; phones scroll-snap row + hint + dots; no-JS stacked; reduced motion crossfade.
- Chomp (components/Chomp.astro) above Say hello: blob eats dots, IO-paused, static with reduced motion/no JS, click restarts.
- Theme: paper grain, wave+marigold-dot dividers, hanko-square on h2, scroll tint ≤5% (CSS scroll-timeline, where supported), cursor petals (mouse only, ≤7, every 5th marigold).
- Space: hero two-column with 220px blob right (≥800px); side rail with section dots (home, ≥1280px); About margin note with Now facts (≥1100px); section gap 6rem→4.5rem; footer two-column.
- --warm light #C8553D→#B84C35 for AA text contrast (axe: 0 WCAG A/AA violations).
- Card element Card.astro kept but unused. Screenshots: screenshots/v47/ (before/ = v4.6 live).

## v4.8 (2026-10-25)
Talk page rebuilt: 3 featured Topmate offer cards (phone, recruiter bubbles, guide booklet SVGs), no prices, one See all button (new tab, rel=noopener). Old lead, How it works list and written-question card removed. Dark-mode .btn text changed to dark for contrast (sitewide fix).

## v4.9 (2026-10-25)
At 1024px and wider: the Projects skills list is a bento grid, the About page has a sticky side column (Now note, avatar, N2 countdown, GitHub activity from latest.json), and Home Experience is shown as 3 cards. Touch petals, an ambient background, card spotlight, a theme toggle, EN/JA 404 pages and a blob easter egg (5 taps) were added. Mobile page heights are the same as v4.8.

## v5.0 (25 Oct 2026)
- Talk: each featured card links to its own Topmate offer (2372881, 2374750, 2374571). "See all on Topmate" still goes to the profile. Added a small link to Work with me.
- New /work/ page (Work with me): intro, 5 service cards with SVG art and "Shown in:" proof links, How it works (3 steps), the no-logins/databases line, email + LinkedIn buttons. No prices, no response times.
- New /team/ page (AI agents that help me): 7 blob-character flip cards (owner's wording verbatim), What agents do here / What I do, and a real version history from git tags (times IST). No vendor names.
- Nav: "Work with me" (JA 依頼) added; fits at 390 px in EN and JA. Footer: Work with me + Team of agents.
- Home: Work with me strip + team teaser (3 mini characters) side by side on desktop.
- axe 0 issues on home/talk/work/team, EN+JA, light+dark, 390+1440. No horizontal scroll.

## v5.1 (26 Oct 2026)
- Light is now the default for every visitor; the system dark setting is ignored. Dark appears only after the toggle (stored in localStorage 'theme'). The head script sets data-theme before paint, so there is no flash. The prefers-color-scheme dark CSS is removed.
- Dark polish: ambient glows about half as strong, seigaiha at .035 in a light stroke (it was invisible indigo), lighter card surfaces (#1E2228), clearer borders (#3A4049), soft card shadows, brighter turmeric/saffron, flashcard and offer cards get a tint-coloured bottom edge, SVG art slightly desaturated.
- axe 0 on Home/Projects/About/Talk/Work/Team, EN+JA, light+dark, 390+1440; no horizontal scroll.

## v5.2 (2026-10-26 IST)
- Home: "From a Japanese friend" / 日本の友だちの声 block (src/data/voices.ts, components/Voices.astro). Two quotes, word for word, credited to 日本人30歳女性 with her permission. The EN page adds an English meaning marked as a translation. Styled as a lined stationery card with a 声 hanko stamp.
- About: an "At a glance" dl near the top (EN and JA). It stacks on narrow screens.
- Projects/Skills: each skill gets a "How this helps a company" line built from metrics.json, with a link to its project. Python and Game development have no line (no real example).
- Checks: 48 screenshots in screenshots/v52; axe 0 issues; no overflow at 390.

## v5.3 (2026-10-26 IST): comment train + friend avatar
- Home testimonial area: a steam train drawn in code (inline SVG + CSS, no images or audio files). The cabins are built from `passengers` in src/data/voices.ts, so adding an object adds a cabin.
- One passenger, 日本人30歳女性: a code-drawn avatar (black hair below the shoulders, slim, drum and two sticks). Her cabin plate reads 埼玉ゆき, a subtle Saitama hint. No name, company or workplace.
- Tapping the passenger (a real button, 56x46 at 390) makes the sticks hit the drum, then opens a native modal dialog with a blurred backdrop. The dialog shows the original quotes word for word, a translation toggle (the English is marked as a translation) and a caption. It closes with the button, ×, a backdrop click or Esc. Focus is trapped and goes back to the passenger.
- Sound: Web Audio only (drum and whistle). Nothing plays before a user tap. The whistle plays on the first scroll-in only if the page was already tapped. A Sound toggle is saved in localStorage ('sound'). No sound and no motion with prefers-reduced-motion.
- Motion: the train drives in with a transform (no CLS). Wheels, chug and smoke puffs with letters (aria-hidden) run only while the section is visible.
- Fallbacks: no JS shows the old static card. Reduced motion shows a static train. Quotes are also in sr-only text.
- Checks: screenshots in screenshots/v53 (train-*, dialog-*, train-reduced-390, nojs-390, plus all pages); axe 0 issues; no overflow.

## v5.4 (2026-10-26 IST)
- Honk button next to Sound (EN "Honk", JA ポーッ, whistle icon, 44px high, aria-label per language). It plays the synthesized whistle only on a tap and only if Sound is on, with a shake and puffs. With reduced motion there is no animation, but a tap still plays the sound if Sound is on.
- Polish: more space above the train, and puffs rise less (80px) and are clipped at 96px, so they stay off the permission text. The dialog is more compact under 480px; at 390x900 it no longer scrolls with the translation open.
- Screenshots: screenshots/v54 (4 train shots + dialog-en-light-390). axe 0 on Home EN/JA; no overflow.
- v5.4.1: Honk and Sound restyled as one railway-sign control group under the train: maroon (#8C3A45) pills with cream text (contrast about 8:1), dashed brass edge, black-engine rail around them, brass whistle icon. Same look in light and dark; Sound off turns slate grey. 44px high.
- v5.4.1: project flashcards (Home + Projects, same component) now have equal heights on desktop (≥800px), and "Tap to flip" sits at the bottom. Measured 480px x3 at 1440/1100 EN, 486px x3 JA dark 1100. The mobile carousel is unchanged. Screenshots: screenshots/v54/cards-en-light-1440.png, cards-en-light-1100.png. (v5.4 was already pushed, so this ships as v5.4.1 rather than moving the tag.)

## v5.5 (2026-10-26 IST): wording pass, EN + JA
- Removed all 14 long dashes from the site text (titles, card title, share-image alt text, Now, the friend label line, date ranges). Normal range dashes like 2022–2023, the JA ー and compound-word hyphens stay.
- Rewrote 8 sentences in plainer words (5 EN, 3 JA). The full before/after list is in WORDING-V55-CHANGES.md, with a "needs Prithivi's call" list (the Outlier sentence was left unchanged).
- No changes to numbers, names, URLs, friend quotes or layout. axe 0 and no sideways scroll on 6 pages, EN + JA, 390 light. Screenshots: screenshots/v55 (home, about, work).
- Backup: /workspace/site-backup-v55-start-2026-10-26.tgz

## v6.0 (2026-10-26 IST): French and Russian
- New locales /fr/ and /ru/ for every page (Home, Projects + 3 project pages, About, Talk, Work, Team, Now, Writing, Advice, 404).
- How: pages render the EN branch; src/middleware.ts + src/i18n/translate.ts swap exact EN strings with src/i18n/fr.json and ru.json (337 strings) at build time, and set lang="fr"/"ru".
- Language switch: 🌐 menu with 4 languages (fits at 390), choice saved in localStorage "lang", hreflang for en/ja/fr/ru. No auto-redirect, root unchanged, still noindex + robots disallow.
- Kept original: names, project/tech names, friend's Japanese quotes (FR/RU meaning shown as a translation), animation texts, smoke letters, 埼玉ゆき plate, GitHub commit messages.
- Checks: axe wcag2a/aa 0 violations and no horizontal scroll on all FR and RU pages at 390 light; no overflow at 1440. EN/JA unchanged.
- Screenshots: screenshots/v60/. Review sheet: FR-RU-REVIEW-SHEET.md (first draft).
- Restore: /workspace/site-backup-v60-start-2026-10-26.tgz or git checkout v5.5.

## v6.1 (2026-10-26)
- J: Saitama friend avatar stages (school band, college/law, online with friends, teaching Japanese, now with her dog). Drum ~5 s, then 2.5 s per stage; pauses off-screen and while the dialog is open; no auto cycling under reduced motion. Tap her picture in the dialog = next stage + drum (Sound on only). Captions in 4 languages; no job, employer, name or town.
- K: optional per-passenger dialog theme (src/data/themes.ts). Saitama: bell tower + shibazakura field, light/dark. Shiga can be added later by data only (no Shiga passenger yet).
- M: scripted tour guide (left-edge tab "Need help?", menu Tour/Projects/Contact, 7 steps). × remembers via localStorage guide=off; footer "Help" reopens. Hides when a dialog or the language menu is open, and near the footer.
- N: Team page: tap a card to hear the name (SpeechSynthesis, page language, Sound on only, silent with no voice). Speaker icon on each card.
- O: root URL picks ja/fr/ru/en from navigator.languages (saved 'lang' wins) with location.replace; direct links never redirect; noscript link list; still noindex, robots Disallow.
- Checks at 390: axe 0 on Home EN/JA/FR/RU light, EN dark, dialog (light+dark), guide menu, tour step. No horizontal scroll in 4 languages. Screenshots: screenshots/v61/.
- Unsure: stage tap is on the dialog avatar (a tap on the train opens the dialog); guide tab can overlap content edge on mobile; dialog bell tower is subtle.

## v6.2 (2026-10-26) fixes from real device feedback
1. Train/avatar: carriage plate, stage captions and the chalkboard text removed. Dialog shows only 日本人30歳女性 above the verbatim quote. Neutral labels.
2. Drum: sticks drum for 3 s on load of the dialog/train avatar, then stages cycle. Tap advances and beats. Sound only on tap with Sound on.
3. Stage transitions: 0.8 s ease-in-out cross fade with slight scale; dwell 2.5 s; instant under reduced motion.
4. Auto honk removed. Cause: any pointerdown/keydown anywhere set an "unlocked" flag, and the train's IntersectionObserver whistled when it came into view on every page load. Test: 0 AudioContext and 0 oscillators across load, language switch, navigation away and back.
5. Guide: thought bubble cloud with two dots, "Want a tour of the site?" in 4 languages, once per session, opens the menu.
6. Guide visible on every page at 1280, 1440 and 390. Cause: the footer observer faded it to opacity 0 whenever the footer was visible (short pages on desktop), and the tab sat about 83 px off screen. Help added to the top nav; ?guide=on clears guide=off.
7. Team cards compact (no stacked hidden face).
8. Agent voices: Web Audio babble per agent, no speech synthesis, tap only with Sound on. See SOUND-CREDITS.md.
9. Overlap check on 6 pages x 4 languages x 390/1280: clean after excluding screen reader text. Agents renamed Pip, Sora, Fumi, Bit, Chatti, Tabi, Niwa with job lines.
- v6.2.1 (2026-10-26): agent names matched to roles (Tabi = programs, Fumi = CVs and documents, Sora job line = job search in Japan); 9 FR/RU and 1 JA wording fixes, see review sheets.
- v6.2.2 (2026-10-26): removed all exam mentions (JLPT level, exam date, countdown) in EN/JA/FR/RU at the owner's request; neutral wording "I study Japanese every day"; Pip text and job line neutralised; review sheets updated.
- v6.3 (2026-10-26): Shiga friend (日本人女性, Lake Biwa theme, original sleepy forest creature, 5 stages), Saitama kind-friend line and Pikachu line restored/added, Help renamed Site guide with compass, start line on Home, npm run check:i18n in build.
- v6.3.1 (2026-10-26): compact mobile header (logo, theme, 🌐, compass Site guide, menu button with full-width page list, aria-expanded, Esc closes); fixed axe label-content-name-mismatch on language summary and flip cards.
- v6.3.2 (2026-10-26): removed belittling 'small' wording about his work in EN/JA/FR/RU (start line, Home lead and work strip, About, Work, experience line, tour, roadmap demo line, review sheets). Test-size caveats kept.
- v6.4 (2026-10-26): Home repositioned: AI/ML engineer headline with years (owner confirmed), real-work subline, 'How this helps a company' skills block first, projects framed as proof of method; 'portfolio' removed from site text (only the friend's verbatim quote keeps it); mobile header brand now shrinks so the row never wraps.
- v6.4.1 (2026-10-26): Home subline no longer implies games came right before AI; now 'I also have game development experience from a full-time job with a team.' (4 languages). Meta and About had no ordering claim.
- v6.4.2 (2026-10-26): removed the Home 'How this helps a company' block (5 skill cards and Also line) and its side menu Skills link in all 4 languages, at Prithivi's request; unused i18n keys removed. Projects intro unchanged (did not refer to the block).
- v6.5 (2026-10-26): Home subline first sentence only, facts strip, visa line and Home experience timeline removed; one contact icon component (Proton Mail, Gmail, LinkedIn, GitHub, Topmate) on Home, About, Work and footer; 'My team of agents' rename; About rewritten in his voice without dates or Baripada/Odisha, full tools list; Work offers rewritten and logins line deleted; designed headers on About, Team, Writing, Work; Writing in nav; Tabi generic; RU flip hint shortened. Checks: check:i18n OK, no sideways scroll at 1280/390/iPhone 13/Pixel 7 light and dark, axe Home EN 0 violations.
