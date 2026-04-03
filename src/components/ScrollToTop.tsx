"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollUp}
      aria-label="맨 위로 이동"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/25 flex items-center justify-center hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
