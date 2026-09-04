import { portfolioData } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Container, 
  Cpu, 
  Network, 
  CheckSquare 
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    Languages: Code2,
    Frontend: Layout,
    Backend: Server,
    Databases: Database,
    'DevOps & Infrastructure': Container,
    'AI & LLM Technologies': Cpu,
    'Architecture & Engineering': Network,
    'Testing & Tooling': CheckSquare,
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50/50 dark:bg-background-dark-card/20 border-t border-slate-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 / TECHNICAL CAPABILITIES"
          title="Skills & engineering stack."
          description="A categorized breakdown of tools, frameworks, and architecture patterns used in building production software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((cluster) => {
            const Icon = categoryIcons[cluster.category] || Code2;
            return (
              <div
                key={cluster.category}
                className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-border-dark-subtle transition-all duration-150"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded bg-slate-100 dark:bg-background-dark flex items-center justify-center text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {cluster.category}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-text-muted-dark leading-relaxed mb-4">
                    {cluster.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-border-dark">
                  {cluster.skills.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-50 dark:bg-background-dark text-slate-800 dark:text-text-primary-dark border border-slate-200/80 dark:border-border-dark hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
