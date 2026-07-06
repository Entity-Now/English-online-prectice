/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { WordBreakdown } from "../types";
import { Award, Zap } from "lucide-react";

interface VocabularyCardProps {
  vocab: WordBreakdown;
}

export const VocabularyCard: React.FC<VocabularyCardProps> = ({ vocab }) => {
  return (
    <div className="bg-[#faf9f5] border border-emerald-500/10 rounded-2xl p-5 relative overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all flex flex-col justify-between">
      {/* Woodblock scroll overlay effect */}
      <div className="absolute right-0 top-0 w-16 h-16 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-bl-3xl pointer-events-none" />

      <div>
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="text-lg font-bold text-slate-800 font-sans tracking-tight">
              {vocab.word}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                {vocab.phonetic}
              </span>
              <span className="text-xs font-bold text-emerald-800 italic">
                {vocab.partOfSpeech}
              </span>
            </div>
          </div>
          <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-[10px]">
            #
          </span>
        </div>

        {/* Translation */}
        <p className="text-sm font-semibold text-slate-900 mt-3 border-l-2 border-emerald-600 pl-2">
          {vocab.meaning}
        </p>

        {/* Root analysis */}
        <div className="mt-3.5 bg-white rounded-xl p-3 border border-slate-200/50">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-500 shrink-0" />
            词根法门 (Etymology / Roots)
          </span>
          <p className="text-xs text-slate-700 mt-1 font-sans">
            {vocab.rootAnalysis}
          </p>
        </div>

        {/* Examples */}
        <div className="mt-4 space-y-1.5">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            符文演练 (Usage in context)
          </span>
          <p className="text-xs text-slate-800 font-medium leading-relaxed italic">
            &ldquo;{vocab.example}&rdquo;
          </p>
          <p className="text-xs text-slate-500">
            {vocab.translation}
          </p>
        </div>
      </div>

      {/* Cultivator mnemonic */}
      <div className="mt-5 pt-3.5 border-t border-slate-200/60 flex items-start gap-1.5 bg-emerald-50/40 rounded-xl p-2.5 border border-emerald-100">
        <Award className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
        <div>
          <span className="block text-[9px] font-extrabold text-emerald-800 uppercase tracking-wider">
            韩立独门记忆心法 (Mnemonic)
          </span>
          <p className="text-[11px] text-emerald-950 mt-0.5 leading-relaxed">
            {vocab.word.startsWith("repo")
              ? "repository 谐音「若不提供密码，就无法打开秘密代码金库仓库」！"
              : vocab.word.startsWith("auto")
              ? "autonomy 即「auto (自己) + nomy (制定法规)」，如同散修自立门户，拥有独立主权！"
              : vocab.word.startsWith("asc")
              ? "ascend 即「不断攀爬 asc 升天劫」，金丹飞升天界之景。"
              : vocab.word.startsWith("accom")
              ? "accommodate 意为「提供周全住宿」，出门历练、住店入住必备，accomm 极其温暖。"
              : vocab.word.startsWith("alloc")
              ? "allocate 即「分配灵石到指定 location」，在丹田分配资源防反噬。"
              : vocab.word.startsWith("comp")
              ? "compiler 即「汇聚 compile 万卷法书的综合玉简」，直接运行机器码。"
              : vocab.word.startsWith("sched")
              ? "schedule 即「记录历练安排、宗门大比时刻表的金书铁卷」。"
              : vocab.word.startsWith("trans")
              ? "transit 意为「通过跨越 trans 进行中转」，中转站、跨界大传送阵运转时！"
              : vocab.word.startsWith("start")
              ? "startle 意为「吓了一大跳」，就像在打坐时，外面突然雷云暴动 (startle)。"
              : vocab.word.startsWith("cust")
              ? "customize 即「根据自身修行功法定制 customize 灵剑」，专属护身法宝。"
              : vocab.word.startsWith("ins")
              ? "insightful 意为「一双金睛神目，能洞察 in-sight 阵法核心」，真知灼见！"
              : vocab.word.startsWith("vuln")
              ? "vulnerability 意为「仙府大阵的薄弱防线漏洞」，必须加补丁(patch)加封印。"
              : vocab.word.startsWith("cred")
              ? "credential 意为「信物，通行令牌」，没有 credential 进不了宗门阵法。"
              : vocab.word.startsWith("obv")
              ? "obvious 意为「明摆在大路 (via) 前面」，极度明显，人尽皆知。"
              : vocab.word.startsWith("stip")
              ? "stipulate 意为「在魂誓玉简上明文规定，签契约不得违反」，规定！"
              : vocab.word.startsWith("conc")
              ? "concession 即「双方共同退一步 (cede) 以达成契约，相互让步妥协」。"
              : vocab.word.startsWith("miti")
              ? "mitigate 即「将暴躁灵力抚平、减轻/缓解 (miti) 损失痛苦」，化干戈为玉帛。"
              : "retroactive 即「将法效往前追溯 retroactive」，追溯到历练之初。"}
          </p>
        </div>
      </div>
    </div>
  );
};
