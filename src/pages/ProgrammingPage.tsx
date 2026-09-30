import React from 'react';
import { 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Zap, 
  Shield, 
  Code, 
  Binary, 
  Globe, 
  Database 
} from 'lucide-react';
import { Container } from '../components/layout/Container';

export const ProgrammingPage: React.FC = () => {
  const languages = [
    {
      name: "Python",
      role: "أتمتة العمليات وصناعة أدوات الاختراق",
      badge: "أتمتة وسكربتات",
      description: "اللغة الأكثر استخداماً وشعبية في الأمن السيبراني لكتابة أدوات الفحص، سحب وتحليل البيانات، التعامل مع حزم الشبكة، وتطوير استغلال الثغرات البرمجية.",
      tags: ["Scapy", "Requests", "Pwntools", "Impacket"],
      url: "https://www.python.org/",
      icon: <Terminal className="h-7 w-7" />,
      color: "from-amber-500/10 to-blue-500/10"
    },
    {
      name: "C / C++",
      role: "التحكم منخفض المستوى وهندسة الأنظمة",
      badge: "هندسة عكسية ونواة",
      description: "الأساس المتين لفهم معمارية الذاكرة (Memory Management)، تحليل البرمجيات الخبيثة، واكتشاف ثغرات الـ Buffer Overflow وتطوير برمجيات وبرامج تشغيل النواة.",
      tags: ["Reverse Eng", "Win32 API", "Kernel Dev", "GDB"],
      url: "https://isocpp.org/",
      icon: <Cpu className="h-7 w-7" />,
      color: "from-slate-900/10 to-indigo-500/10"
    },
    {
      name: "Go (Golang)",
      role: "أدوات الاستطلاع والشبكات فائقة السرعة",
      badge: "فحص واستطلاع سريع",
      description: "اللغة المفضلة لمطوري الأدوات الحديثة بفضل ميزتها الفائقة في المعالجة المتزامنة (Goroutines)، وسرعة فحص النطاقات، المنافذ، والشبكات الواسعة.",
      tags: ["Nuclei", "Subfinder", "GoBuster", "Concurrency"],
      url: "https://go.dev/",
      icon: <Zap className="h-7 w-7" />,
      color: "from-cyan-500/10 to-amber-500/10"
    },
    {
      name: "Rust",
      role: "أمان الذاكرة وأدوات الجيل القادم",
      badge: "أمان الذاكرة والـ Red Team",
      description: "تجمع بين سرعة لغة C وميزة أمان الذاكرة الصارم، وتعد اليوم الخيار المفضل لتطوير أدوات الفريق الأحمر الدفاعية والهجومية المعقدة غير القابلة للاكتشاف.",
      tags: ["Memory Safety", "Red Team", "Modern Implants", "Zero-Cost"],
      url: "https://www.rust-lang.org/",
      icon: <Shield className="h-7 w-7" />,
      color: "from-rose-500/10 to-amber-500/10"
    },
    {
      name: "Bash / Shell",
      role: "إدارة بيئات Linux وأتمتة المهام اليومية",
      badge: "إدارة الخوادم والطرفية",
      description: "أداة الطالب هندسة تقنيات أمن سيبراني الأساسية للتحكم بالأنظمة، تحليل السجلات، دمج وتمرير المخرجات بين الأدوات (Piping)، وإدارة وتشغيل السيرفرات السحابية.",
      tags: ["Linux CLI", "Piping", "Log Triage", "Cron Automation"],
      url: "https://www.gnu.org/software/bash/",
      icon: <Code className="h-7 w-7" />,
      color: "from-emerald-500/10 to-slate-900/10"
    },
    {
      name: "PowerShell",
      role: "أمان وفحص بيئات Active Directory و Windows",
      badge: "بيئات Windows و AD",
      description: "المعيار الأساسي لإدارة واختبار أنظمة ويندوز المؤسسية، محاكاة هجمات المجال الداخلي، والاستجابة والتحقيق الجنائي الرقمي ومراجعة الصلاحيات.",
      tags: ["Active Directory", "Empire", "PowerSploit", "Incident Response"],
      url: "https://learn.microsoft.com/powershell/",
      icon: <Binary className="h-7 w-7" />,
      color: "from-sky-500/10 to-amber-500/10"
    },
    {
      name: "JavaScript / TypeScript",
      role: "أمان وفحص تطبيقات الويب والمتصفحات",
      badge: "أمان تطبيقات الويب",
      description: "فهم عميق لثغرات الويب من جانب العميل مثل XSS و CSRF و DOM Manipulation، وفحص برمجيات Node.js الخلفية وتحليل إضافات المتصفحات.",
      tags: ["DOM XSS", "Browser Security", "NodeJS Audit", "Web Pentesting"],
      url: "https://developer.mozilla.org/",
      icon: <Globe className="h-7 w-7" />,
      color: "from-amber-400/10 to-orange-500/10"
    },
    {
      name: "SQL",
      role: "أمان وحماية قواعد البيانات وتحليل الاستعلامات",
      badge: "أمان قواعد البيانات",
      description: "الركيزة الأساسية لاختبار واكتشاف ثغرات حقن قواعد البيانات (SQL Injection)، تدقيق الأذونات والصلاحيات، وفحص سلامة التخزين والنسخ الاحتياطي.",
      tags: ["SQL Injection", "Database Hardening", "Query Auditing", "Forensics"],
      url: "https://www.postgresql.org/",
      icon: <Database className="h-7 w-7" />,
      color: "from-blue-500/10 to-cyan-500/10"
    }
  ];

  return (
    <div className="pt-[70px] sm:pt-20 pb-12 sm:pb-16" dir="rtl">
      <Container size="xl">
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-amber-50 text-amber-700 px-5 py-2 rounded-full text-sm font-bold mb-4 font-arabic border border-amber-200 shadow-sm">
            لغات البرمجة 💻
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-arabic">
            لغات <span className="text-amber-600">البرمجة والأتمتة</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-arabic font-medium leading-relaxed">
            دليل أهم لغات البرمجة لتطوير الأدوات الأمنية، تحليل الثغرات، واستكشاف كواليس الأنظمة والشبكات.
          </p>
        </div>

        {/* Programming Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in zoom-in-95 duration-300">
          {languages.map((lang, idx) => (
            <a 
              key={idx}
              href={lang.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-[2rem] p-7 border-2 border-slate-200 hover:border-amber-500 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden"
            >
              <div className={`absolute -right-8 -top-8 w-28 h-28 bg-gradient-to-br ${lang.color} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-black group-hover:text-amber-500 group-hover:border-black transition-all shadow-sm">
                    {lang.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold border border-amber-200 font-arabic">
                    {lang.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-950 font-mono mb-1 group-hover:text-amber-600 transition-colors">
                  {lang.name}
                </h3>
                <div className="text-xs font-bold text-amber-600 font-arabic mb-3">
                  {lang.role}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-arabic font-medium mb-5">
                  {lang.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {lang.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-md text-[11px] font-mono font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 border-t border-slate-100 pt-3.5 flex items-center justify-between text-slate-900 group-hover:text-amber-600 transition-colors mt-auto">
                <span className="font-bold text-xs font-arabic">زيارة الموقع الرسمي</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-[-2px] transition-all" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};


