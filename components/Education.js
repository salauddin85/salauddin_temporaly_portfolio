import { portfolioData } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 / ACADEMIC FOUNDATION"
          title="Education."
          description="Formal computer science and engineering coursework covering core software, data structures, and computer architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-text-muted-dark mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-background-dark border border-slate-200 dark:border-border-dark font-medium text-accent">
                    {item.status}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded bg-slate-100 dark:bg-background-dark flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-text-secondary-dark mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-text-secondary-dark leading-relaxed mt-4">
                  {item.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-border-dark flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400 dark:text-text-muted-dark">
                  Academic Performance
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-slate-900 dark:text-white">
                  <Award className="w-4 h-4 text-emerald-500" />
                  {item.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
