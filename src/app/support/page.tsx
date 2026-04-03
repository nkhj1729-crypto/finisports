"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/i18n";

export default function SupportPage() {
  const { t } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              {t.supportPage.badge}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t.supportPage.title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg">
              {t.supportPage.desc}
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12">
              {t.supportPage.faqTitle}
            </h2>

            <div className="space-y-3">
              {t.supportPage.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-sm md:text-base pr-4">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-5 h-5 shrink-0 text-gray-400 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
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
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
                  {t.supportPage.formTitle}
                </h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        {t.supportPage.nameLabel}
                      </label>
                      <input
                        type="text"
                        placeholder={t.supportPage.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        {t.supportPage.emailLabel}
                      </label>
                      <input
                        type="email"
                        placeholder={t.supportPage.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t.supportPage.subjectLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.supportPage.subjectPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t.supportPage.messageLabel}
                    </label>
                    <textarea
                      rows={6}
                      placeholder={t.supportPage.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-full text-sm hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                  >
                    {t.supportPage.submitBtn}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
                  {t.supportPage.contactTitle}
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      label: "대표전화",
                      value: t.supportPage.contactPhone,
                      sub: t.supportPage.contactPhoneSub,
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: "이메일",
                      value: t.supportPage.contactEmail,
                      sub: t.supportPage.contactEmailSub,
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      label: "주소",
                      value: t.supportPage.contactAddress,
                      sub: t.supportPage.contactAddressSub,
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: "운영시간",
                      value: t.supportPage.contactHours,
                      sub: t.supportPage.contactHoursSub,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="font-bold text-base">{item.value}</p>
                        {item.sub && (
                          <p className="text-xs text-gray-400 mt-0.5">
                            {item.sub}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
