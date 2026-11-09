/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Map, BookOpen, Layers, Feather, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { sound } from '../utils/audio';

export type NavTab = 'path' | 'grammar' | 'flashcards' | 'library' | 'profile';

interface BottomNavProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  lang?: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onSelectTab,
  lang = 'en',
}) => {
  const isZh = lang === 'zh';
  const tabs = [
    { id: 'path' as NavTab, label: isZh ? '求学之路' : 'Path', icon: Map },
    { id: 'grammar' as NavTab, label: isZh ? '语法宝典' : 'Grammar', icon: BookOpen },
    { id: 'flashcards' as NavTab, label: isZh ? '词汇闪卡' : 'Flashcards', icon: Layers },
    { id: 'library' as NavTab, label: isZh ? '作家画廊' : 'Gallery', icon: Feather },
    { id: 'profile' as NavTab, label: isZh ? '骑士档案' : 'Profile', icon: ShieldCheck },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-200 shadow-lg pb-safe">
      <div className="max-w-md mx-auto grid grid-cols-5 h-16 items-center px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                sound.playClick();
                onSelectTab(tab.id);
              }}
              className={`flex flex-col items-center justify-center py-1 transition-all group ${
                isActive ? 'text-amber-700 scale-105' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-colors ${
                  isActive ? 'bg-amber-100/80 text-amber-800' : 'group-hover:bg-amber-50/50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              </div>
              <span
                className={`text-[10px] tracking-tight mt-0.5 whitespace-nowrap ${
                  isActive ? 'font-bold text-amber-900' : 'font-medium'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
