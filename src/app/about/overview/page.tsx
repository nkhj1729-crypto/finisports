"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/i18n";

export default function OverviewPage() {
  const { lang, t } = useLang();

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Brand Story Hero */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          {/* Warm gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-warm to-primary/10" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-primary bg-primary/10 rounded-full mb-8 uppercase">
              Brand Story
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
              {lang === "en" ? (
                <>
                  The beginning of
                  <br />
                  a healthier life,
                  <br />
                  <span className="text-primary">we lower the barrier</span>
                </>
              ) : (
                <>
                  건강한 삶의 시작,
                  <br />
                  <span className="text-primary">그 문턱을 낮춥니다</span>
                </>
              )}
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {lang === "en"
                ? "FINI Sports aims to break free from the prejudice that 'exercise has to be complicated.' For your healthy routine that can be completed in a small space at home, we propose the most essential and refined tools."
                : "휘니스포츠는 '운동은 거창해야 한다'는 편견에서 벗어나고자 합니다. 집 안 작은 공간에서도 충분히 완성될 수 있는 당신만의 건강한 루틴을 위해, 우리는 가장 본질적이고 세련된 도구들을 제안합니다."}
            </p>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Mission */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-8 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black">Our Mission</h2>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  {lang === "en"
                    ? "To ensure that anyone can discover the joy of exercise in their daily lives without limitations, by providing quality home training tools at fair prices. This is the mission of FINI Sports."
                    : "누구나 자신의 일상 속에서 제약 없이 운동의 즐거움을 발견할 수 있도록, 합리적인 가격과 타협하지 않는 퀄리티의 홈 트레이닝 기어를 공급하는 것이 휘니스포츠의 사명입니다."}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-8 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black">Our Vision</h2>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  {lang === "en"
                    ? "Not just a sports brand, but your lifestyle partner — we dream of a world where healthy habits become part of everyday life. We will lead the way in sustainable home training culture."
                    : "단순한 스포츠 브랜드가 아닌, 당신의 라이프스타일 파트너로서 건강한 습관이 일상이 되는 세상을 꿈꿉니다. 우리는 지속 가능한 홈 트레이닝 문화를 선도해 나갈 것입니다."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - 01 02 03 */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {(lang === "en"
                ? [
                    { num: "01", title: "Focus on Essentials", desc: "We eliminate unnecessary frills and create products centered solely on function and durability." },
                    { num: "02", title: "Harmony with Life", desc: "We pursue designs that blend naturally with your living room interior." },
                    { num: "03", title: "Community Growth", desc: "We collaborate with trainers and studios to deliver better guide content." },
                  ]
                : [
                    { num: "01", title: "본질에 집중", desc: "불필요한 장식을 배제하고 기능과 내구성에만 충실한 제품을 만듭니다." },
                    { num: "02", title: "일상의 조화", desc: "거실 한구석에 두어도 인테리어와 자연스럽게 어우러지는 디자인을 추구합니다." },
                    { num: "03", title: "공동체 상생", desc: "홈트레이너 및 스튜디오와 협력하여 더 나은 가이드 콘텐츠를 제공합니다." },
                  ]
              ).map((v) => (
                <div key={v.num} className="text-center">
                  <p className="text-6xl md:text-7xl font-black text-primary/15 mb-2">{v.num}</p>
                  <h3 className="text-xl md:text-2xl font-black mb-4">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-warm via-white to-primary/5" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-primary bg-primary/10 rounded-full mb-6 uppercase">
                Meet Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                {lang === "en" ? "The People Behind FINI" : "휘니를 만드는 사람들"}
              </h2>
              <p className="text-gray-500">
                {lang === "en"
                  ? "Experts passionate about health come together to design the best product experience."
                  : "건강에 진심인 전문가들이 모여 최상의 제품 경험을 설계합니다."}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {(lang === "en"
                ? [
                    { role: "CEO", name: "Seong-gu Kang", desc: "Brand vision & strategy" },
                    { role: "Product Design", name: "R&D Team", desc: "Ergonomic product development" },
                    { role: "Quality Control", name: "QC Team", desc: "ISO 9001 quality assurance" },
                    { role: "Customer Care", name: "CS Team", desc: "Customer satisfaction first" },
                  ]
                : [
                    { role: "CEO", name: "강성구", desc: "브랜드 비전 및 전략" },
                    { role: "제품 설계", name: "R&D팀", desc: "인체공학적 제품 개발" },
                    { role: "품질 관리", name: "QC팀", desc: "ISO 9001 품질 보증" },
                    { role: "고객 케어", name: "CS팀", desc: "고객 만족 최우선" },
                  ]
              ).map((member, i) => (
                <div key={i} className="group">
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-gray-100 to-warm mb-4 flex items-end justify-center overflow-hidden">
                    <div className="w-20 h-20 rounded-full bg-primary/10 mb-8 flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{member.role}</p>
                  <h3 className="font-bold text-base mb-0.5">{member.name}</h3>
                  <p className="text-xs text-gray-400">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info Table */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-black text-center mb-12">
              {t.aboutOverview.companyInfoTitle}
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {t.aboutOverview.companyInfo.map((item, i) => (
                <div
                  key={i}
                  className={`flex px-6 md:px-8 py-4 ${i !== t.aboutOverview.companyInfo.length - 1 ? "border-b border-gray-50" : ""}`}
                >
                  <dt className="w-28 md:w-36 shrink-0 text-sm font-semibold text-gray-400">
                    {item.dt}
                  </dt>
                  <dd className="text-sm text-gray-700">{item.dd}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Quick View */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-12">
              {lang === "en" ? "Trusted Quality" : "신뢰할 수 있는 품질"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "ISO 9001", sub: lang === "en" ? "Quality Management" : "품질경영시스템", image: "/images/cert-iso9001.jpg" },
                { label: lang === "en" ? "Patent" : "특허", sub: lang === "en" ? "Spine Stretching Device" : "척추 스트레칭 기구", image: "/images/cert-patent.jpg" },
                { label: lang === "en" ? "Trademark" : "상표등록", sub: "WADO", image: "/images/cert-trademark-wado.jpg" },
                { label: lang === "en" ? "Trademark" : "상표등록", sub: "FINI", image: "/images/cert-trademark-fini.jpg" },
              ].map((cert, i) => (
                <div key={i} className="group">
                  <div className="relative aspect-[3/4] rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden mb-3 group-hover:shadow-md transition-all">
                    <Image src={cert.image} alt={cert.label} fill className="object-contain p-3" />
                  </div>
                  <p className="font-bold text-sm">{cert.label}</p>
                  <p className="text-xs text-gray-400">{cert.sub}</p>
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
