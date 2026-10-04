"use client";

import { motion } from "framer-motion";

export type FREQUENCY = "monthly" | "yearly";

interface FrequencyToggleProps {
  frequency: FREQUENCY;
  setFrequency: (frequency: FREQUENCY) => void;
}

export function FrequencyToggle({
  frequency,
  setFrequency,
}: FrequencyToggleProps) {
  return (
    <div className="inline-flex items-center rounded-xl border-2 border-slate-200 bg-slate-100 p-1">
      <button
        onClick={() => setFrequency("monthly")}
        className={`relative px-5 py-2 text-[13px] font-semibold transition-colors ${
          frequency === "monthly"
            ? "text-slate-900"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        {frequency === "monthly" && (
          <motion.div
            layoutId="frequency-pill"
            className="absolute inset-0 rounded-lg bg-white shadow-sm"
            transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
          />
        )}
        <span className="relative z-10">Aylık</span>
      </button>
      <button
        onClick={() => setFrequency("yearly")}
        className={`relative px-5 py-2 text-[13px] font-semibold transition-colors ${
          frequency === "yearly"
            ? "text-slate-900"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        {frequency === "yearly" && (
          <motion.div
            layoutId="frequency-pill"
            className="absolute inset-0 rounded-lg bg-white shadow-sm"
            transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
          />
        )}
        <span className="relative z-10">Yıllık</span>
      </button>
    </div>
  );
}
