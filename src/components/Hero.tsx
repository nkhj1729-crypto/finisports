export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Decorative shapes */}
      <div className="absolute top-32 left-[8%] w-16 h-28 md:w-20 md:h-36 rounded-full border-4 border-primary/30 -rotate-[15deg] animate-bounce-slow" />
      <div className="absolute top-24 right-[10%] w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-primary/80 rotate-12 animate-pulse-slow" />
      <div className="absolute bottom-32 left-[15%] w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent/60 animate-pulse-slow" />
      <div className="absolute bottom-40 right-[18%] w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-200 to-white shadow-lg animate-bounce-slow" />

      {/* Bottom warm gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-warm to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-sm md:text-base font-semibold text-primary tracking-widest mb-4 uppercase">
          FINI SPORTS
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          운동은 거창하지
          <br />
          <span className="text-primary">않아도 됩니다</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
          요가매트 하나, 밴드 하나로 시작하는 나만의 건강 루틴.
          <br className="hidden sm:block" />
          휘니스포츠가 첫 걸음부터 함께합니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://smartstore.naver.com/finisports" target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-white font-bold rounded-full text-sm md:text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            지금 시작하기
          </a>
          <a
            href="#bestsellers"
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-full text-sm md:text-base hover:border-primary hover:text-primary transition-all hover:-translate-y-0.5"
          >
            베스트 상품 보기
          </a>
        </div>
      </div>

      {/* Category tabs at bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="flex justify-center gap-6 md:gap-10 text-xs md:text-sm font-semibold text-gray-400 tracking-wider">
          {["YOGA MATS", "RESISTANCE BANDS", "FOAM ROLLERS", "DUMBBELLS"].map(
            (cat) => (
              <span
                key={cat}
                className="hover:text-primary cursor-pointer transition-colors hidden sm:inline"
              >
                {cat}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
