import Image from "next/image";
import { PRODUCTS, STORE_URL } from "@/data/products";

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-semibold text-primary tracking-widest text-center mb-3 uppercase">
          WADO Products
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          제품 소개
        </h2>
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
          와두(WADO)는 일상 속 건강 관리를 위해 설계된 휘니스포츠의 자체 브랜드입니다.
          마사지, 스트레칭, 교정, 운동까지 — 목적에 맞는 제품을 만나보세요.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.map((p, i) => (
            <a
              key={i}
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold text-primary bg-primary/10 rounded-full backdrop-blur-sm">
                  {p.category}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-sm md:text-base mb-2">{p.name}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {p.desc}
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary group-hover:underline">
                  스토어에서 보기
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 text-sm"
          >
            네이버 스토어에서 전체 제품 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
