/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RabbitSkin, AuthorPortrait } from '../types';

import rabbitScribeImg from '../assets/images/rabbit_scribe_medieval_1794179838331.jpg';
import rabbitKnightImg from '../assets/images/rabbit_knight_medieval_1794179838229.jpg';
import rabbitMinstrelImg from '../assets/images/rabbit_minstrel_medieval_1794179896523.jpg';
import rabbitKingImg from '../assets/images/rabbit_king_medieval_1794179898704.jpg';
import rabbitSnailImg from '../assets/images/rabbit_snail_joust_1794181554615.jpg';
import rabbitArcherImg from '../assets/images/rabbit_archer_bow_1794181556366.jpg';
import rabbitTrumpeterImg from '../assets/images/rabbit_trumpeter_horn_1794181556850.jpg';
import rabbitAbbotImg from '../assets/images/rabbit_abbot_mitre_1794181556593.jpg';
import rabbitFalconerImg from '../assets/images/rabbit_falconer_noble_1794181572442.jpg';
import rabbitApothecaryImg from '../assets/images/rabbit_apothecary_herb_1794181572787.jpg';

export const RABBIT_SKINS: RabbitSkin[] = [
  {
    id: 'rabbit-scribe',
    name: '抄经小兔 · 杰昂',
    title: 'Jehan le Lapin Scribe',
    era: '12 世纪修道院缮写房 (Scriptorium)',
    description: '披着蔚蓝风帽、握鹅毛笔的古典缮写兔。他是每位求学者的向导，日夜守护羊皮纸古卷。',
    greetingMessage: 'Deus vos saut, bels clers ! 墨水已研好、鹅毛笔已削尖，小心别弄脏羊皮纸，咱们开始今日的抄经与研学吧！',
    quoteOldFrench: '“Escriz est en parchemin, li clers qui l’oïst le savra.”',
    quoteTranslation: '“字迹已镂刻于羊皮纸，闻听者自得知晓智慧。”',
    image: rabbitScribeImg,
    shardsRequired: 5,
  },
  {
    id: 'rabbit-knight',
    name: '圣殿护法兔骑士',
    title: 'Chevalier Lapin du Temple',
    era: '12 世纪十字军与封建采邑',
    description: '身披锁子软铠、佩戴金狮纹章盾与长剑的英勇战兔，在中世纪手抄本边缘捍卫双格法则。',
    greetingMessage: 'Montjoie ! 拔出你的佩剑吧，吾之战友！凭骑士之誓，今日定要与你并肩攻克每一座双格壁垒！',
    quoteOldFrench: '“Por son seignor deit hom sofrir granz chalz e granz freiz.”',
    quoteTranslation: '“为了自己的领主，勇士须忍受酷暑与严寒。”',
    image: rabbitKnightImg,
    shardsRequired: 5,
  },
  {
    id: 'rabbit-minstrel',
    name: '宫廷游吟琴歌兔',
    title: 'Trouvère Lapin Ménestrel',
    era: '13 世纪香槟伯爵宫廷',
    description: '戴卷边花帽、抚中世纪鲁特琴的游吟诗兔，琴弦中跳跃着八音节对句与纯爱之歌。',
    greetingMessage: 'Oez, seignor et bele amie ! 听那鲁特琴弦轻拨，请饮一杯蜜酒，随我吟唱这八音节的典雅古歌！',
    quoteOldFrench: '“Chançon novele voil trover, de la bele qui mon cuer a.”',
    quoteTranslation: '“愿吟唱一首新歌，献予掳走我心灵的佳人。”',
    image: rabbitMinstrelImg,
    shardsRequired: 5,
  },
  {
    id: 'rabbit-king',
    name: '加冕法兰西兔王',
    title: 'Lapin Roi Très-Chrétien',
    era: '14 世纪兰斯大教堂加冕盛典',
    description: '头戴金百合宝冠、身披白貂皮蔚蓝王袍、持君权权杖与金苹果，代表皇家书吏权威。',
    greetingMessage: 'Or sus, nostre feal vassal ! 承蒙圣丹尼斯庇佑，朕特许你入御前书院听讲，且展现你配得上王室封赏的才学！',
    quoteOldFrench: '“Montjoie e Saint Denis ! Cil est reis qui droit tient.”',
    quoteTranslation: '“蒙茹瓦与圣丹尼斯！唯坚守正道者，方为真王。”',
    image: rabbitKingImg,
    shardsRequired: 5,
  },
  {
    id: 'rabbit-snail-joust',
    name: '蜗牛骑乘决斗兔',
    title: 'Chevalier sur Escargot',
    era: '14 世纪哥特手抄本插画 (Drolleries)',
    description: '取材自大英图书馆与法兰西国家图书馆经典边缘画：威风凛凛骑在蜗牛背上的决斗战兔。',
    greetingMessage: 'Gare devant ! 快让一让！本爵爷正驾驭绝世巨螺全速冲锋——哪怕每刻钟只挪三寸，今日求学也绝不退缩半步！',
    quoteOldFrench: '“A l’estor vaillant, sor limace fiere e lente !”',
    quoteTranslation: '“奔赴英勇决斗场，驭此沉稳坚毅之巨螺！”',
    image: rabbitSnailImg,
    shardsRequired: 5,
  },
  {
    id: 'rabbit-archer',
    name: '游侠长弓林地兔',
    title: 'Lapin Archer de Sherwood',
    era: '13 世纪阿登森林与英吉利绿林',
    description: '着林地墨绿斗篷、搭扣长弓瞄准的射手兔。以犀利百步穿杨之姿纠正每一处变格误区。',
    greetingMessage: 'Bien vegniez el vert bois ! 嘘，屏息凝神、拉满弓弦！瞄准那变格词尾的靶心，随我一箭中的！',
    quoteOldFrench: '“Trait l’arc d’acier, ferant le droit au cuer !”',
    quoteTranslation: '“拉满精钢长弓，一箭命中正道核心！”',
    image: rabbitArcherImg,
    shardsRequired: 5,
  },
  {
    id: 'rabbit-trumpeter',
    name: '皇家军号号手兔',
    title: 'Lapin Héraut Trompette',
    era: '13 世纪骑士比武大会 (Tournoi)',
    description: '头戴蓝呢风帽、吹奏系有金狮战旗长管号角的传令使，宣告新的古法语关卡开启。',
    greetingMessage: 'Oiez, oiez, franc chevalier ! 金狮号角已经吹响，比武场的旌旗猎猎迎风，快挺枪上马迎接今日的试炼！',
    quoteOldFrench: '“Sone li cors, s’en fremist la terre et l’onor !”',
    quoteTranslation: '“号角长鸣，大地与荣耀随之震颤！”',
    image: rabbitTrumpeterImg,
    shardsRequired: 5,
  },
  {
    id: 'rabbit-abbot',
    name: '圣修道院院长兔',
    title: 'Abbé Lapin Mitré',
    era: '12 世纪克吕尼修道会',
    description: '佩戴金织主教法冠、手持精雕牧杖与圣典的高僧兔，精研拉丁文词源流变。',
    greetingMessage: 'Pax vobiscum, bels fiz ! 愿主赐福于你。修道院晨钟已鸣，快翻开这卷古籍，细细参悟拉丁词源化育的奥秘吧。',
    quoteOldFrench: '“Benedicite, clers e peres, car la parole est sainte !”',
    quoteTranslation: '“愿主赐福，因这古老的言语满载圣洁！”',
    image: rabbitAbbotImg,
    shardsRequired: 5,
  },
  {
    id: 'rabbit-falconer',
    name: '宫廷猎鹰贵族兔',
    title: 'Lapin Fauconnier Noble',
    era: '14 世纪贝里公爵宫廷',
    description: '戴赤红羽饰软帽、掌托金铃罩帽猎鹰的贵胄兔。反转中世纪狩猎主仆地位之妙作。',
    greetingMessage: 'Buer soyez venus ! 瞧我腕上的金铃猎鹰已振翅欲飞，尊贵的猎伴，随我一同在浩瀚文海中捕捉最精妙的字句吧！',
    quoteOldFrench: '“Li faucons vole el ciel, li gentils cueillent l’esbat.”',
    quoteTranslation: '“猎鹰翔于九霄，高贵之士共襄雅集。”',
    image: rabbitFalconerImg,
    shardsRequired: 5,
  },
  {
    id: 'rabbit-apothecary',
    name: '草药调香医师兔',
    title: 'Lapin Apothicaire Savant',
    era: '13 世纪蒙彼利埃医学院',
    description: '戴圆框古镜、持绿色草药药剂瓶与石臼的学者兔，调制治愈古文语病的神奇良方。',
    greetingMessage: 'Bone santé, amis chiers ! 迷迭香配两钱主格、薄荷叶佐三分变位——快饮下这剂良方，包你今日文思泉涌！',
    quoteOldFrench: '“Herbes de mont e d’espice font le bon garissement.”',
    quoteTranslation: '“山中香草与秘方灵露，能愈一切词法疑难。”',
    image: rabbitApothecaryImg,
    shardsRequired: 5,
  },
];

import { MEDIEVAL_AUTHORS_LIST } from './authors/medievalAuthors';

export const MEDIEVAL_AUTHORS: AuthorPortrait[] = MEDIEVAL_AUTHORS_LIST;

