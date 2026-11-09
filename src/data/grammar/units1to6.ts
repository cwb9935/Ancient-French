/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection } from '../grammarCodex';

export const GRAMMAR_UNITS_1_TO_6: GrammarSection[] = [
  // Unit 1
  {
    id: 'helix-unit-1',
    unitNumber: 1,
    title: '单元 1：古法语异质性、核心连缀词 si 与 V2 语序律',
    subtitle: 'Laurence Hélix 教材第 1 课 · 原典《厄弗朗之圣亚历克西斯之歌》(La Vie de saint Alexis)',
    tag: '基础导论 · 语序与句法连缀',
    icon: 'Scroll',
    summary: '9-13世纪高卢-罗曼语族向早期古法语过渡的形态特征。手抄本无标点、无现代正字法分词，必须依靠核心形态句法标志（如连缀词 si 与动词第二位律）辨明分句主次与叙事时间链条。',
    content: [
      {
        heading: '一、核心连缀词 si 的六大语义语法图谱',
        body: [
          '古法语副词/连词 si 源自拉丁语副词 sic（意为“如此、这样”），但在中古法语乃至现代法语中其功能已全面分化退化。在中世纪奥伊语叙事手抄本中，si 具备以下六大多元功能：',
          '1. 时间承接功能（Valeur temporelle / consécutive）：相当于现代法语的 puis, alors, aussitôt，表示叙事链条中紧密相连的下一步动作。例如：“Li chevaliers descent, si entre el chastel”（骑士翻身下马，随后步入城堡）。',
          '2. 词源状语功能（Valeur étymologique）：忠实保留拉丁语 sic 本义，作方式副词“如此、这样（ainsi, de cette manière）”。',
          '3. 施事照应与主语聚焦功能（Valeur anaphorique / thématisante）：在长复合句中重新唤起前文主语，使受众注意力聚焦于施事主体。',
          '4. 逻辑因果推导功能（Valeur consécutive-logique）：连接原因与结果，相当于 donc, par conséquent。',
          '5. 轻度转折与对立功能（Valeur adversative）：在特定对立语境中承担转折意味，相当于 pourtant, mais。',
          '6. 经典引述固定程式“si com”：意为“正如、如同（comme, ainsi que）”，在《圣徒传》与英雄史诗中用于引证权威史料，如“Si com l’estoire reconte”（正如史传所载）。',
        ],
        rules: [
          { rule: 'Et li reis si parla', example: '国王于是开口说道（时间紧密承接）', modern: 'Et le roi alors parla' },
          { rule: 'Si fist com sages', example: '他行事正如智者一般（词源方式副词）', modern: 'Il agit ainsi qu’un homme sage' },
          { rule: 'Si com li clers nos dit', example: '正如那位学者向我们述说的那样（权威引述）', modern: 'Comme le clerc nous le dit' },
        ],
      },
      {
        heading: '二、动词第二位律（V2）与 Thurneysen 倒装法则',
        body: [
          '古法语句法结构深受法兰克日耳曼底层的深远影响，严格遵循动词第二位律（Verb-Second, V2 Rule）：',
          '• 在独立主句（Proposition indépendante）中，句首位置（V1 槽位）通常被时间状语、地点状语、介词短语或直接宾语（C）占据。',
          '• 一旦句首被上述成分填充，限定动词强制进驻第二核心位置（V2 槽位），而主语（S）必须发生倒装，后置于动词之后（形成 C - V - S 经典中世纪语序）。',
          '• 示例：Grant duel ot li emperere.（直接宾语 Grant duel + 限定动词 ot + 倒装主语 li emperere）。',
          '• 在从属分句（Subordonnées）中，动词第二位限制解除，语序通常恢复为拉丁语向现代法语过渡的主-谓-宾（S-V-C）顺直语序。',
        ],
        rules: [
          { rule: 'Par cel boscage s’en vait li quens', example: '穿过那片幽林，伯爵疾驰而去（状语前置 + 动词第2位 + 主语倒装）', modern: 'Par ce bois s’en va le comte' },
          { rule: 'Maint coup i dona li ber', example: '勇士在那里劈下了无数重击（宾语前置 + 动词 + 主语倒装）', modern: 'Maint coup y donna le baron' },
        ],
      },
    ],
  },

  // Unit 2
  {
    id: 'helix-unit-2',
    unitNumber: 2,
    title: '单元 2：阳性名词双格系统（Cas Sujet 与 Cas Régime）',
    subtitle: 'Laurence Hélix 教材第 2 课 · 原典《罗兰之歌》(La Chanson de Roland)',
    tag: '核心形态学 · 阳性名词两格律法',
    icon: 'Columns',
    summary: '古法语屈折语体系的最核心支柱：由拉丁语六格简并为双格（Système bicasuel）：主格（CS，充当主语、同位语及系表语）与直宾格（CR，充当直接受词、介词补足语及绝对所有格）。',
    content: [
      {
        heading: '一、阳性名词三大范式（Type I, Type II, Type III）',
        body: [
          '1. 第一类·带 -s 标记阳性名词（Type I / Sigmatique）：源自拉丁语第二变格法名词（-us / -um）。呈现中世纪语法标志性的“X 对角线变格模式”：',
          '   • 单数主格（CS sg.）加 -s 标记：li murs；单数直宾格（CR sg.）零词尾：le mur。',
          '   • 复数主格（CS pl.）零词尾：li mur；复数直宾格（CR pl.）加 -s 标记：les murs。',
          '2. 第二类·无词尾阳性名词（Type II / Asigmatique）：源自拉丁语 -er/-or 结尾的名词（如 pater, frater, arbor）。',
          '   • 单数主格与单数直宾格形态完全相同，均不加 -s：li pere / le pere。在此类名词单数中，格位全赖定冠词 li（主格）与 le（直宾格）精准甄别！',
          '   • 复数主格与复数直宾格均加 -s 标记：li peres / les peres。',
          '3. 第三类·不等音节重音转移阳性名词（Type III / Imparisyllabique）：直接源自拉丁语第三变格法，主格与属格/斜格音节数不同，且重音发生音节转移：',
          '   • 拉丁语主格 báro（重音在前干）→ 古法语主格单数 li ber；斜格 barónem（重音后移）→ 直宾格单数 le baron。',
          '   • 拉丁语 sénior（主格）→ li sire；seniórem（斜格）→ le seignor。',
          '   • 拉丁语 cómes（主格）→ li cuens；cómitem（斜格）→ le conte。',
          '   • 拉丁语 ínfans（主格）→ li enfes；infántem（斜格）→ l’enfant。',
          '   • 现代法语在格位坍塌后，几乎全盘抛弃主格形态，唯独继承了直宾格（baron, seigneur, comte, enfant）；仅有少数派生词如 sire（对君王尊称）与 seigneur 双双作为独立词汇流传至今。',
        ],
        rules: [
          { rule: 'Li ber Rollant ferit l’espee', example: '勇士罗兰挥舞圣剑（li ber 为 Type III 主格单数，作主语）', modern: 'Le baron Roland frappa de l’épée' },
          { rule: 'Carles choisit le baron', example: '查理大帝见到了男爵（le baron 为 Type III 直宾格单数，作受词）', modern: 'Charles aperçut le baron' },
        ],
      },
      {
        heading: '二、特殊音变：塞擦音字母 z [ts] 与软腭音化 -l > -u',
        body: [
          '在阳性名词加上主格或复数标记 -s 时，遭遇前接辅音会发生规则历史语音同化：',
          '• 齿龈塞音 d/t + s 熔合为中世纪独特的塞擦音字母 z（读音为 [ts]）：an + s > anz [ants]（岁月）；pechié + s > pechiez [petʃiets]（罪愆）。',
          '• 舌尖边音 l 在辅音 s 之前发生软腭音化（Vocalisation de l），流变为元音 [u]：cheval + s > chevaus [tʃəvals > tʃəvaus]（骏马）；esmal + s > esmauz（珐琅）。',
        ],
      },
    ],
  },

  // Unit 3
  {
    id: 'helix-unit-3',
    unitNumber: 3,
    title: '单元 3：阴性名词变格系统与词尾演化',
    subtitle: 'Laurence Hélix 教材第 3 课 · 原典《庇卡底古歌谣》(La Séquence de sainte Eulalie)',
    tag: '核心形态学 · 阴性名词与词尾脱落',
    icon: 'Sparkles',
    summary: '阴性名词绝大多数源自拉丁语第一变格法（-a），由于末尾 -a 弱化为中性中央元音 [ə]（写法为 -e），导致其变格模式与阳性名词产生鲜明对比。',
    content: [
      {
        heading: '一、阴性名词三大类范式详解',
        body: [
          '1. 第一类·带 -e 规则阴性名词（Type I en -e）：源自拉丁语第一变格法（rosa, terra）。',
          '   • 单数形态完全对称：单数主格（CS）与单数直宾格（CR）均写作 -e，绝不带 -s（la rose / la rose）。',
          '   • 复数形态完全统一：复数主格（CS）与复数直宾格（CR）均加上词尾 -s（les roses / les roses）。',
          '   • 这一模式是现代法语规则名词复数加 -s 规则的直接历史祖先！',
          '2. 第二类·无 -e 阴性名词（Type II sans -e）：源自拉丁语第三变格法中以辅音结尾的阴性词（如 bonitas, civitas, mors, virtus）。',
          '   • 单数主格（CS）继承拉丁语 -s：la cités / la morz / la vertuz。',
          '   • 单数直宾格（CR）无 -s：la cité / la mort / la vertut。',
          '   • 复数主格与直宾格均带 -s：les cités / les morz。',
          '3. 第三类·阴性不等音节名词（Type III Imparisyllabique）：包含罕见但极具文学价值的亲属与身份词汇：',
          '   • 拉丁语 sóror（主格）→ li suer（单数主格）；sorórem（斜格）→ la seror（单数直宾格）。复数主格 les serors，直宾格 les serors。',
          '   • 单数主格 nonne（修女主格），单数直宾格 nonnain（斜格加 -ain 词尾）。',
        ],
        rules: [
          { rule: 'La cités est bele', example: '这座城池壮丽非凡（Type II 阴性主格单数加 -s）', modern: 'La cité est belle' },
          { rule: 'Virent la cité', example: '他们望见了城池（Type II 阴性直宾格单数不加 -s）', modern: 'Ils virent la cité' },
          { rule: 'Li suer le ploret', example: '妹妹为此痛哭流涕（Type III 阴性主格单数 li suer）', modern: 'La sœur le pleure' },
        ],
      },
    ],
  },

  // Unit 4
  {
    id: 'helix-unit-4',
    unitNumber: 4,
    title: '单元 4：形容词分类、合成比较级与修饰配合',
    subtitle: 'Laurence Hélix 教材第 4 课 · 原典《不列颠的布鲁特》(Le Roman de Brut de Wace)',
    tag: '形态句法 · 形容词格位配合与级范畴',
    icon: 'Layers',
    summary: '古法语形容词不仅要配合性（阳性/阴性）与数（单数/复数），更必须与被修饰名词的格位（主格 CS / 直宾格 CR）严格呼应配合。',
    content: [
      {
        heading: '一、形容词两大经典分类（两尾类 vs 单尾类）',
        body: [
          '1. 第一大类·两尾形容词（Adjectifs à deux terminaisons）：源自拉丁语 bonus, bona, bonum。',
          '   • 阳性随名词 Type I 变格：CS sg. bons，CR sg. bon；CS pl. bon，CR pl. bons。',
          '   • 阴性随名词 Type I 变格：单数均为 bone，复数均为 bones。',
          '2. 第二大类·单尾形容词（Adjectifs à une seule terminaison）：源自拉丁语第三变格法双性同形形容词（如 grandis, fortis, talis, qualis）。',
          '   • 最显著的古法语特征：阴性单数不加词尾 -e！阴阳两性形态完全相同！',
          '   • grant（大的）：阳性 CS sg. granz，CR sg. grant；阴性 CS sg. granz，CR sg. grant！',
          '   • 痕迹：现代法语保留的固定词汇如 grand-mère（祖母）、grand-rue（大街）、grand-faim（奇饥），其中间的连字符正是现代语法学家误以为脱落了 -e 而强加的！在古法语中原本就是合乎规则的 une grant mere。',
        ],
        rules: [
          { rule: 'Une grant merveille', example: '一桩巨大的奇迹（单尾形容词 grant 阴性不带 -e）', modern: 'Une grande merveille' },
          { rule: 'Li reis est bons et cortois', example: '国王英明且温文尔雅（主格表语形容词均加 -s）', modern: 'Le roi est bon et courtois' },
        ],
      },
      {
        heading: '二、比较级与最高级的形态流变',
        body: [
          '• 规则比较级：由副词 plus + 形容词原级构成（Plus forte est la cité）。',
          '• 合成比较级（Comparatifs synthétiques）：古法语忠实保留了拉丁语不规则比较级形式，且带有完整的双格变格：',
          '  - melior > CS sg. mieldre / CR sg. meillor（更好的，源自拉丁语 meliorem）。',
          '  - pejor > CS sg. pire / CR sg. peior（更糟的）。',
          '  - major > CS sg. maudre / maire / CR sg. maior（更大的）。',
        ],
      },
    ],
  },

  // Unit 5
  {
    id: 'helix-unit-5',
    unitNumber: 5,
    title: '单元 5：指示代词系统与绝对直宾格 (Cas Régime Absolu)',
    subtitle: 'Laurence Hélix 教材第 5 课 · 原典《特里斯坦与伊瑟》(Tristan et Iseut de Béroul)',
    tag: '代词系统 · 空间指称与无介词属格',
    icon: 'BookOpen',
    summary: '中世纪奥伊语指示系统构建起精确的“近指/远指”空间哲学对立；同时直宾格不仅表示受词，更可无需介词 de 直接表达封建人际所属。',
    content: [
      {
        heading: '一、近指系统（cist）与远指系统（cil）的严密对立',
        body: [
          '古法语指示词（兼作指示形容词与指示代词）由中性词根 ecce 熔接而成：',
          '1. 近指系列（Série de proximité · 源自 ecce + iste）：表示空间、时间或叙事心理上邻近此处的对象（相当于现代法语 ce...-ci, celui-ci）。',
          '   • 阳性单数：主格 cist / cis，直宾格 cest，补语代词重读格 cestui。',
          '   • 阳性复数：主格 cist，直宾格 cez。阴性单数 ceste，复数 cez。',
          '2. 远指系列（Série d’éloignement · 源自 ecce + ille）：表示彼方、远处或前文提及之人事物（相当于 celui-là）。',
          '   • 阳性单数：主格 cil / cis，直宾格 cel，重读代词 celui。',
          '   • 阳性复数：主格 cil，直宾格 cels / ceus。阴性单数 cele，复数 celes。',
        ],
        rules: [
          { rule: 'Cist chevaliers est preux', example: '这位骑士英武非凡（近指主格单数 cist）', modern: 'Ce chevalier-ci est preux' },
          { rule: 'Cil dist le mot', example: '那位骑士说出了誓言（远指代词主格 cil）', modern: 'Celui-là dit la parole' },
        ],
      },
      {
        heading: '二、绝对直宾格所有格句法（Cas Régime Absolu / Génitif sans préposition）',
        body: [
          '古法语在表示专有名词或具有崇高尊严的人际所属关系时，无需使用任何介词 de，直接将所属人置于直宾格（CR）之后：',
          '• 构成法：被拥有物（中心语） + 直宾格名词（所属者）。',
          '• 原典名例：',
          '  - Li fust l’arbre（树的躯干，无需 de l’arbre）。',
          '  - L’espee Rollant（罗兰的圣剑，绝不写作 l’épée de Roland）。',
          '  - La fille le rei（国王的女儿）。',
          '  - L’ost l’empereor（皇帝的大军）。',
          '• 现代法语中这一古老句法已几乎荡然无存，仅在极少数地名与固定节日中固化留存：Fête-Dieu（基督圣体节）、Hôtel-Dieu（主宫医院）、Bourg-la-Reine（王后堡）。',
        ],
        rules: [
          { rule: 'L’anme son pere', example: '他父亲的灵魂（绝对直宾格无需介词 de）', modern: 'L’âme de son père' },
        ],
      },
    ],
  },

  // Unit 6
  {
    id: 'helix-unit-6',
    unitNumber: 6,
    title: '单元 6：人称代词、物主代词与附着代词现象 (Enclise)',
    subtitle: 'Laurence Hélix 教材第 6 课 · 原典《列那狐传奇》(Le Roman de Renart)',
    tag: '形态句法 · 附着熔接与重读对立',
    icon: 'Feather',
    summary: '人称代词的重读（Tonique）与非重读（Atone）双轨并行机制，以及辅音相遇时发生的古老附着音变（Enclise）。',
    content: [
      {
        heading: '一、人称代词：连带形式 (Conjoint) 与独立重读形式 (Disjoint)',
        body: [
          '• 第1人称：主格 je / jo；非重读受格 me；重读格 moi / mei（置于介词后或作强调）。',
          '• 第2人称：主格 tu；非重读受格 te；重读格 toi / tei。',
          '• 第3人称阳性：主格 il；非重读直宾 le，间宾 li；重读格 lui。',
          '• 第3人称阴性：主格 ele / elle；非重读直宾 la，间宾 li；重读格 li / elle。',
          '• 物主代词分为轻读形容词性物主词（mon, ton, son）与重读代词性物主词（li miens, li tiens, li suens）。在古法语中，重读物主词常直接作表语：“Ceste espee est moie”（这柄剑是我的！）。',
        ],
      },
      {
        heading: '二、中世纪附着词（Enclise）公式全解',
        body: [
          '当某些单音节非重读小词（如定冠词 le/les、代词 le/les）与前接的单音节连词或否定词紧密结合时，会发生音节熔接与辅音缩并：',
          '1. ne + le > nel（如：“Nel poet trover” = 他无法找到它）。',
          '2. ne + les > nes（如：“Nes oït mie” = 他完全听不到他们）。',
          '3. si + le > sil（如：“Sil ferit el cors” = 于是他在躯干上刺击了他）。',
          '4. si + les > sis（如：“Sis mena en France” = 于是他将他们带回法兰西）。',
          '5. je + le > jel / jol（如：“Jel vos dirai” = 我将向您述说此事）。',
          '6. je + les > jes（如：“Jes conois bien” = 我对他们深为了解）。',
        ],
        rules: [
          { rule: 'Nel poet guarder', example: '他无法看护它（ne + le 缩为 nel）', modern: 'Il ne peut le garder' },
          { rule: 'Sil baisa en la bouche', example: '随后他在其唇上吻了一下（si + le 缩为 sil）', modern: 'Et il le baisa sur la bouche' },
        ],
      },
    ],
  },
];
