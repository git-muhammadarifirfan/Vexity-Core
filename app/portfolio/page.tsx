"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/SiteNavbar";
import Footer from "../components/Footer";
import { ArrowUpRight, X } from "lucide-react";

// Generate 18 item
const allProjects = Array.from({ length: 18 }, (_, i) => i + 1);

export default function PortfolioPage() {
  // State untuk nyimpen ID project mana yang lagi dibuka
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0B0F17] selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Semua Portofolio.
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Koleksi lengkap hasil inovasi dan riset digital yang telah kami realisasikan. 
              <span className="text-white font-bold ml-1">Klik kartu untuk detail.</span>
            </p>
          </div>

          {/* GRID UTAMA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((item) => (
              <motion.div
                key={item}
                layoutId={`card-${item}`} // KUNCI ANIMASI MORPHING
                onClick={() => setSelectedId(item)}
                className="group relative h-[400px] bg-white rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Konten Grid (Preview) */}
                <div className="w-full h-full bg-gray-100 relative">
                   {/* Overlay Gelap Pas Hover */}
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                   
                   {/* Icon Panah (Muncul Pas Hover) */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <ArrowUpRight size={32} className="text-black" />
                      </div>
                   </div>

                   {/* Info Singkat di Bawah */}
                   <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {/* Kasih motion tag biar teksnya smooth pas morphing */}
                      <motion.h3 className="text-2xl font-bold text-black group-hover:text-white transition-colors mb-1">
                        Project Name {item}
                      </motion.h3>
                      <motion.p className="text-gray-500 group-hover:text-gray-200 transition-colors text-sm font-medium">
                        Research Application • 2024
                      </motion.p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- POPUP / MODAL EXPANDED VIEW --- */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            
            {/* 1. BACKDROP GELAP (Klik disini bakal close) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* 2. KARTU YANG MEMBESAR (Expanded) */}
            <motion.div
              layoutId={`card-${selectedId}`} // ID SAMA SUPAYA FRAMER MOTION TAU INI BENDA YANG SAMA
              className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden relative z-10 shadow-2xl cursor-default max-h-[90vh] overflow-y-auto"
            >
              
              {/* Tombol Close (X) */}
              <button 
                onClick={() => setSelectedId(null)} 
                className="absolute top-6 right-6 z-50 p-2 bg-white/20 hover:bg-black/10 backdrop-blur-md rounded-full transition-colors border border-black/5"
              >
                <X size={24} className="text-black" />
              </button>

              <div className="flex flex-col md:flex-row min-h-[500px]">
                 
                 {/* Bagian Gambar (Kiri/Atas) */}
                 <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px]">
                    {/* Placeholder Gambar */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                       [ Ilustrasi Project {selectedId} ]
                    </div>
                 </div>

                 {/* Bagian Deskripsi (Kanan/Bawah) */}
                 <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    
                    {/* Judul & Kategori (Sama kayak di grid, biar smooth transisinya) */}
                    <motion.h3 className="text-3xl md:text-4xl font-bold text-black mb-2 leading-tight">
                      Project Name {selectedId}
                    </motion.h3>
                    <motion.p className="text-emerald-600 font-bold text-lg mb-8">
                      Research Application • 2024
                    </motion.p>

                    {/* --- DESKRIPSI BEBAS (Baru muncul pas dibuka) --- */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }} // Muncul agak telat dikit biar manis
                      className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg"
                    >
                       <p>
                         <strong>Latar Belakang:</strong><br/>
                         Proyek ini dikembangkan untuk menjawab tantangan efisiensi dalam pengolahan data akademik. Menggunakan algoritma terbaru untuk memastikan akurasi 99.9%.
                       </p>
                       <p>
                         <strong>Teknologi:</strong><br/>
                         Next.js, Python (AI Model), PostgreSQL, dan Docker Containerization.
                       </p>
                       <p className="italic text-sm text-gray-400 mt-4">
                         "Solusi yang sangat membantu mempercepat proses sidang skripsi saya." — Klien {selectedId}
                       </p>
                    </motion.div>

                    {/* Tombol Aksi di dalam Modal */}
                    <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 0.3 }}
                       className="mt-10 pt-6 border-t border-gray-100"
                    >
                       <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all w-full flex items-center justify-center gap-2">
                         Lihat Studi Kasus <ArrowUpRight size={20}/>
                       </button>
                    </motion.div>

                 </div>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}