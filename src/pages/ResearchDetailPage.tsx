import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  ShieldAlert, 
  ShieldCheck, 
  ExternalLink, 
  Tag, 
  BookOpen, 
  Wrench, 
  Compass 
} from 'lucide-react';
import { researchData } from '../data/research';
import { toolsDirectoryData } from '../data/tools';
import { Container } from '../components/layout/Container';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { formatDate } from '../utils/formatters';

export const ResearchDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const research = researchData.find(r => r.slug === slug);

  if (!research) {
    return <Navigate to="/research" replace />;
  }

  // Find related tools from toolsDirectoryData
  const relatedTools = toolsDirectoryData.filter(t => 
    t.relatedResearch?.includes(research.slug) || 
    research.tags.some(tag => t.tags.includes(tag))
  ).slice(0, 3);

  return (
    <div className="py-12 md:py-16 space-y-12">
      <Container size="lg">
        {/* Back navigation */}
        <Link 
          to="/research" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowRight className="h-3.5 w-3.5" />
          <span>العودة إلى كافة الأبحاث</span>
        </Link>

        {/* Paper Header */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="cyan">{research.category}</Badge>
            {research.severity && (
              <Badge variant="severity" severity={research.severity}>
                {research.severity.toUpperCase()} SEVERITY
              </Badge>
            )}
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mr-auto">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formatDate(research.date)}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-arabic leading-tight">
            {research.title}
          </h1>

          {research.cvss && (
            <div className="p-3 rounded-xl bg-slate-100/80 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between">
              <span className="font-bold">تقييم الضعف المعياري (CVSS Score):</span>
              <span className="text-teal-600 font-bold">{research.cvss}</span>
            </div>
          )}

          {/* Executive Summary */}
          <div className="p-6 rounded-2xl bg-teal-50/50 border border-teal-200/80 space-y-2">
            <h2 className="text-xs font-bold font-mono uppercase text-teal-700">الملخص التنفيذي (Executive Summary):</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {research.summary}
            </p>
          </div>
        </div>

        {/* Deep Technical Analysis */}
        <div className="space-y-8 pt-6">
          <Card className="p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 font-arabic flex items-center gap-2 border-b border-slate-100 pb-3">
              <ShieldAlert className="h-5 w-5 text-amber-600" />
              <span>التحليل التقني وسيناريو الاستغلال (Technical Analysis)</span>
            </h2>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-medium">
              {research.technicalDetails}
            </div>
          </Card>

          {/* Impact & Root Cause */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-2">
              <h3 className="text-xs font-bold font-mono uppercase text-teal-600">الأثر الأمني (Security Impact):</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {research.impact}
              </p>
            </Card>

            <Card className="p-6 space-y-2">
              <h3 className="text-xs font-bold font-mono uppercase text-teal-600">السبب الجذري (Root Cause):</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {research.rootCause}
              </p>
            </Card>
          </div>

          {/* Mitigation */}
          <Card className="p-6 sm:p-8 space-y-4 bg-emerald-50/30 border-emerald-200">
            <h2 className="text-lg font-bold text-slate-900 font-arabic flex items-center gap-2 border-b border-emerald-200 pb-3">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span>إرشادات التحصين والمعالجة البرمجية (Remediation & Mitigation)</span>
            </h2>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-medium">
              {research.mitigation}
            </div>
          </Card>

          {/* Related Tools in Directory */}
          {relatedTools.length > 0 && (
            <Card className="p-6 space-y-4">
              <h3 className="text-xs font-bold font-mono uppercase text-slate-700 flex items-center gap-2">
                <Wrench className="h-4 w-4 text-teal-600" />
                <span>أدوات موصى بها لفحص وتحليل هذه الثغرة من دليل الأدوات:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedTools.map(tool => (
                  <Link 
                    key={tool.id} 
                    to="/tools" 
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-right space-y-1 transition-all"
                  >
                    <div className="text-xs font-bold text-slate-900 font-arabic">{tool.name}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{tool.category}</div>
                  </Link>
                ))}
              </div>
            </Card>
          )}

          {/* References */}
          {research.references?.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold font-mono uppercase text-slate-500">المراجع والتوثيق الرسمي:</h3>
              <ul className="space-y-2 text-xs">
                {research.references.map((ref, idx) => (
                  <li key={idx}>
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-teal-600 hover:underline flex items-center gap-1.5 font-medium"
                    >
                      <span>{ref.title}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

