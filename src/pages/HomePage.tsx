import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Terminal, 
  Layers, 
  Network,
  Globe,
  Database,
  Search,
  Send,
  Mail,
  Crosshair,
  ShieldCheck,
  Briefcase,
  Activity,
  Cpu,
  Fingerprint,
  Target,
  Bug,
  Award,
  ChevronLeft,
  Sparkles,
  Zap,
  ExternalLink,
  CheckCircle2,
  Lock,
  Flame
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { toolsDirectoryData } from '../data/tools';
import { InstagramIcon } from '../components/ui/Icons';
import { InteractiveModal } from '../components/ui/InteractiveModal';
import { 
  AnimatedShieldIcon, 
  AnimatedTargetIcon, 
  AnimatedBugIcon, 
  AnimatedTerminalIcon 
} from '../components/ui/AnimatedCyberSpecializationIcons';

interface SpecializationDossier {
  id: string;
  title: string;
  shortTitle: string;
  enTitle: string;
  enSubtitle: string;
  badgeTheme: 'amber' | 'rose' | 'sky' | 'emerald';
  icon: React.ReactNode;
  overview: string;
  capabilities: {
    title: string;
    description: string;
    tag: string;
  }[];
  arsenal: string[];
  certifications: string[];
}

const specializationsData: SpecializationDossier[] = [
  {
    id: 'security-research',
    title: 'باحث أمني سيبراني',
    shortTitle: 'باحث أمني',
    enTitle: 'Security Research',
    enSubtitle: 'Cyber Threat Intelligence & Threat Hunting',
    badgeTheme: 'amber',
    icon: <AnimatedShieldIcon size={38} />,
    overview: 'أركز في هذا التخصص على تفكيك سلاسل الهجمات المتقدمة (APTs)، دراسة سلوك البرمجيات الخبيثة في البيئات المعزولة، واستخراج مؤشرات التهديد (IoCs & TTPs) لبناء مناعة سيبرانية استباقية تسد الثغرات قبل تحولها إلى اختراقات.',
    capabilities: [
      {
        title: 'تحليل وتتبع التهديدات المتقدمة (APT Tracking)',
        description: 'أقوم بتتبع ومطابقة سلوك مجموعات التهديد الدولية وفق إطار MITRE ATT&CK وبناء مصفوفات استهداف وقائية للمؤسسة.',
        tag: 'ATT&CK'
      },
      {
        title: 'الهندسة العكسية وتحليل البرمجيات الخبيثة',
        description: 'أشرح الملفات التنفيذية المشبوهة، وأفحص الذاكرة (Memory Forensics) لكشف آليات التخفي والتمويه البرمجي.',
        tag: 'REVERSE'
      },
      {
        title: 'الاستخبارات الأمنية وقواعد الرصد (CTI)',
        description: 'أستخرج مؤشرات الاختراق (IoCs) وأصيغ قواعد YARA و Sigma لتغذية أنظمة الـ SIEM/EDR للكشف الفوري.',
        tag: 'THREAT-INTEL'
      },
      {
        title: 'تقييم وإدارة مساحة الهجوم (ASM)',
        description: 'أجري مسحاً مستمراً للأصول الرقمية المعرضة للإنترنت لرصد أي تسريب للمعلومات الحساسة أو فجوات حماية المحيط.',
        tag: 'SURFACE'
      }
    ],
    arsenal: ['Ghidra', 'IDA Pro', 'YARA Rules', 'MISP Platform', 'Volatility', 'Wireshark', 'Sigma Rules', 'MITRE ATT&CK', 'Sysinternals'],
    certifications: ['CISSP', 'GCFA', 'GCTI', 'OSDA', 'GREM']
  },
  {
    id: 'red-team',
    title: 'محاكي تهديدات واختراق متقدم (Red Team)',
    shortTitle: 'Red Team',
    enTitle: 'Red Teaming',
    enSubtitle: 'Adversary Emulation & Offensive Operations',
    badgeTheme: 'rose',
    icon: <AnimatedTargetIcon size={38} />,
    overview: 'أقود عمليات محاكاة الخصوم المتقدمة واختبار متانة الدفاعات والأنظمة واقعياً، مع التركيز على تجاوز حساسات الـ EDR وتطوير آليات التخفي، واختبار حدود الأمان للشركات قبل أن يكتشفها المهاجم الحقيقي.',
    capabilities: [
      {
        title: 'محاكاة الخصوم الواقعية (Adversary Emulation)',
        description: 'أخطط وأنفذ سيناريوهات هجومية كاملة متطابقة مع تكتيكات المهاجمين لاختبار كفاءة وسرعة استجابة الفرق الدفاعية.',
        tag: 'OFFENSIVE'
      },
      {
        title: 'تجاوز أنظمة الكشف والحماية (EDR Evasion)',
        description: 'أطور آليات حقن الذاكرة (Process Injection)، تشفير وتغليف الحمولات، وتخطي دفاعات الكيرنل ومستشعرات الحماية.',
        tag: 'EVASION'
      },
      {
        title: 'اختراق البنية التحتية والـ Active Directory',
        description: 'أختبر متانة بروتوكولات Kerberos (Kerberoasting, DCSync)، وهجمات Pass-the-Hash، والتصعيد الجانبي للنطاق.',
        tag: 'AD-ATTACK'
      },
      {
        title: 'إدارة شبكات القيادة والسيطرة (C2 Ops)',
        description: 'أصمم وأدير بنى تحتية متعددة الطبقات للقيادة والسيطرة لضمان اتصالات مشفرة وخفية أثناء محاكاة الهجوم.',
        tag: 'C2-INFRA'
      }
    ],
    arsenal: ['Cobalt Strike', 'Sliver C2', 'BloodHound', 'Mimikatz', 'Metasploit', 'Burp Suite Pro', 'Impacket', 'Chisel', 'PowerView'],
    certifications: ['OSCP', 'CRTO', 'CRTP', 'OSEP', 'GXPN']
  },
  {
    id: 'vuln-network',
    title: 'محلل ثغرات أمنية وحماية الشبكات',
    shortTitle: 'محلل ثغرات',
    enTitle: 'Vuln Analysis',
    enSubtitle: 'Vulnerability Assessment & Network Defense',
    badgeTheme: 'sky',
    icon: <AnimatedBugIcon size={38} />,
    overview: 'أتولى الفحص والتدقيق العميق للبنى التحتية، تطبيقات الويب، والشبكات المؤسساتية، وتشخيص الثغرات المعمارية والبرمجية وفق مقاييس CVSS، وصياغة حلول هندسية جذرية ترفع حصانة المنظومة وتمنع استغلالها.',
    capabilities: [
      {
        title: 'فحص وتقييم الثغرات الشامل (VAPT)',
        description: 'أجري تدقيقاً أمنياً شاملاً لتطبيقات الويب (OWASP Top 10)، والـ APIs، والخوادم السحابية والشبكات الداخلية.',
        tag: 'VAPT'
      },
      {
        title: 'تحليل وتفكيك بروتوكولات الشبكة (Packet Forensics)',
        description: 'ألتقط وأفحص حركة المرور وحزم TCP/IP للكشف عن التسريبات، القنوات الخلفية، والاتصالات المشبوهة داخل الشبكة.',
        tag: 'PACKETS'
      },
      {
        title: 'التدقيق المعماري والإحكام الأمني (Hardening)',
        description: 'أطبق معايير Zero Trust، وأحكم إغلاق المنافذ، وتكوين الجدران النارية المتقدمة (NGFW/WAF).',
        tag: 'HARDENING'
      },
      {
        title: 'إدارة دورة حياة ومعالجة الثغرات',
        description: 'أقيّم خطورة الثغرات وفق معايير CVSS v3، وأشرف على صياغة خطط المعالجة والتحقق الصارم من سد المنافذ.',
        tag: 'CVSS'
      }
    ],
    arsenal: ['Nmap', 'Wireshark', 'Nessus', 'Burp Suite', 'Zeek', 'Snort / Suricata', 'OpenVAS', 'Nuclei', 'tcpdump'],
    certifications: ['CompTIA Security+', 'CCNA Security', 'eWPT', 'CEH Practical', 'BTL1']
  },
  {
    id: 'security-tooling',
    title: 'مطور أدوات',
    shortTitle: 'مطور أدوات',
    enTitle: 'Security Tooling',
    enSubtitle: 'Custom Tooling & Security Automation (DevSecOps)',
    badgeTheme: 'emerald',
    icon: <AnimatedTerminalIcon size={38} />,
    overview: 'أقوم ببرمجة وبناء أدوات أمنية وسكريبتات متخصصة فائقة السرعة بلغات Python و Go و Bash، وأتمتة مهام الفحص والاستجابة للحوادث (SOAR)، مع دمج بوابات الأمان الصارمة في دورة حياة تطوير البرمجيات السحابية (DevSecOps).',
    capabilities: [
      {
        title: 'برمجة أدوات استطلاع وفحص مخصصة',
        description: 'أطور أدوات وسكريبتات عالية السرعة والأداء بلغات Python و Go و Rust لأتمتة المهام الأمنية الحساسة وجمع البيانات.',
        tag: 'CUSTOM-TOOLS'
      },
      {
        title: 'أتمتة الاستجابة الأمنية (SOAR Workflows)',
        description: 'أبرمج سيناريوهات الاستجابة التلقائية للتنبيهات لعزل الأنظمة المصابة وحظر عناوين التهديد فورياً.',
        tag: 'AUTOMATION'
      },
      {
        title: 'تأمين دورة تطوير البرمجيات (DevSecOps)',
        description: 'أدمج أدوات SAST/DAST وفحص الحاويات والمكتبات البرمجية داخل خطوط الـ CI/CD Pipelines.',
        tag: 'PIPELINE'
      },
      {
        title: 'تطوير مآثر أمنية مخصصة (Exploit Dev & PoCs)',
        description: 'أكتب شيفرات إثبات مفهوم برمجية (PoC) لاختبار حدود حماية التطبيقات وتجاوز التحديات المعقدة.',
        tag: 'EXPLOIT-DEV'
      }
    ],
    arsenal: ['Python', 'Go', 'Rust', 'Bash Scripting', 'Docker', 'GitLab CI', 'SonarQube', 'Trivy', 'FastAPI'],
    certifications: ['DevSecOps Professional', 'CKS (Kubernetes Security)', 'eCDFP', 'eCXD']
  }
];

export const HomePage: React.FC = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<SpecializationDossier | null>(null);

  return (
    <div className="bg-transparent text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION (GOLDEN CENTERED) */}
      <section id="home" className="min-h-[85vh] flex items-center justify-center relative pt-[70px] sm:pt-20 pb-12 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-5 shadow-sm" dir="ltr">
            <Shield className="h-4 w-4 text-amber-600" />
            <span className="text-amber-700 text-xs sm:text-sm font-bold tracking-wide">Amer Jamal — Security Research & Engineering</span>
          </div>
          
          <h1 className="text-[3.375rem] md:text-[5.25rem] font-black text-slate-950 font-arabic leading-none mb-6">
            عامر جمال
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-6 leading-relaxed font-medium font-arabic">
            أستكشف أعماق الأنظمة والبروتوكولات، أختبر حدودها، أكشف الثغرات من جذورها، وأحوّل الاكتشافات الأمنية إلى أدوات وحلول دفاعية تبني بيئات رقمية أكثر صلابة ومرونة.
          </p>

          {/* Core Cyber Pillars Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-sm mb-8 sm:mb-12 max-w-3xl mx-auto select-none" dir="ltr">
            <span className="text-[11px] sm:text-[13px] font-mono font-bold text-[#D97706] hover:scale-105 transition-transform cursor-default">
              Research
            </span>
            <span className="text-slate-300 font-bold text-base">•</span>
            <span className="text-[11px] sm:text-[13px] font-mono font-bold text-[#DC2626] hover:scale-105 transition-transform cursor-default">
              Offensive Security
            </span>
            <span className="text-slate-300 font-bold text-base">•</span>
            <span className="text-[11px] sm:text-[13px] font-mono font-bold text-[#0284C7] hover:scale-105 transition-transform cursor-default">
              Vulnerability Research
            </span>
            <span className="text-slate-300 font-bold text-base">•</span>
            <span className="text-[11px] sm:text-[13px] font-mono font-bold text-[#16A34A] hover:scale-105 transition-transform cursor-default">
              Security Tools
            </span>
          </div>

          {/* Interactive Cybersecurity Specialization Cards (Horizontal Layout for Mobile & Desktop) */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-16 relative z-10 px-1 sm:px-0" dir="rtl">
            {specializationsData.map((spec) => (
              <div 
                key={spec.id}
                onClick={() => setSelectedSpecialization(spec)}
                role="button"
                tabIndex={0}
                aria-label={`استعراض ملف ${spec.title}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelectedSpecialization(spec); } }}
                className={`group bg-white/85 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-1.5 sm:p-4 border-2 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden cursor-pointer flex flex-col items-center justify-between text-center active:scale-95 shadow-xs select-none touch-manipulation min-h-[120px] sm:min-h-[175px] ${
                  spec.badgeTheme === 'amber' ? 'border-slate-200/90 hover:border-[#D97706] hover:bg-white hover:shadow-[0_20px_40px_rgba(217,119,6,0.22)] active:border-[#D97706]' :
                  spec.badgeTheme === 'rose' ? 'border-slate-200/90 hover:border-[#DC2626] hover:bg-white hover:shadow-[0_20px_40px_rgba(220,38,38,0.22)] active:border-[#DC2626]' :
                  spec.badgeTheme === 'sky' ? 'border-slate-200/90 hover:border-[#0284C7] hover:bg-white hover:shadow-[0_20px_40px_rgba(2,132,199,0.22)] active:border-[#0284C7]' :
                  'border-slate-200/90 hover:border-[#16A34A] hover:bg-white hover:shadow-[0_20px_40px_rgba(22,163,74,0.22)] active:border-[#16A34A]'
                }`}
              >
                <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full blur-2xl transition-all duration-500 ${
                  spec.badgeTheme === 'amber' ? 'bg-[#D97706]/10 group-hover:bg-[#D97706]/25' :
                  spec.badgeTheme === 'rose' ? 'bg-[#DC2626]/10 group-hover:bg-[#DC2626]/25' :
                  spec.badgeTheme === 'sky' ? 'bg-[#0284C7]/10 group-hover:bg-[#0284C7]/25' :
                  'bg-[#16A34A]/10 group-hover:bg-[#16A34A]/25'
                }`} />

                <div className={`w-11 h-11 sm:w-15 sm:h-15 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs ${
                  spec.badgeTheme === 'amber' ? 'bg-[#D97706]/10 border border-[#D97706]/30 shadow-[#D97706]/10 group-hover:bg-[#D97706]/20' :
                  spec.badgeTheme === 'rose' ? 'bg-[#DC2626]/10 border border-[#DC2626]/30 shadow-[#DC2626]/10 group-hover:bg-[#DC2626]/20' :
                  spec.badgeTheme === 'sky' ? 'bg-[#0284C7]/10 border border-[#0284C7]/30 shadow-[#0284C7]/10 group-hover:bg-[#0284C7]/20' :
                  'bg-[#16A34A]/10 border border-[#16A34A]/30 shadow-[#16A34A]/10 group-hover:bg-[#16A34A]/20'
                }`}>
                  {spec.icon}
                </div>

                <div className="w-full mt-1 sm:mt-2">
                  <div className="text-[10.5px] xs:text-xs sm:text-sm md:text-base font-black text-slate-800 font-arabic group-hover:text-black transition-colors leading-tight min-h-[26px] sm:min-h-[32px] flex items-center justify-center text-center">
                    {spec.shortTitle}
                  </div>

                  <div className={`text-[7.5px] sm:text-[10px] font-mono text-slate-400 mt-0.5 sm:mt-1 uppercase tracking-wider transition-colors truncate ${
                    spec.badgeTheme === 'amber' ? 'group-hover:text-[#D97706] font-semibold' :
                    spec.badgeTheme === 'rose' ? 'group-hover:text-[#DC2626] font-semibold' :
                    spec.badgeTheme === 'sky' ? 'group-hover:text-[#0284C7] font-semibold' :
                    'group-hover:text-[#16A34A] font-semibold'
                  }`}>
                    {spec.enTitle}
                  </div>
                </div>

                <div className="mt-1 sm:mt-2.5 flex items-center justify-center gap-1 transition-all duration-300">
                  <span className={`w-1.5 h-1.5 rounded-full animate-ping ${
                    spec.badgeTheme === 'amber' ? 'bg-[#D97706]' :
                    spec.badgeTheme === 'rose' ? 'bg-[#DC2626]' :
                    spec.badgeTheme === 'sky' ? 'bg-[#0284C7]' :
                    'bg-[#16A34A]'
                  }`} />
                  <span className={`text-[9px] sm:text-[11px] font-bold font-arabic transition-colors ${
                    spec.badgeTheme === 'amber' ? 'text-[#D97706]' :
                    spec.badgeTheme === 'rose' ? 'text-[#DC2626]' :
                    spec.badgeTheme === 'sky' ? 'text-[#0284C7]' :
                    'text-[#16A34A]'
                  }`}>
                    <span className="sm:hidden">استكشف ملفي</span>
                    <span className="hidden sm:inline">استكشف ملفي ⚡</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/roadmap" className="px-8 py-3.5 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition shadow-lg hover:shadow-amber-600/30 font-arabic flex items-center gap-2"><Terminal className="h-5 w-5" /> ابدأ الآن </Link>
            <Link to="/tools" className="px-8 py-3.5 bg-white text-amber-700 border border-amber-200 rounded-xl font-bold hover:bg-amber-50 transition shadow-sm font-arabic flex items-center gap-2">
              دليل الأدوات
              <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

        </div>
      </section>

            {/* 2. ABOUT PREVIEW SECTION */}
      <section id="about" className="py-24 px-6 bg-transparent relative z-10" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            
                        <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-12 sm:mb-16" />

            <h2 id="about-heading" className="text-4xl md:text-6xl font-black mb-6 text-black font-arabic tracking-tight">
              الفرق <span className="text-amber-600">السيبرانية</span>
            </h2>
            <p className="text-black max-w-2xl mx-auto text-xl font-bold leading-relaxed">
              تكامل استراتيجي بين الدفاع السيبراني، الهجوم الاستباقي، والتحليل المشترك لتعزيز الحصانة الرقمية.
            </p>
          </div>
          
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* BLUE TEAM CARD */}
            <article className="group bg-white rounded-[2rem] p-8 border-2 border-slate-200 hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] relative overflow-hidden text-center">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
              <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-slate-100 text-slate-900 border border-slate-200 text-xs font-bold shadow-sm tracking-widest font-mono">BLUE TEAM</div>
              
              <div className="w-20 h-20 mx-auto flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 relative z-10">
                <ShieldCheck size={64} className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-4xl font-black mb-4 text-black font-mono uppercase tracking-tighter">Blue Team</h3>
              
              <div className="bg-slate-50 p-5 rounded-2xl mb-6 border border-slate-100">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-bold mb-3">التحليل الأمني</div>
                <p className="text-black font-medium leading-relaxed text-sm">
                  فريق متخصص في الدفاع السيبراني، يركز على تصميم المعمارية الأمنية، مراقبة الشبكات، وصد الهجمات في الوقت الفعلي.
                </p>
              </div>
              
              <ul className="space-y-3 text-sm text-black font-bold mb-8 inline-block text-right">
                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-600 ml-3" /> مراكز العمليات (SOC)</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-600 ml-3" /> الاستجابة للحوادث</li>
              </ul>
              
              <Link to="/certifications" className="block text-center px-6 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-md">
                الشهادات الخاصة بالفريق
              </Link>
            </article>

            {/* RED TEAM CARD */}
            <article className="group bg-white rounded-[2rem] p-8 border-2 border-slate-200 hover:border-amber-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)] relative overflow-hidden text-center md:-translate-y-4 shadow-xl">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
              <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black text-amber-500 text-xs font-bold shadow-md tracking-widest font-mono">RED TEAM</div>
              
              <div className="w-20 h-20 mx-auto flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 relative z-10">
                <Crosshair size={64} className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-4xl font-black mb-4 text-black font-mono uppercase tracking-tighter">Red Team</h3>
              
              <div className="bg-red-50 p-5 rounded-2xl mb-6 border border-red-100">
                <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-lg text-sm font-bold mb-3">الهجوم الاستباقي</div>
                <p className="text-black font-medium leading-relaxed text-sm">
                  فريق متخصص في الهجوم الاستباقي، يقوم بمحاكاة تكتيكات المهاجمين لاختبار متانة الأنظمة وكشف الثغرات قبل استغلالها.
                </p>
              </div>
              
              <ul className="space-y-3 text-sm text-black font-bold mb-8 inline-block text-right">
                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-600 ml-3 animate-pulse" /> فحص الثغرات (VAPT)</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-600 ml-3 animate-pulse" /> الهندسة الاجتماعية</li>
              </ul>
              
              <Link to="/certifications" className="block text-center px-6 py-4 bg-black text-white rounded-xl font-bold hover:bg-amber-600 hover:text-black transition-all shadow-md">
                الشهادات الخاصة بالفريق
              </Link>
            </article>

            {/* PURPLE TEAM CARD */}
            <article className="group bg-white rounded-[2rem] p-8 border-2 border-slate-200 hover:border-purple-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] relative overflow-hidden text-center">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />
              <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black text-purple-400 text-xs font-bold shadow-md tracking-widest font-mono">PURPLE TEAM</div>
              
              <div className="w-20 h-20 mx-auto flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 relative z-10">
                <Briefcase size={64} className="text-purple-600 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-4xl font-black mb-4 text-black font-mono uppercase tracking-tighter">Purple Team</h3>
              
              <div className="bg-purple-50 p-5 rounded-2xl mb-6 border border-purple-100">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-lg text-sm font-bold mb-3">هجوم ودفاع مدمج</div>
                <p className="text-black font-medium leading-relaxed text-sm">
                  فريق يدمج بين الرؤية الهجومية والدفاعية، ويعمل كحلقة وصل لتقديم تقييم أمني شامل يرفع من نضج المنظومة.
                </p>
              </div>
              
              <ul className="space-y-3 text-sm text-black font-bold mb-8 inline-block text-right">
                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-600 ml-3" /> تقييم النضج الأمني</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-600 ml-3" /> محاكاة التهديدات</li>
              </ul>
              
              <Link to="/certifications" className="block text-center px-6 py-4 bg-purple-900 text-white rounded-xl font-bold hover:bg-purple-600 transition-all shadow-md">
                الشهادات الخاصة بالفريق
              </Link>
            </article>
          </div>
</div>
      </section>{/* 3. FEATURED TOOLS SECTION */}
      <section className="py-24 px-6 bg-transparent relative z-10" aria-labelledby="tools-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            
                        <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-12 sm:mb-16" />

            <h2 id="tools-heading" className="text-4xl md:text-6xl font-black mb-6 text-black font-arabic tracking-tight">
              أدوات <span className="text-amber-600">الاحتراف</span>
            </h2>
            <p className="text-black max-w-xl mx-auto text-lg font-bold">
              أهم الأدوات التي يجب على الباحثين الأمنيين إتقانها في مجال السايبر
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Tool 1 */}
            <Link to="/tools" className="group relative bg-white rounded-3xl p-8 text-center border-2 border-slate-200 hover:border-amber-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                  
                  <Activity size={64} className="text-teal-600 drop-shadow-[0_0_15px_rgba(13,148,136,0.5)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-black text-black font-arabic text-2xl mb-3">تحليل الشبكات</h3>
                <p className="text-sm text-black font-bold font-mono tracking-wide bg-amber-50 inline-block px-3 py-1 rounded-lg border border-amber-100">Wazuh, Suricata, Zeek</p>
              </div>
            </Link>

            {/* Tool 2 */}
            <Link to="/tools" className="group relative bg-white rounded-3xl p-8 text-center border-2 border-slate-200 hover:border-slate-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,23,42,0.15)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900/5 rounded-full blur-3xl group-hover:bg-slate-900/10 transition-all" />
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                  
                  <Globe size={64} className="text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-black text-black font-arabic text-2xl mb-3">فحص الويب</h3>
                <p className="text-sm text-black font-bold font-mono tracking-wide bg-slate-100 inline-block px-3 py-1 rounded-lg border border-slate-200">Burp Suite, SQLMap, ZAP</p>
              </div>
            </Link>

            {/* Tool 3 */}
            <Link to="/tools" className="group relative bg-white rounded-3xl p-8 text-center border-2 border-slate-200 hover:border-amber-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                   
                  <Terminal size={64} className="text-rose-600 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-black text-black font-arabic text-2xl mb-3">اختراق الأنظمة</h3>
                <p className="text-sm text-black font-bold font-mono tracking-wide bg-amber-50 inline-block px-3 py-1 rounded-lg border border-amber-100">Metasploit, GDB, AFL++</p>
              </div>
            </Link>

            {/* Tool 4 */}
            <Link to="/tools" className="group relative bg-white rounded-3xl p-8 text-center border-2 border-slate-200 hover:border-slate-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,23,42,0.15)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900/5 rounded-full blur-3xl group-hover:bg-slate-900/10 transition-all" />
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                  
                  <Fingerprint size={64} className="text-purple-600 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)] relative z-10" strokeWidth={1.5} />
                </div>
                <h3 className="font-black text-black font-arabic text-2xl mb-3">الاستخبارات OSINT</h3>
                <p className="text-sm text-black font-bold font-mono tracking-wide bg-slate-100 inline-block px-3 py-1 rounded-lg border border-slate-200">Maltego, Sherlock, Recon-ng</p>
              </div>
            </Link>

          </div>

          <div className="text-center">
            <Link to="/tools" className="inline-flex items-center gap-3 px-10 py-4 bg-black text-white rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
              تصفح دليل الأدوات الشامل ({toolsDirectoryData.length})
              <svg className="w-6 h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-12 sm:mb-16" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-4 shadow-2xs">
            <Send className="h-4 w-4 text-amber-600" />
            <span className="text-amber-700 text-xs sm:text-sm font-bold font-arabic">تواصل معي — قنوات الاتصال المباشر</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 text-slate-950 font-arabic tracking-tight">
            تواصل <span className="text-amber-600">معي</span>
          </h2>
          
          <p className="text-slate-600 mb-10 sm:mb-14 font-medium max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-arabic">
            للنقاشات التقنية، الاستشارات الأمنية، الإبلاغ المسؤول عن الثغرات، أو طلب الخدمات والمشاريع السيبرانية المتخصصة. يتم التعامل مع كافة المراسلات بسرية وموثوقية عالية.
          </p>

          {/* Main Contact Container Rectangle */}
          <div className="max-w-xl mx-auto bg-white rounded-[2.5rem] p-6 sm:p-9 border-2 border-slate-200 shadow-xl relative overflow-hidden mb-12 sm:mb-16" dir="rtl">
            {/* Top Interactive Personal Cybersecurity Circular Icon */}
            <div className="relative group/emblem flex justify-center mb-4 cursor-pointer">
              {/* Ambient Glow */}
              <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-sky-500/20 blur-xl opacity-75 group-hover/emblem:opacity-100 group-hover/emblem:scale-125 transition-all duration-500 pointer-events-none" />
              
              {/* Outer Circular Ring with Cyber Shield & Core */}
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-slate-900 via-slate-950 to-black p-1 shadow-xl border-2 border-amber-500/40 group-hover/emblem:border-amber-400 group-hover/emblem:shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all duration-500 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/15 to-transparent animate-pulse pointer-events-none" />
                <Shield className="w-9 h-9 text-amber-500 relative z-10 transition-transform duration-300 group-hover/emblem:scale-110" />
                <Lock className="w-3.5 h-3.5 text-amber-300 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover/emblem:scale-125" />
              </div>
            </div>

            {/* Name & Specialization */}
            <div className="text-center mb-7">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-arabic tracking-tight mb-1.5">
                عامر جمال
              </h3>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs sm:text-sm font-bold font-arabic shadow-2xs">
                <span>باحث أمني ومختبر اختراق</span>
                <span className="text-slate-300 font-bold">•</span>
                <span className="font-mono text-[11px] tracking-wide text-amber-800">Security Research & Pentesting</span>
              </div>
            </div>

            {/* Three Inner Rectangles: Telegram -> Instagram -> Email */}
            <div className="space-y-3.5">
              
              {/* 1. Telegram Rectangle */}
              <a
                href={siteConfig.socials.telegram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border-2 border-slate-200/90 hover:border-sky-500 hover:bg-sky-50/40 hover:-translate-y-0.5 transition-all duration-200 group text-right"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-950 font-arabic group-hover:text-sky-600 transition-colors">تيليجرام</div>
                    <div className="text-xs font-mono font-bold text-slate-500" dir="ltr">@a2m_8</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-sky-600 flex items-center gap-1 font-arabic">
                  <span>فتح المحادثة</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* 2. Instagram Rectangle */}
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border-2 border-slate-200/90 hover:border-rose-500 hover:bg-rose-50/40 hover:-translate-y-0.5 transition-all duration-200 group text-right"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-950 font-arabic group-hover:text-rose-600 transition-colors">إنستغرام</div>
                    <div className="text-xs font-mono font-bold text-slate-500" dir="ltr">@amerjamal.cyber</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-rose-600 flex items-center gap-1 font-arabic">
                  <span>زيارة الحساب</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* 3. Email Rectangle */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border-2 border-slate-200/90 hover:border-amber-500 hover:bg-amber-50/40 hover:-translate-y-0.5 transition-all duration-200 group text-right"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-950 font-arabic group-hover:text-amber-600 transition-colors">البريد الإلكتروني</div>
                    <div className="text-xs font-mono font-bold text-slate-500" dir="ltr">{siteConfig.email}</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-amber-600 flex items-center gap-1 font-arabic">
                  <span>إرسال بريد</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

            </div>
          </div>



        </div>
      </section>

      {/* Cybersecurity Specialization Dossier Modal */}
      {selectedSpecialization && (
        <InteractiveModal
          isOpen={!!selectedSpecialization}
          onClose={() => setSelectedSpecialization(null)}
          maxWidth="2xl"
          badge={
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wider font-arabic ${
                selectedSpecialization.badgeTheme === 'amber' ? 'bg-[#D97706]/15 text-[#D97706] border border-[#D97706]/30' :
                selectedSpecialization.badgeTheme === 'rose' ? 'bg-[#DC2626]/15 text-[#DC2626] border border-[#DC2626]/30' :
                selectedSpecialization.badgeTheme === 'sky' ? 'bg-[#0284C7]/15 text-[#0284C7] border border-[#0284C7]/30' :
                'bg-[#16A34A]/15 text-[#16A34A] border border-[#16A34A]/30'
              }`}>
                تخصص أمني
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-white text-[10px] font-bold font-arabic shadow-xs">
                مهارات: عامر جمال
              </span>
            </div>
          }
          title={selectedSpecialization.title}
          subtitle={selectedSpecialization.enSubtitle}
          icon={
            <div className={`p-2 rounded-xl ${
              selectedSpecialization.badgeTheme === 'amber' ? 'bg-[#D97706]/10 text-[#D97706]' :
              selectedSpecialization.badgeTheme === 'rose' ? 'bg-[#DC2626]/10 text-[#DC2626]' :
              selectedSpecialization.badgeTheme === 'sky' ? 'bg-[#0284C7]/10 text-[#0284C7]' :
              'bg-[#16A34A]/10 text-[#16A34A]'
            }`}>
              {selectedSpecialization.icon}
            </div>
          }
        >
          {/* 1. نبذة عن خبرتي ومسؤولياتي */}
          <div className={`border rounded-2xl p-4 sm:p-5 text-right ${
            selectedSpecialization.badgeTheme === 'amber' ? 'bg-amber-50/50 border-amber-200/80' :
            selectedSpecialization.badgeTheme === 'rose' ? 'bg-rose-50/50 border-rose-200/80' :
            selectedSpecialization.badgeTheme === 'sky' ? 'bg-sky-50/50 border-sky-200/80' :
            'bg-emerald-50/50 border-emerald-200/80'
          }`}>
            <div className="flex items-center gap-2 mb-2 text-slate-900 font-black font-arabic text-sm">
              <span className={`w-2.5 h-2.5 rounded-full ${
                selectedSpecialization.badgeTheme === 'amber' ? 'bg-[#D97706]' :
                selectedSpecialization.badgeTheme === 'rose' ? 'bg-[#DC2626]' :
                selectedSpecialization.badgeTheme === 'sky' ? 'bg-[#0284C7]' :
                'bg-[#16A34A]'
              }`} />
              <span>نبذة عن خبرتي ودوري في هذا التخصص</span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed font-medium font-arabic">
              {selectedSpecialization.overview}
            </p>
          </div>

          {/* 2. المهارات والقدرات التقنية */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-black uppercase tracking-wider text-slate-800 font-arabic flex items-center gap-2">
                <Activity className={`w-4 h-4 ${
                  selectedSpecialization.badgeTheme === 'amber' ? 'text-[#D97706]' :
                  selectedSpecialization.badgeTheme === 'rose' ? 'text-[#DC2626]' :
                  selectedSpecialization.badgeTheme === 'sky' ? 'text-[#0284C7]' :
                  'text-[#16A34A]'
                }`} />
                <span>المهارات والقدرات التقنية التي أتقنها</span>
              </div>
              <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-arabic">
                4 مجالات أساسية
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-right">
              {selectedSpecialization.capabilities.map((cap, i) => (
                <div 
                  key={i} 
                  className={`p-3.5 bg-white rounded-xl border transition-all ${
                    selectedSpecialization.badgeTheme === 'amber' ? 'border-amber-100 hover:border-[#D97706] hover:shadow-xs' :
                    selectedSpecialization.badgeTheme === 'rose' ? 'border-rose-100 hover:border-[#DC2626] hover:shadow-xs' :
                    selectedSpecialization.badgeTheme === 'sky' ? 'border-sky-100 hover:border-[#0284C7] hover:shadow-xs' :
                    'border-emerald-100 hover:border-[#16A34A] hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-slate-900 font-arabic flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        selectedSpecialization.badgeTheme === 'amber' ? 'bg-[#D97706]' :
                        selectedSpecialization.badgeTheme === 'rose' ? 'bg-[#DC2626]' :
                        selectedSpecialization.badgeTheme === 'sky' ? 'bg-[#0284C7]' :
                        'bg-[#16A34A]'
                      }`} />
                      {cap.title}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0 font-bold">
                      {cap.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-arabic">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </InteractiveModal>
      )}
    </div>

  );
};












