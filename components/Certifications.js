import { portfolioData } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 md:py-28 bg-slate-50/50 dark:bg-background-dark-card/20 border-t border-slate-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="06 / CREDENTIALS & SPECIALIZATION"
          title="Certifications."
          description="Verified professional technical training and industry-recognized coursework."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-border-dark-subtle transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded bg-slate-100 dark:bg-background-dark flex items-center justify-center text-accent">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-background-dark border border-slate-200 dark:border-border-dark text-slate-600 dark:text-text-muted-dark">
                    Verified
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.name}
                </h3>

                <p className="text-xs font-mono font-medium text-accent mt-1">
                  Issued by: {cert.issuer}
                </p>

                <p className="text-xs text-slate-600 dark:text-text-secondary-dark leading-relaxed mt-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-border-dark">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors group"
                >
                  <span>View Verified Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
