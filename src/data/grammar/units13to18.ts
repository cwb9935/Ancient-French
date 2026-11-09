/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection } from '../grammarCodex';

export const GRAMMAR_UNITS_13_TO_18: GrammarSection[] = [
  // Unit 13
  {
    id: 'helix-unit-13',
    unitNumber: 13,
    title: '单元 13：关系词系统（qui, cui, que, dont, ou）与省音熔接 (Élision)',
    subtitle: 'Laurence Hélix 教材第 13 课 · 原典《埃涅阿斯之小说》(Le Roman d’Énéas)',
    tag: '关系代词 · 格位形态与介词融合',
    icon: 'Columns',
    summary: '关系代词保留了完整的拉丁语格位系统：主格 qui，直接受格 que，间接受格/与格/属格 cui，以及源自 de unde 的复合关系副词 dont。',
    content: [
      {
        heading: '一、关系代词严密格位对立：qui / cui / que',
        body: [
          '1. 主格 qui（指人或指物均可）：在从句中充当主语。在盎格鲁-诺曼方言中常写作 ki。',
          '2. 直宾格 que / qu’：在从句中充当直接宾语（如：Li chevaliers que je vi = 我见到的那位骑士）。',
          '3. 间宾与属格 cui（源自拉丁语 cui）：专用于指代人！具有双重语法功能：',
          '   • 单独使用表示所有格（无需介词 de）：La damoisele cui robe estoit de soie（那个衣裳是丝绸织就的少女，相当于 dont la robe）。',
          '   • 与介词连用表示间接受词：A cui je parlai（我与之交谈之人）；De cui il dist（关于他所提及之人）。',
          '4. dont（源自 de + unde）：不仅可表示“关于谁、关于何物”，更常保留拉丁语空间本义，表示“自何处而来（d’où）”！',
        ],
        rules: [
          { rule: 'Li reis cui terre cist estoit', example: '这片土地所属的那位国王（cui 独力承担属格，无需 de）', modern: 'Le roi dont cette terre était le fief' },
          { rule: 'La chambre dont il issi', example: '他由之迈步走出的那间内殿（dont 保留词源出处义 d’où）', modern: 'La chambre d’où il sortit' },
        ],
      },
    ],
  },

  // Unit 14
  {
    id: 'helix-unit-14',
    unitNumber: 14,
    title: '单元 14：不变词类（副词后缀 -ment、复合介词与并列连词）',
    subtitle: 'Laurence Hélix 教材第 14 课 · 原典《克里斯蒂娜·德·皮赞之妇女城》(La Cité des Dames)',
    tag: '词法学 · 词缀演化与理性逻辑连接词',
    icon: 'Feather',
    summary: '副词后缀 -ment 的阴性构词起源（mente），以及中世纪思想家如何借助丰富的副词与并列连词构建早期人文主义论说体系。',
    content: [
      {
        heading: '一、副词后缀 -ment 的词源机制与两类形容词基底',
        body: [
          '现代法语所有以 -ment 结尾的副词，源自拉丁语阴性离格结构：形容词阴性 + mente（意为“以…的心意/心境”）：',
          '• 两尾形容词：必须先取其阴性形态（以 -e 结尾），再拼接 -ment：',
          '  - bon > bone + ment > bonement（善良真诚地）。',
          '  - fier > fiere + ment > fierement（傲岸英勇地）。',
          '• 单尾形容词（如 grant, fort, tel）：在古法语中阴性原本就无 -e！因此古法语副词直接拼接在形容词干后：',
          '  - grant > grandment / granment（极大程度地，古法语中绝不作 grandement！）。',
          '  - fort > forment（极有力地、极其，源自 fort + ment，辅音同化为 -rm-）。',
          '  - leal > lealment（忠诚地）。',
        ],
      },
      {
        heading: '二、并列连词与逻辑承接词网络',
        body: [
          '• et / e：最经典的纯并列连词。',
          '• car / quar（源自 quare）：表原因推导（因为）。',
          '• mais / mes（源自 magis）：表对立转折（然而、但是）。',
          '• ne / ni：表否定并列。',
          '• ainz / ançois（源自 antius）：意为“相反、更确切地说（au contraire, plutôt）”。',
        ],
        rules: [
          { rule: 'Il le ferit forment', example: '他极重地猛击了他（fort + ment > forment）', modern: 'Il le frappa vigoureusement' },
        ],
      },
    ],
  },

  // Unit 15
  {
    id: 'helix-unit-15',
    unitNumber: 15,
    title: '单元 15：复杂句句法、主题化断裂 (Dislocation) 与焦点语序',
    subtitle: 'Laurence Hélix 教材第 15 课 · 原典《圣路易传》(Vie de saint Louis de Joinville)',
    tag: '高等句法 · 主题焦点与口语断裂结构',
    icon: 'Layers',
    summary: '茹安维尔笔下鲜活的宫廷与战场实录：句子不再是死板的拉丁格律，而是通过左侧移位（Dislocation à gauche）、前置悬空主语与重读代词呼应展现极其生动的叙事戏剧性。',
    content: [
      {
        heading: '一、左侧主题化移位（Dislocation à gauche et Focalisation）',
        body: [
          '古法语为了突出叙事核心，常将核心实体移至句首（Thématisation），然后在动词后以附着代词或倒装结构予以呼应：',
          '• 示例：“Li roys, quant il oï ce, si plora”（国王，当他听闻此言时，便痛哭流涕）。',
          '• 悬空受格主题化：“Ce cop, nel pot sofrir li quens”（这一击，伯爵绝无法忍受）。',
        ],
      },
      {
        heading: '二、无先行词关系代词（Pronom relatif sans antécédent）',
        body: [
          '古法语中 qui 可独立充当“凡…之人（celui qui, quiconque）”，无需先行词支持：',
          '• Qui sage est, nel doit taisir = 凡聪慧有学识之人，绝不可保持沉默。',
          '• Qui droit veut tenir, Dex le guarde = 凡恪守正道者，上帝必常佑之。',
        ],
        rules: [
          { rule: 'Qui pert la foi, pert tout', example: '凡丧失信德之人，即丧失一切（无先行词 qui）', modern: 'Celui qui perd la foi perd tout' },
        ],
      },
    ],
  },

  // Unit 16
  {
    id: 'helix-unit-16',
    unitNumber: 16,
    title: '单元 16：分词与副动词（过去分词配合与 -ant 形式）',
    subtitle: 'Laurence Hélix 教材第 16 课 · 原典《玫瑰传奇》(Le Roman de la Rose de Guillaume de Lorris)',
    tag: '句法学 · 分词性数格一致配合法则',
    icon: 'Sparkles',
    summary: '古法语复合时态中过去分词配合的严格性远远超过现代法语！无论是跟助动词 estre 还是跟 aveir，过去分词都必须与其指代的核心名词严格配合性、数和格位！',
    content: [
      {
        heading: '一、过去分词与两大助动词配合法则',
        body: [
          '1. 与 estre 连用：过去分词作为主格表语，强制与主语发生【性、数、主格 CS】全面配合：',
          '   • 阳性单数：Li murs est faiz [fait + s]（城墙已被修筑好）。',
          '   • 阳性复数：Li mur sont fait [无 -s！因为主格复数无 -s]！',
          '   • 阴性单数：La dame est morte；阴性复数：Les dames sont mortes。',
          '2. 与 aveir 连用：过去分词强制与直接宾语发生【性、数、宾格 CR】配合（无论宾语位于动词之前还是之后！）：',
          '   • 在古法语中，即便直接宾语在动词后面，过去分词也通常发生配合：',
          '   • “Il a faites ses prieres”（他做完了自己的祈祷，faites 提前配合后置宾语 prieres）！',
        ],
      },
      {
        heading: '二、-ant 形式的双重身份：现在分词 vs 副动词 (Gérondif)',
        body: [
          '• 现在分词（Participe présent）：承当形容词功能，修饰名词时带格位配合（如：Une eve boillanz = 翻滚沸腾的魔泉）。',
          '• 副动词（Gérondif）：常与介词 en 连用（en chantant），表示动作伴随状态、时间或方式，词尾永远不变。',
        ],
        rules: [
          { rule: 'Il a prise l’espee', example: '他执起了佩剑（过去分词 prise 与阴性宾格 espee 配合）', modern: 'Il a pris l’épée' },
        ],
      },
    ],
  },

  // Unit 17
  {
    id: 'helix-unit-17',
    unitNumber: 17,
    title: '单元 17：中世纪词汇学、多义词演化与伪友词 (Faux-amis)',
    subtitle: 'Laurence Hélix 教材第 17 课 · 原典《大遗嘱集》(Le Grand Testament de François Villon)',
    tag: '词汇学 · 历史语义演化与防陷阱辨析',
    icon: 'BookOpen',
    summary: '研读古法语文献最致命的陷阱是“字面形似而词义截然相反”的伪友词（Faux-amis）。必须深入封建骑士社会精神底层，还原词汇本义。',
    content: [
      {
        heading: '一、中世纪五大核心封建“假朋友”词汇深度解剖',
        body: [
          '1. prou / preux（英武、勇烈）：现代法语几已废弃。中世纪是骑士最高褒奖，包含战勇（Prouesse）、忠诚（Loyaute）与智谋（Sen）。',
          '2. gentil（出身高贵的、有良好家世的）：源自拉丁语 gentilis。绝非现代法语的“亲切、可爱”！在中世纪指代身系名门贵胄之血统。',
          '3. dolor / deuil（创伤、肉体重伤、阵亡）：现代仅指“心灵悲伤”。中世纪在战场语境中常指肉体承受的开膛破肚之致命物理重创！',
          '4. engin（智谋、机智、智谋计策）：源自 ingenium。在骑士文学中指高超的智巧策略；在攻城战中指代攻城投石机；绝非现代的“发动机机车”！',
          '5. noise（喧哗、骚动、战阵纷争）：绝非现代英语的噪音或现代法语单纯声响，在中世纪特指激烈的争吵甚至流血冲突（Chercher noise = 寻衅滋事）。',
        ],
        rules: [
          { rule: 'Li quens fu gentils hom', example: '伯爵乃是出身名门显赫之士（gentil 指贵族血统）', modern: 'Le comte était un homme de noble lignage' },
          { rule: 'Maintes dolors i ot', example: '无数战士在那里遭致致命伤残（dolor 指肉体创伤）', modern: 'Bien des blessures mortelles y eurent lieu' },
        ],
      },
    ],
  },

  // Unit 18
  {
    id: 'helix-unit-18',
    unitNumber: 18,
    title: '单元 18：语音演变律与奥伊语四大方言 (Dialectologie)',
    subtitle: 'Laurence Hélix 教材第 18 课 · 原典《神圣与世俗的转折》(La Fin du Moyen Âge)',
    tag: '历史语言学 · 方言地理学与格位消亡',
    icon: 'Scroll',
    summary: '奥伊语四大方言（法兰西岛语、盎格鲁-诺曼语、皮卡第语、香槟语）的语音交错，以及14-15世纪双格系统全面解体、现代法语语法框架破土而出的历史全貌。',
    content: [
      {
        heading: '一、北方奥伊语（Langue d’oïl）四大方言核心判别特征',
        body: [
          '1. 法兰西岛语（Francien · 巴黎王室方言）：以 -eau, -oi, ch- 为规范，逐渐成为全法书面文学共主。',
          '2. 皮卡第语（Picard · 东北重镇）：保留软腭音 c- 未发生向 ch- 的腭化：',
          '   • 皮卡第语 caitif（俘虏/不幸者）对应法兰西岛语 chetif。',
          '   • 阴性定冠词常作 li（与阳性主格冠词同形）。',
          '3. 盎格鲁-诺曼语（Anglo-normand · 跨海峡征服者方言）：',
          '   • 拒绝法语双元音化 oi，顽强保留单一纯元音 u 或 ui：nus（代替 nous），vus（代替 vous），cuntre（代替 contre）。',
          '   • 早期保留词尾齿擦音 -t/-d（fiet, spuset）。',
          '4. 香槟语（Champenois · 典雅文学重镇）：特洛伊的克雷蒂安的母语方言，以极其严谨的双格保留与优美的鼻化元音闻名。',
        ],
      },
      {
        heading: '二、双格系统的解体与现代法语形态生成（14-15世纪）',
        body: [
          '随着13世纪末词尾弱化与辅音脱落，双格系统在日常口语中迅速瓦解：',
          '• 屈折标记 -s 从“单数主格标记”退化为纯粹的“复数统一标志”。',
          '• 直宾格全面吞并主格，成为现代法语绝大多数名词的唯一标准原型（如：enfant, baron, seigneur, mur, mort）。',
          '• 句法补偿：为了弥补词尾失去表意功能的缺陷，法语强制锁定了严格的 S-V-O（主语-谓语-宾语）固定语序，并普遍强制要求使用主格代词（je, tu, il 不可省略）。',
        ],
        rules: [
          { rule: 'Anglo-normand : Ne vus sanz mei', example: '盎格鲁-诺曼方言写法语 vus 代替法兰西岛 vous', modern: 'Ni vous sans moi' },
          { rule: 'Picard : Canter pour chanter', example: '皮卡第方言保留硬腭音 c- 未腭化为 ch-', modern: 'Chanter' },
        ],
      },
    ],
  },
];
