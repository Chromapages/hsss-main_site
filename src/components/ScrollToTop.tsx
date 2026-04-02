"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-[92px] md:bottom-8 right-4 md:right-8 z-[100] transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="touch-press no-select w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-on-primary shadow-2xl flex items-center justify-center active:scale-95 transition-all duration-300 group ring-4 ring-primary/20"
        aria-label="Scroll to top"
      >
        <span className="material-symbols-outlined text-2xl md:text-3xl group-hover:-translate-y-1 transition-transform">
          arrow_upward
        </span>
      </button>
    </div>
  );
}
