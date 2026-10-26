# Website ideas queue (do not build until Prithivi says "build")
Added 2026-10-26

1. Friend comments "train" at the bottom: slow drifting row, fades at the edges; tap a comment -> full comment opens in front, everything behind blurs. EN page shows English translation (marked as translation), JA page shows the original.
2. Avatar for each friend (first: Japanese woman, 30, drum + sticks). Drumstick sound only when tapped, with a mute. Check with her what personal details may be shown (she only allowed the label 日本人30歳女性).
3. Animated version history (v1 -> v5.x): side rail on desktop; tap a version to open how it was decided and which bot or person did what (true facts only, from git tags and notes).
4. News strip in empty home space, from the local agent system's API (headlines + links out). Phone: collapsible or swipe.
5. Add the autonomous local agent (runs on a trigger or schedule) to Work and Team pages, with only verified claims.
6. Feedback already done in v5.2: About table, skill -> company use lines. More feedback to come, then batch.

## Update 2026-10-26 (Prithivi, long message) - detailed ideas, NOT built yet
A. Version history = serious production workflow (vertical or side scroll; tap a version -> real process: backup tag, build, axe accessibility check, screenshot matrix EN/JA light/dark 390/1440, git tag, deploy verified, rollback point). Facts only.
B. Comment train = a real cute Japanese steam locomotive (SL style). Smoke puffs carry small comment letters. Passengers in the cabins = the friends who commented; first passenger = Japanese woman, 30 (black hair, drum + sticks, drum sound on tap, maybe a Saitama hint e.g. railway museum, check with her first). Tap passenger -> card with ORIGINAL comment, unchanged, plus a translate option. Whistle when the section scrolls into view (browser may block sound before first tap; visual fallback). Real comment text must also be readable by screen readers.
C. Site guide avatar (his avatar, more interactive): hides at an edge with a sticky note "need help?"; tap -> 2-3 options (tour, projects, contact, Japan). Scripted, not an AI chat. Must never overlap content.
D. Team page = classroom: agents chat and giggle, sit when visitor arrives, one raises a hand, tap -> others laugh; idle 10s -> one falls asleep. Tap an agent -> blurred background card: self-intro, what it can do, past work (public-safe only), small chips for contributions to this site. Light, runs only when visible, sounds optional and tiny. Team section gets a soft glow. Note: roles are assignments from Prithivi; any agent could do any task.
E. Project workflow panels: "Watch the workflow" button on each project card (CRM, fraud, RAG, local agent pipeline). Built in code (not Canva) so EN/JA and light/dark work. Show how it works from real code; no invented results.
F. About section: needs a proper self-introduction; Prithivi will write/decide, I draft.
G. Local agent pipeline + news strip on home.
Plan: one thing per release, at most one release per day.

H. Auto language (2026-10-26): on a visitor's first visit to the root URL, pick JA if their browser language list starts with Japanese, else EN. Use browser language (navigator.languages), not IP. Remember a manual language choice (localStorage) and never override it. Bundle with the analytics release (small).

I. Feedback #2 (2026-10-26, friend in Shiga, receptionist; permission to quote being asked, NOT yet given; no avatar/face, she is shy):
   Her words (JA, verbatim): "Retroが作ったWebサイト、可愛さがあってあなたの優しさが滲み出ていて、すばらしいのは理解できました。1、2、3、5 よく出来たwebサイトだと分かったんだけど、私はこの分野に全然関わったことがなくて……他のツールとどう違うのか比べたりできないので、評価できません。 / 日本人の誰に見てもらいたいのかわからないけど、素直な感想を言うと、今のデザインは🩷🧡💛色ですっごく可愛いイメージだから、「若者向け・簡単に操作できる」感じがすごく出てます。もし仮に、シャープで🩵💙💚🩶系の色を使って「かっこいいバージョン（知的・ハイクオリティなイメージ）」があったら、また雰囲気がガラリと変わりそう。いっそ2つのバージョンを作ってみて、どっちが好みか選んでもらうのも面白いかも！？"
   Reading: (1) warmth comes through; (2) she could not judge what the site does, so non-engineers don't see the value; (3) she did not know who the site is for; (4) the warm pink/orange/yellow palette reads as young/easy, not "smart, high quality" for a business audience; (5) she suggests a cool-colour second version and letting people choose.
   Proposed (not built): a) "Who this site is for" line + one plain sentence for non-engineers at the top of Home (EN/JA); b) optional cool "Ink" palette (blue/teal/slate/grey) as a switch via CSS variables (cheap); use analytics to see which people choose; keep the default until more feedback.

## 2026-10-26 afternoon: v6.1 plan (after v6.0 FR/RU finishes). Prithivi wants friends to see more before he sends the link (he can only ask them once).
J. Saitama friend avatar life-stage transitions (auto every 2-3 s after first ~5 s drumming; tap = next immediately; reduced motion = still): 1) school band drummer (drum+sticks), 2) college, studied law, 3) online on HelloTalk, social/creator, 4) teacher of Japanese, 5) final frame: with her dog. He also said "now an accountant", BUT earlier (2026-10-26) he said NOT to mention accountant on the site. Decision: omit accountant; can be added if he says so. No name/company/workplace.
K. Prefecture-themed comment pop-up: each friend's dialog has a background feel of her prefecture. Saitama: Kawagoe bell tower (Toki no Kane), Chichibu pink moss-phlox fields, Ōmiya railway/bonsai touches, subtle. Shiga: Lake Biwa (she told him), blue water, gentle waves, a small ferry/boat; only after she says yes.
L. Shiga friend (hairdresser -> receptionist -> homemaker, colours hair, Zumba/gym, big family): NOT built until she agrees to be quoted and have a character. Faceless. No family size, no town. Original soft round sleepy creature, not Totoro (copyright).
M. Website tour (guide avatar = his avatar): scripted, in EN/JA/FR/RU, dismissible with a cross, matches the theme, remembers dismissal in the browser's localStorage (no login needed, no cookies needed), can be reopened. 2-3 options (tour, projects, contact).
N. Agents say their names: tap an agent -> speaks its name with the browser's built-in speech (SpeechSynthesis), off if sound is off; falls back to nothing if the device has no voice.
O. Auto language: first visit to the root picks ja / fr / ru / en from the browser language list; remembered choice always wins. (FR/RU after v6.0.)
P. Analytics (GoatCounter) still planned; needs account creation.

## Q (2026-10-26, after v6.2): cute agent names, localized
Pip/ピップ/Пип (Study), Sora/そら/Сора (Japan Job), Fumi/ふみ/Фуми (Document), Bit/ビット/Бит (GitHub), Chatti/Chati(FR)/チャッティ/Чатти (Talkmate), Tabi/たび/Таби (Overseas programs), Niwa/にわ/Нива (Website). Cards keep a plain job line, translated. Waiting for Prithivi to confirm the names. Also consider reframing as "tools that help me", not one bot per card.

## Feedback backlog 2026-10-26 evening (after v6.4.2), NOT built
Full numbered list (29 items, grouped Home/Projects/Work/Team/About/Global): BACKLOG-2026-10-26-evening.md. All "not started"; G1 blocked on decision.
## Home
1. H1 Subline: remove "I also have game development experience from a full-time job with a team." Keep only the first sentence. The contract is not full-time, so the sentence clashes. Status: not started
2. H2 Site guide on mobile: Next must scroll to each target. The bubble must never overlap the team block or the train. Fix the odd highlight outline. Fix the × tap-through that navigates away. Desktop works. Status: not started
3. H3 Project cards on mobile: all the same shape and height (as on desktop). Status: not started
4. H4 Facts strip and recruiter door: remove the location; remove or simplify the unclear "Japanese" item; remove "Visa sponsorship needed". Status: not started
5. H5 Train: rename the heading to "Comments from my friends". Fix passengers sitting outside the windows on mobile. Redesign as one long carriage with small partitions where friends talk, with small laughing characters. Tapping the train makes everyone sit; tapping a person shows a thought bubble ("read my comment"). It must look crafted, not generic. Status: not started
6. H6 Rewrite the "I also take on paid projects: AI tools, AI testing and websites" line professionally. Status: not started
7. H7 Rename the "AI tools that help me" teaser to "My team of agents" style, with a clear title box in the middle and the team below; tapping it goes to the Team page. Status: not started

## Projects
8. P1 Skills section: redesign so it is clear which text belongs to which skill. Status: not started
9. P2 Make the whole skill card tappable (button-like, no underlined "See the project"). It opens a detail page that starts with why you need this / how it helps a company, then the technical details. The project pages get this opening too. Status: not started
10. P3 Fill or fix the blank "Game development (Unreal Engine 4, C++)" item (Python is also blank). Status: not started

## Work with me
11. W1 Rewrite the offer list so a recruiter understands it, plainly and professionally. Status: not started
12. W2 Delete "Right now I do not build sites with user logins and databases." Status: not started
13. W3 Workflow animation for each offer (promised earlier). Status: not started

## Team of agents
14. T1 Flip cards everywhere (projects, agents, any deck):
    - Tap anywhere to flip, and tap again to flip back.
    - Only one card is flipped at a time.
    - Cards keep the same size after flipping on mobile.
    Status: not started
15. T2 Make the Tabi description generic (no "free to apply scholarships, fellowships, exchange programs"). Status: not started
16. T3 Explain in depth how the site was built and each agent's role. Status: not started
17. T4 RU: the Study card "swipe to flip" hint must fit on one line. Status: not started

## About
18. A1 Location: "Based in India" only. Remove Baripada/Odisha everywhere (About story and Home strip). Status: not started
19. A2 Rewrite About in his natural spoken voice: flowing paragraphs, no years or dates, no duplicate of the Home timeline. The self-employed period was the foundation of his machine learning (studied deep learning, neural networks; limited by hardware, no strong laptop; LLMs and open source not popular then). Use only what he said. Status: not started
20. A3 Main tools: list all main tools incl. Unreal Engine, plus LangGraph (he said "Line Graph"; confirm the spelling with him before publishing). Status: not started
21. A4 Remove "Since Mar 2024 I have talked with Japanese friends on HelloTalk". Use something like "along the journey I've made friends around the world". Status: not started
22. A5 Remove the big white contact box; keep the bottom contact section. Status: not started

## Global
23. G1 Replace underlined text links with themed buttons. Contact becomes icon buttons with official logos (Proton Mail, LinkedIn, GitHub, Topmate), with no email text shown. They stay real links (long-press copy works) and mailto opens the visitor's mail app. Same icons in Say hello and the footer. Status: BLOCKED-ON-DECISION (check against the "no website links until domain is owned" rule)
24. G2 Add Writing to the navigation menu. Status: not started
25. G3 Designed page headers for About, Team, Writing and Work with me. Status: not started
26. G4 Check every change in dark theme and in JA/FR/RU (especially Russian wrapping). Status: not started
27. G5 Writing: replace "coming soon" with content from the JLPT bot (Primary will brief it). Status: not started
28. G6 Single source: don't repeat projects, work history, experience and contact on several pages. Status: not started
29. G7 Test on a real mobile emulator (device size, touch), not just a narrow desktop window. Status: not started

## v6.5 released 2026-10-26
Done: H1 H4 H6 W1 W2 T2 T4 A1 A2 A3 A4 A5 G2 G3 G4 G7. Partial: H5 (text), H7 (rename), G1, G6. Not started: H2 H3 P1 P2 P3 W3 T1 T3 G5. Open: confirm LangGraph spelling with owner.
