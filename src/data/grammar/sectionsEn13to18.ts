/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection } from '../grammarCodex';

export const SECTIONS_EN_13_TO_18: GrammarSection[] = [
  // Unit 13
  {
    id: 'helix-unit-13',
    unitNumber: 13,
    title: 'Unit 13: Preposition & Pronoun Contractions (Contraction), Vowel Elision (Élision) & Hiatus',
    subtitle: 'Laurence Hélix Textbook Lesson 13 · Original Text: Guillaume de Lorris, Le Roman de la Rose',
    tag: 'Phonetic Contraction · Manuscript Orthography',
    icon: 'Layers',
    summary:
      'Analyze the historical evolution of contractions between the three core prepositions (a, de, en) and masculine definite articles (le, les), the vocalization of preconsonantal lateral l to u (al > au, del > du, el > ou), and optional vowel elision in verse.',
    content: [
      {
        heading: 'I. Contraction Matrix of the Three Core Prepositions (a, de, en) + Definite Articles',
        body: [
          'When the prepositions **a** (to/at), **de** (of/from), and **en** (in/into) precede a **consonant-initial** masculine singular noun (article "le") or any masculine/feminine plural noun (article "les"), phonetic contraction is obligatory—undergoing the crucial 12th-century vocalization of lateral l to u:',
          '1. **Masculine Singular (Preposition + le + Consonant-Initial Noun)**:',
          '   • **a + le ➔ al (11th C.) ➔ au (12th–13th C.)** (e.g., al roi > au roi; however, before a vowel-initial noun, no contraction occurs and the article elides to **a l’**, e.g., a l’empereor, a l’enfant!).',
          '   • **de + le ➔ del (11th C.) ➔ deu ➔ du (12th–13th C.)** (e.g., del chastel > du chastel; before a vowel: **de l’**, e.g., de l’or).',
          '   • **en + le ➔ enl ➔ el (11th–12th C.) ➔ eu ➔ ou / u (13th C.)**! ([Crucial Exam Point]: When reading Old French manuscripts, 90% of occurrences of **el** or **ou** before a noun represent **en + le** "in the", e.g., el bois / ou bois = in the woods, el palais = in the palace, el monde = in the world! Never confuse "ou < en+le" with the conjunction "ou" = or, or the adverb "ou" = where!).',
          '2. **Masculine & Feminine Plural (Preposition + les + Any Noun)**:',
          '   • **a + les ➔ als ➔ as (classical standard form) / aus / aux** (e.g., as chevaliers = to the knights, as dames = to the ladies).',
          '   • **de + les ➔ dels ➔ des** (e.g., des barons, des portes).',
          '   • **en + les ➔ els ➔ es** (e.g., es chambres = in the chambers, es mains = in the hands; preserved in Modern French academic titles such as "docteur **ès** lettres"!).',
        ],
        rules: [
          {
            rule: 'Il entra el (en+le) vergier et vit les flors es (en+les) arbres.',
            example:
              'He entered into the orchard ("el" = dans le) and saw the flowers in the trees ("es" = dans les).',
            modern: 'Il entra dans le verger et vit les fleurs dans les arbres.',
          },
          {
            rule: 'Li rois parla as (a+les) barons et a l’arcevesque (uncontracted before vowel).',
            example:
              'Before a consonant, a + les contracts to "as"; before a vowel, a + le elides to "a l’".',
            modern: 'Le roi parla aux barons et à l’archevêque.',
          },
        ],
      },
      {
        heading: 'II. Pronominal Enclisis (Enclise) & Optional Vowel Elision (Élision facultative)',
        body: [
          '• **Complete Checklist of Pronominal Enclisis (Enclise)**:',
          '  In addition to **nel** (ne+le), **nes** (ne+les), **jel** (je+le), **sil** (si+le), **sel** (se+le), **quel** (que+le), and **quil** (qui+le) covered in Unit 6, pay special attention to contractions with the adverbial pronoun **en**: **nen** (ne+en), **sin** (si+en), **jin** (je+en), **quin** (qui+en)!',
          '• **Optional Vowel Elision (Élision facultative)**:',
          '  In Old French octosyllabic or decasyllabic verse, to achieve the exact syllable count, the following monosyllables before a vowel **may either elide OR retain their full vowel in hiatus**:',
          '  1. The masculine nominative plural definite article **li** (li ami), as well as regional feminine singular CS "li".',
          '  2. The conjunctions **se** ("if": s’il vient or se il vient), **que** (qu’il or que il), and **ne** ("nor": ne il ne ele).',
          '  3. The nominative relative pronoun **qui** in principle **NEVER elides** in classical Old French (qui aime); if you encounter "qu’aime", it is invariably the oblique relative "que" or the conjunction "que"!',
        ],
        rules: [
          {
            rule: 'Se il (2 syllables) vient, jel (je+le) verrai ; s’il (1 syllable) demeure, nel (ne+le) verrai.',
            example:
              'A poet may freely choose unelided "se il" (2 syllables in hiatus) or elided "s’il" (1 syllable) to fit the meter.',
            modern: 'S’il vient, je le verrai ; s’il reste, je ne le verrai pas.',
          },
        ],
      },
    ],
  },

  // Unit 14
  {
    id: 'helix-unit-14',
    unitNumber: 14,
    title: 'Unit 14: Invariable Word Classes (Adverb Formation, Spatio-Temporal Prepositions & Corrective "ainz")',
    subtitle: 'Laurence Hélix Textbook Lesson 14 · Original Text: Christine de Pizan, La Cité des Dames',
    tag: 'Invariables · Adverbs, Prepositions & Conjunctions',
    icon: 'Feather',
    summary:
      'Master the three mechanisms of Old French adverb formation (-ment etymological rule, adverbial -s, and neuter adjectives used adverbially), high-frequency spatial/temporal prepositions, and the strict opposition between adversative "mais" and corrective "ainz".',
    content: [
      {
        heading: 'I. Two Formation Rules for "-ment" Adverbs of Manner & the "Adverbial -s (s adverbial)"',
        body: [
          '1. **The Feminine Etymological Law of the Suffix `-ment`**:',
          '   The suffix -ment derives from the Latin ablative singular **mente** of the feminine 3rd-declension noun *mens, mentis* (meaning "with a ... mind / spirit / manner"). Because *mente* is feminine, the adjective modifying it MUST stand in the **feminine singular form**:',
          '   • **Class I Adjectives (feminine in -e)**: Must first take the feminine -e before adding -ment! E.g., bon → **bonement**; bel → **belement**; douz → **doucement**; fier → **fierement**; premier → **premierement**.',
          '   • **Class II Epicene Adjectives (no -e in the feminine, including -ant/-ent participles)**: Because their feminine singular has no -e, -ment attaches directly to the stem with **NO medial -e-**!',
          '     - grant → **granment / forment** (greatly, mightily < fort+ment);',
          '     - brief → **briement** (briefly); grief → **griement** (grievously, heavily);',
          '     - leal → **lealment / loiaument** (loyally); courtois → **courtoisement** (late analogical e);',
          '     - vaillant + ment → **vaillanment**; ardant + ment → **ardanment**; diligent + ment → **diligenment**!',
          '2. **The Adverbial Suffix `-s` (Le -s adverbial)**:',
          '   Modeled on Latin adverbs ending in -s (plus, magis, foris, prius), Old French frequently attaches a characteristic **-s** (or -z) to adverbs and prepositions: e.g., **onques** (ever/never), **lors** (then, vs. possessive lor), **or / ore / ores** (now), **sempres** (always/immediately), **volontiers** (willingly), **certes** (certainly), **a envis** (unwillingly).',
          '3. **Neuter Singular Adjectives Used Directly as Adverbs**: haut ("parler haut" to speak aloud), bas (softly), clers / cler ("veoir cler" to see clearly), droit ("aler droit" to go straight), soef (gently), chier ("vendre chier" to sell dearly).',
        ],
        rules: [
          {
            rule: 'Il la reçut doucement (Type I) et l’ama loiaument (Type II) et forment (fort+ment).',
            example:
              'Class I adjectives add -e-ment ("doucement"); Class II epicene adjectives add -ment directly without -e- ("loiaument", "forment").',
            modern: 'Il la reçut doucement et l’aima loyalement et fortement.',
          },
        ],
      },
      {
        heading: 'II. High-Frequency Spatio-Temporal Adverbs, Prepositions & Conjunctions ("mais" vs. "ainz")',
        body: [
          '• **Essential Old French Temporal & Spatial Adverbs**:',
          '  - **or / ore / ores** (now = maintenant) vs. **lors / adonc / adont** (then, at that time = alors);',
          '  - **hui** (today < hodie), **anuit** (tonight / last night), **main / demain** (early morning / tomorrow), **ier** (yesterday), **jadis / antan** (formerly / yesteryear);',
          '  - **tost / tantost / errant / isnelement / maintenant** (Caution: in medieval French **maintenant** means "immediately, at once = aussitôt", NOT "now"!);',
          '  - **ci / ici** (here) vs. **la / iluec / ilueques** (there); **ça** (hither) vs. **la** (thither); **ceans** (inside this house = céans) vs. **leans** (inside that place); **sus / amont** (upward) vs. **jus / aval** (downward).',
          '  - **mar** (< mala hora "in an evil hour, to one’s misfortune, in vain") vs. **buen / buer** (< bona hora "in a lucky hour,fortunately")!',
          '• **Core Prepositions**: **lez / delez** (beside, next to < latus); **tresqu’a / jusqu’a** (all the way to, until); **atot / od** (together with = avec); **fors** (except, outside of = sauf, hors de); **endroit** (concerning, opposite); **aval** (down along); **parmi** (right through the middle of).',
          '• **Strict Opposition Between Adversative `mais` and Corrective `ainz`**:',
          '  - **mais** (< magis): General adversative or restrictive modification ("but, however").',
          '  - **ainz (ains / ainçois)** (< *antius): Used exclusively **after a negative clause** to reject the negated proposition and assert the exact opposite, meaning **"no, on the contrary; rather (mais au contraire, bien plutôt)"** (equivalent to German *sondern* or Spanish *sino*)! (Note: as a preposition or temporal adverb, "ainz" means "before = avant").',
        ],
        rules: [
          {
            rule: 'Il ne s’en fui mie, ainz (corrective conjunction) tret l’espee et vint maintenant (immediately) vers lui.',
            example:
              'After a negative clause, "ainz" means "on the contrary, rather"; in Old French, "maintenant" means "immediately, at once"!',
            modern: 'Il ne s’enfuit pas, mais au contraire tira l’épée et vint aussitôt vers lui.',
          },
          {
            rule: 'Mar (in an evil hour) vi onques ceste cité ; buer (under a lucky star) fustes nez, biau sire !',
            example:
              '"mar" expresses misfortune or futility ("to my ruin"); "buer" expresses good fortune ("in a blessed hour").',
            modern:
              'C’est pour mon malheur que j’ai jamais vu cette cité ; vous êtes né sous une bonne étoile, beau sire !',
          },
        ],
      },
    ],
  },

  // Unit 15
  {
    id: 'helix-unit-15',
    unitNumber: 15,
    title: 'Unit 15: Complex Clause Syntax, Substantivized Infinitives, Prolepsis & Mixed Discourse',
    subtitle: 'Laurence Hélix Textbook Lesson 15 · Original Text: La Farce de Maître Pathelin (15th-Century Farce)',
    tag: 'Syntactic Topics · Infinitives & Discourse Structure',
    icon: 'Cpu',
    summary:
      'Master the vivid syntactic constructions of Old French: full substantivization and two-case declension of verb infinitives ("li boivres et li mangiers"), proleptic extraction of subordinate subjects (Prolepse), and seamless switching between direct and indirect speech.',
    content: [
      {
        heading: 'I. Full Substantivization of Verb Infinitives (Infinitif substantivé) & Two-Case Declension',
        body: [
          'In Modern French, only a handful of infinitives have fossilized into nouns (le dîner, le sourire, le pouvoir). In Old French, by contrast, **ANY verb infinitive can at any moment take an article, demonstrative, or possessive determiner, turning into a regular Type I masculine noun that inflects for both cases (adding -s in Sg. CS) while simultaneously retaining its verbal capacity to take adverbials or preposed tonic object pronouns**!',
          '• **Inflected as a Type I Masculine Noun**:',
          '  - Nominative Singular (CS sg): **li boivres** (drinking), **li mangiers** (eating), **li dormirs** (sleeping), **li alers** (going/departure), **li revenirs** (returning), **li plorers** (weeping).',
          '  - Oblique Singular (CR sg): **le boivre, le mangier, le dormir, l’aler, le revenir, le plorer** (extremely common after prepositions: "al lever" at rising/sunrise, "al couchier" at bedtime/sunset, "del retourner" concerning the return, "sanz demorer" without delay).',
          '• **Retention of Verbal Governance**: Between the determiner and the substantivized infinitive, Old French can insert a stressed object pronoun, possessive, or subject/object noun! E.g., **al soleil levant / au partir de la cort / por le mien cors desfendre** (in order to defend my own body/self).',
        ],
        rules: [
          {
            rule: 'Li trop plorers (CS sg) ne vaut rien ; pensons del vengier (CR sg).',
            example:
              'Excessive weeping avails nothing (infinitive "plorer" takes CS -s as subject); let us think of avenging ("del vengier" as prepositional object).',
            modern: 'Trop pleurer ne sert à rien ; pensons à nous venger.',
          },
          {
            rule: 'Al passer (CR) la porte, il vit son ami.',
            example:
              'The substantivized infinitive "al passer" simultaneously governs its direct object "la porte" (upon passing through the gate).',
            modern: 'Au moment de franchir la porte, il vit son ami.',
          },
        ],
      },
      {
        heading: 'II. Proleptic Focus Extraction (Prolepse), Mixed Discourse & Factitive Constructions',
        body: [
          '1. **Proleptic Extraction of the Subordinate Subject (Prolepse / Anticipation)**:',
          '   Main verbs of perception, cognition, or emotion (veoir, savoir, oïr, redouter) frequently extract the subject of the following "que" clause ahead of time, making it the direct object (CR) of the main verb and then resuming it with a subject pronoun inside the subordinate clause:',
          '   Example: *Il vit **le chevalier** (CR) qu’**il** (CS) estoit bleciez.* (Literally: "He saw the knight that he was wounded" = He saw that the knight was wounded).',
          '2. **Seamless Switching Between Direct & Indirect Speech (Discours mixte)**:',
          '   To heighten dramatic immediacy, medieval narrative frequently begins a sentence in indirect speech introduced by *dist que* and switches mid-sentence without warning into 1st-person direct speech; or conversely, quotes direct speech immediately after the conjunction *que* (Que Recitativum)!',
          '3. **Agent Complement in Factitive `faire + Infinitive` Constructions**: When the dependent infinitive has its own direct object, the logical subject (agent) of the infinitive can be introduced in Old French by either **a** or **par**, and the infinitive itself often carries passive force: *Il fist trenchier la teste **au traïtor*** (He had the traitor’s head cut off / had the traitor beheaded).',
        ],
        rules: [
          {
            rule: 'Li rois jura son sairement que « ja mais n’entrerai en ma cité ! »',
            example:
              'Direct 1st-person speech follows immediately after the conjunction "que" (Discours mixte), creating vivid epic immediacy.',
            modern: 'Le roi jura par son serment : « Jamais plus je n’entrerai dans ma cité ! »',
          },
        ],
      },
    ],
  },

  // Unit 16
  {
    id: 'helix-unit-16',
    unitNumber: 16,
    title: 'Unit 16: Participle & Gerund System (Present Participle Declension, Gerund Syntax & Past Participle Agreement)',
    subtitle: 'Laurence Hélix Textbook Lesson 16 · Original Text: Eustache Deschamps, Ballades',
    tag: 'Non-Finite Verbs · Participles & Gerunds',
    icon: 'Columns',
    summary:
      'Clearly distinguish the declinable present participle from the invariable gerund (both ending in -ant), and master the Old French progressive periphrasis "aler + gerund" alongside gender, number, and case agreement of the past participle.',
    content: [
      {
        heading: 'I. Morphological & Syntactic Divide Between Present Participle (Participe présent) and Gerund (Gérondif)',
        body: [
          'In Classical Latin, the present participle (*cantans, cantantis*) and the ablative gerund (*cantando*) had distinct endings; in Old French, however, regular sound change caused both to converge on **-ant**! Yet their syntactic behavior remains sharply distinct:',
          '1. **Present Participle (Participe présent < -antem) — Declinable Class II Epicene Adjective**:',
          '   • Functioning as a Class II epicene adjective, it **MUST inflect for case and number in agreement with the noun it modifies** (taking -s → **-anz** in both masculine and feminine Sg. CS, e.g., *li chevaliers vaillanz*, *une dame plaisanz*, while NEVER adding -e in the feminine singular!).',
          '   • Idiomatic Passive / Absolute Sense: Several Old French -ant participles carry passive or absolute force in fixed legal/witness formulas, such as **voiant toz** (in the sight of all / while all looked on), **oiant toz** (in the hearing of all), **mon escient** (to my knowledge).',
          '2. **Gerund (Gérondif < -ando) — Invariable Action Adverbial**:',
          '   • Introduced not only by **en** (en chantant, en plorant, en riant), but also by the prepositions **a, de, par, por, sanz**, or used without any preposition!',
          '   • **Core Durative/Progressive Periphrasis `aler + Gerund (-ant)`**: Old French constantly combines the conjugated verb **aler (vois, vait, aloit, ala) + gerund** to express an ongoing, continuous action (Aspect duratif / progressif)! E.g., **Il vait plorant** (He goes along weeping / He is weeping), **Cil vont chantant** (They go singing). Here the -ant form is a gerund and NEVER takes -s!',
        ],
        rules: [
          {
            rule: 'Li chevaliers vait plorant (invariable gerund) ; il vit une espee flamboianz (participle CS sg).',
            example:
              '"vait plorant" is the progressive periphrasis "aler + gerund" (no -z); "flamboianz" is a present participle adjective taking -z.',
            modern: 'Le chevalier va en pleurant (pleure) ; il vit une épée flamboyante.',
          },
          {
            rule: 'Voiant (absolute participial construction) toz ses barons, li rois li pardona.',
            example:
              '"Voiant toz ses barons" = In full view of all his barons (with all his barons witnessing).',
            modern: 'Au vu de tous ses barons, le roi lui pardonna.',
          },
        ],
      },
      {
        heading: 'II. Two-Case Declension of the Past Participle (Participe passé) & Compound Tense Agreement',
        body: [
          'Old French past participles are either weak (-é < -atum, -i < -itum, -u < -utum) or strong (fait, dit, mis, pris, mort, escrit, ouvert). Every past participle inflects in full for gender, number, and case exactly like a **Class I adjective (bons / bon / bone / bones)**!',
          '1. **Conjugated with Auxiliary `estre` (including ALL reflexive verbs such as se lever, s’en aler and intransitive verbs of state or motion such as venir, aler, morir, naistre, cheoir, entrer, issir)**:',
          '   The past participle functions as a **subject complement (predicate attribute)** and MUST agree with the subject in **gender, number, and case (Nominative CS!)**:',
          '   • Masculine Singular Subject: *Il est **venuz*** (takes nominative -z!); *Il s’est **levez*** (reflexive subject in CS!).',
          '   • Masculine Plural Subject: *Il sont **venu*** (nominative plural has NO -s!)! *Il se sont **levé***.',
          '   • Feminine Subject: *Ele est **venue*** / *Eles sont **venues***.',
          '2. **Conjugated with Auxiliary `avoir`**:',
          '   In early and classical Old French, because *avoir* still retained its possessive nuance ("to hold an object in a given state"), **whether the direct object (COD) precedes OR follows the verb, the past participle regularly agrees in gender, number, and case (Oblique CR!) with the direct object** (*Il a **prise** la cité* or *La cité qu’il a **prise***); from the 13th century onward, when the direct object follows the verb, the past participle increasingly remains unmarked neuter singular (*Il a pris la cité*).',
        ],
        rules: [
          {
            rule: 'Li chevaliers (CS sg) est venuz ; li chevalier (CS pl) sont venu.',
            example:
              'Iron law of "estre" agreement: Masculine Sg. CS adds -z ("venuz"); Masculine Pl. CS has NO -s ("venu")!',
            modern: 'Le chevalier est venu ; les chevaliers sont venus.',
          },
          {
            rule: 'Il a ceinte (CR F sg) l’espee et laciez (CR M pl) les esperons.',
            example:
              'With auxiliary "avoir", the past participles agree directly with the postposed direct objects "l’espee" (Fem. Sg.) and "les esperons" (Masc. Pl. CR).',
            modern: 'Il a ceint l’épée et lacé les éperons.',
          },
        ],
      },
    ],
  },

  // Unit 17
  {
    id: 'helix-unit-17',
    unitNumber: 17,
    title: 'Unit 17: Historical Lexicology, Semantic Evolution & the Complete Top 20 Faux-Amis (False Friends)',
    subtitle: 'Laurence Hélix Textbook Lesson 17 · Original Text: François Villon, Le Grand Testament',
    tag: 'Historical Lexicology · Complete False Friends Table',
    icon: 'Search',
    summary:
      'Conquer the deadliest lexical traps in translating Old French: understand semantic narrowing, broadening, and amelioration/pejoration, and memorize all 20 high-frequency medieval-to-modern "Faux-Amis (False Friends)" from the textbook.',
    content: [
      {
        heading: 'I. Master Table of the Top 20 Old French "Faux-Amis" (Part I: Psychology & Human Condition)',
        body: [
          'Many Old French words are spelled identically or almost identically to Modern French words, yet carry radically different core meanings in medieval texts—never guess by modern intuition:',
          '1. **`talent / talant`** (< Latin figurative sense "inclination of the balance"): In the Middle Ages, means **"desire, wish, will, inclination, mood (désir, volonté, envie, humeur)"**—NEVER "artistic talent"! E.g., *avoir talent de* (to desire to do something), *mal talent* (anger, resentment, ill-will).',
          '2. **`chaitif / chetif`** (< captivum "prisoner of war"): Means **"captive prisoner; wretched, unfortunate, miserable person (prisonnier, malheureux, infortuné)"**, NOT modern "puny/scrawny".',
          '3. **`ennui / anoi`** (< in odio "in hatred"): An intensely forceful word in Old French meaning **"deep anguish, torment, humiliation, affliction (grand tourment, douleur, affliction)"**, NEVER modern "boredom"! The verb *anoier* = to torment, grieve.',
          '4. **`travail`** (< *tripalium, an instrument of torture): Means **"cruel suffering, physical torment, agony, labor pains (souffrance, tourment, peine cruelle)"**; the verb *travaillier* = to torture, torment, exhaust.',
          '5. **`grief`** (< grevem): Adjective "heavy, painful, grievous (lourd, pénible)"; noun "harm, suffering, affliction".',
          '6. **`dangier`** (< *dominiarium "seigneurial dominion"): Its core medieval meaning is **"feudal dominion, mastery, absolute power, haughty refusal (pouvoir, domination, puissance, refus)"**! E.g., *estre en son dangier* (to be at someone’s mercy / under their control), *sanz dangier* (without resistance, freely).',
          '7. **`doter / douter`** (< dubitare): Its primary medieval meaning is **"to fear, dread, hold in awe (craindre, redouter)"**, and only secondarily "to doubt"! *dotance* = fear, dread.',
          '8. **`cuidier`** (< cogitare): Means **"to think, believe, imagine, presume (penser, croire à tort, s’imaginer)"**, often implying a mistaken subjective belief ("to fancy wrongly that...").',
          '9. **`esperer`** (< sperare): In medieval French, a neutral verb meaning **"to expect, await, anticipate good or ill (attendre, s’attendre à)"**, not restricted to positive hope.',
          '10. **`marri`** (participial adjective): Means **"grief-stricken, sorrowful, bewildered, wrathful (affligé, désolé)"**—completely unrelated to *marié* (married)!',
        ],
        rules: [
          {
            rule: 'Li chaitis (captive/wretch) sofri grant travail (torment) et grant anoi (anguish).',
            example:
              'Three classic faux-amis in one sentence: "chaitis" (wretched captive) + "travail" (cruel suffering) + "anoi" (deep anguish).',
            modern: 'Le malheureux captif souffrit une grande peine et un grand tourment.',
          },
          {
            rule: 'Il le fist par mal talent (wrath/ill-will) ; nus ne doute (fears) la mort.',
            example:
              '"mal talent" = wrath / ill-will; "douter" = to fear, dread.',
            modern: 'Il le fit par colère ; nul ne craint la mort.',
          },
        ],
      },
      {
        heading: 'II. Master Table of the Top 20 Old French "Faux-Amis" (Part II: Intellect & Feudal Society)',
        body: [
          '11. **`engien / engin`** (< ingenium): Means **"mind, native wit, cleverness, ruse, stratagem, siege engine (esprit, intelligence, ruse, artifice)"**.',
          '12. **`cointe`** (< cognitum): Means **"wise, prudent, accomplished, elegant, finely arrayed (avisé, élégant, gracieux)"**.',
          '13. **`nice`** (< nescium "ignorant"): Means **"foolish, naive, simple-minded, ignorant (ignorant, sot, naïf)"** (e.g., young Perceval in *Le Conte du Graal* is called *li vaslez nices* "the naive lad"; English borrowed *nice* from Old French and gradually ameliorated its sense).',
          '14. **`vilain`** (< villanum "manor peasant"): Originally "non-noble peasant", evolving in courtly literature into a moral pejorative **"boorish, base, ignoble churl (rustre, ignoble)"**, forming the central medieval ethical opposition against **cortois / franc / gentil** (courtly, noble-born)!',
          '15. **`franc`** (adjective): Its primary medieval sense is **"of noble birth, freeborn (noble, de naissance libre)"**, from which "generous, frank, sincere" later derived.',
          '16. **`garir / guerir`** (< Frankish *warjan "to ward/protect"): Primarily means **"to protect, save, preserve from peril, defend (protéger, sauver, préserver)"**, later narrowing to medical "to heal".',
          '17. **`navrer`** (verb): In medieval texts, ALWAYS means **"to wound physically and severely with a weapon (blesser grièvement par les armes)"**, NEVER modern "to sadden / say sorry"! *un chevalier navré a mort* = a mortally wounded knight.',
          '18. **`viande`** (< vivenda "that which sustains life"): Denotes **"any food, provisions, sustenance (toute nourriture, aliment)"**, narrowing to "meat" only after the 15th century (medieval French uses **char < carnem** for meat).',
          '19. **`ostel / hostel`** (< hospitale): Means **"dwelling, manor house, lodging, hospitality (demeure, logis, accueil)"**.',
          '20. **`bacheler`**, **`vaslet`**, **`meschine`**, **`garçon`**: *bacheler* = young knight aspirant not yet holding a fief; *vaslet* = young nobleman / squire; *meschine* = young maiden / waiting-maid; *garçon* = camp groom, low-ranking varlet.',
        ],
        rules: [
          {
            rule: 'Li francs (noble) chevaliers fu griement navrez (severely wounded) ; Dieus le garisse (save/protect) !',
            example:
              '"franc" = noble-born; "navrez" = physically wounded in battle; "garisse" = may He save and protect!',
            modern: 'Le noble chevalier fut grièvement blessé ; que Dieu le sauve !',
          },
        ],
      },
    ],
  },

  // Unit 18
  {
    id: 'helix-unit-18',
    unitNumber: 18,
    title: 'Unit 18: Core Laws of Historical Phonetics & Dialectology of the Four Major Langue d’Oïl Scriptae',
    subtitle:
      'Laurence Hélix Textbook Lesson 18 · Original Texts: La Vie de Saint Alexis & Les Serments de Strasbourg (842)',
    tag: 'Historical Phonology · Dialect Identification',
    icon: 'BookOpen',
    summary:
      'Survey the five foundational phonetic laws from Vulgar Latin to Old French (spontaneous diphthongization of stressed open vowels, palatalization, Bartsch’s Law, lateral vocalization, and intervocalic lenition), and master the diagnostic touchstones for identifying Picard, Anglo-Norman, Champenois, and Francien manuscripts.',
    content: [
      {
        heading: 'I. Five Foundational Laws of Historical Phonetics from Latin to Old French (Lois phonétiques)',
        body: [
          '1. **Spontaneous Diphthongization of Stressed Vowels in Open Syllables (Diphtongaison romane et française)**:',
          '   When a Latin stressed vowel stands in an **open / free syllable (Syllabe ouverte / libre, ending in a vowel)**, it lengthens and breaks into a diphthong; when it stands in a **closed / blocked syllable (Syllabe fermée / entravée, ending in a consonant)**, the vowel remains undiphthongized!',
          '   • Short **ĕ [ɛ] ➔ ie**: *pĕ-dem* > **pié**; *fĕ-rum* > **fier**; *bĕ-ne* > **bien** (compare blocked syllable *fĕr-rum* > **fer**).',
          '   • Short **ŏ [ɔ] ➔ uo ➔ ue (> eu)**: *cŏr* > **cuer**; *nŏ-vum* > **nuef**; *bŏ-vem* > **buef** (compare blocked syllable *cŏr-pus* > **cors**).',
          '   • Long **ē / Short ĭ [e] ➔ ei ➔ oi**: *rē-gem* > **rei > roi**; *fĭ-dem* > **fei > foi**; *tē-la* > **teile > toile**.',
          '   • Long **ō / Short ŭ [o] ➔ ou ➔ eu**: *flō-rem* > **flor > fleur**; *hō-ram* > **ore > heure**; *sō-lum* > **seul**.',
          '   • Vowel **a ➔ e (or ai before a nasal)**: *mă-re* > **mer**; *pă-trem* > **pere**; *mă-num* > **main** (compare blocked syllable *păr-tem* > **part**).',
          '2. **Bartsch’s Law (Loi de Bartsch)**: When stressed **a** in an open syllable is immediately preceded by a **palatal consonant (ch, j, g, palatalized l/n, or yod)**, instead of becoming simple -e / -er, it raises to the diphthong **-ie / -ier**!',
          '   Examples: *ca-pum* > **chief** (head/leader, vs. *mare* > mer); *ca-rum* > **chier** (dear); *caballarium* > **chevalier**; *judicare* > **jugier**; *manducare* > **mangier**; *tractare* > **traitier**!',
          '3. **Lenition & Loss of Intervocalic Stops (Lénition et chute des consonnes intervocaliques)**: Latin dental stops t/d and velar stops c/g standing between two vowels first voiced into fricatives and then disappeared completely by the late 11th century (*vita* > *vida* > **vie**; *vedere* > **veeir > veoir**; *securum* > **seür > sûr**; *augustum* > **aost > août**).',
          '4. **Prosthetic e- Before Initial s + Consonant & Preconsonantal s Deletion (Prothèse vocalique)**: Latin words beginning with *sp-, st-, sc-* developed an initial prosthetic vowel *e-*, and by the late 12th century preconsonantal *s* fell silent (commemorated in Modern French by the circumflex accent ^): *spatha* > **espee (> épée)**; *scola* > **escole (> école)**; *stella* > **estoile (> étoile)**; *castellum* > **chastel (> château)**.',
        ],
        rules: [
          {
            rule: 'pĕdem (open syllable) → pié vs. fĕrrum (blocked syllable) → fer ; căpum (after palatal) → chief (Bartsch’s Law)',
            example:
              'Open vs. blocked syllable determines diphthongization; open stressed "a" after a palatal becomes "ie" by Bartsch’s Law (chief, chier, mangier).',
            modern: 'pied vs. fer ; chef, cher, manger',
          },
        ],
      },
      {
        heading: 'II. Diagnostic Guide to the Four Major Literary Dialects of Northern Old French (Langue d’oïl)',
        body: [
          'In the Middle Ages, northern Old French had no single standardized orthography; manuscripts exhibit distinct regional scribal traditions (Scriptae):',
          '1. **Picard Dialect (Picard — wealthy civic and dramatic centers of Arras, Amiens, Tournai in the north)**:',
          '   • **Trait A (Non-palatalization preserving hard k / g)**: Latin **c + a**, which palatalizes to **ch** in Francien, remains hard **c / k** in Picard! (e.g., **camp** = champ "field", **cat** = chat "cat", **canter** = chanter "to sing", **castel** = chastel "castle", **keval** = cheval "horse", **kier** = chier "dear"); conversely, Latin **c + e/i**, which becomes **c [ts]** in Francien, palatalizes to **ch [tʃ]** in Picard! (e.g., **chité** = cité "city", **chiel** = ciel "sky", **chi** = ci "here")!',
          '   • **Trait B (Articles & Pronouns)**: Both nominative and oblique feminine singular definite articles are frequently written **li / le** (e.g., *li dame, le maison* = la dame, la maison!); possessives simplify to **mi, ti, si**; relative pronouns and conjunctions are spelled **ki, ke**.',
          '2. **Norman & Anglo-Norman Dialects (Normand & Anglo-Normand — e.g., the Oxford Chanson de Roland, Marie de France)**:',
          '   • **Trait A**: The early diphthong **ei** is halted at the **ei** stage and does not evolve into Francien **oi** (e.g., **rei** = roi, **fei** = foi, **aveir** = avoir, **saveir** = savoir).',
          '   • **Trait B**: Stressed closed o raises and is spelled **u** (e.g., **pur** = por, **amur** = amor, **seignur** = seignor, **tut** = tot, **vus** = vos); the 1st-group imperfect indicative ends in **-out / -eve** (chantout).',
          '3. **Champenois & Eastern Dialects (Champenois — e.g., Chrétien de Troyes)**:',
          '   • Closest to central Francien (Île-de-France), together forming the direct matrix of Modern Standard French. Characteristic traits include writing `-iax` for `-aus` (*biax* = biaus, *oisiax* = oisiaus) and rich open-syllable triphthongization.',
        ],
        rules: [
          {
            rule: 'Picard: Li kemins ki maine au castel et a la chité.',
            example:
              'Diagnostic Picard markers: "kemin" (chemin), "ki" (qui), "castel" (chastel), "chité" (cité).',
            modern: 'Le chemin qui mène au château et à la cité.',
          },
          {
            rule: 'Anglo-Norman: Li reis ad grant amur pur sun seignur.',
            example:
              'Diagnostic Anglo-Norman markers: "reis" (ei does not shift to oi), "amur / pur / sun / seignur" (closed o spelled u), "ad" (retains final dental).',
            modern: 'Le roi a un grand amour pour son seigneur.',
          },
        ],
      },
    ],
  },
];
