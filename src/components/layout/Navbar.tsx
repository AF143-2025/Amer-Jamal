import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronLeft,
  Search,
  Home,
  User,
  Terminal,
  Code2,
  Compass,
  Award,
  Layers,
  Send
} from 'lucide-react';
import { Container } from './Container';
import { AmerCyberMark } from '../ui/AmerCyberMark';

export const Navbar: React.FC<{ onOpenCommandPalette?: () => void }> = ({ onOpenCommandPalette }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when full-screen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (path.startsWith('/#')) return location.pathname === '/' && location.hash === path.substring(1);
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('/#')) {
      const hash = href.substring(2);
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${hash}`);
        }
      }
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'الرئيسية', href: '/', icon: Home, desc: 'الصفحة الرئيسية للمنصة' },
    { name: 'من أنا', href: '/about', icon: User, desc: 'الملف التعريفي والخبرات' },
    { name: 'خارطة الطريق', href: '/roadmap', icon: Compass, desc: 'مسارات التعلم والتخصص' },
    { name: 'البرمجة', href: '/programming', icon: Code2, desc: 'تطوير الأدوات والسكربتات' },
    { name: 'دليل الأدوات', href: '/tools', icon: Terminal, desc: 'ترسانة الفحص والتحليل' },
    { name: 'المنصات', href: '/platforms', icon: Layers, desc: 'منصات التحدي والمختبرات' },
    { name: 'الشهادات', href: '/certifications', icon: Award, desc: 'الاعتمادات الدولية' },
    { name: 'اطلب خدمة', href: '/contact', icon: Send, desc: 'طلب خدمات واستشارات سيبرانية' }
  ];

  return (
    <header 
      dir="rtl"
      style={{ fontFamily: "'Cairo', sans-serif" }}
      className="sticky top-0 -mb-14 sm:-mb-16 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 transition-colors duration-200"
    >
      <Container size="xl">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          
          {/* Brand - Right side in RTL with Professional Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0 select-none">
            <AmerCyberMark size="sm" showTooltip={false} />
            <div className="flex flex-col text-right leading-none">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-[17px] sm:text-[20px] text-slate-950 font-arabic tracking-tight group-hover:text-amber-600 transition-colors">
                  عامر جمال
                </span>
                <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 text-[9px] font-mono font-bold border border-amber-500/25 tracking-wider hidden xs:inline-block">
                  SEC_OPS
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono tracking-wider font-bold group-hover:text-slate-800 transition-colors uppercase">
                  SECURITY RESEARCH
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop & Tablet Nav - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-7 flex-1 px-3">
            {navLinks.map(link => {
              const isCurrent = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  style={{ 
                    fontFamily: "'Cairo', sans-serif", 
                    fontWeight: isCurrent ? 600 : 500 
                  }}
                  className={`text-[14px] xl:text-[15px] transition-colors duration-200 whitespace-nowrap ${
                    isCurrent 
                      ? 'text-amber-600 font-semibold' 
                      : 'text-slate-700 hover:text-amber-600 font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Controls - Left side in RTL */}
          <div className="flex items-center justify-end gap-2 flex-shrink-0">
            {/* Search Button */}
            <button 
              onClick={onOpenCommandPalette}
              style={{ fontFamily: "'Cairo', sans-serif" }}
              className="px-2.5 py-1.5 text-slate-600 hover:text-amber-600 hover:bg-amber-50/70 rounded-lg transition-colors duration-200 flex items-center gap-1.5 text-sm font-medium cursor-pointer"
              aria-label="Search"
            >
              <Search size={18} />
              <span className="hidden sm:inline font-medium">البحث</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-slate-700 hover:text-amber-600 hover:bg-slate-100 rounded-xl transition-colors duration-200 cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="فتح القائمة الرئيسية"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </Container>

      {/* Full-Screen Mobile Menu Portal */}
      {typeof document !== 'undefined' && createPortal(
        mobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 z-[99999] bg-white flex flex-col overflow-hidden animate-in fade-in duration-200"
            dir="rtl"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {/* Full-Screen Menu Header */}
            <div className="flex h-16 items-center justify-between px-5 border-b border-slate-100 shrink-0 bg-white">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <AmerCyberMark size="sm" showTooltip={false} />
                <div className="flex flex-col text-right leading-none">
                  <span className="font-black text-lg text-slate-950 font-arabic tracking-tight">
                    عامر جمال
                  </span>
                  <span className="text-[10px] text-amber-600 font-mono font-bold tracking-wider mt-1 uppercase">
                    SECURITY RESEARCH
                  </span>
                </div>
              </Link>

              {/* Close Button */}
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-rose-600 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
                aria-label="إغلاق القائمة"
              >
                <X size={22} />
              </button>
            </div>

            {/* Quick Search Action */}
            <div className="px-5 pt-3 pb-2 shrink-0">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette?.();
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200 text-slate-600 hover:text-amber-700 transition-all font-arabic text-sm shadow-xs cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Search size={16} className="text-amber-600" />
                  <span className="text-xs font-semibold">بحث سريع في المنصة...</span>
                </div>
                <kbd className="px-2 py-0.5 rounded bg-white text-slate-400 text-[10px] font-mono border border-slate-200">
                  بحث ⌘
                </kbd>
              </button>
            </div>

            {/* Navigation Links - Full Screen Scrollable */}
            <nav className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto">
              {navLinks.map((link) => {
                const isCurrent = isActive(link.href);
                const IconComp = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl transition-all duration-200 active:scale-98 ${
                      isCurrent
                        ? 'bg-amber-500/10 text-amber-700 border border-amber-500/30 shadow-xs'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-amber-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isCurrent 
                          ? 'bg-amber-500 text-white shadow-xs shadow-amber-500/30' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        <IconComp size={18} />
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-sm font-bold font-arabic leading-tight">{link.name}</span>
                        <span className="text-[10px] text-slate-400 font-arabic mt-0.5">{link.desc}</span>
                      </div>
                    </div>

                    <ChevronLeft className={`h-4 w-4 transition-transform ${
                      isCurrent ? 'text-amber-600 -translate-x-1' : 'text-slate-300'
                    }`} />
                  </Link>
                );
              })}
            </nav>

          </div>
        ),
        document.body
      )}
    </header>
  );
};


