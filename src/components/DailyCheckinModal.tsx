/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Flame, 
  Zap, 
  CheckCircle2, 
  Calendar, 
  Sparkles,
  Award
} from 'lucide-react';
import { UserProgress } from '../types';
import { getTodayString } from '../utils/storage';
import { sound } from '../utils/audio';

interface DailyCheckinModalProps {
  progress: UserProgress;
  onClose: () => void;
  onConfirmCheckin: () => void;
}

export const DailyCheckinModal: React.FC<DailyCheckinModalProps> = ({
  progress,
  onClose,
  onConfirmCheckin,
}) => {
  const lang = progress.language || 'en';
  const isZh = lang === 'zh';
  const todayStr = getTodayString();
  const isCheckedInToday = progress.historyCheckins.includes(todayStr);

  const daysOfWeek = isZh
    ? ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date();
  const currentDayIndex = (today.getDay() + 6) % 7; // Monday = 0, Sunday = 6

  const handleDoCheckin = () => {
    sound.playStreak();
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#f59e0b', '#d97706', '#fbbf24', '#10b981'],
      });
    } catch {
      // Fallback
    }
    onConfirmCheckin();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl p-5 max-w-sm w-full shadow-2xl border border-amber-200 relative overflow-hidden">
        {/* Top Flame Glow */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="text-center pt-2">
          <div className="w-16 h-16 rounded-3xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center mx-auto mb-3 shadow-sm text-amber-500">
            <Flame className="w-10 h-10 fill-amber-500 animate-bounce" />
          </div>
          <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
            {isZh
              ? 'Épreuve Quotidienne · 每日骑士晨祷'
              : 'Épreuve Quotidienne · Daily Matins Check-in'}
          </span>
          <h3 className="text-xl font-bold font-serif text-stone-900 mt-0.5">
            {isZh ? `已连续修行 ${progress.streak} 天！` : `${progress.streak}-Day Study Streak!`}
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            {isZh
              ? '每日打卡点燃连胜火炬，必定掉落伴读兔子碎片与骑士声望经验！'
              : 'Ignite the daily torch to keep your streak alive and earn Companion Rabbit shards & XP!'}
          </p>
        </div>

        {/* 7-Day Streak Calendar */}
        <div className="my-5 p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200/80">
          <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-3 px-1">
            <span className="flex items-center gap-1 text-amber-900">
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
              {isZh ? '本周连胜追踪' : 'Weekly Streak Tracker'}
            </span>
            <span className="text-amber-800 text-[11px]">
              {isZh ? '保持每日动力' : 'Daily Momentum'}
            </span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {daysOfWeek.map((dayLabel, idx) => {
              const isPastOrToday = idx <= currentDayIndex;
              const isChecked = isPastOrToday && (idx < currentDayIndex || isCheckedInToday);
              const isToday = idx === currentDayIndex;

              return (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[10px] text-stone-400 font-semibold mb-1">
                    {dayLabel}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isChecked
                        ? 'bg-amber-500 text-white shadow-xs'
                        : isToday
                        ? 'bg-white border-2 border-amber-500 text-amber-600 animate-pulse'
                        : 'bg-stone-200/60 text-stone-400'
                    }`}
                  >
                    {isChecked ? (
                      <Flame className="w-4 h-4 fill-white" />
                    ) : isToday ? (
                      <span className="text-[10px] font-bold">{isZh ? '今' : 'Now'}</span>
                    ) : (
                      <span className="text-xs font-bold">·</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reward preview */}
        <div className="mb-5 p-3 rounded-2xl bg-amber-100/60 border border-amber-300/80 flex items-center justify-around text-center">
          <div className="flex items-center gap-1.5 text-indigo-700 font-bold text-xs">
            <Zap className="w-4 h-4 fill-indigo-500" />
            {isZh ? '+15 经验 (XP)' : '+15 Knight XP'}
          </div>
          <div className="h-4 w-px bg-amber-300" />
          <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs">
            <Sparkles className="w-4 h-4 text-amber-600" />
            {isZh ? '+1 伴读兔碎片' : '+1 Rabbit Shard'}
          </div>
        </div>

        {/* Action Button */}
        {isCheckedInToday ? (
          <div className="text-center py-2.5 px-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {isZh ? '今日圣火已点燃，连胜已记录！' : 'Today’s torch is lit & streak recorded!'}
          </div>
        ) : (
          <button
            onClick={handleDoCheckin}
            className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <Flame className="w-4 h-4 fill-amber-300" />
            {isZh ? '点燃今日火炬并领取碎片' : 'Ignite Today’s Torch & Claim Shard'}
          </button>
        )}
      </div>
    </div>
  );
};
