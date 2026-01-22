"use client";
import { motion, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { label: "Systems Deployed", value: 142, suffix: "+" },
  { label: "Uptime Guarantee", value: 99, suffix: "%" },
  { label: "Global Servers", value: 24, suffix: "" },
  { label: "Team Experts", value: 50, suffix: "+" },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: 2
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

export default function Stats() {
  return (
    // UBAH: Hapus 'border-y border-gray-100' -> Jadi polosan aja
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 group cursor-default">
              <div className="text-4xl md:text-6xl font-extrabold text-black transition-all duration-300">
                <Counter value={stat.value} />{stat.suffix}
              </div>
              <p className="text-sm md:text-base font-bold text-black uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}