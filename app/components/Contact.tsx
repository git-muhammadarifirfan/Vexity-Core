"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Rocket } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* ANIMASI ROCKET */}
      <motion.div
        initial={{ x: 0, y: 50, opacity: 0, scale: 0.5 }}
        whileInView={{ 
          x: "90vw",
          y: -500,
          opacity: [0, 1, 1, 0],
          scale: 1.5 
        }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.1 }}
        viewport={{ once: false, amount: 0.1 }} 
        className="absolute bottom-10 left-0 z-50 pointer-events-none" 
      >
        <div className="relative">
          <Rocket size={80} className="text-black rotate-45 drop-shadow-xl" />
          <div className="absolute top-full left-0 w-6 h-24 bg-gradient-to-t from-transparent via-gray-400 to-black blur-lg -rotate-45 origin-top-left -translate-y-4 translate-x-4 opacity-50" />
        </div>
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Contact Us</h2>
          <p className="text-gray-500">Get in touch for a free consultation.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          
          {/* KOLOM KIRI: Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Card 1: Email (HAPUS BORDER) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              // UBAH: Hapus 'border border-gray-200' -> Ganti 'shadow-md' biar timbul dikit tanpa garis
              className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-black shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">Email Us</h3>
                <p className="text-gray-600 text-sm break-all">admin@jagadciptadigital.com</p>
              </div>
            </motion.div>

            {/* Card 2: Location (HAPUS BORDER) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              // UBAH: Hapus border juga
              className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-black shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">Our Hub</h3>
                <p className="text-gray-600 text-sm">Malang, Indonesia</p>
              </div>
            </motion.div>
          </div>

          {/* KOLOM KANAN: Form (HAPUS BORDER) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // UBAH: Hapus 'border border-gray-200' -> Cukup Shadow
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-black">Name</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan Nama Anda"
                    className="w-full bg-gray-50 border-none rounded-lg px-4 py-3 text-black focus:ring-2 focus:ring-black transition-all placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-black">Email</label>
                  <input 
                    type="email" 
                    placeholder="Masukkan Email Anda"
                    className="w-full bg-gray-50 border-none rounded-lg px-4 py-3 text-black focus:ring-2 focus:ring-black transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-black">Company / Institution (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Perusahaan atau Instansi Anda"
                  className="w-full bg-gray-50 border-none rounded-lg px-4 py-3 text-black focus:ring-2 focus:ring-black transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-black">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Beri tahu kami tentang Project anda"
                  className="w-full bg-gray-50 border-none rounded-lg px-4 py-3 text-black focus:ring-2 focus:ring-black transition-all placeholder:text-gray-400 resize-none"
                />
              </div>

              <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                <Send size={18} className="group-hover:translate-x-1 transition-transform" /> Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}