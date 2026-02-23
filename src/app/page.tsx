"use client";

import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--color-foreground)]">
      {/* Header */}
      <header className="px-6 py-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Image
            src={`${basePath}/aieutics_transparentbg_logo.png`}
            alt="Aieutics"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
          <span className="font-[family-name:var(--font-body)] text-sm text-white/70 italic hidden sm:inline">
            See further. Think deeper. Break through.
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6 py-16 md:py-24 relative overflow-hidden">
        {/* Video background */}
        <HeroVideo />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white animate-text-focus-in">
            Your AI initiative has
            <br />
            <span className="text-[var(--color-orange)]">two identities</span>
          </h1>

          <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-white/80 leading-relaxed mb-4">
            What the organisation approved, and what the initiative actually requires.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            The gap between these two is the misclassification — and it cascades
            through every downstream decision. This diagnostic surfaces that gap.
          </p>

          <Link
            href="/diagnostic"
            className="inline-block bg-[var(--color-orange)] text-white font-[family-name:var(--font-heading)] font-bold text-lg px-12 py-4 rounded-xl shadow-[0_0_15px_rgba(255,95,31,0.2)] hover:shadow-[0_0_30px_rgba(255,95,31,0.3)] hover:scale-[1.02] transition-all duration-300"
          >
            Start the diagnostic
          </Link>
          <p className="font-[family-name:var(--font-body)] text-sm text-white/50 mt-4">
            Takes 5-7 minutes. Three sections: pre-filter, what was approved,
            what is actually required.
          </p>

          {/* Classification cards */}
          <div className="mt-16">
            <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-widest text-[var(--color-orange)] mb-6">
              Three classifications
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                {
                  label: "Optimisation",
                  desc: "Task acceleration inside the current operating model. Fully reversible.",
                },
                {
                  label: "Adjacency",
                  desc: "Workflow redesign and role shifts. Reversibility is painful but possible.",
                },
                {
                  label: "Transformation",
                  desc: "Structural change. Authority relationships shift. Reversibility is unthinkable.",
                },
              ].map((dim, i) => (
                <div
                  key={i}
                  className="border border-white/20 rounded-xl p-3 hover:border-[var(--color-orange)] hover:shadow-[0_0_20px_rgba(255,95,31,0.1)] transition-all duration-300 bg-black/30 backdrop-blur-sm"
                >
                  <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-wider text-[var(--color-orange)] mb-1">
                    {dim.label}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-white/60">
                    {dim.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Article link */}
          <div className="mt-8">
            <a
              href="https://aieutics.com/article-archive/the-ai-classification-problem"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-body)] text-sm text-white/50 hover:text-white/70 transition-colors"
            >
              Read the article this is based on &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
          <Image
            src={`${basePath}/aieutics_transparentbg_logo.png`}
            alt="Aieutics"
            width={24}
            height={24}
            className="h-6 w-auto opacity-40"
          />
          <p className="font-[family-name:var(--font-body)] text-xs text-white/50 text-center">
            Built by{" "}
            <a href="https://www.aieutics.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Aieutics</a>.
            Based on the{" "}
            <a href="https://aieutics.com/article-archive/the-ai-classification-problem" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">AI Classification Problem</a>{" "}
            framework.
          </p>
        </div>
      </footer>
    </main>
  );
}
