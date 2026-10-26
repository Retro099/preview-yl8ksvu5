// Friends who commented = passengers on the Home comment train. Used with permission.
// Keep the Japanese words exactly as given. To add a friend: add one object (a new cabin is drawn for each).
// Never add a real name, company or workplace.
export type Passenger = {
  id: string; by: string; byEn: string; capEn: string; capJa: string; cabin: string;
  avatar: { hair: string; top: string; prop: 'drum' | 'none' };
  stages?: boolean; // life-stage animation (FriendAvatar stages)
  theme?: string;   // key in themes.ts, optional dialog background
  quotes: { ja: string; en: string }[];
};
export const passengers: Passenger[] = [
 { id:'f1', by:'日本人30歳女性', byEn:'Japanese woman, 30',
   capEn:'Always ready to help, a very kind and very sweet friend', capJa:'いつも力になってくれる、とてもやさしい友だち',
   cabin:'埼玉ゆき', avatar:{ hair:'#1d1a1c', top:'#E9A3B0', prop:'drum' }, stages:true, theme:'saitama',
   quotes:[
    { ja:'サイトがかわいいですね。でも、内容はかなり作りこまれていて、職業用のポートフォリオだと思いました。', en:'The site is cute. But the content is very carefully made, and I thought it was a professional portfolio.' },
    { ja:'ウェブサイトにアニメーションが使われていて、動きがあるのが見ていて楽しい！また、内容もしっかりしていて、読み応えがある。', en:'The website uses animation, and it is fun to watch things move! The content is also solid and worth reading.' },
   ] },
];
export const voices = passengers.flatMap(p => p.quotes.map(q => ({ by:p.by, byEn:p.byEn, ...q })));
