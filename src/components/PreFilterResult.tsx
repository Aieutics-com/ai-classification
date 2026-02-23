"use client";

import { INTEGRATION_RESULT } from "@/lib/prefilter-data";

interface PreFilterResultProps {
  onContinue: () => void;
  onRestart: () => void;
}

export default function PreFilterResult({
  onContinue,
  onRestart,
}: PreFilterResultProps) {
  return (
    <div>
      <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-widest text-[var(--color-green)] mb-2">
        Pre-filter result
      </p>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
        {INTEGRATION_RESULT.heading}
      </h2>
      <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-grey)] leading-relaxed mb-6">
        {INTEGRATION_RESULT.description}
      </p>

      <div className="rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] p-6 mb-6">
        <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold mb-4">
          What this means
        </h3>
        <ul className="space-y-3">
          {INTEGRATION_RESULT.implications.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] leading-relaxed"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "var(--color-green)" }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl bg-[var(--color-orange-vsoft)] border border-[var(--color-orange-soft)] p-5 mb-8">
        <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)] leading-relaxed">
          If you believe your initiative is more complex than a straightforward
          integration, you can continue to the full diagnostic to verify.
        </p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={onContinue}
          className="bg-[var(--color-orange)] text-white font-[family-name:var(--font-heading)] font-bold text-sm px-8 py-3 rounded-xl shadow-[0_0_15px_rgba(255,95,31,0.2)] hover:shadow-[0_0_30px_rgba(255,95,31,0.3)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
        >
          Continue to diagnostic anyway
        </button>
        <button
          onClick={onRestart}
          className="px-8 py-3 text-sm font-bold font-[family-name:var(--font-heading)] border border-[var(--color-grey-light)] rounded-xl text-[var(--color-grey)] hover:text-[var(--color-foreground)] hover:border-[var(--color-foreground)] transition-all duration-200 cursor-pointer"
        >
          Retake pre-filter
        </button>
      </div>
    </div>
  );
}
