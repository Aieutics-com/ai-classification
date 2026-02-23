"use client";

interface OptionCardProps {
  label: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export default function OptionCard({
  label,
  description,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full text-left p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer
        ${
          selected
            ? "border-[var(--color-orange)] bg-[var(--color-orange-vsoft)]"
            : "border-[var(--color-grey-light)] bg-[var(--color-white)] hover:border-[var(--color-grey-lighter)]"
        }
      `}
    >
      <p
        className={`font-[family-name:var(--font-heading)] text-sm font-bold mb-1 ${
          selected
            ? "text-[var(--color-orange)]"
            : "text-[var(--color-foreground)]"
        }`}
      >
        {label}
      </p>
      <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] leading-relaxed">
        {description}
      </p>
    </button>
  );
}
