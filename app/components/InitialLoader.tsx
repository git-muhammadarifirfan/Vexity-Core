"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";

import loadingAnim from "../../components/lottie/Loading.json"; // sesuaikan path

type Props = {
  children: React.ReactNode;

  /** loader minimal tampil segini biar animasi keliatan */
  minPlayMs?: number;

  /** hard limit: maksimal segini (permintaan kamu 3.5s) */
  maxWaitMs?: number;
};

export default function LoadGate({
  children,
  minPlayMs = 1800,
  maxWaitMs = 3500,
}: Props) {
  const [ready, setReady] = useState(false);

  const start = useMemo(() => Date.now(), []);
  const [pageReady, setPageReady] = useState(false);
  const [minPlayed, setMinPlayed] = useState(false);

  useEffect(() => {
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setReady(true);
      document.documentElement.style.overflow = prevOverflow;
    };

    // 1) Minimum play time timer
    const tMin = window.setTimeout(() => setMinPlayed(true), minPlayMs);

    // 2) Page ready signal (window load + fonts)
    const onLoad = async () => {
      try {
        // tunggu fonts biar layout gak lompat
        // @ts-ignore
        await (document.fonts?.ready ?? Promise.resolve());
      } finally {
        setPageReady(true);
      }
    };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    // 3) Hard limit 3.5s
    const tMax = window.setTimeout(() => finish(), maxWaitMs);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(tMin);
      window.clearTimeout(tMax);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [maxWaitMs, minPlayMs]);

  // 4) Gate condition: page siap AND min time sudah lewat
  useEffect(() => {
    if (!ready && pageReady && minPlayed) setReady(true);
  }, [pageReady, minPlayed, ready]);

  return (
    <>
      <div className={ready ? "gate-content is-ready" : "gate-content"}>
        {children}
      </div>

      <AnimatePresence>
        {!ready && (
          <motion.div
            className="gate-overlay-simple"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="gate-lottie-simple">
              <Lottie
                animationData={loadingAnim}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
