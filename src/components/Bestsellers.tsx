"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, STORE_URL } from "@/data/products";
import { useLang } from "@/i18n";

const FEATURED = PRODUCTS.slice(0, 4);

export default function Bestsellers() {
  const { t } = useLang();
  const featuredTranslations = t.products.slice(0, 4);

  return (
    <section id="bestsellers" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-semibold text-primary tracking-widest text-center mb-3 uppercase">
          {t.bestsellers.badge}
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          {t.bestsellers.title}
        </h2>
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
          {t.bestsellers.desc}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {FEATURED.map((p, i) => (
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
                  alt={featuredTranslations[i].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold text-primary bg-primary/10 rounded-full backdrop-blur-sm">
                  {p.category}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-sm md:text-base mb-2">{featuredTranslations[i].name}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {featuredTranslations[i].desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/wado"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 text-sm"
          >
            {t.bestsellers.viewAll}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
