/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface HanLiAvatarProps {
  sceneType?: "meeting" | "hotel" | "coding" | "travel";
  className?: string;
}

export const HanLiAvatar: React.FC<HanLiAvatarProps> = ({
  sceneType = "coding",
  className = "w-32 h-32",
}) => {
  // We can render different accessories or background colors based on sceneType
  const getSceneDetails = () => {
    switch (sceneType) {
      case "meeting":
        return {
          bg: "from-emerald-950 to-slate-900",
          accentColor: "#34d399", // bright emerald
          emoji: "💼",
          subtitle: "传功长老 · 商务会议",
        };
      case "hotel":
        return {
          bg: "from-indigo-950 to-slate-900",
          accentColor: "#818cf8", // indigo
          emoji: "🏨",
          subtitle: "散修客栈 · 协议签署",
        };
      case "travel":
        return {
          bg: "from-amber-950 to-slate-900",
          accentColor: "#fbbf24", // amber
          emoji: "🚄",
          subtitle: "御空法舟 · 跨境中转",
        };
      case "coding":
      default:
        return {
          bg: "from-teal-950 to-slate-900",
          accentColor: "#2dd4bf", // teal
          emoji: "💻",
          subtitle: "炼器大师 · 灵力调试",
        };
    }
  };

  const details = getSceneDetails();

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Background Frame */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${details.bg} border-2 border-emerald-500/30 overflow-hidden shadow-lg shadow-emerald-950/20`}>
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Floating particle animations */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-4 left-4 w-2 h-2 rounded-full bg-emerald-400 blur-[1px]"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-teal-400 blur-[2px]"
        />

        {/* Dynamic Scene Badge */}
        <span className="absolute top-2 right-2 text-sm select-none" title={details.subtitle}>
          {details.emoji}
        </span>
      </div>

      {/* SVG Character Avatar */}
      <svg
        viewBox="0 0 120 120"
        className="w-24 h-24 z-10 drop-shadow-[0_4px_10px_rgba(16,185,129,0.3)]"
      >
        <defs>
          <linearGradient id="robeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="50%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#115e59" />
          </linearGradient>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffedd5" />
          </linearGradient>
          <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        {/* Halo / Aura behind head */}
        <motion.circle
          cx="60"
          cy="48"
          r="26"
          fill="none"
          stroke={details.accentColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="opacity-60"
        />

        {/* Cloud/Smoke below */}
        <path
          d="M20 110 C 30 100, 50 100, 60 110 C 70 100, 90 100, 100 110 L 100 120 L 20 120 Z"
          fill="#334155"
          className="opacity-25"
        />

        {/* Hair - Back */}
        <path
          d="M40 50 C 40 30, 80 30, 80 50 C 85 65, 85 85, 80 95 C 75 95, 75 80, 75 75 C 65 85, 55 85, 45 75 C 45 80, 45 95, 40 95 C 35 85, 35 65, 40 50 Z"
          fill="url(#hairGrad)"
        />

        {/* Robe shoulders */}
        <path
          d="M25 110 C 35 85, 45 80, 60 80 C 75 80, 85 85, 95 110 Z"
          fill="url(#robeGrad)"
          stroke="#047857"
          strokeWidth="1"
        />
        
        {/* Robe Collar / Neckline V-neck */}
        <path d="M50 80 L60 92 L70 80 Z" fill="#134e4a" />
        <path d="M54 80 L60 88 L66 80 Z" fill="#164e63" />

        {/* Head & Neck */}
        <path d="M52 70 L52 82 C 52 85, 68 85, 68 82 L68 70 Z" fill="#ffedd5" />
        <circle cx="60" cy="54" r="16" fill="url(#skinGrad)" />

        {/* Face details */}
        {/* Brows */}
        <path d="M49 47 C 52 45, 55 45, 55 48" stroke="#0f172a" strokeWidth="1.5" fill="none" />
        <path d="M71 47 C 68 45, 65 45, 65 48" stroke="#0f172a" strokeWidth="1.5" fill="none" />
        {/* Calm Eyes */}
        <circle cx="52" cy="51" r="1.5" fill="#1e293b" />
        <circle cx="68" cy="51" r="1.5" fill="#1e293b" />
        {/* Subtle closed mouth smile */}
        <path d="M56 61 C 58 63, 62 63, 64 61" stroke="#475569" strokeWidth="1" fill="none" />

        {/* Hair - Front bangs */}
        <path
          d="M44 44 C 48 38, 54 38, 56 42 C 58 38, 68 38, 76 44 C 74 36, 46 36, 44 44 Z"
          fill="#0f172a"
        />
        <path d="M43 44 L46 56 L49 45 Z" fill="#0f172a" />
        <path d="M77 44 L74 56 L71 45 Z" fill="#0f172a" />

        {/* Floating Jade Pendant around neck */}
        <rect x="58" y="86" width="4" height="6" rx="1.5" fill="#34d399" stroke="#059669" strokeWidth="0.5" />
        <line x1="60" y1="82" x2="60" y2="86" stroke="#fbbf24" strokeWidth="0.75" />

        {/* Laptop (Modern accessory for Teacher Han Li) */}
        <motion.g
          animate={{
            y: [-1, 2, -1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Base */}
          <path d="M35 105 L85 105 L92 114 L28 114 Z" fill="url(#laptopGrad)" stroke="#64748b" strokeWidth="0.5" />
          {/* Screen (Half Open) */}
          <path d="M38 105 L82 105 L82 92 L38 92 Z" fill="#020617" stroke="#64748b" strokeWidth="0.5" />
          {/* Glowing screen surface */}
          <rect x="40" y="94" width="40" height="10" fill="#04332e" rx="0.5" />
          {/* Holographic matrix lines coming out of laptop screen */}
          <motion.text
            x="42"
            y="100"
            fontSize="3"
            fill={details.accentColor}
            fontFamily="monospace"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            0101 vt vi tag
          </motion.text>
          {/* Keyboard lines */}
          <line x1="33" y1="109" x2="87" y2="109" stroke="#475569" strokeWidth="1" strokeDasharray="2 1" />
          {/* Apple/Logo representation: Jade symbol */}
          <circle cx="60" cy="98" r="1.5" fill={details.accentColor} className="opacity-70" />
        </motion.g>
      </svg>
      <div className="mt-2 text-xs font-semibold text-emerald-400 bg-slate-900/60 px-2 py-0.5 rounded-full border border-emerald-500/20 shadow-sm z-10">
        {details.subtitle}
      </div>
    </div>
  );
};
