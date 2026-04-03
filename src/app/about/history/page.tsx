import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TIMELINE = [
  {
    year: "2018",
    events: [
      "주식회사 휘니 설립",
      "피트니스 용품 유통 사업 시작",
      "통신판매업 등록 (제2018-경기양주-0005호)",
    ],
  },
  {
    year: "2019",
    events: [
      "자체 브랜드 WADO(와두) 런칭",
      "WADO 상표 등록 출원",
      "FINI 상표 등록 출원",
    ],
  },
  {
    year: "2020",
    events: [
      "WADO 상표 등록 완료 (제40-1583819호)",
      "FINI 상표 등록 완료 (제40-1583820호)",
      "온라인 쇼핑몰 오픈 (finisports.com)",
      "네이버 스마트스토어 입점",
    ],
  },
  {
    year: "2021",
    events: [
      "와두 미니 폼롤러 출시",
      "와두 마사지볼 시리즈 출시 (싱글/피넛)",
      "옥션, G마켓 등 오픈마켓 확장",
    ],
  },
  {
    year: "2022",
    events: [
      "척추 스트레칭용 운동기구 특허 등록 (제10-2443801호)",
      "바로스파인 시리즈 출시",
      "스파크 매트 개발 및 출시",
    ],
  },
  {
    year: "2023",
    events: [
      "ISO 9001:2015 품질경영시스템 인증 획득 (GQ-232424)",
      "바로스파인 프로 출시",
      "SPARK KIT / SPARK KIT+ 세트 출시",
    ],
  },
  {
    year: "2024",
    events: [
      "필라테스 링 출시",
      "NBR 요가매트 라인업 확장 (10/15/20mm)",
      "B2B 사업 확대 (PT센터, 필라테스 스튜디오)",
    ],
  },
  {
    year: "2025",
    events: [
      "브랜드 리뉴얼 및 공식 홈페이지 리뉴얼",
      "바로 커브 출시",
      "하프 폼롤러 출시",
    ],
  },
];

export default function HistoryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              Our History
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              회사 연혁
            </h1>
            <p className="text-gray-500 text-base md:text-lg">
              2018년 설립 이후, 건강한 일상을 위한 여정
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

              <div className="space-y-10">
                {TIMELINE.slice()
                  .reverse()
                  .map((item) => (
                    <div key={item.year} className="relative flex gap-6 md:gap-8">
                      {/* Year badge */}
                      <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-sm md:text-base z-10 shadow-lg shadow-primary/25">
                        {item.year.slice(2)}
                      </div>

                      {/* Content */}
                      <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 flex-1 hover:shadow-md transition-all">
                        <h3 className="text-lg md:text-xl font-extrabold text-primary mb-3">
                          {item.year}
                        </h3>
                        <ul className="space-y-2">
                          {item.events.map((e, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
