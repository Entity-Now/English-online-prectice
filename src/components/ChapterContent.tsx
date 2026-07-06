/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Chapter, CultivationState } from "../types";
import { HanLiAvatar } from "./HanLiAvatar";
import { VocabularyCard } from "./VocabularyCard";
import { InteractiveQuiz } from "./InteractiveQuiz";
import {
  BookOpen,
  Compass,
  FileText,
  HelpCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Swords,
  Flame,
  RotateCcw,
  Check,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ADVENTURES } from "../data/adventures";

const CHAPTER_IMAGES: Record<string, string> = {
  "chap-1": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80", // Mystical classic library
  "chap-2": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", // Modern meeting boardroom
  "chap-3": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", // Cyber glow microchip
  "chap-4": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", // Hotel lobby luxury
  "chap-5": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80", // Dark glowing server racks
  "chap-6": "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80", // Greenhouse glowing plants
  "chap-7": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", // Sleek modern airport terminal
  "chap-8": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", // Corrupted cyber screens / charts
  "chap-9": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80", // Ancient book stacks
  "chap-10": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80", // Luxurious evening cocktail gala
  "chap-11": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80", // Fountain pen resting on SLA document
  "chap-12": "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=800&q=80" // Dark neon cyber war room
};


interface ChapterContentProps {
  chapter: Chapter;
  cultivationState: CultivationState;
  onCorrectAnswer: (id: string, isFirstTime: boolean) => void;
}

type TabType = "main" | "formulas" | "vocabularies" | "quizzes";

export const ChapterContent: React.FC<ChapterContentProps> = ({
  chapter,
  cultivationState,
  onCorrectAnswer,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("main");
  const [selectedOptIdx, setSelectedOptIdx] = useState<number | null>(null);
  const [advSubmitted, setAdvSubmitted] = useState(false);
  const [advFeedback, setAdvFeedback] = useState<"correct" | "incorrect" | null>(null);

  // Reset tab when chapter changes
  React.useEffect(() => {
    setActiveTab("main");
    
    const isCompleted = cultivationState.answeredQuestions["adventure-" + chapter.id] === 1;
    if (isCompleted) {
      const adv = ADVENTURES.find((a) => a.chapterId === chapter.id);
      const correctIdx = adv?.options.findIndex((o) => o.isCorrect) ?? null;
      setSelectedOptIdx(correctIdx);
      setAdvSubmitted(true);
      setAdvFeedback("correct");
    } else {
      setSelectedOptIdx(null);
      setAdvSubmitted(false);
      setAdvFeedback(null);
    }
  }, [chapter.id, cultivationState.answeredQuestions]);

  const tabs = [
    { id: "main" as TabType, label: "修炼主卷 (Syllabus)", icon: FileText },
    { id: "formulas" as TabType, label: "阵法句式 (Formulas)", icon: Compass },
    { id: "vocabularies" as TabType, label: "词海解析 (Words)", icon: BookOpen },
    { id: "quizzes" as TabType, label: "试炼法阵 (Quizzes)", icon: HelpCircle },
  ];

  return (
    <div className="space-y-6">
      {/* Chapter Title Banner */}
      <div className="bg-[#0f241a] text-white rounded-3xl p-6 md:p-8 relative overflow-hidden border border-emerald-500/20 shadow-md">
        <div className="absolute right-[-10px] top-[-20px] text-emerald-800/10 font-bold text-9xl select-none pointer-events-none">
          CH.{chapter.number}
        </div>
        
        {/* Glowing aura */}
        <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-0.5 rounded-full uppercase">
                {chapter.category} · 第 {chapter.number} 篇章
              </span>
              {cultivationState.completedChapters.includes(chapter.id) && (
                <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-800 px-2.5 py-0.5 rounded-full">
                  ★ 已完成修炼
                </span>
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              {chapter.title}
            </h2>
            <p className="text-slate-300 text-xs md:text-sm max-w-xl leading-relaxed">
              {chapter.subtitle}
            </p>
          </div>
          
          <div className="text-right text-emerald-400 font-mono text-xs hidden md:block">
            <span className="block text-slate-400 font-sans text-[10px]">CULTIVATION SCENE</span>
            {chapter.scene.title}
          </div>
        </div>
      </div>

      {/* Narrative Dialogue Section with Han Li */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Han Li Avatar Column */}
          <div className="md:col-span-3 flex justify-center">
            <HanLiAvatar
              sceneType={chapter.scene.avatarStyle as any}
              className="w-32 h-32 md:w-36 md:h-36"
            />
          </div>

          {/* Dialogue balloon */}
          <div className="md:col-span-9 space-y-4">
            <div className="relative bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
              {/* Dialogue arrow */}
              <div className="absolute left-1/2 -top-2.5 -translate-x-1/2 md:-left-2 md:top-10 md:translate-x-0 w-4 h-4 bg-slate-50 border-t border-l border-slate-200/80 rotate-45" />
              
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                  💬 韩立师尊的传功现场 · {chapter.scene.title}
                </span>
                <p className="text-xs text-slate-500 italic mt-1 leading-relaxed">
                  情境：{chapter.scene.scenario}
                </p>
                <p className="text-sm text-slate-800 font-medium leading-relaxed mt-2.5 border-t border-slate-200/50 pt-2.5">
                  &ldquo;{chapter.scene.dialogue}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex overflow-x-auto gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200/50 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white text-slate-900 border border-slate-200/80 shadow-sm"
                  : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tabs Content */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* 1. MAIN TEXT TAB */}
            {activeTab === "main" && (
              <div className="space-y-6">
                
                {/* 仙镜幻境 (Scenic Mirror Mirage Illustration Card) */}
                <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                  {/* Thematic scenic image */}
                  <img
                    src={CHAPTER_IMAGES[chapter.id] || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"}
                    alt={chapter.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dark-emerald cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-900/10 mix-blend-multiply opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-transparent to-transparent" />

                  {/* BAGUA TRIGRAM OVERLAY ROTATING PATTERN */}
                  <svg
                    className="absolute -right-16 -bottom-16 w-56 h-56 md:w-72 md:h-72 text-emerald-400/15 pointer-events-none animate-[spin_80s_linear_infinite]"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="35" strokeDasharray="6 3" />
                    <circle cx="50" cy="50" r="25" />
                    <circle cx="50" cy="50" r="15" strokeDasharray="2 1" />
                    {/* Trigram spikes */}
                    <path d="M 50 10 L 50 20 M 50 80 L 50 90 M 10 50 L 20 50 M 80 50 L 90 50" strokeWidth="1.5" />
                    <path d="M 22 22 L 29 29 M 71 71 L 78 78 M 22 71 L 29 64 M 71 22 L 78 29" strokeWidth="1.5" />
                  </svg>

                  {/* Bottom Text Label */}
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800/40 px-2.5 py-0.5 rounded-md uppercase font-bold">
                        第 {chapter.number} 篇章 · 幻境投射
                      </span>
                      <h4 className="text-sm md:text-base font-bold text-white mt-1.5 tracking-tight flex items-center gap-1.5">
                        {chapter.scene.title}
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono font-bold hidden sm:inline-block bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800/50">
                      SYS_REF: {chapter.scene.avatarStyle.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4.5 h-4.5 text-emerald-600" />
                      心法概述 (Introduction)
                    </h3>
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed whitespace-pre-line">
                      {chapter.intro}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="text-base font-bold text-emerald-800 mb-3 flex items-center gap-2">
                      💡 实战语境练习建议 (Real-World Context Advice)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
                      {chapter.contextPracticeAdvice}
                    </p>
                  </div>

                  {/* Core Mnemonic tip scroll box */}
                  <div className="bg-amber-50/40 border border-amber-200 rounded-2xl p-5">
                    <h4 className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                      📙 独门修炼心得 (Master's Wisdom Scroll)
                    </h4>
                    <p className="text-xs text-amber-950 mt-2 leading-relaxed whitespace-pre-line font-sans">
                      {chapter.cultivationTip}
                    </p>
                  </div>
                </div>

                {/* Interactive Illusion Adventure Game */}
                {(() => {
                  const adv = ADVENTURES.find((a) => a.chapterId === chapter.id);
                  if (!adv) return null;

                  return (
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 md:p-8 border border-emerald-500/20 shadow-xl space-y-6 relative overflow-hidden">
                      {/* Decorative magic pattern */}
                      <div className="absolute right-[-30px] bottom-[-30px] w-64 h-64 border border-emerald-500/10 rounded-full pointer-events-none animate-[pulse_6s_ease-in-out_infinite]" />
                      
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                          <Swords className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-bold">CHAPTER {chapter.number} ILLUSION</span>
                          <h4 className="text-sm md:text-base font-extrabold text-white flex items-center gap-2">
                            {adv.title}
                            {cultivationState.completedChapters.includes(chapter.id) && (
                              <span className="text-[10px] font-semibold text-amber-400 bg-amber-950/60 border border-amber-800 px-2 py-0.5 rounded-full shrink-0">
                                ★ 幻境已破
                              </span>
                            )}
                          </h4>
                        </div>
                      </div>

                      <div className="bg-slate-800/40 rounded-2xl p-4 border border-slate-700/30 text-xs text-slate-300 leading-relaxed italic">
                        <strong>身临其境：</strong>{adv.scenario}
                      </div>

                      <div className="space-y-3">
                        <p className="text-xs md:text-sm font-semibold text-emerald-300 flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5 text-amber-500" /> {adv.question}
                        </p>

                        {/* Interactive Options list */}
                        <div className="space-y-2.5">
                          {adv.options.map((opt, oIdx) => {
                            const isSelected = selectedOptIdx === oIdx;
                            const showResult = advSubmitted;
                            const isCurrentCorrect = opt.isCorrect;

                            let optStyle = "border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white";
                            if (isSelected) {
                              optStyle = "border-emerald-500 bg-emerald-950/30 text-emerald-300 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]";
                            }

                            if (showResult) {
                              if (isCurrentCorrect) {
                                optStyle = "border-emerald-500 bg-emerald-950/40 text-emerald-200 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                              } else if (isSelected) {
                                optStyle = "border-rose-500/80 bg-rose-950/20 text-rose-300";
                              } else {
                                optStyle = "border-slate-800/40 bg-slate-900/20 text-slate-500 cursor-not-allowed";
                              }
                            }

                            return (
                              <button
                                key={oIdx}
                                disabled={showResult}
                                onClick={() => setSelectedOptIdx(oIdx)}
                                className={`w-full text-left p-3.5 rounded-xl border text-xs md:text-sm transition-all flex items-start gap-3 cursor-pointer ${optStyle}`}
                              >
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono mt-0.5 shrink-0 ${
                                  isSelected
                                    ? "bg-emerald-500 text-white"
                                    : "bg-slate-800 text-slate-400"
                                }`}>
                                  {String.fromCharCode(65 + oIdx)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-mono text-xs md:text-sm">{opt.text}</p>
                                  <p className="text-[10px] text-slate-400 mt-1">译：{opt.translation}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Submission and Action Panel */}
                      <div className="flex items-center justify-between gap-4 pt-2 border-t border-slate-800/60">
                        <span className="text-[11px] text-slate-400">
                          {advSubmitted
                            ? advFeedback === "correct"
                              ? "🎉 成功看破虚妄，法力更上层楼！"
                              : "⚡ 灵力反噬，法脉有些受阻..."
                            : selectedOptIdx !== null
                            ? "👉 掐诀施法，以此印证心法！"
                            : "👈 请先选择一条破阵口诀..."}
                        </span>

                        {!advSubmitted ? (
                          <button
                            disabled={selectedOptIdx === null}
                            onClick={() => {
                              if (selectedOptIdx === null) return;
                              const selectedOpt = adv.options[selectedOptIdx];
                              setAdvSubmitted(true);
                              if (selectedOpt.isCorrect) {
                                setAdvFeedback("correct");
                                onCorrectAnswer("adventure-" + chapter.id, true);
                              } else {
                                setAdvFeedback("incorrect");
                                onCorrectAnswer("adventure-" + chapter.id, false);
                              }
                            }}
                            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                              selectedOptIdx !== null
                                ? "bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer shadow-md shadow-emerald-500/10"
                                : "bg-slate-800 text-slate-500 cursor-not-allowed"
                            }`}
                          >
                            激发道法 (Cast Spell)
                          </button>
                        ) : (
                          advFeedback === "incorrect" && (
                            <button
                              onClick={() => {
                                setSelectedOptIdx(null);
                                setAdvSubmitted(false);
                                setAdvFeedback(null);
                              }}
                              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer transition-all border border-slate-700"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                              重整真元 (Try Again)
                            </button>
                          )
                        )}
                      </div>

                      {/* Result Narrative & Commentary Panel */}
                      <AnimatePresence>
                        {advSubmitted && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden space-y-4 pt-2"
                          >
                            {/* Illusion Story result */}
                            <div className={`p-4 rounded-xl border ${
                              advFeedback === "correct"
                                ? "bg-emerald-950/30 border-emerald-500/20 text-emerald-100"
                                : "bg-rose-950/20 border-rose-500/20 text-rose-100"
                            }`}>
                              <h5 className="text-xs font-bold flex items-center gap-1.5 mb-1.5">
                                {advFeedback === "correct" ? (
                                  <Check className="w-4 h-4 text-emerald-400" />
                                ) : (
                                  <X className="w-4 h-4 text-rose-400" />
                                )}
                                幻境演变 (Story Resolution)
                              </h5>
                              <p className="text-xs leading-relaxed text-slate-200">
                                {adv.options[selectedOptIdx!]?.resultStory}
                              </p>
                            </div>

                            {/* Teacher Han Li's specific commentary */}
                            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0 text-emerald-400 font-bold text-xs">
                                立
                              </div>
                              <div className="flex-1">
                                <h5 className="text-xs font-extrabold text-emerald-400 uppercase tracking-wide">
                                  韩立师尊的语法点睛 (Grammatical Insight)
                                </h5>
                                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                                  {adv.options[selectedOptIdx!]?.commentary}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })()}

                {/* Preview Exercises CTA */}
                <div className="bg-slate-900 text-slate-200 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 animate-[pulse_8s_ease-in-out_infinite]">
                  <div>
                    <h4 className="text-sm font-bold text-white">觉得掌握了本篇心法？</h4>
                    <p className="text-xs text-slate-400 mt-1">直接进入试炼大阵进行破障答题，解锁下一篇秘境！</p>
                  </div>
                  <button
                    onClick={() => setActiveTab("quizzes")}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition-all self-stretch sm:self-auto text-center justify-center"
                  >
                    开始试炼 (Go to Quiz)
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 2. FORMULAS TAB */}
            {activeTab === "formulas" && (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      阵法法则句型 (Grammar Formulas)
                    </h3>
                    
                    <div className="space-y-6">
                      {chapter.formulas.map((form, fIdx) => (
                        <div
                          key={fIdx}
                          className="bg-[#FAF9F5] border border-[#E9E6DC] rounded-2xl p-5 relative"
                        >
                          {/* formula number tag */}
                          <div className="absolute top-3 right-4 font-mono text-xs text-slate-300 font-bold">
                            FORMULA {fIdx + 1}
                          </div>

                          <div className="space-y-3">
                            <span className="inline-block text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              结构公式 (Structure)
                            </span>
                            <p className="font-mono text-sm md:text-base font-semibold text-emerald-950">
                              {form.structure}
                            </p>
                            
                            <p className="text-xs text-slate-500 font-medium">
                              <strong>法则释义：</strong> {form.explanation}
                            </p>

                            <div className="border-t border-slate-200/60 pt-3 mt-1.5">
                              <span className="text-[10px] text-slate-400 font-bold block mb-1">公式投影 (Example)</span>
                              <p className="text-xs md:text-sm text-slate-900 font-semibold italic">
                                &ldquo;{form.example}&rdquo;
                              </p>
                              <p className="text-xs text-slate-500 mt-1">
                                译：{form.translation}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Examples details */}
                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="text-base font-bold text-slate-900 mb-4">
                      历练句型摹写 (Detailed Real-life Scenarios)
                    </h3>
                    
                    <div className="space-y-4">
                      {chapter.examples.map((ex, eIdx) => (
                        <div key={eIdx} className="border border-slate-100 rounded-2xl p-4 hover:bg-slate-50 transition-colors">
                          <span className="text-[9px] font-bold text-slate-400 block mb-1">
                            场景 {eIdx + 1}: {ex.context}
                          </span>
                          <p className="text-xs md:text-sm font-bold text-slate-800 leading-relaxed">
                            {ex.english}
                          </p>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {ex.chinese}
                          </p>
                          {ex.breakdown && (
                            <div className="mt-2.5 pt-2 border-t border-dashed border-slate-200 text-[11px] font-mono text-emerald-700">
                              结构剖析：{ex.breakdown}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. VOCABULARY TAB */}
            {activeTab === "vocabularies" && (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    词海灵液与词根奥秘 (Difficult Words Analysis)
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    凡人见词便背，枯燥易忘。修仙者追其词源、明其词根，一词通，百词顺！
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {chapter.vocabularies.map((v, vIdx) => (
                      <VocabularyCard key={vIdx} vocab={v} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. QUIZZES TAB */}
            {activeTab === "quizzes" && (
              <div className="space-y-6">
                <div className="bg-[#FAF9F5] rounded-3xl border border-[#E9E6DC] p-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800/10 border border-emerald-700/20 text-emerald-700 flex items-center justify-center font-bold text-base select-none">
                    🎯
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">第 {chapter.number} 篇章试炼：斩妖除魔</h4>
                    <p className="text-xs text-slate-500 mt-0.5">每题正确首次可积 10 点灵力值，筑基、凝结金丹就在今日！</p>
                  </div>
                </div>

                <InteractiveQuiz
                  questions={chapter.quizzes}
                  onCorrectAnswer={onCorrectAnswer}
                  savedAnswers={cultivationState.answeredQuestions}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
