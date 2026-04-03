import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const GUIDE_CATEGORIES = [
  {
    title: "바로스파인",
    subtitle: "Barospine",
    desc: "척추 스트레칭과 체형 교정 운동",
    href: "/guide/barospine",
    icon: "🦴",
  },
  {
    title: "키즈",
    subtitle: "Kids",
    desc: "성장기 아이를 위한 자세 교정 운동",
    href: "/guide/kids",
    icon: "👶",
  },
  {
    title: "골프",
    subtitle: "Golf",
    desc: "골퍼를 위한 유연성·회전력 컨디셔닝",
    href: "/guide/golf",
    icon: "⛳",
  },
  {
    title: "폼롤러",
    subtitle: "Foam Roller",
    desc: "셀프 마사지와 근막 이완 가이드",
    href: "/guide/foamroller",
    icon: "🧘",
  },
];

export default function GuidePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              Exercise Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              운동 가이드
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              와두 제품을 활용한 올바른 운동 방법을 카테고리별로 안내합니다.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {GUIDE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <p className="text-xs font-semibold text-primary tracking-wider uppercase mb-1">
                    {cat.subtitle}
                  </p>
                  <h3 className="text-2xl font-extrabold mb-2 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    가이드 보기
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
