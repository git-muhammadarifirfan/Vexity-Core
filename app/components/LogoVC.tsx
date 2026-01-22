"use client";

import { motion } from "framer-motion";

export default function LogoVC() {
  const gridVariants = {
    rest: { gap: "4px", rotate: 0 },
    hover: {
      gap: "8px",
      rotate: 90,
      transition: { duration: 0.4, ease: "backOut" },
    },
  };

  const squareVariants = {
    rest: { borderRadius: "2px", scale: 1 },
    hover: {
      borderRadius: "50%",
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
    >
      <motion.div
        variants={gridVariants}
        className="flex flex-wrap w-6 h-6 justify-center items-center content-center"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <motion.div
          variants={squareVariants}
          className="w-2.5 h-2.5 bg-black"
        />
        <motion.div
          variants={squareVariants}
          className="w-2.5 h-2.5 bg-black"
        />
        <motion.div
          variants={squareVariants}
          className="w-2.5 h-2.5 bg-black"
        />
        <motion.div
          variants={squareVariants}
          className="w-2.5 h-2.5 bg-black"
        />
      </motion.div>
    </motion.div>
  );
}
