/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Unit, Lesson, Exercise } from '../types';
import { UNITS_DATA } from '../data/curriculum';

const UNITS_EN: Record<
  string,
  { title: string; description: string; milestoneTitle: string }
> = {
  'unit-1': {
    title: 'Alterity of Old French & the Particle "si"',
    description:
      'Based on Laurence Hélix Lesson 1 (Le Dit du Papegaut): explore the distinctive feel of Old French, the five meanings of "si", and Verb-Second (V2) word order.',
    milestoneTitle: 'Unit 1 Milestone: Mastery of "si" & V2',
  },
  'unit-2': {
    title: 'Masculine Two-Case System (CS & CR)',
    description:
      'Based on Laurence Hélix Lesson 2 (La Chanson de Roland): master the three masculine declension classes (Types I, II, III) and the Cas Sujet / Cas Régime opposition.',
    milestoneTitle: 'Unit 2 Milestone: Bicasual Codex Crown',
  },
  'unit-3': {
    title: 'Feminine Declension System & Endings',
    description:
      'Based on Laurence Hélix Lesson 3 (Marie de France, Chevrefoil): master feminine Types I, II, and III (dame, flor/flors, suer/seror) and the article system.',
    milestoneTitle: 'Unit 3 Milestone: Honeysuckle Lyric Seal',
  },
  'unit-4': {
    title: 'Adjective Classes & Synthetic Comparatives',
    description:
      'Based on Laurence Hélix Lesson 4 (Chrétien de Troyes, Yvain): distinguish Type I adjectives from Type II epicene adjectives (grant) and synthetic comparatives.',
    milestoneTitle: 'Unit 4 Milestone: Crest of the Knight of the Lion',
  },
  'unit-5': {
    title: 'Demonstratives & Cas Régime Absolu',
    description:
      'Based on Laurence Hélix Lesson 5 (Le Roman de Renart): master proximal cist vs. distal cil and prepositionless possessive constructions (CR Absolu).',
    milestoneTitle: 'Unit 5 Milestone: Renart’s Clever Stratagem',
  },
  'unit-6': {
    title: 'Personal Pronouns, Possessives & Enclisis',
    description:
      'Based on Laurence Hélix Lesson 6 (Tristan et Iseut): master stressed vs. unstressed pronouns (je/moi, li/lui) and manuscript enclitics (nel, jel, sil, nes).',
    milestoneTitle: 'Unit 6 Milestone: Golden Crown of Tristan',
  },
  'unit-7': {
    title: 'Present Indicative & Stem Vowel Alternation',
    description:
      'Based on Laurence Hélix Lesson 7 (Villehardouin): master 1st-person zero endings (je chant) and stress-driven vowel apophony (aime/amons, vient/venons).',
    milestoneTitle: 'Unit 7 Milestone: Conqueror of Byzantium',
  },
  'unit-8': {
    title: 'The Passé Simple (Parfait): Three Systems',
    description:
      'Based on Laurence Hélix Lesson 8 (La Mort le Roi Artu): master weak perfects (-ai, -i) and strong root-stressed perfects in -i, sigmatic -s, and -u.',
    milestoneTitle: 'Unit 8 Milestone: Excalibur & Arthurian Finale',
  },
  'unit-9': {
    title: 'Imperfect Indicative & Present Subjunctive',
    description:
      'Based on Laurence Hélix Lesson 9 (Joinville, Vie de Saint Louis): master the dual imperfect system (-eve / -oie) and zero-ending present subjunctives (qu’il chant).',
    milestoneTitle: 'Unit 9 Milestone: Royal Justice of Saint Louis',
  },
  'unit-10': {
    title: 'Future, Conditional & Grammaticalization',
    description:
      'Based on Laurence Hélix Lesson 10 (Rutebeuf, Le Miracle de Théophile): trace the fusion of infinitive + avoir into future (-ai) and conditional (-oie).',
    milestoneTitle: 'Unit 10 Milestone: Theophilus’s Charter Redeemed',
  },
  'unit-11': {
    title: 'Medieval Negation & Concrete Reinforcers',
    description:
      'Based on Laurence Hélix Lesson 11 (Aucassin et Nicolette): master solo "ne" negation and concrete minimizers (pas, mie, point, gote, bouton).',
    milestoneTitle: 'Unit 11 Milestone: Chantefable Troubadour Seal',
  },
  'unit-12': {
    title: 'Subordinate Clauses & Subjunctive Mood Control',
    description:
      'Based on Laurence Hélix Lesson 12 (Chrétien de Troyes, Perceval): master conjunction networks (que, com, quant, se), relative cui, and modal control.',
    milestoneTitle: 'Unit 12 Milestone: Witness of the Holy Grail',
  },
  'unit-13': {
    title: 'Contractions, Elision & Courtly Meter',
    description:
      'Based on Laurence Hélix Lesson 13 (Guillaume de Lorris, Le Roman de la Rose): master prepositional contractions (al, del, el, es) and octosyllabic verse.',
    milestoneTitle: 'Unit 13 Milestone: Golden Key to the Rose Garden',
  },
  'unit-14': {
    title: 'Invariable Words & Coordinating Conjunctions',
    description:
      'Based on Laurence Hélix Lesson 14 (Christine de Pizan, La Cité des Dames): master -ment adverb formation (granment, forment) and "ainz" vs. "mais".',
    milestoneTitle: 'Unit 14 Milestone: Builder of the City of Ladies',
  },
  'unit-15': {
    title: 'Complex Syntax, Topicalization & Headless Relatives',
    description:
      'Based on Laurence Hélix Lesson 15 (La Farce de Maître Pathelin): master fronted topicalization, substantivized infinitives, and headless "Qui" clauses.',
    milestoneTitle: 'Unit 15 Milestone: Master Pathelin’s Advocate Seal',
  },
  'unit-16': {
    title: 'Participles, Gerunds (-ant) & Fixed Poetic Forms',
    description:
      'Based on Laurence Hélix Lesson 16 (Eustache Deschamps): master declinable present participles, past participle agreement, and the medieval Ballade.',
    milestoneTitle: 'Unit 16 Milestone: Deschamps’s Ballade Laureate',
  },
  'unit-17': {
    title: 'Polysemy, Medieval False Friends & Underworld Jargon',
    description:
      'Based on Laurence Hélix Lesson 17 (François Villon, Le Testament): decode crucial medieval faux-amis (talent, chaitif, engien) and "Mais où sont les neiges d’antan?".',
    milestoneTitle: 'Unit 17 Milestone: Villon’s Immortal Ballad',
  },
  'unit-18': {
    title: 'Historical Phonetics & Four Langue d’Oïl Dialects',
    description:
      'Based on Laurence Hélix Lesson 18 (Serments de Strasbourg & Vie de Saint Alexis): trace the birth of French (842) and compare Francien, Picard, Anglo-Norman, and Champenois.',
    milestoneTitle: 'Unit 18 Grand Finale: Oath of the Birth of French',
  },
};

const LESSONS_EN: Record<
  string,
  { title: string; subtitle: string; grammarSummary: string }
> = {
  'u1-l1': {
    title: 'Foundations: Five Meanings of "si"',
    subtitle: 'From Latin sic to medieval narrative progression',
    grammarSummary:
      '"si" (< Latin sic) is the most versatile discourse connector in Old French: (1) manner "thus"; (2) temporal succession "then, next (= puis)"; (3) subject resumption; (4) consequence "therefore"; (5) adversative "yet, however (= pourtant)".',
  },
  'u1-l2': {
    title: 'Drill: Verb-Second (V2) Word Order',
    subtitle: 'Subject-verb inversion after fronted objects or adverbials',
    grammarSummary:
      'Thurneysen’s V2 Law: whenever a direct object or adverbial opens a main clause, the finite verb must occupy second position (V2) and the subject inverts after the verb (O-V-S or Adv-V-S), identified by its Cas Sujet ending!',
  },
  'u1-l3': {
    title: 'Practice: Sentence Building & Text Analysis',
    subtitle: 'Construct authentic medieval narrative clauses',
    grammarSummary:
      'Medieval narrative prose and verse weave "si" with V2 inversion to create a brisk, rhythmic flow across clauses.',
  },
  'u2-l1': {
    title: 'Foundations: Type I Regular Masculines',
    subtitle: 'Understanding the Diagonal X-Pattern of -s',
    grammarSummary:
      'Type I masculine nouns (< Latin -us/-um) follow the diagonal X-Pattern: Sg. CS takes -s (li murs), Sg. CR has no -s (le mur), Pl. CS has no -s (li mur), and Pl. CR takes -s (les murs).',
  },
  'u2-l2': {
    title: 'Drill: Imparisyllabics & Stress Shift (Types II & III)',
    subtitle: 'Mastering ber/baron, sire/seignor, cuens/conte',
    grammarSummary:
      'Type III imparisyllabic masculine nouns shift stress between Sg. CS and Sg. CR: li ber / le baron, li sire / le seignor, li cuens / le conte, li emperere / l’empereor, li enfes / l’enfant.',
  },
  'u2-l3': {
    title: 'Practice: Battlefield Syntax in La Chanson de Roland',
    subtitle: 'Analyzing epic combat verses at Roncevaux',
    grammarSummary:
      'In epic verse, flexible word order relies on Cas Sujet (-s/imparisyllabic stem) vs. Cas Régime to distinguish who strikes whom on the battlefield.',
  },
  'u3-l1': {
    title: 'Foundations: Type I Regular Feminine Nouns',
    subtitle: 'The dame paradigm: singular without -s, plural with -s',
    grammarSummary:
      'Type I feminine nouns (< Latin 1st declension -a: la dame, la rose, l’espee) do not distinguish CS from CR: singular is always la dame, plural is always les dames.',
  },
  'u3-l2': {
    title: 'Drill: Type II & Type III Feminine Nouns',
    subtitle: 'Exploring flor / flors and suer / seror',
    grammarSummary:
      'Type II feminine nouns (< Latin 3rd declension: flor, amor, cité, mort) take -s/-z in Sg. CS (la flors, la citez)! Type III feminine imparisyllabics shift stems (la suer / la seror, la none / la nonain).',
  },
  'u3-l3': {
    title: 'Practice: Marie de France’s Le Chèvrefeuille',
    subtitle: 'Reading "D’euls deus fu il tut autresi"',
    grammarSummary:
      'Marie de France’s octosyllabic lai of Tristan and Iseult showcases Anglo-Norman forms alongside delicate feminine and pronominal case usage.',
  },
  'u4-l1': {
    title: 'Foundations: Two Adjective Classes & Epicene "grant"',
    subtitle: 'Why "grant" has no feminine -e in Old French',
    grammarSummary:
      'Type I adjectives distinguish masc. and fem. (bons/bon/bone), whereas Type II epicene adjectives (< Latin -is: grant, fort, tel, quel, mortel) have NO feminine -e in classical Old French (une grant dame)!',
  },
  'u4-l2': {
    title: 'Drill: Synthetic Comparatives & Affricate -z [ts]',
    subtitle: 'Mastering mieldre/meillor, pire/peior, graindre/graignor',
    grammarSummary:
      'Old French preserves synthetic Latin comparatives that inflect like imparisyllabics: CS mieldre / CR meillor (better), CS pire / CR peior (worse), CS graindre / CR graignor (greater).',
  },
  'u4-l3': {
    title: 'Practice: The Storm Fountain in Chrétien’s Yvain',
    subtitle: 'Reading the adventure of the Knight of the Lion',
    grammarSummary:
      'Chrétien de Troyes deploys rich adjectival graduation and courtly antithesis to portray Yvain’s marvel at the perilous fountain of Brocéliande.',
  },
  'u5-l1': {
    title: 'Foundations: Proximal "cist" vs. Distal "cil"',
    subtitle: 'Spatial and psychological distance in demonstratives',
    grammarSummary:
      'Both cist ("this here") and cil ("that there") inflect across two cases and two genders, and both can serve either as determiners before a noun or as standalone pronouns!',
  },
  'u5-l2': {
    title: 'Drill: Prepositionless Genitive (Cas Régime Absolu)',
    subtitle: 'Mastering "l’espee Rollant" and "li fiz le rei"',
    grammarSummary:
      'When a possessor is a specific, animate person (God, king, named hero), Old French expresses possession by placing the possessor directly in the Cas Régime without "de".',
  },
  'u5-l3': {
    title: 'Practice: Renart Outwits Ysengrin in Le Roman de Renart',
    subtitle: 'Satirical beast epic & vivid demonstrative syntax',
    grammarSummary:
      'Le Roman de Renart parodies feudal law and courtly formulas while showcasing lively spoken demonstratives and absolute oblique constructions.',
  },
  'u6-l1': {
    title: 'Foundations: Stressed vs. Unstressed Personal Pronouns',
    subtitle: 'Syntactic division of je/moi, tu/toi, li/lui',
    grammarSummary:
      'Old French has a full series of stressed (tonic) pronouns (moi, toi, lui, li) that can stand before an infinitive or after a preposition, alongside unstressed clitics.',
  },
  'u6-l2': {
    title: 'Drill: Classical Enclisis (nel, nes, jel, sil)',
    subtitle: 'Decoding fused manuscript pronouns',
    grammarSummary:
      'Weak object pronouns le and les enclitically fuse onto preceding monosyllables: ne+le → nel, ne+les → nes, je+le → jel, si+le → sil, qui+le → quil.',
  },
  'u6-l3': {
    title: 'Practice: Exile in the Forest of Morrois (Tristan et Iseut)',
    subtitle: 'Reading Béroul’s poignant woodland episode',
    grammarSummary:
      'In the Forest of Morrois, King Mark discovers Tristan and Iseult asleep with the naked sword between them, expressed through tightly woven pronoun and enclitic syntax.',
  },
  'u7-l1': {
    title: 'Foundations: Present Indicative & Zero-Ending 1sg',
    subtitle: 'Understanding "je chant" instead of "je chante"',
    grammarSummary:
      'In 11th–12th C. Old French, 1st-group (-er) verbs have NO final -e in the 1st person singular present indicative: je chant, j’aim, je parol, je pri.',
  },
  'u7-l2': {
    title: 'Drill: Stem Vowel Alternation (Apophony)',
    subtitle: 'Strong rhizotonic vs. weak arrizotonic persons',
    grammarSummary:
      'Movable stress causes the root vowel to diphthongize in strong persons (1, 2, 3sg, 3pl: aim, trueve, vient, muert) while remaining monophthongal in weak persons (1pl, 2pl: amons, trovons, venons, morons).',
  },
  'u7-l3': {
    title: 'Practice: Villehardouin’s War Council before Constantinople',
    subtitle: 'Reading early 13th-century Crusade chronicle prose',
    grammarSummary:
      'Villehardouin’s lucid historical prose alternates direct council speeches (rich in present indicative apophony) with solemn narrative progression.',
  },
  'u8-l1': {
    title: 'Foundations: Weak Passé Simple (-ai and -i)',
    subtitle: 'Ending-stressed narrative past tenses',
    grammarSummary:
      'Weak perfects stress the ending across all six persons: 1st group -ai, -as, -a, -ames, -astes, -erent; 2nd group -i, -is, -i/-it, -imes, -istes, -irent.',
  },
  'u8-l2': {
    title: 'Drill: Strong Passé Simple (-i, Sigmatic -s, and -u)',
    subtitle: 'Mastering ot, sot, pot, mist, prist, vint, tint',
    grammarSummary:
      'Strong perfects stress the root in 1sg, 3sg, and 3pl: -i type (vint, fist, vit), sigmatic -s type (mist, prist, dist), and -u type (ot, sot, pot, volt, dut, jut).',
  },
  'u8-l3': {
    title: 'Practice: King Arthur Commands Excalibur Cast into the Lake',
    subtitle: 'Reading the twilight of Camelot in La Mort le Roi Artu',
    grammarSummary:
      'In the 13th-century Vulgate Mort Artu, Girflet’s three trips to the lake to cast away Excalibur unfold through dramatic strong and weak perfects.',
  },
  'u9-l1': {
    title: 'Foundations: Dual Imperfect Systems (-eve & -oie)',
    subtitle: 'Tracing Latin -abam and -ebam into Old French',
    grammarSummary:
      'Western/Norman texts preserve -eve (< -abam) for 1st-group verbs (chanteve), while central Francien generalizes -eie > -oie (chantoie, avoie, estoie/ere).',
  },
  'u9-l2': {
    title: 'Drill: Zero-Ending Present Subjunctive',
    subtitle: 'Mastering qu’il chant, face, die, aille, soit',
    grammarSummary:
      '1st-group present subjunctives have no -e in the singular (qu’il chant, qu’il aint, que Deus vos saut!), while 3rd-group verbs take -e (face, die, vienne, puisse).',
  },
  'u9-l3': {
    title: 'Practice: Saint Louis Renders Justice Beneath the Oak of Vincennes',
    subtitle: 'Reading Joinville’s Vie de Saint Louis',
    grammarSummary:
      'Joinville uses the imperfect (-oit) to paint the habitual, accessible justice of King Louis IX seated on a carpet under the oak tree of Vincennes.',
  },
  'u10-l1': {
    title: 'Foundations: Future Tense Origins & Infinitive Fusion',
    subtitle: 'How chanter + ai fused into chanterai',
    grammarSummary:
      'The Romance future arose from Vulgar Latin infinitive + present of habēre (-ai, -as, -a, -ons, -oiz/-ez, -ont), triggering vowel syncope and consonant assimilation (venrai > vendrai).',
  },
  'u10-l2': {
    title: 'Drill: Conditional Morphology & Hypothetical Clauses',
    subtitle: 'Infinitive stem + imperfect endings (-oie, -oies, -oit)',
    grammarSummary:
      'The conditional fuses the future stem with imperfect endings (-oie, -oies, -oit, -iiens, -iiez, -oient) to express future-in-the-past or potential outcome.',
  },
  'u10-l3': {
    title: 'Practice: Pact & Redemption in Rutebeuf’s Miracle de Théophile',
    subtitle: 'The medieval dramatic precursor to the Faust legend',
    grammarSummary:
      'Théophile’s agonized monologue of remorse and prayer to the Virgin Mary abounds in future and conditional forms weighing damnation against grace.',
  },
  'u11-l1': {
    title: 'Foundations: Solo "ne" & Concrete Negative Objects',
    subtitle: 'From a step (pas) and a crumb (mie) to a drop (gote)',
    grammarSummary:
      'Old French can negate any verb with "ne" alone, or reinforce it with vivid concrete nouns denoting tiny objects: pas (step), mie (crumb), point (speck), gote (drop).',
  },
  'u11-l2': {
    title: 'Drill: Nuances of ne... mie, ne... point & Forclusifs',
    subtitle: 'Mastering medieval negative polarity items',
    grammarSummary:
      'In medieval verse, knights swear something is not worth "an old spur (un viez esperon)", "a glove (un gant)", "a peeled apple (une pome paree)", or "a penny (un denier)".',
  },
  'u11-l3': {
    title: 'Practice: Alternating Verse & Prose in Aucassin et Nicolette',
    subtitle: 'Reading the unique 13th-century chantefable',
    grammarSummary:
      'Aucassin et Nicolette alternates sung 7-syllable assonanced verse ("Or se cante") with spoken dramatic prose ("Or dient et content et fabloient").',
  },
  'u12-l1': {
    title: 'Foundations: The Four Core Conjunctions (que, com, quant, se)',
    subtitle: 'Navigating medieval subordinate clause networks',
    grammarSummary:
      'Polyvalent "que" (complementizer, causal, consecutive, comparative), temporal "quant", comparative "com", and conditional "se" (< Latin sī) structure complex medieval periods.',
  },
  'u12-l2': {
    title: 'Drill: Subjunctive Control in Subordinate Clauses',
    subtitle: 'Counterfactual "se + imperfect subjunctive" & relative cui',
    grammarSummary:
      'In classical Old French, a counterfactual condition uses the imperfect subjunctive in BOTH clauses ("Se je poïsse, je le feïsse"), and "cui" marks the dative/genitive relative pronoun.',
  },
  'u12-l3': {
    title: 'Practice: The Bleeding Lance & Grail Procession in Perceval',
    subtitle: 'Perceval’s fateful silence at the Fisher King’s castle',
    grammarSummary:
      'At the Fisher King’s banquet, Perceval beholds the bleeding white lance and radiant Graal, yet dares not ask "cui l’en en servoit" (whom one served with it).',
  },
  'u13-l1': {
    title: 'Foundations: Preposition + Article Contractions (al, del, el, es)',
    subtitle: 'Mastering coalesced forms in manuscripts',
    grammarSummary:
      'Prepositions a, de, and en obligatorily contract with masculine singular le and plural les: al (< a+le), as (< a+les), del (< de+le), des (< de+les), el (< en+le), es (< en+les).',
  },
  'u13-l2': {
    title: 'Drill: Octosyllabic Meter & Vowel Elision',
    subtitle: 'Counting syllables and hiatus in courtly romance',
    grammarSummary:
      'The octosyllabic rhymed couplet (8 syllables per line, plus an uncounted final feminine -e) is the heartbeat of courtly romance, drama, and allegory.',
  },
  'u13-l3': {
    title: 'Practice: Entering the Garden of Delight in Le Roman de la Rose',
    subtitle: 'The Lover gazes into the Fountain of Narcissus',
    grammarSummary:
      'Guillaume de Lorris’s springtime opening combines luminous octosyllabic rhythm with prepositional contractions (el vergier, al miroër perilleus).',
  },
  'u14-l1': {
    title: 'Foundations: Grammaticalization of -ment Adverbs',
    subtitle: 'Why grant + ment yields granment and fort yields forment',
    grammarSummary:
      'Derived from Latin feminine ablative mente ("with a ... mind"), Type I adjectives add -ment to their feminine in -e (bonement), while Type II epicene adjectives add -ment directly without -e- (granment, forment).',
  },
  'u14-l2': {
    title: 'Drill: Coordinating Network & Corrective "ainz" vs. "mais"',
    subtitle: 'Distinguishing restriction (mais) from strong refutation (ainz)',
    grammarSummary:
      'After a negative clause, "ainz / ainçois" means "on the contrary, rather" (replacing the negated idea completely), whereas "mais" simply adds a caveat.',
  },
  'u14-l3': {
    title: 'Practice: Building the Allegorical City in La Cité des Dames',
    subtitle: 'Lady Reason, Rectitude & Justice lay the foundations',
    grammarSummary:
      'Christine de Pizan uses refined logical connectors and -ment adverbs to refute misogynist authorities and raise the walls of the City of Ladies.',
  },
  'u15-l1': {
    title: 'Foundations: Fronted Topicalization & Prolepsis',
    subtitle: 'Object fronting and expressive focus in medieval syntax',
    grammarSummary:
      'Old French frequently extracts a key noun phrase to the very front of a sentence (prolepsis/topicalization) before resuming it with a pronoun inside the clause.',
  },
  'u15-l2': {
    title: 'Drill: Headless Relative Clauses ("Qui..." = Whoever / If anyone)',
    subtitle: 'Medieval legal maxims and proverbs',
    grammarSummary:
      'Without a preceding antecedent, "Qui" means "He who / Whoever" (or "If anyone" when paired with a conditional verb).',
  },
  'u15-l3': {
    title: 'Practice: Courtroom Chaos & "Revenons à nos moutons"',
    subtitle: 'Reading the 15th-century Farce de Maître Pathelin',
    grammarSummary:
      'In the hilarious courtroom scene where the draper confuses his stolen cloth with his stolen sheep, the judge utters the immortal phrase "Revenons à ces moutons!"',
  },
  'u16-l1': {
    title: 'Foundations: Participle Declension & Object Agreement',
    subtitle: 'Mastering -anz/-ant and past participle agreement',
    grammarSummary:
      'Present participles inflect like Type II epicene adjectives (CS -anz / CR -ant); past participles conjugated with avoir agree with a preceding direct object.',
  },
  'u16-l2': {
    title: 'Drill: Structure of the Medieval Ballade',
    subtitle: 'Three stanzas, identical Refrain, and Prince Envoi',
    grammarSummary:
      'The classical Ballade consists of three stanzas sharing identical rhymes and ending with the same Refrain line, followed by a shorter Envoi addressed to the "Prince".',
  },
  'u16-l3': {
    title: 'Practice: Eustache Deschamps’s Ballades of Times of War',
    subtitle: 'Moral reflection and lyrical refrains in the 14th century',
    grammarSummary:
      'Deschamps uses participial constructions and resonant ballade refrains to lament the ravages of war and the fleetingness of worldly power.',
  },
  'u17-l1': {
    title: 'Foundations: Four Deadly Medieval Faux-Amis (False Friends)',
    subtitle: 'Beware of talent, chaitif, engien, and navrer',
    grammarSummary:
      'Crucial medieval meanings: (1) talent = desire/will (NOT talent!); (2) chaitif = captive/wretched (NOT puny!); (3) engien = wit/ruse (NOT machine!); (4) navrer = to wound physically.',
  },
  'u17-l2': {
    title: 'Drill: Underworld Jargon & The Ballad of the Hanged Men',
    subtitle: 'Villon’s "Frères humains qui après nous vivez"',
    grammarSummary:
      'In the Ballade des pendus, Villon speaks from the gallows to beg his fellow mortals not to harden their hearts, praying that God may absolve us all.',
  },
  'u17-l3': {
    title: 'Practice: Ballad of the Ladies of Times Past',
    subtitle: 'Reading "Mais où sont les neiges d’antan?"',
    grammarSummary:
      'Villon’s haunting ubi sunt ballad evokes Flora, Héloïse, Queen Blanche, and Joan of Arc ("Jehanne la bonne Lorraine"), sealed by the refrain "But where are the snows of yesteryear?"',
  },
  'u18-l1': {
    title: 'Foundations: The Oaths of Strasbourg (AD 842)',
    subtitle: 'Witnessing the birth certificate of the French language',
    grammarSummary:
      'On February 14, 842, Louis the German swore in Romana lingua ("Pro Deo amur et pro christian poblo et nostro commun salvament...") so Charles the Bald’s Frankish-Romance soldiers could understand—the earliest extant text in proto-French!',
  },
  'u18-l2': {
    title: 'Drill: Four Langue d’Oïl Dialects & Palatalization Laws',
    subtitle: 'Distinguishing Picard, Anglo-Norman, Champenois & Francien',
    grammarSummary:
      'Dialectal markers: Picard keeps c+a unpalatalized (camp, kier) and palatalizes c+e/i to ch (chité); Anglo-Norman keeps ei (rei, fei) and writes u for closed o (seignur, amur).',
  },
  'u18-l3': {
    title: 'Practice: La Vie de Saint Alexis (c. 1040)',
    subtitle: 'Reading "Bons fut li secles al tens ancïenur"',
    grammarSummary:
      'Composed around 1040 in solemn 5-line decasyllabic stanzas, La Vie de Saint Alexis is the first great literary masterpiece of classical Old French.',
  },
};

/**
 * Exact handcrafted translations for Unit 1 exercises so the very first lessons feel 100% native
 */
const HANDCRAFTED_EXERCISES_EN: Record<
  string,
  {
    prompt: string;
    options?: { id: string; text: string; explanation?: string }[];
    explanation: string;
    latinOrigin?: string;
  }
> = {
  'u1-l1-e1': {
    prompt:
      '[Intro Guide] In Le Dit du Papegaut, what syntactic and semantic role does the particle "si" play in "Et li chevaliers si s’en ala"?',
    options: [
      {
        id: '1',
        text: 'Temporal succession & narrative link: "then, and so" (Puis / Alors)',
        explanation: '"si" drives narrative progression in Old French.',
      },
      { id: '2', text: 'Conditional conjunction: "if" (Si conditionnel)' },
      { id: '3', text: 'Interrogative adverb: "why" (Pourquoi)' },
    ],
    explanation:
      'Correct! Laurence Hélix notes that "si" derives from Latin sic ("thus"), evolving in Old French into a ubiquitous temporal and logical narrative connector (= Modern French alors, puis).',
    latinOrigin: 'Lat. sic (thus) → Old Fr. si (then/and so) → Mod. Fr. alors',
  },
  'u1-l1-e2': {
    prompt:
      '[Etymology] In medieval northern France (Langue d’oïl), which pair of words meant "yes" and "no"?',
    options: [
      { id: '1', text: 'Oïl (yes) and Nenil (no)' },
      { id: '2', text: 'Oc (yes) and No (no)' },
    ],
    explanation:
      '"Oïl" derives from Latin hoc ille ("this he [does]"), which evolved into Modern French "oui"; "nenil" derives from non ille (> nenni). Southern Occitan used "oc".',
  },
  'u1-l1-e3': {
    prompt:
      '[Semantics] How should the formulaic phrase "si com" in "Si com l’estoire le tesmoigne" be translated?',
    options: [
      { id: '1', text: 'Just as / As (Comme / De même que)' },
      { id: '2', text: 'Although the chronicle testifies (Bien que)' },
      { id: '3', text: 'If the chronicle testifies (Si)' },
    ],
    explanation:
      '"Si com" (< Latin sic quomodo) is a classic medieval romance formula meaning "just as / even as".',
  },
  'u1-l1-e4': {
    prompt:
      '[Consequence] In "Il ot grant faim, si manja", what logical relationship does "si" express?',
    options: [
      { id: '1', text: 'Consecutive result: "and therefore / so" (Donc / Par conséquent)' },
      { id: '2', text: 'Concessive: "nevertheless" (Quoique)' },
      { id: '3', text: 'Emphatic negation: "not at all" (Nullement)' },
    ],
    explanation:
      'Hunger leads directly to eating; here "si" marks consecutive result ("he was very hungry, and so he ate").',
  },
  'u1-l1-e5': {
    prompt:
      '[Adversative Nuance] In "Mout le pria, si ne volt rien fere", what nuance does "si" carry?',
    options: [
      { id: '1', text: 'Adversative contrast: "yet / however" (Pourtant)' },
      { id: '2', text: 'Proviso: "provided that" (Pourvu que)' },
      { id: '3', text: 'Indirect question: "whether" (Si interrogatif)' },
    ],
    explanation:
      'Between earnest pleading ("Mout le pria") and refusal ("ne volt rien fere"), "si" expresses strong adversative contrast ("yet / however").',
  },
  'u1-l1-e6': {
    prompt:
      '[Etymology] What is the Latin etymon of the Old French discourse connector "si"?',
    options: [
      { id: '1', text: 'sic (adverb: "thus, in this manner")' },
      { id: '2', text: 'sī (conjunction: "if")' },
      { id: '3', text: 'sed (conjunction: "but")' },
    ],
    explanation:
      'In Old French, the conditional conjunction "if" is spelled "se" (or "s’" before a vowel), whereas the connector "si" comes from Latin sic!',
  },
  'u1-l1-e7': {
    prompt:
      '[Text Completion] Fill in the blank to mean "Just as the knight said": "______ li chevaliers dist"',
    explanation:
      '"Si com" (just as) + subject "li chevaliers" + verb "dist" forms the quintessential medieval citation formula.',
  },
  'u1-l1-e8': {
    prompt:
      '[Case Identification] In "Li reis si parla", what case form is the subject "li reis"?',
    options: [
      { id: 'cs', text: 'Cas Sujet Singular — with article "li" and nominative "-s"' },
      { id: 'cr', text: 'Cas Régime Singular (Oblique)' },
    ],
    explanation:
      '"li reis" is a Type I masculine noun in the Cas Sujet singular, serving as the agent subject of "parla".',
  },
  'u1-l1-e9': {
    prompt:
      '[Syntax] Why do Old French authors so frequently insert "si" between the subject and the verb ("Li chevaliers si s’en ala")?',
    options: [
      { id: '1', text: 'To sustain oral narrative rhythm and highlight subject continuity' },
      { id: '2', text: 'Because verbs cannot be conjugated without a particle' },
      { id: '3', text: 'To turn the statement into a question' },
    ],
    explanation:
      'In oral recitation and manuscript prose, "si" anchors the topic and propels the narrative forward.',
  },
  'u1-l1-e10': {
    prompt:
      '[Modern Parallel] Which Modern French sentence best translates "Li papegauz si chantet cler"?',
    options: [
      { id: '1', text: 'Le perroquet alors chante clairement.' },
      { id: '2', text: 'Si le perroquet chante clair.' },
      { id: '3', text: 'Le perroquet chante si fort.' },
    ],
    explanation:
      '"li papegauz" is the subject ("the parrot"), "si" is the narrative connector ("then"), and "chantet cler" means "sings clearly".',
  },
};

/**
 * Rule-based philological translation engine for exercise prompts, options, and explanations across Units 1–18
 */
function translateExerciseTextToEn(zh: string, promptModernFr?: string, promptOldFr?: string): string {
  if (!zh) return '';

  let s = zh;

  // 1. Translate bracketed exercise category tags 【...】
  s = s.replace(/^【([^】]+)】\s*/, (_, tag: string) => {
    const tagMap: Record<string, string> = {
      新手引导: 'Intro Guide',
      词源引导: 'Etymology',
      语义辨析: 'Semantic Nuance',
      因果连缀: 'Causal Link',
      转折辨析: 'Contrastive Nuance',
      词源追溯: 'Etymology',
      原典选词: 'Manuscript Choice',
      施事识别: 'Subject Case',
      句法功能: 'Syntactic Function',
      现代对译: 'Modern French Parallel',
      语序演练: 'V2 Word Order',
      句法巩固: 'Syntax Drill',
      倒装辨析: 'Inversion Analysis',
      格位判断: 'Case Identification',
      语言比较: 'Comparative Linguistics',
      成分识别: 'Syntactic Role',
      选填主语: 'Select Subject (CS)',
      倒装触发: 'V2 Trigger',
      格位演练: 'Case Drill',
      理论归纳: 'Core Rule',
      原典句构: 'Sentence Construction',
      倒装句构: 'V2 Inversion Construction',
      原典阅读: 'Manuscript Reading',
      句法分析: 'Syntactic Analysis',
      选填动词: 'Select Verb',
      词形判断: 'Morphological Analysis',
      句型转换: 'Syntactic Transformation',
      变格复习: 'Declension Review',
      基础引导: 'Foundations',
      复数辨析: 'Plural Case Analysis',
      直宾判断: 'Oblique Case (CR)',
      复数宾格: 'Plural Oblique (CR)',
      规律归纳: 'Pattern Summary',
      拉丁渊源: 'Latin Etymology',
      词形选填: 'Form Selection',
      现代遗留: 'Modern French Survival',
      句中填空: 'Sentence Completion',
      重音转移: 'Imparisyllabic Stress Shift',
      直宾格辨析: 'Oblique Stem (CR)',
      领主辨析: 'Lord Paradigm (sire/seignor)',
      直宾领主: 'Oblique Lord (seignor)',
      伯爵辨析: 'Count Paradigm (cuens/conte)',
      皇帝辨析: 'Emperor Paradigm (emperere/empereor)',
      青年辨析: 'Imparisyllabic (enfes/enfant)',
      无词尾阳性: 'Type II Masculine',
      词源分化: 'Lexical Split',
      选填主格: 'Select Cas Sujet',
      表语格位: 'Predicate Complement Case',
      名篇原句: 'Classic Verse',
      选填复数主语: 'Select Plural Subject',
      原典名剑: 'Epic Sword Syntax',
      综合演练: 'Comprehensive Drill',
    };
    const mapped = tagMap[tag] || 'Philology Drill';
    return `[${mapped}] `;
  });

  // 2. Common prompt & option templates
  s = s
    .replace(/请点击下方词块，拼出“([^”]+)”：?/g, (_, meaning) =>
      promptModernFr
        ? `Tap the word tiles below to construct the Old French sentence corresponding to "${promptModernFr}":`
        : `Tap the word tiles below to assemble the Old French sentence (${meaning}):`
    )
    .replace(/按 V2 律拼出“([^”]+)”（([^）]+)）：?/g, (_, _m, hint) =>
      `Using V2 inversion (${translateInlineTerms(hint)}), tap the word tiles to construct "${
        promptModernFr || 'the Old French clause'
      }":`
    )
    .replace(/拼出“([^”]+)”：?/g, () =>
      promptModernFr
        ? `Assemble the Old French sentence corresponding to "${promptModernFr}":`
        : `Tap the word tiles below to construct the Old French sentence:`
    )
    .replace(/观察词形“([^”]+)”（([^）]+)），判断其语法格位：/g, 'Examine the form "$1" and identify its grammatical case and number:')
    .replace(/观察句子“([^”]+)”（([^）]+)），判断“([^”]+)”的语法格与句法成分：/g, 'In "$1", identify the grammatical case and syntactic role of "$3":')
    .replace(/在“([^”]+)”（([^）]+)）中，“([^”]+)”是：/g, 'In "$1", what is the grammatical case of "$3"?')
    .replace(/在“([^”]+)”中，“([^”]+)”是什么格？/g, 'In "$1", what case is "$2"?')
    .replace(/在“([^”]+)”（([^）]+)），“([^”]+)”是什么格？/g, 'In "$1", what case is "$3"?')
    .replace(/“([^”]+)”的语法格与数是：/g, 'What are the grammatical case and number of "$1"?');

  // 3. Translate inline grammatical terms
  s = translateInlineTerms(s);

  // 4. If a sentence still has substantial Chinese characters, transform it into a clear English philological explanation/prompt
  if (/[\u4e00-\u9fff]/.test(s)) {
    s = cleanRemainingChinese(s, promptModernFr, promptOldFr);
  }

  return s.trim();
}

function translateInlineTerms(input: string): string {
  return input
    .replace(/主格单数/g, 'Cas Sujet Singular (Nom. Sg.)')
    .replace(/直宾格单数/g, 'Cas Régime Singular (Obl. Sg.)')
    .replace(/宾格单数/g, 'Cas Régime Singular (Obl. Sg.)')
    .replace(/主格复数/g, 'Cas Sujet Plural (Nom. Pl.)')
    .replace(/直宾格复数/g, 'Cas Régime Plural (Obl. Pl.)')
    .replace(/宾格复数/g, 'Cas Régime Plural (Obl. Pl.)')
    .replace(/单数主格/g, 'Cas Sujet Singular')
    .replace(/单数直宾格/g, 'Cas Régime Singular')
    .replace(/单数宾格/g, 'Cas Régime Singular')
    .replace(/复数主格/g, 'Cas Sujet Plural')
    .replace(/复数直宾格/g, 'Cas Régime Plural')
    .replace(/复数宾格/g, 'Cas Régime Plural')
    .replace(/绝对直宾格/g, 'Cas Régime Absolu (prepositionless genitive)')
    .replace(/直接宾语/g, 'Direct Object (COD)')
    .replace(/间接宾语/g, 'Indirect Object (COI)')
    .replace(/介词宾语/g, 'Prepositional Object')
    .replace(/主语表语/g, 'Subject Complement (Predicate)')
    .replace(/表语/g, 'Subject Complement (CS)')
    .replace(/呼语/g, 'Vocative Address (CS)')
    .replace(/主格/g, 'Cas Sujet (Nominative)')
    .replace(/直宾格/g, 'Cas Régime (Oblique)')
    .replace(/斜格/g, 'Cas Régime (Oblique)')
    .replace(/宾格/g, 'Cas Régime (Oblique)')
    .replace(/第一类规则阳性名词/g, 'Type I regular masculine noun')
    .replace(/第一类阳性名词/g, 'Type I masculine noun')
    .replace(/第二类阳性名词/g, 'Type II masculine noun')
    .replace(/第三类不等音节阳性名词/g, 'Type III imparisyllabic masculine noun')
    .replace(/不等音节词/g, 'imparisyllabic noun')
    .replace(/第一类阴性名词/g, 'Type I feminine noun')
    .replace(/第二类阴性名词/g, 'Type II feminine noun')
    .replace(/第三类阴性名词/g, 'Type III feminine noun')
    .replace(/第二类通性形容词/g, 'Type II epicene adjective')
    .replace(/第一类形容词/g, 'Type I adjective')
    .replace(/简单过去时/g, 'passé simple (parfait)')
    .replace(/未完成过去时/g, 'imparfait')
    .replace(/直陈式现在时/g, 'present indicative')
    .replace(/现在虚拟式/g, 'present subjunctive')
    .replace(/虚拟式未完成过去时/g, 'imperfect subjunctive')
    .replace(/虚拟式/g, 'subjunctive')
    .replace(/条件式/g, 'conditional')
    .replace(/简单将来时/g, 'future tense')
    .replace(/将来时/g, 'future tense')
    .replace(/过去分词/g, 'past participle')
    .replace(/现在分词/g, 'present participle')
    .replace(/副动词/g, 'gerund (-ant)')
    .replace(/定冠词/g, 'definite article')
    .replace(/人称代词/g, 'personal pronoun')
    .replace(/关系代词/g, 'relative pronoun')
    .replace(/指示代词/g, 'demonstrative pronoun')
    .replace(/物主代词/g, 'possessive pronoun')
    .replace(/主谓倒装/g, 'verb-subject inversion (V2)')
    .replace(/倒装在句尾作主语/g, 'inverted subject at the end of the clause')
    .replace(/充当宾语/g, 'functioning as object')
    .replace(/充当主语/g, 'functioning as subject')
    .replace(/主语/g, 'Subject (S)')
    .replace(/动词/g, 'Verb (V)')
    .replace(/宾语/g, 'Object (O)')
    .replace(/状语/g, 'Adverbial (Adv)')
    .replace(/补语/g, 'Complement (C)')
    .replace(/正确！/g, 'Correct! ')
    .replace(/拉丁语/g, 'Latin ')
    .replace(/古法语/g, 'Old French ')
    .replace(/现代法语/g, 'Modern French ')
    .replace(/词尾/g, 'ending ');
}

function cleanRemainingChinese(
  text: string,
  promptModernFr?: string,
  promptOldFr?: string
): string {
  // Extract quoted Old French / Latin / Modern French tokens to preserve them
  const quoted = Array.from(text.matchAll(/[“"«]([^”"»]+)[”"»]/g)).map((m) => m[1]);
  const parensLatin = Array.from(text.matchAll(/\(([A-Za-zÀ-ÿ\s/<>=-]+)\)/g)).map((m) => m[1]);

  // Remove parenthetical Chinese notes like （这城墙）
  let cleaned = text
    .replace(/（[^）]*[\u4e00-\u9fff]+[^）]*）/g, '')
    .replace(/\([^)]*[\u4e00-\u9fff]+[^)]*\)/g, '');

  // Replace remaining Chinese segments while keeping English/French/Latin tokens
  cleaned = cleaned
    .replace(/在/g, ' in ')
    .replace(/中/g, ' ')
    .replace(/的/g, ' ')
    .replace(/是/g, ' is ')
    .replace(/与/g, ' and ')
    .replace(/或/g, ' or ')
    .replace(/由/g, ' formed by ')
    .replace(/构成/g, '')
    .replace(/源自/g, 'derived from ')
    .replace(/源于/g, 'derived from ')
    .replace(/表示/g, 'expresses ')
    .replace(/意为/g, 'meaning ')
    .replace(/选填/g, 'Select ')
    .replace(/填入/g, 'Fill in ')
    .replace(/判断/g, 'Identify ')
    .replace(/为什么/g, 'Why ')
    .replace(/如何/g, 'How ')
    .replace(/哪一个/g, 'which form ')
    .replace(/什么/g, 'what ')
    .replace(/[\u4e00-\u9fff]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Ensure clear readability if prompt or explanation became too terse
  if (cleaned.length < 12) {
    if (promptOldFr && promptModernFr) {
      return `Analyze the Old French form in "${promptOldFr}" (Mod. Fr.: "${promptModernFr}"):`;
    }
    if (quoted.length > 0) {
      return `Identify the correct Old French form or grammatical rule for "${quoted.join(' / ')}":`;
    }
    if (parensLatin.length > 0) {
      return `Select the matching grammatical form (${parensLatin.join(', ')}):`;
    }
    return 'Select the correct Old French philological analysis:';
  }

  return cleaned;
}

export function localizeExercise(ex: Exercise, lang: Language = 'en'): Exercise {
  if (lang === 'zh') return ex;

  const hand = HANDCRAFTED_EXERCISES_EN[ex.id];
  if (hand) {
    return {
      ...ex,
      prompt: hand.prompt,
      options: ex.options?.map((opt) => {
        const hOpt = hand.options?.find((o) => o.id === opt.id);
        return hOpt
          ? { ...opt, text: hOpt.text, explanation: hOpt.explanation }
          : {
              ...opt,
              text: translateExerciseTextToEn(opt.text, ex.promptModernFrench, ex.promptOldFrench),
            };
      }),
      explanation: hand.explanation,
      latinOrigin: hand.latinOrigin || (ex.latinOrigin ? translateInlineTerms(ex.latinOrigin) : undefined),
    };
  }

  // Translate prompt
  let promptEn = translateExerciseTextToEn(ex.prompt, ex.promptModernFrench, ex.promptOldFrench);
  if (ex.type === 'word_bank' && ex.promptModernFrench) {
    promptEn = `[Sentence Construction] Tap the word tiles below to construct the Old French sentence corresponding to "${ex.promptModernFrench}":`;
  } else if (ex.type === 'fill_blank' && ex.promptOldFrench) {
    promptEn = `[Fill in the Blank] Complete the Old French verse or clause: "${ex.promptOldFrench}"${
      ex.promptModernFrench ? ` (${ex.promptModernFrench})` : ''
    }`;
  } else if (ex.type === 'case_declension' && ex.promptOldFrench) {
    const quotedTarget = Array.from(ex.prompt.matchAll(/“([^”]+)”/g)).pop()?.[1];
    promptEn = `[Case Declension] In "${ex.promptOldFrench}"${
      ex.promptModernFrench ? ` (${ex.promptModernFrench})` : ''
    }, identify the case and syntactic role${quotedTarget ? ` of "${quotedTarget}"` : ''}:`;
  }

  const optionsEn = ex.options?.map((opt) => ({
    ...opt,
    text: translateExerciseTextToEn(opt.text, ex.promptModernFrench, ex.promptOldFrench),
    translation: opt.translation ? translateInlineTerms(opt.translation) : undefined,
    explanation: opt.explanation
      ? translateExerciseTextToEn(opt.explanation, ex.promptModernFrench, ex.promptOldFrench)
      : undefined,
  }));

  const correctOpt = optionsEn?.find(
    (o) => o.isCorrect || o.id === ex.correctAnswer
  );
  let explanationEn = translateExerciseTextToEn(
    ex.explanation,
    ex.promptModernFrench,
    ex.promptOldFrench
  );
  if (explanationEn.length < 18 && correctOpt) {
    explanationEn = `Correct answer: ${correctOpt.text}.${
      ex.promptModernFrench ? ` Modern French parallel: "${ex.promptModernFrench}".` : ''
    }`;
  }

  return {
    ...ex,
    prompt: promptEn,
    options: optionsEn,
    explanation: explanationEn,
    latinOrigin: ex.latinOrigin ? translateInlineTerms(ex.latinOrigin) : undefined,
  };
}

export function getLocalizedLesson(lesson: Lesson, lang: Language = 'en'): Lesson {
  if (lang === 'zh') return lesson;
  const lesMeta = LESSONS_EN[lesson.id];
  return {
    ...lesson,
    title: lesMeta?.title || translateInlineTerms(lesson.title),
    subtitle: lesMeta?.subtitle || translateInlineTerms(lesson.subtitle),
    helixLessonRef: lesson.helixLessonRef
      ? lesson.helixLessonRef.replace(/Hélix 第 (\d+) 课/, 'Hélix Lesson $1')
      : undefined,
    grammarSummary: lesMeta?.grammarSummary || translateInlineTerms(lesson.grammarSummary),
    exercises: lesson.exercises.map((e) => localizeExercise(e, lang)),
  };
}

let cachedEnUnits: Unit[] | null = null;

export function getLocalizedUnits(lang: Language = 'en'): Unit[] {
  if (lang === 'zh') return UNITS_DATA;
  if (cachedEnUnits) return cachedEnUnits;

  cachedEnUnits = UNITS_DATA.map((u) => {
    const uMeta = UNITS_EN[u.id];
    return {
      ...u,
      title: uMeta?.title || u.title,
      description: uMeta?.description || u.description,
      milestoneTitle: uMeta?.milestoneTitle || u.milestoneTitle,
      lessons: u.lessons.map((l) => getLocalizedLesson(l, 'en')),
    };
  });

  return cachedEnUnits;
}
