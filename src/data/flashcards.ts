/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FlashcardWord } from '../types';
import { generateFullLexicon } from './lexicon/generator';

export const FLASHCARD_WORDS: FlashcardWord[] = generateFullLexicon();
