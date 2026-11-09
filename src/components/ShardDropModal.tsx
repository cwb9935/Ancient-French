/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ShardDropResult, Language } from '../types';
import { sound } from '../utils/audio';
import { Sparkles, Award, ChevronRight } from 'lucide-react';

interface ShardDropModalProps {
  isOpen: boolean;
  onClose: () => void;
  drops: ShardDropResult[];
  reasonTitle?: string;
  lang?: Language;
}

export const ShardDropModal: React.FC<ShardDropModalProps> = ({
  isOpen,
  onClose,
  drops,
  reasonTitle,
  lang = 'en',
}) => {
  const isZh = lang === 'zh';
  const defaultTitle = isZh ? '研习任务完成！' : 'Study Quest Completed!';

  useEffect(() => {
    if (isOpen && drops.length > 0) {
      sound.playLevelUp();
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d97706', '#f59e0b', '#fbbf24', '#451a03', '#10b981'],
        });
      } catch {
        // ignore
      }
    }
  }, [isOpen, drops]);

  if (!isOpen || drops.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-gradient-to-b from-stone-900 to-amber-950 border-2 border-amber-500/80 rounded-3xl w-full max-w-sm overflow-hidden p-5 shadow-2xl text-center">
        {/* Header Icon */}
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-300">
          <Sparkles className="w-7 h-7 animate-pulse text-amber-300" />
        </div>

        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
          Récompense Enluminée
        </div>
        <h3 className="text-lg font-bold font-serif text-amber-50 mt-0.5">
          {reasonTitle || defaultTitle}
        </h3>
        <p className="text-xs text-amber-200/80 mt-1 mb-4">
          {isZh ? '获得羊皮纸碎片！' : 'Illuminated Parchment Shards Acquired!'}
        </p>

        {/* Drops List */}
        <div className="space-y-3 mb-5">
          {drops.map((drop, idx) => (
            <div
              key={idx}
              className="bg-stone-950/70 border border-amber-500/50 rounded-2xl p-3 text-left flex items-center gap-3 shadow-inner"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-400 shrink-0 bg-stone-900">
                <img
                  src={drop.itemImage}
                  alt={drop.itemName}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 inset-x-0 bg-amber-600/90 text-white text-[8px] font-bold text-center">
                  {isZh ? '+1 碎片' : '+1 Shard'}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-amber-400">
                  {drop.itemCategory}
                </div>
                <div className="text-xs font-bold text-amber-50 truncate">
                  {drop.itemName}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1.5 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${(drop.newShardCount / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-amber-300 tabular-nums">
                    {drop.newShardCount} / 5
                  </span>
                </div>
              </div>

              {drop.isNewlyUnlocked && (
                <div className="shrink-0 flex flex-col items-center justify-center text-amber-300 animate-bounce">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-[9px] font-bold text-amber-300">
                    {isZh ? '已集齐!' : 'Unlocked!'}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          {isZh ? '收集奖励' : 'Collect Rewards'}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
