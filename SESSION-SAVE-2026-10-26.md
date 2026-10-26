# Session save: 2026-10-26 (IST), today only
Live: https://retro099.github.io/preview-yl8ksvu5/ (EN /en/, JA /ja/). Repo Retro099/preview-yl8ksvu5. Earlier days: see Notion "Current state" / "Decisions & rules" history and REVIEW_NOTES.md (v4.x–v5.0, 2026-10-25). Those are not repeated here.

## Releases today
| Tag | Commit | Time (IST) | What | Backup |
|---|---|---|---|---|
| v5.1 | 2beacbe | 00:19 | Light theme default, cleaner dark | /workspace/site-backup-v51-start-2026-10-26.tgz |
| v5.2 | 8e8cc6c | 04:14 | Friend's voice block, About "at a glance", skill to company-use lines | /workspace/site-backup-v52-start-2026-10-26.tgz (+ site-wip-v52-2026-10-26.tgz) |
| v5.3 | af05b45 | 10:36 | Comment train (SL steam loco), friend passenger + drum avatar, dialog + translate | /workspace/site-backup-v53-start-2026-10-26.tgz |
| v5.4 | 6c5673c | 10:52 | Honk button (Honk / ポーッ), smoke kept off the permission line, compact dialog at 390 | /workspace/site-backup-v54-start-2026-10-26.tgz |
| v5.4.1 | 5c06b02 | 10:54 | Train-themed Honk+Sound group (maroon/brass/black), equal-height desktop flashcards | same as v5.4 |
Screenshots: /workspace/site-publish/screenshots/v52, v53, v54 (copied to /workspace/site/screenshots). Checks: axe 0 on Home EN/JA, no overflow, dialog scroll 0 at 390x900, honk 44px.
Restore: `git checkout <tag>` or untar the backup listed above.

## Friend's feedback (verbatim, 日本人30歳女性)
1. サイトがかわいいですね。でも、内容はかなり作りこまれていて、職業用のポートフォリオだと思いました。 (EN, translation: The site is cute. But the content is very carefully made, and I thought it was a professional portfolio.)
2. ウェブサイトにアニメーションが使われていて、動きがあるのが見ていて楽しい！また、内容もしっかりしていて、読み応えがある。 (EN, translation: The website uses animation, and it is fun to watch things move! The content is also solid and worth reading.)
What changed because of it: v5.2 added her quotes, the About table and the skill-use lines. v5.3 and v5.4 added the train with her as a passenger.
Her permission terms: label 日本人30歳女性 only. Never show a name, company, workplace or "accountant". Allowed: slim build, black hair just below the shoulders, drums in a high-school band (drum + sticks), subtle Saitama hint (埼玉ゆき plate). Caption: "Always ready to help, a very kind and very sweet friend" / いつも力になってくれる、とてもやさしい友だち.

## Ideas queued (QUEUE.md, not built)
- Version history as a real production workflow (backup, build, axe, screenshot matrix, tag, deploy check, rollback). Facts only.
- Scripted site guide avatar (edge-hiding, "need help?", 2-3 options). It must not be an AI chat and must never overlap content.
- Team page as an agent classroom (tap an agent for an intro card; only public-safe facts).
- Project "Watch the workflow" panels built in code with real behaviour only, EN/JA and light/dark.
- News strip on Home from the local agent API.
- Autonomous local agent on the Work/Team pages, verified claims only.
- The About self-introduction is still open: Prithivi writes or decides, and I draft.

## Rules
Build only when Prithivi says "build". At most one release per day (one item each). Stay quota-aware: small checks, few screenshots. Label honestly: translations marked, no invented results or claims. Keep-off list: the friend's name, company, workplace and "accountant", plus any unverified personal details. Never force-move pushed tags; fixes ship as point tags.

## Open questions
More friend feedback (batch it when it arrives). A custom domain? A trimmed CV?
