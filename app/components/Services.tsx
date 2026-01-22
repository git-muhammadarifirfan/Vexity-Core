"use client";

import React from "react";
import { motion } from "framer-motion";
import { Braces, Cpu, FlaskConical, GraduationCap, Rocket } from "lucide-react";
import { HeroParallax } from "@/components/ui/hero-parallax";

// =====================
// Services Data (baru)
// =====================
const services = [
  {
    title: "MVP & Prototyping",
    desc: "Pembuatan purwarupa fungsional untuk membuktikan kelayakan ide penelitian pada tahap proposal atau awal skripsi.",
    isTall: false,
    icon: Braces,
    meta: "Prototype",
  },
  {
    title: "AI & IoT Integration",
    desc: "Integrasi Machine Learning atau perangkat IoT untuk mengolah dan menampilkan data penelitian secara cerdas dan aplikatif.",
    isTall: false,
    icon: Cpu,
    meta: "Integration",
  },
  {
    title: "Custom Research Application",
    desc: "Membangun sistem yang presisi dan terstruktur sesuai dengan metodologi penelitian yang Anda gunakan. Layanan ini berfokus pada pengembangan aplikasi berbasis Web, Mobile (Android/iOS), atau Desktop yang dirancang mengikuti alur logika, variabel, dan framework penelitian secara konsisten. Menyesuaikan sistem untuk mendukung proses pengolahan data, analisis, dan pengujian sehingga benar-benar menjawab rumusan masalah penelitian dan dapat dipertanggungjawabkan secara akademik.",
    isTall: true,
    icon: FlaskConical,
    meta: "Research-grade",
  },
  {
    title: "Technical Mentoring & Handover",
    desc: "Disertai pendampingan dan transfer pengetahuan agar klien memahami alur sistem dan siap menjelaskan saat seminar atau sidang.",
    isTall: false,
    icon: GraduationCap,
    meta: "Handover",
  },
  {
    title: "Deployment & Hilirisasi Produk",
    desc: "Bantuan deploy aplikasi ke server/cloud agar hasil penelitian siap dipublikasikan dan dimanfaatkan secara nyata.",
    isTall: false,
    icon: Rocket,
    meta: "Go-live",
  },
];

// Animasi card (tetap)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

// =====================
// Hero Parallax (TETAP PERSIS dari code lama)
// =====================
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

// =====================
// Card UI (monochrome, nggak colorfull)
// =====================
function ServiceCard({
  title,
  desc,
  icon: Icon,
  meta,
  tall,
}: {
  title: string;
  desc: string;
  icon: React.ElementType;
  meta: string;
  tall?: boolean;
}) {
  return (
    <div
      className={[
        "bg-white text-black",
        "p-8",
        "rounded-xl", // kalau mau lancip: ganti ke rounded-none
        "border border-black/15",
        "shadow-[0_14px_40px_rgba(0,0,0,0.18)]",
        tall ? "h-full" : "min-h-[240px]",
        "flex flex-col",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        {/* icon dalam circle */}
        <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-black" />
        </div>

        {/* meta tag */}
        <div className="text-[11px] uppercase tracking-wider text-black/55 border border-black/15 px-3 py-1 rounded-full">
          {meta}
        </div>
      </div>

      <h3 className="text-xl font-extrabold mb-3 leading-tight">{title}</h3>
      <div className="h-px w-full bg-black/10 mb-4" />

      <p
        className={[
          "text-sm text-black/70 leading-relaxed",
          tall ? "text-justify" : "",
        ].join(" ")}
      >
        {desc}
      </p>

      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between text-[12px] text-black/55">
          <span>Structured delivery</span>
          <span className="border border-black/15 px-2 py-1 rounded-md">
            Scope
          </span>
        </div>
      </div>
    </div>
  );
}

// =====================
// Page (layout TETAP SAMA)
// =====================
export default function Services() {
  return (
    <>
      <section
        id="services"
        className="py-24 bg-[#0B1220] text-white overflow-hidden"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Layanan Kami.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
              viverra enim, ac imperdiet velit. Cras non scelerisque tortor.
            </motion.p>
          </div>

          {/* Grid layout tetap */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {services
                .filter((s) => !s.isTall)
                .map((s, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="cursor-default"
                  >
                    <ServiceCard
                      title={s.title}
                      desc={s.desc}
                      icon={s.icon}
                      meta={s.meta}
                    />
                  </motion.div>
                ))}
            </div>

            <div className="md:col-span-1">
              {services
                .filter((s) => s.isTall)
                .map((s, index) => (
                  <motion.div
                    key={index}
                    custom={4}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="h-full cursor-default"
                  >
                    <ServiceCard
                      title={s.title}
                      desc={s.desc}
                      icon={s.icon}
                      meta={s.meta}
                      tall
                    />
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* HERO PARALLAX: tetap persis */}
      <section className="bg-[#0B1220]">
        <HeroParallaxDemo />
      </section>
    </>
  );
}
