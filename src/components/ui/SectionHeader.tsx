interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-16 ${alignment}`}>
      {label && (
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-md ${
            light
              ? "border-white/10 bg-white/5 text-white/70"
              : "border-apple-border-soft bg-white/60 text-apple-text-soft"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              light
                ? "bg-indigo-400 shadow-[0_0_8px_rgba(79,70,229,0.8)]"
                : "bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.5)]"
            }`}
          />
          {label}
        </span>
      )}
      <h2
        className={`mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] ${
          light ? "text-white" : "text-apple-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-white/60" : "text-apple-text-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
