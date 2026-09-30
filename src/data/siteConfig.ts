export interface SiteConfig {
  name: string;
  nameEnglish: string;
  role: string;
  secondaryRoles: string[];
  headline: string;
  bio: string;
  detailedBio: string[];
  location: string;
  status: string;
  email: string;
  securityEmail: string;
  pgp: {
    fingerprint: string;
    keyId: string;
    publicKeyUrl: string;
    rawKeySnippet: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    telegram: string;
    instagram?: string;
    tryhackme?: string;
    hackthebox?: string;
  };
  navigation: {
    name: string;
    href: string;
    badge?: string;
  }[];
  domains: {
    number: string;
    title: string;
    titleEnglish: string;
    slug: string;
    description: string;
    icon: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "عامر جمال",
  nameEnglish: "Amer Jamal",
  role: "باحث أمن سيبراني ومختبر اختراق",
  secondaryRoles: [
    "طالب هندسة تقنيات أمن سيبراني (Security Engineer)",
    "هاكر أخلاقي وباحث ثغرات (Ethical Hacker)",
    "متخصص أمان تطبيقات الويب (AppSec)",
    "شغوف بأمان النظم والشبكات (Systems & Network Security)"
  ],
  headline: "استكشاف الأنظمة. كشف نقاط الضعف. وبناؤها لتكون أكثر مناعة وقوة.",
  bio: "طالب هندسة تقنيات أمن سيبراني، مهتم ومتخصص في مجالات الأمن السيبراني والاختبار الاختراقي، مع خبرة عملية قوية في الاستطلاع وجمع المعلومات وفحص الأنظمة والشبكات.",
  detailedBio: [
    "طالب هندسة تقنيات أمن سيبراني، مهتم ومتخصص في مجالات الأمن السيبراني والاختبار الاختراقي، مع خبرة عملية قوية في الاستطلاع وجمع المعلومات (Reconnaissance & OSINT)، فحص الأنظمة والشبكات، واستخدام أدوات الأمن السيبراني والتحليل الأمني.",
    "أكملت تدريبات ودورات في مجالات متعددة تشمل: OSCP، OSINT، eJPT v2، CEH v12، Networking، Red Team، Bug Bounty، Linux، وPenetration Testing.",
    "أمتلك خبرة قوية في استخدام أدوات الفحص والاستطلاع وجمع البيانات، تحليل الأهداف والأنظمة، واكتشاف الثغرات ضمن بيئات الاختبار الأمني. كما أمتلك خبرة متقدمة في الذكاء الاصطناعي (AI) وتوظيفه في الأتمتة، التحليل، تطوير الأدوات، وتحسين عمليات الأمن السيبراني.",
    "بالإضافة إلى ذلك، لدي خبرة جيدة في البرمجة وتطوير الحلول والأدوات المساعدة، مع اهتمام مستمر بتطوير مهاراتي في اختبار الاختراق، Red Teaming، Bug Bounty، وأمن الأنظمة والشبكات."
  ],
  location: "عالمي / العمل عن بعد",
  status: "أبحث، أختبر، وأبني مشاريع أمنية بنشاط",
  email: "contact@amerjamal.dev",
  securityEmail: "security@amerjamal.dev",
  pgp: {
    fingerprint: "4A9F 820C 11E3 B59D 7621  08DA 39FE C14B 8892 0FA1",
    keyId: "0x39FEC14B88920FA1",
    publicKeyUrl: "/keys/amerjamal.asc",
    rawKeySnippet: `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP v4
Comment: Amer Jamal Personal Security Key

mQENBF/h6... [مفتاح عامر جمال الأمني - PGP Public Key]
-----END PGP PUBLIC KEY BLOCK-----`
  },
  socials: {
    github: "https://github.com/amerjamal",
    linkedin: "https://linkedin.com/in/amerjamal",
    twitter: "https://x.com/amerjamal_sec",
    telegram: "https://t.me/amerjamal_sec",
    instagram: "https://instagram.com/amerjamal_sec",
    tryhackme: "https://tryhackme.com/p/amerjamal",
    hackthebox: "https://app.hackthebox.com/users/amerjamal"
  },
  navigation: [
    { name: "الأدوات", href: "/tools" },
    { name: "خارطة الطريق", href: "/roadmap" },
    { name: "الشهادات", href: "/certifications" },
    { name: "عني", href: "/about" },
    { name: "تواصل معي", href: "/contact" }
  ],
  domains: [
    { 
      number: "01", 
      title: "الأمن الهجومي", 
      titleEnglish: "Offensive Security",
      slug: "offensive-security", 
      description: "منهجيات اختبار الاختراق، محاكاة المهاجمين الأخلاقية، وتحديد نواقل التهديد قبل استغلالها بشكل خبيث.", 
      icon: "Crosshair" 
    },
    { 
      number: "02", 
      title: "الأمن الدفاعي", 
      titleEnglish: "Defensive Security",
      slug: "defensive-security", 
      description: "رصد التهديدات، تحصين الأنظمة (Hardening)، إدارة السجلات والتدقيق، وتصميم دفاعات حصينة.", 
      icon: "Shield" 
    },
    { 
      number: "03", 
      title: "أمان الويب", 
      titleEnglish: "Web Security",
      slug: "web-security", 
      description: "تحليل ثغرات الويب المتقدمة: كسر الصلاحيات، حقن الأوامر، SSRF، والعيوب المنطقية في واجهات API.", 
      icon: "Globe" 
    },
    { 
      number: "04", 
      title: "أبحاث الثغرات", 
      titleEnglish: "Vulnerability Research",
      slug: "vulnerability-research", 
      description: "تحليل الأسباب الجذرية للثغرات، تفكيك البروتوكولات، والفحص العشوائي (Fuzzing) مع الإفصاح المسؤول.", 
      icon: "Search" 
    },
    { 
      number: "05", 
      title: "صيد الثغرات", 
      titleEnglish: "Bug Hunting / Bug Bounty",
      slug: "bug-hunting", 
      description: "الاستطلاع المنهجي واسع النطاق، رسم خرائط الأصول الرقمية، واكتشاف الثغرات المنطقية عالية الأثر.", 
      icon: "Bug" 
    },
    { 
      number: "06", 
      title: "الاستخبارات المفتوحة والـ OSINT", 
      titleEnglish: "OSINT & Reconnaissance",
      slug: "osint", 
      description: "جمع المعلومات من المصادر العلنية، مراقبة سجلات الشفافية للشهادات، ورسم البصمة الرقمية للمؤسسات.", 
      icon: "Compass" 
    },
    { 
      number: "07", 
      title: "أمان الشبكات", 
      titleEnglish: "Network Security",
      slug: "network-security", 
      description: "فحص حزم البيانات (Packet Analysis)، تشريح حزمة بروتوكولات TCP/IP، وحماية خوادم DNS وجدران الحماية.", 
      icon: "Network" 
    },
    { 
      number: "08", 
      title: "أنظمة Linux والنواة", 
      titleEnglish: "Linux & System Security",
      slug: "linux", 
      description: "آليات النواة، عزل العمليات (Namespaces)، الصلاحيات الدقيقة (Capabilities)، وتحصين خوادم Linux.", 
      icon: "Terminal" 
    },
    { 
      number: "09", 
      title: "البرمجة للأمن السيبراني", 
      titleEnglish: "Programming for Security",
      slug: "programming", 
      description: "تطوير أدوات وسكربتات بلغات Python و Bash و Go و C لأتمتة الاستطلاع وفحص الثغرات بسرعة فائقة.", 
      icon: "Code" 
    },
    { 
      number: "10", 
      title: "التطوير البرمجي الآمن", 
      titleEnglish: "Secure Development",
      slug: "secure-dev", 
      description: "دمج معايير الأمان في دورة حياة البرمجيات (DevSecOps)، التحليل الساكن والديناميكي (SAST/DAST).", 
      icon: "Lock" 
    },
    { 
      number: "11", 
      title: "أمان التطبيقات", 
      titleEnglish: "Application Security",
      slug: "appsec", 
      description: "نمذجة التهديدات (Threat Modeling)، تأمين جلسات المصادقة (Tokens/Sessions)، وتشفير الاتصالات بين الخدمات.", 
      icon: "Cpu" 
    },
    { 
      number: "12", 
      title: "أتمتة الأمان السيبراني", 
      titleEnglish: "Security Automation",
      slug: "automation", 
      description: "بناء خطوط معالجة آلية للاستطلاع المستمر، تصنيف التنبيهات، والفرز الذكي للتهديدات المتجددة.", 
      icon: "Zap" 
    },
    { 
      number: "13", 
      title: "تحديات الـ CTF", 
      titleEnglish: "CTF & Problem Solving",
      slug: "ctf", 
      description: "حل التحديات الأمنية المعقدة في مجالات استغلال الويب، علم التشفير، الهندسة العكسية، والتحقيق الجنائي.", 
      icon: "Flag" 
    },
    { 
      number: "14", 
      title: "البحث الأكاديمي والتقني", 
      titleEnglish: "Security Research",
      slug: "research", 
      description: "توثيق نواقل الهجوم المستحدثة، تقييم بروتوكولات التشفير، ونشر الحلول الدفاعية الرصينة للمجتمع التقني.", 
      icon: "BookOpen" 
    }
  ]
};


