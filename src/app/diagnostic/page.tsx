"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import OptionCard from "@/components/OptionCard";
import PreFilterResult from "@/components/PreFilterResult";
import GapResults from "@/components/GapResults";
import ErrorBoundary from "@/components/ErrorBoundary";
import { PREFILTER_QUESTIONS } from "@/lib/prefilter-data";
import { APPROVED_QUESTIONS, APPROVED_SECTION } from "@/lib/approved-data";
import { DIMENSIONS, SCENARIO_SECTION } from "@/lib/scenario-data";
import type { ClassLevel } from "@/lib/types";
import {
  evaluatePreFilter,
  computeGap,
  type PreFilterAnswers,
  type ClassAnswers,
} from "@/lib/scoring";

/*
  Flow segments (each = one progress step):
  0-2:  Pre-filter (3 questions, one per step)
  3-6:  Approved framing (4 questions, one per step)
  7-11: Scenario dimensions (5 dimensions, one per step, 2 questions each)
  = 12 total steps
*/

const PROGRESS_LABELS = [
  { name: "Pre-filter", count: 3 },
  { name: "Approved", count: 4 },
  { name: "Actual", count: 5 },
];

const TOTAL_STEPS = 12;

type Phase =
  | "prefilter"
  | "prefilter-result"
  | "approved"
  | "scenario"
  | "results";

function DiagnosticContent() {
  const [preFilterAnswers, setPreFilterAnswers] = useState<PreFilterAnswers>({});
  const [approvedAnswers, setApprovedAnswers] = useState<ClassAnswers>({});
  const [scenarioAnswers, setScenarioAnswers] = useState<ClassAnswers>({});

  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<Phase>("prefilter");

  // Derived indices
  const preFilterIndex = step; // 0-2
  const approvedIndex = step - 3; // 0-3
  const scenarioDimIndex = step - 7; // 0-4

  const currentPreFilterQ =
    phase === "prefilter" ? PREFILTER_QUESTIONS[preFilterIndex] : null;
  const currentApprovedQ =
    phase === "approved" ? APPROVED_QUESTIONS[approvedIndex] : null;
  const currentDimension =
    phase === "scenario" ? DIMENSIONS[scenarioDimIndex] : null;

  // Can advance?
  const canAdvance = useMemo(() => {
    if (phase === "prefilter" && currentPreFilterQ) {
      return preFilterAnswers[currentPreFilterQ.id] !== undefined;
    }
    if (phase === "approved" && currentApprovedQ) {
      return approvedAnswers[currentApprovedQ.id] !== undefined;
    }
    if (phase === "scenario" && currentDimension) {
      return currentDimension.questions.every(
        (q) => scenarioAnswers[q.id] !== undefined
      );
    }
    return false;
  }, [
    phase,
    currentPreFilterQ,
    currentApprovedQ,
    currentDimension,
    preFilterAnswers,
    approvedAnswers,
    scenarioAnswers,
  ]);

  const goNext = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // End of pre-filter
    if (phase === "prefilter" && step === 2) {
      const result = evaluatePreFilter(preFilterAnswers);
      if (result === "integration") {
        setPhase("prefilter-result");
      } else {
        setStep(3);
        setPhase("approved");
      }
      return;
    }

    // End of approved
    if (phase === "approved" && step === 6) {
      setStep(7);
      setPhase("scenario");
      return;
    }

    // End of scenarios
    if (phase === "scenario" && step === 11) {
      setPhase("results");
      return;
    }

    // Default: advance step
    setStep((s) => s + 1);
  }, [phase, step, preFilterAnswers]);

  const goBack = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (phase === "approved" && step === 3) {
      setStep(2);
      setPhase("prefilter");
      return;
    }
    if (phase === "scenario" && step === 7) {
      setStep(6);
      setPhase("approved");
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  }, [phase, step]);

  const continueFromIntegration = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep(3);
    setPhase("approved");
  }, []);

  const restartPreFilter = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPreFilterAnswers({});
    setStep(0);
    setPhase("prefilter");
  }, []);

  const restartAll = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPreFilterAnswers({});
    setApprovedAnswers({});
    setScenarioAnswers({});
    setStep(0);
    setPhase("prefilter");
  }, []);

  // Gap result
  const gapResult = useMemo(() => {
    if (phase !== "results") return null;
    return computeGap(approvedAnswers, scenarioAnswers);
  }, [phase, approvedAnswers, scenarioAnswers]);

  // Section heading
  const sectionInfo = useMemo(() => {
    if (phase === "prefilter") {
      return {
        heading: "Is this integration or innovation?",
        subtext:
          "Before classifying the type of innovation, we need to check whether this is innovation at all.",
      };
    }
    if (phase === "approved") {
      return {
        heading: APPROVED_SECTION.heading,
        subtext: APPROVED_SECTION.subtext,
      };
    }
    if (phase === "scenario" && currentDimension) {
      return {
        heading: currentDimension.name,
        subtext: currentDimension.subtitle,
      };
    }
    return { heading: "", subtext: "" };
  }, [phase, currentDimension]);

  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-6 py-4 md:px-12">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold">
              Aieutics
            </span>
          </Link>
          <span className="font-[family-name:var(--font-heading)] text-xs text-[var(--color-grey)]">
            AI Classification
          </span>
        </div>
      </header>

      <div className="flex-1 px-6 py-8 md:px-12">
        <div className="max-w-2xl mx-auto">
          {/* Pre-filter result screen */}
          {phase === "prefilter-result" && (
            <PreFilterResult
              onContinue={continueFromIntegration}
              onRestart={restartPreFilter}
            />
          )}

          {/* Final results screen */}
          {phase === "results" && gapResult && (
            <GapResults result={gapResult} onRestart={restartAll} />
          )}

          {/* Active question phases */}
          {(phase === "prefilter" ||
            phase === "approved" ||
            phase === "scenario") && (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <ProgressBar
                  total={TOTAL_STEPS}
                  current={step}
                  labels={PROGRESS_LABELS}
                />
              </div>

              {/* Phase context banner (approved + scenario only) */}
              {phase !== "prefilter" && (
                <div className="mb-6 rounded-lg bg-[var(--color-tag-bg)] px-4 py-3">
                  <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-widest text-[var(--color-orange)] mb-1">
                    {phase === "approved"
                      ? "Part 1: What was approved"
                      : "Part 2: What is actually required"}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[var(--color-grey)] leading-relaxed">
                    {phase === "approved"
                      ? APPROVED_SECTION.subtext
                      : SCENARIO_SECTION.subtext}
                  </p>
                </div>
              )}

              {/* Section heading */}
              <div className="mb-6">
                <h2 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold mb-1">
                  {sectionInfo.heading}
                </h2>
                {phase === "prefilter" && (
                  <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] leading-relaxed">
                    {sectionInfo.subtext}
                  </p>
                )}
                {phase === "scenario" && (
                  <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] italic leading-relaxed">
                    {sectionInfo.subtext}
                  </p>
                )}
              </div>

              {/* PRE-FILTER: one question at a time, 2 options */}
              {phase === "prefilter" && currentPreFilterQ && (
                <div>
                  <p className="font-[family-name:var(--font-body)] text-base mb-4">
                    {currentPreFilterQ.text}
                  </p>
                  <div className="space-y-3">
                    {currentPreFilterQ.options.map((opt) => (
                      <OptionCard
                        key={opt.value}
                        label={opt.label}
                        description={opt.description}
                        selected={
                          preFilterAnswers[currentPreFilterQ.id] === opt.value
                        }
                        onClick={() =>
                          setPreFilterAnswers((prev) => ({
                            ...prev,
                            [currentPreFilterQ.id]: opt.value,
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* APPROVED: one question at a time, 3 options */}
              {phase === "approved" && currentApprovedQ && (
                <div>
                  <p className="font-[family-name:var(--font-body)] text-base mb-4">
                    {currentApprovedQ.text}
                  </p>
                  <div className="space-y-3">
                    {currentApprovedQ.options.map((opt) => (
                      <OptionCard
                        key={opt.value}
                        label={opt.label}
                        description={opt.description}
                        selected={
                          approvedAnswers[currentApprovedQ.id] === opt.value
                        }
                        onClick={() =>
                          setApprovedAnswers((prev) => ({
                            ...prev,
                            [currentApprovedQ.id]: opt.value as ClassLevel,
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* SCENARIO: 2 questions per dimension */}
              {phase === "scenario" && currentDimension && (
                <div className="space-y-6">
                  {currentDimension.questions.map((q) => (
                    <div
                      key={q.id}
                      className="rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] p-5"
                    >
                      <p className="font-[family-name:var(--font-body)] text-base mb-4">
                        <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[var(--color-orange)] mr-2">
                          {String(q.id - 200).padStart(2, "0")}.
                        </span>
                        {q.text}
                      </p>
                      <div className="space-y-3">
                        {q.options.map((opt) => (
                          <OptionCard
                            key={opt.value}
                            label={opt.label}
                            description={opt.description}
                            selected={scenarioAnswers[q.id] === opt.value}
                            onClick={() =>
                              setScenarioAnswers((prev) => ({
                                ...prev,
                                [q.id]: opt.value as ClassLevel,
                              }))
                            }
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-[var(--color-grey-light)]">
                <button
                  onClick={goBack}
                  disabled={step === 0}
                  className={`
                    font-[family-name:var(--font-heading)] text-sm font-bold px-8 py-3 rounded-xl
                    transition-all duration-200 cursor-pointer
                    ${
                      step === 0
                        ? "text-[var(--color-grey-light)] cursor-not-allowed"
                        : "border border-[var(--color-grey-light)] text-[var(--color-grey)] hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]"
                    }
                  `}
                >
                  Back
                </button>

                <button
                  onClick={goNext}
                  disabled={!canAdvance}
                  className={`
                    font-[family-name:var(--font-heading)] text-sm font-bold px-10 py-3 rounded-xl
                    transition-all duration-300 cursor-pointer
                    ${
                      canAdvance
                        ? "bg-[var(--color-orange)] text-white shadow-[0_0_15px_rgba(255,95,31,0.2)] hover:shadow-[0_0_30px_rgba(255,95,31,0.3)] hover:scale-[1.02]"
                        : "bg-[var(--color-grey-light)] text-[var(--color-grey)] cursor-not-allowed"
                    }
                  `}
                >
                  {phase === "scenario" && step === 11
                    ? "See results"
                    : "Next"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <footer className="px-6 py-4 border-t border-[var(--color-grey-light)]">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-2">
          <p className="font-[family-name:var(--font-body)] text-xs text-[var(--color-grey)] text-center">
            Built by{" "}
            <a
              href="https://www.aieutics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-orange)] transition-colors"
            >
              Aieutics
            </a>
            . Based on the AI Classification Problem framework.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default function DiagnosticPage() {
  return (
    <ErrorBoundary>
      <DiagnosticContent />
    </ErrorBoundary>
  );
}
