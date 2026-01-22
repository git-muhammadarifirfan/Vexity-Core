"use client";
import { motion } from "framer-motion";
import Navbar from "../components/SiteNavbar";
import Footer from "../components/Footer";
import { ShieldCheck, MonitorPlay, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FilosofiPage() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 border-b border-gray-100">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase mb-8">
              Manifesto Kami
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Bukan Sekadar Koding, <br/>
              Ini Tentang <span className="underline decoration-4 decoration-emerald-400 underline-offset-8">Validitas.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Penelitian yang hebat membutuhkan instrumen yang hebat. Kami tidak hanya menulis baris kode, 
              kami menerjemahkan metodologi akademik Anda menjadi infrastruktur digital yang 
              <span className="font-bold text-black"> Rapi, Aman, dan Siap Dipresentasikan.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 3 PILAR UTAMA (Sticky Scroll Effect) --- */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl space-y-24">
          
          {/* PILAR 1: RAPI (Precision) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-200">
                <Layers size={32} className="text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Struktur yang Rapi & Terstandar.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Kode yang berantakan adalah mimpi buruk saat sidang. Kami membangun sistem dengan arsitektur 
                <span className="italic"> clean code</span> yang terstruktur. Setiap variabel, fungsi, dan database dirancang mengikuti alur logika penelitian Anda, sehingga mudah dijelaskan saat sesi tanya jawab dengan penguji.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-medium text-gray-800">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" /> Dokumentasi API Lengkap
                </li>
                <li className="flex items-center gap-3 font-medium text-gray-800">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" /> Database Schema Normalization (3NF)
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-[300px] md:h-[400px] flex items-center justify-center relative overflow-hidden">
               {/* Ilustrasi Abstrak Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
               <div className="relative z-10 text-center">
                  <div className="text-6xl font-black text-gray-100">CLEAN</div>
                  <div className="text-6xl font-black text-black">CODE</div>
               </div>
            </div>
          </motion.div>

          {/* PILAR 2: AMAN (Security) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-2">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-200">
                <ShieldCheck size={32} className="text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Keamanan Data Riset.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Data responden dan hasil olahan adalah aset paling berharga dalam penelitian. Kami menerapkan standar keamanan industri untuk memastikan integritas data Anda tetap terjaga dari kebocoran atau manipulasi pihak luar.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-medium text-gray-800">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" /> Enkripsi End-to-End
                </li>
                <li className="flex items-center gap-3 font-medium text-gray-800">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" /> Automated Backup System
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-1 bg-black p-8 rounded-3xl shadow-xl h-[300px] md:h-[400px] flex items-center justify-center relative overflow-hidden">
               <div className="absolute w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-50 animate-pulse" />
               <ShieldCheck size={100} className="text-white relative z-10" />
            </div>
          </motion.div>

          {/* PILAR 3: PRESENTABLE & REALISASI */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-200">
                <MonitorPlay size={32} className="text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Dipresentasikan & Terealisasi.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Aplikasi tidak hanya harus jalan, tapi harus "menjual" saat demo. Kami mendesain UI/UX yang modern dan profesional. Lebih dari itu, kami membantu 
                <span className="font-bold text-black"> merealisasikan</span> penelitian Anda dari sekadar ide di kertas menjadi produk digital yang bisa diakses publik (Live Deploy).
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-medium text-gray-800">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" /> UI/UX Modern & Responsif
                </li>
                <li className="flex items-center gap-3 font-medium text-gray-800">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" /> Deployment ke Server/Domain Asli
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-[300px] md:h-[400px] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gray-50 group-hover:bg-gray-100 transition-colors" />
               <div className="text-center relative z-10">
                  <h3 className="text-5xl font-bold text-black mb-2">100%</h3>
                  <p className="text-gray-500 uppercase tracking-widest font-bold">Siap Sidang</p>
               </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Siap Merealisasikan Ide Anda?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Jangan biarkan penelitian Anda hanya berakhir di tumpukan kertas perpustakaan.
            Jadikan inovasi digital yang nyata bersama Verxity Core.
          </p>
          <Link href="/#contact">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-emerald-400 hover:text-black hover:scale-105 transition-all flex items-center gap-2 mx-auto">
              Mulai Konsultasi Gratis <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}