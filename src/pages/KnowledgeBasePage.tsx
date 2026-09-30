import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Tag, 
  Clock, 
  Calendar, 
  Bookmark, 
  BookmarkCheck, 
  Layers, 
  Copy, 
  Check, 
  ChevronRight,
  Shield,
  FileText
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { knowledgeData } from '../data/knowledge';

export const KnowledgeBasePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDocId, setSelectedDocId] = useState<string>(knowledgeData[0].id);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'all', label: 'كافة المواضيع' },
    { id: 'Cryptography', label: 'علم التشفير' },
    { id: 'Linux', label: 'أنظمة Linux' },
    { id: 'Networking', label: 'أمان الشبكات' },
    { id: 'Web', label: 'أمان الويب' },
  ];

  const filteredDocs = knowledgeData.filter(doc => {
    const matchesCat = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      doc.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const activeDoc = knowledgeData.find(d => d.id === selectedDocId) || knowledgeData[0];

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleCopyContent = () => {
    if (activeDoc) {
      navigator.clipboard.writeText(`${activeDoc.title}\n\n${activeDoc.summary}\n\n${activeDoc.content}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 md:py-16 space-y-12">
      <Container size="xl">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-teal-50 text-teal-700 border border-teal-200">
            <BookOpen className="h-3.5 w-3.5" />
            <span>قاعدة المعرفة التوثيقية والويكي التقني</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-arabic">
            قاعدة المعرفة التقنية (Knowledge Base)
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            مستودع منظم للوثائق التقنية، المفاهيم المعمارية، المراجع التشفيرية، وأوامر الأنظمة المصنفة للرجوع السريع أثناء التحليل والعمليات الأمنية.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="space-y-4">
          <div className="max-w-xl">
            <Input
              icon={<Search className="h-4 w-4" />}
              placeholder="ابحث في قاعدة المعرفة (مثال: SUID, HSTS, AES-GCM, DNSSEC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 border border-slate-200/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Wiki Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Document Index */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold font-mono uppercase text-slate-500 px-1">
              الملفات التوثيقية ({filteredDocs.length}):
            </div>

            <div className="space-y-2.5">
              {filteredDocs.map(doc => {
                const isSelected = doc.id === activeDoc.id;
                const isBookmarked = bookmarkedIds.includes(doc.id);

                return (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDocId(doc.id)}
                    className={`w-full text-right p-4 rounded-2xl border transition-all text-sm block ${
                      isSelected
                        ? 'bg-white border-teal-500/80 shadow-md ring-1 ring-indigo-500/20'
                        : 'bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200/60">
                        {doc.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {doc.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 font-arabic text-sm line-clamp-2 leading-snug">
                      {doc.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-1.5">
                      {doc.summary}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Document Reader */}
          <div className="lg:col-span-8 space-y-6">
            <Card className="p-6 sm:p-8 space-y-6">
              {/* Document Header */}
              <div className="space-y-4 border-b border-slate-100 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="cyan">{activeDoc.category}</Badge>
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{activeDoc.readTime}</span>
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{activeDoc.updatedAt}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleBookmark(activeDoc.id)}
                      className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                      title={bookmarkedIds.includes(activeDoc.id) ? 'إزالة من المحفوظات' : 'حفظ في الإشارات المرجعية'}
                    >
                      {bookmarkedIds.includes(activeDoc.id) ? (
                        <BookmarkCheck className="h-4 w-4 text-teal-600 fill-indigo-600" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </button>

                    <button
                      onClick={handleCopyContent}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-mono transition-colors"
                      title="نسخ محتوى الوثيقة"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-bold">تم النسخ</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>نسخ</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <h1 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic leading-tight">
                  {activeDoc.title}
                </h1>

                {/* Summary Callout */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {activeDoc.summary}
                </div>
              </div>

              {/* Document Body */}
              <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium whitespace-pre-line space-y-4">
                {activeDoc.content}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                <Tag className="h-3.5 w-3.5 text-slate-400 ml-1.5" />
                {activeDoc.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-mono border border-slate-200/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

