/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Check, 
  Lock, 
  Star, 
  Crown, 
  Gift, 
  BookMarked, 
  Sparkles, 
  X
} from 'lucide-react';
import { Unit, Lesson, UserProgress } from '../types';
import { sound } from '../utils/audio';
import { MascotMessage } from './MascotMessage';
import { getLocalizedGrammarSections } from '../utils/i18nGrammarAndLexicon';
import { getLocalizedRabbitSkins } from '../utils/i18nAuthorsAndRabbits';

interface LearningPathProps {
  units: Unit[];
  progress: UserProgress;
  onSelectLesson: (lesson: Lesson) => void;
  onClaimMilestoneChest: (unitNumber: number) => void;
  onOpenCheckin: () => void;
}

export const LearningPath: React.FC<LearningPathProps> = ({
  units,
  progress,
  onSelectLesson,
  onClaimMilestoneChest,
}) => {
  const [activeUnitGuide, setActiveUnitGuide] = useState<Unit | null>(null);
  const lang = progress.language || 'en';
  const isZh = lang === 'zh';

  const skins = getLocalizedRabbitSkins(lang);
  const activeRabbitSkin =
    skins.find((s) => s.id === progress.activeRabbitSkinId) || skins[0];
  const grammarSections = getLocalizedGrammarSections(lang);

  // Compute offset for curved meandering path
  const getOffsetClass = (index: number) => {
    const cycle = index % 4;
    if (cycle === 0) return 'translate-x-0';
    if (cycle === 1) return 'translate-x-8 sm:translate-x-12';
    if (cycle === 2) return 'translate-x-0';
    return '-translate-x-8 sm:-translate-x-12';
  };

  return (
    <div className="pb-24 pt-2">
      {/* Hero Welcome with Medieval Rabbit Mascot */}
      <div className="px-4 mb-4">
        <MascotMessage
          skinId={progress.activeRabbitSkinId}
          message={activeRabbitSkin.greetingMessage}
          subMessage={
            isZh
              ? '依据 Laurence Hélix 教材体系设计'
              : 'Designed after Laurence Hélix’s Old French Curriculum'
          }
          lang={lang}
        />
      </div>

      {/* Units Stream */}
      <div className="space-y-10 px-4">
        {units.map((unit) => {
          const isUnitUnlocked = progress.unlockedUnits.includes(unit.id) || unit.unitNumber === 1;

          return (
            <div key={unit.id} className="relative">
              {/* Unit Header Banner */}
              <div
                className={`rounded-2xl p-4 text-white shadow-md relative overflow-hidden mb-6 ${unit.colorScheme.bg}`}
              >
                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                      {isZh
                        ? `第 ${unit.unitNumber} 单元 · ${unit.theme}`
                        : `Unit ${unit.unitNumber} · ${unit.theme}`}
                    </span>
                    <h3 className="text-lg font-extrabold tracking-tight mt-0.5 font-serif">
                      {unit.title}
                    </h3>
                    <p className="text-xs text-white/90 mt-1 max-w-[280px] leading-relaxed">
                      {unit.description}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setActiveUnitGuide(unit);
                    }}
                    className="p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-xs transition-colors shrink-0"
                    title={isZh ? '本单元语法导学手册' : 'Unit Grammar Guidebook'}
                  >
                    <BookMarked className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Subtle background decoration */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 blur-md pointer-events-none" />
              </div>

              {/* Stepping Stone Nodes Path */}
              <div className="flex flex-col items-center gap-6 relative">
                {unit.lessons.map((lesson, idx) => {
                  const isCompleted = progress.completedLessons.includes(lesson.id);
                  const isPreviousCompleted =
                    idx === 0
                      ? isUnitUnlocked
                      : progress.completedLessons.includes(unit.lessons[idx - 1].id);
                  const isUnlocked = isUnitUnlocked && isPreviousCompleted;
                  const isCurrent = isUnlocked && !isCompleted;

                  const offsetClass = getOffsetClass(idx);

                  return (
                    <div
                      key={lesson.id}
                      className={`flex flex-col items-center transition-transform duration-300 ${offsetClass}`}
                    >
                      {/* Node Button with Tactile 3D Duolingo effect */}
                      <div className="relative group">
                        {isCurrent && (
                          <div className="absolute -inset-2 rounded-full bg-amber-400/30 animate-ping pointer-events-none" />
                        )}

                        <button
                          disabled={!isUnlocked}
                          onClick={() => {
                            if (!isUnlocked) return;
                            sound.playClick();
                            onSelectLesson(lesson);
                          }}
                          className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full flex flex-col items-center justify-center transition-all cursor-pointer relative ${
                            isCompleted
                              ? 'bg-amber-400 border-4 border-amber-500 shadow-[0_6px_0_#b45309] active:shadow-[0_2px_0_#b45309] active:translate-y-1 text-amber-950'
                              : isCurrent
                              ? 'bg-emerald-500 border-4 border-emerald-600 shadow-[0_6px_0_#047857] active:shadow-[0_2px_0_#047857] active:translate-y-1 text-white scale-105'
                              : 'bg-stone-200 border-4 border-stone-300 shadow-[0_6px_0_#a8a29e] text-stone-400 cursor-not-allowed'
                          }`}
                        >
                          {isCompleted ? (
                            <>
                              <Check className="w-8 h-8 stroke-[3]" />
                              <div className="flex gap-0.5 -mt-1">
                                <Star className="w-2.5 h-2.5 fill-amber-950 text-amber-950" />
                                <Star className="w-2.5 h-2.5 fill-amber-950 text-amber-950" />
                                <Star className="w-2.5 h-2.5 fill-amber-950 text-amber-950" />
                              </div>
                            </>
                          ) : isCurrent ? (
                            <>
                              <Crown className="w-7 h-7 fill-white/20" />
                              <span className="text-[10px] font-extrabold uppercase mt-0.5 tracking-tight">
                                {isZh ? '开始' : 'START'}
                              </span>
                            </>
                          ) : (
                            <Lock className="w-6 h-6" />
                          )}
                        </button>
                      </div>

                      {/* Lesson title tag */}
                      <div className="text-center mt-2 max-w-[140px]">
                        <p
                          className={`text-xs font-bold leading-tight ${
                            isUnlocked ? 'text-stone-800' : 'text-stone-400'
                          }`}
                        >
                          {lesson.title}
                        </p>
                        <span className="text-[10px] text-stone-500 line-clamp-1">
                          +{lesson.xpReward} {isZh ? '经验' : 'XP'}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Milestone Shard Chest at unit bottom */}
                {(() => {
                  const isAllUnitLessonsCompleted = unit.lessons.every((l) =>
                    progress.completedLessons.includes(l.id)
                  );
                  const isMilestoneClaimed = (progress.claimedMilestones || []).includes(
                    unit.unitNumber
                  );
                  const canClaimMilestone = isAllUnitLessonsCompleted && !isMilestoneClaimed;

                  return (
                    <div className="mt-4 flex flex-col items-center">
                      <button
                        disabled={!canClaimMilestone}
                        onClick={() => {
                          if (!canClaimMilestone) return;
                          sound.playClick();
                          onClaimMilestoneChest(unit.unitNumber);
                        }}
                        className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all group relative ${
                          isMilestoneClaimed
                            ? 'bg-emerald-100 border-emerald-400 text-emerald-700 shadow-[0_3px_0_#10b981] cursor-default'
                            : canClaimMilestone
                            ? 'bg-gradient-to-tr from-amber-600 to-amber-400 border-amber-500 shadow-[0_4px_0_#92400e] hover:brightness-105 active:translate-y-1 active:shadow-[0_1px_0_#92400e] text-white cursor-pointer'
                            : 'bg-stone-200 border-stone-300 shadow-[0_4px_0_#a8a29e] text-stone-400 cursor-not-allowed'
                        }`}
                        title={
                          isZh
                            ? isMilestoneClaimed
                              ? '本单元里程碑奖励已领取（限领1次）'
                              : canClaimMilestone
                              ? '开启羊皮纸珍宝匣（掉落随机碎片）'
                              : '需学完本单元所有课程方可解锁里程碑奖励'
                            : isMilestoneClaimed
                            ? 'Unit Milestone Chest already claimed'
                            : canClaimMilestone
                            ? 'Open Parchment Treasure Chest (Drops random shards!)'
                            : 'Complete all lessons in this unit to unlock the Milestone Chest'
                        }
                      >
                        {isMilestoneClaimed ? (
                          <Check className="w-7 h-7 stroke-[3]" />
                        ) : canClaimMilestone ? (
                          <Gift className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                        ) : (
                          <Lock className="w-6 h-6" />
                        )}
                      </button>
                      <span
                        className={`text-[11px] font-bold mt-1.5 flex items-center gap-1 ${
                          isMilestoneClaimed
                            ? 'text-emerald-700'
                            : canClaimMilestone
                            ? 'text-amber-900'
                            : 'text-stone-400'
                        }`}
                      >
                        <Sparkles
                          className={`w-3 h-3 ${
                            isMilestoneClaimed
                              ? 'text-emerald-600'
                              : canClaimMilestone
                              ? 'text-amber-600'
                              : 'text-stone-400'
                          }`}
                        />
                        {isZh
                          ? isMilestoneClaimed
                            ? `第 ${unit.unitNumber} 单元里程碑（已领取）`
                            : canClaimMilestone
                            ? `第 ${unit.unitNumber} 单元里程碑`
                            : `第 ${unit.unitNumber} 单元里程碑（学完本单元解锁）`
                          : isMilestoneClaimed
                          ? `Unit ${unit.unitNumber} Milestone (Claimed)`
                          : canClaimMilestone
                          ? `Unit ${unit.unitNumber} Milestone`
                          : `Unit ${unit.unitNumber} Milestone (Complete unit to unlock)`}
                      </span>
                    </div>
                  );
                })()}
              </div>
            </div>
          );
        })}
      </div>

      {/* Unit Grammar Guide Modal */}
      {activeUnitGuide && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-5 shadow-2xl max-h-[85vh] overflow-y-auto border border-stone-200">
            <div className="flex items-start justify-between gap-3 border-b border-stone-200 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase">
                  {isZh
                    ? `第 ${activeUnitGuide.unitNumber} 单元语法指南`
                    : `Unit ${activeUnitGuide.unitNumber} Grammar Guide`}
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-0.5 font-serif">
                  {activeUnitGuide.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveUnitGuide(null)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
              <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 leading-relaxed shadow-2xs">
                <span className="font-bold block mb-1 text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  {isZh
                    ? '🏰 单元宏观纲要与原典背景：'
                    : '🏰 Unit Overview & Manuscript Context:'}
                </span>
                {activeUnitGuide.description}
              </div>

              {/* Full Detailed Grammar Guide from Codex */}
              {(() => {
                const fullGuide = grammarSections.find(
                  (s) => s.unitNumber === activeUnitGuide.unitNumber
                );
                if (!fullGuide) return null;
                return (
                  <div className="space-y-3 bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
                    <div className="border-b border-stone-200 pb-2">
                      <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                        {fullGuide.tag}
                      </span>
                      <h4 className="text-sm font-bold text-stone-900 mt-0.5">
                        {fullGuide.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed bg-white p-2.5 rounded-xl border border-stone-200">
                        {fullGuide.summary}
                      </p>
                    </div>

                    {fullGuide.content.map((sec, sIdx) => (
                      <div key={sIdx} className="space-y-1.5 pt-1">
                        <h5 className="text-xs font-bold text-stone-800">
                          {sec.heading}
                        </h5>
                        <div className="space-y-1 text-xs text-stone-600 leading-relaxed">
                          {sec.body.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                        {sec.rules && (
                          <div className="space-y-1 mt-1.5">
                            {sec.rules.map((r, rIdx) => (
                              <div key={rIdx} className="p-2 bg-white rounded-xl border border-stone-200 text-[11px]">
                                <span className="font-bold text-stone-900 font-medieval block">{r.rule}</span>
                                <span className="text-stone-600 block">{r.example}</span>
                                <span className="text-stone-400 text-[10px] block">
                                  {isZh ? '现代法语:' : 'Mod. Fr.:'} {r.modern}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })()}

              {/* Per-Lesson specific focus */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <BookMarked className="w-3.5 h-3.5 text-emerald-600" />
                  {isZh
                    ? '本单元 3 节渐进课程要点'
                    : 'Key Focus of the 3 Progressive Lessons'}
                </h4>
                {activeUnitGuide.lessons.map((les) => (
                  <div key={les.id} className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-stone-900">{les.title}</h5>
                      {les.helixLessonRef && (
                        <span className="text-[10px] text-amber-800 font-semibold bg-amber-100/70 px-1.5 py-0.5 rounded">
                          {les.helixLessonRef}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {les.grammarSummary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-stone-100 flex justify-end">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveUnitGuide(null);
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm"
              >
                {isZh ? '我已领会，继续修行！' : 'Got it, continue learning!'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
