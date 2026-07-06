/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Hourglass, Eye, Compass } from "lucide-react";

type Person = "1st-singular" | "3rd-singular" | "plural";
type Time = "present" | "past" | "future";
type Aspect = "simple" | "continuous" | "perfect";

interface VerbConfig {
  base: string;
  sForm: string;
  past: string;
  ing: string;
  pp: string;
  meaning: string;
}

const VERBS: Record<string, VerbConfig> = {
  cultivate: {
    base: "cultivate",
    sForm: "cultivates",
    past: "cultivated",
    ing: "cultivating",
    pp: "cultivated",
    meaning: "修炼 (to accumulate spiritual energy)",
  },
  deploy: {
    base: "deploy",
    sForm: "deploys",
    past: "deployed",
    ing: "deploying",
    pp: "deployed",
    meaning: "部署 (to launch a magic array or software)",
  },
  debug: {
    base: "debug",
    sForm: "debugs",
    past: "debugged",
    ing: "debugging",
    pp: "debugged",
    meaning: "调试 (to remove faults from system/veins)",
  },
};

export const TenseMatrix: React.FC = () => {
  const [selectedVerbKey, setSelectedVerbKey] = useState<string>("cultivate");
  const [person, setPerson] = useState<Person>("3rd-singular");
  const [time, setTime] = useState<Time>("present");
  const [aspect, setAspect] = useState<Aspect>("simple");

  const verb = VERBS[selectedVerbKey];

  // Logic to generate the conjugation sentence, auxiliary, and explanations
  const getConjugation = (v: VerbConfig, p: Person, t: Time, a: Aspect) => {
    let subject = "I";
    let bePresent = "am";
    let bePast = "was";
    let havePresent = "have";
    let isThirdSingular = false;

    if (p === "1st-singular") {
      subject = "I";
      bePresent = "am";
      bePast = "was";
      havePresent = "have";
    } else if (p === "3rd-singular") {
      subject = "Han Li (韩立)";
      bePresent = "is";
      bePast = "was";
      havePresent = "has";
      isThirdSingular = true;
    } else {
      subject = "We (我们)";
      bePresent = "are";
      bePast = "were";
      havePresent = "have";
    }

    let result = "";
    let formula = "";
    let tidbit = "";

    // Grid selection triggers conjugation
    if (t === "present") {
      if (a === "simple") {
        result = `${subject} ${isThirdSingular ? v.sForm : v.base} every single day.`;
        formula = `主语 + 动词原形 / 动词单三 (s/es)`;
        tidbit = `此乃「常态恒定法则」。韩立每天都坚持${v.meaning}，就像日月东升，稳扎稳打。注意单三主语，尾部需加s！`;
      } else if (a === "continuous") {
        result = `${subject} ${bePresent} ${v.ing} right now under the willow tree.`;
        formula = `主语 + am/is/are + 动词-ing`;
        tidbit = `此乃「当下运行法门」。灵力正在体内奔涌，${v.meaning}绝不能被打断。Be动词根据人称变换（am/is/are），后接-ing。`;
      } else if (a === "perfect") {
        result = `${subject} ${havePresent} already ${v.pp} for three hours.`;
        formula = `主语 + have/has + 过去分词 (p.p.)`;
        tidbit = `此乃「功成出关法门」。动作在过去已然开始，且对当下的修为产生了深刻的影响。第三人称单数须用 has 配合过去分词！`;
      }
    } else if (t === "past") {
      if (a === "simple") {
        result = `${subject} ${v.past} the database yesterday before the incident occurred.`;
        formula = `主语 + 动词过去式 (did)`;
        tidbit = `此乃「既往封存法门」。事情发生在过去，且与当前完全割裂，是一颗已经凝固在历史长河中的灵丹。`;
      } else if (a === "continuous") {
        result = `${subject} ${bePast} ${v.ing} when the elder entered the room.`;
        formula = `主语 + was/were + 动词-ing`;
        tidbit = `此乃「时空定格法门」。在过去某一个特定时间点，那个动作正在如火如荼地进行（was/were + -ing），常用于描述突发状况的背景。`;
      } else if (a === "perfect") {
        result = `${subject} had already ${v.pp} before his colleagues arrived.`;
        formula = `主语 + had + 过去分词 (p.p.)`;
        tidbit = `此乃「太上回溯法门（过去的过去）」。在过去的某一个节点之前，早就完成了该项法术运作。无论何种人称，一律用 had 统领！`;
      }
    } else if (t === "future") {
      if (a === "simple") {
        result = `${subject} will ${v.base} the system tomorrow afternoon.`;
        formula = `主语 + will + 动词原形`;
        tidbit = `此乃「预言卜算期许」。指未来必定发生之事。无论主语是凡人还是仙人，will后面一律接最纯粹的动词原形！`;
      } else if (a === "continuous") {
        result = `${subject} will be ${v.ing} at this time tomorrow.`;
        formula = `主语 + will be + 动词-ing`;
        tidbit = `此乃「未来预演之相」。可以预见，明天的这个时候，必定在全神贯注地进行着这项动作。will be + -ing 构成未来进行状态。`;
      } else if (a === "perfect") {
        result = `${subject} will have ${v.pp} by the time the inspector arrives next week.`;
        formula = `主语 + will have + 过去分词 (p.p.)`;
        tidbit = `此乃「因果收束大法（将来完成）」。到未来某个时间节点，该动作想必已经彻底宣告结束。主语 + will have + 过去分词。`;
      }
    }

    return { result, formula, tidbit };
  };

  const { result, formula, tidbit } = getConjugation(verb, person, time, aspect);

  return (
    <div className="bg-white rounded-3xl border border-emerald-500/20 p-6 md:p-8 shadow-xl shadow-emerald-950/5 relative overflow-hidden">
      {/* Absolute Decorative Watermark */}
      <div className="absolute right-[-10px] bottom-[-20px] text-slate-100 font-mono text-9xl font-bold select-none pointer-events-none opacity-40">
        TENSE
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            时态玄天大阵 (Interactive Tense Simulator)
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            自由拨动时空节点，领悟动作变化的本源奥秘。
          </p>
        </div>
        
        {/* Verb selector */}
        <div className="flex gap-1.5 bg-slate-100 p-1 rounded-xl self-stretch md:self-auto">
          {Object.keys(VERBS).map((vKey) => (
            <button
              key={vKey}
              onClick={() => setSelectedVerbKey(vKey)}
              className={`flex-1 md:flex-none px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedVerbKey === vKey
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {vKey.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Person selector */}
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-slate-400" /> 1. 选择人称 (Person)
            </span>
            <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200/50">
              <button
                onClick={() => setPerson("1st-singular")}
                className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                  person === "1st-singular"
                    ? "bg-white text-slate-900 border border-slate-200/80 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                第一人称 (I)
              </button>
              <button
                onClick={() => setPerson("3rd-singular")}
                className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                  person === "3rd-singular"
                    ? "bg-white text-slate-900 border border-slate-200/80 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                第三单三 (Han Li)
              </button>
              <button
                onClick={() => setPerson("plural")}
                className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                  person === "plural"
                    ? "bg-white text-slate-900 border border-slate-200/80 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                复数 (We)
              </button>
            </div>
          </div>

          {/* Time selector */}
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Hourglass className="w-3.5 h-3.5 text-slate-400" /> 2. 选择时间 (Time)
            </span>
            <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200/50">
              <button
                onClick={() => setTime("past")}
                className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                  time === "past"
                    ? "bg-amber-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                过去 (Past)
              </button>
              <button
                onClick={() => setTime("present")}
                className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                  time === "present"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                现在 (Present)
              </button>
              <button
                onClick={() => setTime("future")}
                className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                  time === "future"
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                将来 (Future)
              </button>
            </div>
          </div>

          {/* Aspect selector */}
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-slate-400" /> 3. 选择状态 (Aspect)
            </span>
            <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200/50">
              <button
                onClick={() => setAspect("simple")}
                className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                  aspect === "simple"
                    ? "bg-white text-slate-900 border border-slate-200/80 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                一般 (Simple)
              </button>
              <button
                onClick={() => setAspect("continuous")}
                className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                  aspect === "continuous"
                    ? "bg-white text-slate-900 border border-slate-200/80 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                进行 (Continuous)
              </button>
              <button
                onClick={() => setAspect("perfect")}
                className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                  aspect === "perfect"
                    ? "bg-white text-slate-900 border border-slate-200/80 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                完成 (Perfect)
              </button>
            </div>
          </div>
        </div>

        {/* Display Panel Column */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950 text-slate-100 rounded-2xl p-6 border border-slate-800 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${person}-${time}-${aspect}-${selectedVerbKey}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Formula */}
              <div>
                <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded">
                  阵法公式 (Formula)
                </span>
                <p className="font-mono text-sm mt-2 text-slate-300 font-medium">
                  {formula}
                </p>
              </div>

              {/* Conjugated Sentence */}
              <div>
                <span className="text-[10px] font-mono tracking-wider text-teal-400 uppercase bg-teal-950/50 border border-teal-500/20 px-2 py-0.5 rounded">
                  阵法产物 (Conjugation Output)
                </span>
                <p className="font-sans text-lg md:text-xl font-semibold mt-2 text-white leading-relaxed">
                  {result}
                </p>
              </div>

              {/* Han Li's explanation */}
              <div className="border-t border-slate-800 pt-5 mt-4">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-600/30 border border-emerald-500/30 flex items-center justify-center text-xs text-emerald-400 shrink-0 select-none font-bold">
                    韩
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-emerald-400">
                      韩立师尊的传功心得：
                    </h5>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      {tidbit}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
