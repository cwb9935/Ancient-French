/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Feather,
  Sparkles,
  BookOpen,
  Volume2,
  Lock,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { UserProgress } from '../types';
import { getLocalizedAuthors } from '../utils/i18nAuthorsAndRabbits';
import { sound } from '../utils/audio';

interface LibraryGalleryViewProps {
  progress: UserProgress;
  onRecordManuscriptRead?: () => void;
}

const FLOAT_ANIM_CLASSES = [
  'animate-shard-float-1',
  'animate-shard-float-2',
  'animate-shard-float-3',
  'animate-shard-float-4',
  'animate-shard-float-5',
];

const CONVERGE_ANIM_CLASSES = [
  'animate-shard-converge-1',
  'animate-shard-converge-2',
  'animate-shard-converge-3',
  'animate-shard-converge-4',
  'animate-shard-converge-5',
];

const PROGRESS_WIDTH_CLASSES: Record<number, string> = {
  0: 'w-0',
  1: 'w-1/5',
  2: 'w-2/5',
  3: 'w-3/5',
  4: 'w-4/5',
  5: 'w-full',
};

const PUZZLE_INDICES = [0, 1, 2, 3, 4];

export const LibraryGalleryView: React.FC<LibraryGalleryViewProps> = ({
  progress,
}) => {
  const lang = progress.language || 'en';
  const isZh = lang === 'zh';
  const authors = getLocalizedAuthors(lang);

  const [selectedAuthorId, setSelectedAuthorId] = useState<string>(authors[0].id);
  const [authorCenturyFilter, setAuthorCenturyFilter] = useState<'all' | '11-12' | '13' | '14' | '15'>('all');
  const [authorSearch, setAuthorSearch] = useState('');
  const [isRedrawing, setIsRedrawing] = useState<boolean>(false);

  const selectedAuthor = authors.find((a) => a.id === selectedAuthorId) || authors[0];

  const authorShards = Math.min(5, progress.authorShards[selectedAuthor.id] || 0);
  const isAuthorUnlocked =
    authorShards >= selectedAuthor.shardsRequired ||
    progress.unlockedAuthors.includes(selectedAuthor.id);

  // Trigger the elegant 5-shard assembly & "Redraw" transition when viewing an unlocked author
  useEffect(() => {
    if (isAuthorUnlocked) {
      setIsRedrawing(true);
      const timer = setTimeout(() => {
        setIsRedrawing(false);
      }, 2150);
      return () => clearTimeout(timer);
    } else {
      setIsRedrawing(false);
    }
  }, [selectedAuthor.id, isAuthorUnlocked]);

  const filteredAuthors = authors.filter((a) => {
    if (authorCenturyFilter === '11-12' && !a.century.includes('11') && !a.century.includes('12')) return false;
    if (authorCenturyFilter === '13' && !a.century.includes('13')) return false;
    if (authorCenturyFilter === '14' && !a.century.includes('14')) return false;
    if (authorCenturyFilter === '15' && !a.century.includes('15')) return false;
    if (authorSearch.trim()) {
      const q = authorSearch.trim().toLowerCase();
      return (
        a.name.toLowerCase().includes(q) ||
        a.nameOldFrench.toLowerCase().includes(q) ||
        a.majorWork.toLowerCase().includes(q) ||
        a.workExcerpt.toLowerCase().includes(q) ||
        a.workExcerptChinese.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const effectiveShards = isAuthorUnlocked ? 5 : authorShards;
  const progressWidthClass = PROGRESS_WIDTH_CLASSES[effectiveShards] || 'w-0';

  return (
    <div className="pb-24 pt-2 px-3 sm:px-4 max-w-md mx-auto">
      {/* Top Banner */}
      <div className="mb-3.5 bg-gradient-to-br from-amber-900 via-stone-900 to-amber-950 text-amber-100 p-4 rounded-3xl border border-amber-700/50 shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-1.5 border border-amber-500/30">
            <Feather className="w-3.5 h-3.5" />
            <span>Bibliothèque & Galerie Médiévale</span>
          </div>
          <h1 className="text-xl font-bold font-serif text-amber-50 flex items-center gap-2">
            {isZh ? '作家画廊' : 'Medieval Authors Gallery'}
            <Sparkles className="w-4 h-4 text-amber-400" />
          </h1>
        </div>
      </div>

      {/* AUTHOR GALLERY */}
      <div className="space-y-3.5">
        {/* Search & Century Filter for 30 Authors */}
        <div className="space-y-2">
          <input
            type="text"
            value={authorSearch}
            onChange={(e) => setAuthorSearch(e.target.value)}
            placeholder={
              isZh
                ? '搜索中世纪作家、代表作或名句...'
                : 'Search medieval authors, masterworks, or famous quotes...'
            }
            className="w-full px-3.5 py-2 rounded-2xl bg-white border border-stone-200 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 shadow-2xs"
          />
          <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
            {[
              { id: 'all', label: isZh ? `全部作家 (${authors.length})` : `All Authors (${authors.length})` },
              { id: '11-12', label: isZh ? '11–12 世纪' : '11th–12th C.' },
              { id: '13', label: isZh ? '13 世纪' : '13th C.' },
              { id: '14', label: isZh ? '14 世纪' : '14th C.' },
              { id: '15', label: isZh ? '15 世纪' : '15th C.' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playClick();
                  setAuthorCenturyFilter(tab.id as typeof authorCenturyFilter);
                }}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all border ${
                  authorCenturyFilter === tab.id
                    ? 'bg-stone-800 text-amber-300 border-stone-900'
                    : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Author Selector Ribbon */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filteredAuthors.map((author) => {
            const count = progress.authorShards[author.id] || 0;
            const unlocked =
              count >= author.shardsRequired || progress.unlockedAuthors.includes(author.id);
            const isSelected = author.id === selectedAuthorId;

            return (
              <button
                key={author.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedAuthorId(author.id);
                }}
                className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-2xl border transition-all text-left ${
                  isSelected
                    ? 'bg-amber-100 border-amber-600 shadow-sm ring-2 ring-amber-500/30'
                    : 'bg-white/80 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-300 flex-shrink-0 bg-stone-200">
                  <img
                    src={author.image}
                    alt={author.name}
                    className={`w-full h-full object-cover transition-all ${
                      unlocked ? '' : 'filter grayscale contrast-125 opacity-70'
                    }`}
                  />
                  {!unlocked && (
                    <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center">
                      <Lock className="w-3.5 h-3.5 text-white/90" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 pr-1">
                  <div className="text-xs font-bold text-stone-900 truncate max-w-[110px]">
                    {author.name}
                  </div>
                  <div className="text-[10px] font-medium text-stone-500 flex items-center gap-1">
                    {unlocked ? (
                      <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" /> {isZh ? '已集齐' : 'Unlocked'}
                      </span>
                    ) : (
                      <span className="text-amber-700 font-bold">
                        {count}/5 {isZh ? '碎片' : 'Shards'}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Author Showcase Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          {/* Illuminated Portrait Container with Floating Shards & Redraw Transition */}
          <div className="relative bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 p-4 text-center">
            <div
              key={selectedAuthor.id}
              className={`relative inline-block mx-auto rounded-2xl overflow-hidden border-2 transition-colors duration-700 max-w-[260px] w-full ${
                isAuthorUnlocked
                  ? 'border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)]'
                  : 'border-amber-500/60 shadow-lg'
              }`}
            >
              {/* Aura burst during 5-shard redraw */}
              {isAuthorUnlocked && isRedrawing && (
                <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl ring-4 ring-amber-300/80 animate-redraw-aura" />
              )}

              {/* Portrait Image with Redraw Transition (Parchment Sketch -> Full Illumination) */}
              <img
                src={selectedAuthor.image}
                alt={selectedAuthor.name}
                className={`w-full aspect-square object-cover ${
                  isAuthorUnlocked
                    ? 'animate-portrait-redraw'
                    : 'filter sepia-[0.35] brightness-75 contrast-110'
                }`}
              />

              {/* If unlocked & currently in the "Redraw" transition: show 5 shards converging + golden quill illumination sweep */}
              {isAuthorUnlocked && isRedrawing && (
                <>
                  {/* 5 Shards Converging into the Unified Portrait */}
                  <div className="absolute inset-0 z-20 grid grid-cols-3 grid-rows-2 gap-1.5 p-2 pointer-events-none">
                    {PUZZLE_INDICES.map((index) => (
                      <div
                        key={index}
                        className={`rounded-xl border-2 border-amber-300 bg-gradient-to-br from-amber-400/45 to-amber-600/30 backdrop-blur-[1px] flex items-center justify-center shadow-lg ${
                          CONVERGE_ANIM_CLASSES[index]
                        } ${index === 4 ? 'col-span-2' : ''}`}
                      >
                        <Sparkles className="w-4 h-4 text-amber-200" />
                      </div>
                    ))}
                  </div>

                  {/* Golden Quill Illumination Sweep Line */}
                  <div className="absolute left-0 right-0 z-30 h-8 -translate-y-1/2 pointer-events-none animate-quill-sweep flex items-center justify-center">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent shadow-[0_0_18px_4px_rgba(251,191,36,0.95)]" />
                  </div>
                </>
              )}

              {/* If NOT unlocked: 5-piece Jigsaw Overlay with Dynamic Floating Collected Shards */}
              {!isAuthorUnlocked && (
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-2.5 bg-stone-950/45">
                  {PUZZLE_INDICES.map((index) => {
                    const pieceCollected = index < authorShards;
                    const floatClass = FLOAT_ANIM_CLASSES[index] || 'animate-shard-float-1';

                    return (
                      <div
                        key={index}
                        className={`relative rounded-xl border flex flex-col items-center justify-center transition-all ${
                          pieceCollected
                            ? `${floatClass} shard-gilded-shimmer border-amber-300/90 bg-gradient-to-br from-amber-500/25 via-amber-400/10 to-transparent backdrop-blur-[0.5px]`
                            : 'border-stone-700/90 bg-stone-950/90 text-stone-400'
                        } ${index === 4 ? 'col-span-2' : ''}`}
                      >
                        {pieceCollected ? (
                          <div className="flex flex-col items-center">
                            <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
                            <span className="text-[9px] font-bold text-amber-100 mt-0.5 drop-shadow">
                              {isZh ? '已拼合' : 'Joined'}
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center">
                            <Lock className="w-3.5 h-3.5 text-stone-500 mb-0.5" />
                            <span className="text-[9px] text-stone-400 font-medium">
                              {isZh ? `碎片 #${index + 1}` : `Shard #${index + 1}`}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Unlocked Badge Overlay */}
              {isAuthorUnlocked && (
                <div className="absolute top-2 right-2 z-10 bg-amber-500 text-stone-950 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md border border-amber-300">
                  <Award className="w-3 h-3" />
                  {isZh ? '完整拼图' : 'Complete Portrait'}
                </div>
              )}
            </div>

            {/* Shard Progress Bar */}
            <div className="mt-3 max-w-[260px] mx-auto">
              <div className="flex items-center justify-between text-xs mb-1 px-1">
                <span className="text-amber-200/90 font-medium">
                  {isZh ? '画像拼图收集进度' : 'Portrait Shard Progress'}
                </span>
                <span className="text-amber-400 font-bold tabular-nums">
                  {effectiveShards} / 5 {isZh ? '碎片' : 'Shards'}
                </span>
              </div>
              <div className="h-2.5 w-full bg-stone-800 rounded-full overflow-hidden p-0.5 border border-stone-700">
                <div
                  className={`h-full bg-gradient-to-r from-amber-500 via-amber-300 to-yellow-200 rounded-full transition-all duration-700 ${progressWidthClass}`}
                />
              </div>

              {!isAuthorUnlocked && (
                <p className="text-[11px] text-amber-200/70 mt-1.5">
                  {isZh
                    ? '完成今日研习任务即可随机掉落下一枚画像碎片！'
                    : 'Complete daily lessons and quests to earn random portrait shards!'}
                </p>
              )}
            </div>
          </div>

          {/* Content, Classic Excerpt & Biography */}
          <div className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-2 border-b border-stone-100 pb-3 mb-3">
              <div>
                <h2 className="text-lg font-bold text-stone-900 font-serif">
                  {selectedAuthor.name}
                </h2>
                <div className="text-xs font-semibold text-amber-800 italic">
                  {selectedAuthor.nameOldFrench}
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                  {selectedAuthor.century}
                </span>
                <div className="text-[10px] text-stone-500 mt-0.5">
                  {selectedAuthor.era}
                </div>
              </div>
            </div>

            {/* Representative Work */}
            <div className="mb-3.5 bg-amber-50/70 rounded-2xl p-3 border border-amber-200/70">
              <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1 mb-0.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                {isZh ? '代表作' : 'Representative Work'}
              </div>
              <p className="text-xs font-medium text-amber-950 leading-relaxed">
                {selectedAuthor.majorWork}
              </p>
            </div>

            {/* Famous Quote in Old French / Middle French / Occitan */}
            <div className="mb-4 bg-stone-50 rounded-2xl p-3.5 border border-stone-200/90 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-900 flex items-center gap-1">
                  📜 {isZh ? '经典选段' : 'Classic Excerpt'}
                </span>
                <button
                  onClick={() => sound.speakOldFrench(selectedAuthor.workExcerpt)}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 text-[10px] font-bold transition-colors"
                  title={isZh ? '朗读原典选段' : 'Listen to original excerpt'}
                >
                  <Volume2 className="w-3 h-3" /> {isZh ? '朗读' : 'Listen'}
                </button>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60">
                <span className="text-[10px] font-bold text-amber-800 block mb-0.5">
                  {isZh ? '古法语 / 原文：' : 'Old French / Original:'}
                </span>
                <p className="text-xs font-serif font-semibold text-stone-900 italic leading-relaxed">
                  {selectedAuthor.workExcerpt}
                </p>
              </div>
              <div className="text-[11px] text-stone-700 leading-relaxed">
                <span className="font-bold text-stone-800">
                  {isZh ? '现代法语：' : 'Modern French: '}
                </span>
                <span className="italic">{selectedAuthor.workExcerptModern}</span>
              </div>
              <div className="text-[11px] text-stone-800 leading-relaxed">
                <span className="font-bold text-amber-900">
                  {isZh ? '中文释义：' : 'English Translation: '}
                </span>
                {selectedAuthor.workExcerptChinese}
              </div>
            </div>

            {/* Locked Teaser or Full Biography */}
            {isAuthorUnlocked ? (
              <div className="space-y-4">
                {/* Author Biography */}
                <div>
                  <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Feather className="w-3.5 h-3.5 text-amber-600" />
                    {isZh ? '作家小传 (Biographie)' : 'Author Biography (Biographie)'}
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed text-justify whitespace-pre-line">
                    {selectedAuthor.biography}
                  </p>
                </div>

                {/* Literary Significance */}
                <div className="bg-emerald-50/60 rounded-2xl p-3 border border-emerald-200/70">
                  <h4 className="text-[11px] font-bold text-emerald-900 mb-1 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-emerald-700" />
                    {isZh ? '语言学与文学史地位' : 'Philological & Literary Significance'}
                  </h4>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    {selectedAuthor.literarySignificance}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-4 px-2 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
                <Lock className="w-6 h-6 text-stone-400 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-stone-700 mb-1">
                  {isZh
                    ? `作家小传待解锁（已集 ${authorShards}/5 碎片）`
                    : `Biography Locked (${authorShards}/5 Shards Collected)`}
                </h4>
                <p className="text-[11px] text-stone-500 max-w-xs mx-auto leading-relaxed">
                  {isZh
                    ? '继续完成每日学习任务，集齐更多碎片复原作家画像，即可解锁该作家小传！'
                    : 'Complete daily lessons and quests to collect all 5 portrait shards and unlock the full biography!'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
