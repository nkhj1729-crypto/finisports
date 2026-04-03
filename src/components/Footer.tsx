import Link from "next/link";

const STORE_URL = "https://smartstore.naver.com/finisports";

const FOOTER_NAV = [
  { label: "ABOUT US", href: "#about", external: false },
  { label: "WADO", href: "/wado", external: false },
  { label: "운동가이드", href: "/guide", external: false },
  { label: "고객센터", href: "/support", external: false },
  { label: "STORE", href: STORE_URL, external: true },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-3">
              휘니스포츠
            </h3>
            <p className="text-sm leading-relaxed">
              건강과 즐거움의 파트너
              <br />
              주식회사 휘니 (FINI CO., LTD)
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {FOOTER_NAV.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors w-fit"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm hover:text-white transition-colors w-fit"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-500">대표전화</span>{" "}
                <span className="text-white font-semibold">1899-0063</span>
              </p>
              <p>
                <span className="text-gray-500">이메일</span>{" "}
                admin@finisports.com
              </p>
              <p>
                <span className="text-gray-500">주소</span>{" "}
                경기도 양주시 남방동 208-1 (외미로 24)
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            대표: 강성구 | 사업자등록번호: 476-88-00753 |
            통신판매업: 제2018-경기양주-0005호
          </p>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} FINI CO., LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
