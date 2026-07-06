/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CultivationState, Realm } from "../types";
import { Shield, Sparkles, Award, Star, Flame } from "lucide-react";
import { motion } from "motion/react";

interface RealmProgressProps {
  state: CultivationState;
}

export const getRealmDetails = (score: number) => {
  if (score < 30) {
    return {
      realm: Realm.Mortal,
      desc: "初入红尘，未通灵力。英语单词、代词傻傻分不清，急需韩立师尊指点迷津！",
      nextThreshold: 30,
      prevThreshold: 0,
      color: "from-slate-400 to-slate-600 text-slate-800 border-slate-300",
      bgLight: "bg-slate-50",
      tokenColor: "#64748b",
      quote: "韩立拍了拍你的肩膀：‘凡人修仙，首重毅力。先将主谓宾等六大基本招式练熟，再谈御剑！’",
    };
  } else if (score < 70) {
    return {
      realm: Realm.QiRefining,
      desc: "引气入体，经脉初通。已掌握代词、及物/不及物动词与核心时态，能发出细微的引力术！",
      nextThreshold: 70,
      prevThreshold: 30,
      color: "from-teal-400 to-emerald-600 text-emerald-800 border-emerald-300",
      bgLight: "bg-emerald-50/40",
      tokenColor: "#10b981",
      quote: "韩立赞许点头：‘不错，引气有成。你已能熟练划分时态阴阳。继续打坐，攻克分词玄关！’",
    };
  } else if (score < 120) {
    return {
      realm: Realm.FoundationEstablishment,
      desc: "筑基大成，寿元翻倍。掌握分词、句法六大骨架，法力稳固，能驾驭初阶法宝遨游天际！",
      nextThreshold: 120,
      prevThreshold: 70,
      color: "from-blue-400 to-indigo-600 text-indigo-800 border-indigo-300",
      bgLight: "bg-indigo-50/40",
      tokenColor: "#6366f1",
      quote: "韩立眼神微凝：‘筑基稳固，丹田已辟！英语各种转换对线已初显锋芒。定语从句乃是重中之重，不可懈怠！’",
    };
  } else if (score < 180) {
    return {
      realm: Realm.CoreFormation,
      desc: "金丹凝结，神通大显。熟谙各种定语/状语/名词性复合从句，神识强悍，自创英语剑阵！",
      nextThreshold: 180,
      prevThreshold: 120,
      color: "from-amber-400 to-orange-600 text-amber-800 border-amber-300",
      bgLight: "bg-amber-50/40",
      tokenColor: "#f59e0b",
      quote: "韩立抱拳致意：‘道友金丹已成，当真惊才绝艳！英语在合同、技术大会中已能杀伐果断。只差最后一步虚拟语气，便可碎丹成婴！’",
    };
  } else {
    return {
      realm: Realm.NascentSoul,
      desc: "碎丹成婴，元神出窍！通晓虚拟时空倒退大法，举手投足间，天地同悲。英语修仙界一代泰斗！",
      nextThreshold: 300,
      prevThreshold: 180,
      color: "from-purple-500 to-fuchsia-600 text-purple-800 border-purple-300",
      bgLight: "bg-purple-50/40",
      tokenColor: "#a855f7",
      quote: "韩立长揖到地：‘道友法力通天，已证元婴大道！时空倒退原则在你手中运转自如。这本英语修仙笔记，便赠与道友，守护人界安宁！’",
    };
  }
};

export const RealmProgress: React.FC<RealmProgressProps> = ({ state }) => {
  const details = getRealmDetails(state.score);
  const range = details.nextThreshold - details.prevThreshold;
  const currentProgress = state.score - details.prevThreshold;
  const progressPercent = Math.min(100, Math.max(0, (currentProgress / range) * 100));

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
            <Flame className="w-5 h-5 text-amber-500 fill-amber-500 animate-pulse" />
            学生修仙境界 (Cultivation Realm)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            积累灵力值，飞升更高的英语语法层次
          </p>
        </div>
        <div className="text-slate-900 bg-slate-100 px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          灵力值: {state.score} CP
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Token Badge */}
        <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
          <motion.div
            animate={{
              y: [-3, 3, -3],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Jade medallion visual */}
            <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-md">
              {/* Outer circle decoration */}
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke={details.tokenColor}
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="#0f172a"
                stroke={details.tokenColor}
                strokeWidth="3"
              />
              {/* Center hole mimicking ancient coins */}
              <rect
                x="40"
                y="40"
                width="20"
                height="20"
                rx="4"
                fill="#f8fafc"
                stroke={details.tokenColor}
                strokeWidth="2.5"
              />
              {/* Inner glowing effect */}
              <circle cx="50" cy="50" r="28" fill="none" stroke={`${details.tokenColor}33`} strokeWidth="10" />
            </svg>
            <Shield className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-20" />
          </motion.div>
          
          <span className="text-sm font-extrabold text-slate-800 mt-3 tracking-tight">
            {details.realm}
          </span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
            ACTIVE REALM
          </span>
        </div>

        {/* Progress Gauge */}
        <div className="md:col-span-8 space-y-4">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                灵力气脉进度
              </span>
              <span>
                {state.score} / {details.nextThreshold} CP
              </span>
            </div>
            
            {/* Custom styled progress container */}
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/60 p-0.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${details.color}`}
              />
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            {details.desc}
          </p>

          {/* Floating encouragement note */}
          <div className={`p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 italic ${details.bgLight}`}>
            {details.quote}
          </div>
        </div>
      </div>

      {/* Achievements List */}
      <div className="mt-5 border-t border-slate-100 pt-4">
        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1">
          <Award className="w-3.5 h-3.5 text-slate-400" /> 达成历练篇章 (Completed Chapters)
        </span>
        <div className="flex flex-wrap gap-2">
          {state.completedChapters.length === 0 ? (
            <span className="text-xs text-slate-400 italic">暂未通过试炼，赶紧去答题斩魔吧！</span>
          ) : (
            state.completedChapters.map((chapId) => (
              <span
                key={chapId}
                className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1"
              >
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                Ch.{chapId.replace("chap-", "")} 破阵
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
