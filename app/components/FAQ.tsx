"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/components/radix/accordion";

const faqs = [
  {
    q: "Mulainya gimana kalau saya belum punya brief yang rapi?",
    a: "Gak masalah. Kita mulai dari ngobrol singkat untuk pahami tujuan, target user, dan kebutuhan. Setelah itu kami bantu merapikan scope, timeline, dan rencana kerja sejak awal.",
  },
  {
    q: "Estimasi waktu pengerjaan biasanya berapa lama?",
    a: "Tergantung scope. Prototype/MVP umumnya 1–3 minggu. Aplikasi riset full (web+admin+export) biasanya 3–8 minggu. Kami berikan estimasi realistis setelah scope jelas.",
  },
  {
    q: "Harga dihitung gimana?",
    a: "Harga berdasarkan kompleksitas fitur, platform (web/mobile), integrasi (AI/IoT), dan timeline. Setelah diskusi singkat, kami kirim breakdown dan opsi paket.",
  },
  {
    q: "Bisa revisi? Berapa kali?",
    a: "Bisa. Umumnya 2–3 ronde revisi desain dan 1–2 ronde revisi minor implementasi. Kalau ada perubahan scope besar, kami sepakati ulang biayanya.",
  },
  {
    q: "Apa aja yang saya dapat di akhir proyek?",
    a: "Source code, akses repo, panduan deploy, dokumentasi singkat, serta sesi handover. Untuk riset, kami juga bantu menyiapkan screenshot/demo untuk presentasi.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              {/* SVG kecil seperti badge/icon FAQ */}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-200">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-600"
                >
                  <path
                    d="M7.5 18.5l.3-2.4c.05-.4-.1-.8-.4-1.1A7.5 7.5 0 1 1 12 19.5c-.6 0-1.2-.07-1.77-.2-.4-.1-.82-.02-1.14.23l-1.59 1.2z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.2 9.3A2.2 2.2 0 0 1 12 8.4c1.2 0 2.2.9 2.2 2.1 0 .9-.5 1.4-1.2 1.9-.7.5-1 1-.95 1.9v.35"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 16.9h.01"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <p className="text-xs tracking-widest uppercase text-gray-500">
                FAQ
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Pertanyaan yang sering
              <br />
              ditanyakan.
            </h2>
            <p className="text-gray-600 max-w-md">
              Kumpulan jawaban cepat seputar kerja sama, biaya, timeline, dan
              deliverables.
            </p>
          </motion.div>

          {/* RIGHT (Animate UI Accordion) */}
          <div className="border-t border-gray-200">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${index + 1}`}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger showArrow className="py-5 text-left">
                    <span className="font-semibold text-gray-900">
                      {item.q}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent keepRendered={false}>
                    <p className="pb-5 text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
