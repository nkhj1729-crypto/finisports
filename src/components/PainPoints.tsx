"use client";

import { useLang } from "@/i18n";

export default function PainPoints() {
  const { t } = useLang();

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          {t.painPoints.title}
        </h2>
        <p className="text-center text-gray-400 mb-14 text-sm">
          {t.painPoints.subtitle}
        </p>

        <div className="grid gap-4 md:gap-5">
          {t.painPoints.items.map((point, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-6 py-5 md:px-8 md:py-6 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                  {i + 1}
                </span>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  &ldquo;{point}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-lg md:text-xl font-semibold text-gray-800">
          {t.painPoints.transition}{" "}
          <span className="text-primary">{t.painPoints.transitionHighlight}</span>
        </p>
      </div>
    </section>
  );
}
