"use client";

import Lottie from "lottie-react";
import heroAnim from "@/components/lottie/hero.json";

export default function HeroLottie() {
  return (
    <div className="absolute inset-0">
      <Lottie
        animationData={heroAnim}
        autoplay
        loop
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          // mirip object-cover
          preserveAspectRatio: "xMidYMin slice", // "top" feel (lebih fokus atas)
        }}
      />
    </div>
  );
}
