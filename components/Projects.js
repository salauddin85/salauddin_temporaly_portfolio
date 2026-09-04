import { portfolioData } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { ExternalLink, ArrowUpRight, CheckCircle, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const { featured, ecommerce, selectedWorks } = portfolioData.projects;

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title="Featured engineering projects."
          description="Production systems built with focus on fault tolerance, automated workflows, and measurable business impact."
        />

        {/* 1. FEATURED PROJECT: TALENTek (Large Horizontal Showcase) */}
        <div className="mb-16 md:mb-20 rounded-2xl border-2 border-slate-300/80 dark:border-accent/30 bg-white dark:bg-background-dark-card p-6 sm:p-8 lg:p-12 shadow-xl shadow-slate-900/5 dark:shadow-black/50 relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Top Bar: Number, Badge, Title, Links */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-100 dark:border-border-dark">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    {featured.number} · {featured.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {featured.name}
                </h3>
                <p className="text-sm sm:text-base font-mono text-slate-500 dark:text-text-muted-dark mt-1">
                  {featured.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xs group"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Middle Grid: Architecture Details & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-8">
              
              {/* Left Column: Context, Challenge, Impact */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-text-muted-dark mb-2">
                    System Architecture
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-text-secondary-dark leading-relaxed">
                    {featured.description}
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-slate-200 dark:border-border-dark bg-slate-50/50 dark:bg-background-dark/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-800 dark:text-white">
                    <Zap className="w-3.5 h-3.5 text-accent" />
                    <span>Engineering Challenge</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-text-secondary-dark leading-relaxed">
                    {featured.engineeringChallenge}
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-slate-200 dark:border-border-dark bg-emerald-500/5 dark:bg-emerald-500/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Key Production Impact</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-emerald-300/90 leading-relaxed font-medium">
                    {featured.keyImpact}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Achievements Checklist */}
              <div className="lg:col-span-7">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-text-muted-dark mb-4">
                  Delivered Innovations
                </h4>
                <div className="space-y-3">
                  {featured.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg border border-slate-100 dark:border-border-dark/60 bg-slate-50/60 dark:bg-background-dark/30 flex items-start gap-3 hover:border-slate-200 dark:hover:border-border-dark transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-text-secondary-dark leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Full Tech Stack Tags */}
            <div className="pt-6 border-t border-slate-100 dark:border-border-dark flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase text-slate-400 dark:text-text-muted-dark mr-2">
                Tech Stack:
              </span>
              {featured.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-background-dark text-slate-700 dark:text-text-secondary-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. PROJECT: Multi-Vendor E-commerce Platform */}
        <div className="mb-16 md:mb-20 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card p-6 sm:p-8 lg:p-10 shadow-sm relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-border-dark">
            <div>
              <span className="font-mono text-xs font-bold text-slate-400 dark:text-text-muted-dark">
                PROJECT {ecommerce.number}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                {ecommerce.name}
              </h3>
              <p className="text-sm font-mono text-slate-500 dark:text-text-muted-dark">
                {ecommerce.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {ecommerce.githubUrl && (
                <a
                  href={ecommerce.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold border border-slate-200 dark:border-border-dark text-slate-700 dark:text-text-primary-dark hover:border-slate-300 dark:hover:border-border-dark-subtle hover:bg-slate-50 dark:hover:bg-background-dark transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
              {ecommerce.liveUrl && (
                <a
                  href={ecommerce.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all group"
                >
                  <span>Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm sm:text-base text-slate-600 dark:text-text-secondary-dark leading-relaxed">
                {ecommerce.description}
              </p>
              
              <div className="p-3.5 rounded-lg border border-slate-100 dark:border-border-dark bg-slate-50 dark:bg-background-dark/30 text-xs">
                <span className="font-mono font-semibold text-slate-800 dark:text-white block mb-1">
                  Architecture & Settlement:
                </span>
                <p className="text-slate-600 dark:text-text-secondary-dark">
                  {ecommerce.keyImpact}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-text-muted-dark mb-3">
                Core Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ecommerce.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-md border border-slate-100 dark:border-border-dark/60 bg-slate-50/50 dark:bg-background-dark/20 text-xs text-slate-700 dark:text-text-secondary-dark"
                  >
                    • {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-slate-100 dark:border-border-dark flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-slate-400 dark:text-text-muted-dark mr-2">
              Stack:
            </span>
            {ecommerce.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-xs font-mono border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-background-dark text-slate-700 dark:text-text-secondary-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3. ADDITIONAL SELECTED ENGINEERING WORK (Case-Study Cards with verified links only) */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Selected Engineering Case Studies
            </h3>
            <span className="text-xs font-mono text-slate-400 dark:text-text-muted-dark">
              Enterprise & Internal Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedWorks.map((work) => (
              <div
                key={work.number}
                className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-border-dark-subtle transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-slate-400 dark:text-text-muted-dark">
                      CASE {work.number}
                    </span>
                    {work.liveUrl ? (
                      <a
                        href={work.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:underline font-semibold"
                      >
                        <span>Live</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-slate-400 dark:text-text-muted-dark">Internal System</span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {work.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 dark:text-text-muted-dark mt-0.5 mb-3">
                    {work.tagline}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-text-secondary-dark leading-relaxed mb-4">
                    {work.description}
                  </p>
                </div>

                <div>
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-background-dark border border-slate-100 dark:border-border-dark text-[11px] text-slate-600 dark:text-text-secondary-dark mb-4">
                    <span className="font-semibold text-slate-800 dark:text-white block mb-0.5">Impact:</span>
                    {work.impact}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {work.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono border border-slate-200 dark:border-border-dark text-slate-600 dark:text-text-muted-dark"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
