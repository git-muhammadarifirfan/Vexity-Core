"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link"; // <--- IMPORT INI

const points = [
  "Bridging Theory & Practice",
  "Academic Integrity First",
  "Enterprise-Grade Security",
  "Scalable Infrastructure"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* KOLOM KIRI */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm font-bold mb-6">
              <span className="w-2 h-2 bg-black rounded-full" />
              Who We Are
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Mitra Strategis <br />
              <span className="text-gray-400">Digitalisasi Riset.</span>
            </h2>
            
            <div className="w-20 h-1 bg-black mb-8" />

            <p className="text-lg font-medium leading-relaxed max-w-md">
              Kami mengubah kompleksitas penelitian menjadi solusi digital yang intuitif, fungsional, dan siap impact.
            </p>
          </motion.div>

          {/* KOLOM KANAN */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              <strong>Verxity Core</strong> berdiri di persimpangan antara dunia akademik dan industri teknologi. Kami memahami bahwa tantangan terbesar peneliti bukan hanya menemukan data, tapi bagaimana <span className="text-black font-bold border-b-2 border-emerald-200">mempresentasikan data</span> tersebut dalam bentuk sistem yang valid dan mudah dipahami.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Fokus kami adalah membangun instrumen digital (Web/Mobile/IoT) yang dirancang khusus untuk memenuhi standar metodologi penelitian, namun dengan kualitas performa setara aplikasi startup global.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-black shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              {/* UBAH DISINI: Bungkus button pakai Link ke /filosofi */}
              <Link href="/filosofi">
                <button className="flex items-center gap-2 text-black font-bold hover:gap-4 transition-all group">
                  Pelajari Filosofi Kami <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}