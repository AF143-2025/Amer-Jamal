import React from 'react';
import { ExternalLink, Target, ShieldAlert, Box, Flag, TerminalSquare, Crosshair } from 'lucide-react';
import { Container } from '../components/layout/Container';

export const PlatformsPage: React.FC = () => {
  const platforms = [
    { name: "TryHackMe", desc: "بيئات تعليمية تفاعلية ومسارات تدريب مهيكلة من المبتدئ للمحترف.", icon: <ShieldAlert className="h-6 w-6 text-rose-500" />, link: "https://tryhackme.com" },
    { name: "Hack The Box", desc: "مختبرات اختراق متقدمة تحاكي شبكات الشركات والأنظمة الواقعية.", icon: <Box className="h-6 w-6 text-emerald-500" />, link: "https://www.hackthebox.com" },
    { name: "PortSwigger Academy", desc: "المصدر الأول لثغرات الويب المتقدمة والتدريب العملي الموثق.", icon: <Target className="h-6 w-6 text-amber-500" />, link: "https://portswigger.net/web-security" },
    { name: "PicoCTF", desc: "تحديات أمنية تغطي التشفير، الهندسة العكسية، والاستغلال.", icon: <Flag className="h-6 w-6 text-violet-500" />, link: "https://picoctf.org" },
    { name: "OverTheWire", desc: "تحديات WarGames لاحتراف سطر أوامر Linux والأمان.", icon: <TerminalSquare className="h-6 w-6 text-slate-700" />, link: "https://overthewire.org/wargames/" },
    { name: "PentesterLab", desc: "مختبرات تركز بشكل مكثف على الثغرات البرمجية في الويب.", icon: <Crosshair className="h-6 w-6 text-blue-500" />, link: "https://pentesterlab.com" },
  ];

  return (
    <div className="pt-[70px] sm:pt-20 pb-12 sm:pb-16" dir="rtl">
      <Container size="xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-amber-50 text-amber-700 px-5 py-2 rounded-full text-sm font-bold mb-4 font-arabic border border-amber-200 shadow-sm">
            منصات الاختبار 🎯
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-arabic">
            منصات <span className="text-amber-600">الاختبار والتحدي</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-arabic font-medium leading-relaxed">
            منصات فحص تفاعلية وتحديات اختراق معتمدة (CTF) لصقل مهاراتك العملية واختبار قدراتك في بيئات آمنة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in zoom-in-95 duration-300">
          {platforms.map((platform, idx) => (
            <a 
              href={platform.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={idx} 
              className="bg-white rounded-[2rem] p-8 border-2 border-slate-200 hover:border-amber-500 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {platform.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 font-mono mb-3 group-hover:text-amber-600 transition-colors">{platform.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-arabic font-medium mb-6">
                {platform.desc}
              </p>
              <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-slate-900 font-bold text-sm group-hover:text-amber-600 transition-colors">استكشاف المنصة</span>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

