"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

type Props = {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
};

export default function LottieCanvas({
  animationData,
  loop = true,
  autoplay = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const anim: AnimationItem = lottie.loadAnimation({
      container: ref.current,
      renderer: "canvas", // ✅ lebih smooth
      loop,
      autoplay,
      animationData,
      rendererSettings: {
        clearCanvas: true,
        progressiveLoad: true,
      },
    });

    // hint GPU
    ref.current.style.transform = "translateZ(0)";
    ref.current.style.willChange = "transform";

    return () => anim.destroy();
  }, [animationData, loop, autoplay]);

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
}
