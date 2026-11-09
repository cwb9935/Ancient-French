/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, FlashcardWord, DeclensionTable, ConjugationTable } from '../types';
import {
  GRAMMAR_SECTIONS,
  DECLENSION_DATABASE,
  CONJUGATION_DATABASE,
  GrammarSection,
} from '../data/grammarCodex';
import { SECTIONS_EN_1_TO_6 } from '../data/grammar/sectionsEn1to6';
import { SECTIONS_EN_7_TO_12 } from '../data/grammar/sectionsEn7to12';
import { SECTIONS_EN_13_TO_18 } from '../data/grammar/sectionsEn13to18';
import { FLASHCARD_WORDS } from '../data/flashcards';

/**
 * Core Modern French -> English Dictionary for the 5,000-word Old French Lexicon
 */
const FR_TO_EN_GLOSS: Record<string, string> = {
  // Core handcrafted & high-frequency lemmas
  'ainsi, alors, et, tellement': 'thus, then, and so, so much (discourse connector)',
  'baron, homme brave, noble guerrier': 'baron, valiant lord, noble warrior',
  'sire, seigneur, maître': 'sire, lord, feudal master',
  'roi': 'king, monarch',
  'empereur': 'emperor',
  'comte': 'count, earl',
  'preux, vaillant, sage, noble': 'valiant, gallant, worthy, noble (knightly virtue)',
  'grand, illustre, puissant': 'great, tall, illustrious, mighty',
  'épée': 'broadsword, knightly sword',
  'cheval de bataille, destrier': 'warhorse, charger, destrier',
  'château, forteresse, bourg fortifié': 'castle, stronghold, fortified town',
  'avoir, posséder': 'to have, possess (il i a = there is)',
  'être': 'to be, exist',
  'aller, marcher, s’avancer': 'to go, walk, advance (suppletive stems al-, v-, ir-)',
  'faire, accomplir, dire': 'to do, make, accomplish, say (verbum vicarium)',
  'dire, raconter, réciter': 'to say, tell, relate, recite',
  'voir, apercevoir (aussi veoir)': 'to see, behold, perceive',
  'voir, regarder': 'to see, look at, behold',
  'ouïr, entendre, écouter': 'to hear, listen, hearken (imperative: oez!)',
  'savoir, connaître': 'to know, understand, be skilled in',
  'pouvoir (aussi pooir)': 'to be able, can, have power',
  'vouloir, désirer': 'to wish, want, will, desire',
  'devoir': 'to owe, must, ought to',
  'venir, arriver': 'to come, arrive',
  'tenir, posséder un fief': 'to hold, keep, possess a fief',
  'prendre, saisir, capturer': 'to take, seize, capture',
  'mettre, placer, dépenser': 'to put, place, set, spend',
  'chercher, demander, rechercher': 'to seek, search for, ask for',
  'prier, demander, attaquer': 'to beseech, request, attack',
  'conquérir, vaincre': 'to conquer, win, vanquish',
  'tuer, massacrer au combat': 'to slay, kill in battle',
  'frapper (de l’épée ou de la lance)': 'to strike, smite (with sword or lance)',
  'mourir': 'to die, perish',
  'naître': 'to be born',
  'vivre': 'to live, be alive',
  'connaître, reconnaître': 'to know, recognize',
  'croire, avoir foi, faire crédit': 'to believe, trust, have faith',
  'paraître, se manifester (il pert = il est évident)': 'to appear, be manifest (il pert = it is evident)',
  'apparaître, se montrer': 'to appear, show oneself',
  'être assis, convenir, plaire': 'to sit, be seated, suit, please',
  'asseoir, placer, assiéger': 'to seat, set, besiege',
  'être couché, reposer (ci-gît)': 'to lie down, rest (ci-gît = here lies)',
  'tomber, échoir': 'to fall, befall',
  'valoir, être utile, aider': 'to be worth, avail, help',
  'manquer, faire défaut, échouer': 'to lack, fail, falter, end',
  'sortir, partir (aussi eissir)': 'to go out, sally forth, depart',
  'partager, fendre ; (se) séparer, partir': 'to cleave, share; to part, depart',
  'dormir': 'to sleep, slumber',
  'servir (son seigneur, sa dame, Dieu)': 'to serve (one’s lord, lady, or God)',
  'chevalier': 'knight, mounted warrior',
  'vassal': 'vassal, feudal liegeman',
  'écuyer': 'squire, shield-bearer',
  'duc': 'duke',
  'marquis': 'marquis, lord of the march',
  'vicomte': 'viscount',
  'châtelain': 'castellan, castle governor',
  'sénéchal': 'seneschal, royal steward',
  'connétable': 'constable, supreme commander',
  'maréchal': 'marshal, master of the horse',
  'reine': 'queen',
  'duchesse': 'duchess',
  'comtesse': 'countess',
  'dame, noble dame': 'lady, noblewoman',
  'demoiselle, jeune noble': 'damsel, young noblewoman',
  'jeune fille, vierge': 'maiden, damsel, virgin',
  'jeune chevalier, bachelier': 'young knight, aspirant bachelor-at-arms',
  'jeune homme, serviteur': 'youth, young page',
  'jeune fille, suivante': 'young girl, waiting-maid',
  'sergent, homme d’armes, serviteur': 'sergeant, man-at-arms, retainer',
  'vilain, paysan non noble': 'villein, peasant, baseborn churl',
  'bourgeois, habitant du bourg': 'burgess, townsman',
  'serf': 'serf, bondsman',
  'homme libre, Franc': 'freeman, Frank, noble-born man',
  'ancêtre': 'ancestor, forefather',
  'neveu': 'nephew (Roland as Charlemagne’s nephew)',
  'compagnon d’armes': 'companion-in-arms, sworn comrade',
  'félon, traître, parjure': 'felon, oath-breaker, traitor',
  'traître': 'traitor, betrayer',
  'larron, voleur': 'thief, highwayman, robber',
  'valet, goujat, garçon': 'groom, varlet, serving-lad',
  'enfant, jeune noble': 'child, young nobleman (childe)',
  'homme, vassal lige': 'man, mortal, liege vassal',
  'père': 'father, sire',
  'frère, moine': 'brother, friar, monk',
  'mère': 'mother',
  'sœur': 'sister',
  'nonne, religieuse': 'nun, religious sister',
  'bon, vaillant, de grande valeur': 'good, valiant, virtuous, of high worth',
  'beau, noble, cher (en apostrophe: bels sire)': 'fair, handsome, noble (in address: bels sire)',
  'cher, aimé, précieux, coûteux': 'dear, beloved, precious, costly',
  'clair, brillant, lumineux, limpide': 'bright, clear, radiant, gleaming',
  'haut, élevé, noble, puissant': 'high, lofty, exalted, noble',
  'bas, humble, à voix basse': 'low, humble, soft-spoken',
  'long, éloigné': 'long, far-reaching',
  'court, bref': 'short, brief',
  'large, généreux, prodigue': 'broad, wide, generous, open-handed',
  'étroit, serré': 'narrow, tight, close-fitting',
  'droit, juste, légitime, direct': 'right, just, rightful, straight',
  'tordu, injuste': 'twisted, crooked, unjust, wrong',
  'vrai, véridique, sincère': 'true, truthful, genuine (de voir = truly)',
  'faux, trompeur, déloyal': 'false, deceitful, disloyal',
  'saint, sacré': 'holy, sainted, sacred',
  'sain, en bonne santé, intact': 'sound, healthy, unharmed (sain et sauf)',
  'sauf, préservé, sauvé': 'safe, spared, saved',
  'vif, vivant, ardent': 'alive, living, spirited, keen',
  'mort, tué': 'dead, slain',
  'las, fatigué, malheureux (hélas = ha las !)': 'weary, wretched, unhappy (ha las! = alas!)',
  'joyeux, content (cf. faire chère lie)': 'joyful, glad, merry',
  'affligé, triste, malheureux': 'sorrowful, grieving, doleful',
  'irrité, en colère, affligé': 'wrathful, angry, vexed',
  'pensif, plongé dans ses pensées, soucieux': 'pensive, deep in thought, anxious',
  'hardi, audacieux, courageux': 'bold, daring, fearless, hardy',
  'couard, lâche, poltron': 'cowardly, craven, faint-hearted',
  'fier, redoutable, farouche, noble': 'fierce, proud, formidable, high-spirited',
  'orgueilleux, hautain, magnifique': 'haughty, proud, arrogant',
  'courtois, bien éduqué, noble de manières': 'courtly, courteous, chivalrous',
};

/**
 * Translates common Chinese grammatical/etymological terms and phrases into English
 */
export function translateChinesePhilologyToEn(text: string, fallbackModernFr?: string): string {
  if (!text) return fallbackModernFr || '';

  // Direct match
  if (fallbackModernFr && FR_TO_EN_GLOSS[fallbackModernFr.trim()]) {
    if (!text.includes('例句') && !text.includes('单数') && !text.includes('词源')) {
      return FR_TO_EN_GLOSS[fallbackModernFr.trim()];
    }
  }

  let s = text;

  // Replace structured grammatical prefixes & templates
  s = s
    .replace(/单数 CS:/g, 'Sg. CS:')
    .replace(/单数 CR:/g, 'Sg. CR:')
    .replace(/复数 CS:/g, 'Pl. CS:')
    .replace(/复数 CR:/g, 'Pl. CR:')
    .replace(/单数 CS\/CR:/g, 'Sg. CS/CR:')
    .replace(/复数:/g, 'Pl.:')
    .replace(/阳单 CS:/g, 'Masc. Sg. CS:')
    .replace(/阳单 CR:/g, 'Masc. Sg. CR:')
    .replace(/阴单:/g, 'Fem. Sg.:')
    .replace(/阳\/阴单 CS:/g, 'Masc./Fem. Sg. CS:')
    .replace(/阳\/阴单 CR:/g, 'Masc./Fem. Sg. CR:')
    .replace(/阳\/阴:/g, 'Masc./Fem.:')
    .replace(/阳CS:/g, 'Masc. CS:')
    .replace(/阳:/g, 'Masc.:')
    .replace(/阴:/g, 'Fem.:')
    .replace(/现3单:/g, 'Pres. 3sg:')
    .replace(/过去分词:/g, 'Past Part.:')
    .replace(/（阴阳性同形）/g, ' (epicene: identical in masc./fem.)')
    .replace(/\(通性\)/g, '(Epicene)')
    .replace(/\(比较级\)/g, '(Comparative)')
    .replace(/\(定冠词\)/g, '(Definite Article)')
    .replace(/\(指示词\)/g, '(Demonstratives)')
    .replace(/\(同类:\s*([^)]+)\)/g, '(cf. $1)')
    .replace(/\(原型:\s*([^)]+)\)/g, '(lemma: $1)')
    .replace(/\(源动词:\s*([^)]+)\)/g, '(root verb: $1)')
    .replace(/\(词条:\s*([^)]+)\)/g, '(entry: $1)')
    .replace(/\(无格位屈折\)/g, '(invariable)')
    .replace(/\(名词化不定式\)/g, '(Substantivized Infinitive)')
    .replace(/语法功能词/g, 'Grammatical Particle')
    .replace(/名词化不定式与分词变格/g, 'Substantivized Infinitive & Participle Declension')
    .replace(/系表\/谓语动词搭配变位/g, 'Copular & Predicate Verb Conjugation')
    .replace(/源动词变位/g, 'Root Verb Conjugation')
    .replace(/\(晚期 /g, '(Late OF ')
    .replace(/\(早期 /g, '(Early OF ')
    .replace(/\(诺曼 /g, '(Norman ')
    .replace(/词源：/g, 'Etymology: ')
    .replace(/例句：/g, 'Example: ')
    .replace(/拉丁语主格/g, 'Latin nominative')
    .replace(/拉丁语宾格/g, 'Latin accusative')
    .replace(/宾格/g, 'accusative')
    .replace(/主格/g, 'nominative (CS)')
    .replace(/直宾格/g, 'oblique/accusative (CR)')
    .replace(/斜格/g, 'oblique case (CR)')
    .replace(/呼格/g, 'vocative')
    .replace(/通俗拉丁语/g, 'Vulgar Latin')
    .replace(/晚期拉丁语/g, 'Late Latin')
    .replace(/古典拉丁语/g, 'Classical Latin')
    .replace(/拉丁语/g, 'Latin')
    .replace(/日耳曼法兰克语/g, 'Germanic Frankish')
    .replace(/法兰克语/g, 'Frankish')
    .replace(/古法语/g, 'Old French')
    .replace(/现代法语/g, 'Modern French')
    .replace(/居句首引发「动词-主语」\(V2\) 倒装/g, 'Triggers Verb-Second (V2) verb-subject inversion when clause-initial')
    .replace(/由第二类通性形容词 ([^\s]+) 直接加 -ment 构成（无中缀 -e-）/g, 'Formed directly from Type II epicene adj. $1 + -ment (without -e-)')
    .replace(/由第一类形容词阴性形态 ([^\s]+) \+ -ment \(< Lat\. mente\) 构成/g, 'Formed from Type I fem. adj. $1 + -ment (< Lat. ablative mente)')
    .replace(/（不定式直接加冠词作阳性双格名词）/g, ' (substantivized infinitive taking masculine two-case articles)')
    .replace(/源于动词不定式 ([^\s]+) \(< ([^)]+)\) 的名词化/g, 'Substantivized from the verb infinitive $1 (< $2)')
    .replace(/动词词干 ([^\s]+) \(< ([^)]+)\) \+ 后缀 -ement \(< Lat\. -amentum\)/g, 'Verb stem $1 (< $2) + suffix -ement (< Lat. -amentum)')
    .replace(/动词词干 ([^\s]+) \(< ([^)]+)\) \+ 后缀 -ance \(< Lat\. -antia\)/g, 'Verb stem $1 (< $2) + suffix -ance (< Lat. -antia)')
    .replace(/拉丁语施事后缀主格 -ātor \(> -ere\) \/ 宾格 -ātōrem \(> -eor\)/g, 'Latin agent suffix nom. -ātor (> -ere) / acc. -ātōrem (> -eor)')
    .replace(/拉丁语现在分词主格 -ans \/ 宾格 -antem/g, 'Latin present participle nom. -ans / acc. -antem')
    .replace(/源于过去分词阴性形态 -āta \/ -īta \/ -ūta \(< ([^)]+)\)/g, 'Derived from feminine past participle -āta / -īta / -ūta (< $1)')
    .replace(/阴性过去分词名词化，表一次完整行动或结果/g, 'Substantivized fem. past participle denoting a completed action or blow')
    .replace(/（古法语现在分词具双格变化且阴性不加 -e）/g, ' (OF present participles inflect for case and are epicene without fem. -e)');

  // If the remaining text still contains mostly Chinese characters and we have a Modern French gloss, format it cleanly
  if (/[\u4e00-\u9fff]/.test(s) && fallbackModernFr) {
    const cleanFr = fallbackModernFr.trim();
    const mappedEn = FR_TO_EN_GLOSS[cleanFr];
    if (mappedEn) return mappedEn;
    const frTranslated = translateModernFrenchGlossToEn(cleanFr);
    if (!s.includes('Sg.') && !s.includes('Pres.') && !s.includes('Masc.')) {
      return frTranslated;
    }
  }

  // Strip leftover Chinese parentheticals or convert remaining common Chinese terms
  s = s
    .replace(/（[^）]*[\u4e00-\u9fff]+[^）]*）/g, '')
    .replace(/\([^)]*[\u4e00-\u9fff]+[^)]*\)/g, '')
    .replace(/核心副词\/连词/g, 'Core Adverb / Conjunction')
    .replace(/不平衡变格阳名/g, 'Imparisyllabic Masc. Noun')
    .replace(/第一类阳名/g, 'Type I Masc. Noun')
    .replace(/第一类形容词/g, 'Type I Adjective')
    .replace(/第二类通性形容词/g, 'Type II Epicene Adjective')
    .replace(/方式副词/g, 'Adverb of Manner')
    .replace(/名词化不定式 · 阳名/g, 'Substantivized Infinitive · Masc.')
    .replace(/-ement 动作名词/g, '-ement Action Noun')
    .replace(/-ance 抽象名词/g, '-ance Abstract Noun')
    .replace(/施事者双词干名词/g, 'Agent Imparisyllabic Noun')
    .replace(/现在分词\/通性形容词/g, 'Present Participle / Epicene Adj.');

  return s.trim();
}

/**
 * Converts a Modern French lexical gloss or sentence into an English gloss + Modern French cognate
 */
export function translateModernFrenchGlossToEn(fr: string): string {
  if (!fr) return '';
  if (FR_TO_EN_GLOSS[fr.trim()]) return FR_TO_EN_GLOSS[fr.trim()];

  // Derived patterns in generator.ts
  if (fr.startsWith('de manière ')) {
    const base = fr.replace('de manière ', '').split(',')[0].trim();
    return `in a ${base} manner, with ${base} spirit (Mod. Fr. ${fr})`;
  }
  if (fr.startsWith('le fait de ')) {
    const base = fr.replace('le fait de ', '').split(',')[0].trim();
    return `the act or moment of "${base}" (substantivized infinitive; Mod. Fr. ${fr})`;
  }
  if (fr.startsWith('action de ')) {
    const base = fr.replace('action de ', '').split(',')[0].trim();
    return `act or accomplishment of "${base}" (Mod. Fr. ${fr})`;
  }
  if (fr.startsWith('état ou fait de ')) {
    const base = fr.replace('état ou fait de ', '').split(',')[0].trim();
    return `state or quality of "${base}" (Mod. Fr. ${fr})`;
  }
  if (fr.startsWith('celui qui accomplit l’action de ')) {
    const base = fr.replace('celui qui accomplit l’action de ', '').trim();
    return `one who performs the action of "${base}" (agent noun; Mod. Fr. ${fr})`;
  }
  if (fr.includes('(en train de ')) {
    const base = fr.split('(')[0].trim();
    return `doing / engaged in "${base}" (present participle; Mod. Fr. ${fr})`;
  }
  if (fr.startsWith('action accomplie de ')) {
    const base = fr.replace('action accomplie de ', '').split(',')[0].trim();
    return `completed deed or stroke of "${base}" (Mod. Fr. ${fr})`;
  }

  return `${fr} (Mod. Fr. cognate & sense)`;
}

/**
 * Translates an Old French / Modern French example pair into English when exampleChinese is in Chinese
 */
function buildEnglishExampleTranslation(word: FlashcardWord): string {
  const exFr = word.exampleModern || '';
  if (exFr.includes('Alors le chevalier partit sans plus attendre')) {
    return 'Then the knight departed without further delay.';
  }
  if (exFr.includes('Le comte Roland est très preux et brave')) {
    return 'Count Roland is most valiant and noble.';
  }
  if (exFr.includes('Beau sire roi, je vous ai tant servi')) {
    return 'Fair lord king, I have served you so long.';
  }
  if (exFr.includes('Charles le roi, notre grand empereur')) {
    return 'Charles the king, our great emperor.';
  }
  if (exFr.includes('L’empereur se montre joyeux et content')) {
    return 'The emperor shows himself joyful and glad.';
  }
  if (exFr.includes('Le comte Roland était étendu sous un pin')) {
    return 'Count Roland lay stretched beneath a pine tree.';
  }
  if (exFr.includes('Roland est preux et Olivier est sage')) {
    return 'Roland is valiant and Oliver is wise.';
  }
  if (exFr.includes('fut très estimé à la cour')) {
    return 'Was held in high esteem at the royal court.';
  }
  if (exFr.includes('Le chevalier vit le ') && exFr.includes('devant le château')) {
    return 'The knight beheld it before the castle gate.';
  }
  if (exFr.includes('on connut sa grande prouesse')) {
    return 'Through this, all knew his great chivalric prowess.';
  }
  if (exFr.includes('fut grande et belle à regarder')) {
    return 'Was grand and fair to behold.';
  }
  if (exFr.includes('le comte souffrit maint dur tourment')) {
    return 'For this cause, the count endured many a harsh trial.';
  }
  if (exFr.includes('Le baron agit') && exFr.includes('selon son noble cœur')) {
    return 'The baron acts according to his noble heart.';
  }
  if (exFr.includes('Le chevalier est très') && exFr.includes('et la dame l’est aussi')) {
    return 'The knight possesses this noble quality in full measure, and so does the lady.';
  }
  if (exFr.includes('devant le roi')) {
    return 'Spoke or came before the king at court.';
  }
  if (exFr.includes('grande joie dans la salle')) {
    return 'At that moment, there was great joy throughout the hall.';
  }
  if (exFr.includes('par le conseil des barons')) {
    return 'The deed was accomplished by the counsel of the barons.';
  }
  if (exFr.includes('toute la nuit')) {
    return 'He kept his heart steadfast in this thought all through the night.';
  }
  if (exFr.includes('sous l’olivier')) {
    return 'I found the knight beneath the olive tree.';
  }
  if (exFr.includes('maint bouclier percé')) {
    return 'In that clash, many a shield was pierced through.';
  }
  return `Literal Modern French parallel: "${exFr}"`;
}

let cachedEnFlashcards: FlashcardWord[] | null = null;

export function getLocalizedFlashcards(lang: Language = 'en'): FlashcardWord[] {
  if (lang === 'zh') return FLASHCARD_WORDS;
  if (cachedEnFlashcards) return cachedEnFlashcards;

  cachedEnFlashcards = FLASHCARD_WORDS.map((w) => {
    const cleanPos = translateChinesePhilologyToEn(w.pos);
    const cleanCaseNote = w.caseNote ? translateChinesePhilologyToEn(w.caseNote) : undefined;
    const cleanMeaning =
      FR_TO_EN_GLOSS[w.modernFrench.trim()] || translateModernFrenchGlossToEn(w.modernFrench);
    const cleanLat = translateChinesePhilologyToEn(w.latinOrigin);
    const cleanExEn = buildEnglishExampleTranslation(w);

    return {
      ...w,
      pos: cleanPos,
      caseNote: cleanCaseNote,
      chinese: cleanMeaning,
      latinOrigin: cleanLat,
      exampleChinese: cleanExEn,
    };
  });

  return cachedEnFlashcards;
}

/**
 * Complete 18 Curated Declension Paradigms (matching /src/data/grammar/declensions.ts 1:1)
 */
const BASE_DECLENSION_EN: Record<
  string,
  { wordLemma?: string; type: string; meaning: string; ruleExplanation: string }
> = {
  mur: {
    type: 'Class I: Regular Masculine Noun (Type I / Sigmatique)',
    meaning: 'city wall, rampart, castle wall',
    ruleExplanation:
      'Derived from Latin 2nd declension (murus / murum). Exemplifies the classic Old French diagonal X-Pattern: Sg. CS takes -s (li murs) and Pl. CR takes -s (les murs), while Sg. CR (le mur) and Pl. CS (li mur < Lat. muri, with final vowel apocopated and no -s) have no -s.',
  },
  'cheval / chasteau': {
    type: 'Class I: Masculine Noun with Final -l Vocalization (Type I Vocalisation)',
    meaning: 'warhorse / castle',
    ruleExplanation:
      'When a stem ending in lateral -l (cheval, chastel, oisel, mal) meets inflectional -s, the lateral -l softens and vocalizes to -u (-al + -s → -aus, often written -ax with a manuscript abbreviation). Sg. CR and Pl. CS have no -s and retain the base stem cheval! This is the exact historical root of the Modern French singular/plural alternation cheval / chevaux.',
  },
  'pere / frere / arbre': {
    type: 'Class II: Asigmatic Masculine Noun (Type II / Asigmatique)',
    meaning: 'father / brother / tree',
    ruleExplanation:
      'Derived from Latin 3rd declension -er / -or stems (pater, frater, arbor). In early Old French, Sg. CS has no etymological -s (li pere), distinguished from Sg. CR (le pere) by the definite article alone; from the mid-12th century onward, under analogical pressure from Class I, Sg. CS frequently adds an analogical -s (li peres).',
  },
  'ber / baron': {
    type: 'Class III: Imparisyllabic Stress-Shifting Masculine Noun (Type III Imparisyllabique)',
    meaning: 'baron, valiant nobleman, warrior',
    ruleExplanation:
      'Derived from a Latin stress shift: nominative singular báro (stressed on the first syllable) evolved into ber; accusative singular barónem (stressed on the second syllable) evolved into baron. Pl. CS baróni → li baron; Pl. CR barónes → les barons. Modern French retained only the oblique form baron.',
  },
  'sire / seignor': {
    type: 'Class III: Imparisyllabic Stress-Shifting Masculine Noun (Type III)',
    meaning: 'lord, sovereign, feudal master',
    ruleExplanation:
      'Latin sénior (Sg. CS) → sire; seniórem (Sg. CR) → seignor (alongside the early twin pair sendra / seindre CS and seignor CR). Modern French uniquely preserved both case forms as independent words: Sire (royal vocative address from CS) and Seigneur (feudal lord from CR)!',
  },
  'cuens / conte': {
    type: 'Class III: Imparisyllabic Stress-Shifting Masculine Noun (Type III)',
    meaning: 'count, earl',
    ruleExplanation:
      'Latin cómes (Sg. CS) with stressed open o in an open syllable diphthongizes to ue → cuens (quens); cómitem (Sg. CR) in a blocked nasal syllable retains o → conte. Modern French Comte descends from the Cas Régime.',
  },
  'emperere / empereor': {
    type: 'Class III: -tor Agent Imparisyllabic Masculine Noun (Type III)',
    meaning: 'emperor (cf. chantre/chanteor, traïtre/traïtor)',
    ruleExplanation:
      'Latin -tor / -tórem agent noun family: impérator (CS) → emperere; imperatórem (CR) → empereor. Parallel pairs: cántor → chantre (church precentor, CS survival) vs. cantatórem → chanteor (> chanteur, CR survival).',
  },
  'enfes / enfant': {
    type: 'Class III: Imparisyllabic Stress-Shifting Masculine Noun (Type III)',
    meaning: 'child, noble youth, young knight',
    ruleExplanation:
      'Latin ínfans (Sg. CS) → enfes; infántem (Sg. CR) → enfant. In Pl. CR, enfant + -s yields enfanz (dental -t + -s coalesces into the affricate -z [ts]).',
  },
  'hom / ome': {
    type: 'Class III: Imparisyllabic Stress-Shifting Masculine Noun (Type III)',
    meaning: 'man, mortal, liege vassal / indefinite pronoun on',
    ruleExplanation:
      'Latin hómo (Sg. CS) → hom / on; hóminem (Sg. CR) → ome (home). The unstressed nominative evolved into the Modern French indefinite subject pronoun "on", whereas the substantive noun "homme" comes from the oblique form ome!',
  },
  'compainz / compaignon': {
    type: 'Class III: Germano-Latin Hybrid Imparisyllabic Masculine Noun (Type III)',
    meaning: 'companion-in-arms, comrade ("one who shares bread")',
    ruleExplanation:
      'Vulgar Latin *compánio (Sg. CS) → compainz (the direct ancestor of Modern French "copain" pal/mate!); *companiónem (Sg. CR) → compaignon (the direct ancestor of Modern French "compagnon" companion!).',
  },
  'dame / rose': {
    type: 'Class I: Regular Feminine Noun in -e (Type I Féminin)',
    meaning: 'lady, noblewoman / rose',
    ruleExplanation:
      'Derived from Latin 1st declension -a nouns (domina, rosa). In the singular, Cas Sujet and Cas Régime are completely identical (without -s: la dame); in the plural, Cas Sujet and Cas Régime are also completely identical (with -s: les dames).',
  },
  'flor / amor / cité': {
    type: 'Class II: Consonant- or Tonic-Vowel-Final Feminine Noun (Type II Féminin)',
    meaning: 'flower / love / city',
    ruleExplanation:
      'Derived from Latin 3rd declension feminine nouns (flos/florem, civitas/civitatem). Because they do not end in weak schwa -e, the Nominative Singular (CS sg) MUST take inflectional -s (or t+s → -z: la citez, la bontez, la flors), whereas the Oblique Singular (CR sg) has no -s (la flor, la cité).',
  },
  'suer / seror': {
    type: 'Class III: Imparisyllabic Stress-Shifting Feminine Noun (Type III Féminin)',
    meaning: 'sister (cf. nonne/nonnain, pute/putain)',
    ruleExplanation:
      'Latin sóror (Sg. CS) → la suer; sorórem (Sg. CR) → la seror. Alongside this sit Germanic-type -a / -ane feminine oblique nouns: la nonne (CS) / la nonnain (CR); Eve (CS) / Evain (CR). Modern French "sœur" is a rare survival of the Cas Sujet form!',
  },
  'bon / bone (Adj. Type I)': {
    type: 'Class I Two-Ending Adjective (Adjectif Type I)',
    meaning: 'good, valiant, virtuous, noble',
    ruleExplanation:
      'Derived from Latin -us, -a, -um adjectives. The masculine follows the Class I masculine diagonal X-Pattern (bons / bon / bon / bons); the feminine follows Class I feminine nouns (bone / bone / bones / bones); the neuter singular used as an impersonal predicate never takes -s ("Il est bon que...").',
  },
  'grant / fort / tel (Adj. Type II)': {
    type: 'Class II Epicene Single-Ending Adjective (Adjectif Type II Épicène)',
    meaning: 'great, tall / strong / such',
    ruleExplanation:
      'Derived from Latin 3rd declension two-termination adjectives (grandis, fortis, talis, qualis, cortensis). In 11th–12th century Old French, the feminine singular NEVER takes final -e (e.g., la grant joie, une fort tour, grant mere)! Fossilized in Modern French: grand-mère, grand-route, à grand-peine.',
  },
  'mieldre / meillor (比较级)': {
    wordLemma: 'mieldre / meillor (Comparative)',
    type: 'Synthetic Comparative Adjective (Comparatif synthétique Type III)',
    meaning: 'better (cf. pire/peior "worse", graindre/graignor "greater")',
    ruleExplanation:
      'Derived from Latin synthetic comparatives with stress shift: mélior (CS) → mieldre vs. meliórem (CR) → meillor; péjor (CS) → pire vs. pejórem (CR) → peior; grándior (CS) → graindre vs. grandiórem (CR) → graignor; mínor → mendre (CS) / menor (CR).',
  },
  'li / le / la (定冠词)': {
    wordLemma: 'li / le / la (Definite Article)',
    type: 'Definite Article & Prepositional Contraction System (Article défini)',
    meaning: 'the (definite article)',
    ruleExplanation:
      'Derived from the Latin distal demonstrative ille. Note that Masculine Sg. CS and Masculine Pl. CS are BOTH "li"! You must combine the article with the presence or absence of -s on the noun and the number of the verb: "li chevaliers chante" (singular) vs. "li chevalier chantent" (plural).',
  },
  'cist / cil (指示词)': {
    wordLemma: 'cist / cil (Demonstratives)',
    type: 'Proximal "cist" & Distal "cil" Demonstrative System (Démonstratifs)',
    meaning: 'this, these (cist) / that, those, he who (cil)',
    ruleExplanation:
      'Old French demonstratives function simultaneously as determiners (adjectives) and standalone pronouns. "cist" (< ecce iste) marks proximity; "cil" (< ecce ille) marks distance. The strong stressed singular oblique forms "cestui / celui" (M) and "cesti / celi" (F) serve as prepositionless genitives/datives or stressed pronouns.',
  },
};

let cachedEnDeclensions: DeclensionTable[] | null = null;

export function getLocalizedDeclensions(lang: Language = 'en'): DeclensionTable[] {
  if (lang === 'zh') return DECLENSION_DATABASE;
  if (cachedEnDeclensions) return cachedEnDeclensions;

  cachedEnDeclensions = DECLENSION_DATABASE.map((d) => {
    const override = BASE_DECLENSION_EN[d.wordLemma];
    if (override) {
      return {
        ...d,
        wordLemma: override.wordLemma || translateChinesePhilologyToEn(d.wordLemma),
        type: override.type,
        gender: translateChinesePhilologyToEn(d.gender),
        meaning: override.meaning,
        singular: {
          cs: translateChinesePhilologyToEn(d.singular.cs),
          cr: translateChinesePhilologyToEn(d.singular.cr),
        },
        plural: {
          cs: translateChinesePhilologyToEn(d.plural.cs),
          cr: translateChinesePhilologyToEn(d.plural.cr),
        },
        ruleExplanation: override.ruleExplanation,
      };
    }

    return {
      ...d,
      wordLemma: translateChinesePhilologyToEn(d.wordLemma),
      type: translateChinesePhilologyToEn(d.type),
      gender: translateChinesePhilologyToEn(d.gender),
      meaning: translateModernFrenchGlossToEn(d.modernFrench),
      singular: {
        cs: translateChinesePhilologyToEn(d.singular.cs),
        cr: translateChinesePhilologyToEn(d.singular.cr),
      },
      plural: {
        cs: translateChinesePhilologyToEn(d.plural.cs),
        cr: translateChinesePhilologyToEn(d.plural.cr),
      },
      ruleExplanation: `Morphological paradigm for "${translateChinesePhilologyToEn(
        d.wordLemma
      )}" (${translateChinesePhilologyToEn(d.type)}). Modern French cognate: ${
        d.modernFrench
      }. Sg. CS: ${translateChinesePhilologyToEn(
        d.singular.cs
      )} | Sg. CR: ${translateChinesePhilologyToEn(d.singular.cr)}.`,
    };
  });

  return cachedEnDeclensions;
}

/**
 * Complete 13 Curated Verb Conjugation Paradigms (matching /src/data/grammar/conjugations.ts 1:1)
 */
const BASE_CONJUGATION_EN: Record<
  string,
  {
    infinitive?: string;
    group: string;
    meaning: string;
    latinOrigin: string;
    ruleExplanation: string;
  }
> = {
  estre: {
    group: 'Core Auxiliary & Copula Verb (Verbe substantif)',
    meaning: 'to be, exist, abide',
    latinOrigin: 'Vulgar Latin *essere (Classical Latin esse + stare)',
    ruleExplanation:
      'Old French estre fuses Latin sum/esse (sui, es, est, somes, estes, sont; fui, fu, furent) with stare (estant, esté, estoie). Note the archaic synthetic imperfect (ere, ert, erent < eram, erat, erant) alongside estoie, and synthetic future (ier, iert, ierent < ero, erit, erunt) alongside serai.',
  },
  'aveir / avoir': {
    group: 'Core Auxiliary / Strong -ui Perfect Verb',
    meaning: 'to have, possess; forms compound tenses',
    latinOrigin: 'Latin habēre',
    ruleExplanation:
      'Its passé simple exemplifies the strong -ui perfect (< Lat. habui): rhizotonic persons (1sg oi, 3sg ot, 3pl orent) round the root vowel, while arrizotonic persons (2sg eüs, 1pl eümes, 2pl eüstes) stress the ending with hiatus. Impersonal a / il i a ("there is") governs the Cas Régime!',
  },
  chanter: {
    group: '1st Group Regular Verb (-er < Latin -āre)',
    meaning: 'to sing, chant epic verse',
    latinOrigin: 'Latin cantāre',
    ruleExplanation:
      'Two key rules for 1st-group verbs in 11th–12th C. Old French: (1) Present indicative 1sg has NO final -e (je chant, je parol, je plor); (2) Present subjunctive singular (1, 2, 3sg) derives from Latin -em, -es, -et and likewise lacks -e: qu’il chant ("may he sing"), 2sg chanz (< chant+s)!',
  },
  amer: {
    group: '1st Group Vowel-Alternating Verb (ai / a Nasal Alternation)',
    meaning: 'to love, cherish, hold dear',
    latinOrigin: 'Latin amāre',
    ruleExplanation:
      'Classic stress-driven apophony: when stress falls on the root (1, 2, 3sg & 3pl: aim, aimes, aime, aiment), a diphthongizes to ai before a nasal; when stress falls on the ending (1pl amons, 2pl amez, infinitive amer, imperfect amoie), the root remains monophthongal a! Note 3sg subjunctive aint (Se Deus m’aint = So help me God).',
  },
  trover: {
    group: '1st Group Vowel-Alternating Verb (ue / o Alternation)',
    meaning: 'to find, discover, compose poetry (cf. Trouvère)',
    latinOrigin: 'Vulgar Latin *tropāre (to invent tropes/compose)',
    ruleExplanation:
      'Open stressed short ŏ diphthongizes to ue in rhizotonic forms (2sg trueves, 3sg trueve, 3pl truevent), whereas unstressed root syllables keep o (trover, trovons, trovez, trovoie). The 1sg truis and subjunctive truisse show analogical palatalization (parallel to prover → pruis / prueve / provons).',
  },
  'finir / fenir': {
    group: '2nd Group Inchoative Verb (-ir / -iss- < Latin -īre + -isc-)',
    meaning: 'to finish, complete, end',
    latinOrigin: 'Latin finīre',
    ruleExplanation:
      'Second-group verb taking the inchoative infix -iss-. Its passé simple follows the weak -i paradigm (fini, finis, fini, finimes, finistes, finirent). Note that pure non-inchoative -ir verbs (partir, dormir, servir, sentir, oïr) have no -iss- in the present indicative: part, parz, part / partons, partez, partent!',
  },
  'deveir / devoir': {
    group: '3rd Group Verb (-eir/-oir < Latin -ēre, Strong -ui Perfect)',
    meaning: 'to owe, must, ought to',
    latinOrigin: 'Latin debēre',
    ruleExplanation:
      'Illustrates the phonetic chain of Latin long ē > ei > oi: strong rhizotonic persons stress the stem (doi, dois, doit, doivent; early Norman dei, deis, deit), while weak arrizotonic persons stress the ending and retain e (devons, devez). Its passé simple is a strong -ui perfect: dui, deüs, dut, deümes, deüstes, durent.',
  },
  'poeir / pooir': {
    group: '3rd Group Modal Verb (Strong -ui Perfect)',
    meaning: 'to be able, can, have power',
    latinOrigin: 'Vulgar Latin *potēre',
    ruleExplanation:
      'Three hallmark morphological traits: ① Present stem alternation: puis, puez, puet vs. poons, poez; ② Passé simple strictly parallel to avoir (poi, peüs, pot, peümes, peüstes, porent); ③ Future and conditional show regressive assimilation to double -rr- (*poterai > porrai).',
  },
  'voleir / vouloir': {
    group: '3rd Group Modal Verb (Strong -ui / Sigmatic -si Perfect)',
    meaning: 'to wish, want, will, desire',
    latinOrigin: 'Vulgar Latin *volēre',
    ruleExplanation:
      'Between stem-final l and future/conditional r, an epenthetic dental stop d is obligatorily inserted: *vol-r-ai → voldrai > vocalized voudrai. Its passé simple exhibits both strong forms (volt, voldrent) and sigmatic forms (volst, volsist).',
  },
  'savoir / saveir': {
    group: '3rd Group Cognitive Verb (Strong -ui Perfect)',
    meaning: 'to know, understand, know how',
    latinOrigin: 'Vulgar Latin *sapēre',
    ruleExplanation:
      'Present indicative 3sg set (< sapit) and 3pl sevent (< *sapunt) preserve a crisp monophthongal e. Its passé simple (soi, seüs, sot, seümes, seüstes, sorent) forms the golden triad of -ui strong perfects alongside avoir (oi/ot/orent) and pooir (poi/pot/porent)!',
  },
  faire: {
    group: '3rd Group Strong Verb (Strong -i- Alternating Perfect)',
    meaning: 'to do, make, compose, cause (factitive)',
    latinOrigin: 'Latin facĕre',
    ruleExplanation:
      'Three essential forms: ① Present indicative 1sg faz (< facio) and present subjunctive face (< faciam); ② Passé simple alternates between strong root i (1sg fis, 3sg fist, 3pl firent) and weak stem e/eï (2sg fesis/feïs, 1pl fesimes/feïmes, 2pl fesistes/feïstes); ③ Future stem reduces to fer- (ferai).',
  },
  dire: {
    group: '3rd Group Sigmatic Strong Verb',
    meaning: 'to say, tell, relate',
    latinOrigin: 'Latin dīcĕre',
    ruleExplanation:
      'High-frequency manuscript forms: present 1sg di ("Je vos di" = I tell you), 3pl dient (< dicunt); present subjunctive die ("Qu’il die" = let him say). Its sigmatic passé simple derives from Latin dixi: dis, desis, dist, desimes, desistes, distrent.',
  },
  aler: {
    group: 'Suppletive Multi-Stem Verb (Supplétisme)',
    meaning: 'to go, walk, proceed',
    latinOrigin: 'Suppletive fusion of three Latin roots: *allāre + vadĕre + īre',
    ruleExplanation:
      'Fuses three Latin verbs: ① vadere supplies present singular & 3pl (vois, vas, vait, vont) and present subjunctive (voise, voises, voist, voisent); ② *allare supplies the infinitive, 1pl/2pl (alons, alez), imperfect, passé simple, and participles; ③ ire supplies the future and conditional (irai, iroie).',
  },
  'venir (同类: tenir)': {
    infinitive: 'venir (cf. tenir)',
    group: '3rd Group Nasal Strong Verb',
    meaning: 'to come, arrive (tenir: to hold, possess a fief)',
    latinOrigin: 'Latin venīre (tenēre)',
    ruleExplanation:
      'tenir and venir conjugate in exact parallel! Note: ① In the passé simple, strong persons raise the root vowel to i (ving, vint, vindrent with epenthetic d), while weak persons keep e (venis, venimes, venistes); ② In the future tense, epenthetic d is inserted between n and r: *ven-r-ai → vendrai ("I shall come"—never confuse with vendre "to sell"!).',
  },
  'veoir / veeir': {
    group: '3rd Group Strong Verb (Diphthongization + Strong -i- Perfect)',
    meaning: 'to see, behold, witness',
    latinOrigin: 'Latin vidēre',
    ruleExplanation:
      'Intervocalic dental d was lost by lenition (videre > veeir > veoir). Present indicative alternates strong voi, vois, voit, voient with weak veons, veez. Passé simple alternates strong vi, vit, virent with weak hiatus forms veïs, veïmes, veïstes. Future assimilates to double -rr-: verrai, verroiz.',
  },
  morir: {
    group: '3rd Group Stem-Alternating Verb (ue / o Alternation)',
    meaning: 'to die, perish in battle',
    latinOrigin: 'Vulgar Latin *morīre (Classical Latin morī)',
    ruleExplanation:
      'Three-way stem alternation in the present indicative: 1sg palatalizes under yod to muir (< *morio); 2sg, 3sg, 3pl diphthongize in open stressed syllables to muers, muert, muerent; 1pl, 2pl remain unstressed morons, morez. Note that the past participle mort can also be used transitively in Old French ("Il l’a mort" = He slew him).',
  },
};

let cachedEnConjugations: ConjugationTable[] | null = null;

export function getLocalizedConjugations(lang: Language = 'en'): ConjugationTable[] {
  if (lang === 'zh') return CONJUGATION_DATABASE;
  if (cachedEnConjugations) return cachedEnConjugations;

  cachedEnConjugations = CONJUGATION_DATABASE.map((c) => {
    const override = BASE_CONJUGATION_EN[c.infinitive];
    const cleanTenses = { ...c.tenses };
    (Object.keys(cleanTenses) as Array<keyof typeof cleanTenses>).forEach((k) => {
      const t = cleanTenses[k];
      cleanTenses[k] = {
        p1s: translateChinesePhilologyToEn(t.p1s),
        p2s: translateChinesePhilologyToEn(t.p2s),
        p3s: translateChinesePhilologyToEn(t.p3s),
        p1p: translateChinesePhilologyToEn(t.p1p),
        p2p: translateChinesePhilologyToEn(t.p2p),
        p3p: translateChinesePhilologyToEn(t.p3p),
      };
    });

    if (override) {
      return {
        ...c,
        infinitive: override.infinitive || translateChinesePhilologyToEn(c.infinitive),
        group: override.group,
        meaning: override.meaning,
        latinOrigin: override.latinOrigin,
        participePresent: translateChinesePhilologyToEn(c.participePresent),
        participePasse: translateChinesePhilologyToEn(c.participePasse),
        tenses: cleanTenses,
        ruleExplanation: override.ruleExplanation,
      };
    }

    const cleanInf = translateChinesePhilologyToEn(c.infinitive);
    return {
      ...c,
      infinitive: cleanInf,
      group: translateChinesePhilologyToEn(c.group),
      meaning: translateModernFrenchGlossToEn(c.modernFrench),
      latinOrigin: translateChinesePhilologyToEn(c.latinOrigin),
      participePresent: translateChinesePhilologyToEn(c.participePresent),
      participePasse: translateChinesePhilologyToEn(c.participePasse),
      tenses: cleanTenses,
      ruleExplanation: `Verb "${cleanInf}" belongs to ${translateChinesePhilologyToEn(
        c.group
      )} (Mod. Fr. ${c.modernFrench}). Strong rhizotonic persons (1, 2, 3sg & 3pl) stress the root (3sg pres. ${translateChinesePhilologyToEn(
        c.tenses.present.p3s
      )}), while weak arrizotonic persons (1pl ${translateChinesePhilologyToEn(
        c.tenses.present.p1p
      )}, 2pl ${translateChinesePhilologyToEn(
        c.tenses.present.p2p
      )}) shift stress to the ending. Past participle ${translateChinesePhilologyToEn(
        c.participePasse
      )} inflects like a Class I adjective.`,
    };
  });

  return cachedEnConjugations;
}

const GRAMMAR_SECTIONS_EN: GrammarSection[] = [
  ...SECTIONS_EN_1_TO_6,
  ...SECTIONS_EN_7_TO_12,
  ...SECTIONS_EN_13_TO_18,
];

export function getLocalizedGrammarSections(lang: Language = 'en'): GrammarSection[] {
  if (lang === 'zh') return GRAMMAR_SECTIONS;
  return GRAMMAR_SECTIONS_EN;
}
