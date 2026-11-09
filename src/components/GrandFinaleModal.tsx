/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Crown, Music, BookOpen, Sparkles, Volume2, X } from 'lucide-react';
import { Language } from '../types';
import { getLocalizedRabbitSkins } from '../utils/i18nAuthorsAndRabbits';
import { sound } from '../utils/audio';

interface GrandFinaleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToLibrary: () => void;
  lang?: Language;
}

const RABBIT_CHORUS_LYRICS = [
  {
    of: '« Or chantons et balons ! Li francs chevaliers a tout apris ! »',
    zh: '♪ 让我们欢唱起舞！尊贵的骑士已通晓全部古法语奥秘！ ♫',
    en: '♪ Let us sing and dance! The noble knight has mastered all Old French! ♫',
  },
  {
    of: '« De Roland jusqu’a Chrestien, li livres vos est overz ! »',
    zh: '♬ 从《罗兰之歌》到克雷蒂安，中世纪经典之门已向你敞开！ ♪',
    en: '♬ From the Song of Roland to Chrétien, the medieval codex is open to you! ♪',
  },
  {
    of: '« Vive li Grand Chancelier ! Joie et honor en la cort ! »',
    zh: '♪ 皇家掌书官万岁！宫廷之中满溢欢欣与荣耀！ ♬',
    en: '♪ Long live the Grand Chancellor! Joy and honor in the royal court! ♬',
  },
];

const MUSICAL_NOTES = ['♪', '♫', '♬', '♩', '♪', '♫', '♬', '♩', '♪', '♫'];

export const GrandFinaleModal: React.FC<GrandFinaleModalProps> = ({
  isOpen,
  onClose,
  onGoToLibrary,
  lang = 'en',
}) => {
  const isZh = lang === 'zh';
  const [lyricIndex, setLyricIndex] = useState(0);
  const [dancePulse, setDancePulse] = useState(0);
  const rabbits = getLocalizedRabbitSkins(lang);

  const fireRoyalConfetti = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#f59e0b', '#fbbf24', '#10b981', '#e11d48', '#6366f1', '#fef08a'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0.1, y: 0.65 },
          colors: ['#f59e0b', '#fbbf24', '#e11d48'],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 0.9, y: 0.65 },
          colors: ['#10b981', '#6366f1', '#fbbf24'],
        });
      }, 320);
    } catch {
      // Ignore confetti errors
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    sound.playGrandFinaleCarole();
    fireRoyalConfetti();

    const interval = setInterval(() => {
      setLyricIndex((prev) => (prev + 1) % RABBIT_CHORUS_LYRICS.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentLyric = RABBIT_CHORUS_LYRICS[lyricIndex];

  const handleEncoreSingAndDance = () => {
    setDancePulse((p) => p + 1);
    setLyricIndex((prev) => (prev + 1) % RABBIT_CHORUS_LYRICS.length);
    sound.playGrandFinaleCarole();
    sound.speakOldFrench('Or chantons et balons! Vous avez tout apris!');
    fireRoyalConfetti();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative w-full max-w-md bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 text-amber-50 rounded-3xl border-2 border-amber-400/90 shadow-2xl overflow-hidden my-auto"
      >
        {/* Top Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-stone-900/70 hover:bg-stone-800 text-amber-200 border border-amber-500/30 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Illuminated Royal Header */}
        <div className="relative pt-6 pb-4 px-5 text-center bg-gradient-to-b from-amber-500/25 via-amber-500/10 to-transparent border-b border-amber-500/30">
          <motion.div
            animate={{ rotate: [-6, 6, -6], scale: [1, 1.08, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-stone-950 shadow-lg border-2 border-amber-100 mb-2.5"
          >
            <Crown className="w-8 h-8 fill-stone-950" />
          </motion.div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>18 / 18 Units Completed · Couronnement</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="mt-1.5 text-lg sm:text-xl font-extrabold font-serif text-amber-200 leading-snug">
            恭喜你学完了所有课程！
            <span className="block text-base sm:text-lg text-white mt-0.5">
              现在开始自由地阅读古法语文学吧！
            </span>
          </h2>

          {!isZh && (
            <p className="mt-1.5 text-xs text-amber-200/90 font-medium leading-relaxed">
              Congratulations on completing all lessons! Now go forth and freely read Old French literature!
            </p>
          )}
        </div>

        {/* All 10 Dressed-Up Companion Rabbits Singing & Dancing Stage */}
        <div className="px-4 py-4 relative">
          {/* Floating Musical Notes Banner */}
          <div className="flex items-center justify-between px-3 py-2 mb-3 rounded-2xl bg-amber-900/40 border border-amber-500/40">
            <div className="flex items-center gap-2 min-w-0">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="p-1.5 rounded-xl bg-amber-400 text-stone-950 shrink-0"
              >
                <Music className="w-4 h-4" />
              </motion.div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-amber-200 italic truncate">
                  {currentLyric.of}
                </p>
                <p className="text-[10px] text-amber-100/90 truncate">
                  {isZh ? currentLyric.zh : currentLyric.en}
                </p>
              </div>
            </div>

            <button
              onClick={handleEncoreSingAndDance}
              className="px-2.5 py-1 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/50 text-amber-200 text-[10px] font-bold flex items-center gap-1 shrink-0 active:scale-95 transition-all"
            >
              <Volume2 className="w-3 h-3" />
              <span>{isZh ? '欢唱' : 'Sing'}</span>
            </button>
          </div>

          {/* 10 Rabbits Chorus Grid (5x2 Stage) */}
          <div className="grid grid-cols-5 gap-2 p-2.5 rounded-3xl bg-gradient-to-b from-stone-900/90 via-amber-950/50 to-stone-900/90 border border-amber-500/30 shadow-inner">
            {rabbits.map((skin, idx) => {
              const isEven = idx % 2 === 0;
              const noteSymbol = MUSICAL_NOTES[idx % MUSICAL_NOTES.length];
              return (
                <motion.div
                  key={`${skin.id}-${dancePulse}`}
                  animate={{
                    y: isEven ? [0, -9, 0, -5, 0] : [-7, 0, -10, 0, -7],
                    rotate: isEven ? [-5, 6, -5] : [6, -6, 6],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 1.1 + (idx % 3) * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  onClick={handleEncoreSingAndDance}
                  className="cursor-pointer group relative flex flex-col items-center"
                >
                  {/* Floating singing musical note */}
                  <motion.span
                    animate={{
                      y: [-2, -12, -2],
                      opacity: [0.5, 1, 0.5],
                      x: isEven ? [-2, 3, -2] : [3, -2, 3],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: idx * 0.12,
                    }}
                    className="text-[11px] font-bold text-amber-300 drop-shadow-xs mb-0.5 select-none"
                  >
                    {noteSymbol}
                  </motion.span>

                  <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md bg-stone-800 group-hover:border-amber-200 transition-colors">
                    <img
                      src={skin.image}
                      alt={skin.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="mt-1 text-[9px] font-bold text-amber-100/90 text-center truncate w-full px-0.5">
                    {skin.name.split('(')[0].trim()}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-[11px] text-amber-300/80 mt-2.5">
            {isZh
              ? '✨ 全部 10 款中世纪装扮伴读兔列队为你奏乐起舞（点击小兔可再次欢唱） ✨'
              : '✨ All 10 medieval companion rabbits are singing and dancing in your honor! ✨'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="px-5 pb-5 pt-1 space-y-2.5">
          <button
            onClick={() => {
              sound.playFanfare();
              onGoToLibrary();
            }}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>
              {isZh
                ? '前往经典文库，自由阅读古法语原典'
                : 'Open Classical Library & Read Old French Literature'}
            </span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleEncoreSingAndDance}
              className="py-2.5 px-3 rounded-2xl bg-amber-900/50 hover:bg-amber-900/70 border border-amber-500/40 text-amber-200 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <Music className="w-3.5 h-3.5" />
              <span>{isZh ? '伴读兔再来一曲' : 'Encore Dance!'}</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="py-2.5 px-3 rounded-2xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700 text-stone-300 text-xs font-bold active:scale-95 transition-all"
            >
              {isZh ? '继续留在学堂' : 'Continue Studying'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
