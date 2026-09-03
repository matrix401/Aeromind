import type { Metadata } from "next";
import { NotFoundContent } from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

// Root-level fallback for a URL that matches no route at all. The common
// case — notFound() thrown inside a (site) dynamic route — is handled by
// (site)/not-found.tsx instead, which renders with full header/footer.
export default function NotFound() {
  return <NotFoundContent />;
}
