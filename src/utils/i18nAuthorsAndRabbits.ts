/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, RabbitSkin, AuthorPortrait } from '../types';
import { RABBIT_SKINS, MEDIEVAL_AUTHORS } from '../data/authorsAndRabbits';

const RABBIT_SKINS_EN: Record<
  string,
  Pick<RabbitSkin, 'name' | 'era' | 'description' | 'greetingMessage' | 'quoteTranslation'>
> = {
  'rabbit-scribe': {
    name: 'Jehan the Scribe Rabbit',
    era: '12th-Century Monastic Scriptorium',
    description:
      'Clad in an azure hood and holding a sharpened goose quill, this scholarly scribe rabbit guards ancient parchment codices day and night.',
    greetingMessage:
      'Deus vos saut, bels clers! The ink is freshly ground and the quill sharpened—mind the vellum and let us begin today’s study of Old French!',
    quoteTranslation: '“It is written upon parchment; the clerk who hears it shall know wisdom.”',
  },
  'rabbit-knight': {
    name: 'Templar Knight Rabbit',
    era: '12th-Century Crusades & Feudal Fiefs',
    description:
      'Armored in chainmail hauberk with a golden lion shield and broadsword, defending the two-case declension law along manuscript margins.',
    greetingMessage:
      'Montjoie! Draw your blade, fellow companion! By our chivalric oath, today we shall conquer every bastion of the bicasual system together!',
    quoteTranslation: '“For one’s lord, a vassal must endure great heat and bitter cold.”',
  },
  'rabbit-minstrel': {
    name: 'Court Trouvère Rabbit',
    era: '13th-Century Court of Champagne',
    description:
      'Wearing afeathered chaperon and strumming a medieval lute, weaving octosyllabic couplets and songs of fin’amor.',
    greetingMessage:
      'Oez, seignor et bele amie! Hear the gentle lute strings, sip a cup of spiced hypocras, and sing these courtly octosyllabic verses with me!',
    quoteTranslation: '“I wish to compose a new song for the fair lady who holds my heart.”',
  },
  'rabbit-king': {
    name: 'Crowned Rex Francorum Rabbit',
    era: '14th-Century Coronation at Reims Cathedral',
    description:
      'Crowned with golden fleurs-de-lis, draped in ermine-trimmed royal blue mantle, bearing the royal scepter and orb of chancery authority.',
    greetingMessage:
      'Or sus, nostre feal vassal! By the grace of Saint Denis, We grant you audience at the Royal Academy—display the scholarship worthy of Our crown!',
    quoteTranslation: '“Montjoie and Saint Denis! He alone is true king who upholds justice.”',
  },
  'rabbit-snail-joust': {
    name: 'Snail-Jousting Drollery Rabbit',
    era: '14th-Century Gothic Marginalia (Drolleries)',
    description:
      'Inspired by famous British Library and BnF manuscript marginalia: a fierce knight rabbit charging into combat atop a giant armored snail.',
    greetingMessage:
      'Gare devant! Make way! Sir Lapin is charging at full tilt upon his mighty war-snail—even at three inches per quarter-hour, we never retreat!',
    quoteTranslation: '“Into valiant battle, mounted upon a proud and unhurried snail!”',
  },
  'rabbit-archer': {
    name: 'Greenwood Longbow Rabbit',
    era: '13th-Century Ardennes & Sherwood Forests',
    description:
      'Cloaked in forest green with a drawn yew longbow, piercing every declension and conjugation trap with unerring precision.',
    greetingMessage:
      'Bien vegniez el vert bois! Hold your breath and draw the bowstring taut—aim straight at the inflectional endings and hit the bullseye!',
    quoteTranslation: '“He draws the bow of steel, striking truth straight to the heart!”',
  },
  'rabbit-trumpeter': {
    name: 'Royal Herald Trumpeter Rabbit',
    era: '13th-Century Chivalric Tournament (Tournoi)',
    description:
      'Wearing a blue chaperon and sounding a long brass busine hung with a golden lion banner to herald each new Old French lesson.',
    greetingMessage:
      'Oiez, oiez, franc chevalier! The golden herald’s horn has sounded and the tournament banners fly—couch your lance for today’s trial!',
    quoteTranslation: '“The horn resounds, and both earth and honor tremble!”',
  },
  'rabbit-abbot': {
    name: 'Mitred Abbot Rabbit',
    era: '12th-Century Abbey of Cluny',
    description:
      'Adorned with a gold-embroidered mitre, carved crosier, and illuminated Bible, master of Vulgar Latin etymological transformations.',
    greetingMessage:
      'Pax vobiscum, bels fiz! May grace be with you. The matins bell has rung—open this ancient codex and contemplate the mysteries of Latin roots.',
    quoteTranslation: '“Blessings, clerks and fathers, for the ancient word is sacred!”',
  },
  'rabbit-falconer': {
    name: 'Noble Falconer Rabbit',
    era: '14th-Century Court of the Duke of Berry',
    description:
      'Wearing a crimson plumed hat with a hooded peregrine falcon perched on his gauntleted wrist—a witty medieval reversal of hunter and prey.',
    greetingMessage:
      'Buer soyez venus! Behold the golden-belled falcon upon my wrist, noble companion—let us soar across the sea of manuscripts to capture the finest verses!',
    quoteTranslation: '“The falcon soars into the heavens while nobles gather in courtly delight.”',
  },
  'rabbit-apothecary': {
    name: 'Herbal Apothecary Rabbit',
    era: '13th-Century Medical School of Montpellier',
    description:
      'Wearing round spectacles and holding an emerald vial and mortar, compounding miraculous remedies to cure every grammatical malady.',
    greetingMessage:
      'Bone santé, amis chiers! Two drams of Cas Sujet rosemary with three drops of subjunctive mint—drink this elixir and your Old French will flourish!',
    quoteTranslation: '“Mountain herbs and spiced elixirs bring true healing to every mind.”',
  },
};

const AUTHORS_EN: Record<
  string,
  Pick<
    AuthorPortrait,
    | 'name'
    | 'nameOldFrench'
    | 'century'
    | 'era'
    | 'majorWork'
    | 'workExcerptChinese'
    | 'biography'
    | 'literarySignificance'
  >
> = {
  'author-turold': {
    name: '1. Turold',
    nameOldFrench: 'Turold (Turoldus, late 11th C.)',
    century: 'Late 11th Century',
    era: 'First Crusade & Anglo-Norman Period',
    majorWork: 'The Song of Roland (La Chanson de Roland) — The oldest surviving French chanson de geste',
    workExcerptChinese:
      'He (Roland) ran beneath a pine tree and lay down upon the green grass. Beneath him he placed his sword (Durendal) and his olifant horn, turning his head toward the pagan host...',
    biography:
      'Turold (Latin: Turoldus) is the legendary figure named in the final verse (line 4002) of the Oxford manuscript (Digby 23) of La Chanson de Roland: “Ci falt la geste que Turoldus declinet” (Here ends the epic that Turoldus relates/composes/transcribes). Because the Old French verb decliner can mean to compose, recite, copy, or falter with age, his exact identity remains one of medieval philology’s greatest mysteries.\n\nDerived from the Old Norse name Thorvald, Turold was a characteristic Norman name in 11th-century Normandy and Anglo-Norman England. Transforming the 778 Pyrenees rearguard ambush at Roncevaux into a cosmic struggle of feudal loyalty and Christian chivalry, he immortalized the contrast between “Roland is valiant (proz) and Oliver is wise (sages),” establishing the foundational monument of European epic literature.',
    literarySignificance:
      'Master of the earliest and greatest French chanson de geste, forging the heroic decasyllabic assonanced laisse in early Anglo-Norman Old French.',
  },
  'author-chretien-de-troyes': {
    name: '2. Chrétien de Troyes',
    nameOldFrench: 'Chrétien de Troyes (c. 1135–1191)',
    century: 'Late 12th Century (c. 1135–1191)',
    era: 'Court of Marie, Countess of Champagne',
    majorWork: 'Yvain, the Knight of the Lion (Yvain ou le Chevalier au lion) — Father of Arthurian Romance',
    workExcerptChinese:
      'Love and Hatred mingle together. Whoever does not know how they intertwine must marvel at this sight...',
    biography:
      'Born in Troyes, capital of Champagne, Chrétien de Troyes (c. 1135–1191) is the creator of the medieval courtly romance (roman courtois) and pioneer of Western narrative fiction. Serving at the brilliant literary court of Countess Marie of Champagne (daughter of Eleanor of Aquitaine) and later Philip of Alsace, Count of Flanders, he wove Celtic Arthurian legends (Matière de Bretagne) with the ethics of courtly love (fin’amor).\n\nHis five surviving octosyllabic verse romances—Erec and Enide, Cligès, Lancelot or the Knight of the Cart, Yvain or the Knight of the Lion, and the unfinished Perceval or the Story of the Grail—introduced psychological interiority, narrative conjointure, and the quest for the Holy Grail into world literature.',
    literarySignificance:
      'Pioneered octosyllabic rhymed couplets (octosyllabes à rimes plates); his Champenois texts are the gold standard for 12th-century classical Old French syntax and declension.',
  },
  'author-marie-de-france': {
    name: '3. Marie de France',
    nameOldFrench: 'Marie de France (late 12th C.)',
    century: 'Mid–Late 12th Century',
    era: 'Anglo-Norman Court of Henry II & Eleanor of Aquitaine',
    majorWork: 'The Lais of Marie de France (Selection: Chevrefoil / The Honeysuckle)',
    workExcerptChinese:
      'Of the two of them it was just like the honeysuckle that twined around the hazel tree... Fair love, so it is with us: neither you without me, nor I without you.',
    biography:
      'Marie de France (fl. 1160–1210) is the earliest known female poet writing in French, declaring in her epilogue: “Marie ai num, si sui de France” (Marie is my name, and I am from France). Active at the Anglo-Norman court of King Henry II and Eleanor of Aquitaine in England, she was fluent in Latin, Old French, and Middle English.\n\nTransforming oral Breton minstrel tales into twelve crystalline octosyllabic narrative Lais—including Bisclavret (The Werewolf), Lanval, Laüstic (The Nightingale), and Chevrefoil (The Honeysuckle)—she immortalized Tristan and Iseult’s unbreakable bond (“Ne vus sanz mei, ne mei sanz vus”), alongside her Fables (Ysopet) and Saint Patrick’s Purgatory.',
    literarySignificance:
      'Created the medieval Breton lai genre, distilling fateful courtly passion into unforgettable poetic emblems.',
  },
  'author-guillaume-de-lorris': {
    name: '4. Guillaume de Lorris',
    nameOldFrench: 'Guillaume de Lorris (c. 1200–1238)',
    century: 'Early 13th Century (c. 1200–1238)',
    era: 'Loire Valley & School of Orléans',
    majorWork: 'Romance of the Rose (Le Roman de la Rose, Part I) — Apex of courtly dream allegory',
    workExcerptChinese:
      'Many people say that in dreams there are naught but fables and lies; yet one may dream such dreams as are in no way deceitful...',
    biography:
      'Guillaume de Lorris (c. 1200–1238), a clerk from the Loire Valley near Orléans, composed the first 4,058 octosyllabic lines of Le Roman de la Rose around 1230. Framing his poem as a prophetic springtime dream vision, he narrated the Lover’s entry into the walled Garden of Deduit (Delight), his gaze into the perilous Fountain of Narcissus, and his quest to pluck the crimson Rosebud guarded by Bel Accueil (Fair Welcome) and Dangier (Resistance).',
    literarySignificance:
      'Established the psychological dream-allegory tradition and personified the inner movements of courtly love into an enduring architectural garden.',
  },
  'author-jean-de-meun': {
    name: '5. Jean de Meun',
    nameOldFrench: 'Jean de Meun (c. 1240–1305)',
    century: 'Late 13th Century (c. 1240–1305)',
    era: 'Golden Age of the University of Paris',
    majorWork: 'Romance of the Rose (Le Roman de la Rose, Part II) — Encyclopedic philosophical satire',
    workExcerptChinese:
      'Nature, who shapes all things beneath the heavens, weeps when humans stray from reason and truth...',
    biography:
      'Jean de Meun (Jean Chopinel, c. 1240–1305), a learned master of arts at the University of Paris and translator of Boethius and Abelard, expanded Guillaume de Lorris’s delicate courtly allegory around 1275 by adding over 17,700 lines. Through sweeping discourses by Reason, Nature, Genius, and Faux Semblant (False Seeming), he turned the poem into a bold philosophical encyclopedia and social satire that became a medieval bestseller across Europe.',
    literarySignificance:
      'Transformed courtly romance into a scholastic and satirical summa, bridging 13th-century university philosophy and vernacular French poetry.',
  },
  'author-francois-villon': {
    name: '6. François Villon',
    nameOldFrench: 'François Villon (1431–after 1463)',
    century: 'Mid 15th Century (1431–after 1463)',
    era: 'Post-Hundred Years’ War Paris & Underworld',
    majorWork: 'The Great Testament (Le Testament — Ballad of the Ladies of Times Past)',
    workExcerptChinese:
      'Tell me where, in what country, is Flora the fair Roman... Echo speaking across river and lake, where beauty was more than human? But where are the snows of yesteryear?',
    biography:
      'Born François de Montcorbier in Paris in 1431, Villon earned his Master of Arts at the University of Paris before descending into a turbulent life of tavern brawls, imprisonment, exile, and association with the Coquillards underworld gang. Narrowly escaping the gallows in 1463 before vanishing from history, he poured bitter irony, visceral mortality, argot slang, and aching lyricism into Le Lais and Le Testament, crowned by “Mais où sont les neiges d’antan?” and the Ballade des pendus.',
    literarySignificance:
      'The first modern lyric voice of French poetry, fusing late Middle French fixed forms with raw existential confession and street vernacular.',
  },
  'author-christine-de-pizan': {
    name: '7. Christine de Pizan',
    nameOldFrench: 'Christine de Pizan (1364–c. 1430)',
    century: '14th–15th Century (1364–c. 1430)',
    era: 'Royal Courts of Charles V & Charles VI of France',
    majorWork: 'The Book of the City of Ladies (La Cité des Dames) — Europe’s first professional woman writer',
    workExcerptChinese:
      'If it were customary to send little girls to school and teach them the sciences just as is done with boys, they would learn just as perfectly and understand the subtleties of all arts...',
    biography:
      'Born in Venice in 1364 and raised at the humanist French court of King Charles V where her father served as royal astrologer-physician, Christine de Pizan was widowed at twenty-five with three children and her mother to support. Turning to her pen, she became Europe’s first professional woman of letters, running her own scriptorium, challenging the misogyny of Jean de Meun in the Quarrel of the Rose, building the allegorical City of Ladies (1405), and celebrating Joan of Arc in her final poem (1429).',
    literarySignificance:
      'Pioneer of early European feminist thought, political philosophy, and elevated Middle French prose and ballade artistry.',
  },
  'author-charles-dorleans': {
    name: '8. Charles d’Orléans',
    nameOldFrench: 'Charles d’Orléans (1394–1465)',
    century: '15th Century (1394–1465)',
    era: 'English Captivity after Agincourt & Court of Blois',
    majorWork: 'Poésies (Rondeaux & Ballades — “Le temps a laissié son manteau”)',
    workExcerptChinese:
      'The season has cast off its cloak of wind, of cold, and of rain, and clothed itself in embroidery of shining, clear sunlight...',
    biography:
      'Nephew of King Charles VI and father of King Louis XII, Duke Charles d’Orléans (1394–1465) was captured at the Battle of Agincourt in 1415 and held hostage in England for twenty-five years. In captivity and later at his refined literary court at Blois, he perfected the Middle French rondeau and ballade, mapping the interior landscape of Nonchaloir (melancholy detachment), springtime renewal, and the quiet passage of time.',
    literarySignificance:
      'Supreme master of the 15th-century rondeau, distilling musical grace and intimate psychological allegory.',
  },
  'author-rutebeuf': {
    name: '9. Rutebeuf',
    nameOldFrench: 'Rutebeuf (c. 1230–1285)',
    century: 'Late 13th Century (c. 1230–1285)',
    era: 'Parisian Streets & Latin Quarter under Saint Louis',
    majorWork: 'Poems of Misfortune (La Pauvreté Rutebeuf) & The Miracle of Theophilus',
    workExcerptChinese:
      'What has become of my friends whom I held so close and dear, and loved so much? I think the wind has blown them away; love is dead—they were friends inthe wind...',
    biography:
      'Active in Paris between 1248 and 1285 during the reign of Louis IX, Rutebeuf (a pun on “rude ox”) was a brilliant, impoverished jongleur and university polemicist. Living by his wits in taverns and public squares, he composed biting satires, fabliaux, the famous Miracle de Théophile (the medieval precursor to Faust), and poignant personal laments on winter poverty, dice, and fair-weather friends.',
    literarySignificance:
      'Preeminent voice of 13th-century Parisian urban realism, dramatic monologue, and Virtuosic wordplay.',
  },
  'author-guillaume-de-machaut': {
    name: '10. Guillaume de Machaut',
    nameOldFrench: 'Guillaume de Machaut (c. 1300–1377)',
    century: '14th Century (c. 1300–1377)',
    era: 'Ars Nova Movement & Cathedral of Reims',
    majorWork: 'The Book of the True Poem (Le Voir Dit) & Messe de Nostre Dame',
    workExcerptChinese:
      'Where there is no music, there can be no true joy; for sweet melody comforts every noble heart.',
    biography:
      'Guillaume de Machaut (c. 1300–1377), secretary to King John the Blind of Bohemia and later canon of Reims Cathedral, was the towering poet-composer of the 14th-century Ars Nova. Composing the first complete polyphonic Mass ordinary by a single master (Messe de Nostre Dame), he codified the formes fixes (ballade, rondeau, virelai) and wove verse, letters, and musical scores into his late masterpiece Le Voir Dit.',
    literarySignificance:
      'Twin giant of 14th-century French poetry and polyphonic music, shaping Chaucer and the entire late medieval lyric tradition.',
  },
  'author-jean-froissart': {
    name: '11. Jean Froissart',
    nameOldFrench: 'Jean Froissart (c. 1337–c. 1405)',
    century: 'Late 14th Century (c. 1337–c. 1405)',
    era: 'First Half of the Hundred Years’ War',
    majorWork: 'Chronicles (Chroniques) — Monumental panorama of Hundred Years’ War chivalry',
    workExcerptChinese:
      'Deeds of arms accomplished in war ought to be notably recorded, so that valiant men hereafter may take example from them.',
    biography:
      'Born in Valenciennes in Hainaut, Jean Froissart (c. 1337–c. 1405) served Queen Philippa of Hainault at the English court of Edward III before traveling across Scotland, France, Italy, and Béarn on horseback with his greyhound, interviewing knights, heralds, and squires from both sides of the Hundred Years’ War. His four-volume Chronicles vividly preserve the pageantry of Crécy and Poitiers alongside the Jacquerie peasant revolt.',
    literarySignificance:
      'The supreme narrative painter of 14th-century European chivalry and pioneer of eyewitness historical prose.',
  },
  'author-jean-de-joinville': {
    name: '12. Jean de Joinville',
    nameOldFrench: 'Jean de Joinville (1224–1317)',
    century: '13th–14th Century (1224–1317)',
    era: 'Seventh Crusade & Reign of King Louis IX (Saint Louis)',
    majorWork: 'Life of Saint Louis (Vie de Saint Louis) — Intimate chivalric biography & memoir',
    workExcerptChinese:
      'He (Louis IX) loved truth so deeply that even to the Saracens he would never lie about what he had promised them.',
    biography:
      'Hereditary Seneschal of Champagne, Jean de Joinville (1224–1317) accompanied King Louis IX on the Seventh Crusade (1248–1254), sharing battles, captivity in Egypt, and royal counsels. Dictating his Vie de Saint Louis in his eighties for Queen Joan of Navarre, he left an unforgettable portrait of the king rendering justice beneath the oak of Vincennes.',
    literarySignificance:
      'A masterpiece of Old French biographical prose, prized for its warmth, candor, and authentic 13th-century spoken idiom.',
  },
  'author-geoffroi-de-villehardouin': {
    name: '13. Geoffroi de Villehardouin',
    nameOldFrench: 'Geoffroi de Villehardouin (c. 1150–1213)',
    century: 'Turn of the 13th Century (c. 1150–1213)',
    era: 'Fourth Crusade & Latin Empire of Constantinople',
    majorWork: 'On the Conquest of Constantinople (La Conquête de Constantinople)',
    workExcerptChinese:
      'And know well that never was so grand an enterprise undertaken by any people since the world was created.',
    biography:
      'Marshal of Champagne and later Marshal of Romania, Geoffroi de Villehardouin (c. 1150–1213) was a chief negotiator and military commander of the Fourth Crusade (1199–1204). Dictating his chronicle around 1207, he broke with Latin and verse conventions to produce the earliest surviving historical work in French prose.',
    literarySignificance:
      'The first great monument of Old French historical prose, renowned for its lucid, austere, and authoritative style.',
  },
  'author-philippe-de-commynes': {
    name: '14. Philippe de Commynes',
    nameOldFrench: 'Philippe de Commynes (1447–1511)',
    century: 'Late 15th Century (1447–1511)',
    era: 'Rivalry of Louis XI of France & Charles the Bold of Burgundy',
    majorWork: 'Memoirs (Mémoires) — Birth of modern political and diplomatic analysis',
    workExcerptChinese:
      'For those who win the war always reap the honor, while the vanquished always bear the blame.',
    biography:
      'Raised at the Burgundian court of Charles the Bold before entering the inner council of King Louis XI (“the Universal Spider”) in 1472, Philippe de Commynes (1447–1511) served as diplomat and royal advisor. His eight-book Mémoires strip away medieval chivalric illusion to analyze statecraft, finance, and princely psychology.',
    literarySignificance:
      'Marks the transition from medieval chronicle to modern political realism, often called the French precursor to Machiavelli.',
  },
  'author-adam-de-la-halle': {
    name: '15. Adam de la Halle',
    nameOldFrench: 'Adam de la Halle (c. 1240–1287)',
    century: 'Late 13th Century (c. 1240–1287)',
    era: 'Urban Theater of Arras & Angevin Court of Naples',
    majorWork: 'The Play of Robin and Marion (Le Jeu de Robin et Marion)',
    workExcerptChinese:
      'Robin loves me, Robin has my heart; Robin asked for my hand, and he shall have me. Robin bought me a kirtle of fair scarlet...',
    biography:
      'Known as “Adam the Hunchback of Arras,” Adam de la Halle (c. 1240–1287) studied in Paris before writing the satirical fantasy Le Jeu de la Feuillée in Arras and the pastoral musical play Le Jeu de Robin et Marion at the Angevin court of Naples—the earliest surviving secular French play with music.',
    literarySignificance:
      'Founding father of medieval secular comedy and musical theater (ancestor of the opéra-comique) in lively Picard-Artesian Old French.',
  },
  'author-alain-chartier': {
    name: '16. Alain Chartier',
    nameOldFrench: 'Alain Chartier (c. 1385–1430)',
    century: 'Early 15th Century (c. 1385–1430)',
    era: 'Hundred Years’ War & Court of Charles VII at Bourges',
    majorWork: 'The Fair Lady Without Mercy (La Belle Dame sans mercy) & Le Quadrilogue invectif',
    workExcerptChinese:
      'Death is worth more to me than living in languor, since no pity can be found in you.',
    biography:
      'Born in Bayeux and educated at the University of Paris, Alain Chartier (c. 1385–1430) served as royal secretary and ambassador to the Dauphin Charles VII. His patriotic prose dialogue Le Quadrilogue invectif (1422) rallied a divided France, while his poem La Belle Dame sans mercy (1424) sparked a Europe-wide literary debate and later inspired John Keats.',
    literarySignificance:
      'Revered as the “Father of French Eloquence,” uniting Ciceronian civic rhetoric with incisive courtly debate.',
  },
  'author-eustache-deschamps': {
    name: '17. Eustache Deschamps',
    nameOldFrench: 'Eustache Deschamps (1346–1406)',
    century: 'Late 14th Century (1346–1406)',
    era: 'Reigns of Charles V & Charles VI of France',
    majorWork: 'Ballades (including his tribute to Geoffrey Chaucer) & L’Art de dictier',
    workExcerptChinese:
      'Sower of flowers, great poet in your tongue, you have illuminated the realm of England, O grand translator, noble Geoffrey Chaucer...',
    biography:
      'A nephew and disciple of Guillaume de Machaut from Champagne, Eustache Deschamps (1346–1406) served as royal bailiff and castellan while composing over 1,500 poems. His 1392 treatise L’Art de dictier was the first vernacular French poetics, defining spoken verse rhythm as “natural music” distinct from instrumental accompaniment.',
    literarySignificance:
      'Legislator of late medieval fixed verse forms and chronicler of everyday life during the Hundred Years’ War.',
  },
  'author-bertran-de-born': {
    name: '18. Bertran de Born',
    nameOldFrench: 'Bertran de Born (c. 1140–1215)',
    century: 'Late 12th Century (c. 1140–1215)',
    era: 'Aquitaine & Wars of the Plantagenet Princes',
    majorWork: 'Political & Martial Sirventes — Master of the Occitan battle song',
    workExcerptChinese:
      'It pleases me when I see day break through the forest, and the clash of armed knights on the field...',
    biography:
      'Lord of Hautefort in Périgord, Bertran de Born (c. 1140–1215) was the fiercest of the southern troubadours, using his razor-sharp political sirventes to stir conflict among Henry II of England and his sons (Henry the Young King and Richard the Lionheart). Dante praised him as the supreme poet of arms and placed him in the Inferno.',
    literarySignificance:
      'Master of the martial and political sirventes, illustrating the fiery exchange between southern Langue d’oc and northern Langue d’oïl.',
  },
  'author-bernart-de-ventadorn': {
    name: '19. Bernart de Ventadorn',
    nameOldFrench: 'Bernart de Ventadorn (mid 12th C.)',
    century: 'Mid 12th Century',
    era: 'Limousin & Court of Eleanor of Aquitaine',
    majorWork: 'When I See the Lark Beat Its Wings (Can vei la lauzeta mover)',
    workExcerptChinese:
      'When I see the lark beat its wings for joy against the sunbeam, forgetting itself and letting itself fall for the sweetness that enters its heart...',
    biography:
      'Son of a castle baker at Ventadorn in Limousin, Bernart de Ventadorn (fl. 1145–1180) rose to become the supreme lyric master of fin’amor. Serving Eleanor of Aquitaine in Normandy and England, he carried the southern troubadour ideal of pure courtly love directly to the northern French trouvères.',
    literarySignificance:
      'Crown of European troubadour lyricism; his Lark Song (La Lauzeta) and surviving melodies bridged southern Occitan and northern Old French song.',
  },
  'author-gautier-de-coincy': {
    name: '20. Gautier de Coincy',
    nameOldFrench: 'Gautier de Coincy (1177–1236)',
    century: '12th–13th Century (1177–1236)',
    era: 'Abbey of Saint-Médard at Soissons',
    majorWork: 'The Miracles of Our Lady (Les Miracles de Nostre Dame)',
    workExcerptChinese:
      'No sweetness is so sweet as serving the gentle Mother of God, who heals every sorrow and ill.',
    biography:
      'A Benedictine monk and Prior of Vic-sur-Aisne and Saint-Médard de Soissons, Gautier de Coincy (1177–1236) transposed the vocabulary and melodies of secular courtly love into a 35,000-line Marian masterpiece, Les Miracles de Nostre Dame, celebrating the Virgin Mary as the compassionate protector of sinners and minstrels.',
    literarySignificance:
      'Virtuoso of Marian narrative verse and rich rhetorical wordplay (annominatio) in early 13th-century Old French.',
  },
  'author-jean-bodel': {
    name: '21. Jean Bodel',
    nameOldFrench: 'Jean Bodel (c. 1165–1210)',
    century: 'Turn of the 13th Century (c. 1165–1210)',
    era: 'Golden Age of the Confrérie des Jongleurs of Arras',
    majorWork: 'The Play of Saint Nicholas (Le Jeu de Saint Nicolas) & Chanson des Saisnes',
    workExcerptChinese:
      'Lords, this story is no lie; it is true and proven, and Holy Church still sings of it.',
    biography:
      'Citizen-poet of Arras, Jean Bodel (c. 1165–1210) famously classified all medieval romance into the “Three Matters” (Matter of France, Matter of Britain, Matter of Rome) and wrote Europe’s first vernacular miracle play, Le Jeu de Saint Nicolas, before contracting leprosy on the eve of the Fourth Crusade and composing his heartbreaking farewell poem Les Congés.',
    literarySignificance:
      'Theorist of the Three Matters of medieval literature and pioneer of vernacular French drama.',
  },
  'author-antoine-de-la-sale': {
    name: '22. Antoine de la Sale',
    nameOldFrench: 'Antoine de la Sale (1385–1462)',
    century: '15th Century (1385–1462)',
    era: 'Courts of René of Anjou & Burgundy',
    majorWork: 'Little John of Saintré (Jehan de Saintré) — From chivalric romance to modern realist novel',
    workExcerptChinese:
      'The love of a noble lady inspires young knights to great deeds, yet fickleness can undo everything in an instant.',
    biography:
      'Provençal squire, traveler, and tutor to the sons of King René of Anjou and Louis of Luxembourg, Antoine de la Sale (1385–1462) wrote Jehan de Saintré in 1456. Mixing authentic heraldic tournament lore with sharp ironic realism as the young knight’s noble lady betrays him for a wealthy abbot, it bridges medieval romance and the modern psychological novel.',
    literarySignificance:
      'Foundational milestone of French prose fiction, deconstructing courtly idealism with worldly psychological wit.',
  },
  'author-arnoul-greban': {
    name: '23. Arnoul Gréban',
    nameOldFrench: 'Arnoul Gréban (c. 1420–1471)',
    century: 'Mid 15th Century (c. 1420–1471)',
    era: 'Notre-Dame de Paris & Diocese of Le Mans',
    majorWork: 'The Mystery of the Passion (Le Mystère de la Passion) — 34,574-line sacred drama',
    workExcerptChinese:
      'O mortal man, behold what I suffer for your sake; there is no sorrow comparable unto mine.',
    biography:
      'Master of Arts, theologian, and organist-choirmaster at Notre-Dame de Paris, Arnoul Gréban (c. 1420–1471) composed his monumental 34,574-line Mystère de la Passion around 1452. Performed across four days on a vast simultaneous stage stretching from Paradise to the Mouth of Hell with over 200 speaking roles, it represents the summit of medieval civic theater.',
    literarySignificance:
      'Apex of the French mystery play (mystère), blending high theological lyricism with vivid popular realism.',
  },
  'author-jean-meschinot': {
    name: '24. Jean Meschinot',
    nameOldFrench: 'Jean Meschinot (c. 1420–1491)',
    century: 'Late 15th Century (c. 1420–1491)',
    era: 'Ducal Court of Brittany & Anne of Brittany',
    majorWork: 'The Spectacles of Princes (Les Lunettes des Princes) — Early Grands Rhétoriqueurs masterwork',
    workExcerptChinese:
      'Princes, mirrors of this changing world, put on these spectacles of truth to behold the misery of your people.',
    biography:
      'Breton knight and master of the household to five successive rulers of Brittany up to Duchess Anne of Brittany, Jean Meschinot (c. 1420–1491), styling himself “Le Banni de Liesse” (The Banished from Joy), composed Les Lunettes des Princes—gifting rulers allegorical spectacles framed by the Four Cardinal Virtues—and famous combinatory verses readable in thirty-two ways.',
    literarySignificance:
      'First-generation master of the Grands Rhétoriqueurs, uniting dazzling metrical architecture with moral counsel to rulers.',
  },
  'author-jean-molinet': {
    name: '25. Jean Molinet',
    nameOldFrench: 'Jean Molinet (1435–1507)',
    century: 'Late 15th Century (1435–1507)',
    era: 'Duchy of Burgundy & Valenciennes',
    majorWork: 'The Succor of the Common Folk (La Ressource du petit peuple) & L’Art de rhétorique',
    workExcerptChinese:
      'Whenever the rich wage war, it is the poor and humble folk who pay with their blood.',
    biography:
      'Official chronicler (indiciaire) to the court of Burgundy following Georges Chastellain and canon at Valenciennes, Jean Molinet (1435–1507) led the northern Grands Rhétoriqueurs school. His Chronicles, L’Art de rhétorique, and political allegory La Ressource du petit peuple eloquently championed the suffering peasantry while mentoring Renaissance precursor Jean Lemaire de Belges.',
    literarySignificance:
      'Chief master and theorist of the Burgundian Grands Rhétoriqueurs, directly paving the way for French Renaissance poetics.',
  },
  'author-philippe-de-vitry': {
    name: '26. Philippe de Vitry',
    nameOldFrench: 'Philippe de Vitry (1291–1361)',
    century: 'Early 14th Century (1291–1361)',
    era: 'Royal Court of Paris & Bishopric of Meaux',
    majorWork: 'Ars Nova treatise, isorhythmic motets for the Roman de Fauvel & Dit de Franc Gontier',
    workExcerptChinese:
      'The world is full of foxes who deceive the lions, and flattery reigns supreme within the courts.',
    biography:
      'Celebrated by Petrarch as “the sole true poet among the French,” Philippe de Vitry (1291–1361) was a composer, music theorist, royal diplomat, and Bishop of Meaux. His treatise Ars Nova (c. 1322) revolutionized European rhythmic notation, while his satirical motets in the Roman de Fauvel and pastoral Dit de Franc Gontier shaped 14th-century literature.',
    literarySignificance:
      'Founder of the 14th-century Ars Nova musical and poetic revolution and pioneer of French pastoral humanism.',
  },
  'author-martin-le-franc': {
    name: '27. Martin Le Franc',
    nameOldFrench: 'Martin Le Franc (c. 1410–1461)',
    century: 'Mid 15th Century (c. 1410–1461)',
    era: 'Court of Savoy & Provostship of Lausanne',
    majorWork: 'The Champion of Ladies (Le Champion des Dames) — 24,000-line defense of women',
    workExcerptChinese:
      'Praise women, for they are the beauty of the world, and without them human life and civilization would perish.',
    biography:
      'Educated at the University of Paris and serving as Provost of Lausanne and secretary to Antipope Felix V and Pope Nicholas V at the court of Savoy, Martin Le Franc (c. 1410–1461) composed the 24,000-line Le Champion des Dames (1440–1442). Continuing Christine de Pizan’s defense of women, the poem celebrates Joan of Arc and records the artistic breakthroughs of Jan van Eyck and Guillaume Dufay.',
    literarySignificance:
      'Monumental humanistic contribution to the Querelle des femmes and a priceless witness to 15th-century art and music history.',
  },
  'author-conon-de-bethune': {
    name: '28. Conon de Béthune',
    nameOldFrench: 'Conon de Béthune (c. 1150–1219)',
    century: 'Turn of the 13th Century (c. 1150–1219)',
    era: 'Third & Fourth Crusades',
    majorWork: 'Crusade Songs (Chansons de Croisade — “Ahi! Amors, com dure departie”)',
    workExcerptChinese:
      'Alas! Love parts me from my homeland, yet God commands me to cross the sea to serve Him.',
    biography:
      'Noble trouvère from Artois and cousin to the Counts of Hainaut, Conon de Béthune (c. 1150–1219) proudly defended his Artesian-Picard dialect when mocked at the Parisian court in 1180. A leading commander in the Third and Fourth Crusades who twice served as Regent of the Latin Empire of Constantinople, he composed the most moving Crusade lyrics of the Middle Ages.',
    literarySignificance:
      'Master of the Old French chanson de croisade and key witness to the rise of the Francien royal dialect in the late 12th century.',
  },
  'author-gace-brule': {
    name: '29. Gace Brulé',
    nameOldFrench: 'Gace Brulé (c. 1160–1213)',
    century: 'Late 12th Century (c. 1160–1213)',
    era: 'Courts of Champagne & Brittany',
    majorWork: 'Grands Chants Courtois — Classical master of the northern French Trouvères',
    workExcerptChinese:
      'The pains of love are so sweet and dear to me that I would not trade my sorrow for any other joy.',
    biography:
      'A knight of Champagne patronized by Countess Marie of Champagne and Duke Geoffrey II of Brittany, Gace Brulé (c. 1160–1213) left over seventy authenticated songs with melodies. Revered by Dante in De vulgari eloquentia and quoted in the Roman de la Rose, he perfected the noble, introspective style of the northern grand chant courtois.',
    literarySignificance:
      'Classical exemplar of the first generation of northern Trouvères, cited by Dante as a model of elevated Langue d’oïl lyricism.',
  },
  'author-thibaut-de-champagne': {
    name: '30. Thibaut IV of Champagne',
    nameOldFrench: 'Thibaut de Champagne (1201–1253)',
    century: 'Early 13th Century (1201–1253)',
    era: 'Courts of Champagne & Kingdom of Navarre',
    majorWork: 'Chansons (“Aussi com l’unicorne sui”) — The Troubadour-King of Navarre',
    workExcerptChinese:
      'I am just like the unicorn that gazes so raptly upon the maiden that for her pleasure it lets itself be slain...',
    biography:
      'Count of Champagne from birth and crowned King of Navarre in 1234, Thibaut IV “the Songwriter” (Thibaut le Chansonnier, 1201–1253) was the grandson of Marie of Champagne. Famous for his platonic courtly devotion to Queen Regent Blanche of Castille and his 1239 Crusade to the Holy Land, he left sixty-one songs with music, including his celebrated bestiary allegory of the unicorn.',
    literarySignificance:
      'The royal laureate of 13th-century trouvère lyricism, celebrated by Dante for the symbolic grace of his courtly chansons.',
  },
};

export function getLocalizedRabbitSkins(lang: Language = 'en'): RabbitSkin[] {
  if (lang === 'zh') return RABBIT_SKINS;
  return RABBIT_SKINS.map((skin) => {
    const en = RABBIT_SKINS_EN[skin.id];
    if (!en) return skin;
    return {
      ...skin,
      ...en,
    };
  });
}

export function getLocalizedAuthors(lang: Language = 'en'): AuthorPortrait[] {
  if (lang === 'zh') return MEDIEVAL_AUTHORS;
  return MEDIEVAL_AUTHORS.map((author) => {
    const en = AUTHORS_EN[author.id];
    if (!en) return author;
    return {
      ...author,
      ...en,
    };
  });
}
