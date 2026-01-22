"use client";

import { motion } from "framer-motion";

import ReseachAnim from "@/components/ui/research-hero-Lottie";
import SearchAnim from "@/components/ui/Search";

export default function Research() {
  return (
    <section className="bg-[#0B1220] text-white py-20 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-[980px]">
          {/* Top content */}
          <div className="pt-6 md:pt-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-2 text-[16px] tracking-wide text-white/80">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[18px] w-[18px] shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.5 18.5 4 20V6.75C4 5.784 4.784 5 5.75 5h12.5C19.216 5 20 5.784 20 6.75v8.5c0 .966-.784 1.75-1.75 1.75H7.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 9h10M7 12h7"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="leading-none">Kenapa Vexity Core?</span>
                </div>

                <h2 className="max-w-[520px] text-[32px] md:text-[38px] font-semibold leading-[1.12] tracking-[-0.01em]">
                  Membantu Merealisasikan
                  <br />
                  Penelitian Anda.
                </h2>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.06 }}
                className="lg:pt-1"
              >
                <p className="max-w-[520px] text-[13px] leading-[1.9] text-white/55 text-justify">
                  Kami menangani proses lengkap: requirement gathering,
                  perancangan arsitektur, UI/UX design, pengembangan, testing,
                  hingga deployment. Output disusun terstruktur (dokumen, repo,
                  dan deliverables), metriknya jelas sehingga mudah dievaluasi
                  dan dipresentasikan.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Big Card / Lottie HERO (opsional, kalau mau tetap tampil di semua ukuran) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mt-10"
          >
            {/* layer lottie */}
            <div className="absolute inset-0 z-0">
              <ReseachAnim />
            </div>

            {/* overlay gradient biar ada depth */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-10"
          >
            {/* DESKTOP ROW: SearchAnim + Button */}
            <div className="hidden lg:flex items-center gap-5 justify-start">
              <SearchAnim />

              <a
                href="#"
                className="
                  group inline-flex items-center justify-center gap-2
                  bg-white text-black rounded-full
                  h-[48px] px-7
                  text-[16px] font-semibold whitespace-nowrap
                  shadow-[0_18px_60px_-35px_rgba(0,0,0,0.65)]
                  transition-all duration-300 ease-out
  
                  active:translate-y-0 active:scale-[0.99]
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B1220]
                "
              >
                Hubungi kami
                <span
                  className="
                    text-black/70 transition-transform duration-300 ease-out
                    group-hover:translate-x-[2px]
                  "
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>

            {/* MOBILE/TABLET: Button only (SearchAnim ilang) */}
            <div className="lg:hidden">
              <a
                href="#contact"
                className="
                  group inline-flex w-full items-center justify-center gap-2
                  bg-white text-black rounded-full
                  h-[48px] px-6
                  text-[15px] font-semibold
                  shadow-[0_18px_60px_-35px_rgba(0,0,0,0.65)]
                  transition-all duration-300 ease-out
                  active:translate-y-0 active:scale-[0.99]
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B1220]
                "
              >
                Hubungi kami
                <span
                  className="
                    text-black/70 transition-transform duration-300 ease-out
                    group-hover:translate-x-[2px]
                  "
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
