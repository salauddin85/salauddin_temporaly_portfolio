import { portfolioData } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { Layers, Terminal, Server, Sparkles, Zap, Shield } from 'lucide-react';

export default function About() {
  const { about } = portfolioData;

  const focusIcons = [
    Server,
    Layers,
    Sparkles,
    Terminal,
    Zap,
    Shield,
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 / BACKGROUND & CAPABILITIES"
          title={about.headline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-slate-600 dark:text-text-secondary-dark leading-relaxed">
            <p>
              I am a Software Engineer based in Bangladesh with over 2 years of professional engineering experience delivering resilient, maintainable web systems across the complete software development life cycle.
            </p>

            <p>
              My background centers on constructing high-throughput backend services using Django REST Framework and FastAPI, coupled with modern, accessible client applications in Next.js and React. In production, I maintain a strong discipline around containerized workflows with Docker, automated CI/CD releases, and Linux VPS performance tuning.
            </p>

            <p>
              Recently, I have engineered applied AI systems — integrating high-dimensional vector search with PostgreSQL <code className="font-mono text-sm px-1.5 py-0.5 rounded bg-slate-100 dark:bg-background-dark-card border border-slate-200 dark:border-border-dark text-accent">pgvector</code> and chunked Retrieval-Augmented Generation (RAG) pipelines to solve real-world enterprise recruitment and onboarding bottlenecks.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-200 dark:border-border-dark font-mono text-xs">
              <div>
                <p className="text-slate-400 dark:text-text-muted-dark uppercase tracking-wider">Experience</p>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">2+ Years Professional</p>
              </div>
              <div>
                <p className="text-slate-400 dark:text-text-muted-dark uppercase tracking-wider">Education</p>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">B.Sc. in CSE (Ongoing)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Focus List (01 to 06) */}
          <div className="lg:col-span-6">
            <div className="divide-y divide-slate-200 dark:divide-border-dark border-y border-slate-200 dark:border-border-dark">
              {about.focusAreas.map((item, idx) => {
                const Icon = focusIcons[idx] || Server;
                return (
                  <div
                    key={item.number}
                    className="py-4.5 sm:py-5 group flex items-start gap-4 transition-colors hover:bg-slate-50/60 dark:hover:bg-background-dark-card/40 px-2 sm:px-3 rounded-md"
                  >
                    <span className="font-mono text-xs text-accent font-semibold pt-1">
                      {item.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-slate-400 dark:text-text-muted-dark group-hover:text-accent transition-colors" />
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-text-secondary-dark leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
