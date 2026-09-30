import React from 'react';
import {
  Send,
  Mail,
  ExternalLink,
  Shield,
  Search,
  Lock,
  Code2,
  Wrench,
  Smartphone,
  ArrowLeft,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { InstagramIcon } from '../components/ui/Icons';
import { siteConfig } from '../data/siteConfig';
import { Container } from '../components/layout/Container';

const services = [
  {
    icon: Shield,
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-100 hover:border-red-300',
    title: 'فحص أمني',
    en: 'Security Audit',
    desc: 'اكتشاف نقاط الضعف والمشاكل الأمنية في المواقع والمنصات والتطبيقات.',
  },
  {
    icon: Search,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100 hover:border-blue-300',
    title: 'تحليل واستكشاف',
    en: 'Analysis & Recon',
    desc: 'تحليل الأنظمة والتطبيقات وتحديد الجوانب التي تحتاج إلى تحسين.',
  },
  {
    icon: Lock,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100 hover:border-amber-300',
    title: 'حماية وتأمين',
    en: 'Protection & Hardening',
    desc: 'تعزيز أمن المواقع والمنصات والتطبيقات وتقليل المخاطر الأمنية.',
  },
  {
    icon: Code2,
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100 hover:border-green-300',
    title: 'برمجة وتطوير',
    en: 'Development',
    desc: 'تطوير مواقع ومنصات وتطبيقات وحلول رقمية مخصصة حسب احتياجاتك.',
  },
  {
    icon: Wrench,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100 hover:border-purple-300',
    title: 'تطوير الأدوات',
    en: 'Tools Development',
    desc: 'إنشاء أدوات وحلول تقنية تساعد على إدارة وفحص وتحسين الأنظمة.',
  },
  {
    icon: Smartphone,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100 hover:border-sky-300',
    title: 'تطبيقات ومنصات',
    en: 'Apps & Platforms',
    desc: 'بناء حلول رقمية قابلة للتطوير تتناسب مع طبيعة نشاطك وأهدافك.',
  },
];

const highlights = [
  'تقرير مفصّل بالنتائج',
  'استشارة مجانية قبل البدء',
  'تسليم في الوقت المحدد',
  'دعم فني بعد التسليم',
];

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-[70px] sm:pt-20 pb-24" dir="rtl">
      <Container size="xl">

        {/* ══════════ HERO ══════════ */}
        <div className="text-center pt-10 mb-20">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-amber-200 shadow-sm">
            <Zap className="w-4 h-4" />
            خدمات تقنية متخصصة
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-950 font-arabic mb-6 leading-tight">
            اطلب <span className="text-amber-500">خدمتك</span> الآن
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-arabic font-medium leading-relaxed mb-10">
            حلول تقنية متكاملة لحماية وتطوير أعمالك — من الفحص الأمني وحتى البرمجة والتطوير الكامل.
          </p>

          {/* Highlights pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-1.5 bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-bold text-slate-700 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ PITCH — 2 COLS ══════════ */}
        <div className="grid md:grid-cols-2 gap-6 mb-6 items-stretch">

          {/* Security Pitch */}
          <div className="flex flex-col bg-white rounded-[2rem] p-8 md:p-10 border-2 border-slate-100 hover:border-red-200 hover:shadow-[0_24px_50px_rgba(220,38,38,0.08)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-red-400/5 rounded-full blur-3xl group-hover:bg-red-400/10 transition-all duration-500 pointer-events-none" />
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-xl text-xs font-mono font-bold mb-5 border border-red-100 w-fit">
              <Shield className="w-3.5 h-3.5 shrink-0" />
              Security Service
            </div>
            <h2 className="text-2xl font-black text-slate-950 font-arabic mb-4 leading-snug">
              لديك موقع إلكتروني أو منصة رقمية؟
            </h2>
            <p className="text-slate-600 font-arabic font-medium leading-loose text-base mb-6 flex-1">
              لا تنتظر ظهور المشاكل حتى تبدأ بمعالجتها. اطلب الآن خدمة{' '}
              <span className="inline-flex items-center gap-1 text-red-600 font-bold">
                <Shield className="w-4 h-4 inline shrink-0" /> الفحص والاستكشاف الأمني
              </span>{' '}
              لموقعك أو منصتك، لاكتشاف نقاط الضعف والثغرات والمشاكل الأمنية والعمل على معالجتها.
            </p>
            <div className="bg-red-50 border border-red-100 rounded-2xl px-5 py-4 text-sm text-red-700 font-arabic font-bold mt-auto">
              🛡️ اجعل موقعك أكثر أمانًا، وأكثر جاهزية للمستقبل.
            </div>
          </div>

          {/* Dev Pitch */}
          <div className="flex flex-col bg-white rounded-[2rem] p-8 md:p-10 border-2 border-slate-100 hover:border-green-200 hover:shadow-[0_24px_50px_rgba(22,163,74,0.08)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-green-400/5 rounded-full blur-3xl group-hover:bg-green-400/10 transition-all duration-500 pointer-events-none" />
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-xl text-xs font-mono font-bold mb-5 border border-green-100 w-fit">
              <Code2 className="w-3.5 h-3.5 shrink-0" />
              Development Service
            </div>
            <h2 className="text-2xl font-black text-slate-950 font-arabic mb-4 leading-snug">
              لديك شركة، مركز، متجر أو مشروع؟
            </h2>
            <p className="text-slate-600 font-arabic font-medium leading-loose text-base mb-6 flex-1">
              حوّل فكرتك إلى حل رقمي متكامل. يمكنك طلب{' '}
              <span className="inline-flex items-center gap-1 text-green-700 font-bold">
                <Code2 className="w-4 h-4 inline shrink-0" /> برمجة منصة إلكترونية أو تطبيق مخصص
              </span>{' '}
              لمشروعك، مصمم وفق احتياجاتك وطبيعة عملك، لمساعدتك على تطوير خدماتك والوصول إلى عملائك.
            </p>
            <div className="bg-green-50 border border-green-100 rounded-2xl px-5 py-4 text-sm text-green-700 font-arabic font-bold mt-auto">
              💻 في عصر التكنولوجيا — وجود حل رقمي يمنح مشروعك حضورًا أقوى.
            </div>
          </div>
        </div>

        {/* ══════════ SERVICES GRID ══════════ */}
        <div className="bg-slate-50 rounded-[2.5rem] border border-slate-200 p-8 md:p-12 mb-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-arabic mb-2">
              خدماتنا
            </h2>
            <p className="text-slate-500 font-arabic font-medium text-base">اختر الخدمة التي تناسب احتياجاتك</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.en}
                  className={`bg-white rounded-2xl p-5 border ${svc.border} hover:-translate-y-0.5 transition-all duration-200 group`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-11 h-11 rounded-xl ${svc.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 ${svc.color}`} />
                    </div>
                    {/* Text */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-black text-slate-900 font-arabic">{svc.title}</h3>
                        <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">{svc.en}</span>
                      </div>
                      <p className="text-sm text-slate-500 font-arabic font-medium leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════════ CONTACT CHANNELS ══════════ */}
        <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 md:p-12 mb-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-arabic mb-2">
              تواصل <span className="text-amber-500">معي مباشرةً</span>
            </h2>
            <p className="text-slate-500 font-arabic font-medium">أرسل طلبك عبر القناة الأنسب لك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Telegram */}
            <a href={siteConfig.socials.telegram} target="_blank" rel="noreferrer" className="group block">
              <div className="h-full bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(2,132,199,0.10)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-sky-500 font-bold uppercase tracking-widest">Telegram</p>
                    <h3 className="text-lg font-black text-slate-900 font-arabic leading-none">تيليجرام</h3>
                  </div>
                </div>
                <p className="text-xs font-mono text-slate-400 mb-3" dir="ltr">@a2m_8</p>
                <p className="text-sm text-slate-600 font-arabic font-medium leading-relaxed mb-5">
                  القناة الأسرع لإرسال طلبك والحصول على رد فوري ومباشر.
                </p>
                <div className="flex items-center gap-1.5 text-sky-600 text-sm font-bold pt-4 border-t border-slate-200 group-hover:border-sky-200 transition-colors">
                  <span>اطلب الخدمة</span>
                  <ArrowLeft className="h-4 w-4" />
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="group block">
              <div className="h-full bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-rose-300 hover:bg-rose-50/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(244,63,94,0.10)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-rose-500 font-bold uppercase tracking-widest">Instagram</p>
                    <h3 className="text-lg font-black text-slate-900 font-arabic leading-none">إنستغرام</h3>
                  </div>
                </div>
                <p className="text-xs font-mono text-slate-400 mb-3" dir="ltr">@amerjamal.cyber</p>
                <p className="text-sm text-slate-600 font-arabic font-medium leading-relaxed mb-5">
                  تواصل عبر DM أو تابع آخر التحديثات التقنية والأمنية.
                </p>
                <div className="flex items-center gap-1.5 text-rose-600 text-sm font-bold pt-4 border-t border-slate-200 group-hover:border-rose-200 transition-colors">
                  <span>تواصل الآن</span>
                  <ArrowLeft className="h-4 w-4" />
                </div>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${siteConfig.email}`} className="group block">
              <div className="h-full bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(245,158,11,0.10)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest">Email</p>
                    <h3 className="text-lg font-black text-slate-900 font-arabic leading-none">البريد الإلكتروني</h3>
                  </div>
                </div>
                <p className="text-xs font-mono text-slate-400 mb-3" dir="ltr">{siteConfig.email}</p>
                <p className="text-sm text-slate-600 font-arabic font-medium leading-relaxed mb-5">
                  للمراسلات المهنية وتفاصيل المشاريع الكبيرة والعروض التجارية.
                </p>
                <div className="flex items-center gap-1.5 text-amber-600 text-sm font-bold pt-4 border-t border-slate-200 group-hover:border-amber-200 transition-colors">
                  <span>إرسال بريد</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* ══════════ CTA BANNER ══════════ */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-950 px-8 py-16 text-center">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-1.5 rounded-full text-xs font-mono font-bold mb-8 border border-white/15">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              متاح الآن لاستقبال طلباتك
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white font-arabic mb-5 leading-tight">
              لا تنتظر المشكلة<br />
              <span className="text-amber-400">حتى تبدأ بالحل</span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg font-arabic font-medium mb-10 leading-relaxed">
              اطلب خدمتك الآن ودعنا نساعدك على بناء، فحص وتحسين مشروعك الرقمي بخطوات تقنية مدروسة.
            </p>

            <a
              href={siteConfig.socials.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-base px-10 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(245,158,11,0.45)] font-arabic"
            >
              <Send className="w-5 h-5" />
              اطلب الخدمة الآن
            </a>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default ContactPage;
