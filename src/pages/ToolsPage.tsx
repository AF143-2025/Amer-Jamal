import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ExternalLink, 
  Filter, 
  ArrowLeft,
  Compass,
  BookOpen,
  FolderGit2,
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { InteractiveModal } from '../components/ui/InteractiveModal';
import { SectionHeader } from '../components/layout/SectionHeader';
import { 
  ReconnaissanceIcon, 
  OsintIcon, 
  WebSecurityIcon, 
  NetworkSecurityIcon, 
  VulnerabilityResearchIcon, 
  LinuxIcon, 
  ProgrammingIcon, 
  BlueTeamIcon, 
  DigitalForensicsIcon 
} from '../components/ui/CyberIcons';
import { toolsDirectoryData, ToolDirectoryItem } from '../data/tools';

interface CategoryConfig {
  id: string;
  key: string;
  label: string;
  englishLabel: string;
  subtopics: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  matchesCategory: (cat: string) => boolean;
}

export const ToolsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'category'>('name');
  const [activeModalTool, setActiveModalTool] = useState<ToolDirectoryItem | null>(null);

  // 9 distinct categories as specified
  const categoryConfigs: CategoryConfig[] = [
    {
      id: 'Information Gathering',
      key: 'recon',
      label: 'Information Gathering',
      englishLabel: 'Information Gathering',
      subtopics: 'OSINT • Network Recon • Subdomains • Port Scanning',
      icon: ReconnaissanceIcon,
      matchesCategory: (c) => c === 'Information Gathering'
    },
    {
      id: 'Exploitation',
      key: 'exploit',
      label: 'Exploitation',
      englishLabel: 'Exploitation',
      subtopics: 'Frameworks • Exploits • Post-Exploitation • Pivoting',
      icon: VulnerabilityResearchIcon,
      matchesCategory: (c) => c === 'Exploitation'
    },
    {
      id: 'Password Cracking',
      key: 'cracking',
      label: 'Password Cracking',
      englishLabel: 'Password Cracking',
      subtopics: 'Bruteforce • Hashes • Rainbow Tables • Network Logon',
      icon: NetworkSecurityIcon,
      matchesCategory: (c) => c === 'Password Cracking'
    },
    {
      id: 'Vulnerability Scanning',
      key: 'vuln',
      label: 'Vulnerability Scanning',
      englishLabel: 'Vulnerability Scanning',
      subtopics: 'Automated Scans • CVEs • Assessment • Reporting',
      icon: WebSecurityIcon,
      matchesCategory: (c) => c === 'Vulnerability Scanning'
    },
    {
      id: 'Social Engineering',
      key: 'social',
      label: 'Social Engineering',
      englishLabel: 'Social Engineering',
      subtopics: 'Phishing • Homograph • Awareness • Spoofing',
      icon: BlueTeamIcon,
      matchesCategory: (c) => c === 'Social Engineering'
    },
    {
      id: 'Digital Forensics',
      key: 'forensics',
      label: 'Digital Forensics',
      englishLabel: 'Digital Forensics',
      subtopics: 'Disk Imaging • Memory Analysis • File Recovery',
      icon: DigitalForensicsIcon,
      matchesCategory: (c) => c === 'Digital Forensics'
    },
    {
      id: 'Wireless Hacking',
      key: 'wireless',
      label: 'Wireless Hacking',
      englishLabel: 'Wireless Hacking',
      subtopics: 'Wi-Fi Cracking • Sniffing • Wardriving',
      icon: LinuxIcon,
      matchesCategory: (c) => c === 'Wireless Hacking'
    },
    {
      id: 'Web App Security Assessment',
      key: 'web-app',
      label: 'Web App Security Assessment',
      englishLabel: 'Web App Security Assessment',
      subtopics: 'Proxies • DAST • CMS Scanning • Directory Bruteforce',
      icon: ProgrammingIcon,
      matchesCategory: (c) => c === 'Web App Security Assessment'
    }
  ];

  // Filter tools based on search and sort
  const filteredTools = useMemo(() => {
    return toolsDirectoryData
      .filter(tool => {
        const matchesCategory = 
          selectedCategory === 'All' || 
          categoryConfigs.find(c => c.id === selectedCategory)?.matchesCategory(tool.category) ||
          tool.category === selectedCategory;

        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = 
          !q ||
          tool.name.toLowerCase().includes(q) ||
          tool.description.toLowerCase().includes(q) ||
          tool.subcategory.toLowerCase().includes(q) ||
          tool.myNotes.toLowerCase().includes(q) ||
          tool.tags.some(t => t.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return a.category.localeCompare(b.category);
      });
  }, [searchQuery, selectedCategory, sortBy]);

  // Group filtered tools by config ID
  const groupedTools = useMemo(() => {
    const groups: { [key: string]: ToolDirectoryItem[] } = {};
    categoryConfigs.forEach(c => {
      groups[c.id] = filteredTools.filter(t => c.matchesCategory(t.category));
    });
    return groups;
  }, [filteredTools, categoryConfigs]);

  // Active categories to render
  const activeCategories = useMemo(() => {
    return categoryConfigs.filter(cat => {
      const isSelected = selectedCategory === 'All' || selectedCategory === cat.id;
      const hasTools = (groupedTools[cat.id]?.length || 0) > 0;
      return isSelected && hasTools;
    });
  }, [selectedCategory, groupedTools, categoryConfigs]);

  const getCategoryIcon = (category: string) => {
    const config = categoryConfigs.find(c => c.matchesCategory(category));
    if (config) {
      const IconComp = config.icon;
      return <IconComp size={18} className="text-teal-700" />;
    }
    return <Wrench className="h-4 w-4 text-teal-700" />;
  };

  // Find related tools for the modal
  const getRelatedTools = (tool: ToolDirectoryItem) => {
    return toolsDirectoryData
      .filter(t => t.id !== tool.id && (t.category === tool.category || t.subcategory === tool.subcategory))
      .slice(0, 3);
  };

  return (
    <div className="pt-[70px] sm:pt-20 pb-12 sm:pb-16" dir="rtl">
      <Container size="xl">
        {/* Page Header matching screenshot */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-amber-50 text-amber-700 px-5 py-2 rounded-full text-sm font-bold mb-4 font-arabic border border-amber-200 shadow-sm">
            🛠️ مكتبة الأدوات 
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-arabic">
            أكثر من <span className="text-amber-600">50 أداة احترافية</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-arabic font-medium leading-relaxed">
            أدوات مفتوحة المصدر وتجارية مختارة بعناية لكل تخصص في الأمن السيبراني
          </p>
        </div>

        {/* Search Bar matching screenshot */}
        <div className="max-w-2xl mx-auto mb-8 relative" dir="rtl">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="ابحث عن أداة... (مثال: nmap, burp, sqlmap)"
            className="w-full pr-12 pl-4 py-4 bg-white border-2 border-slate-200 rounded-2xl outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 shadow-sm font-arabic text-right placeholder-slate-400 transition-all"
          />
        </div>

        {/* Categories matching screenshot */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12" dir="rtl">
          {/* 'الكل' sits on its own row above other categories on mobile, inline on desktop */}
          <div className="w-full sm:w-auto flex justify-center mb-1.5 sm:mb-0">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`w-full max-w-[200px] sm:w-auto px-6 py-2.5 rounded-full font-bold text-sm font-arabic transition-all shadow-sm text-center ${
                selectedCategory === 'All'
                  ? 'bg-black text-amber-500 border-2 border-black'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              الكل
            </button>
          </div>
          {categoryConfigs.map(cat => {
            const isSelected = selectedCategory === cat.id;
            const IconComp = cat.icon;
            const label = cat.label;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full font-bold text-sm font-arabic transition-all shadow-sm flex items-center gap-2 ${
                  isSelected
                    ? 'bg-black text-amber-500 border-2 border-black'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                <IconComp size={16} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid matching screenshot */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-3xl border-2 border-slate-200 p-6 space-y-2">
            <p className="text-slate-700 text-sm font-arabic font-bold">لا توجد أدوات تطابق البحث الحالي.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
            {filteredTools.map(tool => (
              <div 
                key={tool.id}
                onClick={() => setActiveModalTool(tool)}
                className="bg-white rounded-[2rem] p-8 border-2 border-slate-200 hover:border-amber-500 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="text-xl font-black text-slate-900 font-mono group-hover:text-amber-600 transition-colors">{tool.name}</h3>
                     <span className="bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-[11px] font-bold">
                       متوسط
                     </span>
                  </div>
                  
                  <p className="text-sm text-slate-600 mb-6 font-arabic leading-relaxed line-clamp-3">
                     {tool.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6 justify-start">
                     {tool.tags.slice(0, 4).map(tag => (
                       <span key={tag} className="text-[10px] text-slate-600 font-mono bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                         #{tag}
                       </span>
                     ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-auto">
                  <div className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 border border-slate-300 rounded-[2px] flex items-center justify-center text-[8px] font-bold">🖥️</span>
                    {tool.platform}
                  </div>
                  <a 
                    href={tool.officialUrl || `https://www.google.com/search?q=${encodeURIComponent(tool.name)}+tool`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-900 group-hover:text-amber-600 text-sm font-bold flex items-center gap-1.5 transition-colors"
                  >
                    الموقع <ArrowLeft className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Tool Details Modal */}
        {activeModalTool && (
          <InteractiveModal
            isOpen={!!activeModalTool}
            onClose={() => setActiveModalTool(null)}
            title={activeModalTool.name}
            subtitle={`${activeModalTool.category} • ${activeModalTool.subcategory}`}
            icon={getCategoryIcon(activeModalTool.category)}
            badge={
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-bold">
                {activeModalTool.platform}
              </span>
            }
            maxWidth="2xl"
          >
            {/* Description */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-950 font-arabic">الوصف التقني:</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {activeModalTool.description}
              </p>
            </div>

            {/* Researcher's Field Notes */}
            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1">
              <div className="text-xs font-mono text-amber-900 font-bold uppercase flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber-600" />
                <span>ملاحظات وتجربة الباحث الميدانية:</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {activeModalTool.myNotes}
              </p>
            </div>

            {/* Tags */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-950 font-arabic">الوسوم والتقنيات (Tags):</h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalTool.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Tools & Content */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="text-[11px] font-bold text-slate-800 uppercase font-arabic">
                المحتوى والأدوات ذات الصلة:
              </div>

              {/* Related Tools */}
              <div className="flex flex-wrap gap-1.5">
                <span className="text-slate-500 font-medium">أدوات مشابهة:</span>
                {getRelatedTools(activeModalTool).map(rt => (
                  <button
                    key={rt.id}
                    onClick={() => setActiveModalTool(rt)}
                    className="text-xs font-mono text-amber-600 hover:underline bg-white px-2 py-0.5 rounded border border-slate-200"
                  >
                    {rt.name}
                  </button>
                ))}
              </div>

              {/* Related Research & Roadmap */}
              <div className="flex flex-wrap gap-3 pt-1 border-t border-slate-200/60 font-mono text-[11px]">
                {activeModalTool.relatedRoadmapNode && (
                  <Link
                    to={`/roadmap#${activeModalTool.relatedRoadmapNode}`}
                    className="text-amber-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Compass className="h-3 w-3" /> مسار الخريطة
                  </Link>
                )}
                {activeModalTool.relatedResearch && (
                  <Link
                    to="/research"
                    className="text-amber-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <BookOpen className="h-3 w-3" /> الأبحاث المرتبطة
                  </Link>
                )}
                {activeModalTool.relatedProjects && (
                  <Link
                    to="/projects"
                    className="text-slate-800 hover:text-amber-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <FolderGit2 className="h-3 w-3" /> المشاريع المرتبطة
                  </Link>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                {activeModalTool.officialUrl && (
                  <a
                    href={activeModalTool.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-black text-white hover:bg-amber-600 hover:text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-md"
                  >
                    <span>الموقع الرسمي</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {activeModalTool.docsUrl && (
                  <a
                    href={activeModalTool.docsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-200"
                  >
                    <span>التوثيق الفني</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {activeModalTool.githubUrl && (
                  <a
                    href={activeModalTool.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-200"
                  >
                    <span>مستودع الكود</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              <span className="text-[11px] font-mono text-slate-500">
                الترخيص: {activeModalTool.license}
              </span>
            </div>
          </InteractiveModal>
        )}

      </Container>
    </div>
  );
};

