"use client";

import { useState } from "react";

const CATEGORIES = [
  {
    id: "home",
    emoji: "\uD83C\uDFE0",
    label: "홈트레이닝",
    quote: "퇴근 후 30분, 거실이 나만의 짐이 됩니다.",
    desc: "매트, 덤벨, 저항 밴드 하나면 충분합니다. 헬스장 없이도 체계적인 운동이 가능한 홈트 필수템을 만나보세요.",
    cta: "홈트레이닝 용품 보기",
    color: "bg-primary",
  },
  {
    id: "yoga",
    emoji: "\uD83E\uDDD8",
    label: "요가 \u00B7 필라테스",
    quote: "수업이 끝나도, 나의 연습은 계속됩니다.",
    desc: "논슬립 요가매트, 필라테스 링, 폼롤러, 요가 블록까지. 나의 수련을 완성하는 프리미엄 소도구 컬렉션.",
    cta: "요가/필라테스 용품 보기",
    color: "bg-emerald-500",
  },
  {
    id: "rehab",
    emoji: "\uD83D\uDCAA",
    label: "재활 \u00B7 체형교정",
    quote: "아프지 않는 몸이 가장 좋은 몸입니다.",
    desc: "거북목, 라운드숄더, 부상 후 회복까지. 병원과 집을 잇는 셀프 재활 & 교정 솔루션.",
    cta: "재활/교정 용품 보기",
    color: "bg-blue-500",
  },
  {
    id: "diet",
    emoji: "\uD83D\uDD25",
    label: "다이어트",
    quote: "올해는 진짜 시작하는 거예요.",
    desc: "처음이라 괜찮습니다. 작고 가벼운 것부터. 꾸준히 쓸 수 있는 다이어트 운동 용품으로 변화를 만드세요.",
    cta: "다이어트 용품 보기",
    color: "bg-orange-500",
  },
  {
    id: "pt",
    emoji: "\uD83E\uDD4A",
    label: "PT \u00B7 트레이너",
    quote: "회원이 신뢰하는 장비가 곧 트레이너의 전문성입니다.",
    desc: "복싱글러브, 트레이닝 밴드, 소도구 세트까지. 스튜디오 운영에 필요한 모든 피트니스 장비를 한 곳에서.",
    cta: "PT/트레이너 용품 보기",
    color: "bg-rose-500",
  },
];

export default function Categories() {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          당신의 운동 목표에 <span className="text-primary">딱 맞는 용품</span>
        </h2>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.id}
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
