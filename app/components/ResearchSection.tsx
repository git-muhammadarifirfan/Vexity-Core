"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResearchSection() {
  return (
    <section className="py-20 md:py-24 bg-[#0B0F17] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">Dikenapa Vexity Core?</p>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Membantu Merealisasikan <br /> Penelitian Anda.
            </h3>
            <p className="text-white/60 leading-relaxed max-w-xl">
              Dari ide hingga siap dipresentasikan — kami bantu riset Anda menjadi produk digital yang rapi, aman, dan
              terukur. Cocok untuk skripsi, tesis, maupun kebutuhan instansi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-4 md:p-6 border border-white/10 shadow-2xl shadow-black/20"
          >
            <div className="relative w-full h-[320px] md:h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/images/research-collage.png"
                alt="Research collage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 560px"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA pill */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-3xl bg-white rounded-full border border-white/10 shadow-xl shadow-black/20 px-3 py-2 flex items-center gap-2">
            <div className="flex-1 px-4 py-3 text-sm text-gray-500">VexityCore solusi untuk riset solusi dan data</div>
            <Link href="/#contact">
              <button className="rounded-full bg-black text-white px-5 py-3 text-sm font-bold hover:bg-gray-900 transition-colors">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
