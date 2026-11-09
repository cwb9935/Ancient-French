/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection } from '../grammarCodex';

export const SECTIONS_13_TO_18: GrammarSection[] = [
  // Unit 13
  {
    id: 'helix-unit-13',
    unitNumber: 13,
    title: '单元 13：冠词与代词缩合系统 (Contraction)、元音省音 (Élision) 与连读',
    subtitle: 'Laurence Hélix 教材第 13 课 · 原典居尧姆·德·洛里斯《玫瑰传奇》(Le Roman de la Rose)',
    tag: '缩合音变 · 抄本正字法',
    icon: 'Layers',
    summary: '全面解析古法语三大介词（a, de, en）与阳性定冠词（le, les）的缩合演进史、辅音前边音 l 的元音化（al > au, del > du, el > ou），以及元音省音规则。',
    content: [
      {
        heading: '一、三大核心介词 (a, de, en) 与定冠词的缩合矩阵',
        body: [
          '当介词 **a**（向/在）、**de**（从/的）、**en**（在……内）后接以**辅音开头**的阳性单数名词（冠词 le）或阳/阴性复数名词（冠词 les）时，强制发生语音缩合，且在 12 世纪经历了边音 l 元音化为 u 的关键音变：',
          '1. **单数阳性（介词 + le + 辅音开头名词）**：',
          '   • **a + le ➔ al (11世纪) ➔ au (12-13世纪)**（例：al roi > au roi；但若后接元音开头名词，则不缩合而省音作 **a l’**，如 a l’empereor, a l’enfant！）。',
          '   • **de + le ➔ del (11世纪) ➔ deu ➔ du (12-13世纪)**（例：del chastel > du chastel；元音前作 **de l’**，如 de l’or）。',
          '   • **en + le ➔ enl ➔ el (11-12世纪) ➔ eu ➔ ou / u (13世纪)**！（【核心考点】：在古法语原典中看到 **el** 或 **ou** 后接名词，90% 是 **en + le**“在……里面”，如 el bois / ou bois 在树林里，el palais 在王宫里，el monde 在世上！切勿将 ou 误认作连词“或者”或副词“哪里”！）。',
          '2. **复数阳/阴性（介词 + les + 任意名词）**：',
          '   • **a + les ➔ als ➔ as (古典标准形) / aus / aux**（例：as chevaliers 向骑士们，as dames 向贵妇们）。',
          '   • **de + les ➔ dels ➔ des**（例：des barons, des portes）。',
          '   • **en + les ➔ els ➔ es**（例：es chambres 在各个房间里，es mains 在双手中；现代法语保留在学术头衔 docteur **ès** lettres 文科博士 中！）。',
        ],
        rules: [
          { rule: 'Il entra el (en+le) vergier et vit les flors es (en+les) arbres.', example: '他走进果园里（el = dans le），看见树枝间（es = dans les）的花朵', modern: 'Il entra dans le verger et vit les fleurs dans les arbres.' },
          { rule: 'Li rois parla as (a+les) barons et a l’arcevesque (元音前不缩合).', example: '辅音前 a+les 缩合为 as；元音前 a+le 省音作 a l’', modern: 'Le roi parla aux barons et à l’archevêque.' },
        ],
      },
      {
        heading: '二、代词附着缩合 (Enclise) 与选择性省音规则 (Élision facultative)',
        body: [
          '• **代词附着（Enclise）完整清单**：',
          '  除了单元 6 所学的 **nel** (ne+le), **nes** (ne+les), **jel** (je+le), **sil** (si+le), **sel** (se+le), **quel** (que+le), **quil** (qui+le) 外，还要特别注意与副词代词 **en** 的缩合：**nen** (ne+en), **sin** (si+en), **jin** (je+en), **quin** (qui+en)！',
          '• **选择性元音省音（Élision facultative）**：',
          '  在古法语八音节或十音节诗歌中，为了凑足或缩减音节数，以下单音节词在元音前**既可以省音，也可以保留完整元音不省音（形成元音连读 Hiatus）**：',
          '  1. 阳性复数主格定冠词 **li**（li ami），以及阴性单数主格冠词 li。',
          '  2. 连词 **se**（如果：s’il vient 或 se il vient）、**que**（qu’il 或 que il）、**ne**（也不：ne il ne ele）。',
          '  3. 关系代词主格 **qui** 在古法语中原则上**不省音**（qui aime），若见到 qu’aime 则必是宾格 que 或连词 que！',
        ],
        rules: [
          { rule: 'Se il (2音节) vient, jel (je+le) verrai ; s’il (1音节) demeure, nel (ne+le) verrai.', example: '诗人可根据格律自由选择 se il（2音节）或省音 s’il（1音节）', modern: 'S’il vient, je le verrai ; s’il reste, je ne le verrai pas.' },
        ],
      },
    ],
  },

  // Unit 14
  {
    id: 'helix-unit-14',
    unitNumber: 14,
    title: '单元 14：不变词类系统（副词构造法、时空介词与反驳连词 ainz）',
    subtitle: 'Laurence Hélix 教材第 14 课 · 原典克里斯蒂娜·德·皮赞《妇女城》(La Cité des Dames)',
    tag: '不变词 · 副词与介词',
    icon: 'Feather',
    summary: '彻底掌握古法语副词的三大生成机制（-ment 词源规则、副词性 -s、形容词中性直用）、高频空间/时间介词辨析，以及转折连词 mais 与反驳连词 ainz 的严密对立。',
    content: [
      {
        heading: '一、方式副词 -ment 的两类构造法则与“副词性 -s (s adverbial)”',
        body: [
          '1. **后缀 `-ment` 的阴性词源铁律**：',
          '   后缀 -ment 源自拉丁语阴性第三变格名词 *mens, mentis* 的夺格 **mente**（意为“以……的心灵/精神/方式”）。因为 *mente* 是阴性，修饰它的形容词必须采用**阴性单数形式**：',
          '   • **第一类形容词（阴性加 -e）**：必须先变阴性加 -e，再接 -ment！如：bon → **bonement**；bel → **belement**；douz → **doucement**；fier → **fierement**；premier → **premierement**。',
          '   • **第二类形容词（阴阳同形无 -e，含 -ant/-ent 分词）**：因为其阴性单数本身就没有 -e，所以直接用词根接 -ment，中间**绝无 -e-**！',
          '     - grant → **granment / forment**（极大地、猛烈地 < fort+ment）；',
          '     - brief → **briement**（简短地）；grief → **griement**（沉重地）；',
          '     - leal → **lealment / loiaument**（忠诚地）；courtois → **courtoisement**（晚期类推加 e）；',
          '     - vaillant + ment → **vaillanment**；ardant + ment → **ardanment**；diligent + ment → **diligenment**！',
          '2. **副词性词尾 `-s`（Le -s adverbial）**：',
          '   受拉丁语副词（plus, magis, foris, prius）影响，古法语常在副词或介词词尾加上特征性的 **-s**（或 -z）：如 **onques**（从不）、**lors**（当时，对比介词 lor）、**or / ore / ores**（现在）、**sempres**（总是/立刻）、**volontiers**（乐意地）、**certes**（诚然）、**a envis**（不情愿地）。',
          '3. **形容词中性单数直接作副词**：haut（高声地 parler haut）、bas（低声地）、clers / cler（清晰地 veoir cler）、droit（笔直地 aler droit）、soef（轻柔地）、chier（昂贵地 vendre chier）。',
        ],
        rules: [
          { rule: 'Il la reçut doucement (Type I) et l’ama loiaument (Type II) et forment (fort+ment).', example: '第一类形容词加 -e-ment（doucement），第二类无 -e 直接加 -ment（loiaument, forment）', modern: 'Il la reçut doucement et l’aima loyalement et fortement.' },
        ],
      },
      {
        heading: '二、古法语高频时空副词、介词与并列连词 (mais vs ainz)',
        body: [
          '• **必背古法语高频时间与空间副词**：',
          '  - **or / ore / ores**（现在 maintenant） vs **lors / adonc / adont**（当时、那时 alors）；',
          '  - **hui**（今天 < hodie）、**muit / anuit**（今夜）、**main / demain**（清晨/明天）、**ier**（昨天）、**jadis / antan**（往昔/去年）；',
          '  - **tost / tantost / errant / isnelement / maintenant**（注意：中世纪 **maintenant** 意为“立刻、当即 aussitôt”，而非“现在”！）；',
          '  - **ci / ici**（这里） vs **la / iluec / ilueques**（那里）；**ça**（向这边） vs **la**（向那边）；**ceans**（在这屋里 céans） vs **leans**（在那屋里）；**sus / amont**（向上） vs **jus / aval**（向下）。',
          '  - **mar**（< mala hora 不幸地、倒霉地、枉然地） vs **buen / buer**（< bona hora 幸运地、适逢其时地）！',
          '• **核心介词辨析**：**lez / delez**（在……旁边 < latus）；**tresqu’a / jusqu’a**（直到）；**atot / od**（与……一起、带着 avec）；**fors**（除……之外 sauf, hors de）；**endroit**（关于、在……面前）；**aval**（顺着……往下）；**parmi**（穿过……正中）。',
          '• **转折连词 `mais` 与排除反驳连词 `ainz` 的严格对立**：',
          '  - **mais**（< magis）：一般转折或递进修正（“但是”）。',
          '  - **ainz (ains)**（< *antius）：专用于**前一句为否定句**之后，强烈否定前项并确立相反事实，意为**“不，恰恰相反、而是（mais au contraire, bien plutôt）”**（相当前德语 sondern，西班牙语 sino）！（注意：ainz 作介词或副词时意为“在……之前 avant”）。',
        ],
        rules: [
          { rule: 'Il ne s’en fui mie, ainz (反驳连词) tret l’espee et vint maintenant (立刻) vers lui.', example: '前句否定后用 ainz 表示“恰恰相反”；maintenant 在古法语中意为“立刻、马上”！', modern: 'Il ne s’enfuit pas, mais au contraire tira l’épée et vint aussitôt vers lui.' },
          { rule: 'Mar (不幸) vi onques ceste cité ; buer (有幸) fustes nez, biau sire !', example: 'mar 表“不幸、枉然”，buer 表“幸运、吉时”', modern: 'C’est pour mon malheur que j’ai jamais vu cette cité ; vous êtes né sous une bonne étoile, beau sire !' },
        ],
      },
    ],
  },

  // Unit 15
  {
    id: 'helix-unit-15',
    unitNumber: 15,
    title: '单元 15：复杂句句法、不定式名词化、抽出前置 (Prolepse) 与混合引语',
    subtitle: 'Laurence Hélix 教材第 15 课 · 原典十五世纪世俗喜剧《帕特兰律师闹剧》(La Farce de Maître Pathelin)',
    tag: '句法专题 · 不定式与语篇结构',
    icon: 'Cpu',
    summary: '深入掌握古法语极其生动的句法构造：动词不定式的完全名词化与双格屈折（li boivres et li mangiers）、从句主语抽出前置（Prolepse）、直接引语与间接引语的自由切换。',
    content: [
      {
        heading: '一、动词不定式的完全名词化 (Infinitif substantivé) 与双格变格',
        body: [
          '在现代法语中，仅有极少数不定式凝固为名词（le dîner, le sourire, le pouvoir）；而在古法语中，**任何动词的不定式都可以随时加上冠词、指示词或物主词，转化为纯粹的阳性第一类名词，并参加双格变格（单数 CS 加 -s）且同时保留带状语或前接重读代词的动词能力**！',
          '• **作为第一类阳性名词变格**：',
          '  - 单数主格 CS：**li boivres**（饮酒）、**li mangiers**（进食）、**li dormirs**（睡眠）、**li alers**（离去）、**li revenirs**（归来）、**li plorers**（哭泣）。',
          '  - 单数宾格 CR：**le boivre, le mangier, le dormir, l’aler, le revenir, le plorer**（常见于介词后：al lever 在起身时，al couchier 在就寝时，del retourner 关于返回，sanz demorer 毫不迟疑）。',
          '• **保留动词统率力**：在冠词与名词化不定式之间，可以插入重读宾格代词或副词！如：**al soleil levant / au partir de la cort / por le mien cors desfendre**（为了保卫我自己的身体）。',
        ],
        rules: [
          { rule: 'Li trop plorers (CS sg) ne vaut rien ; pensons del vengier (CR sg).', example: '过度哭泣毫无用处（不定式 plorer 加主格 -s 作主语）；我们想想复仇之事吧（del vengier 作介宾）', modern: 'Trop pleurer ne sert à rien ; pensons à nous venger.' },
          { rule: 'Al passer (CR) la porte, il vit son ami.', example: '名词化不定式 al passer 同时直接统率宾语 la porte（在穿过城门之时）', modern: 'Au moment de franchir la porte, il vit son ami.' },
        ],
      },
      {
        heading: '二、抽出前置焦点化 (Prolepse)、混合引语与使役结构',
        body: [
          '1. **从句主语抽出前置（Prolepse / Anticipation）**：',
          '   主句动词（veoir, savoir, oïr, redouter）常常先把后面 que 从句中的主语提前抽取出来，作为主句的直接宾语（CR），然后再用代词在从句中复指：',
          '   例：*Il vit **le chevalier** (CR) qu’**il** (CS) estoit bleciez.*（字面：他看见那位骑士，他是受伤的 = 他看见那位骑士受了伤）。',
          '2. **直接引语与间接引语的无缝切换（Discours mixte）**：',
          '   中世纪叙事为追求现场戏剧感，常在一句由 *dist que* 引导的间接引语中途，不加任何提示直接切换为第一人称直接引语；或反之，在连词 *que* 后直接照录原话（Que Recitativum）！',
          '3. **使役结构 `faire + 不定式` 的施事补语**：当不定式本身带直接宾语时，不定式的逻辑主语（施事者）在古法语中既可用介词 **a** 也可用 **par** 引导，且不定式常具被动意义：*Il fist trenchier la teste **au traïtor***（他让人砍下了叛徒的头 / 让叛徒做某事）。',
        ],
        rules: [
          { rule: 'Li rois jura son sairement que « ja mais n’entrerai en ma cité ! »', example: '连词 que 后直接切入第一人称直接引语（Discours mixte），极具史诗现场感', modern: 'Le roi jura par son serment : « Jamais plus je n’entrerai dans ma cité ! »' },
        ],
      },
    ],
  },

  // Unit 16
  {
    id: 'helix-unit-16',
    unitNumber: 16,
    title: '单元 16：分词与副动词系统（现在分词变格、副动词句法与过去分词配合）',
    subtitle: 'Laurence Hélix 教材第 16 课 · 原典厄斯塔什·德尚《道德叙事歌集》(Ballades)',
    tag: '非限定动词 · 分词与副动词',
    icon: 'Columns',
    summary: '彻底区分同以 -ant 结尾的现在分词（可变格形容词）与副动词（不变格状语），掌握古法语“aller + 副动词”进行体周折结构与过去分词性数格配合法则。',
    content: [
      {
        heading: '一、现在分词 (Participe présent) 与副动词 (Gérondif) 的形态与句法分野',
        body: [
          '在拉丁语中，现在分词（*cantans, cantantis*）与副动词夺格（*cantando*）形态不同；但在古法语中，二者语音演变的最终结果都是 **-ant**！然而它们的句法行为截然不同：',
          '1. **现在分词（Participe présent < -antem）—— 可变格的第二类形容词**：',
          '   • 作为第二类阴阳同形形容词，它**必须随所修饰的名词进行格与数的变化**（阳性与阴性单数 CS 加 -s 变为 **-anz**，如 *li chevaliers vaillanz*, *une dame plaisanz*；但阴性单数绝不加 -e！）。',
          '   • 特殊主动变被动语义：部分古法语 -ant 分词具有被动或使动意义，如 **voiant toz**（在众人目睹之下）、**oiant toz**（在众人听闻之下）、**mon escient**（据我所知）。',
          '2. **副动词（Gérondif < -ando）—— 永不变格的动作状语**：',
          '   • 不仅可以用介词 **en** 引导（en chantant, en plorant, en riant），还可跟在介词 **a, de, par, por, sanz** 之后，或者直接用绝对形式！',
          '   • **核心持续体周折结构 `aler + 副动词 (-ant)`**：古法语极爱用变位动词 **aler (vois, vait, aloit, ala) + 副动词** 来表示正在持续进行的动作（Aspect duratif / progressif）！如：**Il vait plorant**（他正一路哭泣着 / 他在哭泣），**Cil vont chantant**（他们一路高歌着）。此时 -ant 为副动词，永远不加 -s！',
        ],
        rules: [
          { rule: 'Li chevaliers vait plorant (副动词不变) ; il vit une espee flamboianz (分词 CS sg).', example: 'vait plorant 为“aller + 副动词”表示正在哭泣，不加 -z；flamboianz 为现在分词作表语/定语，加 -z', modern: 'Le chevalier va en pleurant (pleure) ; il vit une épée flamboyante.' },
          { rule: 'Voiant (绝对分词结构) toz ses barons, li rois li pardona.', example: 'Voiant toz ses barons = 当着所有男爵的面（众男爵亲眼目睹下）', modern: 'Au vu de tous ses barons, le roi lui pardonna.' },
        ],
      },
      {
        heading: '二、过去分词 (Participe passé) 的双格变格与复合时态配合法则',
        body: [
          '古法语过去分词分为弱式（-é < -atum, -i < -itum, -u < -utum）与强式（fait, dit, mis, pris, mort, escrit, ouvert）。所有过去分词都按**第一类形容词（bons / bon / bone / bones）**进行完整的性、数、格变化！',
          '1. **以 `estre` 为助动词（含所有反身代动词 se lever, s’en aler 及不及物状态/位移动词 venir, aler, morir, naistre, cheoir, entrer, issir）**：',
          '   过去分词被视为**主语表语**，必须与主语在**性、数、格（主格 CS！）**上完全一致！',
          '   • 阳性单数主语：*Il est **venuz***（带主格 -z！）；*Il s’est **levez***。',
          '   • 阳性复数主语：*Il sont **venu***（复数主格无 -s！）！*Il se sont **levé***。',
          '   • 阴性主语：*Ele est **venue*** / *Eles sont **venues***。',
          '2. **以 `avoir` 为助动词**：',
          '   在古法语早期，因为 *avoir* 仍保留“拥有某物处于某状态”的实义感，**无论直接宾语（COD）在动词前还是动词后，过去分词原则上都与直接宾语进行性、数、格（宾格 CR！）配合**（*Il a **prise** la cité* 或 *La cité qu’il a **prise***）；到了 13 世纪，当直接宾语后置时，过去分词逐渐趋向中性不变（*Il a pris la cité*）。',
        ],
        rules: [
          { rule: 'Li chevaliers (CS sg) est venuz ; li chevalier (CS pl) sont venu.', example: 'estre 助动词配合铁律：阳性单数主格加 -z（venuz），阳性复数主格无 -s（venu）！', modern: 'Le chevalier est venu ; les chevaliers sont venus.' },
          { rule: 'Il a ceinte (CR F sg) l’espee et laciez (CR M pl) les esperons.', example: 'avoir 助动词后，过去分词直接与后置宾语 l’espee (阴单) 和 les esperons (阳复 CR) 配合', modern: 'Il a ceint l’épée et lacé les éperons.' },
        ],
      },
    ],
  },

  // Unit 17
  {
    id: 'helix-unit-17',
    unitNumber: 17,
    title: '单元 17：中世纪历史词汇学、语义流变与二十大核心伪友词 (Faux-amis)',
    subtitle: 'Laurence Hélix 教材第 17 课 · 原典弗朗索瓦·维庸《大遗嘱集》(Le Grand Testament)',
    tag: '历史词汇学 · 伪友词全表',
    icon: 'Search',
    summary: '系统攻克古法语翻译中最易丢分的词汇陷阱：掌握词义缩窄、词义扩大、词义褒贬升降规律，熟记教材全部 20 个高频古今“伪友词（Faux-amis）”。',
    content: [
      {
        heading: '一、古法语二十大必考“伪友词 (Faux-amis)”对照总表（上：心理与境遇）',
        body: [
          '许多古法语词汇在拼写上与现代法语完全相同或极为相似，但在中世纪语境中的核心词义截然不同，切忌望文生义：',
          '1. **`talent / talant`**（< 拉丁语比喻义“天平倾向”）：中世纪意为**“愿望、欲望、心情、意志（désir, volonté, envie, humeur）”**，绝非“才华”！例：*avoir talent de*（渴望做某事），*mal talent*（愤怒、怨恨）。',
          '2. **`chaitif / chetif`**（< captivum“战俘”）：中世纪意为**“被囚禁的俘虏；不幸的人、可怜悲惨的人（prisonnier, malheureux, infortuné）”**，而非现代的“瘦弱渺小”。',
          '3. **`ennui / anoi`**（< in odio“处于憎恨中”）：中世纪是极强烈的词，意为**“深切痛苦、莫大折磨、屈辱、灾祸（grand tourment, douleur, affliction）”**，绝非现代的“无聊乏味”！动词 *anoier* = 使痛苦折磨。',
          '4. **`travail`**（< *tripalium 刑具）：中世纪意为**“剧烈苦难、肉体折磨、煎熬、分娩阵痛（souffrance, tourment, peine cruelle）”**，动词 *travaillier* = 折磨、使筋疲力尽。',
          '5. **`grief`**（< grevem）：形容词“沉重的、严酷痛苦的（lourd, pénible）”；名词“伤害、苦痛”。',
          '6. **`dangier`**（< *dominiarium 领主权）：中世纪核心义为**“支配权、掌控、绝对权力、傲慢拒绝（pouvoir, domination, puissance, refus）”**！例：*estre en son dangier*（受其支配），*sanz dangier*（毫不抗拒地）。',
          '7. **`doter / douter`**（< dubitare）：中世纪最常用义为**“畏惧、害怕、敬畏（craindre, redouter）”**，其次才是“怀疑”！*dotance* = 恐惧。',
          '8. **`cuidier`**（< cogitare）：意为**“思考、以为、妄想（penser, croire à tort, s’imaginer）”**，常隐含“主观误判（以为……其实不然）”。',
          '9. **`esperer`**（< sperare）：中世纪为中性词**“预料、等待、怀有期待或担忧（attendre, s’attendre à）”**，不限于好结果。',
          '10. **`marri`**（分词形容词）：意为**“悲伤的、迷惘痛苦的、震怒的（affligé, désolé）”**，与结婚（marié）毫无关系！',
        ],
        rules: [
          { rule: 'Li chaitis (俘虏/不幸者) sofri grant travail (苦难) et grant anoi (折磨).', example: '三大高频伪友词同句出现：chaitis (不幸受难者) + travail (酷烈苦难) + anoi (深重痛楚)', modern: 'Le malheureux captif souffrit une grande peine et un grand tourment.' },
          { rule: 'Il le fist par mal talent (盛怒/恶意) ; nus ne doute (畏惧) la mort.', example: 'mal talent = 愤怒恶意；douter = 畏惧害怕', modern: 'Il le fit par colère ; nul ne craint la mort.' },
        ],
      },
      {
        heading: '二、古法语二十大必考“伪友词 (Faux-amis)”对照总表（下：智识与社会）',
        body: [
          '11. **`engien / engin`**（< ingenium）：意为**“心智、聪明才智、巧计、诡计、攻城器械（esprit, intelligence, ruse, artifice）”**。',
          '12. **`cointe`**（< cognitum）：意为**“博学机敏的、优雅得体的、打扮精美的（avisé, élégant, gracieux）”**。',
          '13. **`nice`**（< nescium“无知的”）：意为**“愚蠢的、天真无知的、呆傻的（ignorant, sot, naïf）”**（如《圣杯传奇》中初出茅庐的珀西瓦尔被称为 *li vaslez nices* 愚纯少年；英语 nice 借自此词并发生了褒义化）。',
          '14. **`vilain`**（< villanum 庄园农夫）：本义为“非贵族的自由农民”，在骑士文学中转为贬义“粗鄙之人、卑劣小人（rustre, ignoble）”，与 **cortois / franc / gentil**（高贵典雅的）构成中世纪核心二元对立！',
          '15. **`franc`**（形容词）：第一义为**“出身高贵的、自由人的（noble, de naissance libre）”**，后衍生出“慷慨坦荡的”。',
          '16. **`garir / guerir`**（< 日耳曼 *warjan 保卫）：本义为**“保护、拯救、使脱险、抵御（protéger, sauver, préserver）”**，后缩窄为医学“治愈”。',
          '17. **`navrer`**（动词）：中世纪永远指肉体上的**“砍伤、刺伤、使受重创（blesser grièvement par les armes）”**，绝非现代的“使遗憾难过”！*un chevalier navré a mort* = 身负致命剑伤的骑士。',
          '18. **`viande`**（< vivenda 维持生命之物）：指**“一切食物、粮草、饮食（toute nourriture, aliment）”**，到 15 世纪后才缩窄为“肉类”（中世纪“肉”用 **char < carnem**）。',
          '19. **`ostel / hostel`**（< hospitale）：意为**“住宅、府邸、客栈、借宿接待处（demeure, logis, accueil）”**。',
          '20. **`bacheler`**、**`vaslet`**、**`meschine`**、**`garçon`**：bacheler 指“尚未拥有采邑的年轻骑士”；vaslet 指“贵族侍从、世家少年”；meschine 指“妙龄少女/侍女”；garçon 常指“军营马夫、下层仆役”。',
        ],
        rules: [
          { rule: 'Li francs (高贵的) chevaliers fu griement navrez (受重伤) ; Dieus le garisse (拯救保佑) !', example: 'franc = 高贵的；navrez = 身负重伤；garisse = 拯救保佑', modern: 'Le noble chevalier fut grièvement blessé ; que Dieu le sauve !' },
        ],
      },
    ],
  },

  // Unit 18
  {
    id: 'helix-unit-18',
    unitNumber: 18,
    title: '单元 18：历史语音学核心定律与北方奥伊语 (Langue d’oïl) 四大方言学',
    subtitle: 'Laurence Hélix 教材第 18 课 · 原典《圣阿莱克西传》与《斯特拉斯堡誓词》',
    tag: '历史音韵 · 方言鉴别',
    icon: 'BookOpen',
    summary: '全景梳理从通俗拉丁语到古法语的五大历史语音演变铁律（重读自由元音裂化、腭化、Bartsch 定律、边音元音化、擦音脱落），掌握鉴别盎格鲁-诺曼、皮卡第、香槟与法兰西岛抄本的试金石。',
    content: [
      {
        heading: '一、从拉丁语到古法语的五大历史语音学铁律 (Lois phonétiques)',
        body: [
          '1. **开音节重读元音自发双元音化（Diphtongaison romane et française）**：',
          '   当拉丁语重读元音处于**开音节（Syllabe ouverte / libre，即以元音结尾的音节）**时，发生延长并裂化为双元音；若处于**闭音节（Syllabe fermée / entravée，以辅音结尾）**，则元音保持不变！',
          '   • 短音 **ĕ [ɛ] ➔ ie**：*pĕ-dem* > **pié**；*fĕ-rum* > **fier**；*bĕ-ne* > **bien**（对比闭音节 *fĕr-rum* > **fer**）。',
          '   • 短音 **ŏ [ɔ] ➔ uo ➔ ue (> eu)**：*cŏr* > **cuer**；*nŏ-vum* > **nuef**；*bŏ-vem* > **buef**（对比闭音节 *cŏr-pus* > **cors**）。',
          '   • 长音 **ē / 短音 ĭ [e] ➔ ei ➔ oi**：*rē-gem* > **rei > roi**；*fĭ-dem* > **fei > foi**；*tē-la* > **teile > toile**。',
          '   • 长音 **ō / 短音 ŭ [o] ➔ ou ➔ eu**：*flō-rem* > **flor > fleur**；*hō-ram* > **ore > heure**；*sō-lum* > **seul**。',
          '   • 元音 **a ➔ e (鼻音前为 ai)**：*mă-re* > **mer**；*pă-trem* > **pere**；*mă-num* > **main**（对比闭音节 *păr-tem* > **part**）。',
          '2. **巴尔奇定律（Loi de Bartsch）**：当开音节重读 **a** 前面紧邻一个**颚化辅音（ch, j, g, 颚化 l/n 或 yod）**时，a 不变为一般的 -e / -er，而是进一步闭化为双元音 **-ie / -ier**！',
          '   例：*ca-pum* > **chief**（头/首领，对比 *mare* > mer）；*ca-rum* > **chier**（珍贵的）；*caballarium* > **chevalier**；*judicare* > **jugier**；*manducare* > **mangier**；*tractare* > **traitier**！',
          '3. **元音间塞音弱化与脱落（Lénition et chute des consonnes intervocaliques）**：拉丁语位于两个元音之间的齿音 t/d 和软腭音 c/g 先浊化擦音化，至 11 世纪末彻底脱落（*vita* > *vida* > **vie**；*vedere* > **veeir > veoir**；*securum* > **seür > sûr**；*augustum* > **aost > août**）。',
          '4. **词首 s + 辅音前增音 e-（Prothèse vocalique）**：拉丁语词首 *sp-, st-, sc-* 前一律衍生出前增元音 *e-*，随后在 12 世纪末词中 s 在辅音前静默脱落（現代法语用长音符 ^ 纪念该脱落的 s）：*spatha* > **espee (> épée)**；*scola* > **escole (> école)**；*stella* > **estoile (> étoile)**；*castellum* > **chastel (> château)**。',
        ],
        rules: [
          { rule: 'pĕdem (开音节) → pié vs fĕrrum (闭音节) → fer ; căpum (颚音后) → chief (巴尔奇定律)', example: '开闭音节决定元音是否裂化；颚音后的开音节 a 依巴尔奇定律变为 ie（chief, chier, mangier）', modern: 'pied vs fer ; chef, cher, manger' },
        ],
      },
      {
        heading: '二、北方奥伊语 (Langue d’oïl) 四大文学方言鉴别指南',
        body: [
          '在中世纪，北方奥伊语尚无统一的拼写标准，手抄本呈现出鲜明的地域方言色彩（Scriptae）：',
          '1. **皮卡第方言（Picard，北方阿拉斯、亚眠、图尔奈等富裕市民与戏剧中心）**：',
          '   • **特征 A（无腭化保存 k / g）**：拉丁语 **c + a** 在法兰西岛变为 **ch**，在皮卡第保留硬音 **c / k**！（如 **camp** = champ 田野，**cat** = chat 猫，**canter** = chanter 歌唱，**castel** = chastel 城堡，**keval** = cheval 马，**kier** = chier）；而拉丁语 **c + e/i** 在法兰西岛变为 **c [ts]**，在皮卡第却变为 **ch [tʃ]**！（如 **chité** = cité 城市，**chiel** = ciel 天空，**chi** = ci 这里）！',
          '   • **特征 B（冠词与代词）**：阴性单数定冠词主格与宾格常统一写为 **li / le**（如 *li dame, le maison* = la dame, la maison！）；物主词简化为 **mi, ti, si**；关系代词与连词写为 **ki, ke**。',
          '2. **诺曼与盎格鲁-诺曼方言（Normand & Anglo-Normand，如牛津本《罗兰之歌》、玛丽·德·法兰西）**：',
          '   • **特征 A**：古双元音 **ei** 保持在 ei 阶段，不进一步演变为法兰西岛的 **oi**（如 **rei** = roi, **fei** = foi, **aveir** = avoir, **saveir** = savoir）。',
          '   • **特征 B**：重读 o 闭化拼作 **u**（如 **pur** = por, **amur** = amor, **seignur** = seignor, **tut** = tot, **vus** = vos）；第一组未完成过去时作 **-out / -eve**（chantout）。',
          '3. **香槟与东部方言（Champenois，如克雷蒂安·德·特鲁瓦）**：',
          '   • 与中央法兰西岛方言（Francilien）最为接近，共同构成现代标准法语的直接母体。特征包括 `-aus` 常写作 `-iax`（*biax* = biaus, *oisiax* = oisiaus），以及开音节元音裂化极为充分。',
        ],
        rules: [
          { rule: 'Picard : Li kemins ki maine au castel et a la chité.', example: '皮卡第方言鉴别标志：kemin (chemin), ki (qui), castel (chastel), chité (cité)', modern: 'Le chemin qui mène au château et à la cité.' },
          { rule: 'Anglo-normand : Li reis ad grant amur pur sun seignur.', example: '盎格鲁-诺曼方言鉴别标志：reis (ei 不变 oi)，amur / pur / sun / seignur (o 写作 u)', modern: 'Le roi a un grand amour pour son seigneur.' },
        ],
      },
    ],
  },
];
