"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

type Product = {
  title: string;
  link: string;
  thumbnail: string;
};

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // ✅ Smooth progress sekali saja (lebih ringan & scroll terasa halus)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
    bounce: 0, // penting: jangan bounce biar ga jitter
  });

  // Turunan transform dari progress yang sudah dismooth
  const translateX = useTransform(smoothProgress, [0, 1], [0, 1000]);
  const translateXReverse = useTransform(smoothProgress, [0, 1], [0, -1000]);

  const rotateX = useTransform(smoothProgress, [0, 0.2], [15, 0]);
  const rotateZ = useTransform(smoothProgress, [0, 0.2], [20, 0]);
  const translateY = useTransform(smoothProgress, [0, 0.2], [-700, 500]);
  const opacity = useTransform(smoothProgress, [0, 0.2], [0.2, 1]);

  return (
    <div
      ref={ref}
      className="h-[260vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
          willChange: "transform",
        }}
        className="transform-gpu"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 will-change-transform transform-gpu pt-10">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row mb-20 space-x-20 will-change-transform transform-gpu">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 will-change-transform transform-gpu">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        Vexity Core <br /> Portofolio Kami
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        Kami percaya kualitas terlihat dari hasil. Berikut proyek-proyek yang
        kami kerjakan untuk berbagai kebutuhan dan skala, dirancang rapi dan
        dibangun dengan standar yang konsisten.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
        willChange: "transform",
      }}
      whileHover={{ y: -20 }}
      className="group/product h-96 w-[30rem] relative shrink-0 transform-gpu"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          height={600}
          width={600}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-[#0B1220]] pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
