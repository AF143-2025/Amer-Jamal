import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  Calendar, 
  Clock, 
  Tag, 
  ArrowLeft, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { articlesData } from '../data/articles';
import { formatDate } from '../utils/formatters';

export const ArticlesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allTags = ['all', ...Array.from(new Set(articlesData.flatMap(a => a.tags)))];

  const filteredArticles = articlesData.filter(article => {
    const matchesTag = selectedTag === 'all' || article.tags.includes(selectedTag);
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredArticle = articlesData.find(a => a.featured) || articlesData[0];

  return (
    <div className="py-12 md:py-16 space-y-12">
      <Container size="lg">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-teal-50 text-teal-700 border border-teal-200">
            <FileText className="h-3.5 w-3.5" />
            <span>الأطروحات والمقالات المعمارية</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-arabic">
            المقالات والأبحاث الفكرية
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            تحليلات معمارية معمقة، أطروحات في الفلسفة الأمنية، ومنهجيات التفكير الهندسي في بيئات الحوسبة السحابية والأنظمة الموزعة.
          </p>
        </div>

        {/* Featured Article Hero Card */}
        {featuredArticle && (
          <Link to={`/articles/${featuredArticle.slug}`} className="block group">
            <Card className="p-6 sm:p-10 border-teal-200/80 bg-gradient-to-br from-white via-blue-50/20 to-slate-50 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-teal-300">
              <div className="space-y-4 relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-100 text-teal-800">
                    <Sparkles className="h-3.5 w-3.5 text-teal-600" />
                    <span>مقال مختار (Featured Essay)</span>
                  </div>
                  <Badge variant="cyan">{featuredArticle.category}</Badge>
                  <span className="flex items-center gap-1 text-xs font-mono text-slate-500 mr-auto">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{formatDate(featuredArticle.date)}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-3xl font-black text-slate-900 font-arabic group-hover:text-teal-600 transition-colors leading-snug">
                  {featuredArticle.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-3xl">
                  {featuredArticle.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 text-xs">
                  <span className="font-mono text-slate-500 flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredArticle.readingTime}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-teal-600 group-hover:translate-x-[-4px] transition-transform">
                    <span>قراءة المقال بالكامل</span>
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        )}

        {/* Search & Tag Filter */}
        <div className="space-y-4 pt-4">
          <div className="max-w-md">
            <Input
              icon={<Search className="h-4 w-4" />}
              placeholder="ابحث في المقالات والأطروحات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedTag === tag
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 border border-slate-200/50'
                }`}
              >
                {tag === 'all' ? 'كافة الوسوم' : `#${tag}`}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {filteredArticles.map(article => (
            <Link key={article.id} to={`/articles/${article.slug}`} className="group block">
              <Card className="h-full p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="font-mono text-slate-400 text-[11px]">
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-arabic group-hover:text-teal-600 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="font-mono text-slate-400 text-[11px]">
                      {formatDate(article.date)}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-teal-600 group-hover:translate-x-[-4px] transition-transform">
                      <span>قراءة المزيد</span>
                      <ArrowLeft className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

