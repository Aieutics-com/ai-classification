"use client";

import type { GapResult } from "@/lib/types";
import { getDivergentDimensions } from "@/lib/scoring";
import { COI_COPY } from "@/lib/results-data";

interface COISectionProps {
  result: GapResult;
}

export default function COISection({ result }: COISectionProps) {
  const divergentCount = getDivergentDimensions(result).length;
  if (divergentCount === 0) return null;

  return (
    <section className="relative bg-[var(--color-foreground)] text-[var(--color-background)] p-8 rounded-2xl mt-10 overflow-hidden">
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4 text-[var(--color-orange)]">
        {COI_COPY.heading}
      </h3>
      <p className="font-[family-name:var(--font-body)] text-base leading-relaxed mb-4 text-[var(--color-grey-light)]">
        {COI_COPY.intro}
      </p>
      <p className="font-[family-name:var(--font-body)] text-base leading-relaxed mb-6 text-[var(--color-grey-light)]">
        {COI_COPY.body}
      </p>
      <div className="border-t border-[var(--color-grey)] pt-4">
        <p className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-orange)] mb-1">
          {divergentCount}
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey-light)]">
          {divergentCount === 1
            ? "dimension where the actual requirement exceeds the approved classification — a compounding structural risk."
            : "dimensions where the actual requirements exceed the approved classification — each one a compounding structural risk."}
        </p>
      </div>
    </section>
  );
}
