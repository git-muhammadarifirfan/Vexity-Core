"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

import LogoVC from "./LogoVC";

export default function SiteNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll saat menu mobile kebuka (biar terasa rapi)
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = useMemo(
    () => [
      { name: "Beranda", link: "#top" },
      { name: "Tentang", link: "#" },
      { name: "Layanan", link: "#services" },
      { name: "Testimonial", link: "/filosofi" }, // hapus spasi trailing biar konsisten
    ],
    [],
  );

  const go = (link: string) => {
    setIsMobileMenuOpen(false);

    if (link.startsWith("/")) {
      router.push(link);
      return;
    }

    const id = link.replace("#", "");

    if (pathname !== "/") {
      router.push(`/${link === "#top" ? "" : link}`);
      return;
    }

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={
        reduceMotion ? { opacity: 1 } : { opacity: 0, y: -14, scale: 0.98 }
      }
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
      }
      // ✅ turun sedikit + padding lebih stabil
      className="fixed top-6 sm:top-7 left-0 right-0 z-[9999] flex justify-center px-4"
    >
      <Navbar scrolled={scrolled}>
        {/* Desktop (biarin sama seperti kamu sekarang) */}
        <NavBody>
          <button
            onClick={() => go("#top")}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <LogoVC />
            <span className="font-bold text-lg tracking-tight text-black group-hover:opacity-80 transition-opacity">
              Vexity<span className="font-normal">Core</span>
            </span>
          </button>

          <NavItems
            items={navItems.map((it) => ({
              name: it.name,
              link: it.link,
              onClick: () => go(it.link),
            }))}
          />

          <div className="flex items-center gap-3">
            <NavbarButton variant="secondary" onClick={() => go("#portfolio")}>
              Lihat Portofolio
            </NavbarButton>
            <NavbarButton variant="primary" onClick={() => go("#contact")}>
              Kontak
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile: panel simple & solid (ngilangin “lingkaran”) */}
        <MobileNav>
          <div className="relative">
            <MobileNavHeader>
              <button
                onClick={() => go("#top")}
                className="flex items-center gap-3 group"
                aria-label="Go to top"
              >
                <LogoVC />
                <span className="font-bold text-base tracking-tight text-black group-hover:opacity-80 transition-opacity">
                  Vexity<span className="font-normal">Core</span>
                </span>
              </button>

              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((v) => !v)}
              />
            </MobileNavHeader>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <>
                  {/* overlay tipis supaya background hero gak “ganggu” */}
                  <motion.button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 z-[9998] bg-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />

                  {/* dropdown panel */}
                  <motion.div
                    className="absolute left-0 right-0 top-full z-[9999] mt-3"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mx-auto w-full max-w-[420px] rounded-3xl bg-white shadow-m ring-1 ring-black/5 overflow-hidden">
                      <div className="p-2">
                        {navItems.map((it, idx) => (
                          <button
                            key={idx}
                            onClick={() => go(it.link)}
                            className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-black/5 rounded-2xl transition-colors"
                          >
                            {it.name}
                          </button>
                        ))}
                      </div>

                      <div className="px-3 pb-3">
                        <button
                          onClick={() => go("#contact")}
                          className="w-full bg-black text-white py-3 rounded-2xl font-bold flex items-center justify-center hover:bg-gray-800 transition-colors"
                        >
                          Hubungi Kami
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </MobileNav>
      </Navbar>
    </motion.div>
  );
}
