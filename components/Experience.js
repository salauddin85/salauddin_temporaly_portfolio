import { portfolioData } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50/50 dark:bg-background-dark-card/20 border-t border-slate-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 / PROFESSIONAL TIMELINE"
          title="Production experience."
          description="A track record of engineering resilient REST APIs, automated DevOps pipelines, and enterprise application workflows."
        />

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden"
            >
              {/* Header: Role, Company, Duration */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-border-dark">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Active
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-slate-600 dark:text-text-secondary-dark font-medium">
                    <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-accent" />
                      {job.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-500 dark:text-text-muted-dark">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-text-muted-dark">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 max-w-md lg:justify-end">
                  {job.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-background-dark text-slate-700 dark:text-text-secondary-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body: Concise Overview & Engineering Achievements */}
              <div className="mt-6 space-y-4">
                <p className="text-sm sm:text-base text-slate-600 dark:text-text-secondary-dark leading-relaxed">
                  {job.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                  {job.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-border-dark/60 bg-slate-50/40 dark:bg-background-dark/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-text-secondary-dark leading-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies footer */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-border-dark flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase text-slate-400 dark:text-text-muted-dark mr-2">
                  Stack in production:
                </span>
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-100 dark:bg-background-dark text-slate-800 dark:text-text-secondary-dark border border-slate-200/80 dark:border-border-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
