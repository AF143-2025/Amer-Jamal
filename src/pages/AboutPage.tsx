import React from 'react';
import { 
  Shield, 
  Terminal, 
  Target,
  User,
  Award,
  Cpu,
  Search,
  Crosshair,
  Bug,
  Globe,
  Code,
  Brain,
  Network,
  Wrench,
  Sparkles
} from 'lucide-react';
import { Container } from '../components/layout/Container';

export const AboutPage: React.FC = () => {
  
  const domains = [
    { name: "Penetration Testing", icon: <Target className="w-5 h-5" />, color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
    { name: "Red Team", icon: <Shield className="w-5 h-5" />, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
    { name: "Bug Bounty", icon: <Bug className="w-5 h-5" />, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
    { name: "OSINT", icon: <Search className="w-5 h-5" />, color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
    { name: "Reconnaissance", icon: <Crosshair className="w-5 h-5" />, color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
    { name: "Information Gathering", icon: <Globe className="w-5 h-5" />, color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100" },
    { name: "Vulnerability Assessment", icon: <Sparkles className="w-5 h-5" />, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
    { name: "Linux", icon: <Terminal className="w-5 h-5" />, color: "text-slate-700", bg: "bg-slate-100", border: "border-slate-200" },
    { name: "Networking", icon: <Network className="w-5 h-5" />, color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-100" },
    { name: "Cybersecurity Tools", icon: <Wrench className="w-5 h-5" />, color: "text-fuchsia-600", bg: "bg-fuchsia-50", border: "border-fuchsia-100" },
    { name: "Programming", icon: <Code className="w-5 h-5" />, color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
    { name: "Artificial Intelligence (AI)", icon: <Brain className="w-5 h-5" />, color: "text-[#0284c7]", bg: "bg-[#f0f9ff]", border: "border-[#bae6fd]" },
  ];

  const courses = [
    { name: "OSCP", icon: <Award className="w-6 h-6 text-teal-500" /> },
    { name: "OSINT", icon: <Search className="w-6 h-6 text-teal-500" /> },
    { name: "eJPT v2", icon: <Shield className="w-6 h-6 text-emerald-500" /> },
    { name: "CEH v12", icon: <Target className="w-6 h-6 text-amber-500" /> },
    { name: "Networking", icon: <Network className="w-6 h-6 text-sky-500" /> },
    { name: "Red Team", icon: <Crosshair className="w-6 h-6 text-red-500" /> },
    { name: "Bug Bounty", icon: <Bug className="w-6 h-6 text-teal-500" /> },
    { name: "Linux", icon: <Terminal className="w-6 h-6 text-slate-700" /> },
    { name: "Penetration Testing", icon: <Wrench className="w-6 h-6 text-teal-500" /> },
  ];

  return (
    <div className="pt-[70px] sm:pt-20 pb-12 sm:pb-16" dir="rtl">
      <Container size="xl">
        {/* 1. Page Header */}
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex items-center justify-center bg-amber-50 text-amber-700 px-5 py-2 rounded-full text-sm font-bold mb-4 font-arabic border border-amber-200 shadow-sm">
            <User className="w-4 h-4 ml-2 text-amber-600" /> نبذة عني
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-arabic">
            طالب هندسة <span className="text-amber-600">تقنيات أمن سيبراني</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto font-arabic font-medium leading-relaxed">
            مهتم ومتخصص في مجالات الأمن السيبراني والاختبار الاختراقي، مع خبرة قوية في الاستطلاع وجمع المعلومات، وفحص الأنظمة والشبكات.
          </p>
        </div>

        {/* 2. Main Bio Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 border-2 border-slate-200 hover:border-amber-500 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] transition-all duration-300 relative overflow-hidden group mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
          
          <div className="flex items-center gap-4 border-b border-slate-100 pb-6 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-black text-amber-500 flex items-center justify-center shadow-md">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 font-arabic">من أنا؟</h2>
              <span className="text-sm font-mono text-slate-400">Personal Profile</span>
            </div>
          </div>
          
          <p className="text-slate-700 text-base md:text-lg leading-loose font-arabic font-medium">
            طالب هندسة تقنيات أمن سيبراني، مهتم ومتخصص في مجالات الأمن السيبراني والاختبار الاختراقي، مع خبرة قوية في الاستطلاع وجمع المعلومات (Reconnaissance & OSINT)، فحص الأنظمة والشبكات، استخدام أدوات الأمن السيبراني، تحليل الأهداف، وجمع وتحليل البيانات.
          </p>
        </div>

        {/* 3. Domains & Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-black text-amber-500 flex items-center justify-center shadow-sm">
              <Crosshair className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 font-arabic">التخصصات والخبرات</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {domains.map((domain, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-4 rounded-[1.5rem] bg-white border-2 border-slate-200 hover:border-amber-500 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-10 h-10 rounded-xl ${domain.bg} ${domain.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {domain.icon}
                </div>
                <span className="font-bold text-slate-800 font-mono text-sm">{domain.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Courses & Training */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-black text-amber-500 flex items-center justify-center shadow-sm">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 font-arabic">الدورات والتدريب</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {courses.map((course, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-[2rem] border-2 border-slate-200 hover:border-amber-500 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-50 transition-all">
                  {course.icon}
                </div>
                <h3 className="font-black text-slate-900 font-mono text-[15px] group-hover:text-amber-600 transition-colors">{course.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Technical Expertise Section */}
        <div className="bg-slate-950 rounded-[2rem] p-8 md:p-12 text-white border-2 border-slate-900 hover:border-amber-500/50 shadow-2xl transition-all duration-300 relative overflow-hidden mb-10 group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 border-b border-slate-800 pb-6 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-black border border-amber-500/30 text-amber-500 flex items-center justify-center shadow-lg">
                <Cpu className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-black text-white font-arabic">الأدوات والمهارات التقنية</h2>
            </div>
            
            <p className="text-slate-200 text-base md:text-lg leading-loose font-arabic font-medium">
              أمتلك خبرة قوية في أدوات الفحص والاستطلاع، جمع المعلومات، تحليل الأنظمة والشبكات، اكتشاف الثغرات ضمن بيئات الاختبار، واستخدام أدوات الأمن السيبراني المختلفة.
            </p>
          </div>
        </div>

      </Container>
    </div>
  );
};

