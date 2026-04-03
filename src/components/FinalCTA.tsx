export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          오늘이 가장 빠른 시작입니다
        </h2>
        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          거창한 장비가 아니라, 꾸준한 습관이 몸을 바꿉니다.
          <br />
          휘니스포츠에서 나에게 맞는 첫 운동 용품을 찾아보세요.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#bestsellers"
            className="px-8 py-4 bg-white text-primary font-bold rounded-full text-sm md:text-base hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-0.5"
          >
            베스트 상품 보러 가기
          </a>
          <a
            href="https://smartstore.naver.com/finisports" target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-full text-sm md:text-base hover:border-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            카테고리별 쇼핑하기
          </a>
        </div>
      </div>
    </section>
  );
}
