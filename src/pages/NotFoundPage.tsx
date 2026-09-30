import React from 'react';
import { ShieldAlert, Home, BookOpen } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 text-center">
      <Container size="sm">
        <div className="bg-white border-2 border-slate-200 shadow-xl rounded-[2.5rem] p-10 sm:p-14 space-y-6">
          <div className="inline-flex p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 shadow-sm">
            <ShieldAlert className="h-10 w-10" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-arabic">
            404: الصفحة <span className="text-amber-600">غير موجودة</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
            المسار المطلوب غير متاح أو تم نقله في بنية المنصة. يمكنك الرجوع إلى لوحة البداية أو استعراض دليل الأدوات والمختبر.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a 
              href="/" 
              className="px-6 py-3 rounded-xl bg-black text-white hover:bg-amber-600 hover:text-black font-bold font-arabic text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              العودة للرئيسية
            </a>
            <a 
              href="/about" 
              className="px-6 py-3 rounded-xl bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 font-bold font-arabic text-sm transition-all"
            >
              عني
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

