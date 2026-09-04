'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import ThemeToggle from './ThemeToggle';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section from scroll position
      const sections = portfolioData.navigation.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-white/80 dark:bg-background-dark/85 backdrop-blur-md border-b border-slate-200/80 dark:border-border-dark/80 shadow-sm shadow-black/5'
          : 'py-4 md:py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Monogram & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            <div className="w-8 h-8 rounded border border-slate-300 dark:border-border-dark bg-slate-100 dark:bg-background-dark-card flex items-center justify-center font-mono font-bold text-xs tracking-tighter text-slate-900 dark:text-white group-hover:border-accent group-hover:text-accent transition-colors">
              MS
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500 dark:text-text-muted-dark">
                {portfolioData.personal.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 rounded-full border border-slate-200 dark:border-border-dark bg-white/60 dark:bg-background-dark-card/60 backdrop-blur-md px-3 py-1 text-xs font-medium">
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-150 ${
                    isActive
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-text-secondary-dark hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Theme Switcher */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MD. Salauddin GitHub Profile"
              className="p-2 rounded-md text-slate-600 dark:text-text-secondary-dark hover:text-slate-950 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-border-dark transition-all duration-150"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MD. Salauddin LinkedIn Profile"
              className="p-2 rounded-md text-slate-600 dark:text-text-secondary-dark hover:text-slate-950 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-border-dark transition-all duration-150"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Md.Salauddin-resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-slate-200 dark:border-border-dark text-slate-700 dark:text-text-primary-dark hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent bg-white/50 dark:bg-background-dark-card/50 transition-all duration-150"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-md text-slate-700 dark:text-text-secondary-dark hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-border-dark focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[57px] bottom-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-b border-slate-200 dark:border-border-dark overflow-y-auto px-6 py-8 flex flex-col justify-between transition-all duration-200">
          <div className="flex flex-col space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-text-muted-dark mb-2">
              Navigation
            </p>
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-md text-base transition-colors ${
                    isActive
                      ? 'bg-slate-100 dark:bg-background-dark-card text-accent font-semibold border-l-2 border-accent'
                      : 'text-slate-800 dark:text-text-primary-dark hover:bg-slate-50 dark:hover:bg-background-dark-card/50'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </a>
              );
            })}
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-border-dark flex flex-col gap-4">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Md.Salauddin-resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-950 transition-opacity hover:opacity-90"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>

            <div className="flex items-center justify-around pt-2 text-xs text-slate-500 dark:text-text-muted-dark">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="hover:text-accent transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
