import { Button } from "@/components/ui/Button";
import { CheckIcon, AlertIcon, SpinnerIcon, PhoneIcon, WhatsappIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

type EmptyState = { status: "empty"; message?: string };
type LoadingState = { status: "loading" };
type ErrorState = { status: "error"; message: string; onRetry?: () => void };
type SuccessState = {
  status: "success";
  coordinatorName?: string;
  responseTime?: string;
  contactMethod?: string;
};

export type QuoteResultStateProps = EmptyState | LoadingState | ErrorState | SuccessState;

/**
 * Shared result panel for the quote flows (Path A and Path B). Every branch
 * is a distinct, honest state — a loading spinner never silently resolves
 * into a fabricated quote or fake confirmation.
 */
export function QuoteResultState(props: QuoteResultStateProps) {
  if (props.status === "loading") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-8 text-center"
      >
        <SpinnerIcon className="h-8 w-8 text-ink" />
        <p className="text-[15.5px] text-text-dim">Sending your request…</p>
      </div>
    );
  }

  if (props.status === "error") {
    return (
      <div
        role="alert"
        className="flex flex-col items-center gap-3 rounded-2xl border-2 border-err/40 bg-err/5 p-8 text-center"
      >
        <AlertIcon className="h-8 w-8 text-err" />
        <p className="text-[15.5px] font-medium text-text">{props.message}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          {props.onRetry ? (
            <Button variant="secondary" onClick={props.onRetry}>
              Try again
            </Button>
          ) : null}
          <Button
            href={business.contact.phoneHref}
            variant="call"
            icon={<PhoneIcon className="h-5 w-5" />}
          >
            Call us instead
          </Button>
        </div>
      </div>
    );
  }

  if (props.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-whatsapp/40 bg-whatsapp/5 p-8 text-center">
        <CheckIcon className="h-8 w-8 text-whatsapp" />
        <p className="font-display text-lg font-semibold text-text">
          Your request has been received.
        </p>
        <p className="text-[15.5px] text-text-dim">
          Move coordinator: {props.coordinatorName ?? "[ASSIGNED_COORDINATOR]"}
        </p>
        <p className="text-[15.5px] text-text-dim">
          Expected response: {props.responseTime ?? "[VERIFIED_RESPONSE_TIME]"}
        </p>
        <p className="text-[15.5px] text-text-dim">
          You will hear from us by {props.contactMethod ?? "[CALL_OR_WHATSAPP]"}.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Button
            href={business.contact.phoneHref}
            variant="call"
            icon={<PhoneIcon className="h-5 w-5" />}
          >
            Call coordinator
          </Button>
          <Button
            href={business.contact.whatsappHref}
            variant="whatsapp"
            icon={<WhatsappIcon className="h-5 w-5" />}
          >
            WhatsApp coordinator
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-dashed border-line bg-paper p-8 text-center text-[15.5px] text-text-dim">
      {props.message ?? "Fill in the form above to get your moving cost."}
    </div>
  );
}
