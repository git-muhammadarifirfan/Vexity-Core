"use client";

import { useEffect } from "react";

export default function FaviconAnimator() {
  useEffect(() => {
    const totalFrames = 16;
    const frames = Array.from(
      { length: totalFrames },
      (_, i) => `/favframes/icon-${i}.png`,
    );

    let idx = 0;

    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    const timer = window.setInterval(() => {
      idx = (idx + 1) % frames.length;
      link!.href = `${frames[idx]}?v=${Date.now()}`; // cache buster kuat
    }, 120);

    return () => window.clearInterval(timer);
  }, []);

  return null;
}
