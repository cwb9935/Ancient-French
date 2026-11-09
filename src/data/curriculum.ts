/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types';
import { UNITS_1_TO_3 } from './curriculum/units1to3';
import { UNITS_4_TO_6 } from './curriculum/units4to6';
import { UNITS_7_TO_9 } from './curriculum/units7to9';
import { UNITS_10_TO_12 } from './curriculum/units10to12';
import { UNITS_13_TO_15 } from './curriculum/units13to15';
import { UNITS_16_TO_18 } from './curriculum/units16to18';

export const UNITS_DATA: Unit[] = [
  ...UNITS_1_TO_3,
  ...UNITS_4_TO_6,
  ...UNITS_7_TO_9,
  ...UNITS_10_TO_12,
  ...UNITS_13_TO_15,
  ...UNITS_16_TO_18,
];
