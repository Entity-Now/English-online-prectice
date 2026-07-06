/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { QuizQuestion } from "../types";
import { Check, X, ShieldAlert, Award, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InteractiveQuizProps {
  questions: QuizQuestion[];
  onCorrectAnswer: (id: string, isFirstTime: boolean) => void;
  savedAnswers: Record<string, number>;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  questions,
  onCorrectAnswer,
  savedAnswers,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(savedAnswers);
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>(
    Object.keys(savedAnswers).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (submittedAnswers[questionId]) return; // already answered
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIdx,
    });
  };

  const handleCheckAnswer = (q: QuizQuestion) => {
    const questionId = q.id;
    const selectedIdx = selectedAnswers[questionId];
    if (selectedIdx === undefined) return;

    setSubmittedAnswers({
      ...submittedAnswers,
      [questionId]: true,
    });

    if (selectedIdx === q.correctAnswer) {
      onCorrectAnswer(questionId, true);
    } else {
      onCorrectAnswer(questionId, false);
    }
  };

  return (
    <div className="space-y-8">
      {questions.map((q, idx) => {
        const selectedIdx = selectedAnswers[q.id];
        const isSubmitted = submittedAnswers[q.id];
        const isCorrect = selectedIdx === q.correctAnswer;

        return (
          <div
            key={q.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-sm relative overflow-hidden"
          >
            {/* Index badge */}
            <div className="absolute top-0 left-0 bg-slate-100 text-slate-500 font-mono text-xs font-bold px-3 py-1 rounded-br-xl">
              Q{idx + 1}
            </div>

            <div className="mt-2 pl-4 border-l-2 border-emerald-500">
              <h4 className="text-sm md:text-base font-bold text-slate-900 leading-relaxed">
                {q.question}
              </h4>
            </div>

            {/* Options list */}
            <div className="mt-5 space-y-2.5">
              {q.options.map((option, oIdx) => {
                let optionStyle = "border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-700";
                
                if (selectedIdx === oIdx) {
                  optionStyle = "border-slate-900 bg-slate-900 text-white font-semibold";
                }

                if (isSubmitted) {
                  if (oIdx === q.correctAnswer) {
                    optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold";
                  } else if (selectedIdx === oIdx && !isCorrect) {
                    optionStyle = "border-rose-300 bg-rose-50 text-rose-950";
                  } else {
                    optionStyle = "border-slate-100 bg-slate-50/30 text-slate-400 cursor-not-allowed";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    disabled={isSubmitted}
                    onClick={() => handleSelectOption(q.id, oIdx)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs md:text-sm transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {isSubmitted && oIdx === q.correctAnswer && (
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {isSubmitted && selectedIdx === oIdx && !isCorrect && (
                      <X className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="mt-5 flex items-center justify-between gap-4">
              <span className="text-[11px] text-slate-400 font-medium">
                {isSubmitted
                  ? isCorrect
                    ? "🎉 破阵成功，灵力增强！"
                    : "❌ 阵法出错，再接再厉！"
                  : selectedIdx !== undefined
                  ? "👉 点击确认激发阵眼"
                  : "👈 请先选择一个符文答案"}
              </span>

              {!isSubmitted && (
                <button
                  disabled={selectedIdx === undefined}
                  onClick={() => handleCheckAnswer(q)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedIdx !== undefined
                      ? "bg-slate-900 hover:bg-slate-800 text-white cursor-pointer shadow-md"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  确认答案 (Check)
                </button>
              )}
            </div>

            {/* Explanations block */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mt-5 pt-4 border-t border-slate-100"
                >
                  <div className="space-y-4">
                    {/* Grammar explanation */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/50">
                      <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                        解题功法分析 (Grammar Rule)
                      </h5>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>

                    {/* Han Li's lore tips */}
                    <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100 flex items-start gap-2.5">
                      <Award className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-extrabold text-emerald-900 uppercase tracking-wide">
                          韩立师尊的传法秘诀 (Cultivator Tidbit)
                        </h5>
                        <p className="text-xs text-emerald-950 mt-1 leading-relaxed">
                          {q.lessonTidbit}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
