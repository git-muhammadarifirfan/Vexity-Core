"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  link: string;
  onClick?: () => void;
};

export function Navbar({
  children,
  scrolled = false,
}: {
  children: React.ReactNode;
  scrolled?: boolean;
}) {
  return (
    <motion.div
      // ✅ animasi masuk saat reload
      initial={{ y: -14, opacity: 0, scale: 0.985 }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,

        // ✅ melebar saat top, mepet saat scroll
        maxWidth: scrolled ? 860 : 1120,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className="w-full"
      style={{ width: "100%" }}
    >
      <div
        className={`w-full rounded-full border border-gray-200 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-md"
            : "bg-white/70 supports-[backdrop-filter]:bg-white/60 shadow-sm"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function NavBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden md:flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
      {children}
    </div>
  );
}

export function NavItems({ items }: { items: NavItem[] }) {
  return (
    <div className="flex items-center gap-8">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => item.onClick?.()}
          className="relative group text-sm font-medium text-gray-600 hover:text-black transition-colors py-1"
        >
          {item.name}
          {/* ✅ underline smooth */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-out group-hover:w-full" />
        </button>
      ))}
    </div>
  );
}

export function NavbarButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "px-5 py-2 text-sm font-bold rounded-full transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-800"
      : "bg-white text-black border border-gray-200 hover:bg-black hover:text-white";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

/* Mobile */
export function MobileNav({ children }: { children: React.ReactNode }) {
  return <div className="md:hidden px-4 py-2">{children}</div>;
}

export function MobileNavHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between">{children}</div>;
}

export function MobileNavToggle({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}

export function MobileNavMenu({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="mt-3 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl overflow-hidden p-4 flex flex-col gap-2"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
