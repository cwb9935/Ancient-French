/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ExerciseType = 
  | 'multiple_choice' 
  | 'word_bank' 
  | 'case_declension' 
  | 'conjugation_drill'
  | 'fill_blank' 
  | 'etymology_match';

export interface ExerciseOption {
  id: string;
  text: string;
  translation?: string;
  isCorrect?: boolean;
  explanation?: string;
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  promptOldFrench?: string;
  promptModernFrench?: string;
  promptChinese?: string;
  ipa?: string;
  options?: ExerciseOption[];
  correctAnswer: string | string[];
  wordBank?: string[]; // Scrambled tiles for sentence construction
  explanation: string;
  grammaticalNote?: string;
  latinOrigin?: string;
  caseHint?: 'CS' | 'CR'; // Cas Sujet or Cas Régime
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  subtitle: string;
  iconName: string;
  xpReward: number;
  exercises: Exercise[];
  grammarSummary: string;
  helixLessonRef?: string; // Reference to Laurence Hélix textbook lesson
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  theme: string;
  description: string;
  colorScheme: {
    bg: string;
    border: string;
    accent: string;
  };
  lessons: Lesson[];
  milestoneTitle?: string;
}

export interface RabbitSkin {
  id: string;
  name: string;
  title: string;
  era: string;
  description: string;
  greetingMessage: string;
  quoteOldFrench: string;
  quoteTranslation: string;
  image: string;
  shardsRequired: number; // default 5
}

export interface AuthorPortrait {
  id: string;
  name: string;
  nameOldFrench: string;
  century: string;
  era: string;
  majorWork: string;
  workExcerpt: string;
  workExcerptModern: string;
  workExcerptChinese: string;
  biography: string;
  literarySignificance: string;
  image: string;
  shardsRequired: number; // default 5
}

export interface ShardDropResult {
  type: 'rabbit' | 'author';
  itemId: string;
  itemName: string;
  itemImage: string;
  newShardCount: number;
  isNewlyUnlocked: boolean;
  itemCategory: string;
}

export interface FlashcardWord {
  id: string;
  wordOldFrench: string;
  lemma: string;
  pos: string;
  ipa?: string;
  caseNote?: string; // e.g. CS: reis / CR: rei
  gender?: 'm' | 'f' | 'n';
  modernFrench: string;
  chinese: string;
  latinOrigin: string;
  exampleOldFrench: string;
  exampleModern: string;
  exampleChinese: string;
  helixLessonRef?: string;
}

export type Language = 'en' | 'zh';

export interface UserProgress {
  language?: Language;
  streak: number;
  lastCheckinDate: string; // YYYY-MM-DD
  historyCheckins: string[]; // List of YYYY-MM-DD
  xp: number;
  totalCorrect: number;
  totalAnswered: number;
  completedLessons: string[]; // lesson ids
  unlockedUnits: string[]; // unit ids
  claimedMilestones?: number[]; // unit numbers whose milestone chest has been claimed
  claimedQuests: string[]; // quest ids completed today
  bookmarkedWords: string[]; // saved vocabulary
  mistakeHistory: string[]; // exercise ids answered incorrectly
  rankTitle: string;
  rankLevel: number;
  
  // Flashcards & Daily Tracking
  dailyWordsReviewed: number; // count of words studied today
  dailyWordGoal?: number; // user-selected daily word study target (10 to 50)
  learnedWordIds: string[];
  manuscriptReadSeconds: number; // seconds spent reading manuscripts
  
  // Rabbit Mascot Skins & Shards
  activeRabbitSkinId: string;
  rabbitShards: Record<string, number>; // skinId -> shards (0 to 5)
  unlockedSkins: string[]; // list of unlocked skin ids
  
  // Medieval Author Gallery Shards
  authorShards: Record<string, number>; // authorId -> shards (0 to 5)
  unlockedAuthors: string[]; // list of unlocked author ids

  // Grand finale celebration flag (triggered the first time all 18 units are completed)
  hasSeenGrandCompletion?: boolean;
}

export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  targetCount: number;
  currentCount: number;
  rewardXp: number;
  rewardShards: {
    type: 'rabbit' | 'author' | 'both';
    amount: number;
  };
  isCompleted: boolean;
  isClaimed: boolean;
}

export interface ManuscriptWord {
  word: string;
  lemma: string;
  pos: string; // noun, verb, adj, art, etc.
  case?: 'CS' | 'CR' | 'Indifférent';
  gender?: 'm' | 'f' | 'n';
  number?: 'sg' | 'pl';
  modernFrench: string;
  chinese: string;
  english?: string;
  latinOrigin?: string;
  grammarTip?: string;
}

export interface ManuscriptLine {
  lineNum: number;
  tokens: ManuscriptWord[];
  modernFrench: string;
  chinese: string;
}

export interface ManuscriptText {
  id: string;
  title: string;
  author: string;
  authorId?: string; // links to AuthorPortrait
  century: string;
  genre: string;
  introduction: string;
  lines: ManuscriptLine[];
}

export interface DeclensionTable {
  wordLemma: string;
  type: string;
  gender: string;
  meaning: string;
  modernFrench: string;
  singular: {
    cs: string;
    cr: string;
  };
  plural: {
    cs: string;
    cr: string;
  };
  ruleExplanation: string;
}

export interface ConjugationTense {
  p1s: string; // je
  p2s: string; // tu
  p3s: string; // il / ele
  p1p: string; // nos / nous
  p2p: string; // vos / vous
  p3p: string; // il / eles
}

export interface ConjugationTable {
  infinitive: string;
  group: string;
  meaning: string;
  modernFrench: string;
  latinOrigin: string;
  participePresent: string;
  participePasse: string;
  tenses: {
    present: ConjugationTense;
    imparfait: ConjugationTense;
    passeSimple: ConjugationTense;
    futur: ConjugationTense;
    conditionnel: ConjugationTense;
    subjonctifPresent: ConjugationTense;
    subjonctifImparfait: ConjugationTense;
  };
  ruleExplanation: string;
}

