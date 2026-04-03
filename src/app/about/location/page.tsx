import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LocationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              Location
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              오시는 길
            </h1>
            <p className="text-gray-500 text-base md:text-lg">
              주식회사 휘니 본사 위치를 안내합니다.
            </p>
          </div>
        </section>

        {/* Map + Info */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 mb-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.3!2d127.045!3d37.785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6rK96riw64-EIOyWkeyjiOyLnCDrgqjrsKnrj5kgMjA4LTEg7Jm466-866GcIDI0!5e0!3m2!1sko!2skr!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="휘니스포츠 본사 위치"
              />
            </div>

            {/* Address Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-bold text-lg mb-6">본사 주소</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-0.5">도로명 주소</p>
                      <p className="font-semibold text-sm">경기도 양주시 외미로 24</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-0.5">지번 주소</p>
                      <p className="font-semibold text-sm">경기도 양주시 남방동 208-1</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-0.5">우편번호</p>
                      <p className="font-semibold text-sm">11469</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-bold text-lg mb-6">연락처</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-0.5">대표전화</p>
                      <p className="font-bold text-lg text-primary">1899-0063</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-0.5">이메일</p>
                      <p className="font-semibold text-sm">admin@finisports.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-0.5">운영시간</p>
                      <p className="font-semibold text-sm">평일 09:00 ~ 18:00</p>
                      <p className="text-xs text-gray-400">점심 12:00~13:00 / 주말, 공휴일 휴무</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
