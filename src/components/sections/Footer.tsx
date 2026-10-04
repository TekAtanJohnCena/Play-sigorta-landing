import Link from "next/link";

const links = {
  Ürün: [
    { label: "Özellikler", href: "#ozellikler" },
    { label: "Fiyatlandırma", href: "#fiyatlandirma" },
    { label: "Demo Al", href: "#iletisim" },
  ],
  Destek: [
    { label: "SSS", href: "#sss" },
    { label: "İletişim", href: "#iletisim" },
    { label: "Dokümantasyon", href: "#" },
  ],
  Yasal: [
    { label: "Gizlilik Politikası", href: "#" },
    { label: "KVKK Aydınlatma Metni", href: "#" },
    { label: "Kullanım Koşulları", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-[16px] font-bold tracking-tight text-slate-900"
            >
              Sigorta Cüzdanı
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-slate-600">
              Sigorta acenteleri için
              <br />
              yeni nesil yönetim platformu.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-[13px] font-bold uppercase tracking-wider text-slate-900">
                {category}
              </p>
              <ul className="mt-4 space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] text-slate-500">
              &copy; 2026 Sigorta Cüzdanı. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-[11px] font-medium">KVKK Uyumlu</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className="text-[11px] font-medium">SSL Güvenli</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                </svg>
                <span className="text-[11px] font-medium">TR Sunucuları</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
