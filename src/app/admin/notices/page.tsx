"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Notice {
  id: string;
  category: string;
  title: string;
  content: string;
  is_published: boolean;
  created_at: string;
}

const NOTICE_CATEGORIES = ["공지", "배송", "이벤트"];

export default function AdminNoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ category: "공지", title: "", content: "", is_published: true });

  const loadNotices = useCallback(async () => {
    const res = await fetch("/api/notices");
    if (res.ok) setNotices(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => { loadNotices(); }, [loadNotices]);

  function resetForm() {
    setForm({ category: "공지", title: "", content: "", is_published: true });
    setEditId(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = editId ? `/api/notices/${editId}` : "/api/notices";
    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    resetForm();
    loadNotices();
  }

  async function handleDelete(id: string) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await fetch(`/api/notices/${id}`, { method: "DELETE" });
    loadNotices();
  }

  function handleEdit(n: Notice) {
    setEditId(n.id);
    setForm({
      category: n.category,
      title: n.title,
      content: n.content,
      is_published: n.is_published,
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center gap-4 h-16">
          <Link href="/admin" className="text-sm text-gray-400 hover:text-primary">
            &larr; 대시보드
          </Link>
          <h1 className="font-bold">공지사항 관리</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
          <h2 className="font-bold text-lg mb-4">{editId ? "공지 수정" : "새 공지 작성"}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">카테고리</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {NOTICE_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.is_published}
                  onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm font-semibold text-gray-700">게시 (공개)</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">제목</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="공지사항 제목"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">내용</label>
            <textarea
              rows={5}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="공지사항 내용을 작성하세요"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              required
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg text-sm hover:bg-primary-dark transition-colors">
              {editId ? "수정" : "등록"}
            </button>
            {editId && (
              <button type="button" onClick={resetForm} className="px-5 py-2.5 bg-gray-100 text-gray-600 font-semibold rounded-lg text-sm hover:bg-gray-200 transition-colors">
                취소
              </button>
            )}
          </div>
        </form>

        {/* Notice List */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="font-bold">등록된 공지 ({notices.length}개)</h2>
          </div>
          {loading ? (
            <div className="px-6 py-12 text-center text-gray-400">로딩 중...</div>
          ) : notices.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-400">등록된 공지가 없습니다.</div>
          ) : (
            <div className="divide-y divide-gray-50">
              {notices.map((n) => (
                <div key={n.id} className="px-6 py-4 flex items-center gap-4">
                  <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full">
                    {n.category}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">
                      {n.title}
                      {!n.is_published && <span className="ml-2 text-xs text-gray-400">(비공개)</span>}
                    </p>
                    <p className="text-xs text-gray-400">{new Date(n.created_at).toLocaleDateString("ko-KR")}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => handleEdit(n)} className="text-xs text-primary hover:underline">수정</button>
                    <button onClick={() => handleDelete(n.id)} className="text-xs text-red-400 hover:underline">삭제</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
