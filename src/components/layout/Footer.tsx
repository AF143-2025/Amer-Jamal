import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import { AmerCyberMark } from '../ui/AmerCyberMark';
import { siteConfig } from '../../data/siteConfig';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const platformLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خارطة الطريق', href: '/roadmap' },
    { name: 'دليل الأدوات', href: '/tools' },
    { name: 'الشهادات والاعتمادات', href: '/certifications' },
  ];

  const exploreLinks = [
    { name: 'من أنا (السيرة والخبرة)', href: '/about' },
    { name: 'البرمجة وتطوير الأدوات', href: '/programming' },
    { name: 'منصات التحدي والمختبرات', href: '/platforms' },
    { name: 'طلب استشارة وخدمة', href: '/contact' },
  ];

  return (
    <footer className="relative z-10 bg-slate-50/70 border-t border-slate-200 mt-20" dir="rtl">
      <Container size="xl">
        <div className="py-14 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-right">
            
            {/* 1. Brand Identity */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AmerCyberMark size="md" showTooltip={false} />
                <div>
                  <div className="font-black text-xl text-slate-950 font-arabic tracking-tight">{siteConfig.name}</div>
                  <div className="text-[11px] text-amber-700 font-bold font-mono tracking-wider">AMER JAMAL • CYBERSECURITY</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-arabic font-medium leading-relaxed">
                طالب هندسة تقنيات أمن سيبراني — أبحاث الثغرات، اختبار الاختراق، وتطوير الأدوات والحلول الدفاعية المتقدمة.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold font-arabic shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>متاح للمشاريع والتعاون التقني</span>
              </div>
            </div>

            {/* 2. Platform Links */}
            <div className="space-y-5">
              <h4 className="text-sm font-black text-slate-950 font-arabic tracking-wider uppercase border-b-2 border-amber-500 inline-block pb-1.5">
                المنصة
              </h4>
              <ul className="space-y-3">
                {platformLinks.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="group text-xs sm:text-sm text-slate-600 hover:text-amber-700 hover:translate-x-[-6px] transition-all font-bold flex items-center gap-2 w-fit"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Explore & Services */}
            <div className="space-y-5">
              <h4 className="text-sm font-black text-slate-950 font-arabic tracking-wider uppercase border-b-2 border-amber-500 inline-block pb-1.5">
                استكشف
              </h4>
              <ul className="space-y-3">
                {exploreLinks.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="group text-xs sm:text-sm text-slate-600 hover:text-amber-700 hover:translate-x-[-6px] transition-all font-bold flex items-center gap-2 w-fit"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Direct Contact Channels */}
            <div className="space-y-4">
              <h4 className="text-sm font-black text-slate-950 font-arabic tracking-wider uppercase border-b-2 border-amber-500 inline-block pb-1.5">
                قنوات التواصل
              </h4>
              <div className="space-y-2.5">
                <a 
                  href={siteConfig.socials.telegram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-sky-50/60 border border-slate-200 hover:border-sky-300 transition-all group text-right shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Send className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs font-black text-slate-900 font-arabic group-hover:text-sky-600 transition-colors">تيليجرام</div>
                      <div className="text-[11px] font-mono font-bold text-slate-500" dir="ltr">@a2m_8</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 transition-colors" />
                </a>

                <a 
                  href={siteConfig.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-rose-50/60 border border-slate-200 hover:border-rose-300 transition-all group text-right shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <InstagramIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs font-black text-slate-900 font-arabic group-hover:text-rose-600 transition-colors">إنستغرام</div>
                      <div className="text-[11px] font-mono font-bold text-slate-500" dir="ltr">@amerjamal.cyber</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600 transition-colors" />
                </a>

                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-amber-50/60 border border-slate-200 hover:border-amber-300 transition-all group text-right shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs font-black text-slate-900 font-arabic group-hover:text-amber-600 transition-colors">البريد الرسمي</div>
                      <div className="text-[11px] font-mono font-bold text-slate-500" dir="ltr">{siteConfig.email}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <span className="text-xs sm:text-sm text-slate-600 font-bold font-arabic">
            © {currentYear} {siteConfig.name}. جميع الحقوق محفوظة.
          </span>
          
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-black font-mono text-amber-700 tracking-[0.2em] px-3.5 py-1.5 bg-amber-50 rounded-full border border-amber-200/80 shadow-2xs">
              SECURE • PROTECT • DEFEND
            </span>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white hover:bg-amber-100 text-slate-600 hover:text-amber-700 border border-slate-200 transition-all cursor-pointer shadow-2xs"
              title="العودة إلى الأعلى"
              aria-label="العودة إلى الأعلى"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};


