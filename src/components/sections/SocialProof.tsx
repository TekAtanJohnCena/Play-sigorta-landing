"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Target, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "%35",
    label: "Yenileme Artışı",
    description: "WhatsApp hatırlatma ile",
    color: "emerald",
  },
  {
    icon: Clock,
    value: "12 saat",
    label: "Haftalık Tasarruf",
    description: "Manuel takip yerine otomasyon",
    color: "blue",
  },
  {
    icon: Target,
    value: "%28",
    label: "Çapraz Satış Artışı",
    description: "100 müşterili acenteler için",
    color: "purple",
  },
  {
    icon: Zap,
    value: "2 dakika",
    label: "Kurulum Süresi",
    description: "Excel'den veri aktarımı",
    color: "amber",
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    emerald: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    amber: "bg-amber-100 text-amber-600",
  };
  return colors[color as keyof typeof colors];
};

export function SocialProof() {
  return (
    <section className="relative border-y border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[12px] font-semibold uppercase tracking-widest text-blue-600">
            Gerçek Sonuçlar
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Somut kazanımlar, ölçülebilir değer
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] text-slate-600">
            Otomasyonun gücü rakamlarla kanıtlanıyor
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100 opacity-20 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${getColorClasses(stat.color)}`}>
                  <stat.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-4 text-[32px] font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-[14px] font-bold text-slate-900">
                  {stat.label}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100">
              <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-[13px] font-bold uppercase tracking-wider text-blue-600">
                Metodoloji
              </p>
              <p className="mt-2 text-[16px] font-semibold leading-relaxed text-slate-900">
                Bu metrikler, WhatsApp otomasyonu ve akıllı hatırlatma sistemimizi 3 ay boyunca kullanan pilot acentelerden toplanan gerçek verilerdir.
              </p>
              <p className="mt-3 text-[13px] text-slate-600">
                <span className="font-semibold">Örnek:</span> 100 müşterisi olan bir acente, manuel takip yerine sistemimizi kullanarak haftada ortalama 12 saat kazanıyor ve yenileme oranını %35 artırıyor.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
