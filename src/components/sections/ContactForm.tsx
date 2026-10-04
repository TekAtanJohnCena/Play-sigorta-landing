"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Database, GraduationCap } from "lucide-react";

const inputClass =
  "w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10";

const benefits = [
  { icon: Globe, text: "Acentenize özel web sitesi" },
  { icon: Database, text: "Ücretsiz veri aktarımı" },
  { icon: GraduationCap, text: "Eğitim desteği" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="iletisim" className="relative bg-gradient-to-b from-white via-slate-50/30 to-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[12px] font-semibold uppercase tracking-widest text-blue-600">
              Hemen Başlayın
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Yeni Nesil Acenteler Arasına Katılın
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
              Portföyünüzü akıllıca yönetmeye ve cironuzu artırmaya bugün başlayın.
            </p>

            <div className="mt-10 space-y-5">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="h-5 w-5 text-blue-600" strokeWidth={2} />
                  </div>
                  <span className="text-[15px] font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            {submitted ? (
              <div className="space-y-6 rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-8 py-12 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    Talebiniz Alındı
                  </h3>
                  <p className="mt-2 text-[14px] text-slate-600">
                    24 saat içinde sizinle iletişime geçeceğiz.
                  </p>
                </div>

                <div className="flex flex-col gap-3 border-t border-emerald-200 pt-6">
                  <p className="text-[13px] font-semibold text-slate-700">
                    Bizi takip edin:
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white transition-all hover:border-blue-600 hover:bg-blue-50"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white transition-all hover:border-blue-600 hover:bg-blue-50"
                      aria-label="Twitter"
                    >
                      <svg className="h-5 w-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5 rounded-2xl border-2 border-slate-200 bg-slate-50 p-8 shadow-xl"
              >
                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-slate-700">
                    Acente Adı
                  </label>
                  <input type="text" required className={inputClass} placeholder="ABC Sigorta Acenteliği" style={{ fontSize: '16px' }} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-slate-700">
                      Yetkili
                    </label>
                    <input type="text" required className={inputClass} placeholder="Ahmet Yılmaz" style={{ fontSize: '16px' }} />
                  </div>
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-slate-700">
                      Telefon
                    </label>
                    <input type="tel" required className={inputClass} placeholder="0555 123 45 67" style={{ fontSize: '16px' }} />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-slate-700">
                    E-posta
                  </label>
                  <input type="email" required className={inputClass} placeholder="info@acenteniz.com" style={{ fontSize: '16px' }} />
                </div>

                <button
                  type="submit"
                  className="group flex w-full min-h-[48px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-[16px] font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98]"
                >
                  Ücretsiz Demoyu Başlat
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  Bilgileriniz KVKK kapsamında korunmaktadır.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
