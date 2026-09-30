import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: "sec",
    name: "الأمان واختبار الاختراق",
    iconName: "Shield",
    description: "المنهجيات والأطر العملية لتقييم الأنظمة، كشف العيوب الأمنية، والتحقق من متانة الحلول الدفاعية.",
    subcategories: [
      {
        name: "أمان تطبيقات الويب (Web Security)",
        items: [
          { name: "المصادقة وإدارة الجلسات", tools: ["Burp Suite", "JWT Analyzer"] },
          { name: "الصلاحيات وثغرات IDOR / BOLA", tools: ["Autorize", "Custom Fuzzers"] },
          { name: "حقن النصوص البرمجية (XSS)", tools: ["DOM Invader", "Browser DevTools"] },
          { name: "حقن قواعد البيانات (SQLi)", tools: ["sqlmap", "Manual Payloads"] },
          { name: "تزوير الطلبات من جانب الخادم (SSRF)", tools: ["Interactsh", "Burp Collaborator"] },
          { name: "تزوير الطلبات عبر المواقع (CSRF)", tools: ["PoC Generators"] },
          { name: "ثغرات المنطق البرمجي (Business Logic)", tools: ["Burp Repeater", "Turbo Intruder"] },
          { name: "خداع وتسميم التخزين المؤقت (Cache Deception)", tools: ["Param Miner"] }
        ]
      },
      {
        name: "المنهجيات الهجومية (Offensive)",
        items: [
          { name: "رسم خريطة سطح الهجوم", tools: ["Amass", "subfinder"] },
          { name: "فحص وفرز الثغرات التلقائي", tools: ["Nuclei", "Nessus (Lab)"] },
          { name: "رفع الصلاحيات (Linux/Windows)", tools: ["LinPEAS", "WinPEAS", "GTFOBins"] },
          { name: "تدقيق واختبار متانة كلمات المرور", tools: ["Hashcat", "John the Ripper"] }
        ]
      },
      {
        name: "الهندسة الدفاعية (Defensive)",
        items: [
          { name: "تحصين الأنظمة بمعايير CIS", tools: ["Lynis", "OpenSCAP"] },
          { name: "رصد السجلات والقياسات الأمنية", tools: ["Wazuh", "auditd", "journalctl"] },
          { name: "هندسة سياسة أمان المحتوى (CSP)", tools: ["CSP Evaluator"] },
          { name: "نمذجة التهديدات بمعيار STRIDE", tools: ["OWASP Threat Dragon"] }
        ]
      }
    ]
  },
  {
    id: "prog",
    name: "البرمجة والأتمتة",
    iconName: "Code",
    description: "اللغات والتقنيات المستخدمة في بناء أدوات الأمان، تحليل الشيفرات البرمجية، والهندسة العكسية.",
    subcategories: [
      {
        name: "اللغات الأساسية",
        items: [
          { name: "Python 3", level: "Advanced", tools: ["asyncio", "requests", "scapy", "cryptography", "BeautifulSoup"] },
          { name: "Bash / Shell", level: "Advanced", tools: ["sed", "awk", "grep", "curl", "jq"] },
          { name: "JavaScript / TypeScript", level: "Intermediate", tools: ["Node.js", "React", "Express", "Vite"] },
          { name: "Go (Golang)", level: "Intermediate", tools: ["Goroutines", "net/http", "CLI Tools"] },
          { name: "C / C++", level: "Fundamental", tools: ["GCC", "GDB", "Make", "Valgrind"] },
          { name: "SQL", level: "Intermediate", tools: ["PostgreSQL", "MySQL", "SQLite"] }
        ]
      },
      {
        name: "الممارسات الهندسية",
        items: [
          { name: "معالجة الشبكة غير المتزامنة (Asyncio)", tools: ["asyncio", "aiohttp"] },
          { name: "البرمجة الآمنة وفحص الكود (SAST)", tools: ["Semgrep", "SonarQube (Lab)"] },
          { name: "إدارة الإصدارات والـ CI/CD", tools: ["GitHub Actions", "Pre-commit hooks"] }
        ]
      }
    ]
  },
  {
    id: "net",
    name: "الشبكات والبروتوكولات",
    iconName: "Network",
    description: "تشريح البروتوكولات، فحص وتحليل حركة المرور، وتأمين البنية التحتية للشبكات.",
    subcategories: [
      {
        name: "النقل والتوجيه",
        items: [
          { name: "حزمة بروتوكولات TCP/IP", tools: ["Wireshark", "tcpdump"] },
          { name: "آليات بروتوكولات UDP و ICMP", tools: ["tshark", "traceroute"] },
          { name: "تقسيم الشبكات الفرعية والـ VLANs", tools: ["iproute2", "netmask"] },
          { name: "مفاهيم بروتوكولات التوجيه (BGP, OSPF)", tools: ["FRR / Quagga"] }
        ]
      },
      {
        name: "طبقة التطبيقات والتشفير",
        items: [
          { name: "معمارية DNS و DNSSEC", tools: ["dig", "dnsrecon", "unbound"] },
          { name: "بروتوكولات HTTP/1.1 و HTTP/2 و HTTP/3", tools: ["curl", "nghttp2"] },
          { name: "تشفير TLS 1.2 و 1.3", tools: ["testssl.sh", "openssl"] },
          { name: "جدران الحماية وتصفية الحزم", tools: ["iptables", "nftables", "UFW"] }
        ]
      }
    ]
  },
  {
    id: "os",
    name: "أنظمة التشغيل والنواة",
    iconName: "Terminal",
    description: "معمارية أنظمة التشغيل، آليات النواة الحساسة، وإدارة الأمان في خوادم المؤسسات.",
    subcategories: [
      {
        name: "أنظمة Linux",
        items: [
          { name: "صلاحيات POSIX والتحكم بالوصول", tools: ["chmod", "chown", "setfacl"] },
          { name: "عزل العمليات والحاويات (Namespaces & Cgroups)", tools: ["unshare", "nsenter"] },
          { name: "نداءات النواة ونقاط التعقب (Syscalls)", tools: ["strace", "ltrace", "perf"] },
          { name: "إطار التدقيق لنواة لينكس (auditd)", tools: ["ausearch", "aureport"] },
          { name: "تحصين خدمات Systemd", tools: ["systemd-analyze"] }
        ]
      },
      {
        name: "أنظمة Windows",
        items: [
          { name: "توكنات الوصول وامتيازات Windows", tools: ["whoami /priv", "AccessChk"] },
          { name: "أساسيات الـ Active Directory (مختبرات)", tools: ["PowerView", "BloodHound (Lab)"] },
          { name: "برمجة PowerShell وتأمينها", tools: ["PowerShell 7", "PSReadLine"] }
        ]
      }
    ]
  },
  {
    id: "tools",
    name: "صندوق الأدوات والبرمجيات",
    iconName: "Tool",
    description: "البرمجيات القياسية المعتمدة عالمياً في الفحص، الاعتراض، التحليل، والتنقيح.",
    subcategories: [
      {
        name: "الفحص والاعتراض (Proxies & Fuzzers)",
        items: [
          { name: "Burp Suite Professional / Community" },
          { name: "OWASP ZAP" },
          { name: "ffuf & gobuster" },
          { name: "Postman & Insomnia" }
        ]
      },
      {
        name: "الاستطلاع والتحليل الجنائي",
        items: [
          { name: "Nmap & Masscan" },
          { name: "Wireshark & tcpdump" },
          { name: "Ghidra & Radare2" },
          { name: "Volatility 3" }
        ]
      }
    ]
  },
  {
    id: "research",
    name: "البحث والمنهجية العلمية",
    iconName: "BookOpen",
    description: "التحقيق المنهجي، نمذجة التهديدات، ومعايير توثيق الثغرات والأوراق البحثية.",
    subcategories: [
      {
        name: "دورة حياة الثغرة الأمنية",
        items: [
          { name: "التحقيق في الأسباب الجذرية (Root Cause)" },
          { name: "الإفصاح المنسق عن الثغرات (CVD)" },
          { name: "حساب درجات الخطورة عبر CVSS v3.1 / v4" },
          { name: "كتابة التقارير التقنية المحكمة" }
        ]
      },
      {
        name: "التعلم والتطوير المستمر",
        items: [
          { name: "حل تحديات مسابقات الـ CTF المعقدة" },
          { name: "تحليل مواصفات بروتوكولات الإنترنت (RFCs)" },
          { name: "إعادة بناء الثغرات المعلنة في مختبرات معزولة" }
        ]
      }
    ]
  }
];

