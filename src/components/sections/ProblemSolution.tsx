"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="relative border-t border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[12px] font-semibold uppercase tracking-widest text-blue-600">
            Neden Biz?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Eski nesil ekranlarda kaybolmayın,
            <br className="hidden sm:block" />
            <span className="text-blue-600">kârınıza odaklanın.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-red-200 bg-red-50/50 p-8 transition-all hover:border-red-300 hover:shadow-lg">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-100 opacity-50 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                <TrendingDown className="h-6 w-6 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Eski Yazılımların Sorunu
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Karmaşık, yavaş ve teklif odaklı. Veri giriş hammaliyesi yapıyorsunuz
                ama asıl kaybınız — gözden kaçan yenilemeler ve
                değerlendirilemeyen çapraz satış fırsatları — göz ardı ediliyor.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 transition-all hover:border-emerald-300 hover:shadow-lg">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-100 opacity-50 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                <TrendingUp className="h-6 w-6 text-emerald-600" strokeWidth={2} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Sigorta Cüzdanı Farkı
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Size doğrudan{" "}
                <span className="font-semibold text-slate-900">
                  "Kimi, ne zaman, hangi ürün için aramalısınız?"
                </span>{" "}
                sorusunun cevabını verir. Veri giriş değil, aksiyon odaklı.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center text-[16px] leading-relaxed text-slate-600"
        >
          Sektördeki mevcut yazılımlar karmaşık, yavaş ve teklif odaklıdır. Oysa
          acentelerin asıl kaybı, gözden kaçan yenilemeler ve değerlendirilemeyen
          çapraz satış (cross-sell) fırsatlarıdır.
        </motion.p>
      </div>
    </section>
  );
}
