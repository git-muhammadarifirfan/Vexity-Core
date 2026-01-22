"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  MousePointer2,
  Code2,
  CheckCircle2,
  Server,
  Hand,
  MessageSquare,
} from "lucide-react";

type Item = {
  key: string;
  label: string;
  Icon: React.ElementType;
  title: string;
  subtitle: string;
  desc: string;
};

export default function Advantages() {
  const items: Item[] = [
    {
      key: "scope",
      label: "Scope Jelas",
      Icon: Target,
      title: "Scope Jelas.",
      subtitle: "Tujuan, fitur, dan batas kerja disepakati dari awal.",
      desc: "Kami bantu menyusun requirement yang jelas agar pengerjaan terarah, estimasi akurat, dan minim revisi di tengah jalan.",
    },
    {
      key: "design",
      label: "Desain Rapi",
      Icon: MousePointer2,
      title: "Desain Rapi.",
      subtitle: "UI/UX konsisten, nyaman dipakai, dan siap dipresentasikan.",
      desc: "Mulai dari layout, tipografi, dan komponen dibuat konsisten. Hasilnya terlihat profesional dan mudah dikembangkan.",
    },
    {
      key: "build",
      label: "Build Berkualitas",
      Icon: Code2,
      title: "Build Berkualitas.",
      subtitle: "Code rapi, scalable, dan siap production.",
      desc: "Struktur proyek jelas, standar best practice, performa terjaga. Mudah maintenance, minim bug, dan siap deploy.",
    },
    {
      key: "testing",
      label: "Testing Terukur",
      Icon: CheckCircle2,
      title: "Testing Terukur.",
      subtitle: "Test fungsional & validasi alur biar minim error.",
      desc: "Kami lakukan test sesuai skenario penggunaan. Cocok untuk skripsi/TA, riset dosen, maupun produk riset.",
    },
    {
      key: "deploy",
      label: "Deploy & Support",
      Icon: Server,
      title: "Deploy & Support.",
      subtitle: "Deploy rapi + bantuan setelah rilis.",
      desc: "Setup hosting, domain, CI/CD (kalau perlu), dan dokumentasi handover. Ada support untuk perbaikan pasca rilis.",
    },
  ];

  const [active, setActive] = React.useState(items[2]); // default "Build Berkualitas"

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-[1100px] px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-[#111827]">
            <MessageSquare
              size={14}
              strokeWidth={2}
              className="text-[#111827]"
            />
            <span>Keunggulan</span>
          </div>

          <h2 className="mt-6 text-[38px] md:text-[42px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#0B1220]">
            Keunggulan saat anda bekerja
            <br />
            sama dengan kami
          </h2>
        </motion.div>

        {/* ✅ Mobile/tablet: semua blok konten di tengah (pakai max-width) */}
        <div className="mx-auto max-w-[520px] lg:max-w-none">
          {/* Layout */}
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-[280px_360px_1fr] place-items-center lg:place-items-start items-start lg:items-center">
            {/* Left: clickable timeline */}
            <div className="w-full text-left">
              <ul className="space-y-2 mx-auto w-full">
                {items.map((it, idx) => {
                  const Icon = it.Icon;
                  const isActive = it.key === active.key;
                  const isLast = idx === items.length - 1;

                  return (
                    <li key={it.key} className="relative">
                      <button
                        type="button"
                        onClick={() => setActive(it)}
                        className={[
                          "group w-full text-left rounded-xl px-3 py-2",
                          "transition-colors",
                          isActive
                            ? "bg-black/[0.04]"
                            : "hover:bg-black/[0.03]",
                        ].join(" ")}
                      >
                        <div className="flex items-start gap-3">
                          {/* dot + line */}
                          <div className="relative w-7 flex flex-col items-center">
                            <span
                              className={[
                                "mt-[2px] h-[10px] w-[10px] rounded-full border",
                                isActive
                                  ? "bg-[#0B1220] border-[#0B1220]"
                                  : "bg-white border-[#D1D5DB]",
                              ].join(" ")}
                            />
                            {!isLast && (
                              <span
                                aria-hidden
                                className="mt-[6px] h-[22px] w-px bg-[#D1D5DB]"
                              />
                            )}
                          </div>

                          {/* icon + label */}
                          <div className="flex items-start gap-3">
                            <Icon
                              size={18}
                              strokeWidth={2}
                              className={[
                                "mt-[1px] transition-colors",
                                isActive ? "text-[#0B1220]" : "text-[#111827]",
                              ].join(" ")}
                            />

                            <div className="min-w-0">
                              <div
                                className={[
                                  "text-[13px] leading-[1.2]",
                                  isActive
                                    ? "font-semibold text-[#0B1220]"
                                    : "font-medium text-[#374151]",
                                ].join(" ")}
                              >
                                {it.label}
                              </div>

                              {/* hint */}
                              <div
                                className={[
                                  "mt-1 text-[11px] text-[#6B7280] transition-opacity",
                                  isActive
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100",
                                ].join(" ")}
                              >
                                Klik untuk lihat detail
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Middle: iPhone (desktop only) */}
            <div className="hidden lg:flex justify-center">
              <div className="w-[300px] md:w-[320px] lg:w-[340px]">
                <Image
                  src="/images/iphone.svg"
                  alt="iPhone mock"
                  width={650}
                  height={760}
                  className="h-auto w-full select-none"
                  priority={false}
                />
              </div>
            </div>

            {/* Right: active content */}
            <div className="w-full text-left lg:w-auto lg:justify-self-start">
              <div className="flex items-center gap-2">
                <Hand size={20} strokeWidth={2} className="text-[#111827]" />
                <span className="text-[18px] font-medium text-[#111827]">
                  {active.label}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="mt-5 max-w-[520px] text-[28px] md:text-[30px] font-semibold leading-[1.18] text-[#111827]">
                    {active.title}
                  </h3>

                  <p className="mt-4 max-w-[520px] text-[14px] leading-[1.75] text-[#6B7280]">
                    {active.subtitle}
                  </p>

                  <p className="mt-4 max-w-[520px] text-[13.5px] leading-[1.75] text-[#6B7280]">
                    {active.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
