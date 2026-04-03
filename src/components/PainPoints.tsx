const PAIN_POINTS = [
  "헬스장 등록했는데 바빠서 한 달에 두 번도 못 갔어요.",
  "요가 수업 끝나면 집에서 뭘로 연습해야 할지 모르겠어요.",
  "거북목이 심해서 운동을 시작하고 싶은데 뭘 사야 하죠?",
  "다이어트 기구 샀다가 안 쓰고 방치한 게 한두 개가 아니에요.",
  "PT 스튜디오 소도구를 믿을 만한 곳에서 한 번에 사고 싶어요.",
];

export default function PainPoints() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          이런 고민, 해본 적 있으신가요?
        </h2>
        <p className="text-center text-gray-400 mb-14 text-sm">
          수만 명의 고객이 같은 고민을 했습니다
        </p>

        <div className="grid gap-4 md:gap-5">
          {PAIN_POINTS.map((point, i) => (
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
          걱정 마세요.{" "}
          <span className="text-primary">휘니스포츠</span>에서 답을 찾았습니다.
        </p>
      </div>
    </section>
  );
}
