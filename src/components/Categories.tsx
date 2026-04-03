"use client";

import { useState } from "react";
import { useLang } from "@/i18n";

const COLORS = [
  "bg-primary",
  "bg-emerald-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-rose-500",
];

export default function Categories() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const cat = t.categoriesSection.items[active];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          {t.categoriesSection.title} <span className="text-primary">{t.categoriesSection.titleHighlight}</span>
        </h2>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {t.categoriesSection.items.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                i === active
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary"
              }`}
            >
              <span className="mr-1.5">{c.emoji}</span>
              {c.label}
            </button>
          ))}
        </div>

        {/* Active category card */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-5xl mb-4">{cat.emoji}</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{cat.label}</h3>
          <blockquote className="text-lg md:text-xl text-gray-500 italic mb-6 border-l-4 border-primary/30 pl-4">
            {cat.quote}
          </blockquote>
          <p className="text-gray-600 leading-relaxed mb-8">{cat.desc}</p>
          <a
            href="https://smartstore.naver.com/finisports" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm"
          >
            {cat.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
