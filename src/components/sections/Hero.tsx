"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { MeshGradientBg } from "@/components/ui/mesh-gradient-bg";
import { DotPattern } from "@/components/ui/dot-pattern";
import { DashboardMockup } from "@/components/ui/dashboard-mockup";

const stagger = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export function Hero() {
  return (
    <MeshGradientBg className="min-h-[90vh]">
      <DotPattern className="text-slate-300/30" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:gap-12 md:py-20 lg:grid-cols-2 lg:gap-16">
        {/* Left - Text Content */}
        <div className="flex flex-col">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-[12px] font-medium text-blue-700">
              Yeni nesil acente yönetimi
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.1] tracking-tight text-slate-900"
          >
            Acentenizi{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              dijitalleştirin.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-6 max-w-xl text-[16px] leading-relaxed text-slate-600 sm:text-[17px]"
          >
            Yenileme kaçaklarını sıfıra indirin. Çapraz satış fırsatlarını otomatik tespit edin. Mevcut portföyünüzden maksimum ciro.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="#iletisim"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98] sm:w-auto sm:px-7 sm:py-3.5"
            >
              Hemen Demo Talep Et
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#ozellikler"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-4 py-4 text-[15px] font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 sm:w-auto sm:py-3.5"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              Nasıl Çalışır?
            </Link>
          </motion.div>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-6 text-[12px] text-slate-500"
          >
            14 gün ücretsiz deneme · Kredi kartı gerekmez
          </motion.p>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200/60 pt-8"
          >
            <div className="flex items-center gap-2 text-slate-600">
              <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-[12px] font-medium">KVKK Uyumlu</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span className="text-[12px] font-medium">256-bit SSL</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
              </svg>
              <span className="text-[12px] font-medium">TR Sunucuları</span>
            </div>
          </motion.div>
        </div>

        {/* Right - Dashboard Mockup */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="w-full lg:block"
        >
          <div
            className="relative rounded-xl border border-slate-200/80 bg-white/50 p-2 shadow-2xl backdrop-blur-sm md:rounded-2xl md:p-3"
            style={{ transform: "perspective(1200px) rotateY(-5deg)" }}
          >
            <div className="overflow-hidden rounded-xl border border-slate-200/60">
              <DashboardMockup />
            </div>
          </div>
        </motion.div>
      </div>
    </MeshGradientBg>
  );
}
