/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, CheckCircle, RefreshCw, Trophy, BookOpen } from "lucide-react";

interface Puzzle {
  id: number;
  scrambled: string[];
  correct: string[];
  structure: string;
  scenario: string;
  translation: string;
  hint: string;
  explanation: string;
}

const PUZZLES: Puzzle[] = [
  {
    id: 1,
    scrambled: ["crashed", "system", "The", "suddenly"],
    correct: ["The", "system", "crashed", "suddenly"],
    structure: "主 + 谓 (S + V)",
    scenario: "生产环境服务器突然宕机",
    translation: "系统突然崩溃了。",
    hint: "不及物动词 'crashed' 不需要接宾语。'suddenly' 是副词修饰动词。",
    explanation: "The system (主语) + crashed (谓语动词，不及物) + suddenly (状语，修饰crashed)。"
  },
  {
    id: 2,
    scrambled: ["designed", "Han Li", "the custom algorithm", "carefully"],
    correct: ["Han Li", "designed", "the custom algorithm", "carefully"],
    structure: "主 + 谓 + 宾 (S + V + O)",
    scenario: "韩立为了隐藏身份，精心编写加密算法",
    translation: "韩立仔细设计了定制算法。",
    hint: "及物动词 'designed' 后面必须紧接动作的承受者 'the custom algorithm'。",
    explanation: "Han Li (主语) + designed (谓语及物动词) + the custom algorithm (宾语) + carefully (副词作状语)。"
  },
  {
    id: 3,
    scrambled: ["the candidate", "The director", "the chief architect", "appointed"],
    correct: ["The director", "appointed", "the candidate", "the chief architect"],
    structure: "主 + 谓 + 宾 + 宾补 (S + V + O + C)",
    scenario: "元婴期研发总监任命韩立为首席架构师",
    translation: "总监任命这位候选人为首席架构师。",
    hint: "及物动词 'appointed' 后接宾语 'the candidate'，后面还需要补充身份 'the chief architect' 作宾补。",
    explanation: "The director (主语) + appointed (谓语) + the candidate (宾语) + the chief architect (宾语补足语，修饰candidate)。"
  },
  {
    id: 4,
    scrambled: ["us", "He", "a comprehensive server backup", "sent"],
    correct: ["He", "sent", "us", "a comprehensive server backup"],
    structure: "主 + 谓 + 间宾 + 直宾 (S + V + IO + DO)",
    scenario: "韩立给团队发送服务器全量备份",
    translation: "他给我们发了一份全面的服务器备份。",
    hint: "'sent' 是授予动词，先接人 (间宾 'us')，再接物 (直宾 'a comprehensive server backup')。",
    explanation: "He (主语) + sent (谓语双宾动词) + us (间接宾语，人) + a comprehensive server backup (直接宾语，物)。"
  },
  {
    id: 5,
    scrambled: ["highly reliable", "infrastructure", "The cloud", "looks"],
    correct: ["The cloud", "infrastructure", "looks", "highly reliable"],
    structure: "主 + 系 + 表 (S + Link-V + P)",
    scenario: "韩立在做云端架构的安全合规评估",
    translation: "云端基础设施看起来高度可靠。",
    hint: "系动词 'looks' 连接主语 'The cloud infrastructure' 和形容词短语表语 'highly reliable'。",
    explanation: "The cloud infrastructure (主语) + looks (感官系动词) + highly reliable (形容词短语作表语，说明主语特征)。"
  }
];

interface SentenceBuilderProps {
  onSuccessAward?: (points: number) => void;
}

export const SentenceBuilder: React.FC<SentenceBuilderProps> = ({ onSuccessAward }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [scoreEarned, setScoreEarned] = useState<boolean>(false);

  const puzzle = PUZZLES[currentIdx];

  // Initialize and shuffle words
  useEffect(() => {
    if (puzzle) {
      // Create a shuffled copy of scrambled
      setAvailableWords([...puzzle.scrambled].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
      setIsCompleted(false);
      setIsCorrect(null);
      setScoreEarned(false);
    }
  }, [currentIdx]);

  const handleWordClick = (word: string, isFromSelected: boolean) => {
    if (isCompleted) return;

    if (isFromSelected) {
      // Remove from selected, return to available
      setSelectedWords(selectedWords.filter((w) => w !== word));
      setAvailableWords([...availableWords, word]);
      setIsCorrect(null);
    } else {
      // Add to selected, remove from available
      setSelectedWords([...selectedWords, word]);
      setAvailableWords(availableWords.filter((w) => w !== word));
    }
  };

  const handleVerify = () => {
    const isMatching = selectedWords.join(" ") === puzzle.correct.join(" ");
    setIsCompleted(isMatching);
    setIsCorrect(isMatching);

    if (isMatching) {
      setIsCompleted(true);
      if (!scoreEarned) {
        if (onSuccessAward) onSuccessAward(20); // award 20 spiritual energy
        setScoreEarned(true);
      }
    } else {
      // Shake animation or incorrect hint
    }
  };

  const handleReset = () => {
    setAvailableWords([...puzzle.scrambled].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setIsCompleted(false);
    setIsCorrect(null);
  };

  const handleNext = () => {
    if (currentIdx < PUZZLES.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // wrap around
      setCurrentIdx(0);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-emerald-500/20 p-6 md:p-8 shadow-xl shadow-emerald-950/5 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Hammer className="w-5 h-5 text-emerald-600 animate-pulse" />
            句法演练阵法 (Sentence Structuring Array)
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            将散乱的词汇，按照六大基本句式复原，破解阵眼！
          </p>
        </div>
        <div className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1 shrink-0">
          <BookOpen className="w-3.5 h-3.5" />
          关卡: {currentIdx + 1} / {PUZZLES.length}
        </div>
      </div>

      {/* Scenario display card */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 mb-6">
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
          时空演练场景 (Context)
        </span>
        <div className="text-sm font-semibold text-slate-800 mt-1 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          {puzzle.scenario}
        </div>
        <div className="text-xs text-slate-500 mt-1 italic">
          译文：{puzzle.translation}
        </div>
        <div className="text-xs font-medium text-emerald-700 bg-emerald-50/50 rounded-lg px-2.5 py-1.5 mt-3 border border-emerald-100">
          <strong>破阵提示：</strong> {puzzle.hint}
        </div>
      </div>

      {/* Slots area */}
      <div className="mb-6">
        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
          阵图槽位 (Your Assembly)
        </span>
        <div className="min-h-[64px] border-2 border-dashed border-slate-200 bg-slate-50/30 rounded-2xl p-3 flex flex-wrap gap-2.5 items-center justify-start transition-all">
          <AnimatePresence>
            {selectedWords.map((word) => (
              <motion.button
                key={word}
                layoutId={`word-${word}`}
                onClick={() => handleWordClick(word, true)}
                className="bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-300/60 px-3.5 py-1.5 rounded-xl text-sm font-semibold shadow-sm transition-all flex items-center cursor-pointer"
              >
                {word}
              </motion.button>
            ))}
          </AnimatePresence>
          {selectedWords.length === 0 && (
            <span className="text-slate-400 text-xs mx-auto py-2">
              点击下方词汇放置于此，拼出正确句子
            </span>
          )}
        </div>
      </div>

      {/* Shuffled pool */}
      <div className="mb-8">
        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
          散落符文 (Scrambled Runes)
        </span>
        <div className="bg-slate-50/60 border border-slate-200/50 rounded-2xl p-4 flex flex-wrap gap-3 min-h-[64px] items-center justify-center">
          <AnimatePresence>
            {availableWords.map((word) => (
              <motion.button
                key={word}
                layoutId={`word-${word}`}
                onClick={() => handleWordClick(word, false)}
                className="bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300 border border-slate-200/80 px-3.5 py-2 rounded-xl text-sm font-medium shadow-sm cursor-pointer transition-all active:scale-95"
              >
                {word}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Output and Verification actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
        <div className="flex gap-2.5">
          <button
            onClick={handleReset}
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            重置阵法 (Reset)
          </button>
          
          <button
            onClick={handleVerify}
            disabled={selectedWords.length === 0 || isCompleted}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              isCompleted
                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                : selectedWords.length === 0
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/10"
            }`}
          >
            {isCompleted ? <CheckCircle className="w-3.5 h-3.5" /> : null}
            {isCompleted ? "破阵成功!" : "检验阵法 (Verify)"}
          </button>
        </div>

        {isCompleted && (
          <button
            onClick={handleNext}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ml-auto shadow-md"
          >
            下一大阵 (Next Chapter Array) &rarr;
          </button>
        )}
      </div>

      {/* Success Details Drawer */}
      <AnimatePresence>
        {isCorrect !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-6"
          >
            {isCorrect ? (
              <div className="bg-emerald-950 text-slate-100 rounded-2xl p-5 border border-emerald-500/30 flex items-start gap-4">
                <div className="bg-emerald-900/60 border border-emerald-500/40 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-emerald-400 text-lg font-bold">
                  <Trophy className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-800">
                      阵法归类: {puzzle.structure}
                    </span>
                    <span className="text-xs font-semibold text-amber-300">
                      获得 20 灵力值!
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    拼合无误：{puzzle.correct.join(" ")}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>结构剖析：</strong> {puzzle.explanation}
                  </p>
                  <p className="text-xs text-slate-400 border-t border-emerald-900/80 pt-2 italic">
                    韩立师尊赞许：五脏六腑经络贯通，此等基本功极为扎实，足以在修行界立足！
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-rose-50 text-rose-900 rounded-2xl p-4 border border-rose-200 flex items-start gap-3">
                <div className="bg-rose-100 text-rose-600 p-2 rounded-xl shrink-0">
                  ⚠️
                </div>
                <div>
                  <h4 className="text-xs font-bold text-rose-800">阵法受阻，气脉未通</h4>
                  <p className="text-xs text-rose-700 mt-1 leading-relaxed">
                    词汇位置不合语法逻辑，灵力发生阻滞。请参考上方“破阵提示”重新调整词语。
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
