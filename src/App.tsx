/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Lesson, UserProgress, DailyQuest, ShardDropResult, Language } from './types';
import { 
  loadUserProgress, 
  saveUserProgress, 
  resetUserProgress,
  getTodayString, 
  getDailyQuests,
  getRankByXp,
  rollShardDrop
} from './utils/storage';
import { getLocalizedUnits, getLocalizedLesson } from './utils/i18nCurriculum';
import { sound } from './utils/audio';
import { HeaderStats } from './components/HeaderStats';
import { BottomNav, NavTab } from './components/BottomNav';
import { LearningPath } from './components/LearningPath';
import { LessonModal } from './components/LessonModal';
import { DailyCheckinModal } from './components/DailyCheckinModal';
import { GrammarCodex } from './components/GrammarCodex';
import { FlashcardsView } from './components/FlashcardsView';
import { LibraryGalleryView } from './components/LibraryGalleryView';
import { RabbitWardrobeModal } from './components/RabbitWardrobeModal';
import { ShardDropModal } from './components/ShardDropModal';
import { GrandFinaleModal } from './components/GrandFinaleModal';
import { ProfileView } from './components/ProfileView';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress());
  const [currentTab, setCurrentTab] = useState<NavTab>('path');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [showCheckinModal, setShowCheckinModal] = useState<boolean>(false);
  const [showWardrobeModal, setShowWardrobeModal] = useState<boolean>(false);
  const [showGrandFinaleModal, setShowGrandFinaleModal] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [notification, setNotification] = useState<{ title: string; desc: string } | null>(null);

  // Shard celebration modal state
  const [droppedShards, setDroppedShards] = useState<ShardDropResult[]>([]);
  const [dropReasonTitle, setDropReasonTitle] = useState<string>('');
  const [showShardModal, setShowShardModal] = useState<boolean>(false);

  const lang: Language = progress.language || 'en';
  const isZh = lang === 'zh';

  const localizedUnits = useMemo(() => getLocalizedUnits(lang), [lang]);

  // Sync progress changes to localStorage
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // Toast auto-clear
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showToast = (title: string, desc: string) => {
    setNotification({ title, desc });
  };

  // Switch or toggle language
  const handleChangeLanguage = (nextLang: Language) => {
    setProgress((prev) => {
      const rank = getRankByXp(prev.xp, nextLang);
      return {
        ...prev,
        language: nextLang,
        rankTitle: rank.title,
        rankLevel: rank.level,
      };
    });
    if (activeLesson) {
      setActiveLesson((prevLesson) => (prevLesson ? getLocalizedLesson(prevLesson, nextLang) : null));
    }
    showToast(
      nextLang === 'en' ? 'Language Switched to English' : '已切换为简体中文',
      nextLang === 'en'
        ? 'Default interface & curriculum language is now set to English.'
        : '课程解析、语法宝典与闪卡已切换为中文显示。'
    );
  };

  const handleToggleLanguage = () => {
    const nextLang: Language = lang === 'en' ? 'zh' : 'en';
    handleChangeLanguage(nextLang);
  };

  // Toggle sound
  const handleToggleSound = () => {
    sound.soundEnabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
  };

  // Lesson start
  const handleSelectLesson = (lesson: Lesson) => {
    setActiveLesson(getLocalizedLesson(lesson, lang));
  };

  // Lesson completed
  const handleFinishLesson = (xpGained: number, isPerfect: boolean) => {
    if (!activeLesson) return;

    // Roll shard drop for completing lesson
    const { updatedProgress, drops } = rollShardDrop(progress, 'both', lang);
    
    const isAlreadyCompleted = updatedProgress.completedLessons.includes(activeLesson.id);
    const newCompleted = isAlreadyCompleted
      ? updatedProgress.completedLessons
      : [...updatedProgress.completedLessons, activeLesson.id];

    const earnedXp = isAlreadyCompleted ? 0 : xpGained;
    const finalXp = updatedProgress.xp + earnedXp;
    const rank = getRankByXp(finalXp, lang);

    // Check if unlocking next unit (when all lessons of current unit are completed)
    const newUnlocked = [...updatedProgress.unlockedUnits];
    const currentUnit = localizedUnits.find((u) => u.id === activeLesson.unitId);
    const isCurrentUnitAllDone = currentUnit
      ? currentUnit.lessons.every((l) => newCompleted.includes(l.id))
      : true;
    const match = activeLesson.unitId.match(/^unit-(\d+)$/);
    if (match && isCurrentUnitAllDone) {
      const nextUnitNum = parseInt(match[1], 10) + 1;
      const nextUnitId = `unit-${nextUnitNum}`;
      if (nextUnitNum <= 18 && !newUnlocked.includes(nextUnitId)) {
        newUnlocked.push(nextUnitId);
      }
    }

    // Check if the user has now completed ALL lessons across all 18 units for the first time
    const allCourseLessonIds = localizedUnits.flatMap((u) => u.lessons.map((l) => l.id));
    const isAllCourseDone =
      allCourseLessonIds.length > 0 &&
      allCourseLessonIds.every((id) => newCompleted.includes(id));
    const isFirstTimeGrandCompletion =
      isAllCourseDone && !updatedProgress.hasSeenGrandCompletion;

    const nextState: UserProgress = {
      ...updatedProgress,
      xp: finalXp,
      totalCorrect: updatedProgress.totalCorrect + (isPerfect ? 5 : 4),
      totalAnswered: updatedProgress.totalAnswered + 5,
      completedLessons: newCompleted,
      unlockedUnits: newUnlocked,
      rankTitle: rank.title,
      rankLevel: rank.level,
      hasSeenGrandCompletion:
        updatedProgress.hasSeenGrandCompletion || isFirstTimeGrandCompletion,
    };

    setProgress(nextState);
    setActiveLesson(null);

    if (isFirstTimeGrandCompletion) {
      setShowGrandFinaleModal(true);
    } else if (drops.length > 0) {
      // Show shard drop rewards modal
      setDroppedShards(drops);
      setDropReasonTitle(
        isZh ? `研习完成：${activeLesson.title}` : `Lesson Complete: ${activeLesson.title}`
      );
      setShowShardModal(true);
    } else {
      showToast(
        isZh ? '研习圆满！' : 'Lesson Complete!',
        isZh
          ? `收获 +${earnedXp || xpGained} 骑士经验！`
          : `Earned +${earnedXp || xpGained} Knight XP!`
      );
    }
  };

  // Daily Checkin confirm
  const handleConfirmCheckin = () => {
    const todayStr = getTodayString();
    if (progress.historyCheckins.includes(todayStr)) return;

    // Award rabbit shard on daily checkin
    const { updatedProgress, drops } = rollShardDrop(progress, 'rabbit', lang);

    const newStreak = updatedProgress.streak + 1;
    const newHistory = [...updatedProgress.historyCheckins, todayStr];
    const newXp = updatedProgress.xp + 15;
    const rank = getRankByXp(newXp, lang);

    const nextState: UserProgress = {
      ...updatedProgress,
      streak: newStreak,
      historyCheckins: newHistory,
      lastCheckinDate: todayStr,
      xp: newXp,
      rankTitle: rank.title,
      rankLevel: rank.level,
    };

    setProgress(nextState);
    setShowCheckinModal(false);

    if (drops.length > 0) {
      setDroppedShards(drops);
      setDropReasonTitle(
        isZh ? `连胜晨祷点亮：第 ${newStreak} 天！` : `Daily Streak Lit: Day ${newStreak}!`
      );
      setShowShardModal(true);
    } else {
      showToast(
        isZh ? '晨祷打卡成功！' : 'Daily Check-in Complete!',
        isZh ? `连胜增至 ${newStreak} 天！` : `Streak increased to ${newStreak} days!`
      );
    }
  };

  // Milestone Chest claim (only unlocked when all lessons of the unit are completed, and claimable once)
  const handleClaimMilestoneChest = (unitNumber: number) => {
    const targetUnit = localizedUnits.find((u) => u.unitNumber === unitNumber);
    if (!targetUnit) return;

    const isAllLessonsCompleted = targetUnit.lessons.every((lesson) =>
      progress.completedLessons.includes(lesson.id)
    );
    if (!isAllLessonsCompleted) {
      showToast(
        isZh ? '里程碑尚未解锁' : 'Milestone Locked',
        isZh
          ? '需先完成本单元全部课程方可开启里程碑宝匣！'
          : 'Complete all lessons in this unit first to unlock the milestone chest!'
      );
      return;
    }

    const claimedList = progress.claimedMilestones || [];
    if (claimedList.includes(unitNumber)) {
      showToast(
        isZh ? '里程碑已领取' : 'Milestone Already Claimed',
        isZh
          ? '每个单元里程碑奖励仅限领取 1 次。'
          : 'Each unit milestone chest can only be claimed once.'
      );
      return;
    }

    const { updatedProgress, drops } = rollShardDrop(progress, 'both', lang);
    const newXp = updatedProgress.xp + 25;
    const rank = getRankByXp(newXp, lang);

    setProgress({
      ...updatedProgress,
      claimedMilestones: [...(updatedProgress.claimedMilestones || []), unitNumber],
      xp: newXp,
      rankTitle: rank.title,
      rankLevel: rank.level,
    });

    if (drops.length > 0) {
      setDroppedShards(drops);
      setDropReasonTitle(
        isZh
          ? `第 ${unitNumber} 单元里程碑宝匣已开启！`
          : `Unit ${unitNumber} Milestone Chest Opened!`
      );
      setShowShardModal(true);
    }
  };

  // Claim Daily Quest
  const handleClaimQuest = (quest: DailyQuest) => {
    if (progress.claimedQuests.includes(quest.id)) return;

    const { updatedProgress, drops } = rollShardDrop(progress, quest.rewardShards.type, lang);
    const newXp = updatedProgress.xp + quest.rewardXp;
    const rank = getRankByXp(newXp, lang);

    setProgress({
      ...updatedProgress,
      claimedQuests: [...updatedProgress.claimedQuests, quest.id],
      xp: newXp,
      rankTitle: rank.title,
      rankLevel: rank.level,
    });

    if (drops.length > 0) {
      setDroppedShards(drops);
      setDropReasonTitle(
        isZh ? `日常任务达成：${quest.title}` : `Daily Quest Complete: ${quest.title}`
      );
      setShowShardModal(true);
    } else {
      showToast(
        isZh ? '日常赏赐已领受' : 'Quest Reward Claimed',
        isZh ? `获得 +${quest.rewardXp} 骑士经验！` : `Earned +${quest.rewardXp} Knight XP!`
      );
    }
  };

  // Equip Rabbit Skin
  const handleEquipRabbitSkin = (skinId: string) => {
    setProgress((prev) => ({
      ...prev,
      activeRabbitSkinId: skinId,
    }));
    showToast(
      isZh ? '伴读形象已切换' : 'Companion Attire Equipped',
      isZh
        ? '中世纪伴读兔已换装为您助阵！'
        : 'Your medieval companion rabbit has changed attire!'
    );
  };

  // Record Flashcard Word Review
  const handleRecordWordReview = (wordId: string) => {
    setProgress((prev) => {
      const learnedSet = new Set(prev.learnedWordIds || []);
      learnedSet.add(wordId);
      const nextReviewedCount = (prev.dailyWordsReviewed || 0) + 1;
      const newXp = prev.xp + 5;
      const rank = getRankByXp(newXp, lang);
      return {
        ...prev,
        dailyWordsReviewed: nextReviewedCount,
        learnedWordIds: Array.from(learnedSet),
        xp: newXp,
        rankTitle: rank.title,
        rankLevel: rank.level,
      };
    });
  };

  // Record Manuscript Reading Time
  const handleRecordManuscriptRead = () => {
    setProgress((prev) => {
      const nextReadSeconds = (prev.manuscriptReadSeconds || 0) + 60;
      const newXp = prev.xp + 5;
      const rank = getRankByXp(newXp, lang);
      return {
        ...prev,
        manuscriptReadSeconds: nextReadSeconds,
        xp: newXp,
        rankTitle: rank.title,
        rankLevel: rank.level,
      };
    });
  };

  // Reset all learning progress
  const handleResetProgress = () => {
    const freshState = resetUserProgress(lang);
    setProgress(freshState);
    setActiveLesson(null);
    setDroppedShards([]);
    setShowShardModal(false);
    showToast(
      isZh ? '学习进度已全部重置' : 'All Learning Progress Reset',
      isZh
        ? '所有课程记录、经验、连胜与碎片已清零，欢迎重新踏上古法语修行之路！'
        : 'All lessons, XP, streaks, and shards have been cleared. Welcome to a fresh start!'
    );
  };

  const dailyQuests = getDailyQuests(progress, lang);

  return (
    <div className="min-h-screen bg-stone-100/90 flex justify-center text-stone-800">
      {/* Mobile-first ergonomic container shell */}
      <div className="w-full max-w-md bg-stone-50 min-h-screen shadow-2xl relative flex flex-col border-x border-amber-200/80">
        {/* Sticky Mobile Header Stats Bar */}
        <HeaderStats
          progress={progress}
          onOpenCheckin={() => setShowCheckinModal(true)}
          onOpenWardrobe={() => setShowWardrobeModal(true)}
          onOpenGallery={() => setCurrentTab('library')}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onToggleLanguage={handleToggleLanguage}
        />

        {/* Global Toast Notification */}
        {notification && (
          <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-stone-900/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl shadow-xl border border-amber-500/40 animate-in fade-in slide-in-from-top-2 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-amber-400 block font-serif">
                {notification.title}
              </span>
              <span className="text-[11px] text-stone-200">
                {notification.desc}
              </span>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-stone-400 hover:text-white text-xs ml-2 p-1"
            >
              ✕
            </button>
          </div>
        )}

        {/* Primary Tab Views */}
        <main className="flex-1">
          {currentTab === 'path' && (
            <LearningPath
              units={localizedUnits}
              progress={progress}
              onSelectLesson={handleSelectLesson}
              onClaimMilestoneChest={handleClaimMilestoneChest}
              onOpenCheckin={() => setShowCheckinModal(true)}
            />
          )}

          {currentTab === 'grammar' && <GrammarCodex lang={lang} />}

          {currentTab === 'flashcards' && (
            <FlashcardsView
              progress={progress}
              onRecordWordReview={handleRecordWordReview}
              onUpdateDailyGoal={(goal) =>
                setProgress((prev) => ({
                  ...prev,
                  dailyWordGoal: Math.min(50, Math.max(10, goal)),
                }))
              }
            />
          )}

          {currentTab === 'library' && (
            <LibraryGalleryView
              progress={progress}
              onRecordManuscriptRead={handleRecordManuscriptRead}
            />
          )}

          {currentTab === 'profile' && (
            <ProfileView
              progress={progress}
              quests={dailyQuests}
              onClaimQuest={handleClaimQuest}
              onOpenCheckin={() => setShowCheckinModal(true)}
              onOpenWardrobe={() => setShowWardrobeModal(true)}
              onOpenGallery={() => setCurrentTab('library')}
              onChangeLanguage={handleChangeLanguage}
              onResetProgress={handleResetProgress}
            />
          )}
        </main>

        {/* Fixed Mobile Bottom Tab Bar */}
        <BottomNav currentTab={currentTab} onSelectTab={setCurrentTab} lang={lang} />

        {/* Active Duolingo-style Lesson Modal */}
        {activeLesson && (
          <LessonModal
            lesson={activeLesson}
            progress={progress}
            onClose={() => setActiveLesson(null)}
            onFinishLesson={handleFinishLesson}
          />
        )}

        {/* Daily Check-in Streak Modal */}
        {showCheckinModal && (
          <DailyCheckinModal
            progress={progress}
            onClose={() => setShowCheckinModal(false)}
            onConfirmCheckin={handleConfirmCheckin}
          />
        )}

        {/* Rabbit Wardrobe Modal */}
        {showWardrobeModal && (
          <RabbitWardrobeModal
            isOpen={showWardrobeModal}
            onClose={() => setShowWardrobeModal(false)}
            progress={progress}
            onEquipSkin={handleEquipRabbitSkin}
          />
        )}

        {/* Shard Drop Celebration Modal */}
        {showShardModal && (
          <ShardDropModal
            isOpen={showShardModal}
            onClose={() => setShowShardModal(false)}
            drops={droppedShards}
            reasonTitle={dropReasonTitle}
            lang={lang}
          />
        )}

        {/* Grand Finale Celebration Modal (First time completing all 18 units) */}
        <GrandFinaleModal
          isOpen={showGrandFinaleModal}
          onClose={() => setShowGrandFinaleModal(false)}
          onGoToLibrary={() => {
            setShowGrandFinaleModal(false);
            setCurrentTab('library');
          }}
          lang={lang}
        />
      </div>
    </div>
  );
}
