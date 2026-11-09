/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection } from '../grammarCodex';

export const SECTIONS_7_TO_12: GrammarSection[] = [
  // Unit 7
  {
    id: 'helix-unit-7',
    unitNumber: 7,
    title: '单元 7：直陈式现在时、人称词尾与词干元音交替 (Apophonie)',
    subtitle: 'Laurence Hélix 教材第 7 课 · 原典维拉尔杜安《君士坦丁堡的征服》(La Conquête de Constantinople)',
    tag: '动词形态 · 现在时与元音交替',
    icon: 'Hourglass',
    summary: '全面掌握古法语直陈式现在时六个人称词尾定律（第一组 1sg 零词尾 je chant）、重音位置驱动的七大词干元音裂化模式，以及祈使式特殊词干。',
    content: [
      {
        heading: '一、直陈式现在时六个人称词尾与第一人称单数零词尾定律',
        body: [
          '在 11-12 世纪古典古法语中，直陈式现在时三大动词组的人称词尾具有极严密的语音规律：',
          '• **第 1 人称单数 (1sg, je)**：除具有辅音丛需要支撑元音 -e 的动词（如 j’entre, je tremble, je soufre）外，**所有第一组动词和第三组动词的第 1 人称单数绝不加词尾 -e 或 -s**！',
          '  - 第一组：je **chant**, j’**aim**, je **plor**, je **parol**, je **os**, je **cuide / cuit**, je **pri**。',
          '  - 第三组：je **voi**, je **di**, je **sai**, je **doi**, je **vien / vieng**, je **faz**, je **muir**。（直到 13 世纪才开始出现类推 -e 或类推 -s）。',
          '• **第 2 人称单数 (2sg, tu)**：恒带词尾 **-s / -z**（tu chantes, tu vois, tu diz, tu parz）。',
          '• **第 3 人称单数 (3sg, il/ele)**：第一组以弱元音 **-e** 结尾（早期 11 世纪保留清齿音 **-et**，如 il chantet, il aimet）；第二、三组以齿音 **-t** 结尾（il part, il voit, il dit, il muert；若词干已含 t/d 则融合，如 il rent, il vent）。',
          '• **复数三个人称**：1pl **-ons**（少数保留古形：somes, faimes, dimes）| 2pl **-ez**（腭音后作 **-iez**，如 mangiez, laissiez, cuidiez）| 3pl **-ent**。',
        ],
        rules: [
          { rule: 'Je vos pri et requier que vos m’escoutiez.', example: '我恳求并请求你们倾听我说（1sg pri 与 requier 均无词尾 -e 或 -s！）', modern: 'Je vous prie et requiers que vous m’écoutiez.' },
          { rule: 'Li chevaliers laissierent le champ ; vos laissiez.', example: '词干末为颚音时，2pl 词尾由 -ez 变为 -iez（laissiez, mangiez）', modern: 'Les chevaliers laissèrent le champ ; vous laissez.' },
        ],
      },
      {
        heading: '二、词干元音交替机制 (Alternance vocalique radicale / Apophonie)',
        body: [
          '拉丁语重音在不同人称中发生移动：在单数 1、2、3 人称及复数第 3 人称（简称**强式重音人称 Personnes fortes / rhizotoniques**，俗称“靴子形分布”）中，重音落在**词根元音**上，引发开音节元音双元音化（裂化）；而在复数 1、2 人称（简称**弱式无重音人称 Personnes faibles / arizotoniques**，以及不定式、未完成过去时、现在分词）中，重音移至**词尾（-ons, -ez）**，词根元音保持不裂化或弱化！',
          '七大经典元音裂化对照表（强式词干 vs 弱式词干）：',
          '1. **ai / a**（鼻音前）：j’aim, tu aimes, il aime, il aiment **vs** nos amons, vos amez（amer 爱；同理 clamer → claim / clamons）。',
          '2. **ie / e**：je lieve, il lieve **vs** nos levons, vos levez（lever 举起；同理 venir → vien / venons；ferir 击打 → fier / ferons；querre 寻找 → quier / querons）。',
          '3. **ue / o (ou)**：il trueve **vs** nos trovons（trover 找到；同理 morir → muert / morons；movoir → muet / movons；plorer → pleure / plorons；demorer → demeure / demorons；voloir → vuelt / volons；pooir → puet / poons）。',
          '4. **oi (ei) / e**：je doi, il doit, il doivent **vs** nos devons, vos devez（devoir 应当；同理 recevoir → reçoif / recevons；beivre 喝 → boit / bevons；منer 带领 → moine / menons；peser → poise / pesons）。',
          '5. **i / e (oi)**：je pri, il prie **vs** nos preions, vos preiez（preier 祈祷；同理 निier 否认 → ni / neions；issir 走出 → ist / issons）。',
          '6. **eu / o**：ilkeurt / cueurt **vs** nos corons（corre 奔跑；同理 secorre → sekeurt / secorons）。',
          '7. **双重词干交替（带辅音颚化）**：haïr（憎恨）→ je haz, tu hez, il het **vs** nos haons, vos haez, il heent！parler（说话）→ je parol, il parole **vs** nos parlons, vos parlez！aidier（帮助）→ j’aiu, il aiue **vs** nos aidons！',
        ],
        rules: [
          { rule: 'Il trueve (3sg 强式) le tresor ; nos le trovons (1pl 弱式).', example: '强式人称重音在词根裂化为 ue（trueve），弱式人称重音在词尾保留 o（trovons）', modern: 'Il trouve le trésor ; nous le trouvons.' },
          { rule: 'Je vos aim (1sg 强式) ; por coi ne m’amez (2pl 弱式) vos ?', example: '我爱你们（强式 aim）；你们为何不爱我（弱式 amez）？', modern: 'Je vous aime ; pourquoi ne m’aimez-vous pas ?' },
        ],
      },
    ],
  },

  // Unit 8
  {
    id: 'helix-unit-8',
    unitNumber: 8,
    title: '单元 8：简单过去时（Parfait / Passé Simple）弱式与三大强式体系',
    subtitle: 'Laurence Hélix 教材第 8 课 · 原典散文传奇《亚瑟王之死》(La Mort le Roi Artu)',
    tag: '动词形态 · 弱式与强式过去时',
    icon: 'Award',
    summary: '彻底攻克古法语阅读的最大难点——简单过去时（Parfait）：区分重音全在词尾的弱式过去时（Parfaits faibles）与重音发生“1-3-6 跳跃”的三大强式过去时（-i 型、-s 型、-ui 型）。',
    content: [
      {
        heading: '一、弱式简单过去时 (Parfaits faibles / arizotoniques)',
        body: [
          '所有六个变位人称的重音全部落在词尾特征元音上，词根始终保持不变：',
          '1. **第一组 -a- 型（< 拉丁语 -āvi）**：chantai, chantas, chanta, chantames, chantastes, chanterent（注意 3pl 为 -erent 而非现代 -èrent，仅在 aller, donner 等少数动词曾短暂出现过方言异体）。',
          '2. **第二组及部分第三组 -i- 型（< 拉丁语 -īvi / -iī）**：dormi (partit), dormis, dormi (dormit), dormimes, dormistes, dormirent（同类：servir, sentir, oïr 听见 → oï, oïs, oï, oïmes, oïstes, oïrent）。',
          '3. **-u- 型弱式过去时（< 通俗拉丁语 -ūti）**：见于 vendre, perdre, rendre, batre, corre 等动词：vendi / vendui, vendis, vendi (vendut), vendimes, vendistes, vendirent (vendurent)。',
        ],
        rules: [
          { rule: 'Quant li rois l’oï (3sg), si apela (3sg) ses barons.', example: '当国王听闻此事（oïr 弱式过去时 oï），便召见了他的男爵们（apeler 弱式过去时 apela）', modern: 'Quand le roi l’entendit, il appela ses barons.' },
        ],
      },
      {
        heading: '二、强式简单过去时 (Parfaits forts) 的“1-3-6 强重音黄金法则”',
        body: [
          '在强式过去时中，**第 1 人称单数 (1sg)、第 3 人称单数 (3sg) 与第 3 人称复数 (3pl)** 的重音落在**词根**上（无词尾重读元音，简称 1-3-6 强式位）；而**第 2 人称单数 (2sg)、第 1 人称复数 (1pl) 与第 2 人称复数 (2pl)** 的重音落在**词尾**上（带分音符 -ïs, -ïmes, -ïstes 或 -üs, -ümes, -üstes，简称 2-4-5 弱式位）！',
          '强式简单过去时分为三大历史阵营：',
          '• **阵营 A：元音交替 -i- 型强式过去时（拉丁语 feci, vidi, veni）**：',
          '  - **veoir (看见)**：1sg **vi**, 2sg veïs, 3sg **vit**, 1pl veïmes, 2pl veïstes, 3pl **virent**。',
          '  - **faire (做)**：1sg **fis**, 2sg feïs (fesis), 3sg **fist**, 1pl feïmes, 2pl feïstes, 3pl **firent (fisdrent)**。',
          '  - **venir / tenir (来/握持)**：1sg **ving / ting**, 2sg venis / tenis, 3sg **vint / tint**, 1pl venimes, 2pl venistes, 3pl **vindrent / tindrent**。',
          '• **阵营 B：Sigma (-s-) 型强式过去时（拉丁语 misi, dixi, prehensi, quaesi）**：',
          '  - **metre (放)**：1sg **mis**, 2sg mesis (meïs), 3sg **mist**, 1pl mesimes, 2pl mesistes, 3pl **misdrent (mirent)**。',
          '  - **prendre (拿)**：1sg **pris**, 2sg presis, 3sg **prist**, 1pl presimes, 2pl presistes, 3pl **prisdrent (prirent)**。',
          '  - **dire (说)**：1sg **dis**, 2sg desis, 3sg **dist**, 1pl desimes, 2pl desistes, 3pl **distrent (dirent)**。',
          '  - **querre (寻找/请求)**：1sg **quis**, 2sg quesis, 3sg **quist**, 3pl **quistrent**；**ocire (杀死)** → **ocis / ocist / ocistrent**；**seoir (坐)** → **sis / sist / sistrent**。',
          '• **阵营 C：-ui / -u- 型强式过去时（拉丁语 habui, potui, sapui, debui, volui, cognovi, placui）**：',
          '  - **avoir (有)**：1sg **oi**, 2sg eüs, 3sg **ot**, 1pl eümes, 2pl eüstes, 3pl **orent**。',
          '  - **pooir (能够)**：1sg **poi**, 2sg peüs, 3sg **pot**, 1pl peümes, 2pl peüstes, 3pl **porent**。',
          '  - **savoir (知晓)**：1sg **soi**, 2sg seüs, 3sg **sot**, 1pl seümes, 2pl seüstes, 3pl **sorent**。',
          '  - **plaire (取悦)** / **taire (沉默)**：1sg **ploi / toi**, 3sg **plot / tot**, 3pl **plorent / torent**。',
          '  - **devoir (应当)**：1sg **dui**, 2sg deüs, 3sg **dut**, 3pl **durent**；**conoistre (认识)** → **conui / conut / conurent**；**movoir (移动)** → **mui / mut / murent**；**recevoir** → **reçui / reçut / reçurent**；**boivre (喝)** → **bui / but / burent**；**croire (相信)** → **crui / crut / crurent**；**gesir (躺卧)** → **jui / jut / jurent**；**estovoir (必须)** → 3sg **estut**。',
        ],
        rules: [
          { rule: 'Il le vit (veoir), si le prist (prendre) et le mist (metre) en prison.', example: '三大强式过去时连续并列：vit (看见) + prist (擒获) + mist (投入)', modern: 'Il le vit, le prit et le mit en prison.' },
          { rule: 'Quant il le sot (savoir), il n’ot (avoir) que faire ne ne pot (pooir) fuir.', example: '-ui 型三大黄金过去时：sot (得知) + ot (有) + pot (能够)', modern: 'Quand il le sut, il n’eut que faire et ne put fuir.' },
        ],
      },
    ],
  },

  // Unit 9
  {
    id: 'helix-unit-9',
    unitNumber: 9,
    title: '单元 9：未完成过去时演进与虚拟式（现在时与未完成时）完整体系',
    subtitle: 'Laurence Hélix 教材第 9 课 · 原典让·德·茹安维尔《圣路易传》(Vie de saint Louis)',
    tag: '动词形态 · 未完成时与虚拟式',
    icon: 'Feather',
    summary: '梳理未完成过去时从 -eie 到 -oie 的语音演变与西部方言 -eve，掌握现在虚拟式单数无 -e 法则及独立主句中虚拟式的祈愿、命令与假设用法。',
    content: [
      {
        heading: '一、未完成过去时 (Imparfait de l’indicatif) 的历史音变与方言分流',
        body: [
          '拉丁语未完成过去时具有 -ābam（第一组）与 -ēbam（第二、三组）两套词尾：',
          '1. 在中央法兰西岛与香槟方言中，全统一采用源自 -ēbam 的词尾，历经三重音变：**-ēbam > -eie (11世纪) > -oie (12-13世纪，发音为 [ɔjə] 后变为 [wɛ])**！',
          '   • 标准六人称词尾：**-oie, -oies, -oit, -iiens (-ions), -iiez (-iez), -oient**。',
          '2. 在西部诺曼、盎格鲁-诺曼与安茹方言中，第一组动词保留了拉丁语 -ābam 的双唇擦音演变：**chantoe / chanteve, chanteves, chantout / chantevet, chantoent / chantevent**！',
          '3. 系动词 estre 除规则形式 estoie, estoies, estoit 外，高频使用直接源自拉丁语 eram, eras, erat, erant 的古老短形式：**ere, eres, ert (iert), erent (ierent)**。',
        ],
        rules: [
          { rule: 'Li rois ert (estoit) en son palais et tenoit grant cort.', example: '国王当时在宫殿中（ert 为 estre 古未完成时），正举行盛大朝会（tenoit）', modern: 'Le roi était en son palais et tenait grande cour.' },
        ],
      },
      {
        heading: '二、虚拟式现在时 (Subjonctif présent) 与虚拟式未完成过去时 (Subjonctif imparfait)',
        body: [
          '• **虚拟式现在时的两大形态阵营**：',
          '  1. **第一组动词（源自拉丁语 -em, -es, -et，元音脱落故单数绝无 -e！）**：',
          '     1sg **chant**, 2sg **chanz** (chant+s), 3sg **chant** (早期 chantet) | 1pl chantons, 2pl chantez, 3pl chantent。',
          '     【特殊词尾音变】：若词干以辅音结尾，3sg 保留拉丁语词尾 -t 并发生同化！如：conseillier → **conseilt > conseuz**；doner → **doinst / doint**；aler → **voist**；garder → **gart**（Dieus vos gart! 愿上帝保佑您！）；aidier → **aït**（Si m’aït Dieus! 愿上帝助我！）；amer → **aint**（Se Dieus m’aint!）。',
          '  2. **第二、三组动词（源自拉丁语 -am, -as, -at，保留词尾 -e！）**：',
          '     词尾统一为：**-e, -es, -e, -iens (-ons), -iez, -ent**（如 dorme, parte, vende, doie, voie, face, die, sache, viegne, puist/puisse）。',
          '• **虚拟式未完成过去时的推导铁律**：',
          '  永远以该动词**简单过去时第 2 人称单数（弱式词干）**为基础，加上 **-sse, -sses, -st, -ssiens (-ssons), -ssiez, -ssent**！',
          '  - 第一组：chantas → **chantasse, chantasses, chantast**, chantassiens, chantassiez, chantassent。',
          '  - 强式动词：feïs (faire) → **feïsse / feïst**；veïs (veoir) → **veïsse / veïst**；eüs (avoir) → **eüsse / eüst**；peüs (pooir) → **peüsse / peüst**；fus (estre) → **fusse / fust**；venis (venir) → **venisse / venist**；presis (prendre) → **presisse / presist**。',
        ],
        rules: [
          { rule: 'Or me conseuz (conseillier) Dieus et me doinst (doner) force !', example: '在独立主句中，虚拟式直接充当祈愿句（Optatif）且无需连词 que！主语倒装于动词后', modern: 'Que Dieu me conseille maintenant et me donne de la force !' },
          { rule: 'Ja n’i alasse s’il ne le m’eüst comandé.', example: '虚拟式未完成时（alasse, eüst）用于表达与事实相反的非真实假设条件句', modern: 'Je n’y serais jamais allé s’il ne me l’avait pas commandé.' },
        ],
      },
    ],
  },

  // Unit 10
  {
    id: 'helix-unit-10',
    unitNumber: 10,
    title: '单元 10：简单将来时与条件式（合成演化与辅音同化增音律）',
    subtitle: 'Laurence Hélix 教材第 10 课 · 原典吕特伯夫《狄奥菲尔的奇迹》(Le Miracle de Théophile)',
    tag: '动词形态 · 将来时与条件式',
    icon: 'Sparkles',
    summary: '深入理解通俗拉丁语“不定式 + habere”合成将来时与条件式的语法化机制，全面掌握元音脱落引发的过渡辅音插入（d/b）与双 r 同化词干。',
    content: [
      {
        heading: '一、将来时与条件式的合成起源及标准词尾',
        body: [
          '古典拉丁语的合成将来时（cantabo, dicam）在通俗拉丁语中消亡，被**“动词不定式 + 助动词 habēre（有/必须）的现在时或未完成过去时”**取代：',
          '• **简单将来时（Futur simple = 不定式词干 + avoir 现在时缩略词尾）**：',
          '  词尾恒为：1sg **-ai** (< habeo), 2sg **-as** (< habes), 3sg **-a** (< habet), 1pl **-ons** (< [hab]emus), 2pl **-oiz / -eiz / -ez** (< [hab]etis，注意 12-13 世纪第 2 人称复数将来时特征词尾为 **-oiz**！如 vos diroiz, vos verroiz, vos avroiz), 3pl **-ont** (< habunt)。',
          '• **条件式现在时（Conditionnel présent = 同一将来时词干 + avoir 未完成过去时缩略词尾）**：',
          '  词尾恒为：1sg **-oie (-eie)**, 2sg **-oies**, 3sg **-oit**, 1pl **-iiens (-ions)**, 2pl **-iiez (-iez)**, 3pl **-oient**。',
          '  核心功能：① 过去视角下的将来（Futur du passé：Il dist qu’il vendroit 他说他会来）；② 潜在假设或委婉推论（Potentiel / Éventuel）。',
        ],
        rules: [
          { rule: 'Se vos volez, nos i irons et vos verroiz (2pl futur) le roi.', example: '你们将看见国王（2pl 将来时标准词尾 -oiz < -eiz）', modern: 'Si vous voulez, nous y irons et vous verrez le roi.' },
        ],
      },
      {
        heading: '二、将来时/条件式词干的四大历史音变法则',
        body: [
          '当重音移至词尾（-ai, -oie）时，不定式内部的非重读元音 e 或 i 发生**词中音脱落（Syncope）**，导致词根末辅音与 r 直接碰撞，触发四大规律性音变：',
          '1. **过渡辅音增音律（Épenthèse de d ou b）**：',
          '   • **n + r → ndr**：venir → *ven-r-ai → **vendrai**（我将到来，切勿与卖 vendre 混淆！）；tenir → **tendrai**；remanoir → **remandrai**；semondre → **semondrai**。',
          '   • **l + r → ldr (> udr)**：voloir → *vol-r-ai → **voldrai (> voudrai)**；valoir → **valdrai (> vaudrai)**；falir → **faldrai (> faudrai)**；tolir (夺取) → **toldrai**；soloier → **soldrai**。',
          '   • **m + r → mbr**：criembre (畏惧) → **crembrai**。',
          '2. **辅音同化双 r 律（Assimilation régressive en -rr-）**：',
          '   • **d/t/v/p + r → rr**：veoir (*ved-r-ai) → **verrai**；pooir (*pot-r-ai) → **porrai**；doner → **donrai / dorrai**； mener → **menrai / merrai**；lessier → **lerrai**；corre → **corrai**；morir → **morrai**；querre → **querrai**；ocire → **ocirrai**。',
          '3. **第一组词干 e 弱化保留与特殊异干**：',
          '   • faire → **ferai**；dire → **dirai**；estre → **serai** 或古拉丁遗存 **ier, iers, iert, ermes, ierent**；aler → **irai**；avoir → **avrai (> aurai)**；savoir → **savrai (> saurai)**；devoir → **devrai**；estovoir (必须) → **estovra**；cheoir (跌落) → **cherrai**；seoir (坐) → **serrai**。',
        ],
        rules: [
          { rule: 'Demain vendra (venir) li rois et tendra (tenir) sa cort ; ja n’i faudra (falir).', example: 'n+r 插入 d 变为 vendra/tendra；l+r 插入 d 并元音化为 faudra', modern: 'Demain le roi viendra et tiendra sa cour ; il n’y manquera jamais.' },
          { rule: 'Je vos dorrai (= donrai) bons destriers et si vos merrai (= menrai) en France.', example: 'doner 与 mener 在将来时中 n+r 常同化为双 r：dorrai (我将给)、merrai (我将带领)', modern: 'Je vous donnerai de bons destriers et vous mènerai en France.' },
        ],
      },
    ],
  },

  // Unit 11
  {
    id: 'helix-unit-11',
    unitNumber: 11,
    title: '单元 11：中世纪否定系统、具象强化词 (Forclusifs) 与微弱虚拟值',
    subtitle: 'Laurence Hélix 教材第 11 课 · 原典说唱传奇《奥卡森与尼可莱特》(Aucassin et Nicolette)',
    tag: '否定句法 · 具象极小词',
    icon: 'Flame',
    summary: '掌握古法语单否定 ne (nen) 的自足性、并列否定连词 ne (ni)、具象极小量名词（pas, mie, point, gote）向否定副词的语法化过程，以及“不值一文（ne priser un bouton）”骑士鄙视修辞。',
    content: [
      {
        heading: '一、自足否定词 ne (nen) 与并列否定连词 ne (< 拉丁语 nec)',
        body: [
          '1. **单否定 ne 的完全自足性**：在古法语中，无需任何后置辅助词（pas/point），单个 **ne**（在元音前省音作 **n’**，或在早期手抄本元音前保留古全形 **nen**，如 Je nen ai 读作 je n’ai）即可独立完成对整句的否定！尤其在与情态动词（pooir, voloir, savoir, devoir, oser）、心理动词（conoistre, douter, chaloir“不在乎 Il ne m’en chaut”）及从句连用时，几乎只用单 ne。',
          '2. **并列否定连词 ne（现代法语 ni）**：古法语中没有“ni”这个拼写，连接两个否定成分（既不……也不……）的连词源自拉丁语 nec，同样拼作 **ne**（元音前绝不省音，或写为 ned）！阅读时需根据位置区分：紧贴动词前的是否定副词 ne (不)，连接两个名词、形容词、不定式或分句的是并列连词 ne (既不/也不 = 现代 ni)！',
        ],
        rules: [
          { rule: 'Je ne (ne) sai que je doie faire, ne (ni) ou je puisse aler.', example: '前一个 ne 为否定副词“不”，后一个 ne 为并列否定连词“也不 (ni)”', modern: 'Je ne sais pas ce que je dois faire, ni où je peux aller.' },
          { rule: 'De tot ce ne li chaut.', example: '对此一切他毫不在乎（chaloir 恒用单 ne 否定）', modern: 'De tout cela, peu lui importe.' },
        ],
      },
      {
        heading: '二、具象极小量辅助词 (Forclusifs) 与中世纪“微弱价值”修辞',
        body: [
          '为了加强否定语气，古法语引入了一系列原指**“极微小具体物品”**的直宾格名词（充当动作范围或微弱度量状语）：',
          '• **四大语法化辅助词**：',
          '  1. **pas**（< passum“一步”）：最初用于位移动词（Je n’irai pas 我一步也不走），后扩展为通用否定。',
          '  2. **mie**（< micam“一粒面包屑”）：在北方、皮卡第与香槟文献中比 pas 更常用（Je nel ferai mie 我一星半点也不做）。',
          '  3. **point**（< punctum“针尖一点”）：常带部分补足语（Il n’i a point d’eve 那里一滴水也没有）。',
          '  4. **gote**（< guttam“一滴液体”）：专用于视觉与听觉动词（ne veoir gote 一点也看不见，n’oïr gote 一点也听不见）。',
          '• **武功歌与骑士小说特色“不值一物（Valeur minimale）”修辞**：',
          '  中世纪诗人极爱用农业或日常生活琐物作否定强化宾语，表示“毫不畏惧、不值一提”：ne priser / ne valoir / ne doner **un denier**（一枚铜币）、**un bouton**（一颗纽扣）、**un gant**（一只手套）、**un esperon**（一根马刺）、**une pome**（一颗苹果）、**une alie**（一颗酸果）、**un ail**（一瓣大蒜）、**une feve**（一颗蚕豆）、**un festu**（一根稻草）！',
          '• **否定剥夺前缀与撇开结构**：**ne... mais**（不再 ne... plus）；**ne... onques / ja**（从不 ne... jamais）；**ne... gueres**（几乎不）；**ne... que / ne... fors / ne... mais que**（只有、除了……之外不 ne... que）。',
        ],
        rules: [
          { rule: 'Totes lor armes ne valent un bouton (une pome / un denier).', example: '他们所有的武器还不值一颗纽扣（毫无用处）', modern: 'Toutes leurs armes ne valent strictement rien.' },
          { rule: 'Il n’i ot chevalier fors (mais que) le roi.', example: '那里除了国王之外没有任何骑士（ne... fors / mais que = ne... que）', modern: 'Il n’y eut aucun chevalier sinon le roi.' },
        ],
      },
    ],
  },

  // Unit 12
  {
    id: 'helix-unit-12',
    unitNumber: 12,
    title: '单元 12：从属句体系、假设条件句式与关系代词双格网络',
    subtitle: 'Laurence Hélix 教材第 12 课 · 原典克雷蒂安·德·特鲁瓦《圣杯传奇》(Perceval)',
    tag: '复杂句法 · 从句与假设系统',
    icon: 'BookOpen',
    summary: '系统构建古法语三大从属句（关系从句、名词性补足从句、状语从句），重点攻克假设条件连词 se 的三大经典时态搭配公式与关系代词 cui 的特殊功能。',
    content: [
      {
        heading: '一、关系代词的双格体系 (qui, que, cui, dont, ou)',
        body: [
          '古法语关系代词同样严格遵守格位分工，且高频出现**“无先行词关系从句（Relatives sans antécédent）”**：',
          '1. **主格 CS `qui`**（盎格鲁-诺曼方言拼作 **ki**）：在从句中作主语。若无先行词，意为“凡是……的人、任何人（celui qui, quiconque）”或用于条件假设“如果有人（si l’on）”！',
          '2. **直接宾格 CR `que`**（元音前省音作 **qu’**）：在从句中作直接宾语。中性作“所……的事物（ce que）”。',
          '3. **重读间接宾格/属格 CR `cui`**（< 拉丁语与格 cui）：古法语极具特色的万能斜格关系代词！有三大用法：',
          '   • 用法 A（介词后指人）：介词 + cui（la dame por cui je chant 我为之歌唱的贵妇）。',
          '   • 用法 B（无介词直接表间接宾语“向他/她”）：Cil **cui** Dieus done ennors（上帝赐予其荣耀的那个人 = à qui）。',
          '   • 用法 C（无介词直接表所属关系“他的/她的”= 现代 dont）：Li rois **cui** fille il ama（他所爱其女儿的那位国王 = dont il aima la fille）！',
          '4. **`dont`**（< de unde）：原表空间起点“从那里（d’où）”，逐步扩展为“关于此事、凭此、其（de qui, de quoi, dont）”；**`ou`**（< ubi）：表地点或时间“在那里、在……之时”。',
        ],
        rules: [
          { rule: 'Artus, la cui (属格) proëce nos enseigne ; cil cui (与格) je serf.', example: '亚瑟，其勇武教导着我们（la cui proëce = dont la prouesse）；我所侍奉的那个人（cui = à qui）', modern: 'Arthur, dont la prouesse nous enseigne ; celui que je sers.' },
          { rule: 'Qui (= Celui qui / Si l’on) bien aime, a envis oublie.', example: '无先行词 qui 泛指“凡深爱之人，极难忘怀”', modern: 'Qui aime bien oublie difficilement.' },
        ],
      },
      {
        heading: '二、假设条件连词 se (< 拉丁语 sī) 的三大经典时态呼应公式',
        body: [
          '在古法语中，引导假设条件从句的连词“如果”拼作 **se**（元音前省音作 **s’**，如 s’il vient；切勿与副词 si < sic 混淆！）。根据假设的真实度，古法语遵循三大经典时态搭配公式：',
          '• **公式 1（现实/可能条件句 Potentiel / Réel）**：',
          '  **Se + 直陈式现在时 (Présent) ➔ 主句用将来时 / 祈使式 / 现在时**。',
          '  例：*Se tu viens, je t’amerai.*（如果你来，我将爱你）。',
          '• **公式 2（将来弱潜在条件句 Éventuel）**：',
          '  **Se + 直陈式未完成过去时 (Imparfait) ➔ 主句用条件式现在时 (Conditionnel)**。',
          '  例：*S’il venoit, nos avriiens joie.*（倘若他能来，我们定会欢欣）。',
          '• **公式 3（非真实/与事实相反的虚拟条件句 Irréel du présent ET du passé）**：',
          '  【核心考点】与现代法语用“si + 未完成/愈过去时，主句用条件式”截然不同！在古典古法语中，无论是对现在的非真实假设，还是对过去的非真实假设，**从句与主句双双使用虚拟式未完成过去时（或虚拟式愈过去时）**！',
          '  **Se + 虚拟式未完成过去时 (Subjonctif imparfait) ➔ 主句也用虚拟式未完成过去时 (Subjonctif imparfait)**！',
        ],
        rules: [
          { rule: 'Se je fusse (Subj. Imp.) riches, je vos donasse (Subj. Imp.) un chastel.', example: '非真实假设经典对称结构：从句与主句全用虚拟式未完成过去时（fusse... donasse）！', modern: 'Si j’étais riche, je vous donnerais un château.' },
          { rule: 'S’il eüst eü (Subj. PQP) s’espee, ja ne fust morz (Subj. PQP).', example: '过去非真实假设：如果他当时有剑在手，绝不会阵亡（两分句均用虚拟式）', modern: 'S’il avait eu son épée, jamais il ne serait mort.' },
        ],
      },
      {
        heading: '三、状语从句连词家族与隐省连词结构 (Parataxe)',
        body: [
          '• **时间连词**：quant（当……时）、com（当……时）、tant com（只要……期间）、ainz que / avant que（在……之前，接虚拟式）、puis que（自从……之后；既然）、des que（一……就）。',
          '• **原因与目的连词**：por ce que / car / quar（因为，接直陈式）；puis que（既然）；por que / a ce que（为了，接虚拟式）。',
          '• **让步连词**：ja soit ce que（尽管 bien que，接虚拟式）；comment que / quoi que（无论如何，接虚拟式）。',
          '• **连词 que 的隐省（Subordonnée sans que / Parataxe）**：在主句为意愿、命令、祈求或情感动词（voloir, prier, comander, cuidier）后，或者在伴随结果句（Il n’i a si riche home ne plort 没有如此富贵之人而不哭泣的）中，古法语常直接省去连词 que，靠从句的虚拟式形态表明从属关系！',
        ],
        rules: [
          { rule: 'Je vueil (省略 que) tu i ailles (voises) tantost.', example: '意愿动词 vueil 后直接省略连词 que，后接虚拟式 voises/ailles', modern: 'Je veux que tu y ailles aussitôt.' },
        ],
      },
    ],
  },
];
