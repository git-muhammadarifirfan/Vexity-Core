"use client";

import Lottie from "lottie-react";
import ReseachAnimData from "@/components/lottie/Reseach.json";

export default function ReseachAnim() {
  return (
    <div className="absolute inset-0">
      <Lottie
        animationData={ReseachAnimData}
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
