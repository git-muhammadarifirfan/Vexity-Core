"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F17] text-white pt-16 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* top row */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Linkedin</a>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-400">Wir halten dich auf dem laufenden</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 border-b border-white/20 pb-2 text-sm text-gray-400">
                Deine E-Mail Adresse
              </div>
              <button
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Submit email"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* columns */}
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          <div className="space-y-3">
            <h4 className="font-semibold">Quick links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Erfahren</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aligner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stickers</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">News</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">1:1 Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Stunden</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Presse Kit</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Behandlung</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Gratis Termin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Freunde einladen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patienteninformationen</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {year} Vexity Core. All rights reserved</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">AGBs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
