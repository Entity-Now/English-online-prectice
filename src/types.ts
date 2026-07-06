/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WordBreakdown {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootAnalysis: string; // E.g., "tele- (distant) + port (carry)"
  example: string;
  translation: string;
}

export interface GrammarFormula {
  structure: string;
  explanation: string;
  example: string;
  translation: string;
}

export interface ChapterExample {
  english: string;
  chinese: string;
  breakdown?: string; // Highlighting structural parts
  context: string; // Modern Han Li context, e.g. "韩立在酒店前台办理入住"
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index in options
  explanation: string;
  lessonTidbit: string; // Han Li's commentary on why this is crucial
}

export enum Realm {
  Mortal = "凡人 (Mortal)",
  QiRefining = "炼气期 (Qi Refining)",
  FoundationEstablishment = "筑基期 (Foundation)",
  CoreFormation = "结丹期 (Core Formation)",
  NascentSoul = "元婴期 (Nascent Soul)",
}

export interface CultivationState {
  score: number;
  completedChapters: string[]; // Chapter IDs
  currentRealm: Realm;
  answeredQuestions: Record<string, number>; // questionId -> selectedIndex
}

export interface HanLiScene {
  title: string;
  scenario: string; // E.g., "韩立坐飞机去美国参加技术大会"
  avatarStyle: string; // visual style modifier
  dialogue: string; // Teacher Han Li's conversational greeting/lesson intro
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: "基础词法" | "核心动词" | "时态语序" | "句法结构" | "高级语法";
  scene: HanLiScene;
  intro: string;
  formulas: GrammarFormula[];
  examples: ChapterExample[];
  vocabularies: WordBreakdown[];
  quizzes: QuizQuestion[];
  cultivationTip: string; // 韩立师尊的独门修炼心得
  contextPracticeAdvice: string; // 实战语境练习建议
}

export interface AdventureOption {
  text: string; // Option text in English
  translation: string; // Option translation
  isCorrect: boolean;
  resultStory: string; // what happens next in Chinese lore
  commentary: string; // grammatical analysis from Han Li
}

export interface IllusionAdventure {
  chapterId: string;
  title: string;
  scenario: string; // The immersion setup
  question: string; // What Han Li asks the user to choose
  options: AdventureOption[];
}

