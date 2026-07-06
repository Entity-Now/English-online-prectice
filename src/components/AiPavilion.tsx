import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Settings,
  Send,
  RefreshCw,
  Plus,
  Trash2,
  HelpCircle,
  CheckCircle,
  AlertTriangle,
  Compass,
  BookOpen,
  Sword,
  Award,
  KeyRound,
  Link,
  ChevronRight,
  Database,
  Terminal,
  BrainCircuit,
  Lock,
  ThumbsUp,
  X,
  AlertCircle
} from "lucide-react";
import { GrammarFormula, WordBreakdown, CultivationState } from "../types";

// Key for storage
const AI_CONFIG_KEY = "han_li_ai_config_v1";
const AI_SAVED_FORMULAS_KEY = "han_li_ai_saved_formulas_v1";
const AI_SAVED_WORDS_KEY = "han_li_ai_saved_words_v1";

interface AiConfig {
  apiUrl: string;
  apiKey: string;
  modelName: string;
}

const DEFAULT_CONFIG: AiConfig = {
  apiUrl: "https://api.openai.com/v1",
  apiKey: "",
  modelName: "gpt-4o-mini",
};

interface AiPavilionProps {
  state: CultivationState;
  onAward: (points: number) => void;
}

// Helper to parse JSON safely from LLM output
function parseJSONFromResponse<T>(text: string): T {
  try {
    return JSON.parse(text) as T;
  } catch (e) {
    // Extract JSON from ```json ... ``` markdown block
    const match = text.match(/```json\s*([\s\S]*?)\s*```/);
    if (match && match[1]) {
      try {
        return JSON.parse(match[1]) as T;
      } catch (inner) {
        console.error("Failed parsing nested markdown JSON", inner);
      }
    }
    // Extract JSON from any ``` ... ``` markdown block
    const matchGeneral = text.match(/```\s*([\s\S]*?)\s*```/);
    if (matchGeneral && matchGeneral[1]) {
      try {
        return JSON.parse(matchGeneral[1]) as T;
      } catch (inner) {
        console.error("Failed parsing nested general markdown JSON", inner);
      }
    }
    // Slicing approach as fallback
    const firstOpen = text.indexOf("{");
    const firstSquare = text.indexOf("[");
    let startIdx = -1;
    let endIdx = -1;

    if (firstOpen !== -1 && (firstSquare === -1 || firstOpen < firstSquare)) {
      startIdx = firstOpen;
      endIdx = text.lastIndexOf("}");
    } else if (firstSquare !== -1) {
      startIdx = firstSquare;
      endIdx = text.lastIndexOf("]");
    }

    if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
      try {
        return JSON.parse(text.slice(startIdx, endIdx + 1)) as T;
      } catch (inner) {
        console.error("Failed parsing sliced string", inner);
      }
    }
    throw new Error("天机法旨格式有误，未找到可解析之天书 JSON：" + text);
  }
}

export const AiPavilion: React.FC<AiPavilionProps> = ({ state, onAward }) => {
  // Configuration State
  const [config, setConfig] = useState<AiConfig>(DEFAULT_CONFIG);
  const [showConfig, setShowConfig] = useState(false);
  const [testStatus, setTestStatus] = useState<"idle" | "testing" | "success" | "error">("idle");
  const [testMessage, setTestMessage] = useState("");

  // Sub-tabs: "formulas" (句式生成), "vocab" (词法开天), "trial" (灵能试炼)
  const [activeTab, setActiveTab] = useState<"formulas" | "vocab" | "trial">("formulas");

  // Loading & Results
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // 1. Formulas generator states
  const [formulaTopic, setFormulaTopic] = useState("虚拟语气与时空倒退");
  const [customFormulaTopic, setCustomFormulaTopic] = useState("");
  const [generatedFormulas, setGeneratedFormulas] = useState<GrammarFormula[]>([]);
  const [savedFormulas, setSavedFormulas] = useState<GrammarFormula[]>([]);

  // 2. Vocabulary Explorer states
  const [vocabWord, setVocabWord] = useState("");
  const [exploredWord, setExploredWord] = useState<WordBreakdown & { spiritualAdvice?: string } | null>(null);
  const [savedWords, setSavedWords] = useState<WordBreakdown[]>([]);

  // 3. Live Trial Arena states
  const [trialSentence, setTrialSentence] = useState("");
  const [trialLaw, setTrialLaw] = useState("时空从小到大法则 (Spatio-Temporal Sequence)");
  const [customTrialLaw, setCustomTrialLaw] = useState("");
  const [trialResult, setTrialResult] = useState<{
    isSuccess: boolean;
    corrected: string;
    assessment: string;
    scoreAwarded: number;
    feedback: string;
    spiritualAdvice: string;
  } | null>(null);

  // Success Celebration Modal
  const [showAwardModal, setShowAwardModal] = useState(false);
  const [lastAwardPoints, setLastAwardPoints] = useState(0);

  // Load from LocalStorage
  useEffect(() => {
    // Load config
    const savedConfig = localStorage.getItem(AI_CONFIG_KEY);
    if (savedConfig) {
      try {
        setConfig(JSON.parse(savedConfig));
      } catch (e) {
        console.error("Failed to load AI config", e);
      }
    } else {
      // Toggle config open initially if there's no API key to nudge them
      setShowConfig(true);
    }

    // Load saved formulas
    const formulas = localStorage.getItem(AI_SAVED_FORMULAS_KEY);
    if (formulas) {
      try {
        setSavedFormulas(JSON.parse(formulas));
      } catch (e) {
        console.error("Failed to load saved formulas", e);
      }
    }

    // Load saved words
    const words = localStorage.getItem(AI_SAVED_WORDS_KEY);
    if (words) {
      try {
        setSavedWords(JSON.parse(words));
      } catch (e) {
        console.error("Failed to load saved words", e);
      }
    }
  }, []);

  // Save config
  const handleSaveConfig = () => {
    localStorage.setItem(AI_CONFIG_KEY, JSON.stringify(config));
    setShowConfig(false);
    setTestStatus("idle");
    setTestMessage("");
  };

  // Reset config
  const handleResetConfig = () => {
    setConfig(DEFAULT_CONFIG);
    localStorage.removeItem(AI_CONFIG_KEY);
    setTestStatus("idle");
    setTestMessage("");
  };

  // Helper function to call the OpenAI-compatible API
  const callAI = async (prompt: string, systemPrompt?: string) => {
    if (!config.apiKey) {
      throw new Error("请先展开上方‘天机阁法阵配置’，并填入您的 OpenAI-compatible API 密钥！");
    }

    const messages = [];
    if (systemPrompt) {
      messages.push({ role: "system", content: systemPrompt });
    }
    messages.push({ role: "user", content: prompt });

    const response = await fetch(`${config.apiUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify({
        model: config.modelName,
        messages: messages,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorJson = await response.json().catch(() => ({}));
      const remoteMsg = errorJson?.error?.message || response.statusText;
      throw new Error(`天机法阵呼应失败 (${response.status}): ${remoteMsg}`);
    }

    const result = await response.json();
    return result.choices[0].message.content as string;
  };

  // Connection Test
  const handleTestConnection = async () => {
    if (!config.apiKey) {
      setTestStatus("error");
      setTestMessage("请输入 API 密钥后再试。");
      return;
    }
    setTestStatus("testing");
    setTestMessage("正在沟通天机大阵...");
    try {
      const responseText = await callAI(
        "请用韩立谨慎、少言的语气，在15字以内对弟子说一句话，确认天机法眼连接成功。",
        "你是在现代赛博世界修仙并担任英语导师的韩立。语气低沉、冷淡而稳重。"
      );
      setTestStatus("success");
      setTestMessage(`“${responseText.trim()}”`);
    } catch (err: any) {
      setTestStatus("error");
      setTestMessage(err.message || "沟通失败，请检查 URL 和 密钥是否端正。");
    }
  };

  // 1. GENERATE FORMULAS
  const handleGenerateFormulas = async () => {
    const topic = customFormulaTopic.trim() || formulaTopic;
    if (!topic) {
      setErrorMsg("请先选择或输入一个句法参悟课题！");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setGeneratedFormulas([]);

    const systemPrompt = `You are Han Li (韩立), the cautious, meticulous cultivator from 凡人修仙传, who has ascended to become a computer architecture & English syntax master in the modern era.
Your persona is analytical, composed, pragmatic, and heavily layered with traditional Chinese cultivation concepts.
You will help the user cultivate English grammar. Provide response strictly in valid JSON layout.`;

    const prompt = `弟子正欲修炼句法课题：【${topic}】。
请以此课题为阵眼，为弟子演绎 3 个威力巨大的【阵法句式】（英文语法句型）。

要求：
1. 必须完全符合【${topic}】的英语语法规则，结构严谨，讲解深奥。
2. 每一个句法公式，均必须用凡人修仙传的宗门、功法、灵能运行等玄妙机理进行解释（例如：虚拟语气的时空倒退对应了时空回溯大神通；主谓一致对应了法能与法宝的灵能振幅调谐等）。
3. 给出经典的现代赛博仙侠语境例句。

请务必返回且只返回一个合法的 JSON 数组，数组中包含且仅包含 3 个对象，其属性结构完全如下，禁止添加任何 Markdown 外壳（如 json 标签等）：
[
  {
    "structure": "句式结构，如：Subject + must not + Verb (original) + ...",
    "explanation": "韩立以修仙术语进行的句法解释（中文），需极为生动、扣紧修仙和逻辑对齐",
    "example": "符合该句式的英文句子",
    "translation": "英文句子的中文翻译（融入修仙设定）"
  }
]`;

    try {
      const responseText = await callAI(prompt, systemPrompt);
      const parsed = parseJSONFromResponse<GrammarFormula[]>(responseText);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setGeneratedFormulas(parsed);
      } else {
        throw new Error("天机演练无回响，未返回格式端正之句式数组。");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "激发法阵失败，可能是天机紊乱，请稍后重试。");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveFormula = (formula: GrammarFormula) => {
    // Check duplicate
    if (savedFormulas.some((f) => f.structure === formula.structure && f.example === formula.example)) {
      return;
    }
    const updated = [formula, ...savedFormulas];
    setSavedFormulas(updated);
    localStorage.setItem(AI_SAVED_FORMULAS_KEY, JSON.stringify(updated));
  };

  const handleDeleteSavedFormula = (idx: number) => {
    const updated = savedFormulas.filter((_, i) => i !== idx);
    setSavedFormulas(updated);
    localStorage.setItem(AI_SAVED_FORMULAS_KEY, JSON.stringify(updated));
  };

  // 2. EXPLORE WORD
  const handleExploreWord = async () => {
    const word = vocabWord.trim();
    if (!word) {
      setErrorMsg("请先在符卡上写下您要开天参悟的词汇！");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setExploredWord(null);

    const systemPrompt = `You are Han Li (韩立) from 凡人修仙传. You explain English vocabulary using etymology, root, affix analysis, and link each syllable to the flow of spiritual veins (灵脉) or runic paths (符文路径). Your tone is cautious and professional.`;

    const prompt = `请对英文词汇：【${word}】 进行深度神识探查，破译其词根、词缀的奥秘，理清其造词灵能脉络。

要求：
1. 详细拆解词根（root）与词缀（affixes），将其比喻为法阵的“阵枢”和“符文挂件”，解释他们如何联合生成当前词意。
2. 给出音标、词性、中文意思。
3. 编写一个融入韩立修仙背景（如灵药、洞府、遭遇魔道等）的生动例句。
4. 提供韩立师尊的独家修炼忠告。

请务必返回且只返回一个合法的 JSON 对象，其属性结构完全如下，禁止包含任何 markdown 外壳：
{
  "word": "${word}",
  "phonetic": "音标，如：/dɪˈsaɪpl/",
  "partOfSpeech": "词性，如：n. / v. / adj.",
  "meaning": "核心中文释义",
  "rootAnalysis": "词根词缀探源与修仙法阵比喻结合（中文）",
  "example": "英文例句",
  "translation": "例句的中文翻译",
  "spiritualAdvice": "韩立给弟子的本词参悟忠告（中文，谨慎求稳画风）"
}`;

    try {
      const responseText = await callAI(prompt, systemPrompt);
      const parsed = parseJSONFromResponse<WordBreakdown & { spiritualAdvice?: string }>(responseText);
      if (parsed && parsed.word) {
        setExploredWord(parsed);
      } else {
        throw new Error("神识探查未见天书响应。");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "探寻词海失败，灵脉阻滞，请重试。");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveWord = (word: WordBreakdown) => {
    if (savedWords.some((w) => w.word.toLowerCase() === word.word.toLowerCase())) {
      return;
    }
    const updated = [word, ...savedWords];
    setSavedWords(updated);
    localStorage.setItem(AI_SAVED_WORDS_KEY, JSON.stringify(updated));
  };

  const handleDeleteSavedWord = (wordStr: string) => {
    const updated = savedWords.filter((w) => w.word !== wordStr);
    setSavedWords(updated);
    localStorage.setItem(AI_SAVED_WORDS_KEY, JSON.stringify(updated));
  };

  // 3. LIVE TRIAL ARENA
  const handleLiveTrial = async () => {
    const sentence = trialSentence.trim();
    if (!sentence) {
      setErrorMsg("请先在祭坛上书写您要试炼的英文句子！");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setTrialResult(null);

    const law = customTrialLaw.trim() || trialLaw;

    const systemPrompt = `You are Han Li (韩立), the stern yet protective cultivator and English master from 凡人修仙传. You are evaluating your disciple's submitted English sentence against the core syntax law: "${law}". You must evaluate spelling, grammar, word order, tense, and contextual appropriateness. Your response must be in valid JSON. Be very strict but highly engaging.`;

    const prompt = `弟子呈上参悟的英文法咒（句子）：
『 ${sentence} 』

请对照核心句法规则：【 ${law} 】 进行严密鉴定。

判定指标：
1. 是否完全符合该语法规则，且无任何拼写、标点、主谓不一致、时态混乱等瑕疵？
2. 如果存在任何微小瑕疵，判定为“失败”，并给出绝对正确的【修改版】。
3. 如果无任何瑕疵，判定为“成功”。

请用你谨慎求稳、一丝不苟的韩立语风，给出考核结论。

请务必返回且只返回一个合法的 JSON 对象，其属性结构完全如下，禁止添加任何 markdown 外壳：
{
  "isSuccess": false,
  "corrected": "修改并完全正确后的句子",
  "assessment": "评估短语如：突破成功 (Success) 或 法力反噬 (Backlash)",
  "scoreAwarded": 10,
  "feedback": "师尊点评：指出具体语病或称赞",
  "spiritualAdvice": "后续修炼指导"
}`;

    try {
      const responseText = await callAI(prompt, systemPrompt);
      const parsed = parseJSONFromResponse<{
        isSuccess: boolean;
        corrected: string;
        assessment: string;
        scoreAwarded: number;
        feedback: string;
        spiritualAdvice: string;
      }>(responseText);

      if (parsed && parsed.assessment) {
        setTrialResult(parsed);
        if (parsed.scoreAwarded > 0) {
          // Award real progress points to the main app!
          onAward(parsed.scoreAwarded);
          setLastAwardPoints(parsed.scoreAwarded);
          setShowAwardModal(true);
        }
      } else {
        throw new Error("试炼鉴别未果，天机漏算。");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "法阵灵力失衡，叩关试炼中断。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 border border-emerald-500/30 shadow-lg relative overflow-hidden">
        <div className="absolute right-[-20px] top-[-20px] text-emerald-800/10 font-bold text-8xl select-none pointer-events-none font-mono">
          AI_PAVILION
        </div>
        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-0.5 rounded-full uppercase font-bold flex items-center gap-1">
                <BrainCircuit className="w-3 h-3 text-emerald-400" /> 天机大秘境 (Dynamic AI)
              </span>
              <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-800 px-2.5 py-0.5 rounded-full">
                ★ 真实试炼功能已开启
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              天机大秘境 <span className="text-emerald-400 text-xs md:text-sm font-normal">OpenAI 规则大模型驱动</span>
            </h2>
            <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed">
              韩立师尊借助赛博天机，开启无限心法演绎阵法。配置您的 OpenAI API 规则，便可召唤韩立的神识进行实时词源破译、新句法演练，甚至提交您自己写的句子，由韩立亲自鉴定，获取真传修为！
            </p>
          </div>

          <button
            onClick={() => setShowConfig(!showConfig)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm border ${
              showConfig 
                ? "bg-emerald-500 border-emerald-400 text-white" 
                : "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700"
            }`}
          >
            <Settings className={`w-3.5 h-3.5 ${showConfig ? "animate-spin" : ""}`} />
            {showConfig ? "收起配置" : "法阵配置"}
          </button>
        </div>
      </div>

      {/* Connection Config Drawer (collapsible) */}
      <AnimatePresence>
        {showConfig && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-emerald-600" /> 大模型天机法阵配置 (OpenAI Endpoint Settings)
                </span>
                <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" /> 密钥安全存放于本地浏览器
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* API URL */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Link className="w-3.5 h-3.5 text-slate-400" /> 接口地址 (API Base URL)
                  </label>
                  <input
                    type="text"
                    value={config.apiUrl}
                    onChange={(e) => setConfig({ ...config, apiUrl: e.target.value })}
                    placeholder="https://api.openai.com/v1"
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-mono"
                  />
                  <span className="text-[10px] text-slate-400 block">
                    可填官方或中转接口（例如 OpenRouter 等）
                  </span>
                </div>

                {/* API Key */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <KeyRound className="w-3.5 h-3.5 text-slate-400" /> API 密钥 (Token / Key)
                  </label>
                  <input
                    type="password"
                    value={config.apiKey}
                    onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
                    placeholder="sk-..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-mono"
                  />
                  <span className="text-[10px] text-slate-400 block">
                    支持自定义 API 密钥，本地安全读取
                  </span>
                </div>

                {/* Model Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-slate-400" /> 参悟模型 (Model Name)
                  </label>
                  <input
                    type="text"
                    value={config.modelName}
                    onChange={(e) => setConfig({ ...config, modelName: e.target.value })}
                    placeholder="gpt-4o-mini"
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-mono"
                  />
                  <span className="text-[10px] text-slate-400 block">
                    例如 gpt-4o-mini, deepseek-chat 等
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleTestConnection}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer transition-colors"
                  >
                    {testStatus === "testing" ? "测试中..." : "测试天机法眼 (Test)"}
                  </button>

                  {testStatus === "success" && (
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 animate-pulse">
                      <CheckCircle className="w-3.5 h-3.5" /> 沟通成功：{testMessage}
                    </span>
                  )}
                  {testStatus === "error" && (
                    <span className="text-xs font-semibold text-rose-600 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> {testMessage}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleResetConfig}
                    className="px-4 py-2 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-xl text-xs font-bold cursor-pointer transition-colors"
                  >
                    重置默认
                  </button>
                  <button
                    onClick={handleSaveConfig}
                    className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer shadow-md shadow-slate-900/10 transition-colors"
                  >
                    保存法阵设置
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Feature Tabs */}
      <div className="flex overflow-x-auto gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200/50 scrollbar-none">
        <button
          onClick={() => {
            setActiveTab("formulas");
            setErrorMsg("");
          }}
          className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === "formulas"
              ? "bg-white text-slate-900 border border-slate-200/80 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Compass className="w-4 h-4 text-emerald-600" />
          法阵句式演绎 (New Formulas)
        </button>
        <button
          onClick={() => {
            setActiveTab("vocab");
            setErrorMsg("");
          }}
          className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === "vocab"
              ? "bg-white text-slate-900 border border-slate-200/80 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <BookOpen className="w-4 h-4 text-emerald-600" />
          词海神识解析 (Word Etymology)
        </button>
        <button
          onClick={() => {
            setActiveTab("trial");
            setErrorMsg("");
          }}
          className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === "trial"
              ? "bg-white text-slate-900 border border-slate-200/80 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Sword className="w-4 h-4 text-emerald-600" />
          灵能真实试炼 (Live Checking)
        </button>
      </div>

      {/* Error Message display */}
      {errorMsg && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-xs flex items-start gap-2.5 animate-bounce">
          <AlertCircle className="w-4.5 h-4.5 text-rose-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">法力受阻：</span>
            <p className="leading-relaxed font-mono">{errorMsg}</p>
          </div>
        </div>
      )}

      {/* Loading Overlay Spinner */}
      {loading && (
        <div className="bg-white border border-slate-200 rounded-3xl p-10 flex flex-col items-center justify-center space-y-4 shadow-sm relative overflow-hidden">
          {/* Animated background canvas grids */}
          <div className="absolute inset-0 bg-slate-50/40 pointer-events-none" />
          
          {/* Rotating Trigram Core */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-dashed border-emerald-600 animate-spin flex items-center justify-center" />
            <div className="w-8 h-8 rounded-full bg-emerald-500 animate-ping absolute top-4 left-4 opacity-50" />
          </div>

          <div className="text-center space-y-1.5 relative z-10">
            <h4 className="text-sm font-extrabold text-slate-800 tracking-tight">韩立师尊正在行大神通沟通大漠天机...</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">
              “稍安勿躁，待为师以九转金丹之法，为您推演真经法则...”
            </p>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 1. FORMULAS */}
      <AnimatePresence mode="wait">
        {!loading && activeTab === "formulas" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Control Panel */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                <Compass className="w-5 h-5 text-emerald-600" />
                天机句式推演盘 (Grammar Topic Preset)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">预设心法课题</label>
                  <select
                    value={formulaTopic}
                    onChange={(e) => {
                      setFormulaTopic(e.target.value);
                      setCustomFormulaTopic("");
                    }}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-semibold"
                  >
                    <option value="虚拟语气与时空倒退">虚拟语气与时空倒退 (Subjunctive Timeline Return)</option>
                    <option value="不及物动词与介词契合">不及物动词与介词契合 (Preposition Particle Linkage)</option>
                    <option value="主谓一致之单数不定代词">主谓一致之单数不定代词 (S-V Concord of Pronouns)</option>
                    <option value="定语从句先行词契约">定语从句先行词契约 (Relative Clause Entity Matching)</option>
                    <option value="情态动词意志禁制法度">情态动词意志禁制法度 (Modal Verbs and Restrictive Force)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">或：自拟参悟课题 (Custom Topic)</label>
                  <input
                    type="text"
                    value={customFormulaTopic}
                    onChange={(e) => setCustomFormulaTopic(e.target.value)}
                    placeholder="输入任意您想研究的语法，如：独立主格结构"
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleGenerateFormulas}
                  className="px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1.5 shadow-md shadow-emerald-950/10 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  激发句式大阵 (Generate 3 Formulas)
                </button>
              </div>
            </div>

            {/* Generated Results */}
            {generatedFormulas.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    🎉 本次神识演绎出的 3 个新句式（Formulas Obtained）
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {generatedFormulas.map((f, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200 rounded-3xl p-5 md:p-6 shadow-sm space-y-4 relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded">
                            句型结构 {index + 1}
                          </span>
                          <h4 className="text-sm md:text-base font-mono font-extrabold text-slate-900 tracking-tight mt-1">
                            {f.structure}
                          </h4>
                        </div>
                        <button
                          onClick={() => handleSaveFormula(f)}
                          className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 rounded-xl text-[10px] font-bold cursor-pointer transition-colors"
                        >
                          保存至墨宝 &darr;
                        </button>
                      </div>

                      <div className="text-xs text-slate-600 leading-relaxed bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                        <strong className="text-slate-800 block mb-1">💡 语法运行天理 (Explanation):</strong>
                        {f.explanation}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                        <div className="bg-emerald-50/30 border border-emerald-100/50 p-3 rounded-xl">
                          <span className="text-[9px] font-bold text-emerald-700 block uppercase">咒语例句 (Example Sentence)</span>
                          <p className="text-xs font-mono text-slate-800 font-bold mt-1.5">{f.example}</p>
                        </div>
                        <div className="bg-amber-50/30 border border-amber-100/50 p-3 rounded-xl">
                          <span className="text-[9px] font-bold text-amber-700 block uppercase">灵通翻译 (Translation)</span>
                          <p className="text-xs text-slate-700 mt-1.5 font-medium">{f.translation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Saved Formula Library */}
            {savedFormulas.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                    📖 墨宝刻录阁 (Saved Runic Formulas: {savedFormulas.length})
                  </span>
                  <button
                    onClick={() => {
                      if (window.confirm("确定要擦除刻录阁里所有的墨宝句法吗？")) {
                        setSavedFormulas([]);
                        localStorage.removeItem(AI_SAVED_FORMULAS_KEY);
                      }
                    }}
                    className="text-[10px] font-bold text-rose-600 hover:text-rose-800 flex items-center gap-0.5 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" /> 清空刻录
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedFormulas.map((f, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 shadow-sm space-y-3 relative overflow-hidden"
                    >
                      <button
                        onClick={() => handleDeleteSavedFormula(index)}
                        className="absolute top-3.5 right-3.5 p-1 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="删除刻录"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="pr-6">
                        <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-200/50 px-1.5 py-0.2 rounded">
                          NO.{savedFormulas.length - index}
                        </span>
                        <h4 className="text-xs font-mono font-extrabold text-slate-950 mt-1">
                          {f.structure}
                        </h4>
                      </div>

                      <p className="text-[11px] text-slate-500 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-100">
                        {f.explanation}
                      </p>

                      <div className="space-y-1 text-xs">
                        <p className="font-mono font-bold text-emerald-800">{f.example}</p>
                        <p className="text-slate-600 italic">{f.translation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* TAB CONTENT: 2. VOCABULARY */}
      <AnimatePresence mode="wait">
        {!loading && activeTab === "vocab" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Search Input Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                词海灵根破译盘 (Etymology & Root Analysis Explorer)
              </h3>
              <p className="text-xs text-slate-500">
                写下任何您觉得晦涩难懂、气脉阻滞的英语词汇或词根，韩立师尊将调用神识，为您层层探源破译。
              </p>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={vocabWord}
                  onChange={(e) => setVocabWord(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleExploreWord()}
                  placeholder="写下要开天探源的词汇或词根（例如：teleport, invoke, contradict）"
                  className="flex-1 text-xs md:text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-mono"
                />
                <button
                  onClick={handleExploreWord}
                  className="px-6 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1.5 shadow-md shadow-emerald-950/10 transition-colors shrink-0"
                >
                  <Send className="w-4 h-4 text-emerald-300" />
                  神识破译 (破)
                </button>
              </div>
            </div>

            {/* Explored Result */}
            {exploredWord && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 relative overflow-hidden">
                {/* Glowing runic background indicator */}
                <div className="absolute top-4 right-4 text-slate-100 font-bold text-7xl select-none pointer-events-none font-sans">
                  LEX
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-extrabold text-slate-950 font-mono tracking-tight">
                        {exploredWord.word}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        [{exploredWord.phonetic}]
                      </span>
                      <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {exploredWord.partOfSpeech}
                      </span>
                    </div>
                    <p className="text-sm font-extrabold text-slate-700">
                      释义：{exploredWord.meaning}
                    </p>
                  </div>

                  <button
                    onClick={() => handleSaveWord(exploredWord)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm"
                  >
                    刻录至功法玉简 (Save Word)
                  </button>
                </div>

                {/* Root Breakdown Analysis */}
                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-slate-800 block uppercase tracking-wider">
                    🛠️ 词根法阵拆解 (Etymology & Root Analysis)
                  </span>
                  <div className="bg-[#fcfaf5] border border-slate-200/80 p-4 rounded-2xl text-xs text-slate-600 leading-relaxed font-sans whitespace-pre-line">
                    {exploredWord.rootAnalysis}
                  </div>
                </div>

                {/* Cyber cultivation Example */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/20 border border-emerald-100 p-4 rounded-2xl">
                    <span className="text-[10px] font-bold text-emerald-800 block uppercase">
                      修仙实战例句 (Example Context)
                    </span>
                    <p className="text-xs font-mono font-bold text-slate-800 mt-2">
                      {exploredWord.example}
                    </p>
                  </div>
                  <div className="bg-amber-50/20 border border-amber-100 p-4 rounded-2xl">
                    <span className="text-[10px] font-bold text-amber-800 block uppercase">
                      妙语玄天翻译 (Translation)
                    </span>
                    <p className="text-xs text-slate-700 font-medium mt-2">
                      {exploredWord.translation}
                    </p>
                  </div>
                </div>

                {/* Han Li's Personal Advice */}
                {exploredWord.spiritualAdvice && (
                  <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 select-none">
                      立
                    </div>
                    <div>
                      <h5 className="text-xs font-extrabold text-slate-800">韩立师尊的传功忠告：</h5>
                      <p className="text-xs text-slate-500 italic mt-1 leading-relaxed">
                        “{exploredWord.spiritualAdvice}”
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Saved Jade Slip words */}
            {savedWords.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    📖 功法玉简库 (Your Jade Slip Vocabulary: {savedWords.length})
                  </span>
                  <button
                    onClick={() => {
                      if (window.confirm("确定要擦除玉简里刻录的所有词汇吗？")) {
                        setSavedWords([]);
                        localStorage.removeItem(AI_SAVED_WORDS_KEY);
                      }
                    }}
                    className="text-[10px] font-bold text-rose-600 hover:text-rose-800 flex items-center gap-0.5 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" /> 清空玉简
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedWords.map((w, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 shadow-sm space-y-3 relative overflow-hidden"
                    >
                      <button
                        onClick={() => handleDeleteSavedWord(w.word)}
                        className="absolute top-3.5 right-3.5 p-1 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="删除词汇"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="pr-6">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="text-sm font-mono font-extrabold text-slate-950">
                            {w.word}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400">
                            [{w.phonetic}]
                          </span>
                          <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-1 rounded">
                            {w.partOfSpeech}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-slate-600 mt-1">
                          释义：{w.meaning}
                        </p>
                      </div>

                      <div className="bg-white p-2.5 rounded-lg border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                        <span className="font-bold text-slate-700 block mb-0.5">词源：</span>
                        {w.rootAnalysis}
                      </div>

                      <div className="space-y-0.5 text-xs">
                        <p className="font-mono font-bold text-emerald-800">{w.example}</p>
                        <p className="text-slate-600 italic">{w.translation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* TAB CONTENT: 3. LIVE TRIAL */}
      <AnimatePresence mode="wait">
        {!loading && activeTab === "trial" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Input Form card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-5 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Sword className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    灵能真实试炼祭坛 (Grammar Review & Assessment Arena)
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    手书您的英文句子，选择您要检验的法理规则。韩立师尊会严密剖析其运行气机，判定是否契合天法！
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">对照之法理规约 (Focal Law)</label>
                  <select
                    value={trialLaw}
                    onChange={(e) => {
                      setTrialLaw(e.target.value);
                      setCustomTrialLaw("");
                    }}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-semibold"
                  >
                    <option value="时空从小到大与动作先行法则 (Spatio-Temporal Sequence)">时空从小到大与动作先行法则 (Sequence)</option>
                    <option value="第三人称单数及主谓一致性 (Subject-Verb Concord)">第三人称单数及主谓一致性 (Concord)</option>
                    <option value="不及物动词与介词绑定法则 (Preposition Particle Binding)">不及物动词与介词绑定法则 (Preposition)</option>
                    <option value="虚拟语气之时间完成度倒退 (Subjunctive Past-Backtrack)">虚拟语气之时间完成度倒退 (Subjunctive)</option>
                    <option value="There be 句型的就近一致原则 (There-be Proximity Agreement)">There be 句型的就近一致原则 (There-be)</option>
                    <option value="让步状语(Although)与转折(But)互斥原则 (Although/But Mutex)">让步状语(Although)与转折(But)互斥原则 (Mutex)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">或：自定义法度 (Custom Target Rule)</label>
                  <input
                    type="text"
                    value={customTrialLaw}
                    onChange={(e) => setCustomTrialLaw(e.target.value)}
                    placeholder="输入要对照测试的语法，如：定语从句宾格引导词"
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Textarea for User Sentence */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">您的英文试炼句子 (Your Sentence)</label>
                <textarea
                  value={trialSentence}
                  onChange={(e) => setTrialSentence(e.target.value)}
                  placeholder="在此写下您参悟出的英文句子，例如：Although the server crashed, but our team backed up it on 10:00 AM on Monday."
                  rows={3}
                  className="w-full text-xs md:text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-mono leading-relaxed"
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-end pt-1">
                <button
                  disabled={!trialSentence}
                  onClick={handleLiveTrial}
                  className={`px-6 py-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md ${
                    trialSentence
                      ? "bg-slate-900 hover:bg-slate-800 text-white cursor-pointer"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <Sword className="w-4 h-4 text-emerald-400" />
                  开启叩关试炼 (Submit for live assessment)
                </button>
              </div>
            </div>

            {/* Trial Result output */}
            {trialResult && (
              <div
                className={`border rounded-3xl p-6 md:p-8 space-y-6 shadow-sm relative overflow-hidden transition-all ${
                  trialResult.isSuccess
                    ? "bg-[#f4faf6] border-emerald-300"
                    : "bg-[#fef8f8] border-rose-200"
                }`}
              >
                {/* Header Assessment Badge */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-wider font-extrabold uppercase text-slate-400">
                      叩关鉴定报告 (TRIAL REPORT)
                    </span>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h4
                        className={`text-lg md:text-xl font-extrabold flex items-center gap-1.5 ${
                          trialResult.isSuccess ? "text-emerald-900" : "text-rose-900"
                        }`}
                      >
                        {trialResult.isSuccess ? (
                          <CheckCircle className="w-5.5 h-5.5 text-emerald-600 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-5.5 h-5.5 text-rose-500 shrink-0" />
                        )}
                        考核状态: {trialResult.assessment}
                      </h4>
                      
                      <span className="text-xs font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-600" /> +{trialResult.scoreAwarded} 修为点
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-sans font-bold text-slate-400 block">LAW FOCUSED</span>
                    <span className="text-xs font-mono font-bold text-slate-700 bg-slate-200/40 px-2.5 py-1 rounded">
                      {customTrialLaw || trialLaw}
                    </span>
                  </div>
                </div>

                {/* Sentence Display (Original vs Corrected) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-100/60 p-4 rounded-2xl border border-slate-200/40">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">
                      原写法阵句子 (Your Entry)
                    </span>
                    <p className="text-xs md:text-sm font-mono font-medium text-slate-700 mt-2 italic">
                      "{trialSentence}"
                    </p>
                  </div>
                  <div
                    className={`p-4 rounded-2xl border ${
                      trialResult.isSuccess
                        ? "bg-emerald-50/50 border-emerald-100"
                        : "bg-amber-50/50 border-amber-100"
                    }`}
                  >
                    <span className="text-[10px] font-bold text-emerald-800 block uppercase">
                      完美回归正确法术 (Corrected Formula)
                    </span>
                    <p className="text-xs md:text-sm font-mono font-extrabold text-slate-900 mt-2">
                      "{trialResult.corrected}"
                    </p>
                  </div>
                </div>

                {/* Detailed Feedback */}
                <div className="space-y-2.5">
                  <span className="text-xs font-extrabold text-slate-800 block uppercase tracking-wider">
                    💬 韩立师尊的神识鉴定 (Detailed Feedback)
                  </span>
                  <div className="bg-white border border-slate-200/60 p-5 rounded-2xl text-xs md:text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-line shadow-inner">
                    {trialResult.feedback}
                  </div>
                </div>

                {/* Spiritual guidance */}
                {trialResult.spiritualAdvice && (
                  <div className="bg-amber-50/30 border border-amber-200/50 rounded-2xl p-4 flex items-start gap-2.5">
                    <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-extrabold text-amber-900 uppercase tracking-wide">
                        师传修炼指导 (Master's Spiritual Guidance)
                      </h5>
                      <p className="text-xs text-amber-950 mt-1 leading-relaxed italic">
                        “{trialResult.spiritualAdvice}”
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS AWARD CELEBRATION MODAL */}
      <AnimatePresence>
        {showAwardModal && (
          <div className="fixed inset-0 bg-slate-950/60 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-b from-[#0f241a] to-slate-950 text-white rounded-3xl p-6 max-w-sm w-full border border-emerald-500/30 text-center space-y-5 shadow-2xl relative"
            >
              <button
                onClick={() => setShowAwardModal(false)}
                className="absolute top-4 right-4 p-1 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center animate-[bounce_2s_ease-in-out_infinite]">
                  <Award className="w-8 h-8 text-emerald-400" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
                  修为大涨 (CULTIVATION LEVEL UP)
                </span>
                <h4 className="text-lg font-extrabold text-white">叩关突破成功！</h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                恭喜您，通过了天机大秘境的现场考核！您的句式参悟受到韩立尊师的赞许，灵气流转，修为增长了：
              </p>

              <div className="text-3xl font-extrabold text-amber-400 font-mono">
                +{lastAwardPoints} <span className="text-xs text-slate-400 font-sans font-medium">修为点 (Points)</span>
              </div>

              <button
                onClick={() => setShowAwardModal(false)}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md shadow-emerald-950/20"
              >
                稳固道心，继续修炼
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
