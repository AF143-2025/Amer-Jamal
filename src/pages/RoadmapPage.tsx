import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  Wrench, 
  ExternalLink, 
  FolderGit2,
  Sparkles,
  Shield,
  Target,
  Terminal,
  Layers,
  FileText,
  Award,
  GraduationCap
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { InteractiveModal } from '../components/ui/InteractiveModal';
import { RoadmapIcon } from '../components/ui/CyberIcons';
import { 
  roadmapData, 
  roadmapSectionsInfo, 
  RoadmapNode, 
  RoadmapSectionId, 
  LearningStatus 
} from '../data/roadmap';
import { toolsDirectoryData } from '../data/tools';

export const RoadmapPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const trackParam = searchParams.get('track');
  const validTracks: RoadmapSectionId[] = ['beginner', 'blue-team', 'red-team'];
  const initialTrack: RoadmapSectionId = (trackParam && validTracks.includes(trackParam as RoadmapSectionId)) 
    ? (trackParam as RoadmapSectionId) 
    : 'beginner';

  const [selectedTrack, setSelectedTrack] = useState<RoadmapSectionId>(initialTrack);
  const [activeModalNode, setActiveModalNode] = useState<RoadmapNode | null>(null);

  useEffect(() => {
    if (trackParam && validTracks.includes(trackParam as RoadmapSectionId)) {
      setSelectedTrack(trackParam as RoadmapSectionId);
    }
  }, [trackParam]);

  // Helper to find tool details
  const getToolById = (toolId: string) => {
    return toolsDirectoryData.find(t => t.id === toolId);
  };

  // Status badge helper
  const getStatusBadge = (status: LearningStatus) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
            <CheckCircle2 className="h-3 w-3 text-emerald-600" />
            <span>مكتمل ومتقن</span>
          </span>
        );
      case 'Learning':
        return (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 shrink-0">
            <Clock className="h-3 w-3 text-teal-600 animate-spin" />
            <span>قيد التعلم حالياً</span>
          </span>
        );
      case 'Next':
        return (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
            <ArrowRight className="h-3 w-3 text-amber-600" />
            <span>المحطة القادمة</span>
          </span>
        );
      case 'Planned':
        return (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
            <span>مخطط مستقبلياً</span>
          </span>
        );
    }
  };

  // Filter section to show
  const sectionsToRender = roadmapSectionsInfo.filter(s => s.id === selectedTrack);

  return (
    <div className="pt-[70px] sm:pt-20 pb-12 sm:pb-16" dir="rtl">
      <Container size="xl">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-10 px-2 sm:px-0">
          <div className="inline-flex items-center justify-center bg-amber-50 text-amber-700 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 font-arabic border border-amber-200 shadow-2xs">
            مسارات التعلم والشهادات التخصصية 🗺️
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 sm:mb-4 font-arabic tracking-tight">
            خارطة طريق <span className="text-amber-600">الأمن السيبراني</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-arabic font-medium leading-relaxed">
            مسارات تطبيقية وهندسية احترافية مقسمة إلى 3 بيئات تخصصية مع الشهادات والاعتمادات الدولية لكل فريق.
          </p>
        </div>

        {/* 3 Main Tracks Tabs (Responsive: full width on mobile, inline-flex on laptop) */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-10 sm:mb-14 max-w-3xl mx-auto px-2 sm:px-0" dir="rtl">
          <button
            onClick={() => setSelectedTrack('beginner')}
            className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm font-arabic transition-all flex items-center justify-center gap-2.5 border-2 cursor-pointer ${
              selectedTrack === 'beginner'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md sm:shadow-lg shadow-emerald-600/20 ring-2 ring-emerald-500/20 -translate-y-0.5'
                : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span>1. خارطة المبتدئ (5 محطات)</span>
          </button>

          <button
            onClick={() => setSelectedTrack('blue-team')}
            className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm font-arabic transition-all flex items-center justify-center gap-2.5 border-2 cursor-pointer ${
              selectedTrack === 'blue-team'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md sm:shadow-lg shadow-blue-600/20 ring-2 ring-blue-500/20 -translate-y-0.5'
                : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
            <span>2. خارطة الفريق الأزرق (5 محطات)</span>
          </button>

          <button
            onClick={() => setSelectedTrack('red-team')}
            className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm font-arabic transition-all flex items-center justify-center gap-2.5 border-2 cursor-pointer ${
              selectedTrack === 'red-team'
                ? 'bg-rose-600 text-white border-rose-600 shadow-md sm:shadow-lg shadow-rose-600/20 ring-2 ring-rose-500/20 -translate-y-0.5'
                : 'bg-white text-slate-700 border-slate-200 hover:border-rose-400 hover:bg-rose-50/50'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
            <span>3. خارطة الفريق الأحمر (5 محطات)</span>
          </button>
        </div>

        {/* Render Selected Environment */}
        <div className="space-y-12 sm:space-y-16">
          {sectionsToRender.map((section) => {
            const sectionNodes = roadmapData.filter(n => n.sectionId === section.id);
            const sectionCompleted = sectionNodes.filter(n => n.status === 'Completed').length;
            
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                {/* 1. Environment Header Banner */}
                <div className={`p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border-2 mb-10 bg-gradient-to-r ${section.gradient} ${section.borderClass} shadow-xs`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-black shrink-0 ${section.iconBgClass}`}>
                        {section.id === 'beginner' && <Terminal className="w-6 h-6 sm:w-7 sm:h-7" />}
                        {section.id === 'blue-team' && <Shield className="w-6 h-6 sm:w-7 sm:h-7" />}
                        {section.id === 'red-team' && <Target className="w-6 h-6 sm:w-7 sm:h-7" />}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`text-xs font-bold px-3 py-0.5 rounded-full border ${section.badgeClass}`}>
                            {section.badge}
                          </span>
                          <span className="text-xs font-mono text-slate-500 font-semibold">
                            {sectionCompleted} من {sectionNodes.length} مكتملة
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-arabic">
                          {section.titleAr}
                        </h2>
                      </div>
                    </div>

                    <div className="text-right md:text-left font-mono text-xs sm:text-sm text-slate-500 font-semibold tracking-wide">
                      {section.titleEn}
                    </div>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm md:text-base font-arabic leading-relaxed max-w-4xl">
                    {section.description}
                  </p>
                </div>

                {/* 2. Certifications Sub-Section inside this Environment */}
                <div className="mb-12 sm:mb-16">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${section.iconBgClass}`}>
                        <Award size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
                          الشهادات الاحترافية المعيارية لهذا المسار
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-arabic">
                          الاعتمادات الدولية الأكثر طلباً في سوق العمل السيبراني لإثبات وتوثيق الكفاءة
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 self-start sm:self-auto">
                      {section.certifications.length} شهادات معتمدة
                    </span>
                  </div>

                  {/* Responsive Certifications Grid (1 col mobile, 2 col tablet, 4 col laptop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {section.certifications.map((cert) => (
                      <div
                        key={cert.id}
                        className="bg-white rounded-2xl p-5 border-2 border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className={`text-xs font-mono font-black px-2.5 py-1 rounded-lg border ${cert.badgeColor}`}>
                              {cert.code}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                              {cert.level}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-slate-900 mb-1 font-arabic group-hover:text-amber-600 transition-colors">
                            {cert.name}
                          </h4>

                          <div className="text-[11px] font-mono text-slate-400 mb-2.5">
                            الجهة المانحة: {cert.issuer}
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed font-arabic mb-4">
                            {cert.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100">
                          <div className="text-[10px] font-bold text-slate-400 mb-1.5 font-arabic">
                            المهارات المعتمدة:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-[9px] font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"
                              >
                                #{skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Milestones Sub-Section */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${section.iconBgClass}`}>
                        <Layers size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
                          المحطات التعليمية والتطبيقية (5 محطات)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-arabic">
                          تسلسل هندسي مرحلي لنقل مهاراتك من الأساس النظري إلى التطبيق العملي المباشر
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 self-start sm:self-auto">
                      المرحلة الحالية: {sectionCompleted} مكتملة
                    </span>
                  </div>

                  {/* Responsive Milestones Grid (1 col mobile, 2 col md, 3 col lg) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" dir="rtl">
                    {sectionNodes.map((node) => {
                      return (
                        <div
                          key={node.id}
                          onClick={() => setActiveModalNode(node)}
                          className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 border-2 border-slate-200 ${section.hoverBorderClass} ${section.glowClass} hover:-translate-y-1.5 transition-all duration-200 cursor-pointer group flex flex-col justify-between`}
                        >
                          <div>
                            {/* Card Top: Step number badge + Status */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                              <div className="flex items-center gap-2">
                                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono font-black ${
                                  section.id === 'beginner' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                                  section.id === 'blue-team' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                                  'bg-rose-50 text-rose-800 border border-rose-200'
                                }`}>
                                  {node.stepNumber}
                                </span>
                                <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                                  المحطة {node.stepNumber}
                                </span>
                              </div>
                              {getStatusBadge(node.status)}
                            </div>

                            {/* Titles */}
                            <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mb-1 group-hover:text-amber-600 transition-colors font-arabic">
                              {node.title}
                            </h3>
                            <h4 className="text-xs font-mono font-semibold text-slate-400 mb-3 tracking-wide">
                              {node.titleEn}
                            </h4>

                            {/* Summary */}
                            <p className="text-xs sm:text-sm text-slate-600 mb-5 font-arabic leading-relaxed line-clamp-3">
                              {node.summary}
                            </p>

                            {/* Concept Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                              {node.concepts.slice(0, 3).map((concept, idx) => (
                                <span 
                                  key={idx} 
                                  className="text-[10px] text-slate-600 font-mono bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200"
                                >
                                  #{concept.split('(')[0].trim()}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Card Bottom / Footer */}
                          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                            {/* Recommended Tools Preview */}
                            <div className="flex items-center gap-1.5 overflow-hidden">
                              <Wrench className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                              <span className="text-[11px] font-mono text-slate-500 truncate max-w-[130px] sm:max-w-[150px]">
                                {node.recommendedTools.map(id => getToolById(id)?.name || id).slice(0, 2).join(', ')}
                              </span>
                            </div>

                            {/* Action Button */}
                            <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors shrink-0">
                              <span>استكشاف المحطة</span>
                              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Interactive Detailed Modal (Fully Responsive on Mobile & Desktop) */}
        {activeModalNode && (
          <InteractiveModal
            isOpen={!!activeModalNode}
            onClose={() => setActiveModalNode(null)}
            title={activeModalNode.title}
            subtitle={
              <div className="flex flex-col gap-0.5 mt-0.5">
                <span className="font-mono text-slate-500 text-xs" dir="ltr">
                  {activeModalNode.titleEn}
                </span>
                <span className="text-[11px] font-arabic font-bold text-amber-700">
                  {activeModalNode.sectionId === 'beginner' ? 'خارطة المبتدئ' : 
                   activeModalNode.sectionId === 'blue-team' ? 'خارطة الفريق الأزرق' : 
                   'خارطة الفريق الأحمر'} • المحطة {activeModalNode.stepNumber}
                </span>
              </div>
            }
            icon={<RoadmapIcon size={20} className="text-amber-600" />}
            badge={getStatusBadge(activeModalNode.status)}
            maxWidth="2xl"
          >
            <div className="space-y-4 sm:space-y-5" dir="rtl">
              {/* 1. Summary */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-950 font-arabic flex items-center gap-2">
                  <FileText className="h-4 w-4 text-amber-600" />
                  <span>نبذة عن هذه المحطة التعليمية:</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-slate-50 p-3 sm:p-3.5 rounded-xl border border-slate-200">
                  {activeModalNode.summary}
                </p>
              </div>

              {/* 2. Core Concepts / Topics */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                <h4 className="text-xs font-mono text-amber-900 font-bold uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>المفاهيم الجوهرية والمواضيع الأساسية (Core Topics):</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 pt-1">
                  {activeModalNode.concepts.map((concept, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white/70 p-2 rounded-lg border border-amber-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                      <span className="leading-snug">{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Recommended Tools with Link to /tools */}
              {activeModalNode.recommendedTools && activeModalNode.recommendedTools.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-950 font-arabic flex items-center gap-1.5">
                    <Wrench className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>الأدوات التطبيقية الموصى بها في هذه المحطة:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalNode.recommendedTools.map((toolId) => {
                      const tool = getToolById(toolId);
                      return (
                        <Link
                          key={toolId}
                          to="/tools"
                          onClick={() => setActiveModalNode(null)}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all text-right block group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-xs text-slate-900 group-hover:text-amber-600 transition-colors">
                              {tool?.name || toolId}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {tool?.subcategory || 'أداة تخصصية'}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 line-clamp-1">
                            {tool?.description || 'عرض تفاصيل الأداة واستخداماتها في المنصة'}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 4. Learning Resources */}
              {activeModalNode.learningResources && activeModalNode.learningResources.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-950 font-arabic flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-teal-600 shrink-0" />
                    <span>المصادر والمراجع التعليمية المقترحة (Resources):</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalNode.learningResources.map((res, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                      >
                        <span className="font-medium text-slate-800 leading-snug">{res.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 shrink-0 mr-2">
                          {res.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Related Articles & Projects Links */}
              {(activeModalNode.relatedProjects || activeModalNode.relatedArticles || activeModalNode.relatedResearch) && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
                  <span className="font-bold text-slate-700 font-arabic">روابط مرتبطة في الموقع:</span>
                  {activeModalNode.relatedProjects && (
                    <Link 
                      to="/projects" 
                      onClick={() => setActiveModalNode(null)}
                      className="text-emerald-600 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <FolderGit2 className="h-3.5 w-3.5" /> المشاريع البرمجية
                    </Link>
                  )}
                  {activeModalNode.relatedArticles && (
                    <Link 
                      to="/articles" 
                      onClick={() => setActiveModalNode(null)}
                      className="text-amber-600 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <BookOpen className="h-3.5 w-3.5" /> المقالات التقنية
                    </Link>
                  )}
                  {activeModalNode.relatedResearch && (
                    <Link 
                      to="/research" 
                      onClick={() => setActiveModalNode(null)}
                      className="text-teal-600 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Sparkles className="h-3.5 w-3.5" /> الأبحاث الأمنية
                    </Link>
                  )}
                </div>
              )}
            </div>
          </InteractiveModal>
        )}

      </Container>
    </div>
  );
};

