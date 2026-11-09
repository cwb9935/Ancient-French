/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection } from '../grammarCodex';

export const SECTIONS_1_TO_6: GrammarSection[] = [
  // Unit 1
  {
    id: 'helix-unit-1',
    unitNumber: 1,
    title: '单元 1：古法语异质性、核心连缀词 si 与 V2 动词第二位律',
    subtitle: 'Laurence Hélix 教材第 1 课 · 原典《鹦鹉骑士传奇》(Le Chevalier au Papegau)',
    tag: '语篇连缀 · V2 语序律',
    icon: 'Sparkles',
    summary: '全面掌握古法语与现代法语的核心句法分野：万能话语标记词 si 的六大语义功能、Thurneysen 动词第二位（V2）倒装法则、主语代词省缺机制及中世纪抄本断句特征。',
    content: [
      {
        heading: '一、核心话语连缀词 si (< 拉丁语 sīc) 的六大功能图谱',
        body: [
          '在古法语手抄本中，副词 si（源自拉丁语 sīc“如此”，切勿与条件连词 se < sī“如果”混淆！）是出现频率最高的语篇枢纽词，兼具副词与并列连词双重性质：',
          '1. 词源方式义（Valeur de manière）：保留拉丁语本义“如此、这样（ainsi）”或程度副词“如此地（tellement）”，常构成关联结构 si... que（如此……以至于）。',
          '2. 时间推进与动作承接义（Valeur de succession temporelle）：意为“接着、随后、于是（et alors, puis）”，串联同一主语的连续动作，且其后常省略重复的主格主语代词。',
          '3. 主题重提与主谓桥梁义（Valeur de reprise thématique）：当句首出现长串前置时间/地点状语或分词从句后，用 si 承上启下引出主句谓语动词。',
          '4. 因果推导义（Valeur consécutive / explicative）：意为“因此、故而（donc, c’est pourquoi）”。',
          '5. 逆转对立与肯定反驳义（Valeur adversative / affirmative）：在否定句或疑问句后表示“然而、却、不，恰恰相反（pourtant, au contraire）”，这正是现代法语回答否定疑问句时用“Si !”的直接起源。',
          '6. 固定复合连词：si com / si come（正如、如同 comme）；si que（以至于 de sorte que）；et si（而且还 et de plus）。',
        ],
        rules: [
          { rule: 'Li chevaliers monta el destrier, si s’en ala.', example: '骑士跨上战马，接着便策马离去（si 表动作承接并省去重复主语 il）', modern: 'Le chevalier monta sur le destrier et s’en alla.' },
          { rule: 'Quant li rois l’oï, si en ot grant joie.', example: '当国王听闻此事，遂心怀大悦（前置时间从句后用 si 引出主句动词）', modern: 'Quand le roi l’entendit, il en eut une grande joie.' },
          { rule: 'Si com l’estoire nos reconte', example: '正如史书向我们所记述的那样（固定习语 si com）', modern: 'Ainsi que l’histoire nous le raconte' },
        ],
      },
      {
        heading: '二、动词第二位律 (V2 / Loi de Thurneysen) 与六种语序排列',
        body: [
          '由于拥有双格屈折系统（Cas Sujet / Cas Régime），古法语无需靠固定语序区分主宾语，但受日耳曼法兰克语超音段重音影响，严格遵循“动词居第二核心句法位（Verb-Second）”法则：',
          '• 排列 1 (S - V - O)：Li rois (S) voit (V) le chevalier (O). —— 标准顺装。',
          '• 排列 2 (O - V - S)：Le chevalier (O) voit (V) li rois (S). —— 宾语前置焦点化，主语强制倒装于动词后！切勿按现代语序误译为“骑士看见国王”，凭格位可知 li rois 才是主语。',
          '• 排列 3 (Circ - V - S - O)：En cel tens (状语) tenoit (V) li rois Artus (S) cort (O). —— 状语居首触发主谓倒装，且若主语为弱读人称代词，往往直接省略（空主语 Pro-drop）。',
          '• 排列 4 (S - O - V)：主要见于关系从句、连词从句或诗歌押韵句尾（Qui le roi voit...）。',
        ],
        rules: [
          { rule: 'Grant joie fist li rois en sa cort.', example: 'O(宾语 Grant joie) + V(动词 fist) + S(主格主语 li rois) 典型 V2 倒装', modern: 'Le roi manifesta une grande joie en sa cour.' },
          { rule: 'Or vos dirai d’une aventure.', example: '副词 Or 居首 + 弱读代词 vos + 动词 dirai（省略第一人称主语 je）', modern: 'Maintenant je vais vous raconter une aventure.' },
        ],
      },
      {
        heading: '三、主语代词省缺 (Non-expression du pronom sujet) 与非人称结构',
        body: [
          '在 11-13 世纪古法语中，由于动词词尾具有清晰的六个人称曲折区分度（如 chant, chantes, chante, chantons, chantez, chantent），主格人称代词（je, tu, il, nos, vos, il）仅在句首充当第一占位数（防止动词裸露于句首违背 V2 律）或表示强烈对比强调时才写出；一旦句首已有状语、宾语或小词 si / or / lors / tantost，主语代词一律省略！',
          '同样，非人称动词（存现句 a / i a“有”、气象动词 pluet“下雨”、情态动词 estuet“必须”、avint“发生”）在古法语中也常不写中性虚主语 il。',
        ],
        rules: [
          { rule: 'En la forest avoit un chastel.', example: '森林里有一座城堡（avoit 前不写虚主语 il，un chastel 为 CR 宾格）', modern: 'Dans la forêt, il y avait un château.' },
          { rule: 'Or m’estuet morir.', example: '如今我必须赴死（estuet 为非人称动词“必须”，不加虚主语 il）', modern: 'Maintenant il me faut mourir.' },
        ],
      },
    ],
  },

  // Unit 2
  {
    id: 'helix-unit-2',
    unitNumber: 2,
    title: '单元 2：阳性名词双格系统（Type I, II, III 完整范式）',
    subtitle: 'Laurence Hélix 教材第 2 课 · 原典《罗兰之歌》(La Chanson de Roland)',
    tag: '核心形态学 · 阳性双格',
    icon: 'Columns',
    summary: '系统拆解古典拉丁语六格向通俗拉丁语及古法语两格（Cas Sujet 主格 / Cas Régime 宾格）的历史合并过程，全面掌握阳性名词三大变格类与重音移动不等音节词。',
    content: [
      {
        heading: '一、从拉丁语六格到古法语双格 (Cas Sujet vs Cas Régime) 的句法分工',
        body: [
          '古典拉丁语的六个格（主、呼、宾、属、与、夺）在通俗拉丁语语音磨损中合并为古法语的两大格位：',
          '1. 主格（Cas Sujet, 简称 CS，继承拉丁语 Nominativus + Vocativus）：',
          '   • 句法功能 A：充当限定动词的主语（Sujet）。',
          '   • 句法功能 B：充当系动词（estre, devenir, sembler, paroir）的主语表语（Attribut du sujet）。',
          '   • 句法功能 C：充当呼语/独立称呼语（Apostrophe / Vocatif），如“Sire reis, entendez moi!”（国王陛下，请听我说！）。',
          '2. 直宾格/斜格（Cas Régime, 简称 CR，继承拉丁语 Accusativus 并兼并属、与、夺格功能）：',
          '   • 句法功能 A：及物动词的直接宾语（COD）。',
          '   • 句法功能 B：所有介词（a, de, en, por, par, sor, sanz, vers）之后的介词宾语。',
          '   • 句法功能 C：不带介词的绝对直宾格（CR absolu），直接表示领属关系（l’espee Rollant 罗兰的剑）、时间持续（set anz 七年）、价值度量或处所。',
        ],
        rules: [
          { rule: 'Li chevaliers (CS) est proz (CS).', example: '骑士是英勇的（主语与表语同用主格 CS，均带 -s/-z）', modern: 'Le chevalier est preux.' },
          { rule: 'Li reis (CS) done un destrier (CR) al chevalier (CR).', example: '国王赐予骑士一匹战马（主语 CS 带 -s，直宾与介宾 CR 无 -s）', modern: 'Le roi donne un destrier au chevalier.' },
        ],
      },
      {
        heading: '二、第一类与第二类阳性名词 (Type I Sigmatique & Type II Asigmatique)',
        body: [
          '• 第一类规则阳性名词（Type I，占古法语阳性名词 80% 以上，源自拉丁语第二变格 -us / -um）：',
          '  呈现著名的“X 对角线交叉法则”：单数 CS 带 -s（li murs < murus），单数 CR 无 -s（le mur < murum）；复数 CS 无 -s（li mur < muri），复数 CR 带 -s（les murs < muros）。',
          '  【音变子规则】：① 若词根以 -l 结尾，遇 -s 元音化为 -aus/-ax（li chevaus / le cheval / li cheval / les chevaus）；② 若词根以 -t/-d 结尾，遇 -s 变为 -z [ts]（li ponz / le pont）；③ 若词根以 -c/-f/-p 结尾，遇 -s 时词根末辅音脱落（liers < clerc+s，serf+s → sers，drap+s → dras，colp+s → cols/cox）；④ 若词根原本以 -s/-z 结尾（li نس / le nes 鼻子，li bras / le bras 手臂，li cors / le cors 身体），则四格全同形（Indéclinables）！',
          '• 第二类无 -s 阳性名词（Type II，源自拉丁语 -er 词干如 pater, frater, magister, venter）：',
          '  早期古法语单数 CS 无原始 -s（li pere, li frere, li maistre），与单数 CR（le pere）同形；至 12 世纪中叶后，受第一类类推影响，常在单数 CS 加上类推 -s（li peres）。',
        ],
        rules: [
          { rule: 'Li chevaus (CS sg) cort ; li cheval (CS pl) corent.', example: '那匹马在跑（单数主格带 -s 元音化为 chevaus）；那些马在跑（复数主格无 -s 为 cheval）！', modern: 'Le cheval court ; les chevaux courent.' },
          { rule: 'Li serf (CS pl) servent le seignor ; li sers (CS sg) sert.', example: '农奴们服侍领主（复数主格 serf）；那个农奴在服侍（单数主格 serf+s -> sers）', modern: 'Les serfs servent ; le serf sert.' },
        ],
      },
      {
        heading: '三、第三类不等音节重音移动阳性名词 (Type III Imparisyllabiques)',
        body: [
          '源自拉丁语第三变格。拉丁语单数主格与单数宾格要么音节数量不同（如 cómes 2音节 vs cómitem 3音节），要么重音位置不同（如 impérator vs imperatórem），导致古法语单数 CS 与单数 CR 词干完全不同！可分为三大亚群：',
          '1. 固定重音移动群：ber / baron（男爵）；cuens / conte（伯爵）；hom / ome（人）；enfes / enfant（孩童）；niés / neveu（外甥 < népos / nepótem）；abés / abé（修道院长）。',
          '2. -or / -eur 移动群：sire / seignor（领主 < sénior / seniórem）；emperere / empereor（皇帝）；chantre / chanteor（歌手）；traïtre / traïtor（叛徒）；pastre / pastor（牧人）；pechiere / pecheor（罪人）。',
          '3. 日耳曼 -o / -ónem 借词群：compainz / compaignon（同伴）；fel / felon（恶徒、背叛封臣）；gars / garçon（侍童、小子）；lerre / larron（强盗 < látro / latrónem）；glouz / gloton（暴食之徒）。',
          '【记忆铁律】：第三类名词的复数主格（CS pl）一律采用单数宾格（CR sg）的词干且不加 -s（如 li baron, li seignor, li conte, li larron）！',
        ],
        rules: [
          { rule: 'Li niés (CS sg) Rollant ocist le felon (CR sg).', example: '外甥罗兰斩杀了那名恶徒（niés 为 neveu 的主格；felon 为 fel 的宾格）', modern: 'Le neveu Roland tua le félon.' },
          { rule: 'Li lerre (CS sg) embla l’or ; li larron (CS pl) s’en fuirent.', example: '那个强盗偷走了金子（单数主格 lerre）；强盗们逃跑了（复数主格 larron）', modern: 'Le larron vola l’or ; les larrons s’enfuirent.' },
        ],
      },
    ],
  },

  // Unit 3
  {
    id: 'helix-unit-3',
    unitNumber: 3,
    title: '单元 3：阴性名词变格系统与冠词体系完整演变',
    subtitle: 'Laurence Hélix 教材第 3 课 · 原典玛丽·德·法兰西《金银花短诗》(Lai du Chèvrefeuille)',
    tag: '形态学 · 阴性双格与冠词',
    icon: 'Bookmark',
    summary: '深入解析古法语阴性名词三大变格类（-e 结尾规则类、辅音结尾单数主格带 -s 类、不等音节阴性类），以及定冠词、不定冠词与部分冠词的完整演化。',
    content: [
      {
        heading: '一、阴性名词三大变格范式 (Types I, II, III Féminins)',
        body: [
          '1. 第一类规则阴性名词（Type I，源自拉丁语第一变格 -a/-am，如 domina > dame, rosa > rose, porta > porte）：',
          '   由于拉丁语单数主格 -a 与单数宾格 -am（词尾 m 早在公元前即脱落）在语音上完全一致，均弱化为词尾央元音 -e [ə]；而复数主格 -ae 在通俗拉丁语中被复数宾格 -as 取代。因此第一类阴性名词在单数阶段 CS 与 CR 完全同形（la dame / la dame），在复数阶段也完全同形（les dames / les dames），实质上已无格的对立，只有单复数对立！',
          '2. 第二类无 -e 结尾阴性名词（Type II，源自拉丁语第三变格阴性名词，如 flos/florem > flor, finis/finem > fin, mors/mortem > mort, civitas/civitatem > cité, virtus/virtutem > vertu）：',
          '   因为拉丁语原词单数主格带有 -s（flos, finis, mors, civitas），所以在古法语中：**单数 CS 必须加 -s/-z，而单数 CR 无 -s**！',
          '   • 单数 CS：la flors, la fins, la morz (mort+s), la citez (cité+s), la bontez, lamer (例外：mer 无 -s)。',
          '   • 单数 CR：la flor, la fin, la mort, la cité, la bonté。',
          '   • 复数 CS 与复数 CR：一律带 -s/-z（les flors, les morz, les citez）。',
          '3. 第三类不等音节阴性名词（Type III Imparisyllabiques féminins）：',
          '   包含两个分支：① 拉丁重音移动词：la suer (CS sg < sóror) / la seror (CR sg < sorórem，复数 les serors)；la mieire (母亲罕见主格) / la mere；② 教会拉丁语/日耳曼语 -a / -ánem 女性专名或身份词：la nonne (CS 修女) / la nonnain (CR)；la pute (CS 娼妓) / la putain (CR)；la ante (CS 姑母) / l’antain (CR)；以及女性专名 Berte / Bertain, Eve / Evain, Guenievre / Guenievrain。',
        ],
        rules: [
          { rule: 'La morz (CS sg) li est pres ; il ne doute la mort (CR sg).', example: '死亡离他已近（第二类阴性单数主格 morz 带 -z）；他不畏惧死亡（单数宾格 mort 无 -z）', modern: 'La mort lui est proche ; il ne redoute pas la mort.' },
          { rule: 'La suer (CS sg) le roi ama sa seror (CR sg).', example: '国王的姐姐深爱她的妹妹（suer 为主格，seror 为宾格）', modern: 'La sœur du roi aima sa sœur.' },
        ],
      },
      {
        heading: '二、定冠词、不定冠词与零冠词 (Article zéro) 的语用规则',
        body: [
          '• 定冠词（源自拉丁语远指词 ille, illa）：',
          '  阳性：单数 CS li (元音前省音作 l’) / 单数 CR le (元音前 l’)；复数 CS li / 复数 CR les。',
          '  阴性：单数 CS la (元音前 l’，在皮卡第/北方方言中阴性单数主格也作 li！) / 单数 CR la；复数 CS les / 复数 CR les。',
          '• 不定冠词（源自拉丁语数词 unus, una）：',
          '  阳性单数 CS uns / 单数 CR un。注意古法语的不定冠词拥有**复数形式**（复数 CS un / 复数 CR uns，阴性复数 unes）！用于修饰成双成对的物体或集合名词，意为“一对、一副、一套、一些”（如 unes lettres 一封书信，uns esperons 一副马刺，unes armes 一套盔甲，unes noces 一场婚礼）。',
          '• 零冠词（Article zéro）：古法语中冠词仅用于指称具体的个体（Actualisation concrète）。当名词表示抽象概念（Amor, Mort, Proëce）、物质统称、群体全称，或出现在否定句、疑问句、条件句及习语动词短语（avoir paor, prendre fin, tenir cort）中时，一律不加任何冠词！',
        ],
        rules: [
          { rule: 'Il li envoia unes lettres seellees.', example: '他向她送去了一封加盖印章的书信（不定冠词复数 unes 表整体一件信函）', modern: 'Il lui envoya une lettre scellée.' },
          { rule: 'Chevaliers doit amer proëce et haïr coardise.', example: '骑士应当热爱勇武并憎恶怯懦（通指类别与抽象名词全用零冠词）', modern: 'Un chevalier doit aimer la prouesse et haïr la couardise.' },
        ],
      },
    ],
  },

  // Unit 4
  {
    id: 'helix-unit-4',
    unitNumber: 4,
    title: '单元 4：形容词两大家族、合成比较级与塞擦音正字法',
    subtitle: 'Laurence Hélix 教材第 4 课 · 原典克雷蒂安·德·特鲁瓦《狮骑士伊凡》(Yvain)',
    tag: '形容词 · 比较级与音韵',
    icon: 'Shield',
    summary: '彻底分清第一类双尾形容词与第二类阴阳同形形容词（la grant joie），掌握拉丁合成比较级双格变体与古法语塞擦音字母 z [ts]、c [ts]、ch [tʃ] 的发音体系。',
    content: [
      {
        heading: '一、第一类与第二类形容词 (Adjectifs de classe I et II) 及中性表语格',
        body: [
          '1. 第一类形容词（源自拉丁语第一/第二变格 -us, -a, -um，如 bonus > bon/bone, bellus > bels/bele, novellus > noviax/novele）：',
          '   • 阳性完全按第一类阳性名词变格（CS sg: bons, CR sg: bon, CS pl: bon, CR pl: bons）。',
          '   • 阴性完全按第一类阴性名词变格（CS/CR sg: bone, CS/CR pl: bones）。',
          '   • 【特殊音变】：词干末辅音在阳性有 -s/无 -s 与阴性 -e 之间产生三重交替！例如：',
          '     - vif（活着的）：阳性 CS sg vis (vif+s) / CR sg vif / 阴性 vive。',
          '     - bel（美丽的）：阳性 CS sg bels > biaus (元音前用 bel) / CR sg bel / 阴性 bele。',
          '     - sec（干的）：阳性 CS sg ses / CR sg sec / 阴性 seche。',
          '     - lonc（长的）：阳性 CS sg lons / CR sg lonc / 阴性 longue / 东北部方言 longe。',
          '2. 第二类阴阳同形形容词（源自拉丁语第三变格 -is, -e，如 grandis > grant, fortis > fort, talis > tel, qualis > quel, dulcis > douz, viridis > vert, brevis > brief, levis > grief, cortensis > cortois）：',
          '   因为在古典拉丁语中 grandis 阳性与阴性同形（无 -a 词尾），所以在 11-13 世纪古法语中，**第二类形容词的阴性单数绝不加 -e**！',
          '   • 阳性：CS sg granz / CR sg grant / CS pl grant / CR pl granz。',
          '   • 阴性：CS sg granz (或 grant) / CR sg grant / CS与CR pl granz。',
          '   • 同样，所有现在分词转化来的形容词（vaillant, ardant, plaisant, dolent）在古法语中也属于第二类，阴性单数不加 -e（une dame moult vaillant et plaisant）！',
          '3. 中性单数表语格（Cas neutre）：当形容词或过去分词修饰中性代词 ce, il (非人称) 或整个从句时，处于中性单数，**永远不加主格词尾 -s**！例：Droiz est（这是正当的，名词作主语带 -z） vs Il est droit que...（中性非人称表语，绝不加 -z！）。',
        ],
        rules: [
          { rule: 'En la grant (CR sg F) forest ot une fort (CR sg F) tor.', example: '在大森林里有一座坚固的塔楼（grant 与 fort 修饰阴性名词均不加 -e）', modern: 'Dans la grande forêt il y avait une forte tour.' },
          { rule: 'Il est escrit (Neutre) en la letre ; li livres est escriz (M CS sg).', example: '非人称中性表语 escrit 不加 -z；阳性单数主语表语 escriz 必须加 -z', modern: 'Il est écrit dans la lettre ; le livre est écrit.' },
        ],
      },
      {
        heading: '二、合成比较级 (Comparatifs synthétiques) 与最高级构造法',
        body: [
          '古法语不仅可以用分析式比较级（plus + 形容词 + que / de），还完整继承了一批拉丁语不等音节合成比较级（按第三类名词发生重音移动双格变化）：',
          '• 更好 (bon)：CS mieldre / CR meillor（副词：mielz / mieuz < melius）。',
          '• 更坏 (mal / mauvais)：CS pire / CR peior（副词：pis < pejus）。',
          '• 更大 (grant)：CS graindre / CR graignor。',
          '• 更小/更少 (petit)：CS mendre (moindre) / CR menor（副词：moins < minus）。',
          '• 更年长/尊贵：CS maire / CR major；更年轻：CS joindre / CR gignor。',
          '【比较基准补足语的两大句法】：① 当比较基准是名词或重读代词且表示数量/程度比较时，古法语常用介词 **de** 引导（Il est plus riches de moi 他比我更富有；plus de cent 超过一百）；② 也可由连词 que 引导，且肯定比较句后的从句常带赘词否定 ne（Il est plus sages que je ne cuidai）。',
          '【相对最高级】：只需在比较级前加上定冠词或物主词即可表达最高级（li plus biaus, li mieldre chevaliers del monde）。',
        ],
        rules: [
          { rule: 'Cist chevaliers est mieldre (CS) de toz les autres ; je aim le meillor (CR).', example: '这位骑士比所有其他人都更优秀（主格 mieldre + 介词 de 表比较）；我敬爱最优秀者（宾格 meillor）', modern: 'Ce chevalier est meilleur que tous les autres ; j’aime le meilleur.' },
        ],
      },
      {
        heading: '三、塞擦音系统 (Affriquées) 与音韵拼写规范',
        body: [
          '11-12 世纪古法语拥有四个在 13 世纪末退化为擦音的塞擦音（辅音起首带闭塞爆破）：',
          '1. 齿龈清塞擦音 [ts]：词首/词中拼作 c (+ e, i) 或 ç（如 cent [tsẽnt], چو [tso]）；词尾由齿音 t/d + s 融合而成，拼作 **-z**（如 toz [tots], granz [grants], citez [tsitets]）。',
          '2. 齿龈浊塞擦音 [dz]：见于十二等数词（doze [dodzə], treze [tredzə]）。',
          '3. 颚龈清塞擦音 [tʃ]：拼作 **ch**（如 chanter [tʃãnter], chevalier [tʃəvaljɛr]，读如英语 church）。',
          '4. 颚龈浊塞擦音 [dʒ]：拼作 **j** 或 **g** (+ e, i)（如 joie [dʒɔjə], gent [dʒẽnt], mangier [mãndʒjɛr]，读如英语 judge）。',
        ],
        rules: [
          { rule: 'grant + s → granz [grants] ; cité + s → citez [tsitets]', example: '凡词干末尾带齿音 t/d（含重读 -é <拉丁语 -atem），加 -s 时必写为 -z', modern: 'grands ; cités' },
        ],
      },
    ],
  },

  // Unit 5
  {
    id: 'helix-unit-5',
    unitNumber: 5,
    title: '单元 5：指示系统（cist / cil）与绝对直宾格（CR Absolu）',
    subtitle: 'Laurence Hélix 教材第 5 课 · 原典《列那狐传奇》(Le Roman de Renart)',
    tag: '指示词 · 绝对宾格句法',
    icon: 'Cpu',
    summary: '全面掌握古法语指示词兼具限定词与代词的双重属性、近指 cist 与远指 cil 的完整变格矩阵，以及无需介词的绝对直宾格（CR Absolu）四大功能。',
    content: [
      {
        heading: '一、近指 cist 与远指 cil 的完整双格矩阵及句法双重性',
        body: [
          '在现代法语中，指示限定词（ce, cet, cette, ces）与指示代词（celui, celle, ceux, celles）形态截然分开；而在古法语中，**cist（源自通俗拉丁语 *ecce iste）与 cil（源自 *ecce ille）既可直接放在名词前作指示限定词（形容词），也可独立充当指示代词**！',
          '• **近指系统 cist（这个/这些，指身边之物或刚提及之事）**：',
          '  - 阳性：CS sg cist (cis) | CR sg cest (重读强式与格/属格 **cestui**) | CS pl cist (cis) | CR pl cez (ces)。',
          '  - 阴性：CS sg ceste | CR sg ceste (重读强式 **cesti**) | CS pl cestes (cez) | CR pl cestes (cez)。',
          '• **远指系统 cil（那个/那些，指远处之物、叙事主人公或接关系从句“……的那个人”）**：',
          '  - 阳性：CS sg cil | CR sg cel (重读强式与格/属格 **celui**) | CS pl cil | CR pl cels (元音化为 **ceus / ceux**)。',
          '  - 阴性：CS sg cele | CR sg cele (重读强式 **celi**) | CS pl celes | CR pl celes。',
          '• **中性指示代词**：ço / ce（< ecce hoc，指代整件事，重读或轻读），无格变化。',
        ],
        rules: [
          { rule: 'Cist chevaliers (限定词) est proz ; cil (代词) qui vient est li rois.', example: '这位骑士很英勇（cist 作限定词）；走来的那个人是国王（cil 独立作主格代词）', modern: 'Ce chevalier est preux ; celui qui vient est le roi.' },
          { rule: 'Il parla a celui (CR III) et a celi (CR III F).', example: '他对那个男子（celui）和那个女子（celi）说了话（强重读宾格代词）', modern: 'Il parla à celui-là et à celle-là.' },
        ],
      },
      {
        heading: '二、绝对直宾格 (Cas Régime Absolu) 的四大核心句法用法',
        body: [
          '古法语的直宾格（CR）无需任何介词即可独立承担拉丁语属格、与格、夺格与时间/空间状语宾格的职能，统称为“绝对直宾格（CR absolu）”：',
          '1. **领属补足语（Complément déterminatif / Génitif sans préposition）**：',
          '   当领有者是**有生且尊贵的个体**（上帝 Dieu、国王 le roi、伯爵 le conte、亲属或专有人名）时，直接用直宾格紧贴于被修饰名词之后（或偶尔前置），绝不加介词 de！若领有者是无生命物体或抽象名词，则必须用介词 de 或 a。',
          '   【顺口溜】：有生尊贵直贴宾（la cort le roi, l’amor Dieu, la fille le duc），无生物象须介词（la porte del chastel）。',
          '2. **间接宾语/受益者（Datif sans préposition）**：在动词 doner, prometre, pardoner, enseigner 后，表示人的直宾格可直接作间接宾语（Dieu mercit 感谢上帝；Seignor barons, pardonez moi）。',
          '3. **时间、空间与度量状语**：Set anz toz pleins（整整七年）；aler grant aleüre（全速前进）；valoir cent livres（价值一百里弗尔）。',
          '4. **身体部位与伴随姿态状语**：lever la main destre（举起右手）；plorer des eulz, baisier la boche；les mains jointes（双手合十）。',
        ],
        rules: [
          { rule: 'Li niés Carle (CR absolu) tint l’espee Rollant (CR absolu).', example: '查理的外甥握着罗兰的佩剑（Carle 与 Rollant 均直接以宾格表领属，不加 de）', modern: 'Le neveu de Charles tint l’épée de Roland.' },
          { rule: 'La merci Dieu (CR absolu), nos somes sauf.', example: '承蒙上帝的恩典（Dieu 直接以宾格修饰 merci），我们平安无恙', modern: 'Grâce à Dieu, nous sommes saufs.' },
        ],
      },
    ],
  },

  // Unit 6
  {
    id: 'helix-unit-6',
    unitNumber: 6,
    title: '单元 6：人称代词、物主系统与语音附着现象 (Enclise)',
    subtitle: 'Laurence Hélix 教材第 6 课 · 原典贝鲁尔《特里斯坦与伊瑟》(Tristan et Iseut)',
    tag: '代词系统 · 重读与附着',
    icon: 'Layers',
    summary: '彻底理清古法语人称代词与物主词的“重读（Tonique）”与“非重读（Atone）”双轨制，掌握宾格代词组的固定语序（COD + COI）及高频附着缩合词（nel, nes, jel, sil）。',
    content: [
      {
        heading: '一、人称代词的重读 (Formes toniques) 与非重读 (Formes atones) 完整矩阵',
        body: [
          '古法语人称代词根据在句中是否承受节奏重音，严格分为两套形态：',
          '• **第一、二人称单复数**：',
          '  - 主格：1sg je (重读 gié) | 2sg tu | 1pl nos (nous) | 2pl vos (vous)。',
          '  - 宾格非重读（紧靠动词）：1sg me (m’) | 2sg te (t’) | 1pl nos | 2pl vos。',
          '  - 宾格重读（用于介词后、句首强调、或肯定祈使句/不定式之前！）：1sg **moi (mei)** | 2sg **toi (tei)** | 1pl nos | 2pl vos。',
          '• **第三人称单复数（区分主格、直宾 COD、间宾 COI 及反身代词）**：',
          '  - 阳性：CS sg il / CS pl il (晚期 ils) | 非重读直宾 le (sg), les (pl) | 非重读间宾 **li** (sg“向他”), **lor** (pl“向他们”) | 重读斜格 **lui** (sg), **eus / eulz** (pl)。',
          '  - 阴性：CS sg ele / CS pl eles | 非重读直宾 la (sg), les (pl) | 非重读间宾 **li** (sg“向她”！注意阴阳性单数间宾均为 li！), **lor** (pl) | 重读斜格 **li (lei)** (sg), **eles** (pl)。',
          '  - 反身代词：非重读 se (s’) | 重读 **soi (sei)**。',
          '【关键句法定律】：① 在介词 + 不定式结构中，代词宾语必须置于介词与不定式之间，并采用**重读形式**！如：por **moi** ocire（为了杀我），sanz **lui** veoir（没看见他），de **soi** defendre（自卫）；② 当直接宾语代词（le, la, les）与间接宾语代词（me, te, li, nos, vos, lor）同时出现在动词前时，古法语一律采用 **COD 在前、COI 在后** 的顺序（Je le vos donrai 我将把它赐给你们），且当 le/la/les 遇上同为第三人称的 li/lor 时，直接宾语 le/la/les 常被**隐省省略**（Il li dist = Il le lui dit 他把此事告诉了他）！',
        ],
        rules: [
          { rule: 'Il est venuz por moi (tonique) aidier et por lui (tonique) servir.', example: '介词与不定式之间的代词宾语必须使用重读形式 moi / lui！', modern: 'Il est venu pour m’aider et pour le servir.' },
          { rule: 'Je le vos (COD + COI) dirai ; li rois li (省略 le + li) dona.', example: '双代词顺序恒为直宾在前间宾在后（le vos）；第三人称 le + li 连用时省去 le 只写 li', modern: 'Je vous le dirai ; le roi le lui donna.' },
        ],
      },
      {
        heading: '二、物主限定词与物主代词的双重体系 (Possessifs atones et toniques)',
        body: [
          '物主词同样分为非重读（作限定词：我的 mon/ma/mes）与重读（可带定冠词作限定词 li miens chevaus，或作表语 Cist chevaus est miens）：',
          '• **非重读单数物主词的双格变化**：',
          '  - 阳性：CS sg **mes, tes, ses** | CR sg **mon, ton, son** | CS pl **mi, ti, si** | CR pl **mes, tes, ses**！',
          '  - 阴性：单数 CS/CR **ma, ta, sa**（在元音开头的阴性名词前，古法语把元音省音为 **m’, t’, s’**，如 m’amie 我的女友, s’espee 他的剑, m’ame 我的灵魂！直到 14 世纪才改用阳性形式 mon amie）| 复数 CS/CR **mes, tes, ses**。',
          '• **重读单数物主词**：mien/moie (我的), tuen/toe (你的), suen/soe (他的/她的)。',
          '• **复数拥有者物主词**：nostre, vostre（单数阴阳同形，阳性复数 CS作 nostre / CR作 noz, voz！）；lor（他们的，源自拉丁语代词属格 illórum，因此在古法语中 **lor 永远不加屈折词尾 -s**！如 lor chevaux, lor dames）。',
        ],
        rules: [
          { rule: 'Mes (CS sg) peres et mi (CS pl) frere ont pris lor (不变) espees.', example: '我的父亲（单数主格 mes）和我的兄弟们（复数主格 mi！）拿起了他们的（lor 无 -s）佩剑', modern: 'Mon père et mes frères ont pris leurs épées.' },
          { rule: 'Tristram trait s’espee por desfendre m’amie.', example: '阴性物主词 ma/ta/sa 在元音前直接省音为 m’/t’/s’（s’espee, m’amie）', modern: 'Tristan tire son épée pour défendre mon amie.' },
        ],
      },
      {
        heading: '三、语音附着融合律 (L’Enclise des pronoms atones)',
        body: [
          '当非重读宾格代词 le, les 或副词代词 en 跟在以元音结尾的单音节语法小词（ne, je, se, si, que, qui）之后，且其后紧跟以辅音开头的词时，代词失去自身元音并向前附着融合（Enclise）：',
          '• **ne + le → nel** (nu) | **ne + les → nes** | **ne + en → nen**',
          '• **je + le → jel** | **je + les → jes**',
          '• **si + le → sil** | **si + les → sis** | **se + le → sel**',
          '• **que + le → quel** | **qui + le → quil** | **qui + les → quis**',
        ],
        rules: [
          { rule: 'Je nel (= ne le) sai mie ; sil (= si le) ferit de l’espee.', example: '我完全不知道此事（nel = ne le）；于是用剑砍中了他（sil = si le）', modern: 'Je ne le sais pas ; et il le frappa de l’épée.' },
        ],
      },
    ],
  },
];
