"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/i18n";

const STORE_URL = "https://smartstore.naver.com/finisports";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const NAV_ITEMS = [
    { label: t.nav.aboutUs, href: "/about/overview", external: false, submenu: t.nav.aboutSub },
    { label: t.nav.wado, href: "/wado", external: false, submenu: null },
    { label: t.nav.guide, href: "/guide", external: false, submenu: t.nav.guideSub },
    { label: t.nav.support, href: "/support", external: false, submenu: t.nav.supportSub },
    { label: t.nav.store, href: STORE_URL, external: true, submenu: null },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/fini-logo.jpg"
              alt="FINI Sports"
              width={120}
              height={40}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) =>
              item.submenu ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-semibold tracking-wide text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[160px]">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-5 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold tracking-wide text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold tracking-wide text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center rounded-full border border-gray-200 overflow-hidden text-xs font-semibold">
              <button
                onClick={() => setLang("ko")}
                className={`px-3 py-1.5 transition-colors ${lang === "ko" ? "bg-primary text-white" : "text-gray-500 hover:text-gray-700"}`}
              >
                KOR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-white" : "text-gray-500 hover:text-gray-700"}`}
              >
                ENG
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-1">
            {/* Language Toggle Mobile */}
            <div className="flex items-center gap-2 px-4 py-2 mb-2">
              <button
                onClick={() => setLang("ko")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${lang === "ko" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}
              >
                KOR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${lang === "en" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}
              >
                ENG
              </button>
            </div>

            {NAV_ITEMS.map((item) =>
              item.submenu ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    {item.label}
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-gray-500 hover:text-primary hover:bg-gray-50 rounded-lg"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
