"use client";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaPlus, FaTimes } from "react-icons/fa";

export default function FloatingSocialButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end gap-3 z-50">
      {open && (
        <>
          <a
            href="https://www.facebook.com/p/FX-creation-Studio-100069234291790/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition"
          >
            <FaFacebookF size={24} className="text-[#1877F2]" />
          </a>
          <a
            href="https://www.instagram.com/fx_creation_studio/p/DDMMzxwTodL/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition"
          >
            <FaInstagram size={24} className="text-[#E1306C]" />
          </a>
        </>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-red-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        {open ? <FaTimes size={20} /> : <FaPlus size={20} />}
      </button>
    </div>
  );
}
