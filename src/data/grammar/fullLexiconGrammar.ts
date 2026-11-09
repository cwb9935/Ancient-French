/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeclensionTable, ConjugationTable, ConjugationTense, FlashcardWord } from '../../types';
import { FLASHCARD_WORDS } from '../flashcards';
import { NOUN_SEEDS } from '../lexicon/nounSeeds';
import { VERB_SEEDS, VerbSeed } from '../lexicon/verbSeeds';
import { ADJ_SEEDS } from '../lexicon/adjAndInvarSeeds';
import { DECLENSION_DATABASE as BASE_DECLENSIONS } from './declensions';
import { CONJUGATION_DATABASE as BASE_CONJUGATIONS } from './conjugations';

function isVowelStart(word: string): boolean {
  return /^[aeiouyéèêëîïôùûüœæh]/i.test(word.trim());
}

function formatMascArtSgCr(word: string): string {
  const clean = word.trim();
  return isVowelStart(clean) ? `l’${clean}` : `le ${clean}`;
}

function formatFemArtSg(word: string): string {
  const clean = word.trim();
  return isVowelStart(clean) ? `l’${clean}` : `la ${clean}`;
}

function pluralizeOldFrench(cr: string): string {
  const clean = cr.trim();
  if (clean.endsWith('s') || clean.endsWith('z') || clean.endsWith('x')) {
    return clean;
  }
  if (clean.endsWith('al')) {
    return `${clean.slice(0, -2)}aus`;
  }
  if (clean.endsWith('el')) {
    return `${clean.slice(0, -2)}iaus`;
  }
  if (clean.endsWith('t') || clean.endsWith('d')) {
    return `${clean.slice(0, -1)}z`;
  }
  if (clean.endsWith('f')) {
    return `${clean.slice(0, -1)}s`;
  }
  return `${clean}s`;
}

/**
 * Generates a full 7-tense x 6-person Old French conjugation table from a VerbSeed or verb stem
 */
export function buildConjugationFromSeed(
  infinitive: string,
  stem: string,
  p3sRaw: string,
  ppRaw: string,
  group: string,
  meaning: string,
  modernFrench: string,
  latinOrigin: string,
  extraRuleNote?: string
): ConjugationTable {
  const cleanInf = infinitive.split('/')[0].trim();
  const p3s = p3sRaw.split('/')[0].trim();
  const pp = ppRaw.split('(')[0].trim();
  const isFirstGroup = group.includes('1er') || cleanInf.endsWith('er') || cleanInf.endsWith('ier');
  const isSecondInchoative = group.includes('2e') || group.includes('-iss-');

  let present: ConjugationTense;
  let imparfait: ConjugationTense;
  let passeSimple: ConjugationTense;
  let futur: ConjugationTense;
  let conditionnel: ConjugationTense;
  let subjonctifPresent: ConjugationTense;
  let subjonctifImparfait: ConjugationTense;

  if (isFirstGroup) {
    const p1s = p3s.endsWith('e') ? p3s.slice(0, -1) : stem;
    const p2s = p3s.endsWith('e') ? `${p3s}s` : `${p3s}es`;
    const p3p = p3s.endsWith('e') ? `${p3s}nt` : `${stem}ent`;
    present = {
      p1s: `${p1s} (晚期 ${p3s})`,
      p2s,
      p3s,
      p1p: `${stem}ons`,
      p2p: cleanInf.endsWith('ier') ? `${stem}iez` : `${stem}ez`,
      p3p,
    };
    imparfait = {
      p1s: `${stem}oie`,
      p2s: `${stem}oies`,
      p3s: `${stem}oit`,
      p1p: `${stem}iiens`,
      p2p: `${stem}iiez`,
      p3p: `${stem}oient`,
    };
    passeSimple = {
      p1s: `${stem}ai`,
      p2s: `${stem}as`,
      p3s: `${stem}a`,
      p1p: `${stem}ames`,
      p2p: `${stem}astes`,
      p3p: cleanInf.endsWith('ier') ? `${stem}ierent` : `${stem}erent`,
    };
    futur = {
      p1s: `${stem}erai`,
      p2s: `${stem}eras`,
      p3s: `${stem}era`,
      p1p: `${stem}erons`,
      p2p: `${stem}eroiz (-erez)`,
      p3p: `${stem}eront`,
    };
    conditionnel = {
      p1s: `${stem}eroie`,
      p2s: `${stem}eroies`,
      p3s: `${stem}eroit`,
      p1p: `${stem}eriiens`,
      p2p: `${stem}eriiez`,
      p3p: `${stem}eroient`,
    };
    subjonctifPresent = {
      p1s,
      p2s: `${p1s}s`,
      p3s: p1s,
      p1p: `${stem}ons`,
      p2p: cleanInf.endsWith('ier') ? `${stem}iez` : `${stem}ez`,
      p3p: `${stem}ent`,
    };
    subjonctifImparfait = {
      p1s: `${stem}asse`,
      p2s: `${stem}asses`,
      p3s: `${stem}ast`,
      p1p: `${stem}assiens`,
      p2p: `${stem}assiez`,
      p3p: `${stem}assent`,
    };
  } else if (isSecondInchoative) {
    present = {
      p1s: `${stem}is`,
      p2s: `${stem}is`,
      p3s: `${stem}ist`,
      p1p: `${stem}issons`,
      p2p: `${stem}issiez (-issez)`,
      p3p: `${stem}issent`,
    };
    imparfait = {
      p1s: `${stem}issoie`,
      p2s: `${stem}issoies`,
      p3s: `${stem}issoit`,
      p1p: `${stem}issiiens`,
      p2p: `${stem}issiiez`,
      p3p: `${stem}issoient`,
    };
    passeSimple = {
      p1s: `${stem}i`,
      p2s: `${stem}is`,
      p3s: `${stem}i (${stem}it)`,
      p1p: `${stem}imes`,
      p2p: `${stem}istes`,
      p3p: `${stem}irent`,
    };
    futur = {
      p1s: `${cleanInf}ai`,
      p2s: `${cleanInf}as`,
      p3s: `${cleanInf}a`,
      p1p: `${cleanInf}ons`,
      p2p: `${cleanInf}oiz`,
      p3p: `${cleanInf}ont`,
    };
    conditionnel = {
      p1s: `${cleanInf}oie`,
      p2s: `${cleanInf}oies`,
      p3s: `${cleanInf}oit`,
      p1p: `${cleanInf}iiens`,
      p2p: `${cleanInf}iiez`,
      p3p: `${cleanInf}oient`,
    };
    subjonctifPresent = {
      p1s: `${stem}isse`,
      p2s: `${stem}isses`,
      p3s: `${stem}isse (${stem}ist)`,
      p1p: `${stem}issiens`,
      p2p: `${stem}issiez`,
      p3p: `${stem}issent`,
    };
    subjonctifImparfait = {
      p1s: `${stem}isse`,
      p2s: `${stem}isses`,
      p3s: `${stem}ist`,
      p1p: `${stem}issiens`,
      p2p: `${stem}issiez`,
      p3p: `${stem}issent`,
    };
  } else {
    // 3e groupe (non-inchoative -ir, -re, -oir)
    const strongRoot = p3s.endsWith('t') ? p3s.slice(0, -1) : stem;
    present = {
      p1s: `${strongRoot}s`,
      p2s: `${strongRoot}s`,
      p3s,
      p1p: `${stem}ons`,
      p2p: `${stem}ez`,
      p3p: `${stem}ent`,
    };
    imparfait = {
      p1s: `${stem}oie`,
      p2s: `${stem}oies`,
      p3s: `${stem}oit`,
      p1p: `${stem}iiens`,
      p2p: `${stem}iiez`,
      p3p: `${stem}oient`,
    };
    const isU = pp.endsWith('u') || pp.endsWith('ü');
    const psStem = isU ? stem : `${stem}i`;
    passeSimple = isU
      ? {
          p1s: `${stem}ui`,
          p2s: `${stem}us`,
          p3s: `${stem}ut`,
          p1p: `${stem}umes`,
          p2p: `${stem}ustes`,
          p3p: `${stem}urent`,
        }
      : {
          p1s: `${psStem}`,
          p2s: `${psStem}s`,
          p3s: `${psStem}t`,
          p1p: `${psStem}mes`,
          p2p: `${psStem}stes`,
          p3p: `${psStem}rent`,
        };
    const futStem = cleanInf.endsWith('re') ? cleanInf.slice(0, -1) : cleanInf.endsWith('oir') ? `${stem}r` : cleanInf;
    futur = {
      p1s: `${futStem}ai`,
      p2s: `${futStem}as`,
      p3s: `${futStem}a`,
      p1p: `${futStem}ons`,
      p2p: `${futStem}oiz`,
      p3p: `${futStem}ont`,
    };
    conditionnel = {
      p1s: `${futStem}oie`,
      p2s: `${futStem}oies`,
      p3s: `${futStem}oit`,
      p1p: `${futStem}iiens`,
      p2p: `${futStem}iiez`,
      p3p: `${futStem}oient`,
    };
    subjonctifPresent = {
      p1s: `${strongRoot}e`,
      p2s: `${strongRoot}es`,
      p3s: `${strongRoot}e`,
      p1p: `${stem}iens`,
      p2p: `${stem}iez`,
      p3p: `${strongRoot}ent`,
    };
    subjonctifImparfait = isU
      ? {
          p1s: `${stem}usse`,
          p2s: `${stem}usses`,
          p3s: `${stem}ust`,
          p1p: `${stem}ussiens`,
          p2p: `${stem}ussiez`,
          p3p: `${stem}ussent`,
        }
      : {
          p1s: `${stem}isse`,
          p2s: `${stem}isses`,
          p3s: `${stem}ist`,
          p1p: `${stem}issiens`,
          p2p: `${stem}issiez`,
          p3p: `${stem}issent`,
        };
  }

  const ppCs = pp.endsWith('s') || pp.endsWith('z') || pp.endsWith('t') ? pp : `${pp}z`;
  const ppFem = pp.endsWith('e') ? pp : `${pp}e`;

  return {
    infinitive,
    group,
    meaning,
    modernFrench,
    latinOrigin,
    participePresent: `${stem}ant (CS: ${stem}anz)`,
    participePasse: `${pp} (阳CS: ${ppCs}, 阴: ${ppFem})`,
    tenses: {
      present,
      imparfait,
      passeSimple,
      futur,
      conditionnel,
      subjonctifPresent,
      subjonctifImparfait,
    },
    ruleExplanation:
      extraRuleNote ||
      `动词 ${infinitive} 属 ${group}。强式人称（1, 2, 3单与3复）重音落在词根上（如现在时 3单 ${p3s}），弱式人称（1复 ${stem}ons、2复 ${stem}ez 及未完成过去时 ${stem}oie）重音移至词尾。过去分词 ${pp} 在复合时态与被动句中遵循双格形容词配合规律。`,
  };
}

/**
 * Builds the complete Declension Database covering all curated tables + all 5,000 lexicon words
 */
export function buildFullDeclensionDatabase(): DeclensionTable[] {
  const results: DeclensionTable[] = [...BASE_DECLENSIONS];
  const seenLemmas = new Set<string>(
    BASE_DECLENSIONS.map((d) => d.wordLemma.toLowerCase().trim())
  );

  // Build quick lookup maps for NounSeeds and AdjSeeds
  const nounMap = new Map<string, typeof NOUN_SEEDS[number]>();
  for (const n of NOUN_SEEDS) {
    nounMap.set(n.cr.toLowerCase(), n);
    nounMap.set(`${n.cs} / ${n.cr}`.toLowerCase(), n);
  }

  const adjMap = new Map<string, typeof ADJ_SEEDS[number]>();
  for (const a of ADJ_SEEDS) {
    adjMap.set(a.crM.toLowerCase(), a);
    adjMap.set(`${a.csM} / ${a.crM}`.toLowerCase(), a);
  }

  for (const w of FLASHCARD_WORDS) {
    const key = w.wordOldFrench.toLowerCase().trim();
    if (seenLemmas.has(key)) continue;
    seenLemmas.add(key);

    const parts = w.wordOldFrench.split('/').map((s) => s.trim());
    const firstPart = parts[0].replace(/^(li|le|la|l’)\s+/i, '').trim();
    const secondPart = (parts[1] || parts[0]).replace(/^(li|le|la|l’)\s+/i, '').trim();

    // 1. Check if it matches a base NounSeed
    const matchedNoun = nounMap.get(key) || nounMap.get(w.lemma.toLowerCase().trim());
    if (matchedNoun && w.id.startsWith('fc-noun-')) {
      const isMasc = matchedNoun.gender === 'm';
      const sgCs = isMasc ? `li ${matchedNoun.cs}` : formatFemArtSg(matchedNoun.cs);
      const sgCr = isMasc ? formatMascArtSgCr(matchedNoun.cr) : formatFemArtSg(matchedNoun.cr);
      const plCs = isMasc ? `li ${matchedNoun.cr}` : `les ${pluralizeOldFrench(matchedNoun.cr)}`;
      const plCr = `les ${pluralizeOldFrench(matchedNoun.cr)}`;

      results.push({
        wordLemma: w.wordOldFrench,
        type: w.pos,
        gender: isMasc ? 'Masculin' : 'Féminin',
        meaning: w.chinese,
        modernFrench: w.modernFrench,
        singular: { cs: sgCs, cr: sgCr },
        plural: { cs: plCs, cr: plCr },
        ruleExplanation: `${w.caseNote || ''} · 词源：${w.latinOrigin}。例句：« ${w.exampleOldFrench} »（${w.exampleChinese}）`,
      });
      continue;
    }

    // 2. Check if it matches a base AdjSeed
    const matchedAdj = adjMap.get(key) || adjMap.get(w.lemma.toLowerCase().trim());
    if (matchedAdj && w.id.startsWith('fc-adj-') && !w.id.startsWith('fc-adj-te-') && !w.id.startsWith('fc-adj-isme-')) {
      const isEpicene = matchedAdj.adjType.includes('épicène') || matchedAdj.crM === matchedAdj.fem;
      results.push({
        wordLemma: w.wordOldFrench,
        type: w.pos,
        gender: isEpicene ? 'Masculin / Féminin (通性)' : 'Masculin & Féminin',
        meaning: w.chinese,
        modernFrench: w.modernFrench,
        singular: {
          cs: isEpicene ? `阳/阴: ${matchedAdj.csM}` : `阳: ${matchedAdj.csM} | 阴: ${matchedAdj.fem}`,
          cr: isEpicene ? `阳/阴: ${matchedAdj.crM}` : `阳: ${matchedAdj.crM} | 阴: ${matchedAdj.fem}`,
        },
        plural: {
          cs: isEpicene
            ? `阳: ${matchedAdj.crM} | 阴: ${matchedAdj.csM}`
            : `阳: ${matchedAdj.crM} | 阴: ${pluralizeOldFrench(matchedAdj.fem)}`,
          cr: isEpicene
            ? `阳/阴: ${matchedAdj.csM}`
            : `阳: ${matchedAdj.csM} | 阴: ${pluralizeOldFrench(matchedAdj.fem)}`,
        },
        ruleExplanation: `${w.caseNote || ''} · 词源：${w.latinOrigin}。例句：« ${w.exampleOldFrench} »（${w.exampleChinese}）`,
      });
      continue;
    }

    // 3. General Nouns & Substantivized Infinitives
    if (w.pos.startsWith('Nom') || w.pos.includes('Infinitif substantivé')) {
      const isMasc = w.gender !== 'f';
      const sgCs = isMasc ? `li ${firstPart}` : formatFemArtSg(firstPart);
      const sgCr = isMasc ? formatMascArtSgCr(secondPart) : formatFemArtSg(secondPart);
      const plCs = isMasc ? `li ${secondPart}` : `les ${pluralizeOldFrench(secondPart)}`;
      const plCr = `les ${pluralizeOldFrench(secondPart)}`;

      results.push({
        wordLemma: w.wordOldFrench,
        type: w.pos,
        gender: isMasc ? 'Masculin' : 'Féminin',
        meaning: w.chinese,
        modernFrench: w.modernFrench,
        singular: { cs: sgCs, cr: sgCr },
        plural: { cs: plCs, cr: plCr },
        ruleExplanation: `${w.caseNote || ''} · 词源：${w.latinOrigin}。例句：« ${w.exampleOldFrench} »（${w.exampleChinese}）`,
      });
      continue;
    }

    // 4. Adjectives & Present Participles
    if (w.pos.includes('Adj') || w.pos.includes('Participe')) {
      const isEpicene =
        w.pos.includes('épicène') ||
        w.pos.includes('Participe présent') ||
        w.pos.includes('-able');
      const femForm = isEpicene
        ? secondPart
        : secondPart.endsWith('e')
        ? secondPart
        : secondPart.endsWith('eus')
        ? `${secondPart}e`
        : `${secondPart}e`;

      results.push({
        wordLemma: w.wordOldFrench,
        type: w.pos,
        gender: isEpicene ? 'Masculin / Féminin (通性)' : 'Masculin & Féminin',
        meaning: w.chinese,
        modernFrench: w.modernFrench,
        singular: {
          cs: isEpicene ? `阳/阴: ${firstPart}` : `阳: ${firstPart} | 阴: ${femForm}`,
          cr: isEpicene ? `阳/阴: ${secondPart}` : `阳: ${secondPart} | 阴: ${femForm}`,
        },
        plural: {
          cs: isEpicene ? `阳: ${secondPart} | 阴: ${firstPart}` : `阳: ${secondPart} | 阴: ${femForm}s`,
          cr: isEpicene ? `阳/阴: ${firstPart}` : `阳: ${firstPart} | 阴: ${femForm}s`,
        },
        ruleExplanation: `${w.caseNote || ''} · 词源：${w.latinOrigin}。例句：« ${w.exampleOldFrench} »（${w.exampleChinese}）`,
      });
      continue;
    }

    // 5. Verbs & Conjugated Verb Forms (Nominalized Infinitive & Participle Declension)
    if (w.pos.includes('Verbe')) {
      const infClean = w.lemma.split('/')[0].trim();
      const infCs = infClean.endsWith('s') || infClean.endsWith('z') ? infClean : `${infClean}s`;
      results.push({
        wordLemma: w.wordOldFrench,
        type: `${w.pos} · 名词化不定式与分词变格`,
        gender: 'Masculin (名词化不定式)',
        meaning: w.chinese,
        modernFrench: w.modernFrench,
        singular: {
          cs: `li ${infCs} (词条: ${w.wordOldFrench})`,
          cr: `${formatMascArtSgCr(infClean)}`,
        },
        plural: {
          cs: `li ${infClean}`,
          cr: `les ${infCs}`,
        },
        ruleExplanation: `古法语任何动词不定式（${infClean}）皆可加冠词名词化并按第一类阳性名词变格（CS: li ${infCs}, CR: ${formatMascArtSgCr(infClean)}）。${w.caseNote || ''} · 词源：${w.latinOrigin}。例句：« ${w.exampleOldFrench} »（${w.exampleChinese}）`,
      });
      continue;
    }

    // 6. Invariables (Adverbs, Prepositions, Conjunctions, Pronouns, Numerals, Forclusifs)
    results.push({
      wordLemma: w.wordOldFrench,
      type: w.pos,
      gender: 'Invariable / 语法功能词',
      meaning: w.chinese,
      modernFrench: w.modernFrench,
      singular: {
        cs: `${w.wordOldFrench} (无格位屈折)`,
        cr: `${w.wordOldFrench} (无格位屈折)`,
      },
      plural: {
        cs: `${w.wordOldFrench} (无格位屈折)`,
        cr: `${w.wordOldFrench} (无格位屈折)`,
      },
      ruleExplanation: `${w.caseNote || '不可变词，在句中不随主格/宾格发生词尾屈折变化'} · 词源：${w.latinOrigin}。例句：« ${w.exampleOldFrench} »（${w.exampleChinese}）`,
    });
  }

  return results;
}

/**
 * Builds the complete Conjugation Database covering all curated verbs + all 5,000 lexicon words
 */
export function buildFullConjugationDatabase(): ConjugationTable[] {
  const results: ConjugationTable[] = [...BASE_CONJUGATIONS];
  const seenInfinitives = new Set<string>(
    BASE_CONJUGATIONS.map((c) => c.infinitive.toLowerCase().trim())
  );

  const verbSeedMap = new Map<string, VerbSeed>();
  for (const v of VERB_SEEDS) {
    verbSeedMap.set(v.inf.toLowerCase().trim(), v);
  }

  // First add all base VERB_SEEDS not yet in BASE_CONJUGATIONS
  for (const v of VERB_SEEDS) {
    const key = v.inf.toLowerCase().trim();
    if (seenInfinitives.has(key)) continue;
    seenInfinitives.add(key);

    results.push(
      buildConjugationFromSeed(
        v.inf,
        v.stem,
        v.p3s,
        v.pp,
        v.group,
        v.zh,
        v.fr,
        v.lat
      )
    );
  }

  // Now ensure every single word in the 5,000-word FLASHCARD_WORDS is represented in CONJUGATION_DATABASE
  for (const w of FLASHCARD_WORDS) {
    const key = w.wordOldFrench.toLowerCase().trim();
    if (seenInfinitives.has(key)) continue;
    seenInfinitives.add(key);

    // Case A: Prefixed verb (fc-prefv-*)
    if (w.id.startsWith('fc-prefv-')) {
      const p3sMatch = w.caseNote?.match(/现3单:\s*([^|]+)/);
      const p3s = p3sMatch ? p3sMatch[1].trim() : `${w.wordOldFrench.replace(/er$|ir$|re$|oir$/, '')}e`;
      const stem = w.wordOldFrench.replace(/(?:ier|er|ir|re|oir)$/i, '') || w.wordOldFrench;
      const pp = w.wordOldFrench.endsWith('ir')
        ? `${stem}i`
        : w.wordOldFrench.endsWith('er')
        ? `${stem}é`
        : `${stem}u`;
      results.push(
        buildConjugationFromSeed(
          w.wordOldFrench,
          stem,
          p3s,
          pp,
          w.pos,
          w.chinese,
          w.modernFrench,
          w.latinOrigin,
          `${w.caseNote || ''} · 例句：« ${w.exampleOldFrench} »（${w.exampleChinese}）`
        )
      );
      continue;
    }

    // Case B: Handcrafted verbs (cuidier, chaloir, estovoir, etc.) or other Verbs
    if (w.pos.includes('Verbe')) {
      const baseVerb = verbSeedMap.get(w.lemma.toLowerCase().trim());
      if (baseVerb) {
        results.push(
          buildConjugationFromSeed(
            `${w.wordOldFrench} (原型: ${baseVerb.inf})`,
            baseVerb.stem,
            baseVerb.p3s,
            baseVerb.pp,
            w.pos,
            w.chinese,
            w.modernFrench,
            w.latinOrigin,
            `${w.caseNote || ''} · 例句：« ${w.exampleOldFrench} »（${w.exampleChinese}）`
          )
        );
      } else {
        const stem = w.lemma.replace(/(?:ier|er|ir|re|oir)$/i, '') || w.lemma;
        results.push(
          buildConjugationFromSeed(
            w.wordOldFrench,
            stem,
            `${stem}e`,
            `${stem}é`,
            w.pos,
            w.chinese,
            w.modernFrench,
            w.latinOrigin,
            `${w.caseNote || ''} · 例句：« ${w.exampleOldFrench} »（${w.exampleChinese}）`
          )
        );
      }
      continue;
    }

    // Case C: Deverbal entries (substantivized infinitives, -ement, -ance, -ere/-eor, -ant, -able, fem-pp)
    if (
      w.id.startsWith('fc-subst-inf-') ||
      w.id.startsWith('fc-dev-') ||
      w.id.startsWith('fc-part-pres-') ||
      w.id.startsWith('fc-fem-pp-') ||
      w.id.startsWith('fc-vadj-able-')
    ) {
      const rootInfMatch = w.latinOrigin.match(/< ([a-zA-Zéèêëîïôùûü]+)/);
      const candidateInf = rootInfMatch ? rootInfMatch[1].toLowerCase() : w.lemma.toLowerCase();
      const baseVerb = verbSeedMap.get(candidateInf);
      if (baseVerb) {
        results.push(
          buildConjugationFromSeed(
            `${w.wordOldFrench} (源动词: ${baseVerb.inf})`,
            baseVerb.stem,
            baseVerb.p3s,
            baseVerb.pp,
            `${w.pos} · 源动词变位 (${baseVerb.group})`,
            `${w.chinese} [源动词: ${baseVerb.zh}]`,
            `${w.modernFrench} (verbe: ${baseVerb.fr})`,
            w.latinOrigin,
            `词条 ${w.wordOldFrench} 派生自动词 ${baseVerb.inf}。以下为其源动词 ${baseVerb.inf} 的完整七大时态变位表。${w.caseNote || ''}`
          )
        );
        continue;
      }
    }

    // Case D: Nouns, Adjectives, Adverbs, and Invariables from the 5,000-word lexicon
    // Provide their copular / verbal predicate conjugation (estre / faire + word) so all 5,000 words are searchable in Conjugation Explorer
    const parts = w.wordOldFrench.split('/').map((s) => s.trim());
    const csForm = parts[0];
    const crForm = parts[1] || parts[0];
    const isNominalOrAdj = w.pos.includes('Nom') || w.pos.includes('Adj');

    results.push({
      infinitive: w.wordOldFrench,
      group: `${w.pos} · 系表/谓语动词搭配变位`,
      meaning: w.chinese,
      modernFrench: w.modernFrench,
      latinOrigin: w.latinOrigin,
      participePresent: isNominalOrAdj ? `estant ${csForm}` : `faisant ${crForm}`,
      participePasse: isNominalOrAdj ? `esté ${csForm}` : `fait ${crForm}`,
      tenses: {
        present: {
          p1s: `sui ${csForm}`,
          p2s: `ies ${csForm}`,
          p3s: `est ${csForm}`,
          p1p: `somes ${crForm}`,
          p2p: `estes ${crForm}`,
          p3p: `sont ${crForm}`,
        },
        imparfait: {
          p1s: `ere / estoie ${csForm}`,
          p2s: `eres / estoies ${csForm}`,
          p3s: `ert / estoit ${csForm}`,
          p1p: `estiiens ${crForm}`,
          p2p: `estiiez ${crForm}`,
          p3p: `erent / estoient ${crForm}`,
        },
        passeSimple: {
          p1s: `fui ${csForm}`,
          p2s: `fus ${csForm}`,
          p3s: `fu (fut) ${csForm}`,
          p1p: `fumes ${crForm}`,
          p2p: `fustes ${crForm}`,
          p3p: `furent ${crForm}`,
        },
        futur: {
          p1s: `serai / ier ${csForm}`,
          p2s: `seras / iers ${csForm}`,
          p3s: `sera / iert ${csForm}`,
          p1p: `serons ${crForm}`,
          p2p: `seroiz ${crForm}`,
          p3p: `seront / ierent ${crForm}`,
        },
        conditionnel: {
          p1s: `seroie ${csForm}`,
          p2s: `seroies ${csForm}`,
          p3s: `seroit ${csForm}`,
          p1p: `seriiens ${crForm}`,
          p2p: `seriiez ${crForm}`,
          p3p: `seroient ${crForm}`,
        },
        subjonctifPresent: {
          p1s: `soie ${csForm}`,
          p2s: `soies ${csForm}`,
          p3s: `soit ${csForm}`,
          p1p: `soiiens ${crForm}`,
          p2p: `soiiez ${crForm}`,
          p3p: `soient ${crForm}`,
        },
        subjonctifImparfait: {
          p1s: `fusse ${csForm}`,
          p2s: `fusses ${csForm}`,
          p3s: `fust ${csForm}`,
          p1p: `fussiens ${crForm}`,
          p2p: `fussiez ${crForm}`,
          p3p: `fussent ${crForm}`,
        },
      },
      ruleExplanation: `词库词条「${w.wordOldFrench}」（${w.chinese}）属 ${w.pos}。在古法语系动词 estre 构成的谓语结构中，表语（Attribut du sujet）严格遵循主格（Cas Sujet）配合：单数主语搭配单数主格形态（est ${csForm}），复数主语搭配复数主格形态（sont ${crForm}）。${w.caseNote || ''} · 例句：« ${w.exampleOldFrench} »`,
    });
  }

  return results;
}
