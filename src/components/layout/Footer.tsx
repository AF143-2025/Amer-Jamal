import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import { AmerCyberMark } from '../ui/AmerCyberMark';
import { siteConfig } from '../../data/siteConfig';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'دليل الأدوات', href: '/tools' },
    { name: 'خارطة الطريق', href: '/roadmap' },
    { name: 'الشهادات', href: '/certifications' },
  ];

  const moreLinks = [
    { name: 'من أنا', href: '/about' },
  ];

  return (
    <footer className="relative z-10 bg-white border-t border-slate-200 mt-20" dir="rtl">
      <Container size="xl">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-right">
            
            {/* Brand - Right side at bottom of page */}
            <div className="col-span-1 md:col-span-1 space-y-4">
              <div className="mb-3">
                <AmerCyberMark size="md" showTooltip={false} />
              </div>
              <div>
                <div className="font-black text-2xl text-slate-950 font-arabic tracking-tight">{siteConfig.name}</div>
                <div className="text-xs text-slate-500 font-bold font-mono tracking-widest mt-1 uppercase">{siteConfig.nameEnglish}</div>
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-xs font-arabic">
                طالب هندسة تقنيات أمن سيبراني — أبحاث الثغرات، اختبار الاختراق، وبناء الأدوات والحلول الدفاعية.
              </p>
            </div>

            {/* الأقسام */}
            <div className="space-y-6">
              <h4 className="text-sm font-black text-black font-arabic tracking-wider uppercase border-b-2 border-amber-500 inline-block pb-2">المنصة</h4>
              <ul className="space-y-4">
                {platformLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="group text-sm text-slate-600 hover:text-black hover:translate-x-[-8px] transition-all font-bold flex items-center gap-2 w-fit">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* المزيد */}
            <div className="space-y-6">
              <h4 className="text-sm font-black text-black font-arabic tracking-wider uppercase border-b-2 border-amber-500 inline-block pb-2">معلومات</h4>
              <ul className="space-y-4">
                {moreLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="group text-sm text-slate-600 hover:text-black hover:translate-x-[-8px] transition-all font-bold flex items-center gap-2 w-fit">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* تواصل */}
            <div className="space-y-6">
              <h4 className="text-sm font-black text-black font-arabic tracking-wider uppercase border-b-2 border-amber-500 inline-block pb-2">تواصل معي</h4>
              <ul className="space-y-4">
                <li>
                  <a href={siteConfig.socials.telegram} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-sm text-slate-600 hover:text-black transition-colors font-bold w-fit">
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-black flex items-center justify-center transition-colors">
                      <Send className="h-4 w-4 group-hover:text-amber-500 transition-colors" />
                    </span>
                    <span>Telegram</span>
                  </a>
                </li>
                <li>
                  <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-sm text-slate-600 hover:text-black transition-colors font-bold w-fit">
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-black flex items-center justify-center transition-colors">
                      <InstagramIcon className="h-4 w-4 group-hover:text-amber-500 transition-colors" />
                    </span>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="group inline-flex items-center gap-3 text-sm text-slate-600 hover:text-black transition-colors font-bold w-fit">
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-black flex items-center justify-center transition-colors">
                      <Mail className="h-4 w-4 group-hover:text-amber-500 transition-colors" />
                    </span>
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-black font-bold font-arabic">
            © {currentYear} {siteConfig.name}. جميع الحقوق محفوظة.
          </span>
          <span className="text-xs font-black font-mono text-amber-600 tracking-[0.2em] px-4 py-2 bg-amber-50 rounded-full border border-amber-200">
            SECURE • PROTECT • DEFEND
          </span>
        </div>
      </Container>
    </footer>
  );
};


