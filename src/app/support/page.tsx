"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQS = [
  {
    q: "배송은 얼마나 걸리나요?",
    a: "주문 확인 후 1~3 영업일 이내 출고됩니다. 출고 후 1~2일 내 수령 가능하며, 지역에 따라 차이가 있을 수 있습니다.",
  },
  {
    q: "배송비는 얼마인가요?",
    a: "기본 배송비는 3,000원이며, 일정 금액 이상 구매 시 무료 배송됩니다. 도서산간 지역은 추가 배송비가 발생할 수 있습니다.",
  },
  {
    q: "교환/반품은 어떻게 하나요?",
    a: "수령 후 7일 이내 교환 및 반품이 가능합니다. 단순 변심의 경우 왕복 택배비 6,000원은 고객 부담이며, 제품 하자 시 무료로 교환해드립니다.",
  },
  {
    q: "제품 강도(Lv1, Lv2, Lv3)는 어떻게 다른가요?",
    a: "Lv1(소프트)은 민감한 부위나 입문자에게, Lv2(미디엄)은 일반적인 사용에, Lv3(하드)는 강한 자극을 원하거나 근육이 많이 뭉친 분께 추천합니다. 처음에는 Lv1부터 시작하시는 것을 권장합니다.",
  },
  {
    q: "바로스파인은 누구나 사용할 수 있나요?",
    a: "대부분의 성인이 사용할 수 있으나, 척추 수술 이력이 있거나 심한 디스크 증상이 있는 분은 전문의와 상담 후 사용해주세요.",
  },
  {
    q: "대량 구매(B2B)도 가능한가요?",
    a: "네, 가능합니다. PT 스튜디오, 요가원, 필라테스 센터, 병원 등 대량 구매를 원하시면 고객센터(1899-0063)로 문의해주세요. 별도 견적을 안내해드립니다.",
  },
  {
    q: "해외 배송이 되나요?",
    a: "현재 해외 배송은 지원하지 않으며, 국내 배송만 가능합니다. 해외 배송 관련 문의는 이메일(admin@finisports.com)로 연락해주세요.",
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              Customer Support
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              고객센터
            </h1>
            <p className="text-gray-500 text-base md:text-lg">
              궁금한 점이 있으시면 아래 FAQ를 확인하시거나, 직접 문의해주세요.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12">
              자주 묻는 질문
            </h2>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
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
                  문의하기
                </h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        이름
                      </label>
                      <input
                        type="text"
                        placeholder="이름을 입력하세요"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        이메일
                      </label>
                      <input
                        type="email"
                        placeholder="이메일을 입력하세요"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      제목
                    </label>
                    <input
                      type="text"
                      placeholder="문의 제목을 입력하세요"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      문의 내용
                    </label>
                    <textarea
                      rows={6}
                      placeholder="문의 내용을 상세히 적어주세요"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-full text-sm hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                  >
                    문의 보내기
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
                  연락처 정보
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
                      value: "1899-0063",
                      sub: "평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00)",
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: "이메일",
                      value: "admin@finisports.com",
                      sub: "24시간 접수, 영업일 기준 1~2일 내 답변",
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      label: "주소",
                      value: "경기도 양주시 남방동 208-1 (외미로 24)",
                      sub: "주식회사 휘니",
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: "운영시간",
                      value: "평일 09:00 ~ 18:00",
                      sub: "주말 및 공휴일 휴무",
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
                        <p className="text-xs text-gray-400 mt-0.5">
                          {item.sub}
                        </p>
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
