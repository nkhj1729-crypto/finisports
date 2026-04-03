"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const MENU = [
  {
    title: "동영상 관리",
    desc: "운동 가이드 유튜브 영상 추가/수정/삭제",
    href: "/admin/videos",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "공지사항 관리",
    desc: "공지사항 작성/수정/삭제",
    href: "/admin/notices",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
];

export default function AdminDashboard() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-lg font-extrabold">
              휘니스포츠
            </Link>
            <span className="text-xs font-semibold text-white bg-primary px-2 py-0.5 rounded-full">
              ADMIN
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-extrabold mb-2">관리자 대시보드</h1>
        <p className="text-gray-500 mb-10">
          동영상 가이드와 공지사항을 관리하세요.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
