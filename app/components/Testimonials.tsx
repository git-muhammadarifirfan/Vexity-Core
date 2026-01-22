"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// ... (Kode data reviews tetap sama, tidak perlu diubah) ...
const reviews = [
  {
    name: "Sarah Jenkins",
    role: "CTO at TechFlow",
    content: "Verxity Core completely transformed how we handle our server infrastructure. The real-time monitoring is a game-changer.",
    avatar: "S"
  },
  {
    name: "Michael Chen",
    role: "Product Manager at CloudScale",
    content: "We needed a partner who understood high-performance engineering. Verxity delivered beyond expectations.",
    avatar: "M"
  },
  {
    name: "Elena Rodriguez",
    role: "Founder of SecureNet",
    content: "Security was our top priority. Verxity's encryption protocols gave us the peace of mind we needed.",
    avatar: "E"
  },
  {
    name: "James Wilson",
    role: "Director at FutureLab",
    content: "Their automated orchestration tools saved us hundreds of hours in deployment time. Highly recommended.",
    avatar: "J"
  },
  {
    name: "Anita Rahma",
    role: "Head of IT at IndoTech",
    content: "Sistem yang dibangun sangat stabil dan dokumentasinya lengkap. Tim support juga sangat responsif.",
    avatar: "A"
  },
  {
    name: "David Park",
    role: "CEO at StartUp One",
    content: "From MVP to full scale, Verxity has been our reliable partner. The scalability is unmatched.",
    avatar: "D"
  },
  {
    name: "Robert Fox",
    role: "Engineering Lead",
    content: "Clean code, robust architecture, and professional delivery. A truly generic engineering masterpiece.",
    avatar: "R"
  },
  {
    name: "Lisa Wong",
    role: "Operations Manager",
    content: "Dashboard monitoring-nya sangat intuitif. Memudahkan tim kami memantau performa server 24/7.",
    avatar: "L"
  },
  {
    name: "Marcus Johnson",
    role: "VP of Engineering",
    content: "Verxity Core provides the stability we need for our mission-critical applications.",
    avatar: "M"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    // UBAH: Tambahkan id="testimonials" disini
    <section id="testimonials" className="py-24 bg-[#0B0F17] relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Trusted by Leaders
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See what industry experts are saying about Verxity Core.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-transparent hover:border-emerald-500/30 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12 transform group-hover:rotate-12 transition-transform duration-500" />

              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed relative z-10 text-sm md:text-base font-medium">
                &quot;{review.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-black text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}