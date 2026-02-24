"use client";

import type { GapResult, Classification } from "@/lib/types";
import { getGapNarrative, getDivergentDimensions } from "@/lib/scoring";
import DimensionReflection from "./DimensionReflection";
import ActionPrompts from "./ActionPrompts";
import COISection from "./COISection";
import CTASection from "./CTASection";

interface GapResultsProps {
  result: GapResult;
  onRestart: () => void;
}

const CLASS_LABELS: Record<Classification, string> = {
  optimisation: "Optimisation",
  adjacency: "Adjacency",
  transformation: "Transformation",
};

const CLASS_POSITION: Record<Classification, number> = {
  optimisation: 0,
  adjacency: 50,
  transformation: 100,
};

/* Alignment helper: left-align at 0%, centre at 50%, right-align at 100% */
const markerAlignment = (pos: number) => {
  if (pos === 0) return { transform: "translateX(0)", alignItems: "flex-start" as const };
  if (pos === 100) return { transform: "translateX(-100%)", alignItems: "flex-end" as const };
  return { transform: "translateX(-50%)", alignItems: "center" as const };
};

const GAP_COLORS: Record<string, string> = {
  aligned: "var(--color-green)",
  "under-classified": "var(--color-red)",
  "over-classified": "var(--color-amber)",
};

export default function GapResults({ result, onRestart }: GapResultsProps) {
  const narrative = getGapNarrative(result);
  const gapColor = GAP_COLORS[result.gapDirection];
  const divergentDimensions = getDivergentDimensions(result);

  const approvedPos = CLASS_POSITION[result.approved];
  const actualPos = CLASS_POSITION[result.actual];
  const markerLeft = Math.min(approvedPos, actualPos);
  const markerRight = Math.max(approvedPos, actualPos);

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-widest text-[var(--color-orange)] mb-2">
            Classification gap
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold"
            style={{ color: gapColor }}
          >
            {narrative.label}
          </h2>
        </div>
        <button
          type="button"
          onClick={onRestart}
          className="border border-[var(--color-grey-light)] text-[var(--color-grey)] hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)] font-[family-name:var(--font-heading)] text-sm font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer shrink-0"
        >
          Retake
        </button>
      </div>

      {/* Spectrum visualisation */}
      <div className="rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] p-6 mb-6">
        <div className="relative mb-8">
          {/* Labels above spectrum */}
          <div className="flex justify-between mb-2">
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-grey)]">
              Optimisation
            </span>
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-grey)]">
              Adjacency
            </span>
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-grey)]">
              Transformation
            </span>
          </div>

          {/* Track */}
          <div className="relative h-3 rounded-full bg-[var(--color-tag-bg)]">
            {/* Gap band (only if not aligned) */}
            {result.gapDirection !== "aligned" && (
              <div
                className="absolute top-0 h-full rounded-full opacity-25"
                style={{
                  left: `${markerLeft}%`,
                  width: `${markerRight - markerLeft}%`,
                  backgroundColor: gapColor,
                }}
              />
            )}
          </div>

          {/* Markers */}
          <div className="relative h-16 mt-1">
            {result.gapDirection === "aligned" ? (
              /* Single combined marker when aligned */
              <div
                className="absolute flex flex-col"
                style={{
                  left: `${approvedPos}%`,
                  ...markerAlignment(approvedPos),
                }}
              >
                <div
                  className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                  style={{ backgroundColor: gapColor }}
                />
                <span className="font-[family-name:var(--font-mono)] text-[10px] mt-1 whitespace-nowrap" style={{ color: gapColor }}>
                  Approved & required
                </span>
                <span className="font-[family-name:var(--font-heading)] text-xs font-bold" style={{ color: gapColor }}>
                  {CLASS_LABELS[result.approved]}
                </span>
              </div>
            ) : (
              <>
                {/* Approved marker */}
                <div
                  className="absolute flex flex-col"
                  style={{
                    left: `${approvedPos}%`,
                    ...markerAlignment(approvedPos),
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                    style={{ backgroundColor: "var(--color-blue)" }}
                  />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-blue)] mt-1 whitespace-nowrap">
                    Approved as
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-xs font-bold text-[var(--color-blue)]">
                    {CLASS_LABELS[result.approved]}
                  </span>
                </div>

                {/* Actual marker */}
                <div
                  className="absolute flex flex-col"
                  style={{
                    left: `${actualPos}%`,
                    ...markerAlignment(actualPos),
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                    style={{ backgroundColor: gapColor }}
                  />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] mt-1 whitespace-nowrap" style={{ color: gapColor }}>
                    Actually requires
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-xs font-bold" style={{ color: gapColor }}>
                    {CLASS_LABELS[result.actual]}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Approved vs Actual detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <div className="rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] p-5">
          <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-widest text-[var(--color-blue)] mb-2">
            What was approved
          </p>
          <p className="font-[family-name:var(--font-heading)] text-lg font-bold">
            {CLASS_LABELS[result.approved]}
          </p>
        </div>
        <div className="rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] p-5">
          <p
            className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: gapColor }}
          >
            What is required
          </p>
          <p className="font-[family-name:var(--font-heading)] text-lg font-bold">
            {CLASS_LABELS[result.actual]}
          </p>
        </div>
      </div>

      {/* Narrative */}
      <div className="rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-warm-bg)] p-6 mb-6">
        <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-foreground)] leading-relaxed">
          {narrative.summary}
        </p>
      </div>

      {/* Implications */}
      <div className="rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] p-6 mb-6">
        <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold mb-4">
          What this gap predicts
        </h3>
        <ul className="space-y-3">
          {narrative.implications.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] leading-relaxed"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: gapColor }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Dimension breakdown */}
      <div className="rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] p-6 mb-6">
        <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold mb-4">
          Dimension breakdown
        </h3>
        <div className="space-y-4">
          {result.dimensionResults.map((dim) => (
            <div key={dim.dimension.id}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)]">
                  {dim.dimension.name}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[var(--color-grey)]">
                  {CLASS_LABELS[dim.classification]}
                </span>
              </div>
              {/* Mini spectrum */}
              <div className="relative h-2 rounded-full bg-[var(--color-tag-bg)]">
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white shadow-sm transition-all duration-500"
                  style={{
                    left: `${CLASS_POSITION[dim.classification]}%`,
                    transform: `translateX(-50%) translateY(-50%)`,
                    backgroundColor: gapColor,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Areas requiring attention */}
      {divergentDimensions.length > 0 && (
        <div className="mt-10">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">
            Areas Requiring Attention
          </h3>
          {divergentDimensions.map((dim) => (
            <DimensionReflection
              key={dim.dimension.id}
              dimensionResult={dim}
              gapColor={gapColor}
            />
          ))}
        </div>
      )}

      {/* Recommended next steps */}
      <ActionPrompts result={result} />

      {/* Cost of ignoring */}
      <COISection result={result} />

      {/* What this diagnostic doesn't tell you + signature */}
      <CTASection gapSize={result.gapSize} />
    </div>
  );
}
