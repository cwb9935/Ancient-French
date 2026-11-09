/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuthorPortrait } from '../../types';
import { AUTHORS_1_TO_10 } from './authors1to10';
import { AUTHORS_11_TO_20 } from './authors11to20';
import { AUTHORS_21_TO_30 } from './authors21to30';

export const MEDIEVAL_AUTHORS_LIST: AuthorPortrait[] = [
  ...AUTHORS_1_TO_10,
  ...AUTHORS_11_TO_20,
  ...AUTHORS_21_TO_30,
];
