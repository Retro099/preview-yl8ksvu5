# Site state v6.4.2 (saved 2026-10-26 evening, IST)

Read from the real source in /workspace/site-publish and the built pages. No site changes were made while saving this.

## 1. Where it lives
- Live (unlisted preview): https://retro099.github.io/preview-yl8ksvu5/ with /en/ /ja/ /fr/ /ru/
- Repo: github.com/Retro099/preview-yl8ksvu5, branch main
- Current: tag v6.4.2 = commit 0907ecf (deployed 2026-10-26 15:45 IST)
- Working copy: /workspace/site-publish (has .git). Mirror: /workspace/site
- Stack: Astro static site, GitHub Pages. The workflow runs on push to main, daily at 06:00 IST (cron 30 0 * * *), and on manual dispatch. GoatCounter code comes from the repo variable GOATCOUNTER_CODE (not set up yet).

## 2. Build, deploy, restore
- Build: `npm run build` = fetch-repos.mjs, fetch-latest.mjs, astro build, then scripts/check-i18n.mjs (exits 1 on a problem).
- Preview: `npx astro preview --port 4329`, open /preview-yl8ksvu5/en/
- Deploy: commit, `git tag vX.Y.Z`, `git push origin HEAD --tags`, then check `gh run list -L 1` and curl the live pages.
- Restore: `git checkout <tag>` (e.g. v6.4.1), build and push to main (or dispatch the workflow). Never force-move a pushed tag; fixes go out as point tags.
- Source archive: site-source-v6.4.2.tgz in the Drive folder "Website state".

## 3. Global layout
- Header: brand "Prithivi" with the avatar, a "Site guide" button and a "Menu" button on mobile (compact header; aria-expanded, Esc closes it).
- Main nav: Projects, About, Talk with me, Work with me, Site guide, and a language switch (🌐 EN/日本語/Français/Русский). **Writing is not in the nav.**
- Footer links: Projects, Now, Writing, About, Work with me, AI tools (= Team page), GitHub, 1:1 chat (Topmate). Then "Updated 2026-10-26 · Built with Astro, hosted on GitHub Pages" and "© 2026 Prithivi Raj Mohanta · Site guide".
- Theme: light by default. Dark is set by html[data-theme] from an inline head script (localStorage 'theme'); without JS it follows prefers-color-scheme. Palette is Washi Calm with sakura, turmeric #D9A441 and saffron #E8873A (about 10%). Rust text is #B84C35.
- Effects: touch petals (pool of max 13, 1.7 s timeout), cursor trail on mouse devices only, ambient background. All static with reduced motion or no JS.
- Root / page: picks the language from the browser and remembers a manual choice (localStorage 'lang').
- 404: the root 404 redirects /ja/ paths to /ja/404/.

## 4. Pages as they are now (EN wording; JA/FR/RU match)
### Home /[lang]/
- Side rail "On this page": Projects, Now, Experience, Say hello (Skills link removed in v6.4.2).
- Hero: "Hello, I'm Prithivi Raj Mohanta". Title "AI/ML engineer. About 4 years in software, the last 2.5 in AI and LLM work."
- Subline: "I build and test AI for real work: Japanese documents, evaluation and security testing. I also have game development experience from a full-time job with a team." (He wants the second sentence removed, see H1.)
- Start line: "This is my home on the web: my work, projects and guidance. Not sure where to start? Tap Site guide".
- Projects: "Projects: what each one shows" with the intro "Each project shows how I work: how I test, how I measure, and how I find the weak spots." Then the FlashDeck (3 flip cards, see 4.2) and the note "All three come from small tests. Each project page explains the setup and the weak spots."
- Facts strip: Based "Odisha, India (remote)" · Japanese "I study Japanese every day" · Currently "In the hiring process with Japanese companies". (He wants this changed, see H4.)
- Now (updated 25 Oct 2026): I study Japanese every day; CRM larger evaluation run in progress; Building this site. Link to the Now page.
- Latest on GitHub: the last 5 public commits from latest.json, plus "All activity on GitHub".
- Three doors: For recruiters ("Projects with measured results, work history and contact details. Visa sponsorship needed." Work history →) · For learners (Now page, Topmate 1:1) · For engineers (Projects, GitHub).
- Comment train (data-train): "From Japanese friends. Shared with their permission. Tap a window to read a comment." It has a Honk button and a "Sound: on/off" toggle. Opening a window shows a themed dialog with the original Japanese, a "Show English translation" button and Close.
- Paid work line: "I also take on paid projects: AI tools, AI testing and websites. Work with me", then a team teaser link "AI tools that help me →".
- Experience (Experience.astro):
  - AI Engineer (Contract) · Outlier (Scale AI), Jun 2024 to present: "Remote. LLM evaluation, including safety testing and multimodal tasks."
  - AI Engineer (self-employed), Jul 2023 to May 2024: "Data-science and data-cleaning projects through Turing, Mercor and MicroOne."
  - Game Developer and Tester · GodSpeed Games Pvt Ltd, Jun 2022 to Jun 2023: "Remote, full-time. Worked on the game Bunny Park (Xbox, PS4 and PC) in Unreal Engine 4 and C++: localization, handheld testing and porting incl. touch controls."
- Say hello: email retro099@protonmail.com, LinkedIn, GitHub, 1:1 chat (Topmate).

### 4.2 Projects /[lang]/projects/
- FlashDeck: "← Swipe · tap a card to flip →". Each front has a title, one headline number, a "Helps ..." line and "Tap to flip ↻". The back has What it does, two metrics, "Where it falls short", and Full details → / GitHub / (Demo) / ↺ Front.
  1. Turning Japanese sales meetings into CRM fields, safely: 60.0% exact match (90/150 fields, 30 notes); attacks through 45% → 6.7% with defenses (40 self-written attacks). Has a demo.
  2. Finding the right page in Japanese documents: hit@5 0.98, MRR 0.87 (42 questions, 15 checked by hand, one report).
  3. Spotting credit-card fraud: recall 0.84, precision 0.88 (Kaggle ULB, 0.172% fraud).
- Detail pages: /projects/meeting-notes-to-crm, /japanese-document-search, /credit-card-fraud. They are technical (purpose, why this tech, what I did myself, result, next) with no "how it helps a company" opening (see P2).
- Skills section: each skill has "How this helps a company: ..." and an underlined "See the project" link. Skills: LLM evaluation and safety testing · Python · RAG and search for Japanese text (bge-m3, BM25, ChromaDB) · LLM information extraction (Qwen-2.5-72B) · Machine learning (XGBoost, SHAP) · FastAPI, Streamlit, Docker, automated tests (CI) · Game development (Unreal Engine 4, C++). Python and Game development have no text under them (see P3).

### Work with me /[lang]/work/
- Intro: "I take on paid projects. Tell me what you need, and I reply to each request with a quote."
- What I can make: Turn messy text into clean fields · Search over your documents · Test your AI's answers · An interactive website ("Ask me") · Spot fraud in payment data. Each has a "Shown in:" link.
- How it works: 3 steps (tell me, scope and quote, build and show progress). Then "Right now I do not build sites with user logins and databases." (to be deleted, W2).
- Get in touch: Email me, LinkedIn. No prices and no response-time promises.

### Team of agents /[lang]/team/ (title "AI tools that help me")
- "I decide and check everything myself." TeamDeck has 7 flip cards; the back has a self-intro and "One real thing":
  - Pip: Japanese study plans
  - Sora: job search in Japan
  - Bit: GitHub projects
  - Tabi: programs and applications (scholarships/fellowships/exchange)
  - Fumi: CVs outside Japan
  - Chatti: Topmate page
  - Niwa: builds and checks this website
- Names are localized (JA ピップ/そら/ビット/たび/ふみ/チャッティ/にわ; FR/RU have their own forms, e.g. Chati in FR). Tap sounds are Web Audio tones when Sound is on.
- Sections: What agents do here (research, drafting, tracking study, building and testing code) · What I do (decide, check every claim, send everything myself) · How this site was built (version history from git tags, IST times).
- Rule: never name a vendor and never say autonomous. Card texts are his wording (JA in src/data/team.ts).

### About /[lang]/about/
- Facts box (the big white box):
  - Name
  - Based Odisha, India (works remotely)
  - Current work: AI Engineer (Contract) at Outlier (Scale AI), since Jun 2024
  - Before: game dev 2022–2023, self-employed data work 2023–2024
  - Languages: Hindi, English, Bengali, Odia, studying Japanese
  - Studying: Japanese every day
  - Main tools: Python, Japanese search and RAG (bge-m3, BM25), LLM information extraction, XGBoost, Streamlit, Docker
  - Projects
  - Contact: email
- Story paragraphs:
  - Engineer from Baripada in Odisha, all remote.
  - Tekken led to GodSpeed Games (dates), Bunny Park, UE4/C++.
  - Machine learning led to self-employed data-science/data-cleaning (dates).
  - Outlier since Jun 2024.
  - Anime, and HelloTalk friends since Mar 2024.
  - Studies Japanese daily, in the hiring process with Japanese companies, 4 languages.
- Contact section (Email/LinkedIn/GitHub/Topmate as text links), Now (25 Oct 2026), and Recent GitHub activity (chart from latest.json).

### Talk with me /[lang]/talk/
- 3 Topmate cards:
  - Japan from India: your route check (20 min)
  - Recruiter call ready (25-question kit + 30-min call)
  - Japan from India: Route Guide (4 pages)
- Groups: Japan routes / Japan job prep. "See all on Topmate ↗". No prices and no Best Seller tags. Links go to topmate.io/prithivi_raj_mohanta with target=_blank rel=noopener.

### Writing /[lang]/writing/
- "Weekly Japanese study notes and project write-ups. The first posts are coming soon." No posts.

### Now /[lang]/now/
- Same Now items, updated 25 Oct 2026.

### /[lang]/advice/
- A redirect stub to Talk ("Book a 1:1 chat").

## 5. Interactive parts
- Site guide (Guide.astro): a scripted tour in 4 languages, not an AI chat. The bubble asks "Want a tour of the site?" with ×, then options: Tour of the site / Projects / Contact. Controls: Back / Next / End. Tour targets in order: .brand, nav Projects, nav About, nav Work, nav Talk, footer Team link, [data-train]. Dismissal is stored in localStorage 'guide'; it can be reopened from "Site guide". Mobile bugs: see H2.
- Comment train (Voices.astro), data in src/data/voices.ts. **Currently 2 passengers with 3 quotes (3 windows)**:
  - f1 日本人30歳女性 (Japanese woman, 30). Caption "Always ready to help, a very kind and very sweet friend" / いつも力になってくれる、とてもやさしい友だち. "She likes Pikachu". Cabin 埼玉ゆき; drum avatar with life stages (tap her picture to change it); theme saitama (Kawagoe bell tower, shibazakura). 2 quotes.
  - f2 日本人女性 (Shiga friend). Original sleepy forest creature with 5 stages, scissors emblem, theme shiga (Lake Biwa, boat, heron). 1 quote.
  - Quotes are verbatim Japanese; the English is marked as translation.
- Themes (src/data/themes.ts): per-passenger dialog SVG backgrounds with light/dark CSS variables --t1..--t4.
- Sounds: all generated live with the Web Audio API (no audio files; SOUND-CREDITS.md). They play only after a user tap, only when Sound is on (localStorage 'sound'), and never with reduced motion. There is no auto honk.
- Flip decks (FlashDeck.astro, TeamDeck.astro): tap to flip, swipe horizontally. Known issues: T1.

## 6. Data and i18n
- metrics.json:
  - crm: 60.0%, 90/150, 30 notes, 45% → 6.7%, 40 attacks
  - rag: 0.98 hit@5, 0.87 MRR, 42 questions, 15 hand-checked
  - fraud: 0.84 recall, 0.88 precision, 0.172% fraud
  - Every number shown on the site comes from this file.
- Other data: profile.ts (skills tuples: en, ja, helps-en, helps-ja, slug), projects.ts, team.ts, voices.ts, themes.ts, paths.ts. repos.json and latest.json are fetched at build time.
- i18n:
  - EN and JA are inline ternaries in the .astro files.
  - FR and RU come from EN-keyed dictionaries src/i18n/fr.json and ru.json, generated from /workspace/i18n/t*.py (python3 gen.py).
  - check:i18n checks that FR and RU have the same keys with none empty, and that no English text is left untranslated on JA/FR/RU pages (with an ALLOW list, lang="en" spans and translate="no" commit titles as exceptions).

## 7. Standing rules
- Build only when Prithivi says build; one item per release; fixes go out as point tags; never force-move tags.
- Allowed work facts only: GodSpeed Games (Jun 2022 to Jun 2023, full-time, UE4/C++); self-employed (Jul 2023 to May 2024); current remote contract AI evaluation in the approved wording. Never describe its tasks, never give an end date.
- Bunny Park: name only plus UE4/C++, localization, handheld testing, porting incl. touch controls. No numbers or sales.
- Positioning (locked 2026-10-26): AI/ML engineer, about 4 years in software, the last about 2.5 in AI and LLM work. Never call his work small, tiny, beginner, demo or fresher-level. Never call the site a "portfolio" (the friend's verbatim quote is the only exception). Projects show method; jobs are the production evidence.
- No JLPT or N2 anywhere. No exam mentions.
- Keep-off list: the friend's name, company, workplace and "accountant", plus any unverified personal detail. Her label stays 日本人30歳女性.
- Style: no long dashes; no self-praise adjectives; no vendor names (Team page); no "autonomous"; no labels under the train; no new personal facts or achievements; light theme is the default.
- No website link on any profile until a domain is owned (domain deferred until Topmate earnings).
- Sound only after a tap, with a mute; static with reduced motion; no JS still works.
- Public email is lowercase retro099@protonmail.com; LinkedIn is linkedin.com/in/retro099.
- Save to Notion first so any break can be reverted.
- Other bots get positioning as knowledge only and must not edit profiles or repos unless Prithivi asks in their chat.

## 8. Release list
- v1 (2026-10-25, (none) 33f6b1c): Unlisted draft site
- v1 fix (2026-10-25, (none) 1bbcb17): Fix base-path frontmatter and hide preview repos
- v2 (2026-10-25, (none) 0847420): Research-driven structure with case studies and metrics.json
- v3 (2026-10-25, (none) 5548e6a): Washi Calm design with doors and results tables
- v3.1 (2026-10-25, v3.1): One name and contact card and game dev experience and JA-only pages
- v3.1 fix (2026-10-25, (none) 45adfd4): Fix page title leaking as visible text
- v4 (2026-10-25, v4): Living home page with interactive avatar and dated Now and GitHub feed
- v4.1 (2026-10-25, v4.1): Blob avatar with pointer-following eyes
- v4.2 (2026-10-25, (none) 3895f4b): Plain hero and Talk page and favicon and share cards and hreflang and 404
- v4.3 (2026-10-25, v4.3): Shorten fraud tile label
- v4.4 (2026-10-25, v4.4): Dated Now items with verified facts
- v4.5 (2026-10-25, v4.5): CRM Now item marked running
- v4.6 (2026-10-25, v4.6): Game developer role detail
- v4.7 (2026-10-25, v4.7): Flashcard project cards and light Japanese-Indian theme
- v4.8 (2026-10-25, v4.8): Talk page with 3 Topmate offer cards
- v4.9 (2026-10-25, v4.9): Touch petals and ambient background and theme toggle and easter egg
- v4.10 (2026-10-25, v4.10): Continuous touch petal trail
- v5.0 (2026-10-25, v5.0): Work with me page and Team of agents page
- v5.1 (2026-10-26, v5.1): Light theme by default and cleaner dark theme
- v5.2 (2026-10-26, v5.2): Friend voice block and About at a glance
- v5.3 (2026-10-26, v5.3): Comment train with friend passenger and drum avatar
- v5.4 (2026-10-26, v5.4): Honk button and compact mobile dialog
- v5.4.1 (2026-10-26, v5.4.1): Train Honk/Sound group and equal-height flashcards
- v5.5 (2026-10-26, v5.5): Wording pass with no long dashes
- v6.0 (2026-10-26, v6.0): French and Russian versions with 4-language switch
- v6.1 (2026-10-26, v6.1): Friend life stages and Saitama dialog theme and tour guide and spoken agent names and auto language
- v6.2 (2026-10-26): Fixes from real device feedback: no auto honk, guide visible on desktop, thought bubble, drumming, agent names
- v6.2.1 (2026-10-26): Agent names matched to roles, FR/RU/JA wording fixes
- v6.2.2 (2026-10-26): Removed exam mentions
- v6.3 (2026-10-26): Shiga friend, Site guide, start line, i18n check
- v6.3.1 (2026-10-26): Compact mobile header, axe name fix
- v6.3.2 (2026-10-26): Neutral wording, no small for his work
- v6.4 (2026-10-26): Home positioning: AI/ML engineer, company value first
- v6.4.1 (2026-10-26): Subline order fix
- v6.4.2 (2026-10-26): Removed Home company-value block

## 9. Known issues he reported (2026-10-26 evening)
- **Guide on mobile:**
  - Next does not scroll to targets; only the first and last steps work.
  - The bubble overlaps the team block and the train.
  - The highlight outline on the team block looks odd.
  - Tapping × sometimes taps through to the page underneath.
- **Project cards:** different heights on mobile (equal on desktop).
- **Team flip cards:** different sizes after flipping on mobile. A flipped card stays flipped. You must tap a certain spot to flip back.
- **Train on mobile:** passengers appear outside the windows, on the wheels.
- **Projects Skills section:** unclear which text belongs to which skill. Python and Game development (UE4, C++) are blank.
- **RU:** the Study card hint "swipe to flip" wraps to 2 lines.
- **Nav:** Writing is missing. Page headers look unfinished.
- **Underlined links:** text links everywhere. About has two contact blocks.
- Full list and his wishes: BACKLOG-2026-10-26-evening.md.
