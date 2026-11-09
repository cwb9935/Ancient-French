/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Volume2, 
  Sparkles, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import {
  getLocalizedDeclensions,
  getLocalizedConjugations,
  getLocalizedGrammarSections,
} from '../utils/i18nGrammarAndLexicon';
import { Language } from '../types';
import { sound } from '../utils/audio';

type TenseKey =
  | 'present'
  | 'imparfait'
  | 'passeSimple'
  | 'futur'
  | 'conditionnel'
  | 'subjonctifPresent'
  | 'subjonctifImparfait';

interface GrammarCodexProps {
  lang?: Language;
}

export const GrammarCodex: React.FC<GrammarCodexProps> = ({ lang = 'en' }) => {
  const isZh = lang === 'zh';

  const declensionDatabase = React.useMemo(() => getLocalizedDeclensions(lang), [lang]);
  const conjugationDatabase = React.useMemo(() => getLocalizedConjugations(lang), [lang]);
  const grammarSections = React.useMemo(() => getLocalizedGrammarSections(lang), [lang]);

  const TENSE_LABELS: { key: TenseKey; label: string; subLabel: string }[] = [
    { key: 'present', label: isZh ? '直陈现在' : 'Present Indicative', subLabel: 'Indicatif Présent' },
    { key: 'passeSimple', label: isZh ? '简单过去' : 'Simple Past', subLabel: 'Parfait / Passé Simple' },
    { key: 'imparfait', label: isZh ? '未完成过去' : 'Imperfect', subLabel: 'Imparfait' },
    { key: 'futur', label: isZh ? '简单将来' : 'Simple Future', subLabel: 'Futur Simple' },
    { key: 'conditionnel', label: isZh ? '条件式' : 'Conditional', subLabel: 'Conditionnel' },
    { key: 'subjonctifPresent', label: isZh ? '虚拟现在' : 'Present Subjunctive', subLabel: 'Subjonctif Présent' },
    { key: 'subjonctifImparfait', label: isZh ? '虚拟过去' : 'Imperfect Subjunctive', subLabel: 'Subjonctif Imparfait' },
  ];

  const [activeTab, setActiveTab] = useState<'declension' | 'conjugation' | 'rules'>('declension');

  // Declension state
  const [declensionSearch, setDeclensionSearch] = useState('');
  const [selectedWordLemma, setSelectedWordLemma] = useState<string>(declensionDatabase[0].wordLemma);

  // Conjugation state
  const [conjugationSearch, setConjugationSearch] = useState('');
  const [selectedVerbInf, setSelectedVerbInf] = useState<string>(conjugationDatabase[0].infinitive);
  const [selectedTense, setSelectedTense] = useState<TenseKey>('present');

  // Grammar review state
  const [expandedSection, setExpandedSection] = useState<string>('helix-unit-1');
  const [grammarSearch, setGrammarSearch] = useState('');

  const declensionQuery = declensionSearch.trim().toLowerCase();
  const filteredWords = React.useMemo(() => {
    if (!declensionQuery) return declensionDatabase;
    return declensionDatabase.filter(
      (w) =>
        w.wordLemma.toLowerCase().includes(declensionQuery) ||
        w.singular.cs.toLowerCase().includes(declensionQuery) ||
        w.singular.cr.toLowerCase().includes(declensionQuery) ||
        w.modernFrench.toLowerCase().includes(declensionQuery) ||
        w.meaning.toLowerCase().includes(declensionQuery) ||
        w.type.toLowerCase().includes(declensionQuery)
    );
  }, [declensionQuery, declensionDatabase]);

  const conjugationQuery = conjugationSearch.trim().toLowerCase();
  const filteredVerbs = React.useMemo(() => {
    if (!conjugationQuery) return conjugationDatabase;
    return conjugationDatabase.filter(
      (v) =>
        v.infinitive.toLowerCase().includes(conjugationQuery) ||
        v.tenses.present.p3s.toLowerCase().includes(conjugationQuery) ||
        v.participePasse.toLowerCase().includes(conjugationQuery) ||
        v.modernFrench.toLowerCase().includes(conjugationQuery) ||
        v.meaning.toLowerCase().includes(conjugationQuery) ||
        v.group.toLowerCase().includes(conjugationQuery)
    );
  }, [conjugationQuery, conjugationDatabase]);

  const filteredSections = grammarSections.filter(
    (s) =>
      s.title.toLowerCase().includes(grammarSearch.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(grammarSearch.toLowerCase()) ||
      s.summary.toLowerCase().includes(grammarSearch.toLowerCase()) ||
      s.content.some(
        (c) =>
          c.heading.toLowerCase().includes(grammarSearch.toLowerCase()) ||
          c.body.some((b) => b.toLowerCase().includes(grammarSearch.toLowerCase()))
      )
  );

  const activeWord =
    filteredWords.find((w) => w.wordLemma === selectedWordLemma) ||
    filteredWords[0] ||
    declensionDatabase[0];

  const activeVerb =
    filteredVerbs.find((v) => v.infinitive === selectedVerbInf) ||
    filteredVerbs[0] ||
    conjugationDatabase[0];

  const currentTenseData = activeVerb.tenses[selectedTense];
  const currentTenseMeta = TENSE_LABELS.find((t) => t.key === selectedTense) || TENSE_LABELS[0];

  return (
    <div className="pb-24 pt-2 px-4 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-4">
        <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5" /> Codex Grammaticus
        </span>
        <h2 className="text-xl font-black text-stone-900 font-medieval mt-0.5">
          {isZh ? '语法宝典与变格查询' : 'Grammar Codex & Inflection Lookup'}
        </h2>
      </div>

      {/* 3-Tab Segmented Switcher */}
      <div className="grid grid-cols-3 gap-1 p-1 bg-stone-200/80 rounded-2xl mb-4">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('declension');
          }}
          className={`py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'declension'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          {isZh ? '变格查询' : 'Declensions'}
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('conjugation');
          }}
          className={`py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'conjugation'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          {isZh ? '变位查询' : 'Conjugations'}
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('rules');
          }}
          className={`py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'rules'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          {isZh ? '语法回顾' : 'Grammar Guide'}
        </button>
      </div>

      {/* TAB 1: DECLENSION EXPLORER */}
      {activeTab === 'declension' && (
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={declensionSearch}
              onChange={(e) => setDeclensionSearch(e.target.value)}
              placeholder={
                isZh
                  ? '搜索 5000 词库任意词汇 (例: ber, sire, cheval, grant, espee)...'
                  : 'Search any word in 5,000 lexicon (e.g. ber, sire, cheval, grant, espee)...'
              }
              className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-stone-200 text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-stone-900"
            />
          </div>

          {/* Word Selector Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {filteredWords.slice(0, 80).map((word) => {
              const isSelected = activeWord.wordLemma === word.wordLemma;
              return (
                <button
                  key={word.wordLemma}
                  onClick={() => {
                    sound.playClick();
                    setSelectedWordLemma(word.wordLemma);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {word.wordLemma}
                </button>
              );
            })}
          </div>

          {/* Active Word Inspection Card */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm">
            <div className="flex items-start justify-between border-b border-stone-100 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                  {activeWord.type}
                </span>
                <h3 className="text-xl font-black text-stone-900 font-medieval mt-0.5">
                  {activeWord.wordLemma}
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  {isZh
                    ? `词义：${activeWord.meaning} (现代法语: ${activeWord.modernFrench})`
                    : `Meaning: ${activeWord.meaning} (Modern French: ${activeWord.modernFrench})`}
                </p>
              </div>

              <button
                onClick={() => sound.speakOldFrench(activeWord.wordLemma.split('/')[0].split('(')[0].trim())}
                className="p-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                title={isZh ? '聆听发音' : 'Listen to pronunciation'}
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* 2x2 Declension Matrix Table */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 mb-4 text-center">
              <div className="grid grid-cols-3 bg-stone-100 text-[11px] font-bold text-stone-700 py-2 border-b border-stone-200">
                <span>{isZh ? '语法格位' : 'Case'}</span>
                <span>{isZh ? '单数 (Singulier)' : 'Singular (Singulier)'}</span>
                <span>{isZh ? '复数 (Pluriel)' : 'Plural (Pluriel)'}</span>
              </div>

              {/* Cas Sujet Row */}
              <div className="grid grid-cols-3 items-center py-3 border-b border-stone-100 bg-indigo-50/40">
                <div className="text-xs font-bold text-indigo-900 px-2">
                  <span>Cas Sujet</span>
                  <span className="block text-[10px] text-indigo-600 font-normal">
                    {isZh ? '主格 (主语/表语/呼语)' : 'Subject / Predicate / Vocative'}
                  </span>
                </div>
                <div className="px-2">
                  <span className="text-sm font-extrabold text-stone-900 font-medieval">
                    {activeWord.singular.cs}
                  </span>
                </div>
                <div className="px-2">
                  <span className="text-sm font-extrabold text-stone-900 font-medieval">
                    {activeWord.plural.cs}
                  </span>
                </div>
              </div>

              {/* Cas Régime Row */}
              <div className="grid grid-cols-3 items-center py-3 bg-white">
                <div className="text-xs font-bold text-stone-700 px-2">
                  <span>Cas Régime</span>
                  <span className="block text-[10px] text-stone-500 font-normal">
                    {isZh ? '宾格 (直宾/介宾/绝对宾格)' : 'Direct / Prep. / Absolute Object'}
                  </span>
                </div>
                <div className="px-2">
                  <span className="text-sm font-bold text-stone-800 font-medieval">
                    {activeWord.singular.cr}
                  </span>
                </div>
                <div className="px-2">
                  <span className="text-sm font-bold text-stone-800 font-medieval">
                    {activeWord.plural.cr}
                  </span>
                </div>
              </div>
            </div>

            {/* Morphological Explanation */}
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 leading-relaxed">
              <span className="font-bold block mb-1 flex items-center gap-1 text-amber-800">
                <Sparkles className="w-3.5 h-3.5" />{' '}
                {isZh ? '历史音变与形态学解析：' : 'Historical Phonetics & Morphological Notes:'}
              </span>
              {activeWord.ruleExplanation}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: VERB CONJUGATION EXPLORER */}
      {activeTab === 'conjugation' && (
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={conjugationSearch}
              onChange={(e) => setConjugationSearch(e.target.value)}
              placeholder={
                isZh
                  ? '搜索 5000 词库任意动词或词条 (例: estre, aveir, trover, cuidier)...'
                  : 'Search any verb in 5,000 lexicon (e.g. estre, aveir, trover, cuidier)...'
              }
              className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-stone-200 text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-stone-900"
            />
          </div>

          {/* Verb Selector Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {filteredVerbs.slice(0, 80).map((verb) => {
              const isSelected = activeVerb.infinitive === verb.infinitive;
              return (
                <button
                  key={verb.infinitive}
                  onClick={() => {
                    sound.playClick();
                    setSelectedVerbInf(verb.infinitive);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {verb.infinitive}
                </button>
              );
            })}
          </div>

          {/* Active Verb Inspection Card */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm">
            <div className="flex items-start justify-between border-b border-stone-100 pb-3 mb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                  {activeVerb.group}
                </span>
                <h3 className="text-xl font-black text-stone-900 font-medieval mt-0.5">
                  {activeVerb.infinitive}
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  {isZh
                    ? `词义：${activeVerb.meaning} (现代法语: ${activeVerb.modernFrench})`
                    : `Meaning: ${activeVerb.meaning} (Modern French: ${activeVerb.modernFrench})`}
                </p>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  {isZh ? `拉丁语源：${activeVerb.latinOrigin}` : `Latin Etymology: ${activeVerb.latinOrigin}`}
                </p>
              </div>

              <button
                onClick={() => sound.speakOldFrench(activeVerb.infinitive.split('/')[0].split('(')[0].trim())}
                className="p-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors shrink-0"
                title={isZh ? '聆听发音' : 'Listen to pronunciation'}
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Participles Quick Bar */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                <span className="text-[10px] text-stone-400 block font-semibold">
                  {isZh ? '现在分词 / 副动词 (-ant)' : 'Present Participle / Gerund (-ant)'}
                </span>
                <span className="font-bold text-stone-900 font-medieval">
                  {activeVerb.participePresent}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                <span className="text-[10px] text-stone-400 block font-semibold">
                  {isZh ? '过去分词 (Participe passé)' : 'Past Participle (Participe passé)'}
                </span>
                <span className="font-bold text-stone-900 font-medieval">
                  {activeVerb.participePasse}
                </span>
              </div>
            </div>

            {/* Tense Selector Ribbon */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
              {TENSE_LABELS.map((t) => {
                const isActive = selectedTense === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => {
                      sound.playClick();
                      setSelectedTense(t.key);
                    }}
                    className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all border ${
                      isActive
                        ? 'bg-amber-600 text-white border-amber-700 shadow-2xs'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-amber-50'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* 6-Person Conjugation Table */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 mb-4">
              <div className="bg-stone-100 px-3 py-2 border-b border-stone-200 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-800">
                  {currentTenseMeta.label}
                </span>
                <span className="text-[10px] font-mono text-stone-500">
                  {currentTenseMeta.subLabel}
                </span>
              </div>

              <div className="divide-y divide-stone-100 text-xs">
                {[
                  { pron: '1sg · je / j’', form: currentTenseData.p1s, note: isZh ? '强式重音位' : 'Strong root stress' },
                  { pron: '2sg · tu', form: currentTenseData.p2s, note: isZh ? '单数第二人称' : '2nd person sg.' },
                  { pron: '3sg · il / ele', form: currentTenseData.p3s, note: isZh ? '强式重音位' : 'Strong root stress' },
                  { pron: '1pl · nos / nous', form: currentTenseData.p1p, note: isZh ? '弱式词尾重音' : 'Weak ending stress' },
                  { pron: '2pl · vos / vous', form: currentTenseData.p2p, note: isZh ? '弱式词尾重音' : 'Weak ending stress' },
                  { pron: '3pl · il / eles', form: currentTenseData.p3p, note: isZh ? '强式重音位' : 'Strong root stress' },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-12 items-center px-3 py-2.5 ${
                      idx % 2 === 0 ? 'bg-indigo-50/25' : 'bg-white'
                    }`}
                  >
                    <span className="col-span-4 font-semibold text-stone-500 font-mono text-[11px]">
                      {row.pron}
                    </span>
                    <span className="col-span-5 font-extrabold text-stone-900 font-medieval text-sm">
                      {row.form}
                    </span>
                    <span className="col-span-3 text-right text-[10px] text-stone-400">
                      {row.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Morphological Commentary */}
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 leading-relaxed">
              <span className="font-bold block mb-1 flex items-center gap-1 text-amber-800">
                <Sparkles className="w-3.5 h-3.5" />{' '}
                {isZh ? '变位规律与重音交替精解：' : 'Conjugation & Stem Alternation Notes:'}
              </span>
              {activeVerb.ruleExplanation}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: COMPREHENSIVE 18-UNIT GRAMMAR CODEX */}
      {activeTab === 'rules' && (
        <div className="space-y-3">
          {/* Search Bar across all 18 grammar units */}
          <div className="relative mb-2">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={grammarSearch}
              onChange={(e) => setGrammarSearch(e.target.value)}
              placeholder={
                isZh
                  ? '检索 18 单元教材全部语法点 (例: si, V2, 绝对直宾格, 伪友词, 皮卡第)...'
                  : 'Search all 18 grammar units (e.g. si, V2, Cas Régime, false friends, Picard)...'
              }
              className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-stone-200 text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-stone-900"
            />
          </div>

          {filteredSections.map((sec) => {
            const isExpanded = expandedSection === sec.id || grammarSearch.trim().length > 0;
            return (
              <div
                key={sec.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs transition-all"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    sound.playClick();
                    setExpandedSection(expandedSection === sec.id ? '' : sec.id);
                  }}
                  className="w-full p-4 text-left flex items-start justify-between gap-2 hover:bg-stone-50 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                      {sec.tag}
                    </span>
                    <h3 className="text-sm font-bold text-stone-900 mt-0.5">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">{sec.subtitle}</p>
                  </div>
                  <div className="p-1 rounded-lg text-stone-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                  <div className="p-4 pt-1 border-t border-stone-100 bg-stone-50/50 space-y-4">
                    <p className="text-xs text-stone-700 leading-relaxed bg-white p-3 rounded-xl border border-stone-200">
                      {sec.summary}
                    </p>

                    {sec.content.map((block, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="text-xs font-bold text-stone-900">
                          {block.heading}
                        </h4>
                        <div className="space-y-1.5">
                          {block.body.map((paragraph, pIdx) => (
                            <p key={pIdx} className="text-xs text-stone-600 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* Rules table if present */}
                        {block.rules && (
                          <div className="space-y-1.5 mt-2">
                            {block.rules.map((r, rIdx) => (
                              <div
                                key={rIdx}
                                className="p-2.5 bg-white rounded-xl border border-stone-200 text-xs"
                              >
                                <div className="font-bold text-stone-900 font-medieval">
                                  {r.rule}
                                </div>
                                <div className="text-stone-600 mt-0.5">
                                  {r.example}
                                </div>
                                <div className="text-[11px] text-stone-400 mt-0.5">
                                  {isZh ? '现代法语:' : 'Modern French:'} {r.modern}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
