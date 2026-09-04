import { portfolioData } from '../data/portfolio';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-text-muted-dark">
          {/* Left: Copyright */}
          <div>
            <p>© 2026 {personal.name}. All rights reserved.</p>
          </div>

          {/* Center: Engineering signature */}
          <div>
            <p className="text-slate-400 dark:text-text-muted-dark">
              Designed &amp; engineered with Next.js.
            </p>
          </div>

          {/* Right: Channels */}
          <div className="flex items-center gap-4">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="hover:text-accent transition-colors flex items-center gap-1"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
