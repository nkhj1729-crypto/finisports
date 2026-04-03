"use client";

import { useState } from "react";
import Link from "next/link";

const STORE_URL = "https://smartstore.naver.com/finisports";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  external: boolean;
  submenu: SubItem[] | null;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "ABOUT US",
    href: "/about/overview",
    external: false,
    submenu: [
      { label: "회사개요", href: "/about/overview" },
      { label: "회사연혁", href: "/about/history" },
      { label: "인증 및 특허", href: "/about/certifications" },
      { label: "오시는 길", href: "/about/location" },
    ],
  },
  { label: "WADO", href: "/wado", external: false, submenu: null },
  {
    label: "운동가이드",
    href: "/guide",
    external: false,
    submenu: [
      { label: "바로스파인", href: "/guide/barospine" },
      { label: "키즈", href: "/guide/kids" },
      { label: "골프", href: "/guide/golf" },
      { label: "폼롤러", href: "/guide/foamroller" },
    ],
  },
  {
    label: "고객센터",
    href: "/support",
    external: false,
    submenu: [
      { label: "고객센터", href: "/support" },
      { label: "공지사항", href: "/support/notice" },
      { label: "자료실", href: "/support/resources" },
    ],
  },
  { label: "STORE", href: STORE_URL, external: true, submenu: null },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl lg:text-2xl font-extrabold tracking-tight text-foreground">
              휘니스포츠
            </span>
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
                    className="text-sm font-semibold tracking-wide text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[160px]">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
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
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm text-gray-500 hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link
              href="#"
              className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              MY PAGE
            </Link>
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
            {NAV_ITEMS.map((item) =>
              item.submenu ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
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
            <Link
              href="#"
              className="block px-4 py-3 text-sm font-semibold text-primary"
              onClick={() => setMobileOpen(false)}
            >
              MY PAGE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
