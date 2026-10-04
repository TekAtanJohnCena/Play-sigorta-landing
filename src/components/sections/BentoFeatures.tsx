"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Bell,
  Target,
  Users,
  CalendarDays,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  span: string;
}

const features: Feature[] = [
  {
    title: "Kart 1",
    subtitle: "Vadeler Artık Kontrolünüz Altında",
    description:
      "Yaklaşan poliçe vadelerini günler öncesinden otomatik görün. WhatsApp entegrasyonu sayesinde müşterilerinize tek tıkla hatırlatma göndererek yenileme oranlarınızı maksimize edin.",
    icon: Bell,
    span: "md:col-span-2",
  },
  {
    title: "Kart 2",
    subtitle: "Her Müşteri Yeni Bir Fırsattır",
    description:
      "Kasko müşterinizin DASK poliçesi yok mu? Sistemimiz, portföyünüzdeki çapraz satış fırsatlarını analiz eder ve size günlük satış hedefleri olarak sunar. Cironuzu mevcut müşterilerinizle artırın.",
    icon: Target,
    span: "md:col-span-1",
  },
  {
    title: "Kart 3",
    subtitle: "Müşteri İletişiminiz Tek Ekran",
    description:
      "Müşteri notları, geçmiş poliçeler, ödeme durumları ve günlük görevleriniz... Hızlı, modern ve takılmayan arayüzümüzle tüm süreçlerinizi saniyeler içinde yönetin.",
    icon: Users,
    span: "md:col-span-1",
  },
  {
    title: "Kart 4",
    subtitle: "Gününüzü Biz Planlayalım",
    description:
      "Kim aranacak? Hangi poliçe kesilecek? Takvim modülümüz sayesinde acente içindeki iş akışını ve ekip performansını zahmetsizce organize edin.",
    icon: CalendarDays,
    span: "md:col-span-2",
  },
];

const featureTitles = [
  "Kayıpsız Yenileme Takibi",
  "Akıllı Çapraz Satış Motoru",
  "Acente Odaklı Modern CRM",
  "Gelişmiş Takvim ve Görev Yönetimi",
];

export function BentoFeatures() {
  return (
    <section id="ozellikler" className="relative bg-gradient-to-b from-white via-slate-50/30 to-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          className="text-[12px] font-semibold uppercase tracking-widest text-blue-600"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Özellikler
        </motion.p>
        <motion.h2
          className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Acentenizin ihtiyaç duyduğu her şey
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.subtitle}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 ${feature.span}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 opacity-30 transition-transform duration-500 group-hover:scale-[1.5]" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 transition-colors group-hover:bg-blue-200">
                  <feature.icon
                    className="h-6 w-6 text-blue-600"
                    strokeWidth={2}
                  />
                </div>

                <p className="mt-6 text-[13px] font-semibold uppercase tracking-wider text-blue-600">
                  {featureTitles[i]}
                </p>

                <h3 className="mt-2 text-[18px] font-bold text-slate-900">
                  {feature.subtitle}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="#fiyatlandirma"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-white px-6 py-3 text-[14px] font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
          >
            Fiyatları İncele
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
