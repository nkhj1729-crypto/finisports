"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Notice {
  id: string;
  category: string;
  title: string;
  content: string;
  created_at: string;
}

const FALLBACK_NOTICES: Notice[] = [
  {
    id: "1",
    category: "공지",
    title: "2025년 휘니스포츠 공식 홈페이지 리뉴얼 안내",
    content: "안녕하세요, 휘니스포츠입니다. 보다 나은 서비스 제공을 위해 공식 홈페이지를 리뉴얼하였습니다.",
    created_at: "2025-04-01",
  },
  {
    id: "2",
    category: "공지",
    title: "네이버 스마트스토어 공식 입점 안내",
    content: "휘니스포츠 네이버 스마트스토어가 정식 오픈되었습니다.",
    created_at: "2025-03-15",
  },
  {
    id: "3",
    category: "배송",
    title: "설/추석 연휴 배송 안내",
    content: "연휴 기간 동안 배송이 일시 중단됩니다.",
    created_at: "2025-01-20",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  공지: "bg-primary/10 text-primary",
  배송: "bg-blue-50 text-blue-600",
  이벤트: "bg-orange-50 text-orange-600",
};

export default function NoticePage() {
  const [notices, setNotices] = useState<Notice[]>(FALLBACK_NOTICES);

  useEffect(() => {
    fetch("/api/notices")
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        if (data.length > 0) setNotices(data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              Notice
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              공지사항
            </h1>
            <p className="text-gray-500 text-base md:text-lg">
              휘니스포츠의 새로운 소식과 공지사항을 안내합니다.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="space-y-4">
              {notices.map((notice) => (
                <details
                  key={notice.id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden group"
                >
                  <summary className="flex items-center gap-4 px-6 py-5 cursor-pointer hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <span
                      className={`shrink-0 px-2.5 py-1 text-[11px] font-bold rounded-full ${CATEGORY_COLORS[notice.category] || "bg-gray-100 text-gray-600"}`}
                    >
                      {notice.category}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm md:text-base truncate">
                        {notice.title}
                      </h3>
                    </div>
                    <span className="shrink-0 text-xs text-gray-400">
                      {new Date(notice.created_at).toLocaleDateString("ko-KR")}
                    </span>
                    <svg
                      className="w-4 h-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                    {notice.content}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
