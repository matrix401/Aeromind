import { CheckIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {business.trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2 text-[15px] font-medium text-text">
              <CheckIcon className="h-4 w-4 shrink-0 text-whatsapp" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
