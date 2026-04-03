import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RESOURCES = [
  {
    category: "카탈로그",
    items: [
      {
        title: "2025 WADO 제품 카탈로그",
        desc: "와두 전 제품 라인업 소개 자료",
        format: "PDF",
        size: "12.5MB",
      },
      {
        title: "바로스파인 시리즈 브로슈어",
        desc: "바로스파인, 바로스파인 프로, 바로 커브 소개",
        format: "PDF",
        size: "8.2MB",
      },
    ],
  },
  {
    category: "운동 가이드",
    items: [
      {
        title: "바로스파인 스트레칭 가이드북",
        desc: "기본, 골반, 하체 스트레칭 6가지 동작 안내",
        format: "PDF",
        size: "5.1MB",
      },
      {
        title: "마사지볼 사용 가이드",
        desc: "부위별 마사지볼 활용법 (싱글볼, 피넛볼)",
        format: "PDF",
        size: "3.8MB",
      },
      {
        title: "폼롤러 셀프 마사지 가이드",
        desc: "미니 폼롤러, 하프 폼롤러 활용 운동법",
        format: "PDF",
        size: "4.2MB",
      },
    ],
  },
  {
    category: "인증서류",
    items: [
      {
        title: "ISO 9001:2015 인증서",
        desc: "GERMAN CERT 품질경영시스템 인증",
        format: "PDF",
        size: "1.2MB",
      },
      {
        title: "특허증 (척추 스트레칭용 운동기구)",
        desc: "특허번호 제10-2443801호",
        format: "PDF",
        size: "0.8MB",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              Resources
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              자료실
            </h1>
            <p className="text-gray-500 text-base md:text-lg">
              제품 카탈로그, 운동 가이드, 인증서류 등을 다운로드하실 수 있습니다.
            </p>
          </div>
        </section>

        {/* Resources by category */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
            {RESOURCES.map((group) => (
              <div key={group.category}>
                <h2 className="text-xl md:text-2xl font-extrabold mb-6">
                  {group.category}
                </h2>
                <div className="space-y-3">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-gray-100 px-6 py-5 flex items-center gap-4 hover:shadow-md hover:border-primary/20 transition-all group"
                    >
                      {/* File icon */}
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm md:text-base">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {item.desc}
                        </p>
                      </div>

                      {/* Meta + Download */}
                      <div className="shrink-0 flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                          <span className="text-[10px] font-bold text-gray-400 uppercase">
                            {item.format}
                          </span>
                          <p className="text-xs text-gray-300">{item.size}</p>
                        </div>
                        <button className="w-10 h-10 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notice */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm text-gray-400">
              자료 다운로드 관련 문의는{" "}
              <a href="mailto:admin@finisports.com" className="text-primary font-semibold hover:underline">
                admin@finisports.com
              </a>{" "}
              으로 연락해주세요.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
