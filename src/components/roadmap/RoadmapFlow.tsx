import React, { useState } from 'react';
import { CheckCircle2, Clock, CircleDot, ChevronDown, ChevronUp, BookOpen, Layers } from 'lucide-react';
import { roadmapData, RoadmapNode, LearningStatus } from '../../data/roadmap';
import { Badge } from '../ui/Badge';

export const RoadmapFlow: React.FC = () => {
  const [expandedStage, setExpandedStage] = useState<string | null>(roadmapData[0].id);

  const getStatusIcon = (status: LearningStatus) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Learning':
        return <Clock className="h-5 w-5 text-teal-600 dark:text-teal-400" />;
      case 'Next':
        return <CircleDot className="h-5 w-5 text-amber-500" />;
      case 'Planned':
      default:
        return <CircleDot className="h-5 w-5 text-slate-400" />;
    }
  };

  const getStatusBadge = (status: LearningStatus) => {
    switch (status) {
      case 'Completed':
        return <Badge variant="emerald">متقنة ومكتملة</Badge>;
      case 'Learning':
        return <Badge variant="cyan">قيد التركيز والتعلم</Badge>;
      case 'Next':
        return <Badge variant="amber">المحطة القادمة</Badge>;
      case 'Planned':
      default:
        return <Badge variant="default">مخططة مستقبلاً</Badge>;
    }
  };

  return (
    <div className="space-y-3">
      {roadmapData.map((stage) => {
        const isExpanded = expandedStage === stage.id;

        return (
          <div
            key={stage.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isExpanded
                ? 'bg-white dark:bg-[#0D111A] border-slate-300 dark:border-white/[0.2] shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                : 'bg-white dark:bg-[#0A0D14] border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/[0.12] shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
            }`}
          >
            {/* Stage Header */}
            <div
              onClick={() => setExpandedStage(isExpanded ? null : stage.id)}
              className="p-5 flex items-center justify-between cursor-pointer select-none"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0">{getStatusIcon(stage.status)}</div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-xs font-mono text-teal-600 dark:text-teal-400 font-bold">
                    المرحلة {stage.order.toString().padStart(2, '0')}
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white font-arabic">
                    {stage.title}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {getStatusBadge(stage.status)}
                <div className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/[0.06] space-y-5 animate-in fade-in duration-200">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {stage.summary}
                </p>

                {/* Topics Covered */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase text-slate-500 tracking-wider mb-2.5 flex items-center gap-1.5 font-semibold">
                    <Layers className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                    <span>المفاهيم والكفاءات الأساسية:</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.concepts.map((concept: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Resources */}
                {stage.learningResources && stage.learningResources.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-mono uppercase text-slate-500 tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                      <BookOpen className="h-3.5 w-3.5 text-slate-500" />
                      <span>المراجع والمصادر المقترحة:</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {stage.learningResources.map((res: { name: string; type: string; url?: string }, i: number) => (
                        <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400 inline-block" />
                          <span>{res.name} ({res.type})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

