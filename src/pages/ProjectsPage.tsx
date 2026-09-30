import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FolderGit2, Search, ArrowLeft, ExternalLink, Cpu, CheckCircle2, Star, Layers, ShieldCheck } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SlidePanel } from '../components/ui/SlidePanel';
import { GithubIcon } from '../components/ui/Icons';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';

export const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Reconnaissance', 'Defensive Tools', 'System Tools', 'Kernel Security', 'Defensive Engineering'];

  const filteredProjects = projectsData.filter(project => {
    const matchesCat = selectedCategory === 'All' || project.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q ||
      project.name.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.techStack.some(t => t.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-6 sm:py-8 md:py-10 space-y-6 sm:space-y-8">
      <Container size="xl">
        
        {/* Header */}
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 text-xs font-mono font-medium shadow-xs">
            <FolderGit2 className="h-3.5 w-3.5 text-teal-600" />
            <span>المشاريع البرمجية والأنظمة الدفاعية</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-arabic">
            المشاريع الهندسية
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium">
            برمجيات وأنظمة دفاعية وأدوات استطلاع تم بناؤها وتوثيق معماريتها الأمنية وكودها المصدري. اضغط على أي مشروع لعرض تفاصيله ومعماريته، أو الاطلاع على توثيقه الكامل.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between pt-2 border-b border-slate-200 pb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="ابحث في المشاريع والتقنيات وحزم الكود..."
              className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-xs font-arabic"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs font-bold'
                    : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat === 'All' ? 'كافة المشاريع' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (Click to open SlidePanel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-1">
          {filteredProjects.map(project => (
            <Card 
              key={project.id} 
              onClick={() => setActiveProject(project)}
              className="h-full flex flex-col justify-between p-5 sm:p-6 hover:border-teal-400 hover:shadow-md transition-all cursor-pointer group bg-white"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                    {project.category}
                  </span>
                  {project.stars && (
                    <span className="text-xs font-mono text-amber-600 font-bold flex items-center gap-1">
                      <Star className="h-3 w-3 fill-amber-500" />
                      <span>{project.stars}</span>
                    </span>
                  )}
                </div>

                <h2 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors font-arabic leading-snug">
                  {project.name}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.techStack.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {t}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono text-slate-400 self-center">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-teal-600 font-bold">
                <span>استكشاف المعمارية</span>
                <span className="flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                  <ArrowLeft className="h-3.5 w-3.5" />
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Detail SlidePanel */}
        {activeProject && (
          <SlidePanel
            isOpen={!!activeProject}
            onClose={() => setActiveProject(null)}
            title={activeProject.name}
            subtitle={`${activeProject.category} • تقييم: ★ ${activeProject.stars || 0} على GitHub`}
            icon={<FolderGit2 className="h-5 w-5 text-teal-600" />}
            badge={
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200 font-bold">
                {activeProject.category}
              </span>
            }
            width="lg"
            footer={
              <div className="flex items-center justify-between gap-3">
                <Link
                  to={`/projects/${activeProject.slug}`}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-2xs"
                >
                  <span>عرض التوثيق الكامل للمشروع</span>
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors border border-slate-200"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>المستودع</span>
                  </a>
                )}
              </div>
            }
          >
            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-slate-900 font-arabic">نبذة عن المشروع والهدف:</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {activeProject.description}
              </p>
            </div>

            {/* Problem & Solution */}
            {activeProject.problem && (
              <div className="p-3.5 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-1">
                <span className="text-xs font-mono text-teal-800 font-bold">المشكلة التقنية (Problem):</span>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">{activeProject.problem}</p>
              </div>
            )}

            {activeProject.solution && (
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1">
                <span className="text-xs font-mono text-emerald-800 font-bold">الحل الهندسي (Solution):</span>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">{activeProject.solution}</p>
              </div>
            )}

            {/* Architecture Highlights */}
            {activeProject.architecture && activeProject.architecture.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="text-xs font-bold text-slate-900 font-arabic flex items-center gap-1.5">
                  <Layers className="h-4 w-4 text-teal-600" />
                  <span>المعمارية الأمنية والملامح (Architecture):</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  {activeProject.architecture.map((arch, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">•</span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features */}
            {activeProject.features && activeProject.features.length > 0 && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-900 font-arabic flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>أبرز المزايا الدفاعية (Features):</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {activeProject.features.map((feat, i) => (
                    <div key={i} className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-1.5 pt-1">
              <h4 className="text-xs font-bold text-slate-900 font-arabic">حزمة التقنيات (Tech Stack):</h4>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.techStack.map(t => (
                  <span key={t} className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </SlidePanel>
        )}

      </Container>
    </div>
  );
};

