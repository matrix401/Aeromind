import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
