export type CertLevel = 'مبتدئ جدًّا' | 'مبتدئ' | 'متوسط' | 'متقدم' | 'خبير';
export type CertTrack = 'Blue Team' | 'Red Team' | 'Leadership';

export interface Certification {
  id: string;
  name: string;
  track: CertTrack;
  level: CertLevel;
  issuer: string;
  description: string;
  officialUrl: string;
}

export const certificationsData: Certification[] = [
  // --- BLUE TEAM ---
  { id: 'sec-plus', name: 'Security+', track: 'Blue Team', level: 'مبتدئ', issuer: 'CompTIA', description: 'شهادة تأسيسية تغطي مهارات الأمان الأساسية وإدارة المخاطر والشبكات.', officialUrl: 'https://www.comptia.org/certifications/security' },
  { id: 'csa', name: 'CSA', track: 'Blue Team', level: 'مبتدئ', issuer: 'EC-Council', description: 'محلل مركز عمليات الأمان، تركز على العمليات الأساسية في الـ SOC.', officialUrl: 'https://www.eccouncil.org/programs/certified-soc-analyst-csa/' },
  { id: 'ecdfp', name: 'eCDFP', track: 'Blue Team', level: 'مبتدئ', issuer: 'INE', description: 'أساسيات التحقيق الجنائي الرقمي والتعامل مع الأدلة الرقمية.', officialUrl: 'https://ine.com/' },
  { id: 'btl1', name: 'BTL1', track: 'Blue Team', level: 'مبتدئ', issuer: 'Security Blue Team', description: 'تدريب عملي للدفاع السيبراني والتحقيق في الحوادث.', officialUrl: 'https://securityblue.team/blue-team-level-1/' },
  
  { id: 'cysa-plus', name: 'CySA+', track: 'Blue Team', level: 'متوسط', issuer: 'CompTIA', description: 'محلل أمن سيبراني معتمد، تركز على تحليل السلوك ورصد التهديدات.', officialUrl: 'https://www.comptia.org/certifications/cybersecurity-analyst' },
  { id: 'btl2', name: 'BTL2', track: 'Blue Team', level: 'متوسط', issuer: 'Security Blue Team', description: 'مستوى متقدم من الدفاع السيبراني والبحث عن التهديدات والـ Reverse Engineering.', officialUrl: 'https://securityblue.team/blue-team-level-2/' },
  { id: 'ecthp', name: 'eCTHP', track: 'Blue Team', level: 'متوسط', issuer: 'INE', description: 'شهادة متخصصة في البحث عن التهديدات (Threat Hunting).', officialUrl: 'https://ine.com/' },
  { id: 'ccd', name: 'CCD', track: 'Blue Team', level: 'متوسط', issuer: 'CyberDefenders', description: 'مدافع سيبراني معتمد، تركز على الاستجابة العملية للحوادث.', officialUrl: 'https://cyberdefenders.org/' },
  { id: 'cdsa', name: 'CDSA', track: 'Blue Team', level: 'متوسط', issuer: 'Hack The Box', description: 'محلل أمن دفاعي، تركز على مهارات الـ SOC والاستجابة.', officialUrl: 'https://academy.hackthebox.com/' },
  { id: 'osda', name: 'OSDA', track: 'Blue Team', level: 'متوسط', issuer: 'OffSec', description: 'شهادة المحلل الدفاعي من OffSec للتحقيق ورصد الهجمات.', officialUrl: 'https://www.offsec.com/' },
  { id: 'gcih', name: 'GCIH', track: 'Blue Team', level: 'متوسط', issuer: 'GIAC', description: 'معالج حوادث معتمد، تركز على اكتشاف التهديدات والاستجابة لها.', officialUrl: 'https://www.giac.org/certifications/certified-incident-handler-gcih/' },
  { id: 'ecir', name: 'eCIR', track: 'Blue Team', level: 'متوسط', issuer: 'INE', description: 'مستجيب حوادث معتمد، يركز على التعامل مع الاختراقات.', officialUrl: 'https://ine.com/' },

  { id: 'casp-plus', name: 'CASP+', track: 'Blue Team', level: 'متقدم', issuer: 'CompTIA', description: 'ممارس أمان متقدم، للحلول الأمنية المعمارية والهندسية.', officialUrl: 'https://www.comptia.org/certifications/comptia-advanced-security-practitioner' },
  { id: 'gcfa', name: 'GCFA', track: 'Blue Team', level: 'متقدم', issuer: 'GIAC', description: 'محلل جنائي معتمد للتحقيقات المتقدمة والاستجابة للتهديدات المعقدة.', officialUrl: 'https://www.giac.org/certifications/certified-forensic-analyst-gcfa/' },

  // --- RED TEAM ---
  { id: 'klcp', name: 'KLCP', track: 'Red Team', level: 'مبتدئ جدًّا', issuer: 'OffSec', description: 'شهادة أساسيات نظام Kali Linux للمبتدئين في المجال.', officialUrl: 'https://www.offsec.com/courses/pen-103/' },
  
  { id: 'pnpt', name: 'PNPT', track: 'Red Team', level: 'مبتدئ', issuer: 'TCM Security', description: 'شهادة عملية تحاكي اختبار اختراق حقيقي لشبكات الشركات.', officialUrl: 'https://certifications.tcm-sec.com/pnpt/' },
  { id: 'cbbh', name: 'CBBH', track: 'Red Team', level: 'مبتدئ', issuer: 'Hack The Box', description: 'صائد ثغرات ويب معتمد، تركز على أمان تطبيقات الويب.', officialUrl: 'https://academy.hackthebox.com/' },
  { id: 'ejpt', name: 'eJPT v2', track: 'Red Team', level: 'مبتدئ', issuer: 'INE', description: 'مختبر اختراق للمبتدئين، يغطي الأساسيات العملية للهجوم.', officialUrl: 'https://ine.com/learning/certifications/internal/ejpt' },
  { id: 'crtp', name: 'CRTP', track: 'Red Team', level: 'مبتدئ', issuer: 'Altered Security', description: 'شهادة متخصصة في اختراق بيئات Active Directory.', officialUrl: 'https://www.alteredsecurity.com/adbootcamp' },
  { id: 'ceh', name: 'CEH v12', track: 'Red Team', level: 'مبتدئ', issuer: 'EC-Council', description: 'شهادة الهاكر الأخلاقي المعتمد، تغطي أدوات وتقنيات الهجوم الشائعة.', officialUrl: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/' },

  { id: 'oscp', name: 'OSCP', track: 'Red Team', level: 'متوسط', issuer: 'OffSec', description: 'من أشهر شهادات اختبار الاختراق العملي، تتطلب اختراق أجهزة حية.', officialUrl: 'https://www.offsec.com/courses/pen-200/' },
  { id: 'oswp', name: 'OSWP', track: 'Red Team', level: 'متوسط', issuer: 'OffSec', description: 'محترف هجوم الشبكات اللاسلكية المعتمد.', officialUrl: 'https://www.offsec.com/courses/pen-210/' },
  { id: 'oswa', name: 'OSWA', track: 'Red Team', level: 'متوسط', issuer: 'OffSec', description: 'شهادة متقدمة في اختبار اختراق تطبيقات الويب.', officialUrl: 'https://www.offsec.com/courses/web-200/' },
  { id: 'osep', name: 'OSEP', track: 'Red Team', level: 'متوسط', issuer: 'OffSec', description: 'تجاوز الدفاعات المتقدمة واختبار اختراق الشبكات المعقدة.', officialUrl: 'https://www.offsec.com/courses/pen-300/' },
  { id: 'cpts', name: 'CPTS', track: 'Red Team', level: 'متوسط', issuer: 'Hack The Box', description: 'اختبار اختراق متقدم يركز على مسارات الهجوم في بيئات العمل (Active Directory).', officialUrl: 'https://academy.hackthebox.com/' },

  { id: 'osmr', name: 'OSMR', track: 'Red Team', level: 'متقدم', issuer: 'OffSec', description: 'اختبار اختراق أنظمة macOS المتقدمة.', officialUrl: 'https://www.offsec.com/courses/mac-400/' },
  { id: 'osed', name: 'OSED', track: 'Red Team', level: 'متقدم', issuer: 'OffSec', description: 'تطوير ثغرات واستغلالها في بيئات Windows المتقدمة.', officialUrl: 'https://www.offsec.com/courses/exp-301/' },
  { id: 'crto', name: 'CRTO', track: 'Red Team', level: 'متقدم', issuer: 'Zero-Point Security', description: 'ممارس عمليات الفريق الأحمر، باستخدام إطار Cobalt Strike.', officialUrl: 'https://zeropointsecurity.co.uk/red-team-ops' },

  { id: 'osce3', name: 'OSCE3', track: 'Red Team', level: 'خبير', issuer: 'OffSec', description: 'شهادة الخبير التي تُمنح لمن يجتاز OSEP و OSED و OSWE.', officialUrl: 'https://www.offsec.com/osce3/' },
  { id: 'osee', name: 'OSEE', track: 'Red Team', level: 'خبير', issuer: 'OffSec', description: 'خبير استغلال الثغرات، أعلى شهادات OffSec وأكثرها تعقيداً.', officialUrl: 'https://www.offsec.com/courses/exp-401/' },
  { id: 'oswe', name: 'OSWE', track: 'Red Team', level: 'خبير', issuer: 'OffSec', description: 'خبير استغلال ثغرات الويب، تحليل الكود المصدري واكتشاف ثغرات Zero-day.', officialUrl: 'https://www.offsec.com/courses/web-300/' },

  // --- LEADERSHIP ---
  { id: 'crisc', name: 'CRISC', track: 'Leadership', level: 'متوسط', issuer: 'ISACA', description: 'شهادة متخصصة في التحكم في المخاطر ونظم المعلومات.', officialUrl: 'https://www.isaca.org/credentialing/crisc' },
  { id: 'cisa', name: 'CISA', track: 'Leadership', level: 'متوسط', issuer: 'ISACA', description: 'مدقق نظم المعلومات المعتمد، الأبرز في مجال التدقيق التقني.', officialUrl: 'https://www.isaca.org/credentialing/cisa' },
  { id: 'cism', name: 'CISM', track: 'Leadership', level: 'متوسط', issuer: 'ISACA', description: 'مدير أمن المعلومات المعتمد، تركز على إدارة المخاطر والأمان.', officialUrl: 'https://www.isaca.org/credentialing/cism' },

  { id: 'cissp', name: 'CISSP', track: 'Leadership', level: 'متقدم', issuer: 'ISC2', description: 'المعيار الذهبي لشهادات أمن المعلومات على المستوى الإداري والاستراتيجي.', officialUrl: 'https://www.isc2.org/Certifications/CISSP' },
  { id: 'cgeit', name: 'CGEIT', track: 'Leadership', level: 'متقدم', issuer: 'ISACA', description: 'شهادة حوكمة تقنية المعلومات للمدراء وصناع القرار.', officialUrl: 'https://www.isaca.org/credentialing/cgeit' }
];

