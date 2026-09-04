import { portfolioData } from '../data/portfolio';

export default function Highlights() {
  const { highlights } = portfolioData;

  return (
    <section className="py-12 md:py-16 border-y border-slate-200 dark:border-border-dark bg-slate-50/50 dark:bg-background-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
                  {item.metric}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-800 dark:text-text-primary-dark mt-1">
                {item.label}
              </h3>
              <p className="text-xs text-slate-500 dark:text-text-secondary-dark mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
