"use client";

import Link from "next/link";
import { useLang } from "@/i18n";

const STORE_URL = "https://smartstore.naver.com/finisports";

export default function Footer() {
  const { t } = useLang();

  const FOOTER_NAV = [
    { label: t.nav.aboutUs, href: "#about", external: false },
    { label: t.nav.wado, href: "/wado", external: false },
    { label: t.nav.guide, href: "/guide", external: false },
    { label: t.nav.support, href: "/support", external: false },
    { label: t.nav.store, href: STORE_URL, external: true },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-3">
              {t.footer.slogan}
            </h3>
            <p className="text-sm leading-relaxed">
              {t.footer.company}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.navTitle}
            </h4>
            <nav className="flex flex-col gap-2">
              {FOOTER_NAV.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors w-fit"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm hover:text-white transition-colors w-fit"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-500">{t.footer.phoneLabel}</span>{" "}
                <span className="text-white font-semibold">{t.footer.phone}</span>
              </p>
              <p>
                <span className="text-gray-500">{t.footer.emailLabel}</span>{" "}
                admin@finisports.com
              </p>
              <p>
                <span className="text-gray-500">{t.footer.addressLabel}</span>{" "}
                {t.footer.ceo}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            {t.footer.bizNo} | {t.footer.salesNo}
          </p>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
