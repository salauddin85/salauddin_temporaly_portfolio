'use client';

import Image from 'next/image';
import { portfolioData } from '../data/portfolio';
import { ArrowRight, Download, Cpu, Database, Server } from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Subtle Radial Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetric Editorial Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personal.availability}</span>
            </div>

            {/* Small Eyebrow */}
            <p className="font-mono text-xs sm:text-sm tracking-wider uppercase text-slate-500 dark:text-text-muted-dark mb-4">
              {personal.eyebrow}
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400">scalable software</span> from idea to production.
            </h1>

            {/* Pitch / Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-text-secondary-dark max-w-2xl leading-relaxed mb-8">
              {personal.bio}
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium text-sm bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm w-full sm:w-auto group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium text-sm border border-slate-300 dark:border-border-dark text-slate-800 dark:text-text-primary-dark hover:border-slate-400 dark:hover:border-border-dark-subtle hover:bg-slate-100/50 dark:hover:bg-background-dark-card transition-all w-full sm:w-auto"
              >
                Contact Me
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Md.Salauddin-resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium text-sm text-slate-600 dark:text-text-secondary-dark hover:text-accent transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Technical Sub-Tagline */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-border-dark w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500 dark:text-text-muted-dark">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span>DRF & FastAPI Backends</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-accent" />
                <span>PostgreSQL + pgvector</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-accent" />
                <span>Docker & VPS CI/CD</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile Photo (Circle LinkedIn/FB style) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative">
              {/* Subtle Outer Ambient Glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr from-accent/20 via-sky-500/10 to-accent/5 blur-2xl opacity-75" />

              {/* Outer Decorative Ring */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] p-2.5 sm:p-3 rounded-full border border-slate-300 dark:border-border-dark bg-white/40 dark:bg-background-dark-card/40 backdrop-blur-sm shadow-2xl shadow-slate-900/10 dark:shadow-black/70">
                {/* Inner Border & Circle Image Frame */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/40 dark:border-accent/30 relative bg-slate-900 shadow-inner group">
                  <Image
                    src="/images/salauddin_img.png"
                    alt="MD. Salauddin — Software Engineer"
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Engineering Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-border-dark bg-white/95 dark:bg-background-dark-card/95 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-mono text-slate-800 dark:text-text-primary-dark whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-subtle" />
                <span className="font-semibold">MD. Salauddin</span>
                <span className="text-slate-400 dark:text-text-muted-dark">•</span>
                <span className="text-accent font-medium">Software Engineer</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
