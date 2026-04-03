import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const CERTS = [
  {
    title: "ISO 9001:2015 품질경영시스템",
    org: "GERMAN CERT",
    number: "GQ-232424",
    date: "2023.01.20",
    scope: "스포츠용품의 제조 및 유통",
    image: "/images/cert-iso9001.jpg",
  },
  {
    title: "특허증 — 척추 스트레칭용 운동기구",
    org: "특허청 (KIPO)",
    number: "제10-2443801호",
    date: "2022.09.13",
    scope: "바로스파인 핵심 기술 특허",
    image: "/images/cert-patent.jpg",
  },
  {
    title: "상표등록증 — WADO",
    org: "특허청 (KIPO)",
    number: "제40-1583819호",
    date: "2020.03.09",
    scope: "제27류 스포츠용 매트등 4건",
    image: "/images/cert-trademark-wado.jpg",
  },
  {
    title: "상표등록증 — FINI",
    org: "특허청 (KIPO)",
    number: "제40-1583820호",
    date: "2020.03.09",
    scope: "제10류 의료용 벨트등 10건",
    image: "/images/cert-trademark-fini.jpg",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              Certifications & Patents
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              인증 및 특허
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              휘니스포츠는 국제 품질 인증과 특허 기술로
              제품의 품질과 안전성을 보장합니다.
            </p>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {CERTS.map((cert, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="grid sm:grid-cols-[200px_1fr] md:grid-cols-[220px_1fr]">
                    {/* Certificate Image */}
                    <div className="relative aspect-[3/4] sm:aspect-auto bg-gray-50">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-5 md:p-6 flex flex-col justify-center">
                      <h3 className="text-base md:text-lg font-bold mb-4">
                        {cert.title}
                      </h3>
                      <dl className="space-y-2.5">
                        {[
                          { dt: "발급기관", dd: cert.org },
                          { dt: "인증번호", dd: cert.number },
                          { dt: "등록일", dd: cert.date },
                          { dt: "범위", dd: cert.scope },
                        ].map((item, j) => (
                          <div key={j} className="flex text-sm">
                            <dt className="w-16 shrink-0 font-semibold text-gray-400">
                              {item.dt}
                            </dt>
                            <dd className="text-gray-700">{item.dd}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
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
