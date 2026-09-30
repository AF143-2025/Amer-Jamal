import { useMemo } from 'react';
import { toolsDirectoryData } from '../data/tools';
import { roadmapNodes } from '../data/roadmap';

export interface UnifiedSearchResult {
  id: string;
  title: string;
  category: string;
  type: 
    | 'tool' 
    | 'roadmap' 
    | 'certification'
    | 'navigation';
  description: string;
  url: string;
  tags?: string[];
}

export const useSearch = (query: string) => {
  const allItems = useMemo<UnifiedSearchResult[]>(() => {
    const items: UnifiedSearchResult[] = [];

    // Navigation Pages
    items.push(
      { id: 'nav-home', title: 'الرئيسية (Home)', category: 'صفحة رئيسية', type: 'navigation', description: 'الواجهة الرئيسية والهوية الرقمية لعامر جمال', url: '/' },
      { id: 'nav-tools', title: 'دليل الأدوات السيبرانية (Cybersecurity Tools)', category: 'صفحة رئيسية', type: 'navigation', description: 'دليل شامل لأدوات الاستطلاع والويب والشبكات والأنظمة', url: '/tools' },
      { id: 'nav-roadmap', title: 'خارطة طريق الأمن السيبراني (Roadmap)', category: 'صفحة رئيسية', type: 'navigation', description: 'مسار التعلم التفاعلي والمحطات المنجزة والمخططة', url: '/roadmap' },
      { id: 'nav-certifications', title: 'دليل الشهادات (Certifications)', category: 'صفحة رئيسية', type: 'navigation', description: 'دليل شهادات الأمن السيبراني عبر مسارات الدفاع والهجوم والقيادة', url: '/certifications' },
      { id: 'nav-about', title: 'عني (About Me)', category: 'صفحة رئيسية', type: 'navigation', description: 'السيرة الذاتية، الرؤية الهندسية، والشهادات', url: '/about' },
      { id: 'nav-contact', title: 'تواصل معي (Contact)', category: 'صفحة رئيسية', type: 'navigation', description: 'وسائل الاتصال المباشر والمهني', url: '/contact' }
    );

    // Tools
    toolsDirectoryData.forEach(t => {
      items.push({
        id: `tool-${t.id}`,
        title: `${t.name} (${t.subcategory})`,
        category: `أداة: ${t.category}`,
        type: 'tool',
        description: t.description,
        url: `/tools`,
        tags: t.tags
      });
    });

    // Roadmap Nodes
    roadmapNodes.forEach(rn => {
      items.push({
        id: `rm-${rn.id}`,
        title: `${rn.title} (${rn.titleEn})`,
        category: `خارطة الطريق: ${rn.track}`,
        type: 'roadmap',
        description: rn.summary,
        url: `/roadmap`,
        tags: rn.concepts
      });
    });

    return items;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return allItems.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchTags = item.tags?.some(tag => tag.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchCategory || matchTags;
    }).slice(0, 12);
  }, [allItems, query]);

  return { results, totalCount: allItems.length };
};

