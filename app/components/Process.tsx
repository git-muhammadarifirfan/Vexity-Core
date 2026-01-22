"use client";
import { motion } from "framer-motion";
import { Search, Code2, Rocket, Settings } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "Understanding your core research problems." },
  { icon: Code2, title: "Development", desc: "Building the system with precise methodology." },
  { icon: Settings, title: "Testing", desc: "Ensuring accurate data processing & logic." },
  { icon: Rocket, title: "Deployment", desc: "Launching for trials and final presentation." },
];

export default function Process() {
  return (
    // UBAH: Hapus 'border-t border-white/5' biar nyambung sama section atasnya
    <section id="process" className="py-24 bg-[#0B0F17] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400">Streamlined workflow for academic excellence.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mb-4 mx-auto font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400 text-center">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}