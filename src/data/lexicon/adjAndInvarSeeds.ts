/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AdjSeed {
  csM: string;
  crM: string;
  fem: string;
  adjType: string;
  fr: string;
  zh: string;
  lat: string;
  lesson: string;
}

export interface InvarSeed {
  word: string;
  pos: string;
  note: string;
  fr: string;
  zh: string;
  lat: string;
  exampleOf: string;
  exampleFr: string;
  exampleZh: string;
  lesson: string;
}

const RAW_ADJ_TUPLES: [string, string, string, string, string, string, string, string][] = [
  // 1. Type I Adjectives (Latin bonus, bona)
  ['bons', 'bon', 'bone', 'Adj. Type I', 'bon, vaillant, de grande valeur', '好的、善良的、精良的（阳单CS亦作 buens）', 'Lat. bonus, bonum, bona', 'Leçon 2 · Adjectifs Type I'],
  ['biaus', 'bel', 'bele', 'Adj. Type I (-el > -iaus)', 'beau, noble, cher (en apostrophe: bels sire)', '俊美的、美丽的、尊贵的（呼格常作 bels/biaus）', 'Lat. bellus, bellum, bella', 'Leçon 2 · Vocalisation dans bel'],
  ['chiers', 'chier', 'chiere', 'Adj. Type I', 'cher, aimé, précieux, coûteux', '亲爱的、珍贵的、昂贵的（vendre chier）', 'Lat. carus', 'Leçon 2 · Adjectifs Type I'],
  ['clers', 'cler', 'clere', 'Adj. Type I', 'clair, brillant, lumineux, limpide', '明亮的、清澈的、闪耀的（cler vis = 容光焕发的面庞）', 'Lat. clarus', 'Leçon 2 · Adjectifs Type I'],
  ['hauz', 'haut', 'haute', 'Adj. Type I', 'haut, élevé, noble, puissant', '高耸的、崇高的、显赫的（haut home = 大贵族）', 'Lat. altus + francique *hoh', 'Leçon 2 · Adjectifs Type I'],
  ['bas', 'bas', 'basse', 'Adj. Type I', 'bas, humble, à voix basse', '低的、低微的、低声的', 'Lat. tardif bassus', 'Leçon 2 · Adjectifs Type I'],
  ['lons', 'lonc', 'longue', 'Adj. Type I', 'long, éloigné', '长的、漫长的', 'Lat. longus', 'Leçon 2 · Adjectifs Type I'],
  ['corz', 'cort', 'corte', 'Adj. Type I', 'court, bref', '短的、短暂的', 'Lat. curtus', 'Leçon 2 · Adjectifs Type I'],
  ['larges', 'large', 'large', 'Adj. Type I', 'large, généreux, prodigue', '宽阔的、慷慨好施的', 'Lat. largus', 'Leçon 2 · Adjectifs Type I'],
  ['estroiz', 'estroit', 'estroite', 'Adj. Type I', 'étroit, serré', '狭窄的、紧束的', 'Lat. strictus', 'Leçon 2 · Adjectifs Type I'],
  ['droiz', 'droit', 'droite', 'Adj. Type I', 'droit, juste, légitime, direct', '正直的、合法的、笔直的（droit seignor = 正统领主）', 'Lat. directus', 'Leçon 2 · Adjectifs Type I'],
  ['torz', 'tort', 'torte', 'Adj. Type I', 'tordu, injuste', '弯曲的、不公的', 'Lat. tortus', 'Leçon 2 · Adjectifs Type I'],
  ['voirs', 'voir', 'voire', 'Adj. Type I', 'vrai, véridique, sincère', '真实的、千真万确的（de voir = 的确）', 'Lat. verus', 'Leçon 2 · Adjectifs Type I'],
  ['faus', 'faus', 'fausse', 'Adj. Type I', 'faux, trompeur, déloyal', '虚假的、背信的、伪造的', 'Lat. falsus', 'Leçon 2 · Adjectifs Type I'],
  ['sainz', 'saint', 'sainte', 'Adj. Type I', 'saint, sacré', '神圣的、圣洁的', 'Lat. sanctus', 'Leçon 2 · Adjectifs Type I'],
  ['sains', 'sain', 'saine', 'Adj. Type I', 'sain, en bonne santé, intact', '健康的、安然无恙的（sain et sauf）', 'Lat. sanus', 'Leçon 2 · Adjectifs Type I'],
  ['saus', 'sauf', 'sauve', 'Adj. Type I', 'sauf, préservé, sauvé', '安全的、获救的', 'Lat. salvus', 'Leçon 2 · Adjectifs Type I'],
  ['vifs', 'vif', 'vive', 'Adj. Type I', 'vif, vivant, ardent', '活着的、生动的、剧烈的', 'Lat. vivus', 'Leçon 2 · Adjectifs Type I'],
  ['morz', 'mort', 'morte', 'Adj. Type I', 'mort, tué', '死去的、阵亡的', 'Lat. *mortus', 'Leçon 2 · Adjectifs Type I'],
  ['las', 'las', 'lasse', 'Adj. Type I', 'las, fatigué, malheureux (hélas = ha las !)', '疲惫的、可怜的、不幸的（he las! = 哀哉，我真不幸！）', 'Lat. lassus', 'Leçon 2 · Adjectifs Type I'],
  ['liez', 'lié', 'liee', 'Adj. Type I', 'joyeux, content (cf. faire chère lie)', '欢喜的、高兴的、愉悦的', 'Lat. laetus', 'Leçon 2 · Adjectifs Type I'],
  ['dolenz', 'dolent', 'dolente', 'Adj. Type I', 'affligé, triste, malheureux', '悲痛的、哀伤的', 'Lat. dolens, dolentem', 'Leçon 2 · Adjectifs Type I'],
  ['iriez', 'irié', 'iriee', 'Adj. Type I', 'irrité, en colère, affligé', '愤怒的、悲愤交加的', 'Lat. iratus', 'Leçon 2 · Adjectifs Type I'],
  ['pensiz', 'pensif', 'pensive', 'Adj. Type I', 'pensif, plongé dans ses pensées, soucieux', '沉思的、忧心忡忡的', 'Dérivé de penser', 'Leçon 2 · Adjectifs Type I'],
  ['hardiz', 'hardi', 'hardie', 'Adj. Type I', 'hardi, audacieux, courageux', '无畏的、果敢的、勇猛的', 'Dérivé de hardir (< francique)', 'Leçon 2 · Adjectifs Type I'],
  ['coarz', 'coart', 'coarde', 'Adj. Type I', 'couard, lâche, poltron', '怯懦的、胆小的', 'Dérivé de coe (< cauda)', 'Leçon 2 · Adjectifs Type I'],
  ['fiers', 'fier', 'fiere', 'Adj. Type I', 'fier, redoutable, farouche, noble', '威猛的、凛然可畏的、高傲的', 'Lat. ferus', 'Leçon 2 · Adjectifs Type I'],
  ['orgueilleus', 'orgueilleus', 'orgueilleuse', 'Adj. Type I', 'orgueilleux, hautain, magnifique', '傲慢的、气势凛然的', 'Dérivé de orgueil', 'Leçon 2 · Adjectifs Type I'],
  ['cortois', 'cortois', 'cortoise', 'Adj. Type I', 'courtois, bien éduqué, noble de manières', '温文尔雅的、合乎宫廷礼仪的', 'Dérivé de cort', 'Leçon 2 · Adjectifs Type I'],
  ['vilains', 'vilain', 'vilaine', 'Adj. Type I', 'vilain, grossier, roturier, laid', '粗鄙的、卑劣的、丑陋的', 'Lat. villanus', 'Leçon 2 · Adjectifs Type I'],
  ['frans', 'franc', 'franche', 'Adj. Type I', 'noble de naissance et de cœur, libre, sincère', '高贵的、自由的、坦荡慷慨的（franche dame）', 'Francique *frank', 'Leçon 2 · Adjectifs Type I'],
  ['riches', 'riche', 'riche', 'Adj. Type I', 'puissant, noble de haut rang, riche', '有权势的、显贵的、富足的（古法语首义为「大权势的」）', 'Francique *riki', 'Leçon 2 · Adjectifs Type I'],
  ['povres', 'povre', 'povre', 'Adj. Type I', 'pauvre, malheureux, démuni', '贫穷的、可怜的', 'Lat. pauper', 'Leçon 2 · Adjectifs Type I'],
  ['sages', 'sage', 'sage', 'Adj. Type I', 'sage, avisé, instruit, prudent', '明智的、深谋远虑的、博学的', 'Lat. *sabius', 'Leçon 2 · Adjectifs Type I'],
  ['fous', 'fol', 'fole', 'Adj. Type I (-ol > -ous)', 'fou, insensé, téméraire', '疯狂的、愚蠢的、鲁莽的', 'Lat. follis', 'Leçon 2 · Vocalisation de l'],
  ['dous', 'douz', 'douce', 'Adj. Type I', 'doux, tendre, chéri (la douce France)', '温柔的、甜美的、亲爱的（美丽的法兰西）', 'Lat. dulcis', 'Leçon 2 · Adjectifs Type I'],
  ['amers', 'amer', 'amere', 'Adj. Type I', 'amer, cruel, douloureux', '苦涩的、凄苦的', 'Lat. amarus', 'Leçon 2 · Adjectifs Type I'],
  ['durs', 'dur', 'dure', 'Adj. Type I', 'dur, rude, impitoyable', '坚硬的、严酷的、残酷的', 'Lat. durus', 'Leçon 2 · Adjectifs Type I'],
  ['tendres', 'tendre', 'tendre', 'Adj. Type I', 'tendre, délicat, ému', '柔嫩的、温存的、易感伤的', 'Lat. tener', 'Leçon 2 · Adjectifs Type I'],
  ['fors', 'fort', 'forte', 'Adj. Type II / I', 'fort, robuste, puissant, fortifié', '强壮的、坚固的、猛烈的（阴性古作 fort，后类推为 forte）', 'Lat. fortis', 'Leçon 2 · Adjectifs épicènes'],
  ['feibles', 'feible', 'feible', 'Adj. Type I', 'faible, sans force', '虚弱的、无力的', 'Lat. flebilis', 'Leçon 2 · Adjectifs Type I'],
  ['isniaus', 'isnel', 'isnele', 'Adj. Type I (-el > -iaus)', 'rapide, prompt, véloce', '迅疾的、敏捷的（古法语表「快」的高频文学词）', 'Francique *snell', 'Leçon 2 · Vocalisation de l'],
  ['vistes', 'viste', 'viste', 'Adj. Type I', 'rapide, agile, alerte', '敏捷的、飞快的', 'Origine expressive', 'Leçon 2 · Adjectifs Type I'],
  ['lenz', 'lent', 'lente', 'Adj. Type I', 'lent, tardif', '缓慢的、迟缓的', 'Lat. lentus', 'Leçon 2 · Adjectifs Type I'],
  ['noviaus', 'novel', 'novele', 'Adj. Type I (-el > -iaus)', 'nouveau, récent, jeune, frais', '新的、新晋的、初生的', 'Lat. novellus', 'Leçon 2 · Vocalisation de l'],
  ['vieuz', 'vieil', 'vieille', 'Adj. Type I', 'vieux, ancien, âgé', '年老的、古老的', 'Lat. *veclus (< vetulus)', 'Leçon 2 · Vocalisation de l'],
  ['juenes', 'juene', 'juene', 'Adj. Type I', 'jeune', '年轻的、少年的', 'Lat. juvenis', 'Leçon 2 · Adjectifs Type I'],
  ['pleins', 'plein', 'pleine', 'Adj. Type I', 'plein, rempli, entier', '充满的、满溢的', 'Lat. plenus', 'Leçon 2 · Adjectifs Type I'],
  ['vuiz', 'vuit', 'vuide', 'Adj. Type I', 'vide, déserté', '空的、空旷的', 'Lat. *vocitus', 'Leçon 2 · Adjectifs Type I'],
  ['blans', 'blanc', 'blanche', 'Adj. Type I', 'blanc, brillant (blanche armure, barbe blanche)', '洁白的、银光闪闪的', 'Francique *blank', 'Leçon 2 · Adjectifs Type I'],
  ['noirs', 'noir', 'noire', 'Adj. Type I', 'noir, sombre', '黑色的、幽暗的', 'Lat. niger', 'Leçon 2 · Adjectifs Type I'],
  ['vermeuz', 'vermeil', 'vermeille', 'Adj. Type I', 'vermeil, rouge éclatant (sanc vermeil)', '鲜红的、绯红的（古法语表红色的主力词）', 'Lat. vermiculus', 'Leçon 2 · Vocalisation de l'],
  ['roges', 'roge', 'roge', 'Adj. Type I', 'rouge', '红色的', 'Lat. rubeus', 'Leçon 2 · Adjectifs Type I'],
  ['verz', 'vert', 'verte', 'Adj. Type II / I', 'vert (pré vert, heaume vert)', '翠绿的、泛青光的（钢盔）', 'Lat. viridis', 'Leçon 2 · Adjectifs'],
  ['bis', 'bis', 'bise', 'Adj. Type I', 'gris-brun, sombre (pierre bise)', '灰褐色的、深灰色的（《罗兰之歌》中的玄石）', 'Origine incertaine', 'Leçon 2 · Adjectifs Type I'],
  ['blonz', 'blont', 'blonde', 'Adj. Type I', 'blond (Iseut la Blonde)', '金发的（金发伊索尔德）', 'Francique *blund', 'Leçon 2 · Adjectifs Type I'],
  ['chauz', 'chaut', 'chaude', 'Adj. Type I', 'chaud, ardent', '炎热的、炽热的', 'Lat. calidus', 'Leçon 2 · Adjectifs Type I'],
  ['froiz', 'froit', 'froide', 'Adj. Type I', 'froid, glacé', '寒冷的、冰冷的', 'Lat. frigidus', 'Leçon 2 · Adjectifs Type I'],
  ['seurs', 'seür', 'seüre', 'Adj. Type I', 'sûr, certain, en sécurité, confiant', '确定的、安稳的、可靠的', 'Lat. securus', 'Leçon 2 · Adjectifs Type I'],
  ['certains', 'certain', 'certaine', 'Adj. Type I', 'certain, assuré, résolu', '确凿的、坚定的', 'Lat. *certanus', 'Leçon 2 · Adjectifs Type I'],
  ['estranges', 'estrange', 'estrange', 'Adj. Type I', 'étranger, lointain, extraordinaire', '异国的、陌生的、奇异的（古法语首义为「外邦的」）', 'Lat. extraneus', 'Leçon 2 · Adjectifs Type I'],
  ['privéz', 'privé', 'privee', 'Adj. Type I', 'intime, familier, ami proche', '亲密的、私密的、心腹的', 'Lat. privatus', 'Leçon 2 · Adjectifs Type I'],
  ['seuls', 'seul', 'seule', 'Adj. Type I', 'seul, unique', '独自的、唯一的', 'Lat. solus', 'Leçon 2 · Adjectifs Type I'],
  ['nu', 'nu', 'nue', 'Adj. Type I', 'nu, dégainé (espee nue = épée hors du fourreau)', '赤裸的、出鞘的（espee nue = 出鞘的寒剑）', 'Lat. nudus', 'Leçon 2 · Adjectifs Type I'],

  // 2. Type II Epicene Adjectives (Same form in Masculine & Feminine in Old French!)
  ['granz', 'grant', 'grant', 'Adj. épicène Type II', 'grand, grande (ex. la grant cité, grant joie)', '宏大的、巨大的（通性形容词：阴性不加 -e）', 'Lat. grandis, grandem', 'Leçon 2 · Adjectifs épicènes'],
  ['tels', 'tel', 'tel', 'Adj. épicène Type II', 'tel, telle (ex. tel parole)', '这样的、如此的（阴性单数同为 tel）', 'Lat. talis, talem', 'Leçon 2 · Adjectifs épicènes'],
  ['quels', 'quel', 'quel', 'Adj. épicène Type II', 'quel, quelle (ex. quel dolor)', '哪样的、何等的（阴性单数同为 quel）', 'Lat. qualis, qualem', 'Leçon 2 · Adjectifs épicènes'],
  ['mortels', 'mortel', 'mortel', 'Adj. épicène Type II', 'mortel, mortelle (ex. plaie mortel)', '致命的、必死的（阴性单数同为 mortel）', 'Lat. mortalis', 'Leçon 2 · Adjectifs épicènes'],
  ['leaus', 'leal', 'leal', 'Adj. épicène Type II', 'loyal, loyale, fidèle (aussi loial)', '忠诚的、守信的（阴性单数同为 leal/loial）', 'Lat. legalis', 'Leçon 2 · Adjectifs épicènes'],
  ['roiaus', 'roial', 'roial', 'Adj. épicène Type II', 'royal, royale', '王室的、尊贵的', 'Lat. regalis', 'Leçon 2 · Adjectifs épicènes'],
  ['natural', 'natural', 'natural', 'Adj. épicène Type II', 'naturel, légitime de naissance (seignor natural)', '天生的、正统嫡亲的（正统领主）', 'Lat. naturalis', 'Leçon 2 · Adjectifs épicènes'],
  ['cruels', 'cruel', 'cruel', 'Adj. épicène Type II', 'cruel, cruelle, impitoyable', '残酷的、暴虐的', 'Lat. crudelis', 'Leçon 2 · Adjectifs épicènes'],
  ['gentius', 'gentil', 'gentil', 'Adj. épicène Type II', 'noble de race, de haute naissance, généreux', '出身高贵的、名门的（古法语绝非仅指「和蔼」，而是指贵族血统）', 'Lat. gentilis', 'Leçon 2 · Adjectifs épicènes'],
  ['vilz', 'vil', 'vil', 'Adj. épicène Type II', 'vil, méprisable, de bas prix', '卑贱的、低劣的', 'Lat. vilis', 'Leçon 2 · Adjectifs épicènes'],
  ['soz', 'sotie / sotil', 'sotil', 'Adj. épicène Type II', 'subtil, ingénieux, habile', '精巧的、敏锐的', 'Lat. subtilis', 'Leçon 2 · Adjectifs épicènes'],
  ['briés', 'brief', 'brief', 'Adj. épicène Type II', 'bref, brève, court (en brief tens)', '简短的、迅速的', 'Lat. brevis', 'Leçon 2 · Adjectifs épicènes'],
  ['griés', 'grief', 'grief', 'Adj. épicène Type II', 'lourd, pénible, douloureux, grave', '沉重的、痛苦的、严峻的', 'Lat. *grevis (< gravis)', 'Leçon 2 · Adjectifs épicènes'],
  ['soés', 'soef', 'soef', 'Adj. épicène Type II', 'doux, suave, agréable, paisible', '柔和的、芬芳的、轻柔的', 'Lat. suavis', 'Leçon 2 · Adjectifs épicènes'],
  ['vaillanz', 'vaillant', 'vaillant', 'Adj. épicène Type II', 'vaillant, valeureux, courageux', '英勇的、有价值的（由现在分词转化，阴性不加 -e）', 'Lat. valens, valentem', 'Leçon 2 · Adjectifs épicènes'],
  ['poissanz', 'poissant', 'poissant', 'Adj. épicène Type II', 'puissant, fort', '强大的、强盛的', 'Dérivé de pooir', 'Leçon 2 · Adjectifs épicènes'],
  ['avenanz', 'avenant', 'avenant', 'Adj. épicène Type II', 'gracieux, plaisant, bien fait, convenable', '俊俏得体的、优雅宜人的', 'Part. prés. de avenir', 'Leçon 2 · Adjectifs épicènes'],
  ['plaisanz', 'plaisant', 'plaisant', 'Adj. épicène Type II', 'agréable, charmant', '讨人喜欢的、悦目的', 'Part. prés. de plaire', 'Leçon 2 · Adjectifs épicènes'],
  ['luisanz', 'luisant', 'luisant', 'Adj. épicène Type II', 'luisant, étincelant (heaume luisant)', '闪耀的、熠熠生辉的', 'Part. prés. de luire', 'Leçon 2 · Adjectifs épicènes'],
  ['tranchanz', 'tranchant', 'tranchant', 'Adj. épicène Type II', 'tranchant, affûté (espee tranchant)', '锋利的、削铁如泥的', 'Part. prés. de tranchier', 'Leçon 2 · Adjectifs épicènes'],
  ['coranz', 'corant', 'corant', 'Adj. épicène Type II', 'rapide à la course (destrier corant)', '奔如飞电的、疾驰的（骏马）', 'Part. prés. de corre', 'Leçon 2 · Adjectifs épicènes'],
  ['pesanz', 'pesant', 'pesant', 'Adj. épicène Type II', 'lourd, pesant, accablant', '沉重的、威猛的', 'Part. prés. de peser', 'Leçon 2 · Adjectifs épicènes'],
  ['recreanz', 'recreant', 'recreant', 'Adj. épicène Type II', 'qui s’avoue vaincu, lâche, parjure', '认输投降的、怠惰失职的（克雷蒂安《埃雷克与埃妮德》核心冲突词）', 'Part. prés. de recroire', 'Leçon 2 · Adjectifs épicènes'],
  ['miudres', 'meillor', 'meillor', 'Adj. comparatif impar.', 'meilleur (CS: miudres/miaudres | CR: meillor)', '更好的、最优秀的（不平衡变格综合比较级）', 'Lat. melior, meliorem', 'Leçon 4 · Comparatifs synthétiques'],
  ['pire', 'peior', 'peior', 'Adj. comparatif impar.', 'pire (CS: pire | CR: peior)', '更坏的、最恶劣的（不平衡变格综合比较级）', 'Lat. pejor, pejorem', 'Leçon 4 · Comparatifs synthétiques'],
  ['graindre', 'graignor', 'graignor', 'Adj. comparatif impar.', 'plus grand (CS: graindre | CR: graignor)', '更大的、更伟大的（grant 的综合比较级）', 'Lat. grandior, grandiorem', 'Leçon 4 · Comparatifs synthétiques'],
  ['mendres', 'menor', 'menor', 'Adj. comparatif impar.', 'moindre, plus petit (CS: mendres | CR: menor)', '更小的、次要的', 'Lat. minor, minorem', 'Leçon 4 · Comparatifs synthétiques'],
];

const RAW_INVAR_TUPLES: [string, string, string, string, string, string, string, string, string, string][] = [
  // Adverbs, Prepositions, Conjunctions, Pronouns, Numerals
  ['mout', 'Adverbe d’intensité', '亦作 mult / moult；可修饰形容词、副词、动词', 'très, beaucoup, grandement', '非常、极其、十分（古法语替代 très 的最高频程度副词）', 'Lat. multum', 'Rollant est mult proz e vaillanz.', 'Roland est très preux et vaillant.', '罗兰极其英勇无畏。', 'Leçon 16 · Adverbes d’intensité'],
  ['trop', 'Adverbe d’intensité', '古法语常表「非常、极其」(très)，未必含贬义「太」', 'très, extrêmement ; trop', '极其、非常；太、过于', 'Francique *throp', 'Trop par est bels li chevaliers.', 'Le chevalier est extrêmement beau.', '这位骑士真是英俊非凡。', 'Leçon 16 · Adverbes d’intensité'],
  ['par', 'Particule intensive', '常与 mout, trop, tant 连用（mout par est...）置于动词前加强程度', 'extrêmement, tout à fait (particule)', '极其、彻底地（程度加强小品词）', 'Lat. per', 'Mout par fut granz la bataille.', 'La bataille fut extrêmement grande.', '这场战役真是浩大至极。', 'Leçon 16 · Intensifs'],
  ['assez', 'Adverbe de quantité', '古法语常表「很多、非常」(beaucoup, très)，而非仅指「足够」', 'beaucoup, très, grandement ; assez', '许多、非常、极其（注意假朋友：非现代「差强人意」）', 'Lat. *ad satis', 'Assez i ot contes et dus.', 'Il y eut là beaucoup de comtes et de ducs.', '那里有许多伯爵与公爵。', 'Leçon 16 · Adverbes de quantité'],
  ['poi', 'Adverbe de quantité', '亦作 pou / peu；a poi que ne = 差一点就', 'peu, un peu', '少、稍微（a poi que ne = 险些、差一点）', 'Lat. paucum', 'A poi qu’il ne creve de duel.', 'Il s’en faut de peu qu’il ne crève de douleur.', '他悲痛得差一点心碎而死。', 'Leçon 16 · Adverbes de quantité'],
  ['auques', 'Adverbe de quantité', '表「稍微、有些、颇为」', 'un peu, quelque peu, assez', '稍微、颇为、几分', 'Lat. *aliquod + -s', 'Li reis en fut auques pensis.', 'Le roi en fut quelque peu pensif.', '国王对此有些沉思忧虑。', 'Leçon 16 · Adverbes de quantité'],
  ['plus', 'Adverbe de degré', '构成比较级与最高级', 'plus, davantage', '更、更多', 'Lat. plus', 'Il est plus fiers que uns lions.', 'Il est plus fier qu’un lion.', '他比雄狮还要威猛。', 'Leçon 2 · Comparatif'],
  ['moins', 'Adverbe de degré', '亦作 meins', 'moins', '更少、不如', 'Lat. minus', 'N’en valent mie moins.', 'Ils n’en valent pas moins.', '他们的价值丝毫不减。', 'Leçon 2 · Comparatif'],
  ['tant', 'Adverbe / Déterminant', 'tant ... com = 只要……；tant que = 直到', 'tant, autant, si longtemps', '如此、这么多、直到', 'Lat. tantum', 'Tant chevauchierent qu’il vindrent au chastel.', 'Ils chevauchèrent tant qu’ils vinrent au château.', '他们策马疾驰，直到抵达城堡。', 'Leçon 18 · Subordonnées'],
  ['quant', 'Conjonction de temps', '引导时间从句，常注意与主句的时态配合', 'quand, lorsque, puisque', '当……之时；既然', 'Lat. quando', 'Quant Rollant voit que la bataille aproche.', 'Quand Roland voit que la bataille approche.', '当罗兰看见战斗迫近之时。', 'Leçon 18 · Temporelles'],
  ['com', 'Conjonction / Adverbe', '亦作 come / cum', 'comme, comment, lorsque', '如同、当……时、多么', 'Lat. *quomo (< quomodo)', 'Blanc ot le cuer com flors de lis.', 'Il eut le cœur pur comme fleur de lys.', '他的心纯洁得如同百合花。', 'Leçon 18 · Comparatives'],
  ['se', 'Conjonction d’hypothèse', '注意区分假设连词 se (< si) 与核心词 si (< sic)！元音前省音作 s’', 'si (hypothétique, ou interrogation indirecte)', '如果、倘若；是否（绝不引发倒装，区别于 si < sic）', 'Lat. si', 'Se vos volez, jo irai avuec vos.', 'Si vous voulez, j’irai avec vous.', '如果您愿意，我将与您同行。', 'Leçon 18 · Hypothétiques'],
  ['que', 'Conjonction universelle', '引导名词性、结果、原因、比较、关系从句，亦可省略（并置从句）', 'que, car, parce que, afin que', '（引导从句）以至于、因为、为了', 'Lat. quid / quod / quam', 'Si grant duel a que li cuers li faut.', 'Il a une si grande douleur que le cœur lui manque.', '他如此悲痛，以至于心都要碎了。', 'Leçon 18 · Subordination'],
  ['car', 'Conjonction / Particule', '亦作 quar；除表「因为」外，常置于命令式前加强语气（Car chevalchiez ! = 快骑马前进吧！）', 'car, parce que ; donc, allons ! (devant impératif)', '因为；快、请务必（置于命令式前表敦促）', 'Lat. quare', 'Car sonez vostre olifant, compainz !', 'Sonnez donc votre olifant, compagnon !', '快吹响您的象牙号角吧，战友！', 'Leçon 17 · Coordination'],
  ['mais', 'Adverbe / Conjonction', '原义「更多」(magis)；ne ... mais = 不再；mais que = 只要/除了', 'mais, désormais, davantage', '但是；从此、更多（ne ... mais = 不再）', 'Lat. magis', 'Jo ne vos verrai mais.', 'Je ne vous verrai plus jamais.', '我将再也见不到您了。', 'Leçon 17 · Coordination'],
  ['ne', 'Conjonction / Négation', '1. 否定词 ne (non)；2. 并列否定连词 ne (ni)', 'ne (négation) ; ni, et ... ou (en phrase négative/interrogative)', '不、没有；既不……也不（相当现代 ni）', 'Lat. non / nec', 'Ne por or ne por argent ne le ferai.', 'Ni pour or ni pour argent je ne le ferai.', '无论为了黄金还是白银，我都绝不会这样做。', 'Leçon 16 · La négation'],
  ['nen', 'Adverbe de négation', 'ne 在元音开头词前的古老不省音形式', 'ne (devant voyelle)', '不、没有（元音前形式）', 'Lat. non', 'Il nen a paor de nule rien.', 'Il n’a peur de rien.', '他什么也不害怕。', 'Leçon 16 · La négation'],
  ['non', 'Adverbe de négation tonique', '重读否定副词，常用于省略结构或与 faire 代动词连用（non ferai = 我绝不这么做）', 'non, pas', '不、绝不（重读否定词）', 'Lat. non', 'Jo non ferai, ce dist li quens.', 'Je ne le ferai pas, dit le comte.', '伯爵说道：「我绝不这么做。」', 'Leçon 16 · La négation'],
  ['oïl', 'Adverbe d’affirmation', '由 hoc ille (est) 缩合而成，即奥伊语 (langue d’oïl) 与现代 oui 的前身', 'oui', '是的、正是', 'Lat. hoc ille', '« Irez vos i ? » — « Oïl, bels sire. »', '« Y irez-vous ? » — « Oui, beau sire. »', '「您会去那里吗？」——「是的，尊贵的阁下。」', 'Leçon 16 · Affirmation et négation'],
  ['nenil', 'Adverbe de négation', '由 non ille 缩合而成（对比 oïl），表礼貌而坚定的「不」', 'non, nenni', '不、并非如此', 'Lat. *non illi', '« Est il morz ? » — « Nenil, dame, il vit encore. »', '« Est-il mort ? » — « Nenni, dame, il vit encore. »', '「他死了吗？」——「不，夫人，他还活着。」', 'Leçon 16 · Affirmation et négation'],
  ['or', 'Adverbe de temps', '亦作 ore / ores；句首常引发倒装，或用于命令句表「现在、此刻」', 'maintenant, à présent, dès lors', '现在、此刻、如今（注意：非现代法语连词 or）', 'Lat. hac hora', 'Or oez que dist li reis Carles.', 'Maintenant écoutez ce que dit le roi Charles.', '现在请听查理国王说了什么。', 'Leçon 15 · Adverbes de temps'],
  ['lors', 'Adverbe de temps', '亦作 lores；表「那时、于是」，句首引发主谓倒装', 'alors, à ce moment-là', '那时、随即、于是', 'Lat. *illa hora + -s', 'Lors trait li chevaliers s’espee.', 'Alors le chevalier tire son épée.', '于是骑士拔出了自己的佩剑。', 'Leçon 15 · Adverbes de temps'],
  ['adonc', 'Adverbe de temps', '亦作 adont / donc / dont；古法语中 donc 表时间「那时、随后」，非逻辑推论', 'alors, ensuite', '那时、随后、接着（古法语表时间而非「所以」）', 'Lat. *ad tunc', 'Adonc parla li sages duc Naimes.', 'Alors parla le sage duc Naimes.', '那时贤明的内姆公爵开口说道。', 'Leçon 15 · Adverbes de temps'],
  ['atant', 'Adverbe de transition', '由 a tant 融合而成，叙事转换标志词「就在此时、言尽于此」', 'alors, sur ce, à ce moment', '就在此时、至此（叙事场景转换高频词）', 'Lat. ad tantum', 'Atant ez vos un chevalier errant.', 'Sur ce, voici venir un chevalier errant.', '就在此时，但见一位游侠骑士策马而来。', 'Leçon 15 · Connecteurs narratifs'],
  ['ez vos', 'Présentatif épique', '亦作 es vos / estes vos (< ecce vos)，史诗与骑士小说中最生动的戏剧性呈现词', 'voici, voilà (litt. « voyez-vous »)', '看哪！但见！（突然出场提示词）', 'Lat. ecce + vos', 'Ez vos poignant le conte Rollant !', 'Voici venir au galop le comte Roland !', '看哪，罗兰伯爵正策马飞驰而来！', 'Leçon 15 · Présentatifs'],
  ['sempres', 'Adverbe de temps', '表「立刻、马上」(aussitôt)，而非「永远」(toujours)', 'aussitôt, sur-le-champ, immédiatement', '立刻、当即（假朋友：古法语常表「立刻」而非「总是」）', 'Lat. semper + -s', 'Sempres ferirent des espees.', 'Aussitôt ils frappèrent de leurs épées.', '他们当即挥剑猛砍。', 'Leçon 15 · Adverbes de temps'],
  ['tost', 'Adverbe de temps', '表「迅速地、很快」；tantost = 立刻', 'vite, rapidement, bientôt', '迅速地、立刻、不久', 'Lat. tostum', 'Tost fut armez li bachelers.', 'Le jeune chevalier fut vite armé.', '青年骑士很快就披挂好了铠甲。', 'Leçon 15 · Adverbes de temps'],
  ['ja', 'Adverbe de temps', '1. 已经 (déjà)；2. 曾经/将来某时；ja ... ne = 绝不 (jamais)', 'déjà, désormais ; (avec ne) jamais', '已经；曾经；（与 ne 连用）绝不、永远不', 'Lat. jam', 'Ja n’en avrez reproche.', 'Jamais vous n’en aurez de reproche.', '您永远不会因此受到指责。', 'Leçon 16 · Adverbes de temps'],
  ['oncor', 'Adverbe de temps', '亦作 encore / uncore', 'encore', '仍然、还、再', 'Lat. *hanc horam', 'Il vit oncor, la merci Deu.', 'Il vit encore, Dieu merci.', '感谢天主，他还活着。', 'Leçon 15 · Adverbes de temps'],
  ['hui', 'Adverbe de temps', '今日（meshui = 从今天起/今天余下时间）', 'aujourd’hui', '今天、今日', 'Lat. hodie', 'Hui est li jorz de nostre grant bataille.', 'Aujourd’hui est le jour de notre grande bataille.', '今天就是我们大决战的日子。', 'Leçon 15 · Adverbes de temps'],
  ['ier', 'Adverbe de temps', '昨日（avant ier = 前天）', 'hier', '昨天、昨日', 'Lat. heri', 'Ier matin parti de la cort.', 'Hier matin il partit de la cour.', '昨天清晨他离开了宫廷。', 'Leçon 15 · Adverbes de temps'],
  ['demain', 'Adverbe de temps', '明日（aussi l’endemain = 次日）', 'demain', '明天、明日', 'Lat. de mane', 'Demain a l’aube monterons el destrier.', 'Demain à l’aube nous monterons sur le destrier.', '明天黎明我们将翻身上马。', 'Leçon 15 · Adverbes de temps'],
  ['main', 'Adverbe / Nom', '清晨（par main / bien main = 清晨一大早）', 'tôt le matin', '清晨、一大早', 'Lat. mane', 'Al matin par main se leva li reis.', 'Le matin de bonne heure le roi se leva.', '清晨一大早国王便起身了。', 'Leçon 15 · Adverbes de temps'],
  ['totevoie', 'Adverbe', '亦作 totes voies；原义「一路上、始终」(toujours)，后演变为「然而」(toutefois)', 'toujours, sans cesse ; toutefois, cependant', '始终、一直；然而、无论如何', 'Tote + voie', 'Il chevauche totevoie sanz arrester.', 'Il chevauche sans cesse sans s’arrêter.', '他一路不停地策马前行。', 'Leçon 15 · Adverbes'],
  ['ci', 'Adverbe de lieu', '亦作 ici (< ecce hic)，表近指「这里」', 'ici', '这里、此处', 'Lat. *ecce hic', 'Ci gist li proz chevaliers.', 'Ci-gît le preux chevalier.', '英勇的骑士长眠于此。', 'Leçon 6 · Démonstratifs et lieu'],
  ['la', 'Adverbe de lieu', '远指「那里」（la ou = 在……的地方/当……之时）', 'là', '那里（la ou 常作时间或地点连词）', 'Lat. illac', 'La ou il vit le roi, si li dist.', 'Là où (quand) il vit le roi, il lui dit.', '当他看见国王时，便对他说。', 'Leçon 6 · Lieu'],
  ['ça', 'Adverbe de lieu', '表朝向说话人的运动「到这里来」（ça et la = 到处）', 'çà, ici (avec mouvement)', '向这里、过来', 'Lat. *ecce hac', 'Venez ça, bels amis !', 'Venez ici, bel ami !', '到这里来，好朋友！', 'Leçon 6 · Lieu'],
  ['sus', 'Adverbe / Préposition', '向上、在……上面（or sus ! = 快起来！）', 'en haut, dessus, sur', '向上、在上面', 'Lat. susum (< sursum)', 'Il saut sus el destrier.', 'Il saute en haut sur le destrier.', '他纵身跃上战马。', 'Leçon 15 · Prépositions'],
  ['jus', 'Adverbe', '向下、落到地上（metre jus = 放下；abatre jus = 击落马下）', 'en bas, à terre', '向下、落地', 'Lat. deorsum > *jusum', 'Il l’abat jus del cheval mort.', 'Il l’abat à terre, mort, bas de son cheval.', '他将其一枪挑落马下毙命。', 'Leçon 15 · Adverbes de lieu'],
  ['amont', 'Adverbe / Préposition', '向上、朝高处、逆流而上（d’amont = 从高处）', 'en haut, vers le haut, en amont', '向上、往高处', 'Lat. ad montem', 'Il regarde amont vers le chastel.', 'Il regarde en haut vers le château.', '他抬头向上望向城堡。', 'Leçon 15 · Adverbes de lieu'],
  ['aval', 'Adverbe / Préposition', '向下、顺流而下、遍及（aval la sale = 整个大厅里）', 'en bas, vers le bas, à travers', '向下、沿着、遍及', 'Lat. ad vallem', 'Les larmes li colent aval le vis.', 'Les larmes lui coulent le long du visage.', '眼泪顺着他的脸颊滑落。', 'Leçon 15 · Adverbes de lieu'],
  ['leenz', 'Adverbe de lieu', '亦作 laienz (< illac intus)，表「在里面（那座城堡/房间里）」', 'là-dedans, à l’intérieur', '在那里面、城内/室内', 'Lat. illac intus', 'Li chevaliers entra leenz.', 'Le chevalier entra là-dedans.', '骑士走进了那里面。', 'Leçon 15 · Adverbes de lieu'],
  ['ceenz', 'Adverbe de lieu', '亦作 chaienz (< ecce hac intus)，表「在这里面（我所在的屋里/城里）」', 'ici dedans, céans', '在这里面、本堡/敝处内', 'Lat. *ecce hac intus', 'Bien veigniez vos ceenz, bels sire !', 'Soyez le bienvenu céans, beau sire !', '欢迎您光临寒舍/本堡，尊贵的阁下！', 'Leçon 15 · Adverbes de lieu'],
  ['fors', 'Adverbe / Préposition', '在外、除……之外（issir fors = 走出；fors de = 在……之外）', 'dehors, hors de, excepté, sauf', '在外面；除……之外', 'Lat. foris', 'Il n’i ot nul fors le roi seul.', 'Il n’y eut personne hormis le roi seul.', '除了国王独自一人外，那里没有别人。', 'Leçon 15 · Prépositions'],
  ['lez', 'Préposition / Nom', '原为名词「肋旁」(< latus)，语法化为介词「在……旁边」（cf. Plessis-lès-Tours）', 'à côté de, près de (cf. -lès- dans les toponymes)', '在……身旁、紧靠着', 'Lat. latus', 'Li quens s’assist lez la fontaine.', 'Le comte s’assit à côté de la fontaine.', '伯爵在泉水旁坐了下来。', 'Leçon 15 · Prépositions'],
  ['emmi', 'Préposition', '由 en + mi (< medium) 复合而成，表「在……正中央」', 'au milieu de', '在……正中央', 'Lat. in medio', 'Il le feri emmi le piz.', 'Il le frappa en pleine poitrine.', '他一枪正中对方胸膛中央。', 'Leçon 15 · Prépositions'],
  ['parmi', 'Préposition', '由 par + mi 复合而成，表「穿过……中央」（非现代「在……之中」！）', 'à travers, par le milieu de', '穿过……正中、径直穿过（注意假朋友）', 'Lat. per medium', 'La lance li passa parmi l’escut.', 'La lance lui passa à travers le bouclier.', '长矛径直刺穿了他的盾牌。', 'Leçon 15 · Prépositions'],
  ['atout', 'Préposition', '亦作 a tot / od tot，表「带着、连同、配备着」(avec)', 'avec, muni de', '带着、连同、率领', 'Lat. apud + tottum', 'Il vint atout cent chevaliers armez.', 'Il vint avec cent chevaliers armés.', '他率领一百名披甲骑士前来。', 'Leçon 15 · Prépositions'],
  ['od', 'Préposition', '亦作 o / avuec，古法语早期表「与……一起」(avec) 的核心介词', 'avec, auprès de', '与……一起、伴随', 'Lat. apud', 'Rollant chevauche od Oliver sun compaignon.', 'Roland chevauche avec Olivier son compagnon.', '罗兰与他的战友奥利维耶并辔前行。', 'Leçon 15 · Prépositions'],
  ['senz', 'Préposition', '亦作 sanz', 'sans', '没有、无（senz faille = 毫无疑问）', 'Lat. *absentia', 'Il respont senz demorer.', 'Il répond sans tarder.', '他毫不迟疑地回答道。', 'Leçon 15 · Prépositions'],
  ['sor', 'Préposition', '亦作 sur / seure（corir seure = 向……发起猛攻）', 'sur, au-dessus de, contre', '在……之上、向……（发起攻击）', 'Lat. super', 'Il li cort seure l’espee traite.', 'Il lui court sus l’épée tirée.', '他拔出长剑向对方猛扑过去。', 'Leçon 15 · Prépositions'],
  ['soz', 'Préposition', '亦作 desoz / desuz', 'sous, au-dessous de', '在……之下', 'Lat. subtus', 'Soz un pin s’est alez seoir.', 'Il est allé s’asseoir sous un pin.', '他走到一棵松树下坐定。', 'Leçon 15 · Prépositions'],
  ['vers', 'Préposition', '亦作 envers', 'vers, envers, contre', '朝向、对待、对抗', 'Lat. versus', 'Il torne sun destrier vers l’ost.', 'Il tourne son destrier vers l’armée.', '他调转战马朝向大军。', 'Leçon 15 · Prépositions'],
  ['tresqu’a', 'Locution prépositive', '亦作 desqu’a / jusqu’a，表「一直到……」', 'jusqu’à', '一直到……', 'Lat. *transque ad', 'Il le fendi tresqu’as denz.', 'Il le fendit jusqu’aux dents.', '他一剑将其从头顶一直劈到牙齿。', 'Leçon 15 · Prépositions'],
  ['cist', 'Démonstratif de proximité', '近指指示词（阳单CS: cist | CR: cest | 阴单: ceste）', 'ce ...-ci, celui-ci (proximité)', '这、这个（近指，可兼作限定词或代词）', 'Lat. *ecce iste', 'Cist chevaliers est mout vaillanz.', 'Ce chevalier-ci est très vaillant.', '眼前这位骑士非常英勇。', 'Leçon 6 · Démonstratifs cist et cil'],
  ['cil', 'Démonstratif de distance', '远指指示词（阳单CS: cil | CR: cel / celui | 阴单: cele / celi）', 'ce ...-là, celui-là (distance ou notoriété)', '那、那个、那个人（远指或史诗著名人物指称）', 'Lat. *ecce ille', 'Cil qui fist la chançon.', 'Celui qui composa la chanson.', '创作这首歌谣的那个人。', 'Leçon 6 · Démonstratifs cist et cil'],
  ['ço', 'Pronom démonstratif neutre', '亦作 ce / iceo (< ecce hoc)，中性指示代词', 'ce, cela, ceci', '这、这件事（ço poise moi = 这令我痛心）', 'Lat. *ecce hoc', 'Ço dist li reis : « Baron, car m’entendez ! »', 'Le roi dit ceci : « Barons, écoutez-moi donc ! »', '国王说道：「诸位男爵，快听我说！」', 'Leçon 6 · Neutre ço / ce'],
  ['mien', 'Possessif tonique', '重读物主词（CS: miens | CR: mien | 阴: moie），可带冠词作定语（uns miens amis）', 'mien, le mien, mon', '我的（重读形式：uns miens amis = 我的一个朋友）', 'Lat. meum', 'Uns miens chevaliers le m’a dit.', 'Un mien chevalier me l’a dit.', '我的一位骑士告诉了我此事。', 'Leçon 7 · Possessifs toniques'],
  ['tuen', 'Possessif tonique', '重读物主词（阴性：toe / tue）', 'tien, le tien, ton', '你的（重读形式）', 'Lat. tuum', 'Par le tuen Deu, car me di voir !', 'Par ton Dieu, dis-moi donc la vérité !', '凭你的上帝起誓，快告诉我实话！', 'Leçon 7 · Possessifs toniques'],
  ['suen', 'Possessif tonique', '重读物主词（阴性：soe / sue）', 'sien, le sien, son', '他的、她的（重读形式）', 'Lat. suum', 'Il mist le suen escut devant sun piz.', 'Il mit son bouclier devant sa poitrine.', '他把自己的盾牌挡在胸前。', 'Leçon 7 · Possessifs toniques'],
  ['cuidiier', 'Infinitif substantivé', '古法语中任何动词不定式前加冠词即可直接转化为阳性名词（变格同第一类阳名）', 'le fait de penser, la pensée, la présomption', '料想、念头（不定式名词化语法现象代表）', 'Lat. cogitare', 'Au mien cuidier, il viendra hui.', 'À mon avis, il viendra aujourd’hui.', '依我之见，他今天就会到来。', 'Leçon 13 · Infinitif substantivé'],
  ['uns', 'Numéral / Article indéfini', '古法语 uns 具有完整双格，且复数 unes / uns 用于成双成对或集合名词（unes letres = 一封信）', 'un, une ; (au pluriel) une paire de, des', '一个、唯一；（复数）一封、一副、一套', 'Lat. unus, unum', 'Il vit unes grandes portes de fer.', 'Il vit une grande porte à deux battants en fer.', '他看见一扇巨大的双扇铁门。', 'Leçon 5 · L’article uns'],
  ['dui', 'Numéral cardinal (2)', '数词「二」具双格与阴阳区分：阳CS dui, 阳CR dous/deus, 阴 dous/deus', 'deux', '二、两个（阳主格作 dui，斜格作 dous/deus）', 'Lat. *dui / duos', 'Dui chevalier chevauchent ensemble.', 'Deux chevaliers chevauchent ensemble.', '两位骑士并辔同行。', 'Leçon 8 · Numéraux'],
  ['ambedui', 'Pronom / Déterminant duel', '亦作 andui（CS） / ambedous, andous（CR），表「两人皆、双双」', 'tous les deux, l’un et l’autre', '两人皆、双方都（阳主格 andui，斜格 andous）', 'Lat. ambo + *dui', 'Andui s’entrefierent sor les escuz.', 'Tous deux s’entre-frappent sur les boucliers.', '两人双双策马互击对方的盾牌。', 'Leçon 8 · Duel andui'],
  ['troi', 'Numéral cardinal (3)', '数词「三」：阳CS troi, 阳CR trois, 阴 trois', 'trois', '三、三个（阳主格作 troi，斜格作 trois）', 'Lat. *trei / tres', 'Troi baron vindrent a la cort.', 'Trois barons vinrent à la cour.', '三位男爵来到了宫廷。', 'Leçon 8 · Numéraux'],
  ['maint', 'Indéfini de quantité', '阳CS maint, 阳CR maint, 阴 mainte；常用于单数表「许多」', 'maint, beaucoup de, plus d’un', '许多、不计其数的', 'Celtique / Germ. *manig', 'Maint bon chevalier i perdirent la vie.', 'Maints bons chevaliers y perdirent la vie.', '许多优秀的骑士在那里献出了生命。', 'Leçon 8 · Indéfinis'],
  ['plusor', 'Indéfini de pluralité', '亦作 pluisor（li plusor = 大多数人、许多人）', 'plusieurs, la plupart', '许多人、大多数人', 'Lat. *plusiores', 'Li plusor en ploroient de pitié.', 'La plupart en pleuraient de pitié.', '大多数人都为此怜悯落泪。', 'Leçon 8 · Indéfinis'],
  ['tuit', 'Indéfini de totalité', 'tot 的阳性复数主格作 tuit！（单CS: toz, 单CR: tot, 复CS: tuit, 复CR: toz）', 'tous (masculin pluriel CS)', '所有人、全部（阳性复数主格专属形态 tuit）', 'Lat. *totti (< toti)', 'Tuit li baron s’escrient a une voiz.', 'Tous les barons s’écrient d’une seule voix.', '所有男爵异口同声地高呼。', 'Leçon 8 · Indéfini tot / tuit'],
  ['nuls', 'Pronom / Déterminant négatif', '阳单CS: nuls/nus | CR: nul (ne) | 间接重读宾格: nului', 'nul, aucun, personne', '没有任何（人）、无人（重读间接宾格作 nului）', 'Lat. nullus', 'Il ne dote nului el monde.', 'Il ne redoute personne au monde.', '他在世上不畏惧任何人。', 'Leçon 8 · Pronoms indéfinis'],
  ['autrui', 'Pronom indéfini CR tonique', 'autre 的重读间接斜格形式（对比 cui, celui, nului），无需前置介词即可表所属「他人的」', 'autrui, d’un autre, à un autre', '他人、别人的（直接作名词补语：l’autrui avoir = 他人的财物）', 'Lat. *alterui', 'Nuls ne doit tolir l’autrui droit.', 'Nul ne doit ravir le droit d’autrui.', '任何人都不应剥夺他人的权利。', 'Leçon 8 · Cas régime absolu en -ui'],
];

export const ADJ_SEEDS: AdjSeed[] = RAW_ADJ_TUPLES.map(
  ([csM, crM, fem, adjType, fr, zh, lat, lesson]) => ({
    csM: csM.trim(),
    crM: crM.trim(),
    fem: fem.trim(),
    adjType,
    fr,
    zh,
    lat,
    lesson,
  })
);

export const INVAR_SEEDS: InvarSeed[] = RAW_INVAR_TUPLES.map(
  ([word, pos, note, fr, zh, lat, exampleOf, exampleFr, exampleZh, lesson]) => ({
    word: word.trim(),
    pos,
    note,
    fr,
    zh,
    lat,
    exampleOf,
    exampleFr,
    exampleZh,
    lesson,
  })
);
