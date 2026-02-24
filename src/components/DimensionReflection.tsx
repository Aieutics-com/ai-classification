"use client";

import type { DimensionClassification, Classification } from "@/lib/types";
import { DIMENSION_REFLECTIONS } from "@/lib/results-data";

const CLASS_LABELS: Record<Classification, string> = {
  optimisation: "Optimisation",
  adjacency: "Adjacency",
  transformation: "Transformation",
};

interface DimensionReflectionProps {
  dimensionResult: DimensionClassification;
  gapColor: string;
}

export default function DimensionReflection({
  dimensionResult,
  gapColor,
}: DimensionReflectionProps) {
  const data = DIMENSION_REFLECTIONS[dimensionResult.dimension.id];
  if (!data) return null;

  return (
    <div className="relative rounded-xl bg-[var(--color-white)] border border-[var(--color-grey-light)] p-5 mb-4 overflow-hidden">
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
        style={{ backgroundColor: gapColor }}
      />

      <div className="pl-4">
        <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold mb-2 flex items-center gap-2">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: gapColor }}
          />
          {dimensionResult.dimension.name}
          <span className="font-normal text-[var(--color-grey)]">
            — {CLASS_LABELS[dimensionResult.classification]}
          </span>
        </h4>
        <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)] leading-relaxed mb-3">
          {data.reflection}
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm italic text-[var(--color-grey)]">
          {data.reflectionPrompt}
        </p>
      </div>
    </div>
  );
}
