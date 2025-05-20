import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-800">
        <div className="font-semibold">© FX Creations Studio</div>
        <div className="flex space-x-6 mt-4 sm:mt-0 items-center">
          <a href="#" className="hover:text-blue-600 font-medium">Portfolio</a>
          <a href="#" className="hover:text-blue-600 font-medium">Services</a>
          <a href="#" className="hover:text-blue-600 font-medium">Blog</a>
          <a href="#" className="hover:text-blue-600 font-medium">About Us</a>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://www.facebook.com/p/FX-creation-Studio-100069234291790/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/fx_creation_studio/p/DDMMzxwTodL/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
