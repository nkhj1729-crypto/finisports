"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/i18n";

export default function OverviewPage() {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              {t.aboutOverview.badge}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t.aboutOverview.title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              {t.aboutOverview.subtitle}
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
                  {t.aboutOverview.introTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t.aboutOverview.intro1}
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t.aboutOverview.intro2}
                </p>
                <div className="flex flex-wrap gap-3">
                  {t.aboutOverview.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Company Details Table */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-bold text-lg mb-6">{t.aboutOverview.companyInfoTitle}</h3>
                <dl className="space-y-4">
                  {t.aboutOverview.companyInfo.map((item, i) => (
                    <div
                      key={i}
                      className="flex border-b border-gray-50 pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="w-28 shrink-0 text-sm font-semibold text-gray-400">
                        {item.dt}
                      </dt>
                      <dd className="text-sm text-gray-700">{item.dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
              {t.aboutOverview.visionTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.aboutOverview.visions.map((v, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gray-50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
