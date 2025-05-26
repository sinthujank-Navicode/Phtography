"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center animate-pulse hover:bg-blue-700 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
