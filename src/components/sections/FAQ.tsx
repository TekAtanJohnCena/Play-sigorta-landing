"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "faq-1",
    question: "Sigorta Cüzdanı tam olarak ne yapıyor?",
    answer:
      "Yenileme takibi, çapraz satış, müşteri yönetimi, portföy analizi — acentenin günlük operasyonunu tek yerde toplayan bir yazılım. Teklif motoru değil, mevcut portföyü büyüten bir araç.",
  },
  {
    id: "faq-2",
    question: "Teklif motoru var mı?",
    answer:
      "Hayır. Biz teklif çıkma işine girmiyoruz. Odağımız mevcut portföyü yönetmek: yenileme kaçağını sıfırlamak, çapraz satış fırsatlarını göstermek, müşteriyle iletişimi otomatize etmek.",
  },
  {
    id: "faq-3",
    question: "Mevcut verilerimi nasıl aktarırım?",
    answer:
      "Excel, CSV ya da kullandığınız mevcut sistemden biz aktarıyoruz. Ekibimiz süreci birebir yönetiyor, 1-3 iş gününde tamamlanıyor. Ekstra ücret yok.",
  },
  {
    id: "faq-4",
    question: "WhatsApp entegrasyonu nasıl çalışıyor?",
    answer:
      "Yenileme vadesi yaklaşan müşterilerinize otomatik WhatsApp hatırlatmaları gönderebilirsiniz. Mesaj şablonlarını siz belirlersiniz, sistem zamanında gönderir.",
  },
  {
    id: "faq-5",
    question: "Deneme süresi nasıl işliyor?",
    answer:
      "14 gün boyunca her şeyi kullanabilirsiniz. Kredi kartı istemiyoruz. Süre bitince devam etmek isterseniz ödeme bilgilerinizi girersiniz, istemezseniz hesap kapanır.",
  },
  {
    id: "faq-6",
    question: "Verilerim güvende mi?",
    answer:
      "256-bit SSL şifreleme, Türkiye lokasyonlu sunucular, KVKK uyumlu. Günlük yedekleme ve rol tabanlı erişim kontrolü standart.",
  },
];

export function FAQ() {
  return (
    <section
      id="sss"
      className="relative border-t border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[12px] font-semibold uppercase tracking-widest text-blue-600">
              Destek
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Sık sorulan sorular
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
              Aklınıza takılanları burada bulamazsanız{" "}
              <a href="#iletisim" className="font-semibold text-blue-600 hover:text-blue-700">
                bize yazın
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="rounded-xl border-2 border-slate-200 bg-white px-6 shadow-sm data-[state=open]:border-blue-300"
                >
                  <AccordionTrigger className="py-5 text-left text-[15px] font-semibold text-slate-900 hover:no-underline hover:text-blue-600 [&>svg]:text-slate-400">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="pb-2 text-[14px] leading-relaxed text-slate-600">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
