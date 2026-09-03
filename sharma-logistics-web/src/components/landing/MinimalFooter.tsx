import { business } from "@/config/business";

export function MinimalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-8 text-center text-sm text-text-dim sm:px-6">
        <p>{business.brandName} · {business.contact.phoneDisplay} · {business.contact.email}</p>
        <p className="mt-2">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          {" · "}
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </p>
        <p className="mt-2">© {year} {business.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
