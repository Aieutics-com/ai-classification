import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-6 py-5 md:px-12 border-b border-[var(--color-grey-light)]">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold">
              Aieutics
            </span>
            <span className="font-[family-name:var(--font-body)] text-xs text-[var(--color-grey)]">
              AI Classification
            </span>
          </div>
          <a
            href="https://www.aieutics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-body)] text-xs text-[var(--color-grey)] hover:text-[var(--color-orange)] transition-colors"
          >
            aieutics.com
          </a>
        </div>
      </header>

      <section className="flex-1 px-6 py-14 md:px-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-widest text-[var(--color-orange)] mb-3">
            AI initiative misclassification diagnostic
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold leading-tight mb-5 animate-text-focus-in">
            Your AI initiative has{" "}
            <span className="text-[var(--color-orange)]">two identities</span>
          </h1>
          <p className="font-[family-name:var(--font-body)] text-base md:text-lg text-[var(--color-grey)] leading-relaxed mb-4">
            What the organisation approved, and what the initiative actually
            requires. The gap between these two is the misclassification — and
            it cascades through every downstream decision.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base md:text-lg text-[var(--color-grey)] leading-relaxed mb-8">
            This diagnostic surfaces that gap.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                title: "Optimisation",
                desc: "Task acceleration inside the current operating model. Decision rights stay the same. Fully reversible.",
              },
              {
                title: "Adjacency",
                desc: "Workflow redesign and role shifts. New stakeholders appear. Reversibility is painful but possible.",
              },
              {
                title: "Transformation",
                desc: "Structural change. Incentives and authority relationships shift. Reversibility is unthinkable.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] p-5"
              >
                <p className="font-[family-name:var(--font-heading)] text-sm font-bold mb-2">
                  {card.title}
                </p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Link
              href="/diagnostic"
              className="inline-block bg-[var(--color-orange)] text-white font-[family-name:var(--font-heading)] font-bold text-base px-8 py-3 rounded-xl shadow-[0_0_15px_rgba(255,95,31,0.2)] hover:shadow-[0_0_30px_rgba(255,95,31,0.3)] hover:scale-[1.02] transition-all duration-300"
            >
              Start the diagnostic
            </Link>
            <a
              href="https://aieutics.com/article-archive/the-ai-classification-problem"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] hover:text-[var(--color-orange)] transition-colors"
            >
              Read the article this is based on
            </a>
          </div>

          <p className="font-[family-name:var(--font-body)] text-xs text-[var(--color-grey)] mt-4">
            Takes 5-7 minutes. Three sections: pre-filter, what was approved,
            what is actually required.
          </p>
        </div>
      </section>

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
