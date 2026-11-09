/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection } from '../grammarCodex';

export const SECTIONS_EN_7_TO_12: GrammarSection[] = [
  // Unit 7
  {
    id: 'helix-unit-7',
    unitNumber: 7,
    title: 'Unit 7: Present Indicative, Personal Endings & Stem Vowel Alternation (Apophonie)',
    subtitle:
      'Laurence Hélix Textbook Lesson 7 · Original Text: Villehardouin, La Conquête de Constantinople',
    tag: 'Verb Morphology · Present Tense & Vocalic Apophony',
    icon: 'Hourglass',
    summary:
      'Master the six personal ending laws of the Old French present indicative (including the 1st-group 1sg zero-ending law "je chant"), the seven stress-driven stem vowel diphthongization patterns, and special imperative stems.',
    content: [
      {
        heading: 'I. Six Personal Endings of the Present Indicative & the 1sg Zero-Ending Law',
        body: [
          'In 11th–12th century classical Old French, the personal endings across the three verb conjugations follow strict historical phonetic laws:',
          '• **1st Person Singular (1sg, je)**: Apart from verbs ending in a consonant cluster requiring a supporting schwa -e (such as j’entre, je tremble, je soufre), **ALL 1st-group and 3rd-group verbs take NEITHER -e NOR -s in the 1st person singular**!',
          '  - 1st Group (-er): je **chant**, j’**aim**, je **plor**, je **parol**, j’**os**, je **cuit** (cuide), je **pri**.',
          '  - 3rd Group: je **voi**, je **di**, je **sai**, je **doi**, je **vien / vieng**, je **faz**, je **muir** (analogical -e or -s only begins to appear from the 13th century onward).',
          '• **2nd Person Singular (2sg, tu)**: Invariably takes **-s / -z** (tu chantes, tu vois, tu diz, tu parz).',
          '• **3rd Person Singular (3sg, il/ele)**: 1st-group verbs end in weak schwa **-e** (in early 11th-century texts retaining voiceless dental **-et**, e.g., il chantet, il aimet); 2nd- and 3rd-group verbs end in dental **-t** (il part, il voit, il dit, il muert; if the stem already ends in t/d, the consonants merge, e.g., il rent, il vent).',
          '• **Three Plural Persons**: 1pl **-ons** (a few verbs preserve archaic forms: somes, faimes, dimes) | 2pl **-ez** (becoming **-iez** after a palatal stem consonant, e.g., mangiez, laissiez, cuidiez) | 3pl **-ent**.',
        ],
        rules: [
          {
            rule: 'Je vos pri et requier que vos m’escoutiez.',
            example:
              'I beseech and request you to listen to me (1sg "pri" and "requier" have neither -e nor -s!).',
            modern: 'Je vous prie et requiers que vous m’écoutiez.',
          },
          {
            rule: 'Li chevalier laissierent le champ ; vos laissiez.',
            example:
              'After a palatalized stem consonant, the 2pl ending shifts from -ez to -iez ("laissiez", "mangiez").',
            modern: 'Les chevaliers laissèrent le champ ; vous laissez.',
          },
        ],
      },
      {
        heading: 'II. Mechanism of Stem Vowel Alternation (Alternance vocalique radicale / Apophonie)',
        body: [
          'Latin word stress shifts position depending on the person: in the 1st, 2nd, and 3rd singular and 3rd plural (called **Strong / Rhizotonic Persons — Personnes fortes / rhizotoniques**, forming the "boot" pattern), tonic stress falls on the **root vowel**, causing open vowels to diphthongize; in the 1st and 2nd plural (called **Weak / Arrizotonic Persons — Personnes faibles / arizotoniques**, as well as the infinitive, imperfect, and present participle), stress shifts onto the **ending (-ons, -ez)**, leaving the root vowel undiphthongized or reduced!',
          'The Seven Classic Vocalic Diphthongization Patterns (Strong Stem vs. Weak Stem):',
          '1. **ai / a** (before a nasal): j’aim, tu aimes, il aime, il aiment **vs.** nos amons, vos amez (amer "to love"; likewise clamer → claim / clamons).',
          '2. **ie / e**: je lieve, il lieve **vs.** nos levons, vos levez (lever "to raise"; likewise venir → vien / venons; ferir "to strike" → fier / ferons; querre "to seek" → quier / querons).',
          '3. **ue / o (ou)**: il trueve **vs.** nos trovons (trover "to find"; likewise morir → muert / morons; movoir → muet / movons; plorer → pleure / plorons; demorer → demeure / demorons; voloir → vuelt / volons; pooir → puet / poons).',
          '4. **oi (ei) / e**: je doi, il doit, il doivent **vs.** nos devons, vos devez (devoir "to owe/must"; likewise recevoir → reçoif / recevons; boivre "to drink" → boit / bevons; mener "to lead" → moine / menons; peser → poise / pesons).',
          '5. **i / e (oi)**: je pri, il prie **vs.** nos preions, vos preiez (preier "to pray"; likewise nier "to deny" → ni / neions; issir "to go out" → ist / issons).',
          '6. **eu / o**: il keurt / cueurt **vs.** nos corons (corre "to run"; likewise secorre → sekeurt / secorons).',
          '7. **Dual Stem Alternation with Consonant Palatalization**: haïr (to hate) → je haz, tu hez, il het **vs.** nos haons, vos haez, il heent! parler (to speak) → je parol, il parole **vs.** nos parlons, vos parlez! aidier (to help) → j’aiu, il aiue **vs.** nos aidons!',
        ],
        rules: [
          {
            rule: 'Il trueve (3sg strong) le tresor ; nos le trovons (1pl weak).',
            example:
              'Strong rhizotonic person diphthongizes the stressed root vowel to "ue" (trueve); weak arrizotonic person stresses the ending and retains "o" (trovons).',
            modern: 'Il trouve le trésor ; nous le trouvons.',
          },
          {
            rule: 'Je vos aim (1sg strong) ; por coi ne m’amez (2pl weak) vos ?',
            example:
              'I love you (strong stem "aim"); why do you not love me (weak stem "amez")?',
            modern: 'Je vous aime ; pourquoi ne m’aimez-vous pas ?',
          },
        ],
      },
    ],
  },

  // Unit 8
  {
    id: 'helix-unit-8',
    unitNumber: 8,
    title: 'Unit 8: The Passé Simple (Parfait): Weak & Three Strong Systems',
    subtitle: 'Laurence Hélix Textbook Lesson 8 · Original Text: La Mort le Roi Artu (The Death of King Arthur)',
    tag: 'Verb Morphology · Weak & Strong Perfects',
    icon: 'Award',
    summary:
      'Conquer the single greatest morphological hurdle in reading medieval French—the Passé Simple (Parfait): distinguish ending-stressed weak perfects (Parfaits faibles) from the three root-alternating strong perfect classes (-i type, sigmatic -s type, and -ui type) governed by the "1-3-6 Strong Stress Law".',
    content: [
      {
        heading: 'I. Weak Simple Past Tenses (Parfaits faibles / arizotoniques)',
        body: [
          'Across all six conjugated persons, the tonic stress falls consistently on the characteristic vowel of the ending, while the verb root remains completely unchanged:',
          '1. **1st-Group -a- Type (< Latin -āvi)**: chantai, chantas, chanta, chantames, chantastes, chanterent (note that 3pl is -erent rather than Modern -èrent, with dialectal variants appearing only in a handful of verbs like aler and doner).',
          '2. **2nd-Group & Selected 3rd-Group -i- Type (< Latin -īvi / -iī)**: dormi (partit), dormis, dormi (dormit), dormimes, dormistes, dormirent (likewise servir, sentir, and oïr "to hear" → oï, oïs, oï, oïmes, oïstes, oïrent).',
          '3. **Weak -u- Type (< Vulgar Latin -ūti)**: Found in verbs such as vendre, perdre, rendre, batre, and corre: vendi / vendui, vendis, vendi (vendut), vendimes, vendistes, vendirent (vendurent).',
        ],
        rules: [
          {
            rule: 'Quant li rois l’oï (3sg), si apela (3sg) ses barons.',
            example:
              'When the king heard this (weak -i perfect "oï" of oïr), he summoned his barons (weak -a perfect "apela" of apeler).',
            modern: 'Quand le roi l’entendit, il appela ses barons.',
          },
        ],
      },
      {
        heading: 'II. Strong Simple Past Tenses (Parfaits forts) & the "1-3-6 Golden Stress Law"',
        body: [
          'In strong perfects, **the 1st person singular (1sg), 3rd person singular (3sg), and 3rd person plural (3pl)** stress the **verb root** (having no stressed vowel in the ending—called the **1-3-6 Strong Positions**); whereas **the 2nd person singular (2sg), 1st person plural (1pl), and 2nd person plural (2pl)** shift stress onto the **ending** (marked with a diaeresis -ïs, -ïmes, -ïstes or -üs, -ümes, -üstes—called the **2-4-5 Weak Positions**)!',
          'Strong perfects divide into three historical camps:',
          '• **Camp A: Vowel-Alternating -i- Strong Perfects (< Latin feci, vidi, veni)**:',
          '  - **veoir (to see)**: 1sg **vi**, 2sg veïs, 3sg **vit**, 1pl veïmes, 2pl veïstes, 3pl **virent**.',
          '  - **faire (to do/make)**: 1sg **fis**, 2sg feïs (fesis), 3sg **fist**, 1pl feïmes, 2pl feïstes, 3pl **firent (fisdrent)**.',
          '  - **venir / tenir (to come / hold)**: 1sg **ving / ting**, 2sg venis / tenis, 3sg **vint / tint**, 1pl venimes, 2pl venistes, 3pl **vindrent / tindrent**.',
          '• **Camp B: Sigmatic (-s-) Strong Perfects (< Latin misi, dixi, prehensi, quaesi)**:',
          '  - **metre (to put)**: 1sg **mis**, 2sg mesis (meïs), 3sg **mist**, 1pl mesimes, 2pl mesistes, 3pl **misdrent (mirent)**.',
          '  - **prendre (to take)**: 1sg **pris**, 2sg presis, 3sg **prist**, 1pl presimes, 2pl presistes, 3pl **prisdrent (prirent)**.',
          '  - **dire (to say)**: 1sg **dis**, 2sg desis, 3sg **dist**, 1pl desimes, 2pl desistes, 3pl **distrent (dirent)**.',
          '  - **querre (to seek/ask)**: 1sg **quis**, 2sg quesis, 3sg **quist**, 3pl **quistrent**; **ocire (to slay)** → **ocis / ocist / ocistrent**; **seoir (to sit)** → **sis / sist / sistrent**.',
          '• **Camp C: -ui / -u- Strong Perfects (< Latin habui, potui, sapui, debui, volui, cognovi, placui)**:',
          '  - **avoir (to have)**: 1sg **oi**, 2sg eüs, 3sg **ot**, 1pl eümes, 2pl eüstes, 3pl **orent**.',
          '  - **pooir (to be able)**: 1sg **poi**, 2sg peüs, 3sg **pot**, 1pl peümes, 2pl peüstes, 3pl **porent**.',
          '  - **savoir (to know)**: 1sg **soi**, 2sg seüs, 3sg **sot**, 1pl seümes, 2pl seüstes, 3pl **sorent**.',
          '  - **plaire (to please)** / **taire (to be silent)**: 1sg **ploi / toi**, 3sg **plot / tot**, 3pl **plorent / torent**.',
          '  - **devoir (to owe/must)**: 1sg **dui**, 2sg deüs, 3sg **dut**, 3pl **durent**; **conoistre (to know/recognize)** → **conui / conut / conurent**; **movoir (to move)** → **mui / mut / murent**; **recevoir** → **reçui / reçut / reçurent**; **boivre (to drink)** → **bui / but / burent**; **croire (to believe)** → **crui / crut / crurent**; **gesir (to lie down)** → **jui / jut / jurent**; **estovoir (to be necessary)** → 3sg **estut**.',
        ],
        rules: [
          {
            rule: 'Il le vit (veoir), si le prist (prendre) et le mist (metre) en prison.',
            example:
              'Three strong perfects in rapid narrative succession: "vit" (saw) + "prist" (seized) + "mist" (put).',
            modern: 'Il le vit, le prit et le mit en prison.',
          },
          {
            rule: 'Quant il le sot (savoir), il n’ot (avoir) que faire ne ne pot (pooir) fuir.',
            example:
              'The three golden -ui strong perfects: "sot" (knew) + "ot" (had) + "pot" (was able).',
            modern: 'Quand il le sut, il n’eut que faire et ne put fuir.',
          },
        ],
      },
    ],
  },

  // Unit 9
  {
    id: 'helix-unit-9',
    unitNumber: 9,
    title: 'Unit 9: Evolution of the Imperfect Indicative & Complete Subjunctive System (Present & Imperfect)',
    subtitle: 'Laurence Hélix Textbook Lesson 9 · Original Text: Jean de Joinville, Vie de saint Louis',
    tag: 'Verb Morphology · Imperfect & Subjunctive',
    icon: 'Feather',
    summary:
      'Trace the phonetic evolution of the imperfect indicative from -eie to -oie alongside western dialectal -eve, and master the singular zero-ending law of the present subjunctive as well as optative, jussive, and counterfactual uses of the subjunctive in independent and subordinate clauses.',
    content: [
      {
        heading: 'I. Historical Phonetics & Dialectal Divergence of the Imperfect Indicative (Imparfait)',
        body: [
          'Latin possessed two imperfect endings: -ābam (1st conjugation) and -ēbam (2nd and 3rd conjugations):',
          '1. In central Francien (Île-de-France) and Champenois dialects, the -ēbam ending was generalized to all verb groups, undergoing a three-stage phonetic shift: **-ēbam > -eie (11th C.) > -oie (12th–13th C., pronounced [ɔjə] and later [wɛ])**!',
          '   • Standard six-person endings: **-oie, -oies, -oit, -iiens (-ions), -iiez (-iez), -oient**.',
          '2. In western Norman, Anglo-Norman, and Angevin dialects, 1st-group verbs preserved the labial fricative reflex of Latin -ābam: **chantoe / chanteve, chanteves, chantout / chantevet, chantoent / chantevent**!',
          '3. The copula "estre", alongside regular estoie, estoies, estoit, frequently uses archaic synthetic forms derived directly from Latin eram, eras, erat, erant: **ere, eres, ert (iert), erent (ierent)**.',
        ],
        rules: [
          {
            rule: 'Li rois ert (estoit) en son palais et tenoit grant cort.',
            example:
              'The king was in his palace ("ert" = archaic imperfect of estre) and was holding great court ("tenoit").',
            modern: 'Le roi était en son palais et tenait grande cour.',
          },
        ],
      },
      {
        heading: 'II. Present Subjunctive (Subjonctif présent) & Imperfect Subjunctive (Subjonctif imparfait)',
        body: [
          '• **Two Morphological Camps of the Present Subjunctive**:',
          '  1. **1st-Group Verbs (derived from Latin -em, -es, -et; final vowels apocopated, leaving NO -e in the singular!)**:',
          '     1sg **chant**, 2sg **chanz** (chant+s), 3sg **chant** (early OF chantet) | 1pl chantons, 2pl chantez, 3pl chantent.',
          '     [Special Stem-Final Assimilations]: When a stem ends in a consonant, 3sg preserves the Latin dental -t with assimilation! E.g., conseillier → **conseilt > conseuz**; doner → **doinst / doint**; aler → **voist**; garder → **gart** ("Dieus vos gart!" = May God protect you!); aidier → **aït** ("Si m’aït Dieus!" = So help me God!); amer → **aint** ("Se Dieus m’aint!").',
          '  2. **2nd- & 3rd-Group Verbs (derived from Latin -am, -as, -at, preserving final schwa -e!)**:',
          '     Unified endings: **-e, -es, -e, -iens (-ons), -iez, -ent** (e.g., dorme, parte, vende, doie, voie, face, die, sache, viegne, puist/puisse).',
          '• **Iron Law of Deriving the Imperfect Subjunctive**:',
          '  Always built on the **2nd person singular weak stem of the passé simple**, adding **-sse, -sses, -st, -ssiens (-ssons), -ssiez, -ssent**!',
          '  - 1st Group: chantas → **chantasse, chantasses, chantast**, chantassiens, chantassiez, chantassent.',
          '  - Strong Verbs: feïs (faire) → **feïsse / feïst**; veïs (veoir) → **veïsse / veïst**; eüs (avoir) → **eüsse / eüst**; peüs (pooir) → **peüsse / peüst**; fus (estre) → **fusse / fust**; venis (venir) → **venisse / venist**; presis (prendre) → **presisse / presist**.',
        ],
        rules: [
          {
            rule: 'Or me conseuz (conseillier) Dieus et me doinst (doner) force !',
            example:
              'In an independent main clause, the present subjunctive expresses an optative wish directly without "que", with the subject inverted after the verb.',
            modern: 'Que Dieu me conseille maintenant et me donne de la force !',
          },
          {
            rule: 'Ja n’i alasse s’il ne le m’eüst comandé.',
            example:
              'The imperfect subjunctive ("alasse", "eüst") is used in both clauses of a counterfactual conditional sentence.',
            modern: 'Je n’y serais jamais allé s’il ne me l’avait pas commandé.',
          },
        ],
      },
    ],
  },

  // Unit 10
  {
    id: 'helix-unit-10',
    unitNumber: 10,
    title: 'Unit 10: Simple Future & Conditional (Synthetic Grammaticalization & Consonant Epenthesis)',
    subtitle: 'Laurence Hélix Textbook Lesson 10 · Original Text: Rutebeuf, Le Miracle de Théophile',
    tag: 'Verb Morphology · Future & Conditional',
    icon: 'Sparkles',
    summary:
      'Understand the grammaticalization of Vulgar Latin "Infinitive + habēre" into the Romance future and conditional tenses, mastering vowel syncope, consonant epenthesis (insertion of d/b), and regressive assimilation to double -rr-.',
    content: [
      {
        heading: 'I. Synthetic Origin & Standard Endings of the Future and Conditional',
        body: [
          'The Classical Latin synthetic future (cantabo, dicam) disappeared in Vulgar Latin and was replaced by the periphrasis **"Verb Infinitive + Present or Imperfect of the auxiliary habēre (to have/must)"**:',
          '• **Simple Future (Futur simple = Infinitive stem + reduced present endings of avoir)**:',
          '  Endings are invariably: 1sg **-ai** (< habeo), 2sg **-as** (< habes), 3sg **-a** (< habet), 1pl **-ons** (< [hab]emus), 2pl **-oiz / -eiz / -ez** (< [hab]etis—note that in the 12th–13th centuries the hallmark 2nd person plural future ending is **-oiz**, e.g., vos diroiz, vos verroiz, vos avroiz!), 3pl **-ont** (< habunt).',
          '• **Present Conditional (Conditionnel présent = Identical future stem + reduced imperfect endings of avoir)**:',
          '  Endings are invariably: 1sg **-oie (-eie)**, 2sg **-oies**, 3sg **-oit**, 1pl **-iiens (-ions)**, 2pl **-iiez (-iez)**, 3pl **-oient**.',
          '  Core Functions: ① Future-in-the-past (Futur du passé: "Il dist qu’il vendroit" = He said that he would come); ② Potential hypothesis or polite mitigation (Potentiel / Éventuel).',
        ],
        rules: [
          {
            rule: 'Se vos volez, nos i irons et vos verroiz (2pl futur) le roi.',
            example:
              'If you wish, we shall go there and you will see the king (standard 2pl future ending "-oiz" < -eiz).',
            modern: 'Si vous voulez, nous y irons et vous verrez le roi.',
          },
        ],
      },
      {
        heading: 'II. Four Historical Phonetic Laws of Future & Conditional Stems',
        body: [
          'When tonic stress shifts onto the ending (-ai, -oie), the unstressed pretonic vowel e or i inside the infinitive undergoes **medial vowel syncope (Syncope)**, bringing the stem-final consonant into direct contact with r and triggering four regular phonetic changes:',
          '1. **Consonant Epenthesis (Épenthèse de d ou b)**:',
          '   • **n + r → ndr**: venir → *ven-r-ai → **vendrai** ("I shall come"—never confuse with vendre "to sell"!); tenir → **tendrai**; remanoir → **remandrai**; semondre → **semondrai**.',
          '   • **l + r → ldr (> udr)**: voloir → *vol-r-ai → **voldrai (> voudrai)**; valoir → **valdrai (> vaudrai)**; falir → **faldrai (> faudrai)**; tolir (to take away) → **toldrai**; soloir → **soldrai**.',
          '   • **m + r → mbr**: criembre (to fear) → **crembrai**.',
          '2. **Regressive Assimilation to Double -rr- (Assimilation régressive en -rr-)**:',
          '   • **d/t/v/p + r → rr**: veoir (*ved-r-ai) → **verrai**; pooir (*pot-r-ai) → **porrai**; doner → **donrai / dorrai**; mener → **menrai / merrai**; laissier → **lerrai**; corre → **corrai**; morir → **morrai**; querre → **querrai**; ocire → **ocirrai**.',
          '3. **Schwa Retention & Suppletive Stems**:',
          '   • faire → **ferai**; dire → **dirai**; estre → **serai** or archaic Latin survival **ier, iers, iert, ermes, ierent**; aler → **irai**; avoir → **avrai (> aurai)**; savoir → **savrai (> saurai)**; devoir → **devrai**; estovoir (must) → **estovra**; cheoir (to fall) → **cherrai**; seoir (to sit) → **serrai**.',
        ],
        rules: [
          {
            rule: 'Demain vendra (venir) li rois et tendra (tenir) sa cort ; ja n’i faudra (falir).',
            example:
              'n + r inserts epenthetic d to give "vendra / tendra"; l + r inserts d and vocalizes to "faudra".',
            modern: 'Demain le roi viendra et tiendra sa cour ; il n’y manquera jamais.',
          },
          {
            rule: 'Je vos dorrai (= donrai) bons destriers et si vos merrai (= menrai) en France.',
            example:
              'In the future tense of doner and mener, n + r frequently assimilates to double -rr-: "dorrai" (I shall give), "merrai" (I shall lead).',
            modern: 'Je vous donnerai de bons destriers et vous mènerai en France.',
          },
        ],
      },
    ],
  },

  // Unit 11
  {
    id: 'helix-unit-11',
    unitNumber: 11,
    title: 'Unit 11: Medieval Negation System, Concrete Reinforcers (Forclusifs) & Minimal-Value Rhetoric',
    subtitle: 'Laurence Hélix Textbook Lesson 11 · Original Text: Aucassin et Nicolette (Chantefable)',
    tag: 'Negation Syntax · Concrete Minimizers',
    icon: 'Flame',
    summary:
      'Master the self-sufficiency of single "ne (nen)", the coordinating negative conjunction "ne (= Modern ni)", the grammaticalization of concrete minimal-quantity nouns (pas, mie, point, gote) into negative adverbs, and chivalric "not worth a button" (ne priser un bouton) rhetoric.',
    content: [
      {
        heading: 'I. Self-Sufficient Negative "ne (nen)" & Coordinating Negative "ne" (< Latin nec)',
        body: [
          '1. **Complete Self-Sufficiency of Solo "ne"**: In Old French, without any postverbal particle (pas/point), a single **ne** (elided to **n’** before a vowel, or preserving the archaic full form **nen** before a vowel in early manuscripts, e.g., "Je nen ai" = je n’ai) suffices by itself to negate an entire clause! Especially with modal verbs (pooir, voloir, savoir, devoir, oser), mental/affective verbs (conoistre, douter, chaloir "to matter: Il ne m’en chaut"), and subordinate clauses, solo "ne" is the norm.',
          '2. **Coordinating Negative Conjunction "ne" (= Modern French ni)**: Old French does not yet spell the word "ni"; the conjunction linking two negated elements ("neither... nor...") derives from Latin nec and is ALSO spelled **ne** (never elided before a vowel, or written **ned** in early texts)! Distinguish them by position: "ne" immediately preceding a verb is the negative adverb ("not"), whereas "ne" linking two nouns, adjectives, infinitives, or clauses is the coordinating conjunction ("nor / neither" = Modern ni)!',
        ],
        rules: [
          {
            rule: 'Je ne (ne) sai que je doie faire, ne (ni) ou je puisse aler.',
            example:
              'The first "ne" is the negative adverb "not"; the second "ne" is the coordinating negative conjunction "nor (ni)".',
            modern: 'Je ne sais pas ce que je dois faire, ni où je peux aller.',
          },
          {
            rule: 'De tot ce ne li chaut.',
            example:
              'Of all this he cares nothing ("chaloir" is consistently negated with solo "ne").',
            modern: 'De tout cela, peu lui importe.',
          },
        ],
      },
      {
        heading: 'II. Concrete Minimal-Quantity Reinforcers (Forclusifs) & Chivalric "Minimal Value" Rhetoric',
        body: [
          'To reinforce the expressive force of negation, Old French introduced a series of Cas Régime nouns originally denoting **"tiny concrete objects"** (functioning as accusatives of extent or minimal measure):',
          '• **The Four Grammaticalized Negative Auxiliaries**:',
          '  1. **pas** (< passum "a step"): Originally used with verbs of motion ("Je n’irai pas" = I will not walk a single step), later generalized.',
          '  2. **mie** (< micam "a crumb of bread"): Even more frequent than "pas" in northern, Picard, and Champenois texts ("Je nel ferai mie" = I will not do it a crumb / at all).',
          '  3. **point** (< punctum "a pinprick / speck"): Frequently takes a partitive complement ("Il n’i a point d’eve" = There is not a speck of water there).',
          '  4. **gote** (< guttam "a drop of liquid"): Restricted to verbs of sight and hearing ("ne veoir gote" = not to see a drop / to be pitch blind; "n’oïr gote" = not to hear a thing).',
          '• **Epic & Chivalric "Not Worth a Farthing (Valeur minimale)" Rhetoric**:',
          '  Medieval poets delight in using everyday rural or sartorial trifles as negative objects to express heroic disdain ("to care nothing for / not worth a..."): ne priser / ne valoir / ne doner **un denier** (a penny), **un bouton** (a button), **un gant** (a glove), **un esperon** (a spur), **une pome** (an apple), **une alie** (a sorb-berry), **un ail** (a clove of garlic), **une feve** (a bean), **un festu** (a piece of straw)!',
          '• **Negative Temporal & Restrictive Constructions**: **ne... mais** (no longer = ne... plus); **ne... onques / ja** (never = ne... jamais); **ne... gueres** (hardly); **ne... que / ne... fors / ne... mais que** (only, nothing except = ne... que).',
        ],
        rules: [
          {
            rule: 'Totes lor armes ne valent un bouton (une pome / un denier).',
            example:
              'All their weapons are not worth a button / an apple / a penny (worthless in battle).',
            modern: 'Toutes leurs armes ne valent strictement rien.',
          },
          {
            rule: 'Il n’i ot chevalier fors (mais que) le roi.',
            example:
              'There was no knight there save / except the king ("ne... fors / mais que" = ne... que).',
            modern: 'Il n’y eut aucun chevalier sinon le roi.',
          },
        ],
      },
    ],
  },

  // Unit 12
  {
    id: 'helix-unit-12',
    unitNumber: 12,
    title: 'Unit 12: Subordinate Clause System, Conditional Tense Formulas & Bicasual Relative Pronouns',
    subtitle: 'Laurence Hélix Textbook Lesson 12 · Original Text: Chrétien de Troyes, Perceval (Le Conte du Graal)',
    tag: 'Complex Syntax · Subordination & Conditionals',
    icon: 'BookOpen',
    summary:
      'Systematically master the three subordinate clause types in Old French (relative, completive, and adverbial clauses), conquering the three classic tense-concordance formulas with conditional "se" and the unique functions of the oblique relative pronoun "cui".',
    content: [
      {
        heading: 'I. The Two-Case Relative Pronoun System (qui, que, cui, dont, ou)',
        body: [
          'Old French relative pronouns strictly obey case assignment and frequently appear in **"headless relative clauses without an antecedent (Relatives sans antécédent)"**:',
          '1. **Nominative CS `qui`** (spelled **ki** in Anglo-Norman): Functions as the subject of the relative clause. Without an antecedent, it means "he who, whoever, anyone who (celui qui, quiconque)" or introduces a hypothetical condition "if anyone (si l’on)"!',
          '2. **Direct Object CR `que`** (elided to **qu’** before a vowel): Functions as the direct object of the relative clause. As a neuter pronoun, it means "that which, what (ce que)".',
          '3. **Stressed Indirect Object / Genitive CR `cui`** (< Latin dative cui): A quintessential all-purpose oblique human relative pronoun in Old French with three major uses:',
          '   • Usage A (Human object after a preposition): Preposition + cui ("la dame por cui je chant" = the lady for whom I sing).',
          '   • Usage B (Prepositionless indirect object "to whom"): "Cil **cui** Dieus done ennors" (He to whom God grants honor = à qui).',
          '   • Usage C (Prepositionless possessive genitive "whose" = Modern dont): "Li rois **cui** fille il ama" (The king whose daughter he loved = dont il aima la fille)!',
          '4. **`dont`** (< de unde): Originally expressed spatial origin "from where (d’où)", expanding to "concerning which, whereby, whose (de qui, de quoi, dont)"; **`ou`** (< ubi): Expresses place or time "where, in which, when".',
        ],
        rules: [
          {
            rule: 'Artus, la cui (Genitive) proëce nos enseigne ; cil cui (Dative) je serf.',
            example:
              'Arthur, whose prowess instructs us ("la cui proëce" = dont la prouesse); he whom I serve ("cui" = à qui).',
            modern: 'Arthur, dont la prouesse nous enseigne ; celui que je sers.',
          },
          {
            rule: 'Qui (= Celui qui / Si l’on) bien aime, a envis oublie.',
            example:
              'Headless relative "Qui" generalizing: "Whoever truly loves, reluctantly forgets."',
            modern: 'Qui aime bien oublie difficilement.',
          },
        ],
      },
      {
        heading: 'II. Three Classic Tense-Concordance Formulas of Conditional "se" (< Latin sī)',
        body: [
          'In Old French, the conjunction "if" introducing a conditional protasis is spelled **se** (elided to **s’** before a vowel, e.g., "s’il vient"; never confuse with the adverb "si" < sic!). Depending on the degree of reality of the hypothesis, Old French follows three classic sequence-of-tense formulas:',
          '• **Formula 1 (Real / Open Condition — Potentiel / Réel)**:',
          '  **Se + Present Indicative (Présent) ➔ Main clause in Future / Imperative / Present**.',
          '  Example: *Se tu viens, je t’amerai.* (If you come, I shall love you).',
          '• **Formula 2 (Weak Future Potential — Éventuel)**:',
          '  **Se + Imperfect Indicative (Imparfait) ➔ Main clause in Present Conditional (Conditionnel)**.',
          '  Example: *S’il venoit, nos avriiens joie.* (If he were to come, we would have joy).',
          '• **Formula 3 (Counterfactual / Contrary-to-Fact in Present AND Past — Irréel du présent ET du passé)**:',
          '  [Crucial Exam Point]: Completely unlike Modern French (which uses "si + imperfect/pluperfect indicative" with the conditional in the main clause), in classical Old French—whether the counterfactual hypothesis refers to the present OR the past—**BOTH the "se" protasis AND the main clause use the Imperfect Subjunctive (or Pluperfect Subjunctive)**!',
          '  **Se + Imperfect Subjunctive (Subjonctif imparfait) ➔ Main clause ALSO in Imperfect Subjunctive (Subjonctif imparfait)**!',
        ],
        rules: [
          {
            rule: 'Se je fusse (Subj. Imp.) riches, je vos donasse (Subj. Imp.) un chastel.',
            example:
              'Classic symmetrical counterfactual construction: both protasis and apodosis take the imperfect subjunctive ("fusse... donasse")!',
            modern: 'Si j’étais riche, je vous donnerais un château.',
          },
          {
            rule: 'S’il eüst eü (Subj. PQP) s’espee, ja ne fust morz (Subj. PQP).',
            example:
              'Past counterfactual: Had he had his sword, he would never have died (pluperfect subjunctive in both clauses).',
            modern: 'S’il avait eu son épée, jamais il ne serait mort.',
          },
        ],
      },
      {
        heading: 'III. Adverbial Conjunction Families & Unmarked Subordination (Parataxe)',
        body: [
          '• **Temporal Conjunctions**: quant (when), com (when / as), tant com (as long as), ainz que / avant que (before, governing the subjunctive), puis que (after / since), des que (as soon as).',
          '• **Causal & Final Conjunctions**: por ce que / car / quar (because / for, governing the indicative); puis que (since / seeing that); por que / a ce que (in order that, governing the subjunctive).',
          '• **Concessive Conjunctions**: ja soit ce que (although = bien que, governing the subjunctive); comment que / quoi que (however / whatever, governing the subjunctive).',
          '• **Parataxis / Omission of "que" (Subordonnée sans que / Parataxe)**: After main verbs of wishing, commanding, begging, or believing (voloir, prier, comander, cuidier), or in negative consecutive clauses ("Il n’i a si riche home ne plort" = There is no man so rich that he does not weep), Old French frequently omits the complementizer "que" altogether, signaling subordination through the subjunctive mood of the dependent verb!',
        ],
        rules: [
          {
            rule: 'Je vueil (omission of que) tu i ailles (voises) tantost.',
            example:
              'After the volitional verb "vueil", the conjunction "que" is omitted directly before the subjunctive "ailles / voises".',
            modern: 'Je veux que tu y ailles aussitôt.',
          },
        ],
      },
    ],
  },
];
