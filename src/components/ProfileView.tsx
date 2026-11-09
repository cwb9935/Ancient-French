/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Flame, 
  Sparkles, 
  ChevronRight,
  Feather,
  Globe,
  Check
} from 'lucide-react';
import { UserProgress, DailyQuest, Language } from '../types';
import { getRanks } from '../utils/storage';
import { getLocalizedRabbitSkins, getLocalizedAuthors } from '../utils/i18nAuthorsAndRabbits';
import { sound } from '../utils/audio';

interface ProfileViewProps {
  progress: UserProgress;
  quests: DailyQuest[];
  onClaimQuest: (quest: DailyQuest) => void;
  onOpenCheckin: () => void;
  onOpenWardrobe: () => void;
  onOpenGallery: () => void;
  onChangeLanguage?: (lang: Language) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  progress,
  quests,
  onClaimQuest,
  onOpenWardrobe,
  onOpenGallery,
  onChangeLanguage,
}) => {
  const lang = progress.language || 'en';
  const isZh = lang === 'zh';

  const ranks = getRanks(lang);
  const rabbitSkins = getLocalizedRabbitSkins(lang);
  const medievalAuthors = getLocalizedAuthors(lang);

  const currentRankIndex = Math.max(
    0,
    ranks.findIndex((r) => r.level === progress.rankLevel)
  );
  const currentRankObj = ranks[currentRankIndex] || ranks[0];
  const nextRank = ranks[currentRankIndex + 1] || null;
  const currentRankMin = currentRankObj?.minXp || 0;
  const nextRankMin = nextRank ? nextRank.minXp : ranks[ranks.length - 1].minXp;
  const xpNeeded = nextRank ? nextRankMin - currentRankMin : 1;
  const xpCurrent = progress.xp - currentRankMin;
  const rankPercent = nextRank
    ? Math.min(100, Math.max(0, Math.round((xpCurrent / xpNeeded) * 100)))
    : 100;

  const activeSkin = rabbitSkins.find(s => s.id === progress.activeRabbitSkinId) || rabbitSkins[0];

  // Unlocked counts
  const unlockedAuthorsCount = medievalAuthors.filter(
    a => (progress.authorShards[a.id] || 0) >= a.shardsRequired || progress.unlockedAuthors.includes(a.id)
  ).length;

  const unlockedSkinsCount = rabbitSkins.filter(
    s => (progress.rabbitShards[s.id] || 0) >= s.shardsRequired || progress.unlockedSkins.includes(s.id)
  ).length;

  return (
    <div className="pb-24 pt-2 px-3 sm:px-4 max-w-md mx-auto space-y-4">
      {/* Default Language Switcher Card */}
      <div className="bg-white rounded-3xl p-4 border border-amber-200/80 shadow-2xs">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200/60">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-900 font-serif">
                {isZh ? '默认界面与教学语言 (Language)' : 'Default Language · 语言设置'}
              </h3>
              <p className="text-[11px] text-stone-500">
                {isZh
                  ? '切换课程解析、语法宝典、闪卡与画廊的默认显示语言'
                  : 'Switch default language for lessons, grammar codex, flashcards & gallery'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              sound.playClick();
              onChangeLanguage?.('en');
            }}
            className={`py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
              lang === 'en'
                ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
            }`}
          >
            <span>English (Default)</span>
            {lang === 'en' && <Check className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onChangeLanguage?.('zh');
            }}
            className={`py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
              lang === 'zh'
                ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
            }`}
          >
            <span>简体中文 (Chinese)</span>
            {lang === 'zh' && <Check className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Profile Knight Banner */}
      <div className="bg-white rounded-3xl p-5 border border-amber-200/80 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-3.5">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0 bg-stone-900">
            <img
              src={activeSkin.image}
              alt={activeSkin.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
              {isZh ? '骑士名录 · Chevalerie' : 'Knight Roster · Chevalerie'}
            </span>
            <div className="overflow-x-auto pb-0.5 scrollbar-none">
              <h2 className="text-base sm:text-lg font-bold text-stone-900 font-serif whitespace-nowrap">
                {currentRankObj.title}
              </h2>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-stone-600 mt-1 overflow-x-auto whitespace-nowrap scrollbar-none">
              <span className="flex items-center gap-1 font-bold text-amber-600">
                <Flame className="w-3.5 h-3.5 fill-amber-500 shrink-0" />{' '}
                {isZh ? `${progress.streak} 天连胜晨祷` : `${progress.streak} Day Streak`}
              </span>
              <span>·</span>
              <span className="text-stone-500 font-medium">
                {isZh
                  ? `已修 ${progress.completedLessons.length} 课`
                  : `${progress.completedLessons.length} Lessons Completed`}
              </span>
            </div>
          </div>
        </div>

        {/* Knight Rank Progress Bar */}
        <div className="mt-4 pt-3 border-t border-stone-100">
          <div className="flex justify-between text-xs font-bold mb-1">
            <span className="text-stone-700">
              {isZh ? '骑士进阶进度' : 'Knight Rank Progress'}
            </span>
            <span className="text-stone-500 tabular-nums">
              {progress.xp} / {nextRankMin} ⚡
            </span>
          </div>
          <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${rankPercent}%` }}
            />
          </div>
          {nextRank && (
            <div className="overflow-x-auto mt-1 scrollbar-none">
              <span className="text-[10px] text-stone-500 block text-right whitespace-nowrap">
                {isZh ? `下一段位：${nextRank.title}` : `Next Rank: ${nextRank.title}`}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* All Knight Ranks Horizontal Scrollable Ladder */}
      <div className="bg-white rounded-3xl p-4 border border-stone-200 shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-stone-800 font-serif">
            {isZh ? '骑士封号阶梯 (左右滑动查看全部段位名)' : 'Knight Rank Ladder (Swipe to view all ranks)'}
          </span>
          <span className="text-[10px] text-amber-700 font-semibold">
            {isZh ? `当前 Lv.${progress.rankLevel}` : `Current Lv.${progress.rankLevel}`}
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none">
          {ranks.map((r) => {
            const isCurrentRank = r.level === progress.rankLevel;
            const isReached = progress.xp >= r.minXp;
            return (
              <div
                key={r.level}
                className={`flex-shrink-0 px-3 py-2 rounded-2xl border text-left transition-all ${
                  isCurrentRank
                    ? 'bg-amber-100 border-amber-500 shadow-xs'
                    : isReached
                    ? 'bg-emerald-50/70 border-emerald-200'
                    : 'bg-stone-50 border-stone-200 opacity-65'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span className="text-[10px] font-bold uppercase text-amber-800">
                    Lv.{r.level} {isCurrentRank ? (isZh ? '· 当前段位' : '· Current') : ''}
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">
                    {r.minXp} XP
                  </span>
                </div>
                <div className="text-xs font-bold text-stone-900 font-serif whitespace-nowrap">
                  {r.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rabbit Mascot Wardrobe Callout */}
      <div className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 rounded-3xl p-4 text-amber-100 border border-amber-700/60 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={activeSkin.image}
              alt={activeSkin.name}
              className="w-12 h-12 rounded-xl object-cover border border-amber-400 shadow-sm"
            />
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                {isZh
                  ? `当前服饰 · 已解锁 ${unlockedSkinsCount} / ${rabbitSkins.length} 款`
                  : `Equipped Attire · ${unlockedSkinsCount} / ${rabbitSkins.length} Unlocked`}
              </div>
              <h3 className="text-sm font-bold font-serif text-white">
                {activeSkin.name}
              </h3>
              <p className="text-[11px] text-amber-200/80 truncate max-w-[180px]">
                {activeSkin.title}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onOpenWardrobe();
            }}
            className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold shadow-sm active:scale-95 transition-all"
          >
            {isZh ? '兔子衣橱' : 'Wardrobe'}
          </button>
        </div>
      </div>

      {/* Author Gallery Quick Widget */}
      <div className="bg-white rounded-3xl p-4 border border-stone-200 shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-amber-100 text-amber-800">
              <Feather className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-900 font-serif">
                {isZh ? '中世纪经典作家画廊' : 'Medieval Authors Gallery'}
              </h3>
              <p className="text-[11px] text-stone-500">
                {isZh
                  ? `已集齐并解锁 ${unlockedAuthorsCount} / ${medievalAuthors.length} 位作家全传`
                  : `${unlockedAuthorsCount} / ${medievalAuthors.length} Author Biographies Unlocked`}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onOpenGallery();
            }}
            className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-0.5"
          >
            {isZh ? '进入画廊' : 'Open Gallery'}
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Small thumbnail previews */}
        <div className="flex gap-2 pt-1 overflow-x-auto scrollbar-none">
          {medievalAuthors.map(a => {
            const count = progress.authorShards[a.id] || 0;
            const isUnlocked = count >= a.shardsRequired || progress.unlockedAuthors.includes(a.id);
            return (
              <div
                key={a.id}
                onClick={() => {
                  sound.playClick();
                  onOpenGallery();
                }}
                className="cursor-pointer flex-shrink-0 flex flex-col items-center p-1.5 rounded-xl bg-stone-50 border border-stone-200 text-center w-16 hover:bg-amber-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-300 mb-1">
                  <img
                    src={a.image}
                    alt={a.name}
                    className={`w-full h-full object-cover ${isUnlocked ? '' : 'filter grayscale opacity-70'}`}
                  />
                </div>
                <span className="text-[9px] font-bold text-stone-800 truncate w-full">
                  {a.name.replace(/^\d+\.\s*/, '').split('·')[0].split('/')[0].trim()}
                </span>
                <span className="text-[8px] font-bold text-amber-700">
                  {isUnlocked ? (isZh ? '已集齐' : 'Unlocked') : `${count}/5`}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Quests List */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-2xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-bold text-stone-900 font-serif">
              {isZh ? '今日修行任务' : 'Daily Quests'}
            </h3>
          </div>
          <span className="text-[11px] text-stone-400">
            {isZh ? '每日 00:00 刷新' : 'Resets daily at 00:00'}
          </span>
        </div>

        <div className="space-y-3">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className={`p-3 rounded-2xl border transition-all ${
                quest.isClaimed
                  ? 'bg-stone-50/70 border-stone-200 opacity-60'
                  : quest.isCompleted
                  ? 'bg-amber-50 border-amber-300'
                  : 'bg-white border-stone-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-stone-800">{quest.title}</h4>
                    {quest.isClaimed && (
                      <span className="text-[9px] font-bold text-stone-400 bg-stone-100 px-1.5 py-0.2 rounded">
                        {isZh ? '已领取' : 'Claimed'}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-stone-500 mt-0.5 leading-tight">
                    {quest.description}
                  </p>
                </div>

                {/* Claim or Reward Button */}
                {quest.isCompleted && !quest.isClaimed ? (
                  <button
                    onClick={() => {
                      sound.playSuccess();
                      onClaimQuest(quest);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-xs active:scale-95 transition-all shrink-0"
                  >
                    {isZh ? '领碎片奖励' : 'Claim Shard'}
                  </button>
                ) : (
                  <div className="text-right shrink-0">
                    <span className="text-[11px] font-bold text-indigo-600 block">
                      +{quest.rewardXp} XP
                    </span>
                    <span className="text-[10px] text-amber-700 font-medium">
                      {isZh ? '+1 随机碎片' : '+1 Random Shard'}
                    </span>
                  </div>
                )}
              </div>

              {/* Quest Progress Bar */}
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{
                      width: `${Math.min(100, (quest.currentCount / quest.targetCount) * 100)}%`,
                    }}
                  />
                </div>
                <span className="text-[10px] text-stone-400 font-mono">
                  {quest.currentCount}/{quest.targetCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
