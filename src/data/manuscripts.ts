/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ManuscriptText } from '../types';
import { LONG_POEMS } from './manuscripts/longPoems';
import { SHORT_POEMS } from './manuscripts/shortPoems';

// Complete collection of medieval manuscripts for interactive parchment reader:
// - Long poems / epics have celebrated excerpts exceeding 100 Old French words
// - Short poems are provided as complete poems without omission (完整诗篇)
export const MANUSCRIPT_TEXTS: ManuscriptText[] = [
  ...LONG_POEMS,
  ...SHORT_POEMS,
];
