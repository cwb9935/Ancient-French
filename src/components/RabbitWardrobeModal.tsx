/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { getLocalizedRabbitSkins } from '../utils/i18nAuthorsAndRabbits';
import { UserProgress } from '../types';
import { sound } from '../utils/audio';
import { X, Check, Lock, Sparkles, Volume2 } from 'lucide-react';

interface RabbitWardrobeModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onEquipSkin: (skinId: string) => void;
}

export const RabbitWardrobeModal: React.FC<RabbitWardrobeModalProps> = ({
  isOpen,
  onClose,
  progress,
  onEquipSkin,
}) => {
  if (!isOpen) return null;

  const lang = progress.language || 'en';
  const isZh = lang === 'zh';
  const skins = getLocalizedRabbitSkins(lang);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-stone-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-stone-900 border border-amber-600/60 rounded-3xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 border-b border-amber-800/60 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Vestiaire des Lapins Enlumineurs
            </div>
            <h2 className="text-base font-bold text-amber-50 font-serif flex items-center gap-1.5">
              {isZh ? '🐰 为伴读兔收集更多衣服吧！' : '🐰 Companion Rabbit Wardrobe'}
              <Sparkles className="w-4 h-4 text-amber-400" />
            </h2>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto space-y-4">
          <p className="text-xs text-amber-200/80 leading-relaxed bg-amber-950/40 p-2.5 rounded-xl border border-amber-800/40">
            {isZh
              ? '中世纪手抄本边缘（Marginalia）活跃着一群博学而滑稽的兔子。完成每日任务随机掉落服装碎片，集齐 5 枚碎片即可解锁兔兔的新衣！'
              : 'Playful and scholarly rabbits frolic along the margins of medieval illuminated manuscripts (Marginalia). Complete daily quests and lessons to collect 5 shards and unlock each outfit!'}
          </p>

          <div className="space-y-3">
            {skins.map(skin => {
              const shards = progress.rabbitShards[skin.id] || 0;
              const isUnlocked = shards >= skin.shardsRequired || progress.unlockedSkins.includes(skin.id);
              const isEquipped = progress.activeRabbitSkinId === skin.id;

              return (
                <div
                  key={skin.id}
                  className={`p-3 rounded-2xl border transition-all ${
                    isEquipped
                      ? 'bg-amber-950/60 border-amber-500 shadow-md ring-1 ring-amber-400/50'
                      : isUnlocked
                      ? 'bg-stone-800/80 border-stone-700 hover:border-amber-700/60'
                      : 'bg-stone-900/90 border-stone-800 opacity-80'
                  }`}
                >
                  <div className="flex gap-3">
                    {/* Skin Avatar */}
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400/60 shrink-0 bg-stone-950">
                      <img
                        src={skin.image}
                        alt={skin.name}
                        className={`w-full h-full object-cover ${
                          isUnlocked ? '' : 'filter grayscale contrast-125 opacity-60'
                        }`}
                      />
                      {!isUnlocked && (
                        <div className="absolute inset-0 bg-stone-950/60 flex items-center justify-center">
                          <Lock className="w-5 h-5 text-amber-300" />
                        </div>
                      )}
                      {isEquipped && (
                        <div className="absolute bottom-0 inset-x-0 bg-amber-600 text-white text-[9px] font-bold text-center py-0.5">
                          {isZh ? '伴读中' : 'Active'}
                        </div>
                      )}
                    </div>

                    {/* Skin Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <h3 className="text-sm font-bold text-amber-50 font-serif truncate">
                            {skin.name}
                          </h3>
                          <div className="text-[10px] text-amber-400 font-medium truncate">
                            {skin.title}
                          </div>
                        </div>

                        {/* Equip or Shard count */}
                        {isUnlocked ? (
                          <button
                            onClick={() => {
                              sound.playSuccess();
                              onEquipSkin(skin.id);
                            }}
                            disabled={isEquipped}
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                              isEquipped
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-default'
                                : 'bg-amber-600 hover:bg-amber-500 text-stone-950 active:scale-95 shadow-sm'
                            }`}
                          >
                            {isEquipped ? (
                              <span className="flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> {isZh ? '已启用' : 'Equipped'}
                              </span>
                            ) : isZh ? (
                              '更换伴读'
                            ) : (
                              'Equip'
                            )}
                          </button>
                        ) : (
                          <div className="text-right">
                            <span className="text-xs font-bold text-amber-400 tabular-nums">
                              {shards} / 5
                            </span>
                            <div className="text-[9px] text-stone-400">
                              {isZh ? '碎片' : 'Shards'}
                            </div>
                          </div>
                        )}
                      </div>

                      <p className="text-[11px] text-stone-300 mt-1 line-clamp-2 leading-relaxed">
                        {skin.description}
                      </p>

                      {/* Shard Bar for locked skins */}
                      {!isUnlocked && (
                        <div className="mt-2">
                          <div className="h-1.5 w-full bg-stone-950 rounded-full overflow-hidden border border-stone-800">
                            <div
                              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all"
                              style={{ width: `${Math.min(100, (shards / 5) * 100)}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Quote */}
                      {isUnlocked && (
                        <div className="mt-2 pt-2 border-t border-stone-800/80 flex items-center justify-between text-[10px] text-amber-200/90 italic">
                          <span className="truncate pr-1">{skin.quoteOldFrench}</span>
                          <button
                            onClick={() => sound.speakOldFrench(skin.quoteOldFrench)}
                            className="text-stone-400 hover:text-amber-400 p-0.5"
                            title={isZh ? '朗读' : 'Listen'}
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-stone-950 border-t border-stone-800 text-center">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-amber-50 font-bold text-xs transition-colors shadow-sm"
          >
            {isZh ? '返回学堂' : 'Return to Academy'}
          </button>
        </div>
      </div>
    </div>
  );
};
