"use client";

import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Check, ArrowRight, Globe } from "lucide-react";
import {
  type FREQUENCY,
  FrequencyToggle,
} from "@/components/ui/pricing-4-utils/frequency-toggle";

type Plan = {
  name: string;
  description: string;
  price: { monthly: number; yearly: number };
  features: string[];
  highlighted: string | null;
  cta: string;
  href: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Profesyonel",
    description: "Tek lokasyonlu acenteler için",
    price: { monthly: 1990, yearly: 19900 },
    features: [
      "Sınırsız poliçe kaydı",
      "Yenileme takibi & WhatsApp bildirimleri",
      "Çapraz satış motoru",
      "CRM & satış hunisi",
      "Portföy analizi & raporlar",
      "Takvim & görev yönetimi",
      "PDF / Excel dışa aktarım",
      "Öncelikli destek",
    ],
    highlighted: "Ücretsiz Kurumsal Acente Web Sitesi",
    cta: "Hemen Başla",
    href: "#iletisim",
    popular: true,
  },
  {
    name: "Kurumsal",
    description: "Çoklu şube ve büyük ekipler için",
    price: { monthly: 0, yearly: 0 },
    features: [
      "Profesyonel'deki her şey",
      "Çoklu şube yönetimi",
      "API entegrasyonları",
      "Özel raporlama & analitik",
      "Ekip yönetimi & yetkilendirme",
      "7/24 SLA garantili destek",
      "Özel eğitim & onboarding",
    ],
    highlighted: null,
    cta: "İletişime Geç",
    href: "#iletisim",
  },
];

export function Pricing() {
  const [frequency, setFrequency] = React.useState<FREQUENCY>("monthly");

  return (
    <section
      id="fiyatlandirma"
      className="relative border-t border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <motion.p
              className="text-[12px] font-semibold uppercase tracking-widest text-blue-600"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Fiyatlandırma
            </motion.p>
            <motion.h2
              className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              Şeffaf Fiyatlandırma, Maksimum Değer
            </motion.h2>
          </div>
          <FrequencyToggle frequency={frequency} setFrequency={setFrequency} />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-2xl border p-8 bg-white shadow-lg",
                plan.popular
                  ? "border-blue-300 ring-2 ring-blue-600 ring-opacity-50"
                  : "border-slate-200"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {plan.popular && (
                <div className="mb-4 inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700">
                  En Popüler
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-1 text-[13px] text-slate-600">
                  {plan.description}
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                {plan.price.monthly > 0 ? (
                  <>
                    <NumberFlow
                      value={plan.price[frequency]}
                      className="text-4xl font-bold text-slate-900"
                      format={{
                        style: "currency",
                        currency: "TRY",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                    />
                    <span className="text-[14px] text-slate-600">
                      /{frequency === "monthly" ? "ay" : "yıl"}
                    </span>
                    <AnimatePresence>
                      {frequency === "yearly" && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="ml-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-3 py-1 text-[12px] font-bold text-white shadow-md"
                        >
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          2 ay bedava
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <p className="text-4xl font-bold text-slate-900">Özel fiyat</p>
                )}
              </div>

              <Link
                href={plan.href}
                className={cn(
                  "mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-[14px] font-semibold transition-all",
                  plan.popular
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
                    : "border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                )}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-8 space-y-4 border-t border-slate-200 pt-8">
                {plan.name === "Profesyonel" && (
                  <div className="mb-4 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2">
                    <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span className="text-[12px] font-semibold text-emerald-800">
                      Verileriniz Türkiye'de kalır
                    </span>
                  </div>
                )}
                {plan.highlighted && (
                  <div className="flex items-center gap-3 rounded-xl border-2 border-blue-300 bg-blue-50 p-4">
                    <Globe className="h-5 w-5 shrink-0 text-blue-600" strokeWidth={2} />
                    <span className="text-[13px] font-bold text-blue-900">
                      {plan.highlighted}
                    </span>
                  </div>
                )}
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                      strokeWidth={2.5}
                    />
                    <span className="text-[14px] text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
