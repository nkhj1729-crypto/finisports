const VALUES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "검증된 품질",
    desc: "싸구려 제품에 두 번 돈 쓰지 마세요.\n내구성과 안전성을 검증한 피트니스 용품만 엄선합니다.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "누구나 시작할 수 있는 가격",
    desc: "입문자용 밴드부터 전문가용 웨이트까지,\n부담 없는 가격으로 운동을 시작하세요.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "운동 목적별 큐레이션",
    desc: "홈트, 요가, 재활, 다이어트, PT —\n목적에 맞는 제품을 빠르게 찾을 수 있습니다.",
  },
];

export default function Solution() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-semibold text-primary tracking-widest text-center mb-3 uppercase">
          Why FINI Sports
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          건강과 즐거움의 파트너, <span className="text-primary">휘니스포츠</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {VALUES.map((v, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-gray-500 leading-relaxed whitespace-pre-line text-sm md:text-base">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
