import type { Metadata } from "next";
import { InfoBar } from "@/components/home/InfoBar";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServiceChooser } from "@/components/home/ServiceChooser";
import { PriceGuidance } from "@/components/home/PriceGuidance";
import { ThreeWaysToQuote } from "@/components/home/ThreeWaysToQuote";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PackingProof } from "@/components/home/PackingProof";
import { WrittenPriceClarity } from "@/components/home/WrittenPriceClarity";
import { RecentMoves } from "@/components/home/RecentMoves";
import { Reviews } from "@/components/home/Reviews";
import { HyderabadCoverage } from "@/components/home/HyderabadCoverage";
import { InterstateRoutes } from "@/components/home/InterstateRoutes";
import { BusinessLogisticsTeaser } from "@/components/home/BusinessLogisticsTeaser";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Packers and Movers Hyderabad",
  description:
    "Packers and movers across Hyderabad, interstate relocation and nationwide logistics — clear written pricing and one dedicated move coordinator.",
};

export default function HomePage() {
  return (
    <>
      <InfoBar />
      <Hero />
      <TrustStrip />
      <ServiceChooser />
      <PriceGuidance />
      <ThreeWaysToQuote />
      <HowItWorks />
      <PackingProof />
      <WrittenPriceClarity />
      <RecentMoves />
      <Reviews />
      <HyderabadCoverage />
      <InterstateRoutes />
      <BusinessLogisticsTeaser />
      <FaqSection />
      <FinalCta />
    </>
  );
}
