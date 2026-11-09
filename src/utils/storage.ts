/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProgress, DailyQuest, ShardDropResult, Language } from '../types';
import { getLocalizedRabbitSkins, getLocalizedAuthors } from './i18nAuthorsAndRabbits';

const STORAGE_KEY = 'roland_user_progress_v2';

export const RANKS_ZH = [
  { level: 1, minXp: 0, title: '见习侍从 (Écuyer Débutant)' },
  { level: 2, minXp: 225, title: '佩剑侍从 (Écuyer d\'Honneur)' },
  { level: 3, minXp: 450, title: '游侠骑士 (Chevalier Errant)' },
  { level: 4, minXp: 675, title: '宫廷诗人 (Trouvère de Cour)' },
  { level: 5, minXp: 900, title: '圣殿骑士 (Chevalier Paladin)' },
  { level: 6, minXp: 1200, title: '皇家掌书官 (Grand Chancelier Royal)' },
];

export const RANKS_EN = [
  { level: 1, minXp: 0, title: 'Squire Novice (Écuyer Débutant)' },
  { level: 2, minXp: 225, title: 'Squire of Honor (Écuyer d\'Honneur)' },
  { level: 3, minXp: 450, title: 'Knight Errant (Chevalier Errant)' },
  { level: 4, minXp: 675, title: 'Court Trouvère (Trouvère de Cour)' },
  { level: 5, minXp: 900, title: 'Paladin Knight (Chevalier Paladin)' },
  { level: 6, minXp: 1200, title: 'Grand Royal Chancellor (Grand Chancelier Royal)' },
];

export const RANKS = RANKS_EN;

export function getRanks(lang: Language = 'en') {
  return lang === 'zh' ? RANKS_ZH : RANKS_EN;
}

export function getRankByXp(xp: number, lang: Language = 'en') {
  const rankList = getRanks(lang);
  let currentRank = rankList[0];
  for (const r of rankList) {
    if (xp >= r.minXp) {
      currentRank = r;
    }
  }
  return currentRank;
}

export function getTodayString(): string {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

const DEFAULT_PROGRESS: UserProgress = {
  language: 'en',
  streak: 3, // Initial warm start for engaging motivation
  lastCheckinDate: '',
  historyCheckins: ['2026-11-06', '2026-11-07'],
  xp: 25,
  totalCorrect: 18,
  totalAnswered: 20,
  completedLessons: ['u1-l1'],
  unlockedUnits: ['unit-1'],
  claimedMilestones: [],
  claimedQuests: [],
  bookmarkedWords: ['ber', 'reis', 'espede', 'si', 'chivalier'],
  mistakeHistory: [],
  rankTitle: 'Squire Novice (Écuyer Débutant)',
  rankLevel: 1,
  
  // Flashcards & Daily Tracking
  dailyWordsReviewed: 3,
  dailyWordGoal: 10,
  learnedWordIds: ['fc-si', 'fc-ber', 'fc-sire'],
  manuscriptReadSeconds: 120,

  // Mascot default: Scribe Rabbit is unlocked with 5 shards; others start with shards for collection excitement
  activeRabbitSkinId: 'rabbit-scribe',
  rabbitShards: {
    'rabbit-scribe': 5,
    'rabbit-knight': 3,
    'rabbit-minstrel': 2,
    'rabbit-king': 1,
    'rabbit-snail-joust': 4,
    'rabbit-archer': 3,
    'rabbit-trumpeter': 2,
    'rabbit-abbot': 1,
    'rabbit-falconer': 2,
    'rabbit-apothecary': 1,
  },
  unlockedSkins: ['rabbit-scribe'],

  // Author Gallery: engaging initial shards for puzzle collection excitement across the 30 authors
  authorShards: {
    'author-turold': 5,
    'author-chretien-de-troyes': 5,
    'author-marie-de-france': 4,
    'author-guillaume-de-lorris': 3,
    'author-jean-de-meun': 2,
    'author-francois-villon': 4,
    'author-christine-de-pizan': 4,
    'author-charles-dorleans': 3,
    'author-rutebeuf': 2,
    'author-guillaume-de-machaut': 2,
    'author-jean-froissart': 1,
    'author-jean-de-joinville': 3,
    'author-geoffroi-de-villehardouin': 2,
    'author-philippe-de-commynes': 1,
    'author-adam-de-la-halle': 2,
    'author-alain-chartier': 1,
    'author-eustache-deschamps': 2,
    'author-bertran-de-born': 1,
    'author-bernart-de-ventadorn': 3,
    'author-gautier-de-coincy': 1,
    'author-jean-bodel': 2,
    'author-antoine-de-la-sale': 1,
    'author-arnoul-greban': 1,
    'author-jean-meschinot': 1,
    'author-jean-molinet': 1,
    'author-philippe-de-vitry': 1,
    'author-martin-le-franc': 1,
    'author-conon-de-bethune': 2,
    'author-gace-brule': 2,
    'author-thibaut-de-champagne': 3,
  },
  unlockedAuthors: ['author-turold', 'author-chretien-de-troyes'],
};

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveUserProgress(DEFAULT_PROGRESS);
      return DEFAULT_PROGRESS;
    }
    const parsed = JSON.parse(raw) as UserProgress;
    if (!parsed.language) {
      parsed.language = 'en';
    }
    // ensure rank is accurate based on XP and language
    const rank = getRankByXp(parsed.xp, parsed.language);
    parsed.rankTitle = rank.title;
    parsed.rankLevel = rank.level;
    
    // Safety falls for newly added skin & author structures
    if (!parsed.rabbitShards) parsed.rabbitShards = { ...DEFAULT_PROGRESS.rabbitShards };
    if (!parsed.authorShards) parsed.authorShards = { ...DEFAULT_PROGRESS.authorShards };
    if (!parsed.unlockedSkins) parsed.unlockedSkins = ['rabbit-scribe'];
    if (!parsed.unlockedAuthors) parsed.unlockedAuthors = [];
    if (!parsed.activeRabbitSkinId) parsed.activeRabbitSkinId = 'rabbit-scribe';
    if (parsed.totalCorrect === undefined) parsed.totalCorrect = 18;
    if (parsed.totalAnswered === undefined) parsed.totalAnswered = 20;
    if (parsed.dailyWordsReviewed === undefined) parsed.dailyWordsReviewed = 3;
    if (parsed.dailyWordGoal === undefined || parsed.dailyWordGoal < 10 || parsed.dailyWordGoal > 50) {
      parsed.dailyWordGoal = 10;
    }
    if (!parsed.learnedWordIds) parsed.learnedWordIds = ['fc-si', 'fc-ber', 'fc-sire'];
    if (parsed.manuscriptReadSeconds === undefined) parsed.manuscriptReadSeconds = 120;
    if (!parsed.claimedMilestones) parsed.claimedMilestones = [];

    return parsed;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function createFreshUserProgress(lang: Language = 'en'): UserProgress {
  const rank = getRankByXp(0, lang);
  return {
    language: lang,
    streak: 0,
    lastCheckinDate: '',
    historyCheckins: [],
    xp: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    completedLessons: [],
    unlockedUnits: ['unit-1'],
    claimedMilestones: [],
    claimedQuests: [],
    bookmarkedWords: [],
    mistakeHistory: [],
    rankTitle: rank.title,
    rankLevel: rank.level,
    dailyWordsReviewed: 0,
    dailyWordGoal: 10,
    learnedWordIds: [],
    manuscriptReadSeconds: 0,
    activeRabbitSkinId: 'rabbit-scribe',
    rabbitShards: {
      'rabbit-scribe': 5,
    },
    unlockedSkins: ['rabbit-scribe'],
    authorShards: {},
    unlockedAuthors: [],
    hasSeenGrandCompletion: false,
  };
}

export function resetUserProgress(lang: Language = 'en'): UserProgress {
  const fresh = createFreshUserProgress(lang);
  saveUserProgress(fresh);
  return fresh;
}


/**
 * Rolls random shard drop rewards for completing daily quests or lessons.
 * Prioritizes locked skins/authors so user progresses reliably.
 */
export function rollShardDrop(
  progress: UserProgress, 
  targetType: 'rabbit' | 'author' | 'both' = 'both',
  lang?: Language
): { updatedProgress: UserProgress; drops: ShardDropResult[] } {
  const activeLang = lang || progress.language || 'en';
  const newProgress: UserProgress = JSON.parse(JSON.stringify(progress));
  const drops: ShardDropResult[] = [];
  const skinsList = getLocalizedRabbitSkins(activeLang);
  const authorsList = getLocalizedAuthors(activeLang);

  // Drop Rabbit Shard
  if (targetType === 'rabbit' || targetType === 'both') {
    const eligibleSkins = skinsList.filter(s => (newProgress.rabbitShards[s.id] || 0) < s.shardsRequired);
    const chosenSkin = eligibleSkins.length > 0 
      ? eligibleSkins[Math.floor(Math.random() * eligibleSkins.length)]
      : skinsList[Math.floor(Math.random() * skinsList.length)];

    if (chosenSkin) {
      const current = newProgress.rabbitShards[chosenSkin.id] || 0;
      const nextCount = Math.min(chosenSkin.shardsRequired, current + 1);
      newProgress.rabbitShards[chosenSkin.id] = nextCount;

      let isNewlyUnlocked = false;
      if (nextCount >= chosenSkin.shardsRequired && !newProgress.unlockedSkins.includes(chosenSkin.id)) {
        newProgress.unlockedSkins.push(chosenSkin.id);
        isNewlyUnlocked = true;
      }

      drops.push({
        type: 'rabbit',
        itemId: chosenSkin.id,
        itemName: chosenSkin.name,
        itemImage: chosenSkin.image,
        newShardCount: nextCount,
        isNewlyUnlocked,
        itemCategory: activeLang === 'zh' ? '兔子皮肤碎片' : 'Rabbit Outfit Shard',
      });
    }
  }

  // Drop Author Shard
  if (targetType === 'author' || targetType === 'both') {
    const eligibleAuthors = authorsList.filter(a => (newProgress.authorShards[a.id] || 0) < a.shardsRequired);
    const chosenAuthor = eligibleAuthors.length > 0 
      ? eligibleAuthors[Math.floor(Math.random() * eligibleAuthors.length)]
      : authorsList[Math.floor(Math.random() * authorsList.length)];

    if (chosenAuthor) {
      const current = newProgress.authorShards[chosenAuthor.id] || 0;
      const nextCount = Math.min(chosenAuthor.shardsRequired, current + 1);
      newProgress.authorShards[chosenAuthor.id] = nextCount;

      let isNewlyUnlocked = false;
      if (nextCount >= chosenAuthor.shardsRequired && !newProgress.unlockedAuthors.includes(chosenAuthor.id)) {
        newProgress.unlockedAuthors.push(chosenAuthor.id);
        isNewlyUnlocked = true;
      }

      drops.push({
        type: 'author',
        itemId: chosenAuthor.id,
        itemName: chosenAuthor.name,
        itemImage: chosenAuthor.image,
        newShardCount: nextCount,
        isNewlyUnlocked,
        itemCategory: activeLang === 'zh' ? '作家画像碎片' : 'Author Portrait Shard',
      });
    }
  }

  return { updatedProgress: newProgress, drops };
}

export function getDailyQuests(progress: UserProgress, lang?: Language): DailyQuest[] {
  const activeLang = lang || progress.language || 'en';
  const completedCount = progress.completedLessons.length;
  const hasStreakToday = progress.historyCheckins.includes(getTodayString());
  const wordsReviewed = progress.dailyWordsReviewed || 0;
  const wordGoal = progress.dailyWordGoal || 10;

  if (activeLang === 'zh') {
    return [
      {
        id: 'quest-streak',
        title: '朝圣晨祷：延续连胜',
        description: '点亮今日修道院火炬，延续每日学习连胜势头',
        targetCount: 1,
        currentCount: hasStreakToday ? 1 : 0,
        rewardXp: 20,
        rewardShards: {
          type: 'rabbit',
          amount: 1,
        },
        isCompleted: hasStreakToday,
        isClaimed: progress.claimedQuests.includes('quest-streak'),
      },
      {
        id: 'quest-lessons',
        title: '求学精进：学习 3 节课',
        description: '在求学之路中研习3节课，掌握古法语双格与语法',
        targetCount: 3,
        currentCount: Math.min(completedCount, 3),
        rewardXp: 35,
        rewardShards: {
          type: 'rabbit',
          amount: 1,
        },
        isCompleted: completedCount >= 3,
        isClaimed: progress.claimedQuests.includes('quest-lessons'),
      },
      {
        id: 'quest-flashcards',
        title: `词林策马：背诵 ${wordGoal} 个单词`,
        description: `使用词汇闪卡完成今日自选计划（${wordGoal} 词），巩固核心古法语词汇`,
        targetCount: wordGoal,
        currentCount: Math.min(wordsReviewed, wordGoal),
        rewardXp: 30,
        rewardShards: {
          type: 'author',
          amount: 1,
        },
        isCompleted: wordsReviewed >= wordGoal,
        isClaimed: progress.claimedQuests.includes('quest-flashcards'),
      },
    ];
  }

  return [
    {
      id: 'quest-streak',
      title: 'Matins Prayer: Keep the Streak',
      description: 'Ignite today’s abbey torch to keep your daily learning streak alive',
      targetCount: 1,
      currentCount: hasStreakToday ? 1 : 0,
      rewardXp: 20,
      rewardShards: {
        type: 'rabbit',
        amount: 1,
      },
      isCompleted: hasStreakToday,
      isClaimed: progress.claimedQuests.includes('quest-streak'),
    },
    {
      id: 'quest-lessons',
      title: 'Scholarly Zeal: Complete 3 Lessons',
      description: 'Complete 3 lessons on the Learning Path to master Old French cases & syntax',
      targetCount: 3,
      currentCount: Math.min(completedCount, 3),
      rewardXp: 35,
      rewardShards: {
        type: 'rabbit',
        amount: 1,
      },
      isCompleted: completedCount >= 3,
      isClaimed: progress.claimedQuests.includes('quest-lessons'),
    },
    {
      id: 'quest-flashcards',
      title: `Lexicon Ride: Review ${wordGoal} Words`,
      description: `Complete your custom daily flashcard target (${wordGoal} words) to master core vocabulary`,
      targetCount: wordGoal,
      currentCount: Math.min(wordsReviewed, wordGoal),
      rewardXp: 30,
      rewardShards: {
        type: 'author',
        amount: 1,
      },
      isCompleted: wordsReviewed >= wordGoal,
      isClaimed: progress.claimedQuests.includes('quest-flashcards'),
    },
  ];
}
