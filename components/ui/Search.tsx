"use client";

import Lottie from "lottie-react";
import animationData from "@/components/lottie/search.json";

export default function SearchAnim() {
  return (
    <div
      className="
        w-[520px] max-w-full
        sm:w-[520px]
        rounded-full overflow-hidden
        bg-white
        shadow-[0_18px_60px_-35px_rgba(0,0,0,0.65)]
      "
    >
      {/* tinggi pill konsisten */}
      <div className="h-[48px] ">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="w-full h-full"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
    </div>
  );
}
