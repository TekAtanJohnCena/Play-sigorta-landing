"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionCTAProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function SectionCTA({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: SectionCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 text-center md:p-12"
    >
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-[15px] text-slate-600">
        {description}
      </p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href={primaryCTA.href}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
        >
          {primaryCTA.text}
          <ArrowRight className="h-4 w-4" />
        </Link>
        {secondaryCTA && (
          <Link
            href={secondaryCTA.href}
            className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-slate-900"
          >
            {secondaryCTA.text}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
