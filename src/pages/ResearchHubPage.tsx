import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowLeft, 
  ChevronLeft, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SlidePanel } from '../components/ui/SlidePanel';
import { SectionHeader } from '../components/layout/SectionHeader';
import { 
  ResearchIcon, 
  VulnerabilityResearchIcon, 
  WebSecurityIcon, 
  NetworkSecurityIcon, 
  AppSecurityIcon, 
  SecurityResearchIcon 
} from '../components/ui/CyberIcons';
import { researchData } from '../data/research';
import { ResearchItem } from '../types';

export const ResearchHubPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeResearch, setActiveResearch] = useState<ResearchItem | null>(null);

  // 5 specified categories + All
  const categories = [
    { id: 'All', label: 'كافة الأبحاث' },
    { id: 'Vulnerability Research', label: 'أبحاث الثغرات' },
    { id: 'Web Security', label: 'أمان الويب' },
    { id: 'Network Security', label: 'أمان الشبكات' },
    { id: 'Application Security', label: 'أمان التطبيقات' },
    { id: 'Security Analysis', label: 'التحليل الأمني' },
  ];

  const filteredResearch = researchData.filter(item => {
    const matchesCat = 
      selectedCategory === 'All' || 
      item.category === selectedCategory ||
      (selectedCategory === 'Security Analysis' && (item.category === 'System Security' || item.category === 'Cryptographic Analysis')) ||
      (selectedCategory === 'Application Security' && (item.category === 'Web Security' || item.category === 'Vulnerability Research'));

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q));

    return matchesCat && matchesSearch;
  });

  const featuredResearch = researchData[0];

  return (
    <div className="py-6 sm:py-8 space-y-6 sm:space-y-7">
      <Container size="xl">
        
        {/* Unified Section Header */}
        <SectionHeader
          icon={<ResearchIcon size={16} />}
          label="مركز أبحاث الأمان والتحليلات المعمارية • Research Hub"
          title="الأبحاث والتحقيقات الأمنية"
          description="أوراق بحثية معمقة تفكك الأسباب الجذرية للثغرات، تناقضات البروتوكولات، وسيناريوهات الاستغلال، مع إرشادات المعالجة الهندسية الرصينة."
          badge={
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-bold">
              {researchData.length} أبحاث موثقة
            </span>
          }
        />

        {/* Featured Research Card */}
        {featuredResearch && selectedCategory === 'All' && !searchQuery && (
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase text-slate-500 flex items-center gap-1.5 px-1">
              <Sparkles className="h-3.5 w-3.5 text-teal-600" />
              <span>بحث مميز ومختار (Featured Research):</span>
            </div>

            <Card
              onClick={() => setActiveResearch(featuredResearch)}
              className="p-5 sm:p-6 border-teal-200 bg-gradient-to-r from-teal-50/30 via-white to-slate-50/40 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="cyan">{featuredResearch.category}</Badge>
                    <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      CVSS {featuredResearch.cvss} ({featuredResearch.severity?.toUpperCase()})
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {featuredResearch.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-arabic group-hover:text-teal-600 transition-colors leading-snug">
                  {featuredResearch.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-4xl">
                  {featuredResearch.summary}
                </p>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredResearch.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-teal-600 font-bold flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">
                    <span>استعراض ورقة البحث</span>
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Search & Category Filter */}
        <div className="space-y-3 pt-1">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ابحث في الأبحاث والتحليلات والوسوم..."
                className="w-full pr-10 pl-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-2xs font-arabic"
              />
            </div>

            {/* 5 Categories Filter Bar */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-slate-950 text-white shadow-2xs font-bold'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Research Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredResearch.map(item => (
            <Card 
              key={item.id} 
              onClick={() => setActiveResearch(item)}
              className="h-full flex flex-col justify-between p-4 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer group bg-white"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="cyan">{item.category}</Badge>
                  {item.severity && (
                    <span className="font-mono font-bold text-[11px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      CVSS {item.cvss} ({item.severity.toUpperCase()})
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-teal-600 transition-colors leading-snug font-arabic">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 font-medium line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{item.date}</span>
                <span className="text-teal-600 font-bold flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">
                  <span>التحليل الكامل</span>
                  <ArrowLeft className="h-3 w-3" />
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Research SlidePanel Details */}
        {activeResearch && (
          <SlidePanel
            isOpen={!!activeResearch}
            onClose={() => setActiveResearch(null)}
            title={activeResearch.title}
            subtitle={`${activeResearch.category} • نُشر في ${activeResearch.date}`}
            badge={
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200 font-bold">
                CVSS {activeResearch.cvss} ({activeResearch.severity?.toUpperCase()})
              </span>
            }
          >
            {/* Executive Summary */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-950 font-arabic">الملخص التنفيذي (Executive Summary):</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {activeResearch.summary}
              </p>
            </div>

            {/* Root Cause Analysis */}
            <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200/80 space-y-1">
              <div className="text-xs font-mono text-teal-900 font-bold uppercase flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-600" />
                <span>تحليل السبب الجذري (Root Cause Analysis):</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {activeResearch.rootCause}
              </p>
            </div>

            {/* Impact & Attack Vectors */}
            <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200/80 space-y-1">
              <div className="text-xs font-mono text-teal-900 font-bold uppercase flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4 text-teal-600" />
                <span>التأثير الأمني وسيناريو الهجوم (Impact & Attack Scenario):</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {activeResearch.impact}
              </p>
            </div>

            {/* Mitigation Strategies */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
              <div className="text-xs font-mono text-emerald-900 font-bold uppercase flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>إجراءات المعالجة والتحصين (Mitigation & Hardening):</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {activeResearch.mitigation}
              </p>
            </div>

            {/* Tags */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-950 font-arabic">الوسوم والتقنيات (Tags):</h4>
              <div className="flex flex-wrap gap-1.5">
                {activeResearch.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <Link
                to={`/research/${activeResearch.slug}`}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 text-white hover:bg-teal-700 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>قراءة ورقة البحث الكاملة</span>
                <ArrowLeft className="h-3.5 w-3.5" />
              </Link>
              <span className="text-[11px] font-mono text-slate-400">
                الأثر المعماري موثق
              </span>
            </div>
          </SlidePanel>
        )}

      </Container>
    </div>
  );
};

