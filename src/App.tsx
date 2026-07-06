/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { CHAPTERS } from "./data/chapters";
import { Chapter, CultivationState, Realm } from "./types";
import { ChapterContent } from "./components/ChapterContent";
import { RealmProgress, getRealmDetails } from "./components/RealmProgress";
import { TenseMatrix } from "./components/TenseMatrix";
import { SentenceBuilder } from "./components/SentenceBuilder";
import { AiPavilion } from "./components/AiPavilion";
import {
  BookOpen,
  Sword,
  Compass,
  Award,
  Book,
  Menu,
  X,
  Volume2,
  ChevronRight,
  RotateCcw,
  Sparkles,
  BrainCircuit,
} from "lucide-react";

const LOCAL_STORAGE_KEY = "han_li_english_cultivation_v1";

const INITIAL_STATE: CultivationState = {
  score: 0,
  completedChapters: [],
  currentRealm: Realm.Mortal,
  answeredQuestions: {},
};

export default function App() {
  // Mobile sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Selected chapter
  const [selectedChapterId, setSelectedChapterId] = useState<string>("chap-1");
  // Active view: "notebook" or "playground" or "ai_pavilion"
  const [viewMode, setViewMode] = useState<"notebook" | "playground" | "ai_pavilion">("notebook");
  // Sub-tab in playground: "tense" or "sentence"
  const [playgroundTab, setPlaygroundTab] = useState<"tense" | "sentence">("tense");

  // Cultivation state
  const [state, setState] = useState<CultivationState>(INITIAL_STATE);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.score === "number") {
          setState(parsed);
        }
      } catch (e) {
        console.error("Failed to parse saved state", e);
      }
    }
  }, []);

  // Save to local storage
  const saveState = (updated: CultivationState) => {
    setState(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  const handleCorrectAnswer = (questionId: string, isCorrect: boolean) => {
    const alreadyAnswered = questionId in state.answeredQuestions;
    const previousChoice = state.answeredQuestions[questionId];

    // Record the answered question
    const updatedAnswers = {
      ...state.answeredQuestions,
      [questionId]: isCorrect ? 1 : 0, // 1 for correct, 0 for incorrect
    };

    let newScore = state.score;

    // Only award score for first-time correct answers
    if (isCorrect && !alreadyAnswered) {
      newScore += 10;
    }

    // Now, let's see if the current chapter's quizzes are all answered correctly
    const currentChapter = CHAPTERS.find((c) => c.id === selectedChapterId);
    let updatedCompleted = [...state.completedChapters];

    if (currentChapter && !state.completedChapters.includes(currentChapter.id)) {
      const allChapterQuizzes = currentChapter.quizzes;
      // Check if all quizzes in this chapter are now answered correctly
      const allCorrect = allChapterQuizzes.every((q) => {
        if (q.id === questionId) return isCorrect; // checking the active one
        return updatedAnswers[q.id] === 1; // already recorded as correct
      });

      if (allCorrect) {
        updatedCompleted.push(currentChapter.id);
        newScore += 15; // Bonus for completing a full chapter
      }
    }

    // Determine realm based on new score
    const details = getRealmDetails(newScore);
    const updatedState: CultivationState = {
      ...state,
      score: newScore,
      completedChapters: updatedCompleted,
      currentRealm: details.realm,
      answeredQuestions: updatedAnswers,
    };

    saveState(updatedState);
  };

  const handlePlaygroundAward = (points: number) => {
    const newScore = state.score + points;
    const details = getRealmDetails(newScore);
    
    const updatedState: CultivationState = {
      ...state,
      score: newScore,
      currentRealm: details.realm,
    };

    saveState(updatedState);
  };

  const handleResetCultivation = () => {
    if (window.confirm("确定要废除全身修为，重新从凡人开始修炼英语吗？此操作无法撤销。")) {
      saveState(INITIAL_STATE);
      setSelectedChapterId("chap-1");
      setViewMode("notebook");
    }
  };

  const activeChapter = CHAPTERS.find((c) => c.id === selectedChapterId) || CHAPTERS[0];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Dynamic Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            title="Toggle Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          {/* Logo container with Taoist brush flair */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-800 to-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-emerald-950/10 select-none">
              韩
            </div>
            <div>
              <h1 className="text-sm md:text-base font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                韩立的英语修仙笔记
                <span className="text-[10px] font-normal text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200 hidden sm:inline-block">
                  Teacher Han Li
                </span>
              </h1>
              <p className="text-[10px] text-slate-400 font-medium">
                从基础词法到复杂句法的系统化重排
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleResetCultivation}
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all cursor-pointer text-xs font-semibold flex items-center gap-1 border border-transparent hover:border-rose-100"
            title="废除修为 (Reset Progress)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">废除修为</span>
          </button>
          
          <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />
          
          {/* Active realm badge */}
          <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>境界: {state.currentRealm}</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex relative">
        
        {/* Left Sidebar (Chapter Index) */}
        <aside
          className={`fixed inset-y-0 left-0 transform md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 w-72 bg-white border-r border-slate-200 flex flex-col justify-between ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:flex`}
        >
          {/* Chapter list container */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            {/* Sidebar title */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Book className="w-3.5 h-3.5 text-slate-400" /> 经书功法目录
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden p-1 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation options */}
            <div className="px-3.5 py-4 space-y-4">
              {/* Category selector */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/40">
                <button
                  onClick={() => {
                    setViewMode("notebook");
                    setSidebarOpen(false);
                  }}
                  className={`py-2 px-1 rounded-lg text-[10px] md:text-xs font-bold transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 ${
                    viewMode === "notebook"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span>密卷</span>
                </button>
                <button
                  onClick={() => {
                    setViewMode("playground");
                    setSidebarOpen(false);
                  }}
                  className={`py-2 px-1 rounded-lg text-[10px] md:text-xs font-bold transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 ${
                    viewMode === "playground"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <Sword className="w-3.5 h-3.5 shrink-0" />
                  <span>炼器</span>
                </button>
                <button
                  onClick={() => {
                    setViewMode("ai_pavilion");
                    setSidebarOpen(false);
                  }}
                  className={`py-2 px-1 rounded-lg text-[10px] md:text-xs font-bold transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 ${
                    viewMode === "ai_pavilion"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <BrainCircuit className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  <span>天机</span>
                </button>
              </div>

              {/* Sidebar list changes based on ViewMode */}
              {viewMode === "notebook" ? (
                <div className="space-y-1.5 pt-2">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                    心法篇章 (Syllabus Chapters)
                  </span>
                  
                  <div className="space-y-1 max-h-[50vh] md:max-h-[60vh] overflow-y-auto pr-1">
                    {CHAPTERS.map((chap) => {
                      const isSelected = selectedChapterId === chap.id;
                      const isCompleted = state.completedChapters.includes(chap.id);

                      return (
                        <button
                          key={chap.id}
                          onClick={() => {
                            setSelectedChapterId(chap.id);
                            setSidebarOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-start gap-2.5 cursor-pointer ${
                            isSelected
                              ? "bg-emerald-50 border border-emerald-200 text-emerald-950 font-semibold"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold mt-0.5 ${
                            isSelected
                              ? "bg-emerald-600 text-white"
                              : isCompleted
                              ? "bg-amber-100 text-amber-800 border border-amber-200"
                              : "bg-slate-100 text-slate-400"
                          }`}>
                            {chap.number}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold truncate block">{chap.title}</span>
                              {isCompleted && (
                                <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-1 rounded border border-amber-200 shrink-0">
                                  已成
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium truncate block mt-0.5">
                              {chap.category} · {chap.subtitle}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : viewMode === "playground" ? (
                <div className="space-y-1.5 pt-2">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                    破障法宝 (Playground Tools)
                  </span>
                  
                  <button
                    onClick={() => {
                      setPlaygroundTab("tense");
                      setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-3 py-3 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                      playgroundTab === "tense"
                        ? "bg-emerald-50 border border-emerald-200 text-emerald-950 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <Compass className="w-4 h-4 text-emerald-600" />
                    <div>
                      <span className="text-xs font-bold block">时态玄天大阵</span>
                      <span className="text-[9px] text-slate-400 block mt-0.5">12大时态与人称自由演算</span>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setPlaygroundTab("sentence");
                      setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-3 py-3 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                      playgroundTab === "sentence"
                        ? "bg-emerald-50 border border-emerald-200 text-emerald-950 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <Award className="w-4 h-4 text-emerald-600" />
                    <div>
                      <span className="text-xs font-bold block">句法演练阵法</span>
                      <span className="text-[9px] text-slate-400 block mt-0.5">拼装六大基本句型解开禁制</span>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="space-y-3.5 pt-2">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                    天机阁秘境 (AI Pavilion)
                  </span>
                  
                  <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100 text-center space-y-3 shadow-inner">
                    <BrainCircuit className="w-8 h-8 text-emerald-600 mx-auto animate-pulse" />
                    <div>
                      <h5 className="text-xs font-bold text-emerald-900">天机秘境大门已开</h5>
                      <p className="text-[10px] text-slate-500 mt-1.5 leading-relaxed">
                        您可在右侧通过 OpenAI 规则大模型生成新句式、探词源、甚至进行灵能试炼，由韩立尊师评估句子！
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar footer showing Han Li's small bio */}
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-100 flex items-center justify-center text-xs select-none font-bold shrink-0">
                立
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">讲解尊师 (Teacher)</span>
                <span className="text-xs font-bold text-slate-800">韩立 (仙界架构师)</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto px-4 py-6 md:p-8 space-y-8 max-w-4xl mx-auto">
          
          {/* Top scoreboard and level stats */}
          <section>
            <RealmProgress state={state} />
          </section>

          {/* Render content depending on selected mode */}
          {viewMode === "notebook" ? (
            <section className="space-y-6">
              {/* Quick Navigation Helpers between chapters */}
              <div className="flex justify-between items-center bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  <span className="text-xs font-bold text-slate-700">正在参悟:</span>
                  <span className="text-xs text-slate-500 font-semibold">{activeChapter.title}</span>
                </div>
                
                {/* Previous & Next shortcuts */}
                <div className="flex gap-2.5">
                  <button
                    disabled={activeChapter.number === 1}
                    onClick={() => {
                      const prevChap = CHAPTERS.find((c) => c.number === activeChapter.number - 1);
                      if (prevChap) setSelectedChapterId(prevChap.id);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${
                      activeChapter.number === 1
                        ? "bg-slate-100 border-slate-100 text-slate-300 cursor-not-allowed"
                        : "bg-white border-slate-200 text-slate-600 hover:text-slate-800 hover:bg-slate-50 cursor-pointer"
                    }`}
                  >
                    &larr; 前一篇章
                  </button>
                  <button
                    disabled={activeChapter.number === CHAPTERS.length}
                    onClick={() => {
                      const nextChap = CHAPTERS.find((c) => c.number === activeChapter.number + 1);
                      if (nextChap) setSelectedChapterId(nextChap.id);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${
                      activeChapter.number === CHAPTERS.length
                        ? "bg-slate-100 border-slate-100 text-slate-300 cursor-not-allowed"
                        : "bg-slate-900 border-slate-900 text-white hover:bg-slate-800 cursor-pointer shadow-sm"
                    }`}
                  >
                    下一篇章 &rarr;
                  </button>
                </div>
              </div>

              {/* Core Chapter text & exercises */}
              <ChapterContent
                chapter={activeChapter}
                cultivationState={state}
                onCorrectAnswer={handleCorrectAnswer}
              />
            </section>
          ) : viewMode === "playground" ? (
            <section className="space-y-6">
              {/* Sandbox switcher */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-1.5">
                    <Sword className="w-5.5 h-5.5 text-emerald-600" />
                    修仙炼器阁 (Interactive Sandbox Sandbox)
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    在此处演练法宝心法，通过交互式仿真盘彻底融会贯通。
                  </p>
                </div>
              </div>

              {/* Playground widgets */}
              {playgroundTab === "tense" ? (
                <TenseMatrix />
              ) : (
                <SentenceBuilder onSuccessAward={handlePlaygroundAward} />
              )}
            </section>
          ) : (
            <section className="space-y-6">
              <AiPavilion state={state} onAward={handlePlaygroundAward} />
            </section>
          )}
        </main>
      </div>

      {/* Persistent footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-6 text-center text-xs px-4">
        <p className="font-medium">
          《韩立的英语修仙笔记》 © 2026 · 掌门法旨：学无止境，道法自然。
        </p>
        <p className="text-[10px] text-slate-500 mt-1">
          由高级架构师韩立（凡人修仙传）友情传功 · 精致打磨 · 全面护航
        </p>
      </footer>
    </div>
  );
}
