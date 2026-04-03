const REVIEWS = [
  {
    text: "요가매트 미끄러짐 때문에 3개째 샀는데, 여기서 산 건 진짜 안 미끄러져요.",
    author: "요가 2년차 고객",
    tag: "요가매트",
  },
  {
    text: "거북목 교정 폼롤러 쓰고 나서 목 통증이 확실히 줄었습니다.",
    author: "재활 목적 고객",
    tag: "체형교정",
  },
  {
    text: "PT 스튜디오 오픈하면서 소도구 전부 여기서 맞췄어요. 대응도 빠르고 좋습니다.",
    author: "PT 트레이너 고객",
    tag: "PT용품",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          실제 고객들의 <span className="text-primary">이야기</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-7 md:p-8 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-5">
                {r.tag}
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <p className="text-sm font-semibold text-gray-400">
                &mdash; {r.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
