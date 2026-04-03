import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OverviewPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              회사 개요
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              건강과 즐거움의 파트너, 주식회사 휘니
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
                  <span className="text-primary">FINI</span> CO., LTD
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  주식회사 휘니는 &ldquo;건강과 즐거움의 파트너&rdquo;라는 슬로건
                  아래, 요가, 필라테스, 재활, 다이어트, PT 등 다양한 피트니스
                  분야의 전문 용품을 기획, 제조, 유통하는 기업입니다.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  자체 브랜드 <strong>와두(WADO)</strong>를 통해 마사지볼,
                  폼롤러, 바로스파인, 요가매트 등 검증된 품질의 제품을
                  선보이고 있으며, ISO 9001 품질경영시스템 인증을 획득하여
                  제품의 품질과 안전성을 보장합니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["ISO 9001 인증", "특허 보유", "자체 브랜드 WADO"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Company Details Table */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-bold text-lg mb-6">기업 정보</h3>
                <dl className="space-y-4">
                  {[
                    { dt: "회사명", dd: "주식회사 휘니 (FINI CO., LTD)" },
                    { dt: "대표이사", dd: "강성구" },
                    { dt: "설립일", dd: "2018년" },
                    {
                      dt: "사업분야",
                      dd: "스포츠용품 제조 및 유통",
                    },
                    {
                      dt: "자체 브랜드",
                      dd: "WADO (와두)",
                    },
                    {
                      dt: "사업자등록번호",
                      dd: "476-88-00753",
                    },
                    {
                      dt: "통신판매업",
                      dd: "제2018-경기양주-0005호",
                    },
                    {
                      dt: "소재지",
                      dd: "경기도 양주시 외미로 24 (남방동)",
                    },
                    { dt: "대표전화", dd: "1899-0063" },
                    { dt: "이메일", dd: "admin@finisports.com" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex border-b border-gray-50 pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="w-28 shrink-0 text-sm font-semibold text-gray-400">
                        {item.dt}
                      </dt>
                      <dd className="text-sm text-gray-700">{item.dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
              비전
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "품질 우선",
                  desc: "엄격한 품질 관리로 안전하고 내구성 높은 제품만을 제공합니다.",
                },
                {
                  title: "고객 중심",
                  desc: "고객의 건강한 일상을 위해 끊임없이 연구하고 개선합니다.",
                },
                {
                  title: "혁신 추구",
                  desc: "특허 기술과 인체공학적 설계로 새로운 가치를 만들어냅니다.",
                },
              ].map((v, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gray-50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
