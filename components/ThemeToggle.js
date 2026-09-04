'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    } else {
      // Default to dark per design specification
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  if (!mounted) {
    return (
      <div 
        className="w-9 h-9 rounded-md border border-border-dark dark:border-border-dark flex items-center justify-center text-text-secondary-dark"
        aria-hidden="true"
      >
        <span className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative p-2 rounded-md border border-slate-200 dark:border-border-dark bg-white/70 dark:bg-background-dark-card/80 text-slate-700 dark:text-text-secondary-dark hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-border-dark-subtle transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-sky-600 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}
