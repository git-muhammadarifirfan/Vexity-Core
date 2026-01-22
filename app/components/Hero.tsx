"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import Image from "next/image"; // Pastikan ini ada
import Link from "next/link";
import RotatingText from "@/components/ui/RotatingText";
import HeroLottie from "@/components/ui/HeroLottie";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-28 pb-20 bg-white overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Label Kecil di atas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-500">
            <span className="w-2 h-2 border border-gray-400 rounded-sm"></span>
            Partner Digitalisasi Riset.
          </span>
        </motion.div>
        {/* JUDUL UTAMA */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight flex items-center justify-center gap-3"
        >
          Vexity
          <RotatingText
            texts={["core.", "studio.", "web.", "labs."]}
            mainClassName="bg-black text-white px-3 py-1 rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.h1>
        {/* SUB-HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-black mb-6 leading-tight"
        >
          Realisasikan Penelitian Anda Menjadi <br />
          Inovasi Digital Nyata.
        </motion.h2>
        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Jangan biarkan teknologi menghambat riset Anda. Di Vexity Core, kami
          membangun instrumen penelitian digital yang rapi, aman, dan siap
          dipresentasikan, serta membantu merealisasikan penelitian anda.
        </motion.p>
        {/* --- AREA GAMBAR ILUSTRASI (UPDATED) --- */}
       <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4 }}
  className="relative w-full h-[300px] md:h-[500px] bg-gray-50 rounded-2xl overflow-hidden mb-12 border border-gray-200 shadow-2xl shadow-gray-200/50"
>
  <HeroLottie />

  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
</motion.div>
        {/* TOMBOL AKSI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/#portfolio">
            <button className="w-full sm:w-auto bg-[#1A1A1A] text-white px-8 py-4 rounded-lg font-bold hover:bg-black hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
              Lihat Portofolio
              <ArrowUpRight
                size={18}
                className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Link>

          <Link href="/#contact">
            <button className="w-full sm:w-auto bg-white text-black border border-gray-300 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              Hubungi Kami
              <MessageSquare size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
