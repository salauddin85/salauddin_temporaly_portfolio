export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-text-primary-dark">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-text-secondary-dark leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
