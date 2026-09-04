import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

/**
 * The live Stripe checkout for the CTI founding-cohort place ($299, rising
 * to $599 after the first 20), ported from the old dedicated page at
 * /portfolio-simulations/cyber-threat-intelligence so the purchase flow
 * keeps working now that URL redirects to
 * /simulation-based-work-experience/cyber-threat-intelligence. Behaviour
 * is unchanged from the original — same endpoints, same success flow.
 */

const ease = [0.22, 1, 0.36, 1] as const;

export const CTI_PRICE_FEATURES = [
  "All 2–3 scenarios",
  "Rubric-scored portfolio bundle",
  "Two consultant office hours",
  "Digital credential via Certifier",
  "Named-expert validation",
  "Closing feedback session",
  "Founding cohort badge",
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="7" fill="#0d9488" opacity="0.12" />
      <path d="M3.5 7.5l2.5 2.5 4.5-5" stroke="#0d9488" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CtiCheckoutButton({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("https://careerbridge-backend-1mo7.onrender.com/api/checkout/cti-founding", {
        method: "POST",
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`${className} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          <span>Processing…</span>
        </span>
      ) : (
        <>
          <span className="sm:hidden">Claim your place · $299</span>
          <span className="hidden sm:inline">Claim a founding cohort place · $299</span>
        </>
      )}
    </button>
  );
}

export function CtiPricingCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative bg-white/[0.04] border border-accent-teal/30 p-8 md:p-10 shadow-[0_0_80px_rgba(13,148,136,0.1)] ${className}`}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/80 to-transparent" />

      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase text-accent-teal tracking-[0.2em] mb-4">Founding cohort place</p>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-6xl font-bold text-white tracking-[-0.03em]">$299</span>
        </div>
        <p className="text-xs text-white/25 mt-2">USD. Local-currency-equivalent at checkout via Stripe.</p>
      </div>

      <div className="h-px bg-white/[0.08] my-6" />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
        {CTI_PRICE_FEATURES.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-white/60">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="h-px bg-white/[0.08] mb-6" />

      <CtiCheckoutButton className="w-full flex items-center justify-center text-[11px] font-medium uppercase py-4 tracking-[0.1em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200" />
      <p className="text-xs text-center text-white/20 mt-3">20 founding cohort places. After they&apos;re gone, the next cohort opens at $599.</p>
    </div>
  );
}

function SuccessForm({ onSuccess }: { onSuccess: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://careerbridge-backend-1mo7.onrender.com/api/notify/cti-purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          amount: "$299",
          product: "Verified CTI Work Portfolio — Founding Cohort",
        }),
      });
      if (!res.ok) throw new Error();
      onSuccess();
    } catch {
      toast.error("Something went wrong. Please email support@careerbridgefoundation.zohodesk.eu directly.");
      setSubmitting(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-ink/90 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="relative w-full max-w-md bg-ink border border-accent-teal/30 p-8 sm:p-10"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/80 to-transparent" />

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-teal" />
            <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Payment confirmed</span>
          </div>
          <h2 className="text-2xl font-bold text-white leading-tight mb-2">One last step.</h2>
          <p className="text-sm text-white/45 leading-[1.75]">
            Leave your name and email so we can confirm your place and send cohort details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">Full name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your name"
              className="w-full bg-white/[0.05] border border-white/10 text-white placeholder-white/20 text-sm px-4 py-3 outline-none focus:border-accent-teal/60 transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">Email address</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="you@example.com"
              className="w-full bg-white/[0.05] border border-white/10 text-white placeholder-white/20 text-sm px-4 py-3 outline-none focus:border-accent-teal/60 transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full flex items-center justify-center gap-2 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.1em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <svg className="animate-spin h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Sending…
              </>
            ) : (
              "Confirm my place"
            )}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-ink/90 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease }}
        className="relative w-full max-w-md bg-ink border border-accent-teal/30 p-8 sm:p-10 text-center"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/80 to-transparent" />

        <div className="mx-auto mb-6 w-14 h-14 rounded-full border border-accent-teal/30 bg-accent-teal/10 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3 leading-tight">You&apos;re in.</h2>
        <p className="text-sm text-white/50 leading-[1.8] mb-8">
          We&apos;ve received your enrolment details. A member of the Career Bridge team will be in touch within a
          few minutes to confirm your cohort place.
        </p>

        <button
          onClick={onClose}
          className="w-full text-[11px] font-medium uppercase px-8 py-4 tracking-[0.1em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200"
        >
          Back to the page
        </button>
      </motion.div>
    </motion.div>
  );
}

/** Mount once per page. Detects the `?success=1` Stripe redirect and drives the post-payment form → confirmation flow. */
export function CtiCheckoutOverlays() {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success") === "1") {
      setShowForm(true);
      setSearchParams({}, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {showForm && !showModal && (
        <SuccessForm
          onSuccess={() => {
            setShowForm(false);
            setShowModal(true);
          }}
        />
      )}
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </AnimatePresence>
  );
}
