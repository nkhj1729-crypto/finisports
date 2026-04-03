"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/i18n";

const GUIDE_HREFS = [
  "/guide/barospine",
  "/guide/kids",
  "/guide/golf",
  "/guide/foamroller",
];

const GUIDE_ICONS = ["🦴", "👶", "⛳", "🧘"];

export default function GuidePage() {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              {t.guideHub.badge}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t.guideHub.title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              {t.guideHub.desc}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {t.guideHub.categories.map((cat, i) => (
                <Link
                  key={GUIDE_HREFS[i]}
                  href={GUIDE_HREFS[i]}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <div className="text-4xl mb-4">{GUIDE_ICONS[i]}</div>
                  <p className="text-xs font-semibold text-primary tracking-wider uppercase mb-1">
                    {cat.subtitle}
                  </p>
                  <h3 className="text-2xl font-extrabold mb-2 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    {t.guideHub.viewGuide}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
