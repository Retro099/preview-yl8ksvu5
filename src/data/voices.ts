// Friends who commented = passengers on the Home comment train. Used with permission.
// Keep the Japanese words exactly as given. To add a friend: add one object (a new cabin is drawn for each).
// Never add a real name, company or workplace.
export type Passenger = {
  id: string; by: string; byEn: string; capEn: string; capJa: string; cabin: string;
  avatar?: { hair: string; top: string; prop: 'drum' | 'none' } | { kind: 'creature' | 'rider' }; // no avatar = carriage shows the emblem only
  emblem?: 'scissors';  // small icon in the window when there is no avatar
  likesEn?: string; likesJa?: string;
  stages?: boolean; // life-stage animation (FriendAvatar stages)
  theme?: string;   // key in themes.ts, optional dialog background
  he?: boolean;     // pronoun for labels (default: her)
  flag?: 'jp' | 'fr' | 'ru'; // small circular country marker on the picture
  prefEn?: string; prefJa?: string; // location, prefecture only
  quotes: { ja: string; en: string }[];
};
export const passengers: Passenger[] = [
 { id:'f1', by:'日本人30歳女性', byEn:'Japanese woman, 30',
   capEn:'Always ready to help, a very kind and very sweet friend', capJa:'いつも力になってくれる、とてもやさしい友だち',
   likesEn:'She likes Pikachu', likesJa:'ピカチュウが好きです',
   cabin:'埼玉ゆき', avatar:{ hair:'#1d1a1c', top:'#E9A3B0', prop:'drum' }, stages:true, theme:'saitama', flag:'jp', prefEn:'Saitama Prefecture', prefJa:'埼玉県',
   quotes:[
    { ja:'サイトがかわいいですね。でも、内容はかなり作りこまれていて、職業用のポートフォリオだと思いました。', en:'The site is cute. But the content is very carefully made, and I thought it was a professional portfolio.' },
    { ja:'ウェブサイトにアニメーションが使われていて、動きがあるのが見ていて楽しい！また、内容もしっかりしていて、読み応えがある。', en:'The website uses animation, and it is fun to watch things move! The content is also solid and worth reading.' },
   ] },
 // Shiga friend: approved quote, theme and character (2026-10-26). Original sleepy forest creature with 5 stages. Verbatim sentence, no personal details.
 { id:'f2', by:'日本人女性', byEn:'Japanese woman', capEn:'', capJa:'', cabin:'', emblem:'scissors', avatar:{ kind:'creature' }, stages:true, theme:'shiga', flag:'jp', prefEn:'Shiga Prefecture', prefJa:'滋賀県',
   quotes:[
    { ja:'Retroが作ったWebサイト、可愛さがあってあなたの優しさが滲み出ていて、すばらしいのは理解できました。', en:'I could see that the website Retro made is wonderful: it is cute, and your kindness shines through.' },
   ] },
 // Aichi friend: feedback #3 (2026-10-27). Quotes and traits approved by the owner 2026-10-30. Face-free rider. Never add his employer.
 { id:'f3', by:'日本人男性・愛知県', byEn:'Japanese man, Aichi Prefecture', he:true, flag:'jp', prefEn:'Aichi Prefecture', prefJa:'愛知県',
   capEn:'Friend from Aichi Prefecture', capJa:'愛知県の友だち',
   likesEn:'Lives in the countryside; his wife is a school teacher. Loves riding his motorcycle, camping, and going out to restaurants with his wife. Very friendly and kind, always ready to talk, and honest about how things really are.',
   likesJa:'いなかに住んでいて、奥さんは学校の先生です。バイクに乗ること、キャンプ、奥さんとレストランに行くことが好きです。とてもフレンドリーでやさしく、いつでも話してくれて、本当のことを正直に教えてくれます。',
   cabin:'', avatar:{ kind:'rider' },
   quotes:[
    { ja:'ホームページはRetroさんの、優しい人柄が見えて良いと思います。', en:'I think the homepage is good because it shows Retro’s kind personality.' },
    { ja:'冒頭で何をやっている人か書いて有り理解できます。', en:'At the top it says what you do, so it is easy to understand.' },
   ] },
];
export const voices = passengers.flatMap(p => p.quotes.map(q => ({ by:p.by, byEn:p.byEn, ...q })));
