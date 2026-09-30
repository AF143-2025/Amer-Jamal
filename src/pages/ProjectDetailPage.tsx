import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Star, 
  Layers, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Lightbulb,
  Cpu,
  Wrench,
  Compass
} from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { projectsData } from '../data/projects';
import { toolsDirectoryData } from '../data/tools';
import { Container } from '../components/layout/Container';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Find related tools from toolsDirectoryData
  const relatedTools = toolsDirectoryData.filter(t => 
    t.relatedProjects?.includes(project.slug) ||
    project.techStack.some(tech => t.tags.includes(tech))
  ).slice(0, 3);

  return (
    <div className="py-12 md:py-16 space-y-12">
      <Container size="lg">
        {/* Back navigation */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowRight className="h-3.5 w-3.5" />
          <span>العودة إلى كافة المشاريع</span>
        </Link>

        {/* Project Header */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="cyan">{project.category}</Badge>
            {project.stars !== undefined && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-amber-50 text-amber-700 border border-amber-200">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>{project.stars} Stars على GitHub</span>
              </div>
            )}
            {project.featured && (
              <Badge variant="success">مشروع هندسي رئيسي</Badge>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-arabic leading-tight">
            {project.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
              >
                <GithubIcon className="h-4 w-4" />
                <span>عرض الشيفرة المصدرية على GitHub</span>
                <ExternalLink className="h-3 w-3 opacity-60 mr-1" />
              </a>
            )}
            {project.liveDemoUrl && (
              <a 
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 border border-teal-200 text-xs font-bold transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                <span>معاينة التجربة الحية</span>
              </a>
            )}
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <Card className="p-6 sm:p-8 space-y-3 bg-teal-50/20 border-teal-200/60">
            <div className="flex items-center gap-2 text-teal-600 font-bold text-xs font-mono uppercase tracking-wider">
              <AlertTriangle className="h-4 w-4" />
              <span>المشكلة والتحدي التقني (The Problem)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {project.problem}
            </p>
          </Card>

          <Card className="p-6 sm:p-8 space-y-3 bg-emerald-50/20 border-emerald-200/60">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4" />
              <span>الحل والهندسة المتبعة (The Solution)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {project.solution}
            </p>
          </Card>
        </div>

        {/* Architecture & Pipeline */}
        <div className="space-y-8 pt-6">
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <Layers className="h-5 w-5 text-teal-600" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-arabic">
                المعمارية التقنية وخط الأنابيب (Architecture & Pipeline)
              </h2>
            </div>
            
            <div className="space-y-3">
              {project.architecture.map((archStep, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-mono text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {archStep}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Features & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tech Stack */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs font-mono uppercase tracking-wider border-b border-slate-100 pb-3">
                <Cpu className="h-4 w-4 text-purple-600" />
                <span>حزمة التقنيات المستخدمة</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Key Features */}
            <Card className="md:col-span-2 p-6 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs font-mono uppercase tracking-wider border-b border-slate-100 pb-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>أبرز المزايا والقدرات التشغيلية</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Security Considerations */}
          {project.securityConsiderations?.length > 0 && (
            <Card className="p-6 sm:p-8 space-y-4 bg-slate-50/50 border-slate-200">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <ShieldCheck className="h-5 w-5 text-teal-600" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-arabic">
                  الاعتبارات الأمنية والتحصين (Security Considerations)
                </h2>
              </div>
              <ul className="space-y-2.5">
                {project.securityConsiderations.map((sec, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    <span className="h-2 w-2 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Challenges & Lessons Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.challenges?.length > 0 && (
              <Card className="p-6 space-y-3">
                <h3 className="text-xs font-bold font-mono uppercase text-amber-600 flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4" />
                  <span>أبرز التحديات الهندسية:</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 font-medium">
                  {project.challenges.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {project.lessonsLearned?.length > 0 && (
              <Card className="p-6 space-y-3">
                <h3 className="text-xs font-bold font-mono uppercase text-teal-600 flex items-center gap-1.5">
                  <Lightbulb className="h-4 w-4" />
                  <span>الدروس المستفادة والخبرات:</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 font-medium">
                  {project.lessonsLearned.map((ll, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      <span>{ll}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <Card className="p-6 space-y-4">
              <h3 className="text-xs font-bold font-mono uppercase text-slate-700 flex items-center gap-2">
                <Wrench className="h-4 w-4 text-teal-600" />
                <span>أدوات ذات صلة بهذا المشروع في دليل الأدوات:</span>
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
        </div>
      </Container>
    </div>
  );
};

