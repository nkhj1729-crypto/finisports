"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS, CATEGORIES, STORE_URL } from "@/data/products";
import { useLang } from "@/i18n";

const CATEGORY_EN: Record<string, string> = {
  "마사지": "Massage",
  "폼롤러": "Foam Roller",
  "교정": "Posture Correction",
  "매트": "Mat",
  "세트": "Set",
  "필라테스": "Pilates",
};

export default function WadoPage() {
  const { lang, t } = useLang();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeCategory
    ? PRODUCTS.filter((p) => p.category === activeCategory)
    : PRODUCTS;

  const catLabel = (cat: string) => lang === "en" ? (CATEGORY_EN[cat] || cat) : cat;

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero - Brand Style */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-warm to-accent/5" />
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-primary bg-primary/10 rounded-full mb-8 uppercase">
              Premium Performance Line
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              {lang === "en" ? (
                <>
                  For a balanced life
                  <br />
                  <span className="text-primary">WADO</span>
                </>
              ) : (
                <>
                  균형 있는 삶을 위한
                  <br />
                  <span className="text-primary">WADO [와도]</span>
                </>
              )}
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {lang === "en"
                ? "Beyond simple exercise equipment — introducing WADO, a premium home training lineup that blends seamlessly into your space."
                : "단순한 운동 기구를 넘어, 당신의 공간과 매끄럽게 어우러지는 프리미엄 홈트레이닝 라인업 WADO를 소개합니다."}
            </p>
          </div>
        </section>

        {/* Design Ethics & Material Focus */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-white to-accent/5" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-8 bg-primary rounded-full" />
                  <h2 className="text-xl md:text-2xl font-black">Design Ethics</h2>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  {lang === "en"
                    ? "WADO pursues a refined aesthetic that doesn't compromise your interior. With soft curves and natural tones, it blends seamlessly into your everyday space."
                    : "와도는 인테리어를 해치지 않는 절제된 미학을 추구합니다. 부드러운 곡선과 자연스러운 톤으로 일상의 공간에 자연스럽게 스며듭니다."}
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-8 bg-primary rounded-full" />
                  <h2 className="text-xl md:text-2xl font-black">Material Focus</h2>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  {lang === "en"
                    ? "Because our products touch your skin directly, we insist on only the safest materials. Made with eco-friendly, non-toxic TPE and high-density foam."
                    : "피부에 직접 닿는 제품이기에 가장 안전한 소재만을 고집합니다. 환경 호르몬 걱정 없는 무독성 TPE와 고밀도 폼으로 제작됩니다."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !activeCategory
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40"
              }`}
            >
              {t.wadoPage.allFilter}
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40"
                }`}
              >
                {catLabel(cat)}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p) => {
                const isExpanded = expandedId === p.id;
                const productIndex = PRODUCTS.findIndex((pr) => pr.id === p.id);
                const tp = t.products[productIndex];
                return (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={tp?.name ?? p.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-primary bg-white/90 rounded-full backdrop-blur-sm">
                        {catLabel(p.category)}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg md:text-xl font-bold mb-2">
                        {tp?.name ?? p.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {tp?.desc ?? p.desc}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(tp?.features ?? p.features).map((f, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-[11px] font-medium text-gray-600 bg-gray-100 rounded-full"
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* Expand/Collapse */}
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : p.id)
                        }
                        className="text-sm font-semibold text-primary hover:underline mb-4 flex items-center gap-1"
                      >
                        {isExpanded ? t.wadoPage.detailClose : t.wadoPage.detailOpen}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isExpanded && (
                        <div className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mb-4">
                          {tp?.detail ?? p.detail}
                        </div>
                      )}

                      {/* Store link */}
                      <a
                        href={STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-colors"
                      >
                        {t.wadoPage.buyBtn}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
