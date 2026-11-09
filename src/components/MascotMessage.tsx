/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { sound } from '../utils/audio';
import { getLocalizedRabbitSkins } from '../utils/i18nAuthorsAndRabbits';

interface MascotMessageProps {
  message: string;
  subMessage?: string;
  actionText?: string;
  onAction?: () => void;
  audioPronounce?: string;
  skinId?: string;
  mascotName?: string;
  lang?: Language;
}

export const MascotMessage: React.FC<MascotMessageProps> = ({
  message,
  subMessage,
  actionText,
  onAction,
  audioPronounce,
  skinId = 'rabbit-scribe',
  mascotName,
  lang = 'en',
}) => {
  const [imgError, setImgError] = useState(false);
  const isZh = lang === 'zh';
  const skins = getLocalizedRabbitSkins(lang);
  const skin = skins.find(s => s.id === skinId) || skins[0];
  const displayName = mascotName || skin.name;

  return (
    <div className="flex items-start gap-3 my-3 p-3 bg-amber-50/90 backdrop-blur-sm rounded-2xl border border-amber-200/90 shadow-xs">
      {/* Mascot Avatar */}
      <div className="relative shrink-0">
        {!imgError ? (
          <img
            src={skin.image}
            alt={displayName}
            onError={() => setImgError(true)}
            className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-300 shadow-xs"
          />
        ) : (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-white font-bold text-xl shadow-xs">
            🐰
          </div>
        )}
        <span className="absolute -bottom-1 -right-1 bg-amber-700 text-amber-50 text-[9px] px-1.5 py-0.5 rounded-full font-bold tracking-tight shadow-xs">
          {isZh ? '伴读' : 'Guide'}
        </span>
      </div>

      {/* Speech Bubble */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <span className="text-xs font-bold text-amber-900 flex items-center gap-1 font-serif">
            {displayName}
            <Sparkles className="w-3 h-3 text-amber-600 inline" />
          </span>

          {audioPronounce && (
            <button
              onClick={() => {
                sound.speakOldFrench(audioPronounce);
              }}
              className="text-stone-400 hover:text-amber-700 transition-colors p-1"
              title={isZh ? '聆听发音' : 'Listen to pronunciation'}
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <p className="text-sm font-medium text-amber-950 leading-snug break-words">
          {message}
        </p>

        {subMessage && (
          <p className="text-xs text-amber-800/80 mt-1 leading-relaxed">
            {subMessage}
          </p>
        )}

        {actionText && onAction && (
          <button
            onClick={() => {
              sound.playClick();
              onAction();
            }}
            className="mt-2 text-xs font-semibold text-amber-700 hover:text-amber-900 underline underline-offset-2 flex items-center gap-1"
          >
            {actionText} →
          </button>
        )}
      </div>
    </div>
  );
};
