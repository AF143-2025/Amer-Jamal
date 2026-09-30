import React, { useState } from 'react';
import { 
  Shield, 
  Code, 
  Network, 
  Terminal, 
  Wrench, 
  BookOpen, 
  Cpu,
  Layers
} from 'lucide-react';
import { skillsData } from '../../data/skills';
import { Badge } from '../ui/Badge';

export const SkillMap: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillsData[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="h-4 w-4" />;
      case 'Code': return <Code className="h-4 w-4" />;
      case 'Network': return <Network className="h-4 w-4" />;
      case 'Terminal': return <Terminal className="h-4 w-4" />;
      case 'Tool': return <Wrench className="h-4 w-4" />;
      case 'BookOpen': return <BookOpen className="h-4 w-4" />;
      default: return <Cpu className="h-4 w-4" />;
    }
  };

  const currentCategory = skillsData.find(c => c.id === activeCategory) || skillsData[0];

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200 dark:border-white/[0.08]">
        {skillsData.map(cat => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xs'
                  : 'bg-white dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06]'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Category Overview */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06]">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-mono mb-1 font-semibold">
          <Layers className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
          <span>معمارية التخصص والمهارات</span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
          {currentCategory.description}
        </p>
      </div>

      {/* Subcategories & Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCategory.subcategories.map((sub, idx) => (
          <div 
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-[#0D111A] border border-slate-200/90 dark:border-white/[0.08] space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.06]">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-wide font-arabic">
                {sub.name}
              </h4>
              <Badge variant="default" size="sm">
                {sub.items.length} مهارات
              </Badge>
            </div>

            <div className="space-y-2.5">
              {sub.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx}
                  className="p-3 rounded-xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.04] hover:border-slate-300 dark:hover:border-white/[0.1] transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {item.name}
                    </span>
                    {item.level && (
                      <span className="text-[10px] font-mono text-slate-600 dark:text-slate-300 bg-white dark:bg-white/[0.08] px-2 py-0.5 rounded border border-slate-200 dark:border-white/[0.08] font-medium">
                        {item.level}
                      </span>
                    )}
                  </div>

                  {item.tools && item.tools.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {item.tools.map((tool, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-white/[0.04] px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/[0.06]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

