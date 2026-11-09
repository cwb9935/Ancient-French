/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuthorPortrait } from '../../types';

import authorTuroldImg from '../../assets/images/portrait_turold_roland_1794199115159.jpg';
import authorChretienImg from '../../assets/images/portrait_chretien_troyes_1794179898622.jpg';
import authorMarieImg from '../../assets/images/portrait_marie_france_1794179913936.jpg';
import authorLorrisImg from '../../assets/images/portrait_guillaume_lorris_1794199115061.jpg';
import authorMeunImg from '../../assets/images/portrait_jean_meun_1794199117108.jpg';
import authorVillonImg from '../../assets/images/portrait_francois_villon_1794199117302.jpg';
import authorChristineImg from '../../assets/images/portrait_christine_pizan_1794179898343.jpg';
import authorOrleansImg from '../../assets/images/portrait_charles_orleans_1794199119957.jpg';
import authorRutebeufImg from '../../assets/images/portrait_rutebeuf_poet_1794199122560.jpg';
import authorMachautImg from '../../assets/images/portrait_guillaume_machaut_1794199122643.jpg';

export const AUTHORS_1_TO_10: AuthorPortrait[] = [
  // 1. 屠罗德 (Turold)
  {
    id: 'author-turold',
    name: '1. 屠罗德',
    nameOldFrench: 'Turold (Turoldus, 11世纪末)',
    century: '11 世纪末',
    era: '第一期十字军东征与盎格鲁-诺曼时期',
    majorWork: '《罗兰之歌》 (La Chanson de Roland) —— 法国最古老的武功歌',
    workExcerpt:
      "Desuz un pin i est alez curant, Sur l'erbe verte s'i est culchiez jacent. Desuz lui met s'espee e l'olifant; Turnat sa teste vers la paiene gent...",
    workExcerptModern:
      "Il a couru sous un pin, il s'est couché sur l'herbe verte. Sous lui, il place son épée et son olifant ; il a tourné sa tête vers la gent païenne...",
    workExcerptChinese:
      '他（罗兰）奔跑到一棵松树下，在绿草地上躺下。他把佩剑（杜兰德尔）和象牙号角压在身下，将头转向异教徒的方向……（生而为赢，虽死犹荣）。',
    biography:
      '屠罗德（Turold，拉丁文作 Turoldus）是法兰西民族史诗开山之作《罗兰之歌》（牛津抄本 Digby 23）卷末唯一留名的传奇人物。在全诗第4002行的最末一句，抄本赫然写着：“Ci falt la geste que Turoldus declinet”（屠罗德所传述的功业至此完结）。由于古法语动词“decliner”兼具“创作、吟诵、转写、或是年迈体衰而辍笔”等多重含义，屠罗德的真实身份成为中世纪文学史最迷人的公案之一。\n\n语言学与历史学家普遍考证，“Turold”源自北欧维京人的古诺斯语名字“Thorvald”（雷神托尔的统治），是11世纪诺曼底与英格兰盎格鲁-诺曼贵族及教士的典型名字。学界推测他极可能是贝叶主教奥多的随从、或是彼得伯勒修道院院长屠罗德（卒于1098年），兼具深厚的修道院拉丁神学修养与对封建骑士军事礼法的熟稔。在他的笔下，公元778年查理曼大军翻越比利牛斯山脉龙塞斯瓦列斯山口时遭遇伏击的一场边境战役，被重塑为基督教世界与萨拉森大军之间波澜壮阔的史诗决战。他塑造了“罗兰英勇（proz）而奥利维耶明智（sages）”的双璧形象，将封建效忠、战友深情、狂妄悲剧（desmesure）与临终向天主献上手套的救赎融为一炉，成为整个欧洲骑士文学的精神源头。',
    literarySignificance:
      '法国最古老、最伟大的武功歌（Chanson de geste）巨匠，以十音节半谐音诗节（Laisse assonancée）铸就了早期古法语最苍劲雄浑的史诗范式。',
    image: authorTuroldImg,
    shardsRequired: 5,
  },

  // 2. 克雷蒂安·德·特鲁瓦 (Chrétien de Troyes)
  {
    id: 'author-chretien-de-troyes',
    name: '2. 克雷蒂安·德·特鲁瓦',
    nameOldFrench: 'Chrétien de Troyes (约1135–1191)',
    century: '12 世纪下半叶 (约1135–1191)',
    era: '香槟女伯爵玛丽的宫廷',
    majorWork: '《狮骑士依凡》 (Yvain ou le Chevalier au lion) —— 亚瑟王传奇与骑士文学的奠基人',
    workExcerpt:
      'Amors et Haïne se melle. Cil qui ne set comant s’entremelle, Doit avoir mervelle de ce...',
    workExcerptModern:
      "L'Amour et la Haine se mélangent. Celui qui ne sait pas comment ils se mêlent doit s'en émerveiller...",
    workExcerptChinese:
      '爱与恨在此交织。凡是不懂它们如何交融的人，定会对此感到惊异（因为他们在不知彼此身份的情况下拼死决斗）。',
    biography:
      '克雷蒂安·德·特鲁瓦（Chrétien de Troyes，约1135–1191）出生于香槟伯国首府特鲁瓦，是中世纪宫廷骑士传奇（Roman courtois）的缔造者与西方小说美学的鼻祖。他早年接受过系统的教会人文学科（Trivium 与 Quadrivium）教育，曾翻译奥维德的《变形记》与《爱的艺术》，深谙拉丁修辞学。约1160年至1181年间，他供职于法国王后阿基坦的埃莉诺之女——香槟女伯爵玛丽（Marie de Champagne）设在特鲁瓦的学术与文艺宫廷；晚年则受到佛兰德伯爵腓力·德·阿尔萨斯的庇护。\n\n克雷蒂安首次将口耳相传的凯尔特“布列塔尼故事群”（Matière de Bretagne）与南法游吟诗人的“典雅爱情”（Fin’amor）伦理结合，提出以“素材”（matiere）与“深意”（san）经纬交织的叙事原则（conjointure）。他一生留存五部不朽的八音节平韵长篇韵文小说：《埃雷克与埃妮德》探讨婚姻与骑士天职的失衡；《克利热的》展现拜占庭与亚瑟王宫廷的机智恋情；《囚车骑士兰斯洛特》奉玛丽女伯爵之命创作，将兰斯洛特对桂妮薇儿王后的绝对臣服推向极致；《狮骑士依凡》刻画英雄在承诺失信陷入疯狂后，与一头感恩雄狮并肩行侠以赢回爱人宽恕的救赎之旅；而未竟遗作《圣杯传奇（珀西瓦尔）》更首次在欧洲文学中引入了神秘的“圣杯”（Graal）意象，开启了绵延八百年的亚瑟王圣杯文学传统。',
    literarySignificance:
      '开创了八音节平韵对句（Octosyllabes à rimes plates）的叙事传统，其香槟方言文本是学习12世纪古典古法语双格系统与心理修辞的最高典范。',
    image: authorChretienImg,
    shardsRequired: 5,
  },

  // 3. 玛丽·德·法兰西 (Marie de France)
  {
    id: 'author-marie-de-france',
    name: '3. 玛丽·德·法兰西',
    nameOldFrench: 'Marie de France (12世纪中后期)',
    century: '12 世纪中后期',
    era: '英王亨利二世与阿基坦的埃莉诺宫廷',
    majorWork: '《玛丽·德·法兰西的短诗集》 (Lais de Marie de France - 选自《忍冬花》 Chevrefoil)',
    workExcerpt:
      "D'euls deus fu il tut autresi Cume del chevrefoil esteit Ki à la codre se preneit... Belle amie, si est de nus : Ne vus sanz mei, ne mei sanz vus.",
    workExcerptModern:
      "Il en était d'eux deux tout ainsi que du chèvrefeuille qui s'attachait au coudrier... Belle amie, ainsi en est-il de nous : ni vous sans moi, ni moi sans vous.",
    workExcerptChinese:
      '他们两人就像忍冬藤紧紧依偎着榛树一样……美丽的爱人，我们也是如此：无你便无我，无我便无你。',
    biography:
      '玛丽·德·法兰西（Marie de France，活跃于1160–1210年间）是法国文学史上第一位留下真实署名的女性诗人。她在《伊索寓言集》跋文中自述：“Marie ai num, si sui de France”（我名玛丽，来自法兰西）。这句自白表明她虽出身法兰西本土贵族，却长期旅居并活跃于海峡对岸英格兰金雀花王朝国王亨利二世与王后阿基坦的埃莉诺的盎格鲁-诺曼宫廷；部分学者考证她可能是亨利二世同父异母的妹妹、沙夫茨伯里修道院女院长玛丽。\n\n玛丽博学多才，精通拉丁语、古法语与中古英语。她聆听了布列塔尼游吟乐师用竖琴弹唱的古老凯尔特传说，深怕这些动人故事随岁月湮灭，遂彻夜不眠将其创作为十二篇晶莹剔透的八音节古法语叙事短诗（Lais）。在她的笔下，每一首短诗都围绕一个饱含诗意的象征物展开：《忍冬花》（Chevrefoil）以缠绕榛树的忍冬藤铭刻崔斯坦与伊索尔德“无你便无我”的宿命绝恋；《夜莺》（Laüstic）以金匣中死去的夜莺见证幽闭少妇的精神恋情；《兰瓦尔》（Lanval）描绘被亚瑟王宫廷冷落的孤高骑士获仙境女神垂青、最终双双骑白马归隐阿瓦隆仙岛；《狼人》（Bisclavret）则以温良的狼人骑士反衬背叛妻子的残忍。除《短诗集》外，她还著有百余则反映封建社会公正理念的《寓言集》（Isopet）及宗教视野宏大的《圣帕特里克炼狱记》。',
    literarySignificance:
      '创立了中世纪“布列塔尼叙事短诗”（Lai breton）体裁，以“忍冬与榛树”等永恒意象浓缩了崔斯坦式的至死不渝之爱。',
    image: authorMarieImg,
    shardsRequired: 5,
  },

  // 4. 纪尧姆·德·洛里斯 (Guillaume de Lorris)
  {
    id: 'author-guillaume-de-lorris',
    name: '4. 纪尧姆·德·洛里斯',
    nameOldFrench: 'Guillaume de Lorris (约1200–1238)',
    century: '13 世纪上半叶 (约1200–1238)',
    era: '卢瓦尔河谷与奥尔良学派',
    majorWork: '《玫瑰传奇》 (Le Roman de la Rose - 前半部分) —— 中世纪宫廷爱情寓言的巅峰',
    workExcerpt:
      "Maintes gens disent que en songes n'y a se fables non et mensonges ; mais l'on peut tels songes songer qui ne sont mie mensonger...",
    workExcerptModern:
      "Maintes gens disent que dans les songes, il n'y a que fables et mensonges ; mais on peut songer de tels songes qui ne sont pas du tout mensongers...",
    workExcerptChinese:
      '许多人说梦境不过是寓言和谎言；但人们也能做到那些绝非虚假的梦，它们随后都会变成现实。',
    biography:
      '纪尧姆·德·洛里斯（Guillaume de Lorris，约1200–1238）出生于卢瓦尔河谷奥尔良附近的洛里斯小镇，是中世纪影响力最深远的寓言长诗《玫瑰传奇》（Le Roman de la Rose）第一部分的创作者。他曾受教于古典人文学风浓郁的奥尔良教士学校，熟稔奥维德《爱的艺术》与马克罗比乌斯《西庇阿之梦注疏》。约1230年，年仅二十五岁的纪尧姆开始动笔创作《玫瑰传奇》，却在写完第4058行时英年早逝（或因故中断），留下了一座未竟的诗歌迷宫。\n\n在纪尧姆构建的诗学世界里，叙事者“我”回忆起二十岁那年五月的一个清晨，在百鸟争鸣的梦境中沿清澈溪流来到一座高墙环绕的果园。高墙外雕刻着“仇恨、背叛、贪婪、嫉妒、衰老、虚伪、贫穷”等十幅被排斥于宫廷社会之外的浮雕；而在美丽的守门少女“闲暇”（Oiseuse）引领下，青年步入“欢娱”（Deduit）主持的春之乐土。他在那耳喀索斯（水仙）之泉的两块水晶中望见了一朵娇艳欲滴的玫瑰花蕾，旋即被爱神（Amor）连射五支象征“美貌、纯真、坦诚、陪伴、甜美目光”的金箭而沦为爱的封臣。此后，他在“温雅欢迎”（Bel Acueil）的鼓励与“流言”（Malebouche）、“羞怯”（Honte）、“畏惧”（Paor）的阻挠之间反复求索。他将少女内心微妙的欲迎还拒化作立体的人格化角色，开创了欧洲心理分析文学的先河。',
    literarySignificance:
      '将中世纪梦境寓言（Allégorie courtoise）推向艺术巅峰，为后世数百年欧洲爱情心理学与诗歌象征体系立下了不朽法典。',
    image: authorLorrisImg,
    shardsRequired: 5,
  },

  // 5. 让·德·默恩 (Jean de Meun)
  {
    id: 'author-jean-de-meun',
    name: '5. 让·德·默恩',
    nameOldFrench: 'Jean de Meun (约1240–1305)',
    century: '13 世纪下半叶 (约1240–1305)',
    era: '巴黎大学经院哲学鼎盛期',
    majorWork: '《玫瑰传奇》 (Le Roman de la Rose - 后半续写部分) —— 风格转为充满哲理和批判性的现实主义',
    workExcerpt:
      "Car n'est si haute seignourie qui soit égale à franchise ; quiconque en est seigneur, il n'a cure d'autre richesse.",
    workExcerptModern:
      "Car il n'est si haute seigneurie qui soit égale à la liberté ; quiconque en est seigneur, il n'a cure d'autre richesse.",
    workExcerptChinese:
      '因为没有任何至高无上的权位能与自由媲美；谁掌握了自由，谁就对其他财富不屑一顾。',
    biography:
      '让·德·默恩（Jean de Meun，约1240–1305），本名让·克洛皮内尔（Jean Chopinel，意为“小跛子”），出生于卢瓦尔河畔默恩镇的富裕市民或小贵族家庭。他长期求学并居住于巴黎圣雅克街，是13世纪下半叶巴黎大学经院哲学与自然科学论战热潮中最博学的人文学者。除了在1275年左右续写《玫瑰传奇》外，他还曾应法王腓力四世（美男子腓力）之请，将罗马晚期哲学家波伊提乌的《哲学的慰藉》、古罗马军事家韦格蒂乌斯的《论军事》以及阿贝拉尔与爱洛伊丝的书信集翻译成古法语。\n\n在纪尧姆·德·洛里斯停笔约四十年后，让·德·默恩从第4059行接续《玫瑰传奇》，一口气增写了17,722行，使全诗总长达到惊人的21,780行。然而他的续写绝非简单的情节补完，而是一场思想与文体的彻底颠覆：他把纪尧姆精致封闭的贵族爱情花园，改造成了一座喧嚣、恢弘、充满批判锋芒的13世纪思想剧场。通过“理性女神”（Raison）、“老妇人”（La Vieille）、“虚伪修士”（Faux Semblant）、“自然女神”（Nature）与“生命精灵”（Genius）等角色的长篇宏论，他深入探讨了人类社会的起源、王权契约、黄金时代的平等自由、修道会的伪善、光学与天文学奥秘以及物种繁衍的自然法则，使《玫瑰传奇》一跃成为中世纪流传最广（现存逾三百部手抄本）的世俗圣经。',
    literarySignificance:
      '13世纪市民理性主义与百科全书派诗风的泰斗，其犀利的批判锋芒与雄辩句法深刻影响了乔叟、但丁与法国文艺复兴思想。',
    image: authorMeunImg,
    shardsRequired: 5,
  },

  // 6. 弗朗索瓦·维庸 (François Villon)
  {
    id: 'author-francois-villon',
    name: '6. 弗朗索瓦·维庸',
    nameOldFrench: 'François Villon (1431–约1463)',
    century: '15 世纪中叶 (1431–约1463)',
    era: '百年战争结束后的巴黎大学与市井江湖',
    majorWork: '《大遗言集》 (Le Testament - 选自《昔日红颜叙事诗》)',
    workExcerpt: "Mais où sont les neiges d'antan ?",
    workExcerptModern: "Mais où sont les neiges d'antan ?",
    workExcerptChinese:
      '可是，去岁的绝代芳华（昨夜的白雪）如今都在何方？（感叹时光流逝，红颜易老）。',
    biography:
      '弗朗索瓦·维庸（François Villon，1431–约1463后），原名弗朗索瓦·德·蒙科比耶（François de Montcorbier），出生于百年战争末期被英军占领、瘟疫与饥荒肆虐的巴黎。他自幼丧父，由圣伯努瓦教堂的善良教士纪尧姆·德·维庸收养并供其入读巴黎大学，他遂终身感念养父之恩并以“维庸”为姓。1452年他获得巴黎大学文科硕士学位，本可步入教会仕途，却因混迹于巴黎拉丁区放浪形骸的学子与绿林酒馆之间，人生轨迹从此坠入深渊。\n\n1455年6月，他在一场街头斗殴中失手刺死教士塞迈斯，被迫逃离巴黎，临行前写下戏谑滑稽的《小遗言集》（Le Lais）。此后数年间，他参与洗劫纳瓦拉学院金库，并与横行法兰西的黑话盗贼团伙“贝壳帮”（Coquillards）交往甚密。1461年夏天，他被奥尔良主教投入默恩河畔水牢，受尽酷刑折磨，幸逢新王路易十一驾临特赦才捡回一命。回到巴黎后，三十岁的维庸已形容枯槁、未老先衰，在贫病与恐惧中写下了两千余行的巅峰巨制《大遗言集》（Le Testament），其中穿插了千古绝唱《昔日红颜叙事诗》与代不识字的母亲向圣母献祷的《祈圣母歌》。1462年底他再度因斗殴被判处绞刑，在死囚牢中写下震撼人心的《绞刑犯叙事诗》（“骨肉同胞啊，你们在我们死后苟活于世，切莫对我们心硬如石”）；1463年1月巴黎高等法院改判其流放十年，维庸走出巴黎城门后便在历史迷雾中永远消失了。',
    literarySignificance:
      '法国现代抒情诗的真正源头。那句“Mais où sont les neiges d’antan ?”成为世界文学史上咏叹时间流逝最著名的叠句。',
    image: authorVillonImg,
    shardsRequired: 5,
  },

  // 7. 克里斯蒂娜·德·皮赞 (Christine de Pizan)
  {
    id: 'author-christine-de-pizan',
    name: '7. 克里斯蒂娜·德·皮赞',
    nameOldFrench: 'Christine de Pizan (1364–约1430)',
    century: '14–15 世纪 (1364–约1430)',
    era: '查理五世与查理六世法兰西王廷',
    majorWork: '《妇人城》 (La Cité des Dames) —— 西方历史上第一位职业女作家，女性主义先驱',
    workExcerpt:
      "Si les femmes avaient fait les livres, je sais qu'elles l'eussent fait autrement, car elles savent bien qu'on les accuse à tort.",
    workExcerptModern:
      "Si les femmes avaient écrit les livres, je sais qu'elles l'auraient fait autrement, car elles savent bien qu'on les accuse à tort.",
    workExcerptChinese:
      '如果书本是由女人来写的，我知道它们绝不会是现在这样，因为女人深知自己正遭受着世人无端的指责。',
    biography:
      '克里斯蒂娜·德·皮赞（Christine de Pizan，1364–约1430）出生于意大利威尼斯共和国，其父托马索·达·皮扎诺是博洛尼亚大学著名医学与占星学学者。四岁时，她随受聘为法王“智者”查理五世御前顾问的父亲移居巴黎卢浮宫，得以在皇家图书馆浩如烟海的典籍中浸润成长。十五岁时她嫁给王室青年秘书艾蒂安·杜·卡斯特尔，夫妻琴瑟和鸣；然而天有不测风云，查理五世与她的父亲相继去世，1390年二十五岁的丈夫又在随王出巡途中染瘟疫猝逝。\n\n面对幼子、老母、侄女一家五口的生计重担与缠讼多年的遗产官司，这位年轻寡妇没有选择改嫁或遁入空门，而是毅然拿起鹅毛笔，开设自己的手抄本工坊，以著书献赋供养全家，成为西方历史上第一位名副其实的职业女作家。她先以凄美真挚的《孤居百歌》（Cent Ballades）赢得王室贵族的赞助；随后在1401年发起震动欧洲文坛的“《玫瑰传奇》大论战”，公开致信皇家秘书团，严词批驳让·德·默恩对女性的侮辱与偏见。1405年，她完成了不朽名著《妇人城》（Le Livre de la Cité des Dames），在“理性”、“端方”与“正义”三位女神指引下，以古今杰出女性为基石筑起一座坚不可摧的精神城堡。此外，她还撰写了《查理五世贤明言行录》《武备与骑士方略》等军事政治论著。1429年，隐居修道院多年的克里斯蒂娜欣闻圣女贞德解奥尔良之围，挥泪写下绝笔《圣女贞德颂》，在曙光初现时安然辞世。',
    literarySignificance:
      '西方女性主义文学与思想的奠基人，其作品兼具严谨的哲理思辨与深沉的爱国情怀，晚年更写下歌颂圣女贞德的绝唱。',
    image: authorChristineImg,
    shardsRequired: 5,
  },

  // 8. 夏尔·德·奥尔良 (Charles d'Orléans)
  {
    id: 'author-charles-dorleans',
    name: '8. 夏尔·德·奥尔良',
    nameOldFrench: "Charles d'Orléans (1394–1465)",
    century: '15 世纪 (1394–1465)',
    era: '阿让库尔战役后的英伦囚徒岁月与布卢瓦诗社',
    majorWork: '《抒情诗集》 (Poésies - 选自著名回旋诗《春之来临》)',
    workExcerpt:
      "Le temps a laissié son manteau De vent, de froidure et de pluye, Et s'est vestu de broderye, De soleil luyant, cler et beau.",
    workExcerptModern:
      "Le temps a laissé son manteau de vent, de froid et de pluie, et s'est vêtu de broderie de soleil luisant, clair et beau.",
    workExcerptChinese:
      '季节已脱去它的外衣——那由风、寒冷和雨水织成的旧衣；而今它换上了刺绣的新装，洒满明媚、清澈而斑斓的阳光。',
    biography:
      '夏尔·德·奥尔良（Charles d’Orléans，1394–1465）是法王查理五世之孙、奥尔良公爵路易一世与米兰贵族瓦伦蒂娜·维斯孔蒂之子，其子后来加冕为法王路易十二。他的童年笼罩在血腥的王室阴云之下：1407年其父在巴黎街头遭勃艮第公爵“无畏的约翰”派人暗杀，其母因悲愤交加不久病逝，年仅十四岁的夏尔被迫挑起阿马尼亚克派领袖与家族复仇的重担。1415年10月25日，在百年战争最惨烈的阿让库尔战役（Azincourt）中，二十一岁的夏尔率军冲锋，战后被英军从堆积如山的阵亡贵族遗体下救出。\n\n由于他是法兰西王位的重要顺位继承人，英王亨利五世严令不得轻易放还，夏尔因此在伦敦塔、庞蒂弗拉克特城堡等地度过了长达二十五年的英伦囚徒岁月。在幽禁中，这位昔日的统帅将全部才情倾注于法语与英语诗歌创作，把内心的孤独化作“忧郁”（Mérencolye）、“烦闷”（Ennuy）与“淡漠超然”（Nonchaloir）等温婉细腻的寓言意象。1440年获释归国后，他厌倦了宫廷权谋，隐居于卢瓦尔河畔风景如画的布卢瓦城堡（Château de Blois），将那里打造成15世纪全法国最高雅的诗歌沙龙，发起如“我在渴望之泉旁渴死”的命题赛诗会，不仅留下五百余首珠圆玉润的回旋诗（Rondeau）与叙事歌（Ballade），更曾慷慨款待流浪至此的浪子诗人维庸。',
    literarySignificance:
      '中世纪宫廷抒情诗最后的贵族大师，将回旋诗（Rondeau）与叙事歌（Ballade）锤炼得如金银细工般清丽绝伦。',
    image: authorOrleansImg,
    shardsRequired: 5,
  },

  // 9. 吕特伯夫 (Rutebeuf)
  {
    id: 'author-rutebeuf',
    name: '9. 吕特伯夫',
    nameOldFrench: 'Rutebeuf (约1230–1285)',
    century: '13 世纪下半叶 (约1230–1285)',
    era: '圣路易时代的巴黎街头与大学区',
    majorWork: '《吕特伯夫的怨歌》 (La Complainte Rutebeuf) —— 现实主义流浪诗人的代表',
    workExcerpt:
      "Que sont mi ami devenu, que j'avais de si près tenu, et tant aimé ? Je cuide qu'ils soient trop semé...",
    workExcerptModern:
      "Que sont mes amis devenus, que j'avais tenus de si près, et tant aimés ? Je crois qu'ils sont trop clairsemés...",
    workExcerptChinese:
      '我那些曾经如此亲近、如此挚爱的朋友们，如今都去哪了？我想，他们大概已经零落四散，无处寻觅了（叹人情冷暖）。',
    biography:
      '吕特伯夫（Rutebeuf，约1230–1285）是13世纪法王路易九世（圣路易）与腓力三世统治时期活跃于巴黎的平民诗人与剧作家。他的真实姓名无考，“Rutebeuf”是他为自己取的笔名，在古法语中由“rude”（粗莽、刚烈）与“buef”（公牛）拼合而成，他常在诗中用双关语自嘲自己像一头笨拙辛劳却一无所获的莽牛。他早年可能来自香槟地区，在巴黎接受过扎实的教士教育，通晓拉丁语与神学论争，却未能谋得稳定的教会俸禄，只得靠为王公贵族撰稿、或在巴黎街头与酒馆朗诵诗作维持生计。\n\n吕特伯夫一生留存五十六篇题材极为广泛的作品：在巴黎大学世俗大师与托钵修会（道明会、方济各会）的激烈论战中，他坚定站在世俗学者威廉·德·圣阿穆尔一边，写下辛辣的讽刺诗痛斥伪善修士；他创作了著名的宗教戏剧《提奥菲勒的奇迹》（Le Miracle de Théophile），讲述教士提奥菲勒为夺回职位与魔鬼签下契约、最终蒙圣母玛利亚救赎的故事（这也是西方浮士德母题的先驱）。然而最打动后世读者的，是他开创的“穷愁自白诗”（Poèmes de l’infortune）：在《吕特伯夫的贫穷》《吕特伯夫的婚姻》《吕特伯夫的怨歌》中，他以悲喜交加的笔调哭诉自己娶了年老丑陋又贫穷的妻子、右眼失明、冬日无柴无衣、骰子赌博输光裤子，以及“寒风吹过家门，昔日密友便被吹得无影无踪”的世态炎凉。',
    literarySignificance:
      '13世纪都市现实主义与个人抒情诗的杰出先驱，比维庸早两百年奏响了巴黎落魄文人直面苦难的灵魂独白。',
    image: authorRutebeufImg,
    shardsRequired: 5,
  },

  // 10. 纪尧姆·德·马肖 (Guillaume de Machaut)
  {
    id: 'author-guillaume-de-machaut',
    name: '10. 纪尧姆·德·马肖',
    nameOldFrench: 'Guillaume de Machaut (约1300–1377)',
    century: '14 世纪 (约1300–1377)',
    era: '中世纪“新艺术”（Ars Nova）运动与兰斯大教堂',
    majorWork: '《真实的故事》 (Le Voir Dit) —— 中世纪新艺术（Ars Nova）音乐与诗歌巨匠',
    workExcerpt:
      "Qui de sentiments n'en a, son chant ne vaut rien, car pour chanter vrai, il faut que le cœur soit joyeux ou triste.",
    workExcerptModern:
      "Qui n'éprouve pas de sentiments, son chant ne vaut rien, car pour chanter vrai, il faut que le cœur soit joyeux ou triste.",
    workExcerptChinese:
      '歌者若心中无情，其歌声便一文不值；因为要想唱出真谛，歌者的心必须或历经狂喜，或饱尝忧伤。',
    biography:
      '纪尧姆·德·马肖（Guillaume de Machaut，约1300–1377）生于香槟阿登地区的马肖村，是14世纪欧洲“新艺术”（Ars Nova）时代最伟大的诗人兼复调音乐宗师。他早年获文学硕士学位，1323年起受聘为波希米亚国王“盲王约翰”的私人秘书与随军教士，随这位传奇骑士国王征战欧洲各地二十余载。1346年盲王约翰在克雷西会战殉国后，马肖受到法王约翰二世、查理五世与贝里公爵等王公争相礼聘，定居兰斯任大教堂教士。\n\n马肖是中世纪最后一位集大诗人与大作曲家于一身的巨匠，也是首位亲自监督编排自己《全集》手抄本（附细密画与准确乐谱）的作者。音乐上，他谱写的《圣母弥撒曲》是西方音乐史上首部由单一作曲家完整创作的四声部复调弥撒曲；文学上，他确立了叙事歌、回旋诗、维勒莱歌等固定诗体的格律典范。晚年他以自己与十九岁贵族少女佩罗娜的忘年恋情为蓝本，写下九千余行的杰作《真实的故事》（Le Voir Dit），将情书、叙事长诗与配乐抒情曲融为一炉，深刻影响了乔叟与德尚。',
    literarySignificance:
      '中世纪“诗乐合一”传统的巅峰巨匠，深刻启发了德尚、弗鲁瓦萨尔、克里斯蒂娜·德·皮赞与英国诗人乔叟。',
    image: authorMachautImg,
    shardsRequired: 5,
  },
];
