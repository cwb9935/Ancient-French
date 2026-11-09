/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection } from '../grammarCodex';

export const SECTIONS_EN_1_TO_6: GrammarSection[] = [
  // Unit 1
  {
    id: 'helix-unit-1',
    unitNumber: 1,
    title: 'Unit 1: Alterity of Old French, the Core Particle "si" & the V2 Verb-Second Law',
    subtitle: 'Laurence Hélix Textbook Lesson 1 · Original Text: Le Chevalier au Papegau (The Knight of the Parrot)',
    tag: 'Discourse Cohesion · V2 Word Order Law',
    icon: 'Sparkles',
    summary:
      'Master the fundamental syntactic divide between Old French and Modern French: the six semantic functions of the ubiquitous discourse marker "si", Thurneysen’s Verb-Second (V2) inversion law, the pro-drop mechanism (omission of subject pronouns), and medieval manuscript clause punctuation.',
    content: [
      {
        heading: 'I. Six Core Functions of the Discourse Connector "si" (< Latin sīc)',
        body: [
          'In Old French manuscripts, the adverb "si" (derived from Latin sīc "thus"—never to be confused with the conditional conjunction "se" < sī "if"!) is the single most frequent discourse pivot, functioning simultaneously as an adverb and a coordinating conjunction:',
          '1. Etymological Manner & Degree (Valeur de manière): Retains its original Latin sense "thus, in this way (ainsi)" or intensive degree adverb "so, to such an extent (tellement)", frequently forming the correlative construction "si... que" (so... that).',
          '2. Temporal Progression & Action Succession (Valeur de succession temporelle): Means "next, then, and thereupon (et alors, puis)", chaining consecutive actions performed by the same subject while routinely omitting the repeated subject pronoun after "si".',
          '3. Thematic Resumption & Subject-Predicate Bridge (Valeur de reprise thématique): After a long fronted temporal/locative adverbial phrase or participial clause at the start of a sentence, "si" bridges the opening constituent and introduces the main finite verb.',
          '4. Consecutive & Explanatory Deduction (Valeur consécutive / explicative): Means "therefore, consequently, and for this reason (donc, c’est pourquoi)".',
          '5. Adversative Contrast & Affirmative Rebuttal (Valeur adversative / affirmative): After a negative or interrogative clause, it expresses "yet, however, on the contrary (pourtant, au contraire)"—the direct historical origin of Modern French "Si !" used to contradict a negative question.',
          '6. Fixed Compound Conjunctions: "si com / si come" (just as, even as = comme); "si que" (so that = de sorte que); "et si" (and moreover, and furthermore = et de plus).',
        ],
        rules: [
          {
            rule: 'Li chevaliers monta el destrier, si s’en ala.',
            example:
              'The knight mounted his warhorse, and then rode away ("si" marks action succession and omits the repeated subject pronoun "il").',
            modern: 'Le chevalier monta sur le destrier et s’en alla.',
          },
          {
            rule: 'Quant li rois l’oï, si en ot grant joie.',
            example:
              'When the king heard this, he rejoiced greatly ("si" introduces the main clause verb after a fronted temporal clause).',
            modern: 'Quand le roi l’entendit, il en eut une grande joie.',
          },
          {
            rule: 'Si com l’estoire nos reconte',
            example:
              'Just as the chronicle relates to us (fixed formulaic idiom "si com" < sic quomodo).',
            modern: 'Ainsi que l’histoire nous le raconte',
          },
        ],
      },
      {
        heading: 'II. The Verb-Second Law (V2 / Loi de Thurneysen) & Six Word-Order Permutations',
        body: [
          'Because Old French possesses a two-case inflectional system (Cas Sujet / Cas Régime), it does not rely on fixed word order to distinguish subject from object. However, under the suprasegmental stress influence of Germanic Frankish, main clauses strictly obey the "Verb-Second (V2)" law:',
          '• Pattern 1 (S - V - O): Li rois (S) voit (V) le chevalier (O). — Standard uninverted order.',
          '• Pattern 2 (O - V - S): Le chevalier (O) voit (V) li rois (S). — Fronted direct object for focus; the subject is obligatorily inverted after the verb! Never mistranslate this by Modern French word order as "The knight sees the king"—the Cas Sujet form "li rois" proves that the king is the subject!',
          '• Pattern 3 (Circ - V - S - O): En cel tens (Adverbial) tenoit (V) li rois Artus (S) cort (O). — A clause-initial adverbial triggers subject-verb inversion; if the subject is an unstressed personal pronoun, it is dropped altogether (Pro-drop).',
          '• Pattern 4 (S - O - V): Found chiefly in relative clauses, conjunctive subordinate clauses, or at the end of rhymed verse lines (Qui le roi voit...).',
        ],
        rules: [
          {
            rule: 'Grant joie fist li rois en sa cort.',
            example:
              'O (Direct Object "Grant joie") + V (Verb "fist") + S (Cas Sujet Subject "li rois") — classic V2 inversion.',
            modern: 'Le roi manifesta une grande joie en sa cour.',
          },
          {
            rule: 'Or vos dirai d’une aventure.',
            example:
              'Clause-initial adverb "Or" + clitic pronoun "vos" + verb "dirai" (with 1st-person subject pronoun "je" omitted).',
            modern: 'Maintenant je vais vous raconter une aventure.',
          },
        ],
      },
      {
        heading: 'III. Omission of Subject Pronouns (Non-expression du pronom sujet) & Impersonal Constructions',
        body: [
          'In 11th–13th century Old French, because verbal endings clearly distinguish all six grammatical persons (e.g., chant, chantes, chante, chantons, chantez, chantent), nominative personal pronouns (je, tu, il, nos, vos, il) are expressed ONLY when needed at the start of a clause to fill Position 1 (preventing the finite verb from standing exposed in first position against the V2 law) or for strong contrastive emphasis. Whenever an adverbial, direct object, or particle (si, or, lors, tantost) already occupies Position 1, the subject pronoun is systematically omitted!',
          'Similarly, impersonal verbs—such as existential "a / i a" (there is), meteorological "pluet" (it rains), modal "estuet" (it is necessary / one must), and "avint" (it happened)—routinely omit the dummy neuter subject pronoun "il" in Old French.',
        ],
        rules: [
          {
            rule: 'En la forest avoit un chastel.',
            example:
              'In the forest there was a castle (no dummy subject "il" before "avoit"; "un chastel" is in the Cas Régime).',
            modern: 'Dans la forêt, il y avait un château.',
          },
          {
            rule: 'Or m’estuet morir.',
            example:
              'Now I must die ("estuet" is the impersonal verb "to be necessary", used without dummy "il").',
            modern: 'Maintenant il me faut mourir.',
          },
        ],
      },
    ],
  },

  // Unit 2
  {
    id: 'helix-unit-2',
    unitNumber: 2,
    title: 'Unit 2: Masculine Bicasual Declension System (Complete Paradigms of Types I, II, III)',
    subtitle: 'Laurence Hélix Textbook Lesson 2 · Original Text: La Chanson de Roland (The Song of Roland)',
    tag: 'Core Morphology · Masculine Two-Case System',
    icon: 'Columns',
    summary:
      'Systematically trace the historical merger of Classical Latin’s six cases into Vulgar Latin and Old French’s two cases (Cas Sujet Nominative / Cas Régime Oblique), mastering all three masculine declension classes and stress-shifting imparisyllabic nouns.',
    content: [
      {
        heading: 'I. Syntactic Division of Labor: From Six Latin Cases to Two Old French Cases (CS vs. CR)',
        body: [
          'Through phonetic erosion in Vulgar Latin, the six cases of Classical Latin (Nominative, Vocative, Accusative, Genitive, Dative, Ablative) merged into two fundamental cases in Old French:',
          '1. Cas Sujet (Nominative, abbreviated CS, inheriting Latin Nominativus + Vocativus):',
          '   • Syntactic Function A: Grammatical Subject (Sujet) of a finite verb.',
          '   • Syntactic Function B: Subject Complement / Predicate Attribute (Attribut du sujet) after copular verbs (estre, devenir, sembler, paroir).',
          '   • Syntactic Function C: Direct Address / Vocative (Apostrophe / Vocatif), e.g., "Sire reis, entendez moi!" (Lord King, hear me!).',
          '2. Cas Régime (Oblique / Accusative, abbreviated CR, inheriting Latin Accusativus and absorbing the functions of Genitive, Dative, and Ablative):',
          '   • Syntactic Function A: Direct Object (COD) of a transitive verb.',
          '   • Syntactic Function B: Object of ALL prepositions (a, de, en, por, par, sor, sanz, vers).',
          '   • Syntactic Function C: Prepositionless Absolute Oblique (CR absolu), directly expressing possession ("l’espee Rollant" = Roland’s sword), duration of time ("set anz" = seven years), measure of value, or location.',
        ],
        rules: [
          {
            rule: 'Li chevaliers (CS) est proz (CS).',
            example:
              'The knight is valiant (both the subject and the predicate adjective take Cas Sujet singular with -s/-z).',
            modern: 'Le chevalier est preux.',
          },
          {
            rule: 'Li reis (CS) done un destrier (CR) al chevalier (CR).',
            example:
              'The king gives a warhorse to the knight (subject in CS with -s; direct object and prepositional object in CR without -s).',
            modern: 'Le roi donne un destrier au chevalier.',
          },
        ],
      },
      {
        heading: 'II. Class I & Class II Masculine Nouns (Type I Sigmatique & Type II Asigmatique)',
        body: [
          '• Type I Regular Masculine Nouns (over 80% of all Old French masculine nouns, derived from Latin 2nd declension -us / -um):',
          '  Exhibits the famous "Diagonal X-Pattern": Sg. CS takes -s (li murs < murus), Sg. CR has no -s (le mur < murum); Pl. CS has no -s (li mur < muri), Pl. CR takes -s (les murs < muros).',
          '  [Phonetic Sub-rules]: ① Stems ending in lateral -l vocalize to -aus/-ax before -s (li chevaus / le cheval / li cheval / les chevaus); ② Stems ending in dental -t/-d coalesce with -s into the affricate -z [ts] (li ponz / le pont); ③ Stems ending in -c/-f/-p drop their final stem consonant before -s (clerc+s → clers, serf+s → sers, drap+s → dras, colp+s → cols/cox); ④ Stems already ending in -s/-z in the root (li nes / le nes "nose", li bras / le bras "arm", li cors / le cors "body") are invariant across all four forms (Indéclinables)!',
          '• Type II Asigmatic Masculine Nouns (derived from Latin -er stems such as pater, frater, magister, venter):',
          '  In early Old French, Sg. CS has no etymological -s (li pere, li frere, li maistre), making the noun identical to Sg. CR (le pere) and distinguished only by the article; from the mid-12th century onward, analogical -s is frequently added to Sg. CS under the influence of Type I (li peres).',
        ],
        rules: [
          {
            rule: 'Li chevaus (CS sg) cort ; li cheval (CS pl) corent.',
            example:
              'The horse runs (Sg. CS adds -s and vocalizes to chevaus); the horses run (Pl. CS has no -s: li cheval)!',
            modern: 'Le cheval court ; les chevaux courent.',
          },
          {
            rule: 'Li serf (CS pl) servent le seignor ; li sers (CS sg) sert.',
            example:
              'The serfs serve the lord (Pl. CS "serf" without -s); the serf serves (Sg. CS serf + s → "sers").',
            modern: 'Les serfs servent ; le serf sert.',
          },
        ],
      },
      {
        heading: 'III. Class III Imparisyllabic Stress-Shifting Masculine Nouns (Type III Imparisyllabiques)',
        body: [
          'Derived from the Latin 3rd declension. Because the Latin nominative singular and accusative singular either differed in syllable count (e.g., cómes 2 syllables vs. cómitem 3 syllables) or shifted the position of the tonic stress (e.g., impérator vs. imperatórem), the Old French Sg. CS and Sg. CR developed completely distinct stems! They fall into three major subgroups:',
          '1. Fixed Stress-Shifting Group: ber / baron (baron); cuens / conte (count); hom / ome (man); enfes / enfant (child/youth); niés / neveu (nephew < népos / nepótem); abés / abé (abbot).',
          '2. The -or / -eur Agent Group: sire / seignor (lord < sénior / seniórem); emperere / empereor (emperor); chantre / chanteor (singer/chanter); traïtre / traïtor (traitor); pastre / pastor (shepherd); pechiere / pecheor (sinner).',
          '3. Germanic -o / -ónem Borrowings & Weak Masc. Group: compainz / compaignon (companion); fel / felon (felon/disloyal vassal); gars / garçon (serving-lad/boy); lerre / larron (thief < látro / latrónem); glouz / gloton (glutton).',
          '[Golden Rule of Memory]: The nominative plural (CS pl) of ALL Type III masculine nouns is formed on the oblique singular (CR sg) stem WITHOUT adding -s (e.g., li baron, li seignor, li conte, li larron)!',
        ],
        rules: [
          {
            rule: 'Li niés (CS sg) Rollant ocist le felon (CR sg).',
            example:
              'The nephew Roland slew the felon ("niés" is the CS of neveu; "felon" is the CR of fel).',
            modern: 'Le neveu Roland tua le félon.',
          },
          {
            rule: 'Li lerre (CS sg) embla l’or ; li larron (CS pl) s’en fuirent.',
            example:
              'The thief stole the gold (Sg. CS "lerre"); the thieves fled (Pl. CS "larron", built on the oblique stem without -s).',
            modern: 'Le larron vola l’or ; les larrons s’enfuirent.',
          },
        ],
      },
    ],
  },

  // Unit 3
  {
    id: 'helix-unit-3',
    unitNumber: 3,
    title: 'Unit 3: Feminine Noun Declension System & Complete Evolution of the Article System',
    subtitle: 'Laurence Hélix Textbook Lesson 3 · Original Text: Marie de France, Lai du Chèvrefeuille (The Honeysuckle Lay)',
    tag: 'Morphology · Feminine Two-Case & Article System',
    icon: 'Bookmark',
    summary:
      'Examine in depth the three feminine declension classes (regular -e stems, consonant-final stems taking -s in Sg. CS, and feminine imparisyllabics), together with the complete evolution of definite, indefinite, and zero articles.',
    content: [
      {
        heading: 'I. The Three Feminine Declension Paradigms (Types I, II, III Féminins)',
        body: [
          '1. Type I Regular Feminine Nouns (derived from Latin 1st declension -a/-am, e.g., domina > dame, rosa > rose, porta > porte):',
          '   Because Latin nominative singular -a and accusative singular -am (where final -m was lost in antiquity) became phonetically identical as final central schwa -e [ə], and nominative plural -ae was replaced in Vulgar Latin by accusative plural -as, Type I feminine nouns have identical CS and CR forms in the singular (la dame / la dame) and identical CS and CR forms in the plural (les dames / les dames). Case opposition is neutralized; only singular vs. plural is marked!',
          '2. Type II Consonant- or Tonic-Vowel-Final Feminine Nouns (derived from Latin 3rd declension feminine nouns, e.g., flos/florem > flor, finis/finem > fin, mors/mortem > mort, civitas/civitatem > cité, virtus/virtutem > vertu):',
          '   Because the Latin nominative singular ended in -s (flos, finis, mors, civitas), in Old French **the Nominative Singular (CS sg) MUST take inflectional -s/-z, whereas the Oblique Singular (CR sg) has no -s**!',
          '   • Sg. CS: la flors, la fins, la morz (mort+s), la citez (cité+s), la bontez, la mer (exception: mer < mare neuter takes no -s).',
          '   • Sg. CR: la flor, la fin, la mort, la cité, la bonté.',
          '   • Pl. CS & Pl. CR: Always take -s/-z (les flors, les morz, les citez).',
          '3. Type III Imparisyllabic Feminine Nouns (Type III Imparisyllabiques féminins):',
          '   Comprises two branches: ① Latin stress-shifting nouns: la suer (CS sg < sóror) / la seror (CR sg < sorórem, plural les serors); la mieire (rare CS of mother) / la mere; ② Ecclesiastical Latin / Frankish -a / -ánem female proper names and status nouns: la nonne (CS nun) / la nonnain (CR); la pute (CS courtesan) / la putain (CR); la ante (CS aunt) / l’antain (CR); and female proper names Berte / Bertain, Eve / Evain, Guenievre / Guenievrain.',
        ],
        rules: [
          {
            rule: 'La morz (CS sg) li est pres ; il ne doute la mort (CR sg).',
            example:
              'Death is near to him (Type II feminine Sg. CS "morz" with -z); he does not fear death (Sg. CR "mort" without -z).',
            modern: 'La mort lui est proche ; il ne redoute pas la mort.',
          },
          {
            rule: 'La suer (CS sg) le roi ama sa seror (CR sg).',
            example:
              'The king’s sister loved her sister ("suer" is Cas Sujet; "seror" is Cas Régime).',
            modern: 'La sœur du roi aima sa sœur.',
          },
        ],
      },
      {
        heading: 'II. Pragmatic Rules of Definite, Indefinite & Zero Articles (Article zéro)',
        body: [
          '• Definite Articles (derived from Latin distal demonstrative ille, illa):',
          '  Masculine: Sg. CS "li" (elided to "l’" before a vowel) / Sg. CR "le" ("l’" before a vowel); Pl. CS "li" / Pl. CR "les".',
          '  Feminine: Sg. CS "la" ("l’" before a vowel; in Picard/northern dialects, feminine Sg. CS is also "li"!) / Sg. CR "la"; Pl. CS "les" / Pl. CR "les".',
          '• Indefinite Articles (derived from Latin numeral unus, una):',
          '  Masculine Sg. CS "uns" / Sg. CR "un". Note that Old French indefinite articles possess **plural forms** (Masc. Pl. CS "un" / Pl. CR "uns"; Fem. Pl. "unes")! These plural indefinite articles modify objects that naturally come in pairs, sets, or collective units, meaning "a pair of, a set of, a single" (e.g., unes lettres = a sealed letter/epistle, uns esperons = a pair of spurs, unes armes = a suit of armor, unes noces = a wedding feast).',
          '• Zero Article (Article zéro): In Old French, articles are used only to actualize a concrete, individualized referent. When a noun denotes an abstract concept (Amor, Mort, Proëce), a general substance, a generic class as a whole, or appears in negative, interrogative, conditional clauses or verbal idioms (avoir paor, prendre fin, tenir cort), NO article is used!',
        ],
        rules: [
          {
            rule: 'Il li envoia unes lettres seellees.',
            example:
              'He sent her a sealed letter (plural indefinite article "unes" denoting a single composite document).',
            modern: 'Il lui envoya une lettre scellée.',
          },
          {
            rule: 'Chevaliers doit amer proëce et haïr coardise.',
            example:
              'A knight must love prowess and hate cowardice (generic class noun and abstract nouns take zero article).',
            modern: 'Un chevalier doit aimer la prouesse et haïr la couardise.',
          },
        ],
      },
    ],
  },

  // Unit 4
  {
    id: 'helix-unit-4',
    unitNumber: 4,
    title: 'Unit 4: The Two Adjective Families, Synthetic Comparatives & Affricate Orthography',
    subtitle: 'Laurence Hélix Textbook Lesson 4 · Original Text: Chrétien de Troyes, Yvain (Le Chevalier au Lion)',
    tag: 'Adjectives · Comparatives & Phonology',
    icon: 'Shield',
    summary:
      'Clearly distinguish Class I two-ending adjectives from Class II epicene adjectives ("la grant joie"), and master Latin synthetic comparatives across both cases alongside the pronunciation and spelling of Old French affricates z [ts], c [ts], and ch [tʃ].',
    content: [
      {
        heading: 'I. Class I & Class II Adjectives (Adjectifs de classe I et II) & the Neuter Predicate Case',
        body: [
          '1. Class I Adjectives (derived from Latin 1st/2nd declension -us, -a, -um, e.g., bonus > bon/bone, bellus > bels/bele, novellus > noviax/novele):',
          '   • Masculine inflects exactly like a Type I masculine noun (CS sg: bons, CR sg: bon, CS pl: bon, CR pl: bons).',
          '   • Feminine inflects exactly like a Type I feminine noun (CS/CR sg: bone, CS/CR pl: bones).',
          '   • [Special Stem Consonant Alternations]: The stem-final consonant undergoes three-way alternation between masculine with -s, masculine without -s, and feminine with -e! For example:',
          '     - vif (alive): Masc. CS sg vis (vif+s) / CR sg vif / Fem. vive.',
          '     - bel (fair): Masc. CS sg bels > biaus (bel before a vowel) / CR sg bel / Fem. bele.',
          '     - sec (dry): Masc. CS sg ses / CR sg sec / Fem. seche.',
          '     - lonc (long): Masc. CS sg lons / CR sg lonc / Fem. longue (northeastern dialect: longe).',
          '2. Class II Epicene Adjectives (derived from Latin 3rd declension -is, -e, e.g., grandis > grant, fortis > fort, talis > tel, qualis > quel, dulcis > douz, viridis > vert, brevis > brief, gravis > grief, cortensis > cortois):',
          '   Because Classical Latin "grandis" had the exact same form for masculine and feminine (with no -a ending), in 11th–13th century Old French **Class II adjectives NEVER add -e in the feminine singular**!',
          '   • Masculine: CS sg granz / CR sg grant / CS pl grant / CR pl granz.',
          '   • Feminine: CS sg granz (or grant) / CR sg grant / CS & CR pl granz.',
          '   • Likewise, all adjectives derived from present participles (vaillant, ardant, plaisant, dolent) belong to Class II in Old French and take no -e in the feminine singular ("une dame moult vaillant et plaisant")!',
          '3. Neuter Singular Predicate Case (Cas neutre): When an adjective or past participle modifies a neuter pronoun (ce, impersonal il) or an entire clause, it stands in the neuter singular and **NEVER takes the nominative -s ending**! Compare: "Droiz est" (noun as subject, takes -z) vs. "Il est droit que..." (impersonal neuter predicate adjective, never takes -z!).',
        ],
        rules: [
          {
            rule: 'En la grant (CR sg F) forest ot une fort (CR sg F) tor.',
            example:
              'In the great forest there was a strong tower (neither "grant" nor "fort" adds -e when modifying feminine nouns).',
            modern: 'Dans la grande forêt il y avait une forte tour.',
          },
          {
            rule: 'Il est escrit (Neutre) en la letre ; li livres est escriz (M CS sg).',
            example:
              'Impersonal neuter predicate "escrit" takes no -z; masculine singular subject predicate "escriz" must take -z.',
            modern: 'Il est écrit dans la lettre ; le livre est écrit.',
          },
        ],
      },
      {
        heading: 'II. Synthetic Comparatives (Comparatifs synthétiques) & Superlative Constructions',
        body: [
          'In addition to analytic comparatives (plus + adjective + que / de), Old French inherited a rich set of Latin imparisyllabic synthetic comparatives that shift stress between Cas Sujet and Cas Régime:',
          '• Better (bon): CS mieldre / CR meillor (Adverb: mielz / mieuz < melius).',
          '• Worse (mal / mauvais): CS pire / CR peior (Adverb: pis < pejus).',
          '• Greater / Larger (grant): CS graindre / CR graignor.',
          '• Smaller / Lesser (petit): CS mendre (moindre) / CR menor (Adverb: moins < minus).',
          '• Older / Higher-ranking: CS maire / CR major; Younger: CS joindre / CR gignor.',
          '[Two Syntactic Constructions for the Standard of Comparison]: ① When the standard of comparison is a noun or stressed pronoun expressing degree/measure, Old French regularly introduces it with the preposition **de** ("Il est plus riches de moi" = He is richer than I; "plus de cent" = more than a hundred); ② It can also be introduced by the conjunction "que", and affirmative comparative clauses routinely include expletive negative "ne" in the subordinate clause ("Il est plus sages que je ne cuidai").',
          '[Relative Superlative]: Simply place the definite article or possessive determiner before the comparative to express the superlative ("li plus biaus", "li mieldre chevaliers del monde").',
        ],
        rules: [
          {
            rule: 'Cist chevaliers est mieldre (CS) de toz les autres ; je aim le meillor (CR).',
            example:
              'This knight is better than all the others (CS "mieldre" + preposition "de" for comparison); I love the best one (CR "meillor").',
            modern: 'Ce chevalier est meilleur que tous les autres ; j’aime le meilleur.',
          },
        ],
      },
      {
        heading: 'III. The Affricate System (Affriquées) & Orthographic Conventions',
        body: [
          'In the 11th–12th centuries, Old French possessed four affricate consonants (pronounced with an initial stop release before frication) that later simplified into simple fricatives by the late 13th century:',
          '1. Voiceless dental-alveolar affricate [ts]: Spelled "c" (+ e, i) or "ç" initially/medially (e.g., cent [tsẽnt], ço [tso]); word-finally formed by dental t/d + s and spelled **-z** (e.g., toz [tots], granz [grants], citez [tsitets]).',
          '2. Voiced dental-alveolar affricate [dz]: Found in numerals such as twelve and thirteen (doze [dodzə], treze [tredzə]).',
          '3. Voiceless postalveolar affricate [tʃ]: Spelled **ch** (e.g., chanter [tʃãnter], chevalier [tʃəvaljɛr], pronounced like English "church").',
          '4. Voiced postalveolar affricate [dʒ]: Spelled **j** or **g** (+ e, i) (e.g., joie [dʒɔjə], gent [dʒẽnt], mangier [mãndʒjɛr], pronounced like English "judge").',
        ],
        rules: [
          {
            rule: 'grant + s → granz [grants] ; cité + s → citez [tsitets]',
            example:
              'Whenever a stem ends in dental t/d (including stressed -é < Latin -atem), adding inflectional -s is always written -z.',
            modern: 'grands ; cités',
          },
        ],
      },
    ],
  },

  // Unit 5
  {
    id: 'helix-unit-5',
    unitNumber: 5,
    title: 'Unit 5: Demonstrative System (cist / cil) & the Absolute Oblique Case (CR Absolu)',
    subtitle: 'Laurence Hélix Textbook Lesson 5 · Original Text: Le Roman de Renart (Reynard the Fox)',
    tag: 'Demonstratives · Absolute CR Syntax',
    icon: 'Cpu',
    summary:
      'Master the dual nature of Old French demonstratives as both determiners and standalone pronouns, the complete inflectional matrices of proximal "cist" and distal "cil", and the four core syntactic functions of the prepositionless Cas Régime Absolu.',
    content: [
      {
        heading: 'I. Complete Two-Case Matrices & Dual Syntactic Nature of Proximal "cist" and Distal "cil"',
        body: [
          'In Modern French, demonstrative determiners (ce, cet, cette, ces) and demonstrative pronouns (celui, celle, ceux, celles) have completely separate forms. In Old French, by contrast, **both "cist" (< Vulgar Latin *ecce iste) and "cil" (< *ecce ille) can be placed directly before a noun as a demonstrative determiner (adjective) OR stand alone as an independent demonstrative pronoun**!',
          '• **Proximal System "cist" (this / these, referring to objects near the speaker or just mentioned)**:',
          '  - Masculine: CS sg cist (cis) | CR sg cest (strong stressed dative/genitive **cestui**) | CS pl cist (cis) | CR pl cez (ces).',
          '  - Feminine: CS sg ceste | CR sg ceste (strong stressed **cesti**) | CS pl cestes (cez) | CR pl cestes (cez).',
          '• **Distal System "cil" (that / those, referring to distant objects, narrative protagonists, or followed by a relative clause "he who / the one who")**:',
          '  - Masculine: CS sg cil | CR sg cel (strong stressed dative/genitive **celui**) | CS pl cil | CR pl cels (vocalized to **ceus / ceux**).',
          '  - Feminine: CS sg cele | CR sg cele (strong stressed **celi**) | CS pl celes | CR pl celes.',
          '• **Neuter Demonstrative Pronoun**: ço / ce (< ecce hoc, referring to a whole proposition, stressed or unstressed), invariant for case.',
        ],
        rules: [
          {
            rule: 'Cist chevaliers (Determiner) est proz ; cil (Pronoun) qui vient est li rois.',
            example:
              'This knight is valiant ("cist" as determiner); he who approaches is the king ("cil" as standalone nominative pronoun).',
            modern: 'Ce chevalier est preux ; celui qui vient est le roi.',
          },
          {
            rule: 'Il parla a celui (CR III M) et a celi (CR III F).',
            example:
              'He spoke to that man ("celui") and to that woman ("celi") — strong stressed oblique pronouns.',
            modern: 'Il parla à celui-là et à celle-là.',
          },
        ],
      },
      {
        heading: 'II. Four Core Syntactic Functions of the Prepositionless Oblique (Cas Régime Absolu)',
        body: [
          'Without any preposition, the Old French Cas Régime (CR) independently fulfills the roles of the Latin genitive, dative, ablative, and adverbial accusative of time/space—collectively termed the "Cas Régime Absolu":',
          '1. **Prepositionless Possessive / Genitive Complement (Complément déterminatif / Génitif sans préposition)**:',
          '   When the possessor is an **animate, individualized person of rank** (God "Dieu", the king "le roi", the count "le conte", kin, or a proper personal name), the possessor is placed directly in the Cas Régime immediately after (or occasionally before) the possessed noun, NEVER using the preposition "de"! If the possessor is an inanimate object or abstract noun, the preposition "de" or "a" must be used.',
          '   [Mnemonic]: Animate & noble juxtaposes in CR ("la cort le roi", "l’amor Dieu", "la fille le duc"); inanimate requires a preposition ("la porte del chastel").',
          '2. **Prepositionless Indirect Object / Beneficiary (Datif sans préposition)**: After verbs such as doner, prometre, pardoner, and enseigner, a personal noun in the Cas Régime can serve directly as indirect object ("Dieu mercit" = thanks be to God; "Seignor barons, pardonez moi").',
          '3. **Adverbials of Time, Space & Measure**: "Set anz toz pleins" (for seven full years); "aler grant aleüre" (to ride at full speed); "valoir cent livres" (to be worth a hundred pounds).',
          '4. **Body Parts & Accompanying Posture**: "lever la main destre" (to raise one’s right hand); "plorer des eulz, baisier la boche"; "les mains jointes" (with hands clasped).',
        ],
        rules: [
          {
            rule: 'Li niés Carle (CR absolu) tint l’espee Rollant (CR absolu).',
            example:
              'Charles’s nephew held Roland’s sword (both "Carle" and "Rollant" express possession directly in the Cas Régime without "de").',
            modern: 'Le neveu de Charles tint l’épée de Roland.',
          },
          {
            rule: 'La merci Dieu (CR absolu), nos somes sauf.',
            example:
              'By the grace of God ("Dieu" modifies "merci" directly in the Cas Régime), we are safe.',
            modern: 'Grâce à Dieu, nous sommes saufs.',
          },
        ],
      },
    ],
  },

  // Unit 6
  {
    id: 'helix-unit-6',
    unitNumber: 6,
    title: 'Unit 6: Personal Pronouns, Possessive Systems & Clitic Enclisis (Enclise)',
    subtitle: 'Laurence Hélix Textbook Lesson 6 · Original Text: Béroul, Tristan et Iseut (Tristan and Iseult)',
    tag: 'Pronoun System · Tonic vs. Unstressed & Enclisis',
    icon: 'Layers',
    summary:
      'Untangle the dual-track system of stressed (Tonique) vs. unstressed (Atone) personal pronouns and possessives in Old French, mastering the fixed order of object clitic clusters (COD + COI) and high-frequency enclitic contractions (nel, nes, jel, sil).',
    content: [
      {
        heading: 'I. Complete Matrix of Stressed (Formes toniques) vs. Unstressed (Formes atones) Personal Pronouns',
        body: [
          'Depending on whether a pronoun bears rhythmic phrasal stress in the clause, Old French strictly divides personal pronouns into two morphological series:',
          '• **1st & 2nd Persons Singular and Plural**:',
          '  - Nominative (CS): 1sg je (stressed gié) | 2sg tu | 1pl nos (nous) | 2pl vos (vous).',
          '  - Unstressed Oblique (clitic, adjacent to finite verb): 1sg me (m’) | 2sg te (t’) | 1pl nos | 2pl vos.',
          '  - Stressed Oblique (Tonique—used after prepositions, for clause-initial emphasis, OR before an affirmative imperative or infinitive!): 1sg **moi (mei)** | 2sg **toi (tei)** | 1pl nos | 2pl vos.',
          '• **3rd Person Singular and Plural (distinguishing Nominative, Direct Object COD, Indirect Object COI, and Reflexive)**:',
          '  - Masculine: CS sg il / CS pl il (late OF ils) | Unstressed COD le (sg), les (pl) | Unstressed COI **li** (sg "to him"), **lor** (pl "to them") | Stressed Oblique **lui** (sg), **eus / eulz** (pl).',
          '  - Feminine: CS sg ele / CS pl eles | Unstressed COD la (sg), les (pl) | Unstressed COI **li** (sg "to her"—note that unstressed singular COI is "li" for BOTH masculine and feminine!), **lor** (pl) | Stressed Oblique **li (lei)** (sg), **eles** (pl).',
          '  - Reflexive Pronoun: Unstressed se (s’) | Stressed **soi (sei)**.',
          '[Key Syntactic Laws]: ① In a "Preposition + Infinitive" construction, a pronominal object MUST be placed between the preposition and the infinitive and MUST take its **stressed (tonic) form**! E.g., "por **moi** ocire" (in order to kill me), "sanz **lui** veoir" (without seeing him), "de **soi** defendre" (to defend oneself); ② When a direct object pronoun (le, la, les) and an indirect object pronoun (me, te, li, nos, vos, lor) co-occur before a verb, Old French ALWAYS places **COD before COI** ("Je le vos donrai" = I shall give it to you), and when le/la/les meets 3rd-person li/lor, the direct object le/la/les is routinely **omitted by ellipsis** ("Il li dist" = Il le lui dit, He told it to him)!',
        ],
        rules: [
          {
            rule: 'Il est venuz por moi (tonique) aidier et por lui (tonique) servir.',
            example:
              'A pronoun object between a preposition and an infinitive must use the stressed tonic form ("moi", "lui")!',
            modern: 'Il est venu pour m’aider et pour le servir.',
          },
          {
            rule: 'Je le vos (COD + COI) dirai ; li rois li (ellipsis of le + li) dona.',
            example:
              'Double clitic order is always COD before COI ("le vos"); when 3rd-person "le + li" co-occur, "le" is dropped leaving "li".',
            modern: 'Je vous le dirai ; le roi le lui donna.',
          },
        ],
      },
      {
        heading: 'II. Dual System of Possessive Determiners & Pronouns (Possessifs atones et toniques)',
        body: [
          'Possessives likewise divide into unstressed forms (determiners: my mon/ma/mes) and stressed forms (which can take a definite article as determiners "li miens chevaus" or serve as predicates "Cist chevaus est miens"):',
          '• **Two-Case Inflection of Unstressed Singular Possessives**:',
          '  - Masculine: CS sg **mes, tes, ses** | CR sg **mon, ton, son** | CS pl **mi, ti, si** | CR pl **mes, tes, ses**!',
          '  - Feminine: Sg. CS/CR **ma, ta, sa** (before a vowel-initial feminine noun, Old French elides the vowel to **m’, t’, s’**, e.g., "m’amie" my beloved, "s’espee" his sword, "m’ame" my soul! Only in the 14th century did masculine "mon amie" replace elision) | Pl. CS/CR **mes, tes, ses**.',
          '• **Stressed Singular Possessives**: mien/moie (mine), tuen/toe (thine), suen/soe (his/hers).',
          '• **Plural-Possessor Possessives**: nostre, vostre (epicene in the singular; Masculine Pl. CS nostre / Pl. CR **noz, voz**!); **lor** (their, derived from Latin genitive plural illórum, which is why **in classical Old French "lor" NEVER takes an inflectional -s**, e.g., "lor chevaus", "lor dames"!).',
        ],
        rules: [
          {
            rule: 'Mes (CS sg) peres et mi (CS pl) frere ont pris lor (invariable) espees.',
            example:
              'My father (Sg. CS "mes") and my brothers (Pl. CS "mi"!) have taken up their ("lor" without -s) swords.',
            modern: 'Mon père et mes frères ont pris leurs épées.',
          },
          {
            rule: 'Tristram trait s’espee por desfendre m’amie.',
            example:
              'Feminine possessives ma/ta/sa elide directly to m’/t’/s’ before a vowel ("s’espee", "m’amie").',
            modern: 'Tristan tire son épée pour défendre mon amie.',
          },
        ],
      },
      {
        heading: 'III. Law of Clitic Enclisis (L’Enclise des pronoms atones)',
        body: [
          'When an unstressed object pronoun "le", "les", or the adverbial pronoun "en" follows a vowel-final monosyllabic grammatical particle (ne, je, se, si, que, qui) and precedes a consonant-initial word, the pronoun loses its vowel and fuses onto the preceding particle (Enclise):',
          '• **ne + le → nel** (nu) | **ne + les → nes** | **ne + en → nen**',
          '• **je + le → jel** | **je + les → jes**',
          '• **si + le → sil** | **si + les → sis** | **se + le → sel**',
          '• **que + le → quel** | **qui + le → quil** | **qui + les → quis**',
        ],
        rules: [
          {
            rule: 'Je nel (= ne le) sai mie ; sil (= si le) ferit de l’espee.',
            example:
              'I do not know it at all ("nel" = ne le); and then he struck him with the sword ("sil" = si le).',
            modern: 'Je ne le sais pas ; et il le frappa de l’épée.',
          },
        ],
      },
    ],
  },
];
