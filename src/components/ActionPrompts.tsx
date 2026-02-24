"use client";

import type { GapResult } from "@/lib/types";
import { getDivergentDimensions } from "@/lib/scoring";
import { DIMENSION_REFLECTIONS } from "@/lib/results-data";

interface ActionPromptsProps {
  result: GapResult;
}

export default function ActionPrompts({ result }: ActionPromptsProps) {
  const divergent = getDivergentDimensions(result);
  if (divergent.length === 0) return null;

  const allPrompts: { dimension: string; prompt: string }[] = [];
  for (const dim of divergent) {
    const data = DIMENSION_REFLECTIONS[dim.dimension.id];
    if (!data) continue;
    for (const prompt of data.actionPrompts) {
      allPrompts.push({ dimension: dim.dimension.name, prompt });
    }
  }

  const displayPrompts = allPrompts.slice(0, 5);

  return (
    <section className="mt-10 mb-8">
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">
        Recommended Next Steps
      </h3>
      <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] mb-6">
        Based on the gaps identified in your diagnostic, these are the
        highest-priority actions to address.
      </p>

      <div className="space-y-4">
        {displayPrompts.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 p-4 rounded-xl bg-[var(--color-white)] border border-[var(--color-grey-light)]"
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-orange)] text-white font-[family-name:var(--font-heading)] text-sm font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)] leading-relaxed">
                {item.prompt}
              </p>
              <p className="font-[family-name:var(--font-heading)] text-xs text-[var(--color-grey)] mt-1">
                {item.dimension}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
