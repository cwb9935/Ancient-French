/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VerbConjugation {
  infinitive: string;
  meaning: string;
  modernFrench: string;
  group: string;
  stemType: string;
  presentParticiple: string;
  pastParticiple: string;
  indicativePresent: {
    je: string;
    tu: string;
    il: string;
    nous: string;
    vous: string;
    ils: string;
  };
  imparfait: {
    je: string;
    tu: string;
    il: string;
    nous: string;
    vous: string;
    ils: string;
  };
  passeSimple: {
    type: string;
    je: string;
    tu: string;
    il: string;
    nous: string;
    vous: string;
    ils: string;
  };
  futur: {
    je: string;
    tu: string;
    il: string;
    nous: string;
    vous: string;
    ils: string;
  };
  subjonctifPresent: {
    je: string;
    tu: string;
    il: string;
    nous: string;
    vous: string;
    ils: string;
  };
  imperatif: {
    tu: string;
    nous: string;
    vous: string;
  };
  etymologyAndNotes: string;
}

export const CONJUGATION_DATABASE: VerbConjugation[] = [
  {
    infinitive: 'estre',
    meaning: '存在、是（系动词与核心助动词）',
    modernFrench: 'être',
    group: '不规则核心动词 (源自拉丁语 esse / stare 混合)',
    stemType: '多词干异干互补 (Suppléisme)',
    presentParticiple: 'estant',
    pastParticiple: 'esté / estet',
    indicativePresent: {
      je: 'sui / suy',
      tu: 'ies / es',
      il: 'est',
      nous: 'sommes / sons',
      vous: 'estes',
      ils: 'sont',
    },
    imparfait: {
      je: 'ere / iere / estoie',
      tu: 'eres / ieres',
      il: 'ert / iert / estoit',
      nous: 'eriens / estiiens',
      vous: 'eriiez / estiiez',
      ils: 'erent / estoient',
    },
    passeSimple: {
      type: '强变化 Passé fort en -u- (fui)',
      je: 'fui',
      tu: 'fus',
      il: 'fut / fout',
      nous: 'fumes',
      vous: 'fustes',
      ils: 'furent',
    },
    futur: {
      je: 'serai / iert',
      tu: 'seras / iers',
      il: 'sera / iert',
      nous: 'serons',
      vous: 'serez',
      ils: 'seront / ierent',
    },
    subjonctifPresent: {
      je: 'soie / seie',
      tu: 'soies',
      il: 'soit',
      nous: 'soiens / soions',
      vous: 'soiez',
      ils: 'soient',
    },
    imperatif: {
      tu: 'soies / sois',
      nous: 'soiens / soyons',
      vous: 'soiez / soyez',
    },
    etymologyAndNotes: '古法语保留了未完成过去时旧形式 ere/ert (源自拉丁语 eram/erat)，同时发展出源自 stare 的 estoie/estoit。将来时除 serai 外，亦保留古形式 iert (源自 erit)。',
  },
  {
    infinitive: 'aveir / avoir',
    meaning: '拥有、持有、有（核心助动词）',
    modernFrench: 'avoir',
    group: '不规则核心动词 (源自拉丁语 habere)',
    stemType: '双词干弱变',
    presentParticiple: 'aiant / ayant',
    pastParticiple: 'eü / out',
    indicativePresent: {
      je: 'ai / ay',
      tu: 'as',
      il: 'a / at / ad',
      nous: 'avons',
      vous: 'avez',
      ils: 'ont',
    },
    imparfait: {
      je: 'avoie / aveie',
      tu: 'avoies',
      il: 'avoit / aveit',
      nous: 'aviiens',
      vous: 'aviiez',
      ils: 'avoient / aveient',
    },
    passeSimple: {
      type: '强变化 Passé fort en -u- (habui > out)',
      je: 'oi / eui',
      tu: 'eus / ous',
      il: 'ot / out',
      nous: 'eumes / oumes',
      vous: 'eustes / oustes',
      ils: 'orent / ourent',
    },
    futur: {
      je: 'aurai / averai',
      tu: 'auras / averas',
      il: 'aura / averat',
      nous: 'aurons / averons',
      vous: 'aurez / averez',
      ils: 'auront / averont',
    },
    subjonctifPresent: {
      je: 'aie',
      tu: 'aies',
      il: 'ait',
      nous: 'aiens / ayons',
      vous: 'aiez / ayez',
      ils: 'aient',
    },
    imperatif: {
      tu: 'aies',
      nous: 'aiens',
      vous: 'aiez',
    },
    etymologyAndNotes: '早期《罗兰之歌》第三人称现在时保留古辅音词尾 ad (源自 habet)。简单过去时 ot/out 源自 habuit，双元音 ou 后来在现代法语中弱化为 eut [y]。',
  },
  {
    infinitive: 'aler',
    meaning: '行走、前往、去',
    modernFrench: 'aller',
    group: '不规则多词干动词 (源自 ambulare / vadere / ire 混合)',
    stemType: '三词干互补 (vad- / al- / ir-)',
    presentParticiple: 'alant',
    pastParticiple: 'alé / alet',
    indicativePresent: {
      je: 'vois / voise / va',
      tu: 'vas',
      il: 'vat / va / vait',
      nous: 'alons',
      vous: 'alez',
      ils: 'vont',
    },
    imparfait: {
      je: 'aloie / aleie',
      tu: 'aloies',
      il: 'aloit / aleit',
      nous: 'aliiens',
      vous: 'aliiez',
      ils: 'aloient / aleient',
    },
    passeSimple: {
      type: '弱变化 Passé faible en -ai',
      je: 'alai',
      tu: 'alas',
      il: 'ala / alat',
      nous: 'alames',
      vous: 'alastes',
      ils: 'alerent',
    },
    futur: {
      je: 'irai',
      tu: 'iras',
      il: 'ira / irat',
      nous: 'irons',
      vous: 'irez',
      ils: 'iront',
    },
    subjonctifPresent: {
      je: 'aille / voise',
      tu: 'ailles / voises',
      il: 'aille / voist',
      nous: 'allons / aillons',
      vous: 'allez / ailliez',
      ils: 'aillent / voisent',
    },
    imperatif: {
      tu: 'va',
      nous: 'alons',
      vous: 'alez',
    },
    etymologyAndNotes: '古法语除 aille 外还极为频繁使用虚拟式 voise/voist (源自 vadere)。将来时干 ir- 直接继承自古典拉丁语 ire。',
  },
  {
    infinitive: 'faire',
    meaning: '制造、执行、令（使役动词）',
    modernFrench: 'faire',
    group: '第 3 组强变化动词 (源自拉丁语 facere)',
    stemType: '根音交替 (fac- / fek- / fi-)',
    presentParticiple: 'faisant',
    pastParticiple: 'fait / feit',
    indicativePresent: {
      je: 'faz / fais',
      tu: 'fais',
      il: 'fait',
      nous: 'faisons',
      vous: 'faites',
      ils: 'font',
    },
    imparfait: {
      je: 'faisoie',
      tu: 'faisoies',
      il: 'faisoit',
      nous: 'faisiiens',
      vous: 'faisiiez',
      ils: 'faisoient',
    },
    passeSimple: {
      type: '强变化 Passé fort en -i- (feci > fis)',
      je: 'fis',
      tu: 'fesis',
      il: 'fist',
      nous: 'fesimes',
      vous: 'fesistes',
      ils: 'firent',
    },
    futur: {
      je: 'ferai',
      tu: 'feras',
      il: 'fera / ferat',
      nous: 'ferons',
      vous: 'ferez',
      ils: 'feront',
    },
    subjonctifPresent: {
      je: 'face',
      tu: 'faces',
      il: 'face / facet',
      nous: 'faciens',
      vous: 'faciez',
      ils: 'facent',
    },
    imperatif: {
      tu: 'fai / fais',
      nous: 'faisons',
      vous: 'faites',
    },
    etymologyAndNotes: '虚拟式现在时 face (源自 faciam 腭化) 在中世纪文本中高频出现；简单过去时第三人称单数 fist 保留了拉丁语 fēcit 在古法语中的规则音变。',
  },
  {
    infinitive: 'dire',
    meaning: '言说、诉说、讲述',
    modernFrench: 'dire',
    group: '第 3 组强变化动词 (源自拉丁语 dicere)',
    stemType: '辅音干',
    presentParticiple: 'disant',
    pastParticiple: 'dit / deit',
    indicativePresent: {
      je: 'di / dis',
      tu: 'dis',
      il: 'dit',
      nous: 'disons',
      vous: 'dites',
      ils: 'dïent',
    },
    imparfait: {
      je: 'disoie',
      tu: 'disoies',
      il: 'disoit',
      nous: 'disiiens',
      vous: 'disiiez',
      ils: 'disoient',
    },
    passeSimple: {
      type: '强变化 Passé fort sigmatique (dixi > dis)',
      je: 'dis',
      tu: 'desis',
      il: 'dist',
      nous: 'desimes',
      vous: 'desistes',
      ils: 'dirent',
    },
    futur: {
      je: 'dirai',
      tu: 'diras',
      il: 'dira',
      nous: 'dirons',
      vous: 'direz',
      ils: 'diront',
    },
    subjonctifPresent: {
      je: 'die',
      tu: 'dies',
      il: 'diet / die',
      nous: 'diiens / disons',
      vous: 'diiez / diez',
      ils: 'dïent',
    },
    imperatif: {
      tu: 'di / dii',
      nous: 'disons',
      vous: 'dites',
    },
    etymologyAndNotes: '简单过去时 dist (源自 dixit) 在叙事手抄本中俯拾皆是（如 Ce dist li reis）。虚拟式单数保留无 -s/-e 的纯净形式 die/diet。',
  },
  {
    infinitive: 'veoir',
    meaning: '看见、目睹、注视',
    modernFrench: 'voir',
    group: '第 3 组不规则动词 (源自拉丁语 videre)',
    stemType: '元音交替 (vei- / voi- / v-)',
    presentParticiple: 'veant / voyant',
    pastParticiple: 'veü / veut',
    indicativePresent: {
      je: 'voi / veie',
      tu: 'vois',
      il: 'voit',
      nous: 'veons / veions',
      vous: 'veez / veiez',
      ils: 'voient',
    },
    imparfait: {
      je: 'veoie',
      tu: 'veoies',
      il: 'veoit',
      nous: 'veiiens',
      vous: 'veiiez',
      ils: 'veoient',
    },
    passeSimple: {
      type: '强变化 Passé fort en -i- (vidi > vi)',
      je: 'vi',
      tu: 'veïs',
      il: 'vit',
      nous: 'veïmes',
      vous: 'veïstes',
      ils: 'virent',
    },
    futur: {
      je: 'verrai',
      tu: 'verras',
      il: 'verra',
      nous: 'verrons',
      vous: 'verrez',
      ils: 'verront',
    },
    subjonctifPresent: {
      je: 'voie',
      tu: 'voies',
      il: 'voie / voit',
      nous: 'veiens',
      vous: 'veiez',
      ils: 'voient',
    },
    imperatif: {
      tu: 'voi',
      nous: 'veons',
      vous: 'veez',
    },
    etymologyAndNotes: '将来时 verrai 中的 -rr- 源自元音弱化脱落后 videre habere 的辅音接触同化 (d + r > rr)。',
  },
  {
    infinitive: 'poeir / pooir',
    meaning: '能够、得以（情态动词）',
    modernFrench: 'pouvoir',
    group: '第 3 组情态动词 (源自通俗拉丁语 potēre)',
    stemType: '重音交替 (pu- / po-)',
    presentParticiple: 'poant / puissant',
    pastParticiple: 'poü',
    indicativePresent: {
      je: 'puis / pui',
      tu: 'puex / pues',
      il: 'puet / poet',
      nous: 'poons',
      vous: 'poez',
      ils: 'pueent / poent',
    },
    imparfait: {
      je: 'pooie',
      tu: 'pooies',
      il: 'pooit',
      nous: 'poiiens',
      vous: 'poiiez',
      ils: 'pooient',
    },
    passeSimple: {
      type: '强变化 Passé fort en -u- (potui > pot)',
      je: 'poi / poui',
      tu: 'peüs / pous',
      il: 'pot / pout',
      nous: 'peümes',
      vous: 'peüstes',
      ils: 'porent / pourent',
    },
    futur: {
      je: 'porrai',
      tu: 'porras',
      il: 'porra',
      nous: 'porrons',
      vous: 'porrez',
      ils: 'porront',
    },
    subjonctifPresent: {
      je: 'puisse',
      tu: 'puisses',
      il: 'puisse / puist',
      nous: 'puissiens',
      vous: 'puissiez',
      ils: 'puissent',
    },
    imperatif: {
      tu: 'puis',
      nous: 'poons',
      vous: 'poez',
    },
    etymologyAndNotes: '现在时单数 puet / poet 呈现拉丁语 ŏ 在开音节受重音而双元音化的经典轨迹 (pŏtest > puet)。简单过去时第三人称单数 pot/pout 高频出现在英雄叙事中。',
  },
  {
    infinitive: 'voleir / vouloir',
    meaning: '意欲、想要、希冀（情态动词）',
    modernFrench: 'vouloir',
    group: '第 3 组情态动词 (源自拉丁语 volēre)',
    stemType: '重音交替 (vuel- / vol-)',
    presentParticiple: 'voillant / voulant',
    pastParticiple: 'volu / voulu',
    indicativePresent: {
      je: 'vueil / voil',
      tu: 'vols / veus',
      il: 'vuelt / volt',
      nous: 'volons',
      vous: 'volez',
      ils: 'vuelent',
    },
    imparfait: {
      je: 'voloie',
      tu: 'voloies',
      il: 'voloit',
      nous: 'voliiens',
      vous: 'voliiez',
      ils: 'voloient',
    },
    passeSimple: {
      type: '强变化 Passé fort en -u- (volui > volt)',
      je: 'volui / voil',
      tu: 'volus',
      il: 'volt / voulut',
      nous: 'volumes',
      vous: 'volustes',
      ils: 'volrent / voldrent',
    },
    futur: {
      je: 'voldrai / voudrai',
      tu: 'voldras',
      il: 'voldra',
      nous: 'voldrons',
      vous: 'voldrez',
      ils: 'voldront',
    },
    subjonctifPresent: {
      je: 'vueille',
      tu: 'vueilles',
      il: 'vueille / voille',
      nous: 'voilliens',
      vous: 'voilliez',
      ils: 'vueillent',
    },
    imperatif: {
      tu: 'vueille',
      nous: 'voillons',
      vous: 'voilliez',
    },
    etymologyAndNotes: '古法语现在时第一人称 vueil [vœʎ] 保留了拉丁语 velle 在通俗时期的重音形式；将来时 voldrai 中插生过过渡塞音 -d- (vol-r- > voldr-)。',
  },
  {
    infinitive: 'savoir / saveir',
    meaning: '知晓、得知、懂得',
    modernFrench: 'savoir',
    group: '第 3 组不规则动词 (源自拉丁语 sapēre)',
    stemType: '双词干 (sa- / sav-)',
    presentParticiple: 'sachant',
    pastParticiple: 'seü / savu',
    indicativePresent: {
      je: 'sai / say',
      tu: 'ses / sais',
      il: 'set / sait',
      nous: 'savons',
      vous: 'savez',
      ils: 'sevent / savent',
    },
    imparfait: {
      je: 'savoie',
      tu: 'savoies',
      il: 'savoit',
      nous: 'saviiens',
      vous: 'saviiez',
      ils: 'savoient',
    },
    passeSimple: {
      type: '强变化 Passé fort en -u- (sapui > sot)',
      je: 'soi / sui',
      tu: 'seüs',
      il: 'sot / sout',
      nous: 'seümes',
      vous: 'seüstes',
      ils: 'sorent / sourent',
    },
    futur: {
      je: 'savrai / sauray',
      tu: 'savras',
      il: 'savra',
      nous: 'savrons',
      vous: 'savrez',
      ils: 'savront',
    },
    subjonctifPresent: {
      je: 'sache',
      tu: 'saches',
      il: 'sache',
      nous: 'sachiens',
      vous: 'sachiez',
      ils: 'sachent',
    },
    imperatif: {
      tu: 'sache',
      nous: 'sachiens',
      vous: 'sachiez',
    },
    etymologyAndNotes: '过去时 sot 源自拉丁语 sápuit。虚拟式与祈使式 sache 源自拉丁语 sapiam 的辅音腭化 (p + j > ch [tʃ])。',
  },
  {
    infinitive: 'amer',
    meaning: '爱、喜爱、眷恋',
    modernFrench: 'aimer',
    group: '第 1 组标准动词 (源自拉丁语 amare)',
    stemType: '重音交替弱变化 (aim- / am-)',
    presentParticiple: 'amant',
    pastParticiple: 'amé / amet',
    indicativePresent: {
      je: 'aim / aime',
      tu: 'aimes',
      il: 'aime / aimet',
      nous: 'amons',
      vous: 'amez',
      ils: 'aiment',
    },
    imparfait: {
      je: 'amoie',
      tu: 'amoies',
      il: 'amoit',
      nous: 'amiiens',
      vous: 'amiiez',
      ils: 'amoient',
    },
    passeSimple: {
      type: '弱变化 Passé faible en -ai (amavi > amai)',
      je: 'amai',
      tu: 'amas',
      il: 'ama / amat',
      nous: 'amames',
      vous: 'amastes',
      ils: 'amerent',
    },
    futur: {
      je: 'amerai',
      tu: 'ameras',
      il: 'amera',
      nous: 'amerons',
      vous: 'amerez',
      ils: 'ameront',
    },
    subjonctifPresent: {
      je: 'aim',
      tu: 'ains / aims',
      il: 'aim / aimt',
      nous: 'amiens',
      vous: 'amiez',
      ils: 'aiment',
    },
    imperatif: {
      tu: 'aime',
      nous: 'amons',
      vous: 'amez',
    },
    etymologyAndNotes: '典型的根音重音移动：词干受重音时 a 双元音化为 ai (ámo > aim, ámant > aiment)；重音在词尾时保持单音 a (amámus > amons, amátis > amez)。现代法语将 aim- 泛化至全体人称。',
  },
  {
    infinitive: 'chanter',
    meaning: '吟唱、歌咏、歌唱',
    modernFrench: 'chanter',
    group: '第 1 组标准弱变化动词 (源自拉丁语 cantare)',
    stemType: '规则弱变化词干',
    presentParticiple: 'chantant',
    pastParticiple: 'chanté / chantet',
    indicativePresent: {
      je: 'chant',
      tu: 'chantes',
      il: 'chante / chantet',
      nous: 'chantons',
      vous: 'chantez',
      ils: 'chantent',
    },
    imparfait: {
      je: 'chantoie',
      tu: 'chantoies',
      il: 'chantoit',
      nous: 'chantiiens',
      vous: 'chantiiez',
      ils: 'chantoient',
    },
    passeSimple: {
      type: '弱变化 Passé faible en -ai',
      je: 'chantai',
      tu: 'chantas',
      il: 'chanta / chantat',
      nous: 'chantames',
      vous: 'chantastes',
      ils: 'chanterent',
    },
    futur: {
      je: 'chanterai',
      tu: 'chanteras',
      il: 'chantera',
      nous: 'chanterons',
      vous: 'chanterez',
      ils: 'chanteront',
    },
    subjonctifPresent: {
      je: 'chant',
      tu: 'chans / chanz',
      il: 'chant',
      nous: 'chantiens',
      vous: 'chantiez',
      ils: 'chantent',
    },
    imperatif: {
      tu: 'chante',
      nous: 'chantons',
      vous: 'chantez',
    },
    etymologyAndNotes: '古法语现在时第 1 人称单数原无词尾 -e (canto > chant)；虚拟式现在时同样无 -e。第 1 组动词过去分词阳性单数主格带 -s (chantés)，宾格不带 (chanté)。',
  },
  {
    infinitive: 'morir',
    meaning: '死亡、战殁、殒命',
    modernFrench: 'mourir',
    group: '第 3 组强变化动词 (源自通俗拉丁语 morire)',
    stemType: '重音交替 (muer- / mor-)',
    presentParticiple: 'morant',
    pastParticiple: 'mort',
    indicativePresent: {
      je: 'muir / muer',
      tu: 'muers',
      il: 'muert',
      nous: 'morons',
      vous: 'morez',
      ils: 'muerent',
    },
    imparfait: {
      je: 'moroie',
      tu: 'moroies',
      il: 'moroit',
      nous: 'moriiens',
      vous: 'moriiez',
      ils: 'moroient',
    },
    passeSimple: {
      type: '强变化 Passé fort en -u- (morui > morut)',
      je: 'morui',
      tu: 'morus',
      il: 'morut',
      nous: 'morumes',
      vous: 'morustes',
      ils: 'morurent',
    },
    futur: {
      je: 'morrai',
      tu: 'morras',
      il: 'morra',
      nous: 'morrons',
      vous: 'morrez',
      ils: 'morront',
    },
    subjonctifPresent: {
      je: 'muire',
      tu: 'muires',
      il: 'muire / muirt',
      nous: 'moriens',
      vous: 'moriez',
      ils: 'muirent',
    },
    imperatif: {
      tu: 'muer',
      nous: 'morons',
      vous: 'morez',
    },
    etymologyAndNotes: '重音音节 ŏ 裂变为 ue (mŏrit > muert)；将来时中元音 i 脱落产生同化双辅音 -rr- (morir-ai > morrai)。',
  },
];
