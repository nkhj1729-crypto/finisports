"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLang } from "@/i18n";

const CERT_IMAGES = [
  "/images/cert-iso9001.jpg",
  "/images/cert-patent.jpg",
  "/images/cert-trademark-wado.jpg",
  "/images/cert-trademark-fini.jpg",
];

export default function CertificationsPage() {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              {t.aboutCerts.badge}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t.aboutCerts.title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              {t.aboutCerts.subtitle}
            </p>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {t.aboutCerts.certs.map((cert, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="grid sm:grid-cols-[200px_1fr] md:grid-cols-[220px_1fr]">
                    {/* Certificate Image */}
                    <div className="relative aspect-[3/4] sm:aspect-auto bg-gray-50">
                      <Image
                        src={CERT_IMAGES[i]}
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
