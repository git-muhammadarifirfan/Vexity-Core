"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Wifi, Battery, Signal, Activity, Database, FileSpreadsheet, 
  TrendingUp, ShieldCheck, User, MoreHorizontal,
  CheckCircle2, Clock
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Live Data Acquisition",
    desc: "Pantau masuknya data sensor IoT atau input responden secara real-time tanpa delay.",
    screenColorClass: "bg-gray-50",
    themeColor: "emerald",
    bgAccent: "bg-emerald-50",
    textAccent: "text-emerald-600",
    icon: Activity,
  },
  {
    id: 2,
    title: "Methodology Guard",
    desc: "Sistem validasi otomatis yang menolak input sampah (spam) agar data penelitian tetap murni.",
    screenColorClass: "bg-gray-50",
    themeColor: "blue",
    bgAccent: "bg-blue-50",
    textAccent: "text-blue-600",
    icon: Database,
  },
  {
    id: 3,
    title: "Export Ready Format",
    desc: "Sekali klik, data langsung terunduh dalam format .CSV atau .XLSX siap olah (SPSS/Python).",
    screenColorClass: "bg-gray-50",
    themeColor: "purple",
    bgAccent: "bg-purple-50",
    textAccent: "text-purple-600",
    icon: FileSpreadsheet,
  },
];

export default function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardLength = features.length;
    const index = Math.min(Math.floor(latest * cardLength), cardLength - 1);
    setActiveCard(index);
  });

  const scrollToFeature = (index: number) => {
    const element = document.getElementById(`feature-${index}`);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative bg-white text-black transition-colors duration-300 overflow-hidden py-10 lg:py-20">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER SECTION (ANIMASI DARI KIRI) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} // Mulai dari kiri
          whileInView={{ opacity: 1, x: 0 }} // Ke posisi normal
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 lg:mb-20 text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
        >
           <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-black">
             Control Your <br />
             <span className="text-black border-b-4 border-black">Research.</span>
           </h2>
           <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0 font-medium">
             Jangan biarkan teknis menghambat riset. Pantau instrumen penelitian digital Anda dalam satu genggaman.
           </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          
          {/* --- KOLOM KANAN (HP STICKY - ANIMASI DARI KANAN) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} // Mulai dari kanan
            whileInView={{ opacity: 1, x: 0 }} // Ke posisi normal
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Delay dikit biar gantian
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-start lg:items-center sticky top-24 lg:top-0 h-[60vh] lg:h-screen z-10 lg:z-auto pointer-events-none lg:pointer-events-auto"
          >
            {/* Wrapper Scale Responsive */}
            <div className="transform scale-[0.7] sm:scale-[0.8] lg:scale-100 origin-top lg:origin-center transition-transform duration-300">
               <div className="relative w-[360px] h-[750px] bg-black border-[8px] border-gray-800 rounded-[55px] shadow-2xl overflow-hidden">
                
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-2xl z-30 flex justify-center items-center gap-2">
                  <div className="w-20 h-5 bg-gray-900 rounded-full flex items-center justify-center px-2">
                     <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"/>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="absolute top-3 w-full px-7 flex justify-between text-xs text-black z-20 font-bold">
                  <span>9:41</span>
                  <div className="flex gap-1.5 text-black">
                    <Signal size={14} />
                    <Wifi size={14} />
                    <Battery size={14} />
                  </div>
                </div>

                {/* LAYAR HP (BACKGROUND PUTIH) */}
                <div className="relative w-full h-full bg-gray-50">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === activeCard ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute inset-0 w-full h-full flex flex-col p-6 pt-14 overflow-hidden`}
                    >
                      {/* 1. HEADER */}
                      <div className="flex justify-between items-center mb-6 relative z-10">
                         <div>
                            <p className="text-xs text-gray-500 font-medium">Research Dashboard</p>
                            <h2 className="text-xl font-bold text-gray-900">Project Skripsi V1</h2>
                         </div>
                         <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                            <User size={18} className="text-gray-700" />
                         </div>
                      </div>

                      {/* 2. HERO CARD (Visualisasi Utama) */}
                      <div className="w-full aspect-square bg-white shadow-xl shadow-gray-200/50 rounded-3xl p-6 relative mb-4 overflow-hidden group border border-white">
                          <div className="flex justify-between items-start mb-8 relative z-10">
                             <div className={`p-2 rounded-lg ${feature.bgAccent}`}>
                                <feature.icon className={`${feature.textAccent}`} size={24} />
                             </div>
                             <div className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-[10px] text-gray-600 font-bold uppercase tracking-wider">
                                Live Status
                             </div>
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center">
                             {index === 0 && (
                                <div className="flex gap-2 items-center h-32 opacity-80">
                                  {[...Array(7)].map((_, i) => (
                                    <motion.div 
                                      key={i}
                                      className="w-4 bg-emerald-500 rounded-full"
                                      animate={{ height: [40, 100, 30, 80, 40] }}
                                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                    />
                                  ))}
                                </div>
                             )}
                             {index === 1 && (
                                <div className="relative">
                                   <motion.div 
                                      animate={{ rotate: 360 }}
                                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                      className="w-32 h-32 rounded-full border border-blue-100 border-t-blue-500"
                                   />
                                   <ShieldCheck size={48} className="text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                </div>
                             )}
                             {index === 2 && (
                               <div className="relative flex items-center justify-center">
                                  <svg className="w-32 h-32 transform -rotate-90">
                                     <circle cx="64" cy="64" r="60" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                                     <motion.circle 
                                       cx="64" cy="64" r="60" 
                                       stroke="#9333ea" 
                                       strokeWidth="8" 
                                       fill="transparent" 
                                       strokeDasharray="377"
                                       strokeDashoffset="377"
                                       animate={{ strokeDashoffset: 0 }}
                                       transition={{ duration: 2, ease: "easeOut" }}
                                     />
                                  </svg>
                                  <div className="absolute text-center">
                                     <span className="text-3xl font-bold text-gray-900">100%</span>
                                  </div>
                               </div>
                             )}
                          </div>
                          
                          <div className="absolute bottom-6 left-6 z-10">
                             <p className="text-4xl font-bold text-gray-900 tracking-tight">
                                {index === 0 ? "842" : index === 1 ? "0" : "3"}
                             </p>
                             <p className="text-sm text-gray-400 font-medium">
                                {index === 0 ? "Data Points" : index === 1 ? "Threats Detected" : "Files Generated"}
                             </p>
                          </div>
                      </div>

                      {/* 3. BENTO GRID */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                         <div className="bg-white shadow-lg shadow-gray-200/50 rounded-2xl p-4 flex flex-col justify-between h-28 border border-white">
                            <div className="flex justify-between items-start">
                               <TrendingUp size={18} className="text-gray-400" />
                               <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">+12%</span>
                            </div>
                            <div>
                               <p className="text-xl font-bold text-gray-900">99.8%</p>
                               <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Uptime</p>
                            </div>
                         </div>
                         <div className="bg-white shadow-lg shadow-gray-200/50 rounded-2xl p-4 flex flex-col justify-between h-28 border border-white">
                            <div className="flex justify-between items-start">
                               <Clock size={18} className="text-gray-400" />
                            </div>
                            <div>
                               <p className="text-xl font-bold text-gray-900">24ms</p>
                               <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Latency</p>
                            </div>
                         </div>
                      </div>

                      {/* 4. ACTIVITY LIST */}
                      <div className="flex-1 overflow-hidden">
                         <div className="flex justify-between items-end mb-3 px-1">
                            <h4 className="text-sm font-bold text-gray-900">System Logs</h4>
                            <MoreHorizontal size={16} className="text-gray-400" />
                         </div>
                         <div className="space-y-2">
                            {[1, 2].map((i) => (
                               <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                                  <CheckCircle2 size={16} className={`${feature.textAccent}`} />
                                  <div className="flex-1 min-w-0">
                                     <p className="text-xs font-bold text-gray-800 truncate">
                                        {index === 0 ? `Data packet #${800+i} received` : 
                                         index === 1 ? `Filter applied to Input #${20+i}` : 
                                         `Dataset_v${i}.csv exported`}
                                     </p>
                                  </div>
                                  <span className="text-[10px] text-gray-400 font-medium">10:4{i} AM</span>
                               </div>
                            ))}
                         </div>
                      </div>
                      
                      {/* Floating Bottom Nav */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white shadow-xl shadow-gray-200 rounded-full border border-gray-100 flex gap-6 z-20">
                         <div className={`w-1.5 h-1.5 rounded-full transition-all ${index===0 ? 'bg-black scale-125' : 'bg-gray-300'}`} />
                         <div className={`w-1.5 h-1.5 rounded-full transition-all ${index===1 ? 'bg-black scale-125' : 'bg-gray-300'}`} />
                         <div className={`w-1.5 h-1.5 rounded-full transition-all ${index===2 ? 'bg-black scale-125' : 'bg-gray-300'}`} />
                      </div>

                    </motion.div>
                  ))}
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-gray-300 rounded-full z-30" />
              </div>
            </div>
          </motion.div>

          {/* --- KOLOM KIRI (TEKS FITUR - ANIMASI DARI KIRI) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} // Mulai dari kiri
            whileInView={{ opacity: 1, x: 0 }} // Ke posisi normal
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // Delay lebih lama
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 order-2 lg:order-1 lg:py-20 lg:pb-40 mt-[350px] lg:mt-0 relative z-20"
          >
            <div className="space-y-32 lg:space-y-32 pb-20">
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  id={`feature-${index}`}
                  onClick={() => scrollToFeature(index)}
                  className={`
                    relative z-50 w-full lg:w-fit transition-all duration-500 cursor-pointer group 
                    p-6 lg:p-0 rounded-2xl lg:rounded-none
                    bg-white/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border lg:border-none border-gray-100 shadow-xl lg:shadow-none
                    ${index === activeCard ? "opacity-100 scale-100 ring-2 lg:ring-0 ring-black/5" : "opacity-50 lg:opacity-30 scale-95 hover:opacity-100"}
                  `}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gray-100 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300`}>
                      <feature.icon size={32} />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-black transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg lg:text-xl text-black leading-relaxed max-w-md lg:border-l-2 border-black lg:pl-6 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}