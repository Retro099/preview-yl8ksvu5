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
