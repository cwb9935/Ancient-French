/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Flame, Zap, Volume2, VolumeX, Calendar, Sparkles, Globe } from 'lucide-react';
import { UserProgress } from '../types';
import { getLocalizedRabbitSkins } from '../utils/i18nAuthorsAndRabbits';
import { sound } from '../utils/audio';

interface HeaderStatsProps {
  progress: UserProgress;
  onOpenCheckin: () => void;
  onOpenWardrobe: () => void;
  onOpenGallery: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onToggleLanguage: () => void;
}

export const HeaderStats: React.FC<HeaderStatsProps> = ({
  progress,
  onOpenCheckin,
  onOpenWardrobe,
  soundEnabled,
  onToggleSound,
  onToggleLanguage,
}) => {
  const lang = progress.language || 'en';
  const isZh = lang === 'zh';
  const skins = getLocalizedRabbitSkins(lang);
  const activeSkin = skins.find(s => s.id === progress.activeRabbitSkinId) || skins[0];

  return (
    <header className="sticky top-0 z-30 bg-amber-50/95 backdrop-blur-md border-b border-amber-200/80 px-3 py-2 sm:px-4 shadow-xs">
      <div className="max-w-md mx-auto flex items-center justify-between gap-1.5">
        {/* Streak Button */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenCheckin();
          }}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-orange-100/80 hover:bg-orange-100 active:scale-95 transition-all text-amber-800 font-bold text-xs sm:text-sm border border-amber-200/70 shadow-xs"
          title={isZh ? '点击查看每日打卡与连胜记录' : 'Daily Check-in & Streak Calendar'}
        >
          <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-bounce" />
          <span className="tabular-nums">{progress.streak}</span>
          <span className="text-[11px] font-normal text-amber-700/90 hidden xs:inline">
            {isZh ? '天连胜' : 'd'}
          </span>
        </button>

        {/* XP Points */}
        <div 
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200/70 text-indigo-700 font-bold text-xs sm:text-sm"
          title={isZh ? '积累的古法语骑士经验值' : 'Total Old French Chivalric XP'}
        >
          <Zap className="w-3.5 h-3.5 fill-indigo-500 text-indigo-600" />
          <span className="tabular-nums">{progress.xp}</span>
          <span className="text-[11px] font-normal text-indigo-600/80">XP</span>
        </div>

        {/* Active Rabbit Mascot Avatar Button */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenWardrobe();
          }}
          className="relative flex items-center p-0.5 rounded-full ring-2 ring-amber-400/80 hover:ring-amber-500 hover:scale-105 active:scale-95 transition-all shadow-xs"
          title={
            isZh
              ? `当前伴读：${activeSkin.name}（点击换装与查看皮肤碎片）`
              : `Companion: ${activeSkin.name} (Click for Rabbit Wardrobe)`
          }
        >
          <img
            src={activeSkin.image}
            alt={activeSkin.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-0.5 rounded-full shadow-xs">
            <Sparkles className="w-2.5 h-2.5" />
          </span>
        </button>

        {/* Language Switcher + Sound toggle + Check-in quick trigger */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              sound.playClick();
              onToggleLanguage();
            }}
            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-200/70 hover:bg-amber-300/80 text-amber-950 font-bold text-[11px] border border-amber-300/90 active:scale-95 transition-all shadow-2xs"
            title={isZh ? '切换默认语言为英语 (Switch to English)' : 'Switch language to Chinese (切换为中文)'}
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-amber-800" />
            <span>{isZh ? 'EN' : '中文'}</span>
          </button>

          <button
            onClick={onToggleSound}
            className="p-1.5 rounded-lg text-amber-800/70 hover:text-amber-900 hover:bg-amber-100/60 transition-colors"
            title={
              isZh
                ? soundEnabled
                  ? '音效开启'
                  : '音效静音'
                : soundEnabled
                ? 'Sound On'
                : 'Sound Muted'
            }
            aria-label="Toggle sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onOpenCheckin();
            }}
            className="p-1.5 rounded-lg text-amber-700 hover:bg-amber-200/50 transition-colors"
            title={isZh ? '今日打卡火炬' : 'Daily Torch Check-in'}
            aria-label="Daily Check-in"
          >
            <Calendar className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
