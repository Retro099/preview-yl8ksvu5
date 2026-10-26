// Agent team. Texts are the owner's approved wording (EN verbatim). Keep dates accurate. No vendor names.
export const team = [
 { id:'study', acc:'study', fill:'#F6CFD8', en:{name:'Pip', job:'Helps with Japanese study plans', role:'Study', intro:'I help Prithivi study Japanese with study notes, practice questions and a review of his mistakes.', real:'On 25 Oct 2026 I set up Notion study pages for two Japanese lessons, following his printed booklet, with English translations and furigana.'},
   ja:{name:'ピップ', job:'日本語の勉強の計画を手伝います', role:'勉強', intro:'プリティヴィさんの日本語の勉強を手伝っています。勉強ノート、練習問題、そしてまちがいの見直しをします。', real:'2026年10月25日、日本語の2つの課の勉強ページをNotionに作りました。プリティヴィさんの印刷した教材にそって、英語の訳とふりがなをつけました。'} },
 { id:'docs', acc:'docs', fill:'#FFEFC2', en:{name:'Sora', job:'Helps with my job search in Japan', role:'Japan job documents', intro:'I help Prithivi with his Japan job search, keeping his profiles, Japanese work-history documents and interview prep accurate and in simple Japanese.', real:'On 21 Oct 2026 I rebuilt his Japanese work-history document (職務経歴書) into a clear 2-page version, in Word and PDF.'},
   ja:{name:'そら', job:'日本での仕事さがしを手伝います', role:'日本の就職書類', intro:'プリティヴィさんの日本での仕事さがしを手伝っています。プロフィール、日本語の職務経歴書、面接の準備を、正確でやさしい日本語にしています。', real:'2026年10月21日、日本語の職務経歴書を、わかりやすい2ページの形に作り直しました（WordとPDF）。'} },
 { id:'github', acc:'github', fill:'#D9E3F3', en:{name:'Bit', job:'Keeps the GitHub projects tidy', role:'GitHub', intro:"I look after Prithivi's GitHub: I keep his repositories, READMEs and profile accurate, so every project shows what it does and the real numbers behind it.", real:'On 25 Oct 2026 I published his GitHub profile README with three projects, each with its data and numbers.'},
   ja:{name:'ビット', job:'GitHubのプロジェクトを整えます', role:'GitHub', intro:'プリティヴィさんのGitHubを管理しています。リポジトリ、README、プロフィールを正確にして、どのプロジェクトも、何をするかと、その本当の数字がわかるようにしています。', real:'2026年10月25日、GitHubのプロフィールREADMEを公開しました。3つのプロジェクトを、それぞれのデータと数字といっしょにのせています。'} },
 { id:'programs', acc:'programs', fill:'#DCEBD2', en:{name:'Tabi', job:'Finds programs and helps with applications', role:'Programs', intro:'I look for free-to-apply scholarships, fellowships and exchange programs in Asia, check the rules to see if Prithivi qualifies, and help prepare his application documents.', real:'On 3 Oct 2026 I built a sourced Notion hub of Asian scholarships, internships and programs, organised by continent, country and program.'},
   ja:{name:'たび', job:'プログラムをさがし、応募を手伝います', role:'プログラム', intro:'アジアの、応募が無料の奨学金、フェローシップ、交流プログラムをさがします。ルールを読んで、プリティヴィさんが応募できるかを確認し、応募書類の準備を手伝います。', real:'2026年10月3日、アジアの奨学金、インターン、プログラムを、出典つきでNotionにまとめました。大陸、国、プログラムごとに分けています。'} },
 { id:'overseas', acc:'overseas', fill:'#FFDCC8', en:{name:'Fumi', job:'Helps with CVs for jobs outside Japan', role:'Overseas CVs', intro:'I help Prithivi prepare his CVs and keep his job search outside Japan organised.', real:'On 13 Oct 2026 I rebuilt his overseas CV and three country-specific versions with his latest verified project results.'},
   ja:{name:'ふみ', job:'海外向けのCVを手伝います', role:'海外向けCV', intro:'プリティヴィさんのCVの準備を手伝い、日本以外での仕事さがしを整理しています。', real:'2026年10月13日、海外向けのCVと、国ごとの3つの版を作り直しました。確認ずみの最新のプロジェクト結果を入れています。'} },
 { id:'topmate', acc:'topmate', fill:'#EBD9F0', en:{name:'Chatti', job:'Looks after the Topmate page', role:'Topmate', intro:"I set up and look after Prithivi's Topmate page and the plans to reach people who want to go to Japan.", real:'On 24 Oct 2026 I set up his Topmate profile, and on 25 Oct I added his three digital guides and the package.'},
   ja:{name:'チャッティ', job:'Topmateのページを管理します', role:'Topmate', intro:'プリティヴィさんのTopmateのページを作って管理しています。日本に行きたい人に届けるための計画も作っています。', real:'2026年10月24日にTopmateのプロフィールを作り、10月25日に3つのデジタルガイドとセットを追加しました。'} },
 { id:'site', acc:'site', fill:'#FFF8EC', en:{name:'Niwa', job:'Builds and checks this website', role:'Website', intro:'I build and check this website with Prithivi: design, code, accessibility checks and backups before every change.', real:null},
   ja:{name:'にわ', job:'このサイトを作って確認します', role:'ウェブサイト', intro:'プリティヴィさんといっしょに、このサイトを作って確認しています。デザイン、コード、アクセシビリティのチェック、そして変更の前には毎回バックアップをとります。', real:null} },
];

// Real release history from git (commit/tag times, all IST, +05:30). v5.0 time not listed: it is this release.
export const timeline = [
 ['draft','14:22','Unlisted draft site','非公開の下書きサイト'],
 ['v2','15:22','Structure based on research, case studies and a metrics file','調べたことをもとに構成を作り、事例と数字を追加'],
 ['v3.1','16:56','Fixed the page title','ページのタイトルを修正'],
 ['v4','19:16','Living home page: avatar, numbers, dated Now, Latest from GitHub, contact row','動くホームページ：アバター、数字、日付つきの「いま」、GitHubの最新、連絡先'],
 ['v4.1','19:29','Blob avatar with eyes that follow the pointer','目がポインターを追うアバター'],
 ['v4.3','20:50','Shorter fraud card label','不正検出カードのラベルを短く'],
 ['v4.4','20:53','Dated Now items with checked facts','確認した事実で「いま」に日付をつけた'],
 ['v4.5','21:24','CRM Now item marked as running','CRMの項目を「実行中」に'],
 ['v4.6','21:48','Game developer role detail','ゲーム開発の仕事の説明を追加'],
 ['v4.7','22:19','Flashcard project cards, blob animation, light Japanese-Indian theme','プロジェクトの単語カード、アバターの動き、日本とインドの明るいテーマ'],
 ['v4.8','22:24','Talk page with 3 featured Topmate cards','相談ページに、Topmateの3つのカード'],
 ['v4.9','22:37','Desktop layout, touch petals, background, card spotlight, theme button, 404 page','パソコンのレイアウト、タッチの花びら、背景、カードの強調、テーマのボタン、404ページ'],
 ['v4.10','23:27','Touch petal trail no longer stops','タッチの花びらが止まらないように修正'],
 ['v5.0','','Work with me page, this Team page, a link for each Topmate card','仕事の依頼ページ、このチームのページ、Topmateのカードごとのリンク'],
];
