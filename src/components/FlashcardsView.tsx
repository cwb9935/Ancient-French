/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { getLocalizedFlashcards } from '../utils/i18nGrammarAndLexicon';
import { FlashcardWord, UserProgress } from '../types';
import { sound } from '../utils/audio';
import { 
  Volume2, 
  RotateCw, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Layers,
  Search,
  Shuffle,
  SlidersHorizontal,
  X
} from 'lucide-react';

interface FlashcardsViewProps {
  progress: UserProgress;
  onRecordWordReview: (wordId: string) => void;
  onUpdateDailyGoal?: (goal: number) => void;
}

const GOAL_PRESETS = [10, 15, 20, 30, 40, 50];

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  progress,
  onRecordWordReview,
  onUpdateDailyGoal,
}) => {
  const lang = progress.language || 'en';
  const isZh = lang === 'zh';

  const flashcardWords = useMemo(() => getLocalizedFlashcards(lang), [lang]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'noun' | 'verb' | 'adj' | 'connector'>('all');
  const [deckMode, setDeckMode] = useState<'all' | 'daily_plan' | 'unlearned' | 'mastered'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showGoalPlanner, setShowGoalPlanner] = useState(false);

  const dailyTarget = Math.min(50, Math.max(10, progress.dailyWordGoal || 10));
  const dailyProgress = progress.dailyWordsReviewed || 0;
  const learnedSet = useMemo(() => new Set(progress.learnedWordIds || []), [progress.learnedWordIds]);

  const filteredWords = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    let list = flashcardWords.filter((w) => {
      const posLower = w.pos.toLowerCase();
      if (activeFilter === 'noun' && !posLower.includes('nom') && !posLower.includes('noun') && !posLower.includes('substantivé')) {
        return false;
      }
      if (activeFilter === 'verb' && !posLower.includes('verbe') && !posLower.includes('verb') && !posLower.includes('participe') && !posLower.includes('participle')) {
        return false;
      }
      if (activeFilter === 'adj' && !posLower.includes('adj')) {
        return false;
      }
      if (
        activeFilter === 'connector' &&
        !posLower.includes('conjonction') &&
        !posLower.includes('conjunction') &&
        !posLower.includes('forclusif') &&
        !posLower.includes('adverbe') &&
        !posLower.includes('adverb') &&
        !posLower.includes('préposition') &&
        !posLower.includes('preposition') &&
        !posLower.includes('pronom') &&
        !posLower.includes('pronoun') &&
        !posLower.includes('numéral') &&
        !posLower.includes('numeral') &&
        !posLower.includes('présentatif') &&
        !posLower.includes('presentative')
      ) {
        return false;
      }

      if (deckMode === 'unlearned' && learnedSet.has(w.id)) return false;
      if (deckMode === 'mastered' && !learnedSet.has(w.id)) return false;

      if (q) {
        return (
          w.wordOldFrench.toLowerCase().includes(q) ||
          w.lemma.toLowerCase().includes(q) ||
          w.modernFrench.toLowerCase().includes(q) ||
          w.chinese.toLowerCase().includes(q) ||
          w.latinOrigin.toLowerCase().includes(q)
        );
      }

      return true;
    });

    if (deckMode === 'daily_plan') {
      // Prioritize unlearned words up to the user's daily target (10 - 50)
      const unlearned = list.filter((w) => !learnedSet.has(w.id));
      const learned = list.filter((w) => learnedSet.has(w.id));
      list = [...unlearned, ...learned].slice(0, dailyTarget);
    }

    return list;
  }, [flashcardWords, activeFilter, deckMode, searchQuery, learnedSet, dailyTarget]);

  const safeIndex = filteredWords.length > 0 ? currentIndex % filteredWords.length : 0;
  const currentWord: FlashcardWord = filteredWords[safeIndex] || flashcardWords[0];
  const isMastered = learnedSet.has(currentWord.id);

  const handleFlip = () => {
    sound.playClick();
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (filteredWords.length === 0) return;
    sound.playClick();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const handlePrev = () => {
    if (filteredWords.length === 0) return;
    sound.playClick();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  const handleRandomCard = () => {
    if (filteredWords.length <= 1) return;
    sound.playClick();
    setIsFlipped(false);
    const nextIdx = Math.floor(Math.random() * filteredWords.length);
    setCurrentIndex(nextIdx);
  };

  const handleJumpStep = (step: number) => {
    if (filteredWords.length === 0) return;
    sound.playClick();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + step + filteredWords.length) % filteredWords.length);
  };

  const handleSelectDailyGoal = (newGoal: number) => {
    const clamped = Math.min(50, Math.max(10, newGoal));
    sound.playClick();
    onUpdateDailyGoal?.(clamped);
  };

  const handleRate = (level: 'hard' | 'good' | 'easy') => {
    if (level === 'easy' || level === 'good') {
      sound.playCorrect();
    } else {
      sound.playClick();
    }

    onRecordWordReview(currentWord.id);

    // If reached user's daily target words celebration
    if (dailyProgress + 1 === dailyTarget) {
      sound.playLevelUp();
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#d97706', '#10b981', '#6366f1'],
        });
      } catch {
        // ignore
      }
    }

    handleNext();
  };

  return (
    <div className="pb-24 pt-2 px-3 sm:px-4 max-w-md mx-auto">
      {/* Top Banner */}
      <div className="mb-3 bg-gradient-to-br from-amber-900 via-stone-900 to-amber-950 text-amber-100 p-4 rounded-3xl border border-amber-700/50 shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
              <Layers className="w-3.5 h-3.5" />
              <span>{isZh ? '中世纪法语核心5000词' : '5,000 Core Medieval French Words'}</span>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                setShowGoalPlanner(!showGoalPlanner);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/25 hover:bg-amber-500/35 text-amber-200 text-xs font-bold border border-amber-400/40 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-300" />
              <span>{isZh ? `每日计划: ${dailyTarget}词` : `Daily Plan: ${dailyTarget} words`}</span>
            </button>
          </div>

          <h1 className="text-xl font-bold font-serif text-amber-50 flex items-center gap-2">
            {isZh ? '词汇闪卡' : 'Lexicon Flashcards'}
            <Sparkles className="w-4 h-4 text-amber-400" />
          </h1>

          {/* Daily Goal Progress Bar */}
          <div className="mt-3 bg-stone-950/60 p-2.5 rounded-2xl border border-amber-800/60">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-amber-200 font-medium">
                {isZh
                  ? `今日背词进度（自选计划 ${dailyTarget} 词）`
                  : `Today's Progress (Goal: ${dailyTarget} words)`}
              </span>
              <span className="text-amber-400 font-bold tabular-nums">
                {dailyProgress} / {dailyTarget} {isZh ? '词' : 'words'}
              </span>
            </div>
            <div className="h-2 w-full bg-stone-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, (dailyProgress / dailyTarget) * 100)}%` }}
              />
            </div>
          </div>

          {/* Expandable Daily Word Plan Selector (10 to 50 words) */}
          {showGoalPlanner && (
            <div className="mt-3 bg-stone-900/95 p-3 rounded-2xl border border-amber-600/50 space-y-2.5 animate-in fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-200">
                  {isZh
                    ? '设定每日背单词计划（10 - 50 词）'
                    : 'Set Daily Word Target (10 - 50 words)'}
                </span>
                <button
                  onClick={() => setShowGoalPlanner(false)}
                  className="text-stone-400 hover:text-amber-200 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Preset Pills */}
              <div className="grid grid-cols-6 gap-1.5">
                {GOAL_PRESETS.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handleSelectDailyGoal(preset)}
                    className={`py-1.5 rounded-xl text-xs font-bold transition-all border ${
                      dailyTarget === preset
                        ? 'bg-amber-500 text-stone-950 border-amber-300 shadow-xs'
                        : 'bg-stone-800 text-amber-100 border-stone-700 hover:bg-stone-700'
                    }`}
                  >
                    {isZh ? `${preset}词` : `${preset}`}
                  </button>
                ))}
              </div>

              {/* Fine Range Slider (10 to 50) */}
              <div className="flex items-center gap-3 pt-1">
                <span className="text-[11px] text-stone-400 font-mono">10</span>
                <input
                  type="range"
                  min={10}
                  max={50}
                  step={1}
                  value={dailyTarget}
                  onChange={(e) => handleSelectDailyGoal(parseInt(e.target.value, 10))}
                  className="flex-1 accent-amber-400 h-1.5 bg-stone-700 rounded-lg cursor-pointer"
                />
                <span className="text-[11px] text-stone-400 font-mono">50</span>
                <span className="text-xs font-bold text-amber-300 min-w-[52px] text-right tabular-nums">
                  {isZh ? `${dailyTarget} 词/日` : `${dailyTarget}/day`}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search & Deck Scope Bar */}
      <div className="mb-2.5 space-y-2">
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            placeholder={
              isZh
                ? '在 5000 古法语文学词库中搜索（古法/现法/汉/拉丁）...'
                : 'Search 5,000 Old French literary words (Old Fr / Mod Fr / En / Latin)...'
            }
            className="w-full pl-9 pr-8 py-2 rounded-2xl bg-white border border-stone-200 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setCurrentIndex(0);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Deck Mode Switcher */}
        <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
          {[
            { id: 'all', label: isZh ? `全部词库 (${flashcardWords.length})` : `All Words (${flashcardWords.length})` },
            { id: 'daily_plan', label: isZh ? `今日计划 (${dailyTarget}词)` : `Daily Plan (${dailyTarget})` },
            { id: 'unlearned', label: isZh ? '待学习' : 'To Learn' },
            { id: 'mastered', label: isZh ? `已掌握 (${learnedSet.size})` : `Mastered (${learnedSet.size})` },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => {
                sound.playClick();
                setDeckMode(mode.id as typeof deckMode);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all border ${
                deckMode === mode.id
                  ? 'bg-stone-800 text-amber-300 border-stone-900'
                  : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200/70'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* POS Filter Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2.5 scrollbar-none">
        {[
          { id: 'all', label: isZh ? '全部词类' : 'All POS' },
          { id: 'noun', label: isZh ? '名词双格' : 'Nouns (2-Case)' },
          { id: 'verb', label: isZh ? '核心动词' : 'Core Verbs' },
          { id: 'adj', label: isZh ? '形容词' : 'Adjectives' },
          { id: 'connector', label: isZh ? '副词与虚词' : 'Adverbs & Particles' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              sound.playClick();
              setActiveFilter(tab.id as typeof activeFilter);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
              activeFilter === tab.id
                ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-amber-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Card Carousel Count & Quick Jump */}
      <div className="flex items-center justify-between text-xs text-stone-500 mb-2 px-1">
        <div className="flex items-center gap-2">
          <span className="font-medium tabular-nums">
            {isZh
              ? `第 ${filteredWords.length > 0 ? safeIndex + 1 : 0} / ${filteredWords.length} 张`
              : `Card ${filteredWords.length > 0 ? safeIndex + 1 : 0} / ${filteredWords.length}`}
          </span>
          {isMastered && (
            <span className="inline-flex items-center gap-0.5 text-[11px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200 font-semibold">
              <CheckCircle2 className="w-3 h-3" /> {isZh ? '已掌握' : 'Mastered'}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleRandomCard}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-100/80 hover:bg-amber-200/80 px-2 py-0.5 rounded-md transition-colors"
            title={isZh ? '随机抽取一张闪卡' : 'Draw a random flashcard'}
          >
            <Shuffle className="w-3 h-3" /> {isZh ? '随机抽词' : 'Random'}
          </button>
          {currentWord?.helixLessonRef && (
            <span className="text-amber-800 font-semibold bg-amber-100/70 px-2 py-0.5 rounded-md truncate max-w-[140px]">
              {currentWord.helixLessonRef}
            </span>
          )}
        </div>
      </div>

      {/* Empty Filter State */}
      {filteredWords.length === 0 ? (
        <div className="w-full min-h-[260px] rounded-3xl bg-amber-50/60 border-2 border-dashed border-amber-300 p-6 flex flex-col items-center justify-center text-center space-y-2">
          <p className="text-sm font-bold text-stone-700">
            {isZh ? '未找到匹配的古法语词汇' : 'No matching Old French words found'}
          </p>
          <p className="text-xs text-stone-500">
            {isZh ? '请尝试更换搜索词或切换词库筛选范围' : 'Try adjusting your search query or filter scope'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
              setDeckMode('all');
              setCurrentIndex(0);
            }}
            className="mt-2 px-3 py-1.5 rounded-xl bg-amber-600 text-white text-xs font-bold"
          >
            {isZh ? '重置筛选' : 'Reset Filters'}
          </button>
        </div>
      ) : (
        <>
          {/* Interactive 3D Flip Card */}
          <div 
            onClick={handleFlip}
            className="w-full min-h-[320px] cursor-pointer rounded-3xl bg-amber-50/90 border-2 border-amber-300 shadow-md p-6 relative flex flex-col justify-between transition-all hover:border-amber-400 active:scale-99 select-none overflow-hidden"
          >
            {/* Subtle decorative manuscript rule lines */}
            <div className="absolute top-3 left-4 text-[10px] font-mono text-amber-700/60 uppercase tracking-widest">
              {isFlipped
                ? isZh
                  ? 'Verso · 释义与考点'
                  : 'Verso · Meaning & Etymology'
                : isZh
                ? 'Recto · 原典古词'
                : 'Recto · Old French Lemma'}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                sound.speakOldFrench(currentWord.wordOldFrench);
              }}
              className="absolute top-3 right-4 p-2 rounded-xl bg-amber-200/70 hover:bg-amber-300 text-amber-900 shadow-xs transition-colors"
              title={isZh ? '朗读古法语发音' : 'Listen to Old French pronunciation'}
            >
              <Volume2 className="w-4 h-4" />
            </button>

            {/* Card Front Content */}
            {!isFlipped ? (
              <div className="my-auto text-center space-y-3 py-4">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900 border border-amber-300/80">
                  {currentWord.pos}
                </span>

                <h2 className="text-3xl font-bold font-serif text-stone-900 tracking-tight">
                  {currentWord.wordOldFrench}
                </h2>

                {currentWord.ipa && (
                  <p className="text-xs text-amber-800 font-mono">
                    {currentWord.ipa}
                  </p>
                )}

                {currentWord.caseNote && (
                  <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 py-1 px-3 rounded-xl border border-emerald-200/80 inline-block">
                    {currentWord.caseNote}
                  </p>
                )}

                <div className="pt-4 border-t border-amber-200/80 max-w-xs mx-auto">
                  <span className="text-[11px] text-stone-400 block mb-0.5">
                    {isZh ? '原典例句：' : 'Manuscript Example:'}
                  </span>
                  <p className="text-xs font-serif italic text-stone-800 leading-relaxed">
                    “{currentWord.exampleOldFrench}”
                  </p>
                </div>
              </div>
            ) : (
              /* Card Back Content */
              <div className="my-auto space-y-3 text-left py-2">
                <div>
                  <span className="text-[10px] text-amber-700 font-bold uppercase block">
                    {isZh ? '现代法语 (Français moderne)' : 'Modern French (Français moderne)'}
                  </span>
                  <p className="text-base font-bold text-stone-900">
                    {currentWord.modernFrench}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] text-amber-700 font-bold uppercase block">
                    {isZh ? '中文释义' : 'English Meaning'}
                  </span>
                  <p className="text-sm font-semibold text-amber-950">
                    {currentWord.chinese}
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-amber-100/70 border border-amber-300/80 text-xs text-amber-900 leading-relaxed font-mono">
                  <span className="font-bold block text-[11px] font-sans mb-0.5">
                    {isZh ? '拉丁语源 (Étymologie)：' : 'Latin Etymology (Étymologie):'}
                  </span>
                  {currentWord.latinOrigin}
                </div>

                <div className="pt-2 border-t border-amber-200/80 space-y-1">
                  <span className="text-[10px] text-stone-500 block">
                    {isZh ? '例句翻译：' : 'Example Translation:'}
                  </span>
                  <p className="text-xs text-stone-700 italic">
                    {isZh ? '现：' : 'Mod. Fr: '}{currentWord.exampleModern}
                  </p>
                  <p className="text-xs text-stone-800 font-medium">
                    {isZh ? '汉：' : 'En: '}{currentWord.exampleChinese}
                  </p>
                </div>
              </div>
            )}

            {/* Card Footer Hint */}
            <div className="text-center pt-2 flex items-center justify-center gap-1 text-[11px] text-stone-500 font-medium">
              <RotateCw className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
              <span>{isZh ? '点击翻转卡片' : 'Tap card to flip'}</span>
            </div>
          </div>

          {/* Memory Assessment Action Buttons */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <button
              onClick={() => handleRate('hard')}
              className="py-2.5 px-2 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-all shadow-xs active:scale-95 text-center"
            >
              {isZh ? '需巩固' : 'Review Again'}
            </button>

            <button
              onClick={() => handleRate('good')}
              className="py-2.5 px-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition-all shadow-xs active:scale-95 text-center border border-amber-300/70"
            >
              {isZh ? '已掌握' : 'Mastered'}
            </button>

            <button
              onClick={() => handleRate('easy')}
              className="py-2.5 px-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs active:scale-95 text-center flex items-center justify-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {isZh ? '熟练' : 'Easy'}
            </button>
          </div>

          {/* Prev / Next & Fast Jump Controls */}
          <div className="flex items-center justify-between mt-4 px-1">
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="flex items-center gap-0.5 text-xs font-semibold text-stone-600 hover:text-stone-900 p-1.5"
              >
                <ChevronLeft className="w-4 h-4" /> {isZh ? '上一个' : 'Prev'}
              </button>
              {filteredWords.length > 100 && (
                <button
                  onClick={() => handleJumpStep(-100)}
                  className="text-[11px] font-mono text-stone-500 hover:text-stone-800 px-1.5 py-1 rounded-lg bg-stone-100"
                  title={isZh ? '向前跳过100词' : 'Jump back 100 words'}
                >
                  -100
                </button>
              )}
            </div>

            <div className="flex items-center gap-1">
              {filteredWords.length > 100 && (
                <button
                  onClick={() => handleJumpStep(100)}
                  className="text-[11px] font-mono text-stone-500 hover:text-stone-800 px-1.5 py-1 rounded-lg bg-stone-100"
                  title={isZh ? '向后跳过100词' : 'Jump forward 100 words'}
                >
                  +100
                </button>
              )}
              <button
                onClick={handleNext}
                className="flex items-center gap-0.5 text-xs font-semibold text-stone-600 hover:text-stone-900 p-1.5"
              >
                {isZh ? '下一个' : 'Next'} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
