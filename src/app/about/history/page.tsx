"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/i18n";

export default function HistoryPage() {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              {t.aboutHistory.badge}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t.aboutHistory.title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg">
              {t.aboutHistory.subtitle}
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

              <div className="space-y-10">
                {t.aboutHistory.timeline
                  .slice()
                  .reverse()
                  .map((item) => (
                    <div key={item.year} className="relative flex gap-6 md:gap-8">
                      {/* Year badge */}
                      <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-sm md:text-base z-10 shadow-lg shadow-primary/25">
                        {item.year.slice(2)}
                      </div>

                      {/* Content */}
                      <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 flex-1 hover:shadow-md transition-all">
                        <h3 className="text-lg md:text-xl font-extrabold text-primary mb-3">
                          {item.year}
                        </h3>
                        <ul className="space-y-2">
                          {item.events.map((e, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
