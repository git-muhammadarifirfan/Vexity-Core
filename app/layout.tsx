import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadGate from "./components/InitialLoader";
import FaviconAnimator from "./FaviconAnimator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VexityCore",
  description: "VexityCore — Realisasikan penelitian Anda menjadi inovasi digital nyata.",
  // icons jangan pakai GIF kalau mau animasi via JS
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        {/* favicon awal */}
        <link rel="icon" href="/favframes/icon-0.png" />
      </head>
      <body className={inter.className}>
        <FaviconAnimator />
        <LoadGate>{children}</LoadGate>
      </body>
    </html>
  );
}
