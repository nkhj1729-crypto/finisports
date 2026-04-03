"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS, CATEGORIES, STORE_URL } from "@/data/products";
import { useLang } from "@/i18n";

export default function WadoPage() {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeCategory
    ? PRODUCTS.filter((p) => p.category === activeCategory)
    : PRODUCTS;

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              {t.wadoPage.badge}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t.wadoPage.title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.wadoPage.desc}
            </p>
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
                {cat}
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
                        {p.category}
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
