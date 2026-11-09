/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeclensionTable, ConjugationTable } from '../types';
import { buildFullDeclensionDatabase, buildFullConjugationDatabase } from './grammar/fullLexiconGrammar';
import { SECTIONS_1_TO_6 } from './grammar/sections1to6';
import { SECTIONS_7_TO_12 } from './grammar/sections7to12';
import { SECTIONS_13_TO_18 } from './grammar/sections13to18';

export interface GrammarSection {
  id: string;
  unitNumber: number;
  title: string;
  subtitle: string;
  tag: string;
  icon: string;
  summary: string;
  content: {
    heading: string;
    body: string[];
    rules?: { rule: string; example: string; modern: string }[];
  }[];
}

export const DECLENSION_DATABASE: DeclensionTable[] = buildFullDeclensionDatabase();

export const CONJUGATION_DATABASE: ConjugationTable[] = buildFullConjugationDatabase();

export const GRAMMAR_SECTIONS: GrammarSection[] = [
  ...SECTIONS_1_TO_6,
  ...SECTIONS_7_TO_12,
  ...SECTIONS_13_TO_18,
];
