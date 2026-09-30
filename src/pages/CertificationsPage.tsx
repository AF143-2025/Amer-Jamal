import React, { useState, useMemo } from 'react';
import { 
  Shield, 
  Target, 
  Briefcase,
  Award,
  ExternalLink,
  Search,
  ChevronRight,
  Info,
  Layers,
  Cpu
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { certificationsData, CertTrack, CertLevel, Certification } from '../data/certifications';

const LEVEL_ORDER: Record<CertLevel, number> = {
  'مبتدئ جدًّا': 1,
  'مبتدئ': 2,
  'متوسط': 3,
  'متقدم': 4,
  'خبير': 5,
};

const TRACK_DETAILS = {
  'Blue Team': {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    color: 'blue',
    title: 'Blue Team — الدفاع',
    desc: 'مسار هندسة الحماية، رصد التهديدات، الاستجابة للحوادث، وتحليل الجنائيات الرقمية.',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    btn: 'bg-slate-900 hover:bg-blue-600'
  },
  'Red Team': {
    icon: <Target className="w-8 h-8 text-red-600" />,
    color: 'red',
    title: 'Red Team — الهجوم',
    desc: 'مسار اختبار الاختراق العملي، اكتشاف الثغرات، ومحاكاة هجمات متقدمة ضد الأنظمة.',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    btn: 'bg-black text-white hover:bg-amber-600 hover:text-black'
  },
  'Leadership': {
    icon: <Briefcase className="w-8 h-8 text-purple-600" />,
    color: 'purple',
    title: 'Leadership — الحوكمة',
    desc: 'مسار الإدارة الاستراتيجية، التدقيق، إدارة المخاطر، وقيادة أمن المعلومات للمنظمات.',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    btn: 'bg-purple-900 hover:bg-purple-700'
  }
};

export const CertificationsPage: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<CertTrack | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<CertLevel | 'الكل'>('الكل');

  const handleTrackSelect = (track: CertTrack) => {
    setSelectedTrack(track);
    setSelectedLevel('الكل');
    setSearchQuery('');
  };

  const currentCerts = useMemo(() => {
    if (!selectedTrack) return [];
    return certificationsData.filter(c => {
      const matchTrack = c.track === selectedTrack;
      const matchLevel = selectedLevel === 'الكل' || c.level === selectedLevel;
      const matchSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.issuer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTrack && matchLevel && matchSearch;
    }).sort((a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]);
  }, [selectedTrack, selectedLevel, searchQuery]);

  const availableLevels = useMemo(() => {
    if (!selectedTrack) return [];
    const levels = new Set(certificationsData.filter(c => c.track === selectedTrack).map(c => c.level));
    return Array.from(levels).sort((a, b) => LEVEL_ORDER[a] - LEVEL_ORDER[b]);
  }, [selectedTrack]);

  return (
    <div className="pt-[70px] sm:pt-20 pb-12 sm:pb-16" dir="rtl">
      <Container size="xl">
        {/* Dynamic Header */}
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex items-center justify-center bg-amber-50 text-amber-700 px-5 py-2 rounded-full text-sm font-bold mb-4 font-arabic border border-amber-200 shadow-sm">
            <Award className="w-4 h-4 ml-2 text-amber-600" /> 
            {selectedTrack ? TRACK_DETAILS[selectedTrack].title : "دليلك لشهادات الأمن السيبراني"}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-arabic leading-tight">
            {selectedTrack ? "المسار المهني للشهادات" : <>مسارات وشهادات <span className="text-amber-600">الأمن السيبراني</span></>}
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-arabic font-medium leading-relaxed">
            {selectedTrack 
              ? "تصفح الشهادات المعتمدة، استكشف تفاصيلها، وحدد هدفك المهني القادم."
              : "دليل شامل وموثوق لأهم مسارات وشهادات الأمن السيبراني التخصصية."}
          </p>
        </div>

        {/* View 1: Tracks Hub */}
        {!selectedTrack && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in zoom-in-95 duration-300">
            {(Object.keys(TRACK_DETAILS) as CertTrack[]).map((track) => {
              const details = TRACK_DETAILS[track];
              const certCount = certificationsData.filter(c => c.track === track).length;
              
              return (
                <div 
                  key={track}
                  onClick={() => handleTrackSelect(track)}
                  className="bg-white rounded-[2rem] p-8 border-2 border-slate-200 hover:border-amber-500 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl ${details.bg} ${details.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                    {details.icon}
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 font-arabic mb-3 group-hover:text-amber-600 transition-colors">
                    {details.title}
                  </h2>
                  <p className="text-slate-600 font-arabic leading-relaxed font-medium mb-8 flex-1">
                    {details.desc}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                    <span className="flex items-center gap-2 text-sm font-bold text-slate-500 font-arabic">
                      <Layers className="w-4 h-4" /> {certCount} شهادة معتمدة
                    </span>
                    <button className={`${details.btn} text-white px-5 py-2.5 rounded-xl text-sm font-bold font-arabic flex items-center gap-2 transition-all group-hover:px-6 shadow-md`}>
                      عرض المسار <ChevronRight className="w-4 h-4 rotate-180" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View 2: Specific Track Details */}
        {selectedTrack && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-[2rem] border border-slate-200 shadow-sm">
              <button 
                onClick={() => setSelectedTrack(null)}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold font-arabic px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <ChevronRight className="w-5 h-5" /> العودة للمسارات
              </button>
              
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن شهادة..."
                    className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm font-arabic focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                </div>
                <div className="flex items-center p-1 bg-slate-100 rounded-xl w-full sm:w-auto overflow-x-auto hide-scrollbar">
                  <button
                    onClick={() => setSelectedLevel('الكل')}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold font-arabic transition-all ${selectedLevel === 'الكل' ? 'bg-black text-amber-500 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    الكل
                  </button>
                  {availableLevels.map(level => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold font-arabic transition-all ${selectedLevel === level ? 'bg-black text-amber-500 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Certs Grid grouped by level if 'الكل', or just flat if level selected */}
            {currentCerts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-slate-200">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-700 font-arabic mb-2">لا توجد نتائج مطابقة</h3>
                <p className="text-slate-500 font-arabic">لم نتمكن من العثور على شهادات تطابق بحثك الحالي.</p>
              </div>
            ) : (
              <div className="space-y-12">
                {(selectedLevel === 'الكل' ? availableLevels : [selectedLevel]).map(level => {
                  const levelCerts = currentCerts.filter(c => c.level === level);
                  if (levelCerts.length === 0) return null;
                  
                  return (
                    <div key={level} className="space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-xl font-black text-slate-900 font-arabic bg-amber-50 px-5 py-2 rounded-xl border border-amber-200">
                          المستوى: {level}
                        </h3>
                        <div className="h-px bg-slate-200 flex-1" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {levelCerts.map((cert) => (
                          <div key={cert.id} className="bg-white rounded-[1.5rem] border-2 border-slate-200 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] hover:-translate-y-1 hover:border-amber-500 transition-all duration-300 flex flex-col group overflow-hidden">
                            <div className="p-6 pb-5 border-b border-slate-100 flex items-start justify-between">
                              <div>
                                <h4 className="text-xl font-black text-slate-900 font-mono mb-1 group-hover:text-amber-600 transition-colors">{cert.name}</h4>
                                <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">{cert.issuer.toUpperCase()}</span>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                                <Cpu className="w-5 h-5" />
                              </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                              <p className="text-sm text-slate-600 font-arabic leading-relaxed mb-6 font-medium">
                                {cert.description}
                              </p>
                              
                              <div className="mt-auto grid grid-cols-2 gap-3">
                                <a 
                                  href={cert.officialUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="col-span-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold font-arabic text-sm transition-colors shadow-sm"
                                >
                                  الموقع الرسمي <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Professional Highlight Card Under Certifications */}
        <div className="mt-14 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-white to-slate-50 p-8 md:p-12 border-2 border-slate-200 hover:border-amber-500 transition-all duration-500 shadow-sm hover:shadow-xl text-center max-w-4xl mx-auto">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-80 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 mb-5 border border-amber-200 shadow-sm">
              <Award className="w-7 h-7" />
            </div>
            <p className="text-slate-900 text-lg md:text-2xl font-black font-arabic leading-relaxed max-w-3xl">
              "سواء كنت تدافع عن الأنظمة، أو تحاكي الهجمات، أو تقود استراتيجية الأمن، فإن الشهادات تمثل محطات قوية في تشكيل مسيرتك المهنية في الأمن السيبراني."
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono tracking-wider border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              CYBERSECURITY CERTIFICATIONS • CAREER MILESTONES
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

