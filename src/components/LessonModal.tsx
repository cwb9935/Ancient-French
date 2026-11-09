/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Trophy, 
  RotateCcw,
  BookOpen,
  Target,
  Zap,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { Lesson, Exercise, UserProgress } from '../types';
import { sound } from '../utils/audio';
import { MascotMessage } from './MascotMessage';

interface LessonModalProps {
  lesson: Lesson;
  progress: UserProgress;
  onClose: () => void;
  onFinishLesson: (xpGained: number, isPerfect: boolean) => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  progress,
  onClose,
  onFinishLesson,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedWordBank, setSelectedWordBank] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [correctFirstTryCount, setCorrectFirstTryCount] = useState(0);
  const [hasAttemptedCurrent, setHasAttemptedCurrent] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const currentExercise: Exercise | undefined = lesson.exercises[currentIndex];

// Helper to thoroughly scramble word bank tiles so they never appear in original sentence order
function shuffleWordTiles(words: string[]): string[] {
  if (words.length <= 1) return [...words];
  const targetStr = words.join(' ');
  const shuffled = [...words];
  for (let attempt = 0; attempt < 25; attempt++) {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    if (shuffled.join(' ') !== targetStr) {
      return shuffled;
    }
  }
  return [...words].reverse();
}

  // Initialize exercise state
  useEffect(() => {
    if (currentExercise) {
      setSelectedOption(null);
      setStatus('idle');
      setHasAttemptedCurrent(false);
      if (currentExercise.type === 'word_bank' && currentExercise.wordBank) {
        setAvailableWords(shuffleWordTiles(currentExercise.wordBank));
        setSelectedWordBank([]);
      }
    }
  }, [currentIndex, currentExercise]);

  // Handle tile click in word bank
  const handlePickWord = (word: string, index: number) => {
    if (status !== 'idle') return;
    sound.playClick();
    const newAvail = [...availableWords];
    newAvail.splice(index, 1);
    setAvailableWords(newAvail);
    setSelectedWordBank([...selectedWordBank, word]);
  };

  const handleReturnWord = (word: string, index: number) => {
    if (status !== 'idle') return;
    sound.playClick();
    const newSelected = [...selectedWordBank];
    newSelected.splice(index, 1);
    setSelectedWordBank(newSelected);
    setAvailableWords([...availableWords, word]);
  };

  // Check answer logic
  const handleCheck = () => {
    if (!currentExercise || status !== 'idle') return;

    let isCorrect = false;

    if (currentExercise.type === 'word_bank') {
      const target = (currentExercise.correctAnswer as string[]).join(' ').trim();
      const userConstructed = selectedWordBank.join(' ').trim();
      isCorrect = target.toLowerCase() === userConstructed.toLowerCase();
    } else {
      isCorrect = selectedOption === currentExercise.correctAnswer;
    }

    if (isCorrect) {
      sound.playCorrect();
      setStatus('correct');
      if (!hasAttemptedCurrent) {
        setCorrectFirstTryCount((prev) => prev + 1);
      }
    } else {
      sound.playIncorrect();
      setStatus('incorrect');
      setHasAttemptedCurrent(true);
    }
  };

  // Retry when answer is incorrect
  const handleRetryCurrent = () => {
    setStatus('idle');
    setSelectedOption(null);
    if (currentExercise?.type === 'word_bank' && currentExercise.wordBank) {
      setAvailableWords(shuffleWordTiles(currentExercise.wordBank));
      setSelectedWordBank([]);
    }
  };

  // Continue to next exercise or finish
  const handleNext = () => {
    if (currentIndex < lesson.exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setStatus('idle');
    } else {
      // Completed!
      setIsFinished(true);
      sound.playFanfare();
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#d97706', '#10b981', '#6366f1'],
        });
      } catch {
        // Fallback
      }
    }
  };

  const lang = progress.language || 'en';
  const isZh = lang === 'zh';
  const progressPercent = Math.round(((currentIndex) / lesson.exercises.length) * 100);

  // Lesson Finished View
  if (isFinished) {
    const accuracy = Math.round((correctFirstTryCount / lesson.exercises.length) * 100);
    const isPerfect = accuracy >= 100;

    return (
      <div className="fixed inset-0 z-50 bg-stone-900/90 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gradient-to-b from-white to-amber-50 rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-amber-200">
          <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center mx-auto mb-3 text-amber-600 shadow-inner">
            <Trophy className="w-8 h-8 fill-amber-400 text-amber-600" />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
            {isZh ? 'Leçon Achevée · 研习大成' : 'Leçon Achevée · Lesson Complete'}
          </span>
          <h2 className="text-xl font-bold font-serif text-stone-900 mt-1">
            {lesson.title}
          </h2>
          <p className="text-xs text-stone-600 mt-1 mb-4">
            {isZh
              ? '你已成功掌握该章节的核心语法与原典词义！'
              : 'You have mastered the core grammar and manuscript vocabulary of this lesson!'}
          </p>

          <MascotMessage
            skinId={progress.activeRabbitSkinId}
            message={
              isZh
                ? '“Mult bien fait, bacheler !” 伴读小兔为你送上经验与珍贵羊皮纸碎片！'
                : '“Mult bien fait, bacheler!” Your companion rabbit brings you XP and precious parchment shards!'
            }
            subMessage={
              isZh
                ? '连续打卡让知识更加牢固，去珍宝阁看看掉落的画像与皮肤碎片吧！'
                : 'Keep your streak alive and check the Gallery & Wardrobe for newly dropped shards!'
            }
            lang={lang}
          />

          {/* Stats Badges */}
          <div className="grid grid-cols-2 gap-2 my-4">
            <div className="bg-white/80 p-3 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center justify-center gap-1 text-indigo-600 font-bold text-sm mb-0.5">
                <Zap className="w-4 h-4 fill-indigo-500" />
                +{lesson.xpReward} XP
              </div>
              <div className="text-[10px] text-stone-500 font-medium">
                {isZh ? '骑士经验奖励' : 'Knight XP Earned'}
              </div>
            </div>

            <div className="bg-white/80 p-3 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center justify-center gap-1 text-emerald-600 font-bold text-sm mb-0.5">
                <Target className="w-4 h-4" />
                {accuracy}%
              </div>
              <div className="text-[10px] text-stone-500 font-medium">
                {isZh ? '本节准确率' : 'Accuracy'}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onFinishLesson(lesson.xpReward, isPerfect);
            }}
            className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            {isZh ? '收下奖励并继续' : 'Claim Rewards & Continue'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-xs flex flex-col justify-between">
      {/* Top Header Bar */}
      <header className="bg-amber-50/95 backdrop-blur-md border-b border-amber-200 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          {/* Close button with confirmation */}
          <button
            onClick={() => {
              sound.playClick();
              setShowExitConfirm(true);
            }}
            className="p-1 rounded-full text-stone-500 hover:text-stone-800 hover:bg-amber-100 transition-colors"
            title={isZh ? '退出本节' : 'Exit lesson'}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Progress Bar */}
          <div className="flex-1">
            <div className="flex items-center justify-between text-[10px] font-semibold text-stone-600 mb-1">
              <span>{lesson.title}</span>
              <span className="tabular-nums">{currentIndex + 1} / {lesson.exercises.length}</span>
            </div>
            <div className="h-2.5 w-full bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Stress-free XP Badge */}
          <div className="flex items-center gap-1 text-indigo-700 font-bold text-xs bg-indigo-50 px-2 py-1 rounded-xl border border-indigo-200">
            <Zap className="w-3.5 h-3.5 fill-indigo-500" />
            <span>+{lesson.xpReward}</span>
          </div>
        </div>
      </header>

      {/* Main Exercise Area */}
      <main className="flex-1 overflow-y-auto px-4 py-5 max-w-md mx-auto w-full bg-stone-50">
        {currentExercise && (
          <div className="space-y-4">
            {/* Prompt Section */}
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-semibold mb-2 border border-amber-200">
                <BookOpen className="w-3 h-3 text-amber-700" />
                {currentExercise.type === 'case_declension'
                  ? isZh
                    ? '双格判断 (Cas Sujet / Régime)'
                    : 'Case Declension (Cas Sujet / Régime)'
                  : currentExercise.type === 'conjugation_drill'
                  ? isZh
                    ? '动词变位实操 (Conjugaison)'
                    : 'Verb Conjugation (Conjugaison)'
                  : currentExercise.type === 'word_bank'
                  ? isZh
                    ? '连词成句'
                    : 'Sentence Construction'
                  : currentExercise.type === 'etymology_match'
                  ? isZh
                    ? '词源演变'
                    : 'Etymological Evolution'
                  : isZh
                  ? '原典语义辨析'
                  : 'Manuscript & Philology Analysis'}
              </div>

              <h2 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                {currentExercise.prompt}
              </h2>

              {/* Old French text snippet with audio pronunciation */}
              {currentExercise.promptOldFrench && (
                <div className="mt-3 p-3.5 rounded-2xl bg-amber-100/60 border border-amber-200/90 flex items-center justify-between gap-3 shadow-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800 block">
                      {isZh ? '古法语 (Ancien Français)' : 'Old French (Ancien Français)'}
                    </span>
                    <span className="text-base font-serif font-bold text-amber-950">
                      {currentExercise.promptOldFrench}
                    </span>
                    {currentExercise.ipa && (
                      <span className="block text-xs text-amber-800/80 font-mono mt-0.5">
                        {currentExercise.ipa}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      if (currentExercise.promptOldFrench) {
                        sound.speakOldFrench(currentExercise.promptOldFrench);
                      }
                    }}
                    className="p-2 rounded-xl bg-amber-200/70 hover:bg-amber-300 text-amber-900 transition-colors shadow-xs"
                    title={isZh ? '聆听发音' : 'Listen to pronunciation'}
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Modern French translation if provided */}
              {currentExercise.promptModernFrench && (
                <div className="mt-1.5 text-xs text-stone-500 italic px-1">
                  {isZh ? '现法参考：' : 'Modern French: '}
                  {currentExercise.promptModernFrench}
                </div>
              )}
            </div>

            {/* Exercise Interaction by Type */}

            {/* 1. Multiple Choice & Case Declension & Fill Blank & Conjugation Drill */}
            {(currentExercise.type === 'multiple_choice' ||
              currentExercise.type === 'case_declension' ||
              currentExercise.type === 'conjugation_drill' ||
              currentExercise.type === 'fill_blank' ||
              currentExercise.type === 'etymology_match') &&
              currentExercise.options && (
                <div className="space-y-2.5 pt-2">
                  {currentExercise.options.map((opt) => {
                    const isSelected = selectedOption === opt.id;
                    return (
                      <button
                        key={opt.id}
                        disabled={status !== 'idle'}
                        onClick={() => {
                          sound.playClick();
                          setSelectedOption(opt.id);
                        }}
                        className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'border-amber-600 bg-amber-50 text-amber-950 font-semibold shadow-xs ring-2 ring-amber-500/20'
                            : 'border-stone-200 hover:border-amber-300 bg-white text-stone-800'
                        } ${status !== 'idle' ? 'cursor-default' : 'active:scale-99'}`}
                      >
                        <div className="flex-1">
                          <div className="text-sm font-medium">{opt.text}</div>
                          {opt.translation && (
                            <div className="text-xs text-stone-500 mt-0.5">
                              {opt.translation}
                            </div>
                          )}
                        </div>

                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'border-amber-600 bg-amber-600 text-white'
                              : 'border-stone-300'
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

            {/* 2. Word Bank (Sentence Construction) */}
            {currentExercise.type === 'word_bank' && (
              <div className="space-y-4 pt-2">
                {/* Construction Zone */}
                <div className="min-h-[70px] p-3 rounded-2xl bg-white border-2 border-dashed border-stone-300 flex flex-wrap gap-2 items-center">
                  {selectedWordBank.length === 0 ? (
                    <span className="text-xs text-stone-400 select-none px-2">
                      {isZh
                        ? '点击下方词块连词成句...'
                        : 'Tap the word tiles below to build the sentence...'}
                    </span>
                  ) : (
                    selectedWordBank.map((word, idx) => (
                      <button
                        key={idx}
                        disabled={status !== 'idle'}
                        onClick={() => handleReturnWord(word, idx)}
                        className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-950 font-semibold text-xs transition-transform active:scale-95 shadow-xs"
                      >
                        {word}
                      </button>
                    ))
                  )}
                </div>

                {/* Available Pool */}
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  {availableWords.map((word, idx) => (
                    <button
                      key={idx}
                      disabled={status !== 'idle'}
                      onClick={() => handlePickWord(word, idx)}
                      className="px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 border-2 border-stone-200 text-stone-800 font-medium text-xs transition-transform active:scale-95 shadow-xs"
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Bottom Action / Feedback Drawer */}
      <footer
        className={`p-4 border-t transition-all ${
          status === 'correct'
            ? 'bg-emerald-50 border-emerald-300'
            : status === 'incorrect'
            ? 'bg-amber-50 border-amber-300'
            : 'bg-white border-stone-200'
        }`}
      >
        <div className="max-w-md mx-auto">
          {/* Status Feedback */}
          {status === 'correct' && (
            <div className="mb-3 space-y-1">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{isZh ? '回答正确！Bons clers !' : 'Correct! Bons clers!'}</span>
              </div>
              <p className="text-xs text-emerald-900/90 leading-relaxed pl-7">
                {currentExercise.explanation}
              </p>
              {currentExercise.latinOrigin && (
                <p className="text-[11px] text-emerald-700/80 pl-7 font-mono">
                  {currentExercise.latinOrigin}
                </p>
              )}
            </div>
          )}

          {status === 'incorrect' && (
            <div className="mb-3 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>{isZh ? '语法提示与原理解析' : 'Grammar Hint & Philological Note'}</span>
              </div>
              <p className="text-xs text-amber-950 leading-relaxed pl-7 bg-amber-100/60 p-2.5 rounded-xl border border-amber-200">
                {currentExercise.explanation}
              </p>
              {currentExercise.latinOrigin && (
                <p className="text-[11px] text-amber-800 pl-7 font-mono">
                  {currentExercise.latinOrigin}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            {status === 'idle' ? (
              <button
                disabled={
                  (currentExercise.type === 'word_bank' && selectedWordBank.length === 0) ||
                  (currentExercise.type !== 'word_bank' && !selectedOption)
                }
                onClick={handleCheck}
                className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 disabled:bg-stone-200 disabled:text-stone-400 text-white font-bold text-sm shadow-md active:scale-98 transition-all"
              >
                {isZh ? '检查答案' : 'Check Answer'}
              </button>
            ) : status === 'incorrect' ? (
              <div className="flex gap-2 w-full">
                <button
                  onClick={handleRetryCurrent}
                  className="flex-1 py-3 rounded-2xl bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold text-sm flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <RotateCcw className="w-4 h-4" />
                  {isZh ? '重新作答' : 'Try Again'}
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 py-3 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  {isZh ? '继续研习' : 'Continue'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleNext}
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                {isZh ? '继续下一题' : 'Next Question'}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </footer>

      {/* Exit confirmation modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-5 max-w-xs w-full text-center shadow-xl">
            <h3 className="text-base font-bold text-stone-900 mb-1">
              {isZh ? '确定退出本节研习？' : 'Leave this lesson?'}
            </h3>
            <p className="text-xs text-stone-600 mb-4">
              {isZh
                ? '当前小节进度将不会保存，但你随时可以重新开启。'
                : 'Current exercise progress will not be saved, but you can restart anytime.'}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs"
              >
                {isZh ? '继续学习' : 'Keep Learning'}
              </button>
              <button
                onClick={() => {
                  setShowExitConfirm(false);
                  onClose();
                }}
                className="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs"
              >
                {isZh ? '确定退出' : 'Quit Lesson'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
