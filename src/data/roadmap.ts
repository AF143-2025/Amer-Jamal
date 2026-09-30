export type RoadmapSectionId = 'beginner' | 'blue-team' | 'red-team';

export type RoadmapTrack = 
  | 'Beginner'
  | 'Blue Team'
  | 'Red Team'
  | 'Foundations'
  | 'Offensive Security'
  | 'Defensive Security'
  | 'Application Security'
  | 'Research'
  | 'Cloud & Infrastructure'
  | 'Advanced';

export type LearningStatus = 'Completed' | 'Learning' | 'Next' | 'Planned';

export interface RoadmapCertification {
  id: string;
  name: string;
  code: string;
  issuer: string;
  level: 'تأسيسي' | 'متوسط' | 'متقدم' | 'خبير';
  description: string;
  skills: string[];
  badgeColor: string;
}

export interface RoadmapSectionInfo {
  id: RoadmapSectionId;
  titleAr: string;
  titleEn: string;
  badge: string;
  tagline: string;
  description: string;
  gradient: string;
  accentColor: string;
  badgeClass: string;
  borderClass: string;
  bgLightClass: string;
  hoverBorderClass: string;
  iconBgClass: string;
  glowClass: string;
  certifications: RoadmapCertification[];
}

export interface RoadmapNode {
  id: string;
  stepNumber: string;
  title: string;
  titleEn: string;
  track: RoadmapTrack;
  sectionId: RoadmapSectionId;
  order: number;
  status: LearningStatus;
  summary: string;
  concepts: string[];
  learningResources: { name: string; type: string; url?: string }[];
  recommendedTools: string[]; // references tool IDs in tools.ts
  relatedResearch?: string[];
  relatedProjects?: string[];
  relatedArticles?: string[];
}

export const roadmapSectionsInfo: RoadmapSectionInfo[] = [
  {
    id: 'beginner',
    titleAr: 'خارطة المبتدئ',
    titleEn: 'Beginner Roadmap — Foundations & Core Skills',
    badge: 'المسار التأسيسي 🟢',
    tagline: 'من الصفر إلى فهم عميق لأساسيات الحوسبة والشبكات والبرمجة',
    description: 'الأساس المتين لكل مهتم بمجال الأمن السيبراني. يركز هذا المسار على بناء المعرفة التأسيسية الصلبة: كيفية عمل المعالجات والذاكرة، معمارية الشبكات والبروتوكولات، إدارة سطر أوامر لينكس، البرمجة والأتمتة بلغة بايثون، والمبادئ الجوهرية لأمن المعلومات.',
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    accentColor: 'text-emerald-700',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    borderClass: 'border-emerald-200',
    bgLightClass: 'bg-emerald-50/50',
    hoverBorderClass: 'hover:border-emerald-500',
    iconBgClass: 'bg-emerald-100 text-emerald-800',
    glowClass: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)]',
    certifications: [
      {
        id: 'cert-sec-plus',
        name: 'CompTIA Security+ (SY0-701)',
        code: 'Security+',
        issuer: 'CompTIA',
        level: 'تأسيسي',
        description: 'المعيار العالمي الأول لتوثيق أساسيات أمن المعلومات، مبادئ التشفير، وإدارة التهديدات والامتثال.',
        skills: ['CIA Triad', 'Cryptography', 'Threat Management', 'Access Control'],
        badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
      },
      {
        id: 'cert-ccna',
        name: 'Cisco Certified Network Associate (200-301)',
        code: 'CCNA',
        issuer: 'Cisco',
        level: 'تأسيسي',
        description: 'الشهادة الأكثر اعتماداً في فهم البنية التحتية لشبكات البيانات، بروتوكولات التوجيه IP، وأمن الشبكات.',
        skills: ['TCP/IP & OSI', 'Routing & Switching', 'Subnetting', 'Network Security'],
        badgeColor: 'bg-teal-50 text-teal-700 border-teal-200'
      },
      {
        id: 'cert-linux-plus',
        name: 'CompTIA Linux+ / LPIC-1',
        code: 'Linux+',
        issuer: 'CompTIA / LPI',
        level: 'تأسيسي',
        description: 'إثبات المهارة والكفاءة في إدارة خوادم لينكس، معالجة سطر أوامر Bash، وأذونات الملفات وتأمين النظام.',
        skills: ['Linux CLI', 'Bash Scripting', 'SUID / Permissions', 'Server Hardening'],
        badgeColor: 'bg-slate-100 text-slate-800 border-slate-300'
      },
      {
        id: 'cert-net-plus',
        name: 'CompTIA Network+ (N10-008)',
        code: 'Network+',
        issuer: 'CompTIA',
        level: 'تأسيسي',
        description: 'توثيق فهم بروتوكولات الشبكة المعيارية (OSI Model & TCP/IP) واستكشاف وحل مشكلات الاتصال.',
        skills: ['Network Architecture', 'Protocols & Ports', 'Packet Analysis', 'Troubleshooting'],
        badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
      }
    ]
  },
  {
    id: 'blue-team',
    titleAr: 'خارطة الفريق الأزرق',
    titleEn: 'Blue Team Roadmap — Defensive Operations & DFIR',
    badge: 'المسار الدفاعي 🔵',
    tagline: 'رصد الهجمات، هندسة الكشف، الاستجابة للحوادث والتحقيق الرقمي',
    description: 'مسار هندسي متكامل مخصص لحماية البنى التحتية والتصدي للهجمات. يغطي عمليات مركز العمليات الأمنية (SOC)، تحليل وإدارة السجلات في أنظمة SIEM، هندسة الدفاع الشبكي وأنظمة كشف التسلل (NIDS)، الاستجابة للحوادث والتحقيق الرقمي (DFIR)، وصيد التهديدات الاستباقي.',
    gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
    accentColor: 'text-blue-700',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    borderClass: 'border-blue-200',
    bgLightClass: 'bg-blue-50/50',
    hoverBorderClass: 'hover:border-blue-500',
    iconBgClass: 'bg-blue-100 text-blue-800',
    glowClass: 'hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)]',
    certifications: [
      {
        id: 'cert-btl1',
        name: 'Blue Team Level 1 (BTL1)',
        code: 'BTL1',
        issuer: 'Security Blue Team',
        level: 'متوسط',
        description: 'شهادة دفاعية عملية 100%، تركز على إدارة عمليات مركز الـ SOC، التحقيق الجنائي، وتحليل السجلات.',
        skills: ['SOC Operations', 'SIEM & Wazuh/Splunk', 'Digital Forensics', 'Incident Response'],
        badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
      },
      {
        id: 'cert-ccd',
        name: 'Certified CyberDefender (CCD)',
        code: 'CCD',
        issuer: 'CyberDefenders',
        level: 'متقدم',
        description: 'شهادة نخبوية للمدافعين تغطي صيد التهديدات، تحليل الذاكرة الحية، وهندسة الكشف وقواعد Sigma.',
        skills: ['Threat Hunting', 'Memory Forensics', 'Sigma Rules', 'Network Forensics'],
        badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
      },
      {
        id: 'cert-cysa',
        name: 'CompTIA Cybersecurity Analyst (CySA+)',
        code: 'CySA+',
        issuer: 'CompTIA',
        level: 'متوسط',
        description: 'إثبات القدرة على التحليل الأمني المتقدم، رصد التهديدات المستمرة، وإدارة ومكافحة الثغرات البرمجية.',
        skills: ['Security Operations', 'Vulnerability Management', 'Incident Response', 'Threat Intel'],
        badgeColor: 'bg-sky-50 text-sky-700 border-sky-200'
      },
      {
        id: 'cert-gcih',
        name: 'GIAC Certified Incident Handler (GCIH)',
        code: 'GCIH',
        issuer: 'SANS / GIAC',
        level: 'متقدم',
        description: 'إحدى أرقى الشهادات العالمية المعترف بها للاستجابة للحوادث الأمنية والتحقيق في تكتيكات المهاجمين.',
        skills: ['Incident Handling', 'Host Investigation', 'Hacker Tools & Exploits', 'Containment'],
        badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200'
      }
    ]
  },
  {
    id: 'red-team',
    titleAr: 'خارطة الفريق الأحمر',
    titleEn: 'Red Team Roadmap — Offensive Security & Pentesting',
    badge: 'المسار الهجومي 🔴',
    tagline: 'اختبار الاختراق، استغلال الثغرات، ومحاكاة التهديدات المتقدمة',
    description: 'مسار احترافي يركز على الجانب الهجومي واختبار الاختراق الأخلاقي. يشمل الاستطلاع واستخبارات التهديدات (OSINT)، اختبار اختراق تطبيقات الويب وفق معايير OWASP، اختراق الشبكات والأنظمة، مهاجمة بيئات الدليل النشط (Active Directory)، ورفع الصلاحيات وتجاوز آليات الدفاع.',
    gradient: 'from-rose-500/10 via-red-500/5 to-transparent',
    accentColor: 'text-rose-700',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
    borderClass: 'border-rose-200',
    bgLightClass: 'bg-rose-50/50',
    hoverBorderClass: 'hover:border-rose-500',
    iconBgClass: 'bg-rose-100 text-rose-800',
    glowClass: 'hover:shadow-[0_20px_40px_rgba(244,63,94,0.12)]',
    certifications: [
      {
        id: 'cert-oscp',
        name: 'OffSec Certified Professional (OSCP)',
        code: 'OSCP',
        issuer: 'OffSec (PEN-200)',
        level: 'متقدم',
        description: 'المعيار الذهبي الأشهر لاختبار الاختراق العملي، يتطلب اجتياز فحص عملي مكثف لمدة 24 ساعة لاختراق شبكة حية.',
        skills: ['Network Pentesting', 'Privilege Escalation', 'Active Directory', 'Exploit Modification'],
        badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
      },
      {
        id: 'cert-crtp',
        name: 'Certified Red Team Professional (CRTP)',
        code: 'CRTP',
        issuer: 'Altered Security',
        level: 'متقدم',
        description: 'الشهادة الأكثر تخصصاً وعملية في استهداف واختراق بيئات الدليل النشط Active Directory والسيطرة على الدومين.',
        skills: ['Active Directory Attacks', 'Kerberoasting', 'BloodHound Enumeration', 'Domain Dominance'],
        badgeColor: 'bg-red-50 text-red-700 border-red-200'
      },
      {
        id: 'cert-ejpt',
        name: 'eLearnSecurity Junior Pentester (eJPT)',
        code: 'eJPT',
        issuer: 'INE Security',
        level: 'تأسيسي',
        description: 'الشهادة التطبيقية الأولى الموصى بها للدخول إلى عالم اختبار الاختراق الأخلاقي وفحص الثغرات العملية.',
        skills: ['Reconnaissance', 'Web Exploitation', 'Network Attacks', 'Metasploit Fundamentals'],
        badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
      },
      {
        id: 'cert-bscp',
        name: 'Burp Suite Certified Practitioner (BSCP)',
        code: 'BSCP',
        issuer: 'PortSwigger',
        level: 'متقدم',
        description: 'الشهادة الرسمية لاختبار أمان تطبيقات الويب المعقدة واكتشاف واستغلال ثغرات OWASP Top 10 المتقدمة.',
        skills: ['Burp Suite Pro', 'SSRF & IDOR', 'SQL Injection & XSS', 'OAuth & JWT Bypass'],
        badgeColor: 'bg-orange-50 text-orange-700 border-orange-200'
      }
    ]
  }
];

export const roadmapData: RoadmapNode[] = [
  // ==========================================
  // 1. خارطة المبتدئ (Beginner Roadmap)
  // ==========================================
  {
    id: 'beginner-computing',
    stepNumber: '01',
    title: 'أساسيات الحوسبة ومعمارية الأنظمة',
    titleEn: 'Computer Systems & Architecture',
    track: 'Foundations',
    sectionId: 'beginner',
    order: 1,
    status: 'Completed',
    summary: 'فهم عميق لبنية الحواسيب، كيف تنفذ المعالجات التعليمات البرمجية، تمثيل البيانات الثنائية، وإدارة الذاكرة وتخزين الملفات.',
    concepts: [
      'معمارية المعالجات (x86_64 مقابل ARM) وسجلات الذاكرة (Registers)',
      'تمثيل البيانات بالنظام الثنائي والست عشري (Binary & Hexadecimal)',
      'توزيع الذاكرة العشوائية: الفرق بين الـ Stack والـ Heap',
      'دورة حياة العمليات (Process Lifecycle) واستدعاءات النظام (Syscalls)'
    ],
    learningResources: [
      { name: 'CS50: Introduction to Computer Science (Harvard)', type: 'Course' },
      { name: 'Operating Systems: Three Easy Pieces (Arpaci-Dusseau)', type: 'Book' },
      { name: 'Code: The Hidden Language of Computer Hardware', type: 'Book' }
    ],
    recommendedTools: ['tcpdump', 'nmap'],
    relatedArticles: ['building-a-disciplined-security-research-workflow']
  },
  {
    id: 'beginner-networking',
    stepNumber: '02',
    title: 'شبكات الحاسوب والبروتوكولات',
    titleEn: 'Computer Networking & Protocols',
    track: 'Foundations',
    sectionId: 'beginner',
    order: 2,
    status: 'Completed',
    summary: 'فهم شامل للطبقات الشبكية، آليات توجيه الحزم، مصافحة TCP الثلاثية، بروتوكولات DNS و DHCP و TLS، وتحليل حركة المرور بالبايت.',
    concepts: [
      'نموذج OSI المكون من 7 طبقات وتغليف البيانات (Data Encapsulation)',
      'مصافحة TCP الثلاثية (3-Way Handshake) وأرقام التسلسل (Seq/Ack)',
      'تشريح حزم بروتوكولات DNS, DHCP, HTTP/1.1, HTTP/2, TLS 1.3',
      'فهم المقابس البرمجية (Sockets) والتقاط الحزم عبر Wireshark'
    ],
    learningResources: [
      { name: 'Computer Networking: A Top-Down Approach (Kurose & Ross)', type: 'Book' },
      { name: 'Wireshark Packet Analysis Labs', type: 'Hands-on Lab' },
      { name: 'Practical Packet Analysis (Chris Sanders)', type: 'Book' }
    ],
    recommendedTools: ['wireshark-forensics', 'tcpdump', 'nmap'],
    relatedArticles: ['zero-trust-architecture-mental-model']
  },
  {
    id: 'beginner-linux',
    stepNumber: '03',
    title: 'احتراف سطر أوامر لينكس وإدارة الخوادم',
    titleEn: 'Linux Administration & Command Line',
    track: 'Foundations',
    sectionId: 'beginner',
    order: 3,
    status: 'Completed',
    summary: 'إتقان سطر أوامر Bash، بنية نظام الملفات FHS، صلاحيات POSIX و SUID، إدارة الخدمات والعمليات، وتحصين الخوادم.',
    concepts: [
      'أذونات الملفات وصلاحيات SUID / SGID و Sticky Bit وتعديلها',
      'أوامر الصدفة المتقدمة وتمرير البيانات (Pipelines, grep, awk, sed)',
      'إدارة الخدمات عبر systemd ومراقبة السجلات عبر journalctl',
      'تحصين الخوادم، تكوين مفاتيح SSH، وإعداد جدران الحماية (iptables/UFW)'
    ],
    learningResources: [
      { name: 'The Linux Command Line by William Shotts', type: 'Book' },
      { name: 'OverTheWire: Bandit Wargames', type: 'Interactive CTF' },
      { name: 'How Linux Works: What Every Superuser Should Know', type: 'Book' }
    ],
    recommendedTools: ['lynis', 'tcpdump'],
    relatedProjects: ['sentinel-ebpf']
  },
  {
    id: 'beginner-python',
    stepNumber: '04',
    title: 'البرمجة والأتمتة الأمنية بلغة بايثون',
    titleEn: 'Python Scripting & Security Automation',
    track: 'Foundations',
    sectionId: 'beginner',
    order: 4,
    status: 'Completed',
    summary: 'كتابة برمجيات وأدوات فحص أمنية مخصصة، التعامل مع المقابس البرمجية، تحليل استجابات HTTP، وأتمتة المهام الروتينية.',
    concepts: [
      'أساسيات لغة بايثون والمكتبات المعيارية للأمن (os, sys, socket)',
      'البرمجة متعددة الخيوط (Threading) لإنشاء فواحص المنافذ السريعة',
      'معالجة طلبات الويب وتحليل ردود الخوادم عبر مكتبة Requests',
      'توليد وتعديل وقراءة حزم الشبكة برمجياً باستخدام مكتبة Scapy'
    ],
    learningResources: [
      { name: 'Black Hat Python by Justin Seitz', type: 'Book' },
      { name: 'Automate the Boring Stuff with Python', type: 'Book' },
      { name: 'Violent Python: A Cookbook for Hackers', type: 'Book' }
    ],
    recommendedTools: ['nmap', 'recon-ng'],
    relatedProjects: ['recon-matrix']
  },
  {
    id: 'beginner-cybersecurity',
    stepNumber: '05',
    title: 'مبادئ الأمن السيبراني ونماذج التهديد',
    titleEn: 'Cybersecurity Principles & Threat Modeling',
    track: 'Foundations',
    sectionId: 'beginner',
    order: 5,
    status: 'Completed',
    summary: 'استيعاب المبادئ التأسيسية للأمن السيبراني: ثالوث الحماية CIA، مفاهيم التشفير والهاش، التحكم في الوصول، ونماذج التهديد.',
    concepts: [
      'ثالوث أمن المعلومات CIA (السرية، النزاهة، والتوافر)',
      'التشفير المتناظر وغير المتناظر ودوال الهاش (AES, RSA, SHA-256)',
      'نماذج التحكم بالوصول (RBAC, ABAC) ونموذج انعدام الثقة (Zero Trust)',
      'منهجيات نمذجة التهديدات STRIDE ومصفوفة الهجمات العالمية'
    ],
    learningResources: [
      { name: 'CompTIA Security+ All-in-One Exam Guide', type: 'Certification Guide' },
      { name: 'NIST Cybersecurity Framework (CSF 2.0)', type: 'Standard' },
      { name: 'OWASP Security Principles', type: 'Documentation' }
    ],
    recommendedTools: ['openvas', 'lynis'],
    relatedArticles: ['zero-trust-architecture-mental-model']
  },

  // ==========================================
  // 2. خارطة الفريق الأزرق (Blue Team Roadmap)
  // ==========================================
  {
    id: 'blue-soc-operations',
    stepNumber: '01',
    title: 'مركز العمليات الأمنية ورصد التنبيهات',
    titleEn: 'SOC Operations & Alert Triage',
    track: 'Defensive Security',
    sectionId: 'blue-team',
    order: 6,
    status: 'Learning',
    summary: 'إدارة وتصنيف التنبيهات الأمنية في بيئات الـ SOC، التحقق من صحة الإنذارات، استخراج مؤشرات الاختراق، وتنفيذ كتيبات العمليات (Playbooks).',
    concepts: [
      'معمارية مركز العمليات الأمنية (SOC Tiers) ومسؤوليات المحلل اليومية',
      'تصنيف التنبيهات (Triage) والتعامل مع الإنذارات الخاطئة (False Positives)',
      'مؤشرات الاختراق (IoCs) ومؤشرات الهجوم (IoAs) وطرق استخراجها',
      'تنفيذ وتطوير كتيبات الاستجابة القياسية (Incident Playbooks)'
    ],
    learningResources: [
      { name: 'LetsDefend: SOC Analyst Learning Path', type: 'Hands-on Lab' },
      { name: 'Applied Network Defense Labs', type: 'Course' },
      { name: 'CyberDefenders: Blue Team Training Labs', type: 'Interactive CTF' }
    ],
    recommendedTools: ['wireshark-forensics', 'autopsy'],
    relatedArticles: ['zero-trust-architecture-mental-model']
  },
  {
    id: 'blue-siem-logs',
    stepNumber: '02',
    title: 'إدارة السجلات وأنظمة SIEM وقواعد الكشف',
    titleEn: 'SIEM Engineering & Detection Rules',
    track: 'Defensive Security',
    sectionId: 'blue-team',
    order: 7,
    status: 'Learning',
    summary: 'جمع وتوحيد سجلات الأحداث من مختلف الأنظمة، استخدام أدوات SIEM المتقدمة، وكتابة قواعد كشف التهديدات المعيارية (Sigma Rules).',
    concepts: [
      'جمع وتوحيد سجلات Windows Event Logs وسجلات Linux Syslog',
      'صياغة استعلامات البحث والتحليل في Splunk (SPL) ومنظومة ELK (KQL)',
      'كتابة وتطوير قواعد الكشف المعيارية باستخدام لغة Sigma',
      'بناء لوحات المراقبة الحية (Dashboards) والإنذار المبكر للأحداث غير الطبيعية'
    ],
    learningResources: [
      { name: 'Splunk Fundamentals Training', type: 'Course' },
      { name: 'Detection Engineering Handbook by Florian Roth', type: 'Book' },
      { name: 'Sigma HQ Official Detection Rules Repository', type: 'Documentation' }
    ],
    recommendedTools: ['autopsy', 'lynis'],
    relatedProjects: ['sentinel-ebpf']
  },
  {
    id: 'blue-network-defense',
    stepNumber: '03',
    title: 'الدفاع الشبكي ومراقبة حركة البيانات',
    titleEn: 'Network Defense & Intrusion Detection (NIDS)',
    track: 'Defensive Security',
    sectionId: 'blue-team',
    order: 8,
    status: 'Next',
    summary: 'تأمين المحيط الشبكي، نشر أنظمة كشف ومنع التسلل (Suricata / Snort)، تحليل تدفق البيانات، واكتشاف الأنشطة الخبيثة في الوقت الفعلي.',
    concepts: [
      'نشر وضبط أنظمة كشف التسلل الشبكية (Suricata, Snort, Zeek)',
      'كتابة وتطوير تواقيع الكشف المخصصة (Custom NIDS Signatures)',
      'تحليل ملفات الـ PCAP المعقدة واستخراج الحمولات المشبوهة',
      'تجزئة الشبكات وتطبيق جدران الحماية من الجيل التالي (NGFW)'
    ],
    learningResources: [
      { name: 'The Practice of Network Security Monitoring (Richard Bejtlich)', type: 'Book' },
      { name: 'Network Security Monitoring with Zeek & Suricata', type: 'Course' },
      { name: 'SANS SEC503: Intrusion Detection In-Depth', type: 'Certification' }
    ],
    recommendedTools: ['wireshark-forensics', 'tcpdump', 'nmap']
  },
  {
    id: 'blue-incident-response',
    stepNumber: '04',
    title: 'الاستجابة للحوادث والتحقيق الجنائي الرقمي',
    titleEn: 'Incident Response & Digital Forensics (DFIR)',
    track: 'Defensive Security',
    sectionId: 'blue-team',
    order: 9,
    status: 'Planned',
    summary: 'إدارة دورة حياة الحوادث الأمنية من الاحتواء إلى التعافي، التحقيق في الذاكرة الحية، فحص مسجلات الويندوز، وتتبع خطوات المهاجمين.',
    concepts: [
      'مراحل الاستجابة للحوادث وفق منهجيات NIST SP 800-61 و SANS',
      'التحقيق الجنائي في الذاكرة العشوائية (RAM) عبر Volatility',
      'تحليل مسجلات ويندوز (Registry)، ملفات Prefetch، وسجلات MFT',
      'تتبع حركات المهاجمين الجانبية (Lateral Movement) وتأمين الأدلة الجنائية'
    ],
    learningResources: [
      { name: 'Incident Response & Computer Forensics (Third Edition)', type: 'Book' },
      { name: 'The Art of Memory Forensics (Ligh, Case, Levy)', type: 'Book' },
      { name: 'SANS FOR508: Advanced Incident Response', type: 'Certification' }
    ],
    recommendedTools: ['volatility', 'autopsy', 'sleuthkit', 'foremost']
  },
  {
    id: 'blue-threat-hunting',
    stepNumber: '05',
    title: 'صيد التهديدات الاستباقي وتحصين الأنظمة',
    titleEn: 'Threat Hunting & Security Hardening',
    track: 'Defensive Security',
    sectionId: 'blue-team',
    order: 10,
    status: 'Planned',
    summary: 'البحث الاستباقي عن المهاجمين داخل الشبكة دون انتظار التنبيهات، ربط السلوكيات بمصفوفة MITRE ATT&CK، وتطبيق أفضل معايير التحصين.',
    concepts: [
      'منهجية صيد التهديدات المبنية على الفرضيات (Hypothesis-Driven Hunting)',
      'رسم ومطابقة السلوكيات المكتشفة مع مصفوفة MITRE ATT&CK للتقنيات',
      'تطبيق معايير التحصين المعترف بها عالمياً (CIS Benchmarks & DISA STIGs)',
      'تأمين بيئات ويندوز المؤسسية وحماية نقاط النهاية عبر سياسات AppLocker و ASR'
    ],
    learningResources: [
      { name: 'MITRE ATT&CK Defender (MAD) Training', type: 'Training' },
      { name: 'Threat Hunting Academy by David Bianco', type: 'Course' },
      { name: 'CIS Security Benchmarks Guidelines', type: 'Standard' }
    ],
    recommendedTools: ['lynis', 'nessus', 'openvas']
  },

  // ==========================================
  // 3. خارطة الفريق الأحمر (Red Team Roadmap)
  // ==========================================
  {
    id: 'red-osint-recon',
    stepNumber: '01',
    title: 'الاستطلاع وتحديد سطح الهجوم واستخبارات المصادر',
    titleEn: 'OSINT & Attack Surface Reconnaissance',
    track: 'Offensive Security',
    sectionId: 'red-team',
    order: 11,
    status: 'Completed',
    summary: 'جمع المعلومات الاستخباراتية النشطة والسلبية، استكشاف النطاقات والأصول السحابية، وفحص الخدمات والمنافذ لتحديد الأهداف الهشة.',
    concepts: [
      'استخبارات المصادر المفتوحة (OSINT) واستخراج بيانات الاعتماد المسربة',
      'تعداد النطاقات الفرعية وسجلات الشفافية (Certificate Transparency Logs)',
      'رسم خريطة الأصول عبر أرقام الأنظمة المستقلة (ASN) ومحركات Shodan و Censys',
      'اكتشاف وتجاوز آليات حجب مسح المنافذ وتحديد إصدارات الخدمات بدقة'
    ],
    learningResources: [
      { name: 'The Art of Recon by NahamSec', type: 'Course' },
      { name: 'OWASP Amass Official Documentation & Guide', type: 'Docs' },
      { name: 'OSINT Techniques: Resources for Uncovering Information', type: 'Book' }
    ],
    recommendedTools: ['amass', 'shodan', 'censys', 'theharvester', 'recon-ng'],
    relatedProjects: ['recon-matrix']
  },
  {
    id: 'red-web-pentesting',
    stepNumber: '02',
    title: 'تقييم واختبار اختراق تطبيقات الويب',
    titleEn: 'Web Application Pentesting & OWASP Top 10',
    track: 'Offensive Security',
    sectionId: 'red-team',
    order: 12,
    status: 'Completed',
    summary: 'تحليل واستغلال ثغرات الويب الأكثر خطورة: كسر الصلاحيات IDOR، حقن SQL، تزوير الطلبات SSRF، ثغرات المصادقة، والعيوب المنطقية.',
    concepts: [
      'احتراف اعتراض وفحص وتعديل حزم الويب باستخدام Burp Suite Pro',
      'ثغرات حقن الاستعلامات (SQL Injection) وتقنيات التجاوز عبر sqlmap',
      'كسر الصلاحيات على مستوى الكائنات (BOLA / IDOR) وثغرات التزوير SSRF',
      'اختراق وتجاوز مصادقات الـ API وتوكنات JWT وثغرات CORS و CSRF'
    ],
    learningResources: [
      { name: 'PortSwigger Web Security Academy', type: 'Interactive Lab' },
      { name: 'The Web Application Hacker\'s Handbook (Dafydd Stuttard)', type: 'Book' },
      { name: 'OWASP Web Security Testing Guide (WSTG)', type: 'Standard' }
    ],
    recommendedTools: ['burp-suite-web', 'owasp-zap', 'sqlmap', 'nikto', 'wpscan'],
    relatedResearch: ['cache-deception-cdn-discrepancies', 'ssrf-cloud-metadata-bypasses']
  },
  {
    id: 'red-network-pentest',
    stepNumber: '03',
    title: 'اختبار اختراق الشبكات والأنظمة الداخلية',
    titleEn: 'Network Pentesting & Infrastructure Exploitation',
    track: 'Offensive Security',
    sectionId: 'red-team',
    order: 13,
    status: 'Completed',
    summary: 'اختبار صلابة البنية التحتية، استغلال الخدمات الضعيفة، تثبيت القذائف العكسية، واختراق البروتوكولات الحساسة مثل SMB و RDP.',
    concepts: [
      'استغلال بروتوكولات الشبكة الضعيفة (SMB, RDP, SSH, SNMP, FTP)',
      'استخدام وتخصيص إطار العمل Metasploit ومستودع Exploit-DB',
      'توليد وتشغيل القذائف العكسية المشفرة (Reverse Shells)',
      'المناورة الشبكية عبر التوجيه وتجاوز جدران الحماية (Pivoting & ProxyChains)'
    ],
    learningResources: [
      { name: 'Penetration Testing: A Hands-On Introduction to Hacking', type: 'Book' },
      { name: 'Hack The Box Academy: Penetration Tester Path', type: 'Hands-on Lab' },
      { name: 'OffSec PEN-200 (OSCP Courseware)', type: 'Certification' }
    ],
    recommendedTools: ['metasploit', 'nmap', 'exploitdb', 'hydra']
  },
  {
    id: 'red-active-directory',
    stepNumber: '04',
    title: 'مهاجمة بيئات الدليل النشط (Active Directory)',
    titleEn: 'Active Directory Attacks & Domain Dominance',
    track: 'Offensive Security',
    sectionId: 'red-team',
    order: 14,
    status: 'Learning',
    summary: 'تعداد بيئات الدومين، استغلال بروتوكول Kerberos، هجمات التفويض، التنقل الجانبي، والسيطرة الكاملة على خوادم الـ Domain Controller.',
    concepts: [
      'تعداد بيئات الـ AD واستخراج مسارات الهجوم عبر BloodHound و SharpHound',
      'هجمات بروتوكول Kerberos (Kerberoasting, AS-REP Roasting, Golden Tickets)',
      'هجمات تمرير الهاش والتذاكر (Pass-the-Hash / Pass-the-Ticket)',
      'استغلال صلاحيات التفويض غير المقيدة والسيطرة على الـ Domain Controller'
    ],
    learningResources: [
      { name: 'Certified Red Team Professional (CRTP) - Altered Security', type: 'Certification' },
      { name: 'Attacking and Defending Active Directory (TCM Security)', type: 'Course' },
      { name: 'SpecterOps Red Team Technical Research Papers', type: 'Research' }
    ],
    recommendedTools: ['metasploit', 'hashcat', 'john', 'cobalt-strike']
  },
  {
    id: 'red-post-exploitation',
    stepNumber: '05',
    title: 'رفع الصلاحيات والتخفي ومحاكاة التهديدات',
    titleEn: 'Privilege Escalation & Adversary Emulation',
    track: 'Offensive Security',
    sectionId: 'red-team',
    order: 15,
    status: 'Next',
    summary: 'رفع الصلاحيات في Windows و Linux، تثبيت البقاء في الأنظمة المخترقة، تجاوز مضادات الفيروسات والـ EDR، وإدارة أطر القيادة والتحكم (C2).',
    concepts: [
      'رفع الصلاحيات في Linux (SUID, Sudo Misconfigs, Cron, Kernel Exploits)',
      'رفع الصلاحيات في Windows (Token Impersonation, DLL Hijacking, Unquoted Services)',
      'تقنيات التخفي وتجاوز أنظمة الحماية ومضادات الفيروسات (AV/EDR Evasion)',
      'إدارة عمليات القيادة والتحكم عبر منصات C2 المتقدمة (Cobalt Strike, Havoc, Sliver)'
    ],
    learningResources: [
      { name: 'Linux and Windows Privilege Escalation for OSCP', type: 'Course' },
      { name: 'Red Team Development and Operations by Joe Vest', type: 'Book' },
      { name: 'MITRE ATT&CK Enterprise Matrix for Red Teamers', type: 'Standard' }
    ],
    recommendedTools: ['cobalt-strike', 'hashcat', 'core-impact', 'gophish']
  }
];

export const roadmapNodes = roadmapData;

