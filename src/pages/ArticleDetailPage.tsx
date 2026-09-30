import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag, 
  Share2, 
  BookOpen, 
  ArrowLeft,
  Check,
  Copy
} from 'lucide-react';
import { articlesData } from '../data/articles';
import { Container } from '../components/layout/Container';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { formatDate } from '../utils/formatters';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find(a => a.slug === slug);
  const [copied, setCopied] = React.useState(false);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const relatedArticles = articlesData
    .filter(a => a.id !== article.id)
    .slice(0, 2);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 md:py-16 space-y-12">
      <Container size="md">
        {/* Back navigation */}
        <Link 
          to="/articles" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowRight className="h-3.5 w-3.5" />
          <span>العودة إلى قائمة المقالات</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Badge variant="cyan">{article.category}</Badge>
              <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                <Clock className="h-3.5 w-3.5" />
                <span>{article.readingTime}</span>
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                <Calendar className="h-3.5 w-3.5" />
                <span>{formatDate(article.date)}</span>
              </span>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-mono transition-colors"
              title="مشاركة رابط المقال"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-bold">تم نسخ الرابط</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5" />
                  <span>مشاركة</span>
                </>
              )}
            </button>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-arabic leading-tight">
            {article.title}
          </h1>

          {/* Executive Summary */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {article.summary}
            </p>
          </div>
        </div>

        {/* Article Body */}
        <Card className="p-6 sm:p-10 space-y-6">
          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium whitespace-pre-line space-y-6">
            {article.content}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <Tag className="h-3.5 w-3.5 text-slate-400 ml-1.5" />
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-mono border border-slate-200/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        </Card>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-4 pt-6">
            <h3 className="text-sm font-bold font-mono uppercase text-slate-500">
              مقالات وأطروحات ذات صلة:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map(rel => (
                <Link key={rel.id} to={`/articles/${rel.slug}`} className="group block">
                  <Card className="p-5 space-y-2 hover:border-slate-300 transition-all">
                    <span className="text-[11px] font-mono text-slate-400">{rel.readingTime}</span>
                    <h4 className="text-sm font-bold text-slate-900 font-arabic group-hover:text-teal-600 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {rel.summary}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

