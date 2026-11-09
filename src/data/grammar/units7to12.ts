/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection } from '../grammarCodex';

export const GRAMMAR_UNITS_7_TO_12: GrammarSection[] = [
  // Unit 7
  {
    id: 'helix-unit-7',
    unitNumber: 7,
    title: '单元 7：直陈式现在时与词干元音重音交替 (Alternance Vocalique)',
    subtitle: 'Laurence Hélix 教材第 7 课 · 原典《狮骑士伊凡》(Yvain ou le Chevalier au lion de Chrétien de Troyes)',
    tag: '动词形态学 · 词根元音裂变与重音位移',
    icon: 'BookOpen',
    summary: '古法语动词形态最迷人、最严谨的规律：重音在词根（强式人称：je, tu, il, ils）还是在词尾（弱式人称：nous, vous），直接决定了词干元音是否发生通俗拉丁语历史双元音化。',
    content: [
      {
        heading: '一、词干元音交替机制（Alternance vocalique radicale）',
        body: [
          '古法语动词变位的人称被严格划分为“强人称（Personnes fortes）”与“弱人称（Personnes faibles）”：',
          '• 强人称（1、2、3人称单数及第3人称复数）：重音落在词根（Accent radical）。若词根元音处于开音节，发生双元音化（Diphtongaison）。',
          '• 弱人称（第1、2人称复数 nous/vos）：重音移至屈折词尾（Accent désinentiel）。词根处于非重读位置，元音保持未裂变的单元音状态。',
          '• 经典四大交替范型：',
          '  1. e ~ ei / oi 交替（源自短 ĭ 或长 ē）：',
          '     - peser（权衡）：je pois / tu poises / il poise —— nos pesons / vos pesez / il poisent。',
          '  2. e ~ ie 交替（源自通俗拉丁语短 ĕ 裂变）：',
          '     - lever（升起）：je lief / tu lieves / il lieve —— nos levons / vos levez / il lievent。',
          '     - prier（祈求）：je prie / tu pries / il priet —— nos preions / vos preiez。',
          '  3. o ~ eu / ue 交替（源自通俗拉丁语短 ŏ 裂变）：',
          '     - morir（死亡）：je muir / tu muers / il muert —— nos morons / vos morez / il muerent。',
          '     - poeir（能够）：je puis / tu puex / il puet —— nos poons / vos poez / il pueent。',
          '  4. a ~ ai 交替（源自开音节短 a 裂变）：',
          '     - amer（爱）：je aim / tu aimes / il aime —— nos amons / vos amez / il aiment。',
        ],
        rules: [
          { rule: 'Il lieve sa main', example: '他高高举起右手（强人称重音在根音：lieve）', modern: 'Il lève sa main' },
          { rule: 'Nos levons le cors', example: '我们抬起圣躯（弱人称重音在词尾：levons）', modern: 'Nous levons le corps' },
        ],
      },
    ],
  },

  // Unit 8
  {
    id: 'helix-unit-8',
    unitNumber: 8,
    title: '单元 8：简单过去时四大类型（弱式、强式 en -i-、en -u- 与 Sigma 式）',
    subtitle: 'Laurence Hélix 教材第 8 课 · 原典《珀西瓦尔 / 圣杯传说》(Perceval ou le Conte du Graal)',
    tag: '动词形态学 · 史诗叙事过去时',
    icon: 'Feather',
    summary: '中世纪英雄史诗与圆桌传奇的绝对灵魂时态。古法语保留了古典拉丁语完成时的完整分类体系，分为词尾受重音的“弱式过去时”与词干受重音的“强式过去时”。',
    content: [
      {
        heading: '一、简单过去时四大阵营与词尾范型',
        body: [
          '1. 第一类·弱式在 -ai 过去时（Passé faible en -ai）：几乎所有第 1 组动词（-er）的归宿：',
          '   • 词尾：-ai, -as, -at/-a, -ames, -astes, -erent（chantai, chantas, chanta, chantames, chantastes, chanterent）。',
          '2. 第二类·弱式在 -i 过去时（Passé faible en -i）：第 2 组（-ir）动词：',
          '   • 词尾：-i, -is, -it, -imes, -istes, -irent（parti, partis, partit, partimes, partistes, partirent）。',
          '3. 第三类·强式在 -i- 过去时（Passé fort en -i-）：源自拉丁语长 -i- 完成时（如 feci, vidi, veni）：',
          '   • 特征：je, il, ils 具有高度简缩的强式词根，而 tu, nous, vous 词尾加长：',
          '   • faire：fis, fesis, fist, fesimes, fesistes, firent。',
          '   • veoir：vi, veïs, vit, veïmes, veïstes, virent。',
          '   • venir：vin, venis, vint, venimes, venistes, vinrent。',
          '4. 第四类·强式在 -u- 过去时（Passé fort en -u-）：拉丁语 -ui 演变而来（habui > out, potui > pot）：',
          '   • aveir：oi, eüs, ot / out, eümes, eüstes, orent / ourent。',
          '   • poeir：poi, peüs, pot / pout, peümes, peüstes, porent。',
          '   • savoir：soi, seüs, sot / sout, seümes, seüstes, sorent。',
          '5. 第五类·西格玛强式（Passé fort sigmatique en -s）：源自拉丁语 -si 完成时（dixi, scripsi）：',
          '   • dire：dis, desis, dist, desimes, desistes, dirent。',
          '   • metre：mis, mesis, mist, mesimes, mesistes, mirent。',
        ],
        rules: [
          { rule: 'Ce fist li rois', example: '国王依此行事（强式 en -i- 第三人称单数 fist）', modern: 'Cela fit le roi' },
          { rule: 'Quant li cuens l’oït', example: '当伯爵听闻此言（弱式 en -i 第三人称单数 oït）', modern: 'Quand le comte l’entendit' },
        ],
      },
    ],
  },

  // Unit 9
  {
    id: 'helix-unit-9',
    unitNumber: 9,
    title: '单元 9：未完成过去时与现在虚拟式零词尾法则',
    subtitle: 'Laurence Hélix 教材第 9 课 · 原典《兰斯洛特 / 囚车骑士》(Lancelot ou le Chevalier de la charrette)',
    tag: '动词形态学 · 未完成态与虚拟式原貌',
    icon: 'Layers',
    summary: '未完成过去时在中世纪方言中的词尾分立（-oie vs -eve），以及古法语虚拟式现在时未受类推影响前的“零词尾（Absence de -e analogique）”特征。',
    content: [
      {
        heading: '一、未完成过去时：法兰西岛 -oie 与诺曼方言 -eve',
        body: [
          '• 第 1 组动词（-er）：词尾源自拉丁语 -abam，演变为 -oe / -eve（诺曼地区）与 -oie / -eie（法兰西岛地区）：chantoie, chantoies, chantoit, chantiiens, chantiiez, chantoient。',
          '• 第 2、3 组动词：词尾源自拉丁语 -ebam / -iebam，一致采用 -eie / -oie 体系：faisoie, faisoit；disoie, disoit；vendoie, vendoit。',
          '• 第 1、2 人称复数词尾 -iiens / -iiez 保留了古老的双二音节发音，在诗律中计作两个音节。',
        ],
      },
      {
        heading: '二、现在虚拟式单数“零词尾（Désinence zéro）”法则',
        body: [
          '现代法语虚拟式第一、三人称单数强制加上词尾 -e（que je chante, qu’il vienne）。而在古法语中，直接继承自拉丁语的动词绝不带有这种类推性质的 -e：',
          '• amer：que je aim（绝无 -e！），qu’il aim / qu’il aimt。',
          '• chanter：que je chant，qu’il chant。',
          '• dire：que je die，qu’il diet / die。',
          '• venir：que je viengne，qu’il viegne / vient。',
          '• 这一“零词尾”现象在古典奥伊语中区分度极高，是判定文本年代（12世纪前vs14世纪后）的关键形态学指标！',
        ],
        rules: [
          { rule: 'Diex vos saut !', example: '愿上帝拯救庇佑您！（salvet > saut，虚拟式单数无 -e）', modern: 'Que Dieu vous sauve !' },
          { rule: 'Ainz que li solaus chiece', example: '在日落之前（虚拟式现在时 chiece）', modern: 'Avant que le soleil ne tombe' },
        ],
      },
    ],
  },

  // Unit 10
  {
    id: 'helix-unit-10',
    unitNumber: 10,
    title: '单元 10：简单将来时与条件式（不定式 + aveir 衍生语法化）',
    subtitle: 'Laurence Hélix 教材第 10 课 · 原典《圣帕特里克的炼狱》(L’Espurgatoire seint Patriz de Marie de France)',
    tag: '动词形态学 · 将来时代语法化机制',
    icon: 'Sparkles',
    summary: '通俗拉丁语如何以“动词不定式 + 助动词 aveir 变位”创新孕育出罗曼语独有的将来时与条件式，以及音节脱落带来的辅音同化与插生音。',
    content: [
      {
        heading: '一、罗曼语将来时与条件式的词源生成公式',
        body: [
          '古典拉丁语将来时（amabo）在帝国晚期崩溃，罗曼语族创造了分析性结构：',
          '1. 简单将来时（Futur simple）：不定式 + aveir 现在时变位：',
          '   • cantar + *ai > chanterai（我必须唱 / 我将唱）。',
          '   • cantar + *as > chanteras。',
          '   • cantar + *at > chantera。',
          '   • cantar + *ons > chanterons。',
          '   • cantar + *ez > chanterez。',
          '   • cantar + *ont > chanteront。',
          '2. 条件式现在时（Conditionnel présent）：不定式 + aveir 未完成时变位（-oie / -eie）：',
          '   • cantar + *eie > chanteroie / chantereie（我原该唱 / 我若能唱）。',
          '   • chanteroies, chanteroit, chanteriiens, chanteriiez, chanteroient。',
        ],
      },
      {
        heading: '二、音节音变：中元音脱落（Syncope）与过渡辅音插生（Épenthèse）',
        body: [
          '当第 2、3 组动词与将来时词尾熔合时，非重读中元音迅速脱落，导致词干辅音与将来时 -r- 直接撞击，引发强烈音变：',
          '• 舌侧音与鼻音遇到 r，插生过过渡塞音（Épenthèse de d 或 t）：',
          '  - voleir + ai > vol-r-ai > voldrai / voudrai（想要）。',
          '  - venir + ai > ven-r-ai > vendrai / viendrai（来到）。',
          '  - tenir + ai > ten-r-ai > tendrai（持有）。',
          '• 辅音完全同化（Assimilation）：',
          '  - morir + ai > mor-r-ai > morrai（死去）。',
          '  - veoir + ai > ved-r-ai > verrai（看见）。',
          '  - poeir + ai > pot-r-ai > porrai（能够）。',
        ],
        rules: [
          { rule: 'Demain vos en vendrai parler', example: '明日我将前来与您详谈（venir 将来时 vendrai）', modern: 'Demain je viendrai vous en parler' },
        ],
      },
    ],
  },

  // Unit 11
  {
    id: 'helix-unit-11',
    unitNumber: 11,
    title: '单元 11：中世纪否定系统与具体名词强化词 (Forclusifs)',
    subtitle: 'Laurence Hélix 教材第 11 课 · 原典《泰伯斯之小说》(Le Roman de Thèbes)',
    tag: '句法学 · 具象否定与语法化萌芽',
    icon: 'Scroll',
    summary: '现代法语的双重否定 ne...pas 是如何从中世纪具体的骑士与农耕物象（一步、一碎屑、一滴、一点）逐步语法化演变而来的。',
    content: [
      {
        heading: '一、单否定词 ne 的自主性与五大具体强化物象',
        body: [
          '在古法语中，纯否定词 ne 单独出现即可完整表达否定，无需任何伴随成分（如：Je ne sai = 我不知道）。',
          '为了增强叙事中的否定气势与极小量度，中世纪人们在不同动词之后加上具体的极小物质（Forclusifs）：',
          '1. pas（一步）：原专用于位移动词（aler, venir），如：“Il ne vait un pas”（他连一步都不挪动）。后在现代法语中泛化为一切动词的标准否定。',
          '2. mie（一粒面包屑，源自拉丁语 mica）：专用于吞食、思想与存在动词：“Je ne manjuce mie”（我连一口面包屑都不吃）；“Je ne cuid mie”（我绝不这般认为）。',
          '3. point（一针刺之孔，源自 punctum）：用于视觉、精确度量：“Il ne voit point”（他一眼也看不见）。',
          '4. gote / goutte（一滴水珠）：专用于视觉与知觉：“Il ne voit gote”（他连一滴水都看不清，完全目盲）。现代法语残留成语：N’y voir goutte。',
          '5. 其他生动的民间极小物象：amende（一颗杏仁）、ail（一瓣大蒜）、pome（一颗苹果）、feste（一根麦秆），如：“Ne prisier un festu”（视其不如一根枯草麦秸）。',
        ],
        rules: [
          { rule: 'Je ne le pris un ail', example: '我视其如同一瓣烂蒜，毫无价值（具象极小量否定）', modern: 'Je ne l’estime pas d’un sou' },
          { rule: 'N’i voit gote', example: '他眼前漆黑一团，不能视物（goutte 专用于视觉否定）', modern: 'Il n’y voit goutte' },
        ],
      },
    ],
  },

  // Unit 12
  {
    id: 'helix-unit-12',
    unitNumber: 12,
    title: '单元 12：从属句体系、连词网络与虚拟式语式控制',
    subtitle: 'Laurence Hélix 教材第 12 课 · 原典《特洛伊之小说》(Le Roman de Troie de Benoît de Sainte-Maure)',
    tag: '复合句法 · 连词网络与主从呼应',
    icon: 'BookOpen',
    summary: '古法语主从复合句网络：全功能连词 que 的核心地位，条件句中的 se，以及在愿望、怀疑、让步、否定从句中严格施加的虚拟式时态呼应。',
    content: [
      {
        heading: '一、从属连词全谱系与语义场',
        body: [
          '• 条件从句：由 se / s’ 引导（相当于现代法语 si）。古法语条件从句的一大奇观是：se 从句不仅可接未完成过去时，更可直接接直陈式现在时甚至条件式，句法自由度远大于现代法语！',
          '• 时间从句：quant（当…时）、des que（自从…以来）、tant com（只要…依然）、ainz que（在…之前，强制后接虚拟式）。',
          '• 原因从句：por ce que（因为）、puis que（既然）。',
          '• 目的从句：por que / a ce que（以便，必须后接虚拟式）。',
          '• 让步从句：ja soit ce que / combien que / tout soit il que（纵使，强制后接虚拟式）。',
        ],
      },
      {
        heading: '二、虚拟式语式控制律（Contrôle du mode Subjonctif）',
        body: [
          '在下列核心句法环境中，从句动词强制进入虚拟式：',
          '1. 主句动词表达意愿、祈愿、命令或阻拦：commander que, proier que, defendre que。',
          '2. 主句为否定或疑问句，其从句内容具有非实存性：N’i a home qui nel sace（世间无人不知此事）。',
          '3. 最高级修饰的先行词引导的限定从句：C’est la plus bele dame qu’om puisse veoir（这是人们所能见到的最美仕女）。',
        ],
        rules: [
          { rule: 'Ainz qu’il muire', example: '在他战殁身亡之前（ainz que 强制引导虚拟式 muire）', modern: 'Avant qu’il ne meure' },
          { rule: 'Se vos plaist', example: '假若您乐意（条件连词 se 引导直陈式）', modern: 'S’il vous plaît' },
        ],
      },
    ],
  },
];
