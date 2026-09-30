export type ToolCategory = 
  | 'Information Gathering'
  | 'Exploitation'
  | 'Password Cracking'
  | 'Vulnerability Scanning'
  | 'Social Engineering'
  | 'Digital Forensics'
  | 'Wireless Hacking'
  | 'Web App Security Assessment';

export interface ToolDirectoryItem {
  id: string;
  name: string;
  category: ToolCategory;
  subcategory: string;
  platform: 'Linux' | 'Cross-platform' | 'Windows / Linux' | 'CLI / Multi-OS';
  description: string;
  officialUrl?: string;
  docsUrl?: string;
  githubUrl?: string;
  myNotes: string;
  tags: string[];
  license: string;
  relatedResearch?: string[];
  relatedProjects?: string[];
  relatedRoadmapNode?: string;
}

export const toolsDirectoryData: ToolDirectoryItem[] = [
  // --- 1. جمع المعلومات ---
  { id: 'nmap', name: 'Nmap', category: 'Information Gathering', subcategory: 'Network Scanner', platform: 'Cross-platform', description: 'أداة لاستكشاف الشبكات وفحص المنافذ المفتوحة.', myNotes: 'أساسية في أي عملية استطلاع.', tags: ['Recon', 'Scanner', 'Networking'], license: 'GPL' },
  { id: 'shodan', name: 'Shodan', category: 'Information Gathering', subcategory: 'Search Engine', platform: 'Cross-platform', description: 'محرك بحث للأجهزة المتصلة بالإنترنت.', myNotes: 'مفيد جداً في الـ OSINT والبحث عن الأجهزة الضعيفة.', tags: ['OSINT', 'Search Engine'], license: 'Commercial/Free' },
  { id: 'maltego', name: 'Maltego', category: 'Information Gathering', subcategory: 'OSINT', platform: 'Cross-platform', description: 'أداة للتحقيق وجمع المعلومات وبناء العلاقات.', myNotes: 'واجهة رسومية ممتازة لتحليل العلاقات.', tags: ['OSINT', 'Data Mining'], license: 'Commercial/Free' },
  { id: 'theharvester', name: 'TheHavester', category: 'Information Gathering', subcategory: 'OSINT', platform: 'CLI / Multi-OS', description: 'جمع الإيميلات والنطاقات الفرعية.', myNotes: 'ممتازة في بداية الاستطلاع لاستهداف الشركات.', tags: ['Emails', 'Subdomains'], license: 'Open Source' },
  { id: 'recon-ng', name: 'Recon-NG', category: 'Information Gathering', subcategory: 'Web Recon', platform: 'CLI / Multi-OS', description: 'إطار عمل لجمع المعلومات عن تطبيقات الويب مبني بلغة بايثون.', myNotes: 'يشبه Metasploit لكن للاستطلاع.', tags: ['Recon', 'Framework'], license: 'Open Source' },
  { id: 'amass', name: 'Amass', category: 'Information Gathering', subcategory: 'Subdomain Enumeration', platform: 'CLI / Multi-OS', description: 'أداة متقدمة لاكتشاف السطح الهجومي والنطاقات الفرعية.', myNotes: 'من أقوى أدوات اكتشاف النطاقات الفرعية.', tags: ['Subdomains', 'Recon'], license: 'Open Source' },
  { id: 'censys', name: 'Censys', category: 'Information Gathering', subcategory: 'Search Engine', platform: 'Cross-platform', description: 'محرك بحث لاكتشاف وتقييم الأجهزة على الإنترنت.', myNotes: 'بديل ممتاز وقوي لـ Shodan.', tags: ['OSINT', 'Search Engine'], license: 'Commercial/Free' },
  { id: 'osint-framework', name: 'OSINT Framework', category: 'Information Gathering', subcategory: 'OSINT Collection', platform: 'Cross-platform', description: 'مجموعة أدوات ومواقع متكاملة لجمع المعلومات المفتوحة المصدر.', myNotes: 'مرجع شامل لكل أدوات OSINT.', tags: ['OSINT', 'Framework'], license: 'Free' },
  { id: 'gobuster-recon', name: 'Gobuster', category: 'Information Gathering', subcategory: 'Directory Bruteforce', platform: 'CLI / Multi-OS', description: 'أداة لاكتشاف المسارات المخفية والنطاقات الفرعية.', myNotes: 'سريعة جداً بفضل كتابتها بلغة Go.', tags: ['Bruteforce', 'Recon'], license: 'Open Source' },

  // --- 2. الاستغلال ---
  { id: 'burp-suite-exploit', name: 'Burp Suite', category: 'Exploitation', subcategory: 'Web Exploitation', platform: 'Cross-platform', description: 'منصة متكاملة لاختبار أمان تطبيقات الويب.', myNotes: 'الأداة رقم 1 لاختبار اختراق الويب.', tags: ['Web', 'Proxy', 'Exploitation'], license: 'Commercial/Community' },
  { id: 'metasploit', name: 'Metasploit Framework', category: 'Exploitation', subcategory: 'Exploitation Framework', platform: 'Cross-platform', description: 'إطار عمل شهير لتطوير وتنفيذ الثغرات الأمنية.', myNotes: 'أساسي في تنفيذ الثغرات الجاهزة وتجربتها.', tags: ['Exploitation', 'Framework'], license: 'Open Source/Commercial' },
  { id: 'sqlmap', name: 'SQL Map', category: 'Exploitation', subcategory: 'Database Exploitation', platform: 'CLI / Multi-OS', description: 'أداة لاكتشاف واستغلال ثغرات حقن قواعد البيانات (SQLi) تلقائياً.', myNotes: 'الأداة الأفضل لحقن قواعد البيانات.', tags: ['SQLi', 'Database'], license: 'Open Source' },
  { id: 'zap-exploit', name: 'ZAP', category: 'Exploitation', subcategory: 'Web Proxy', platform: 'Cross-platform', description: 'أداة لاكتشاف واستغلال الثغرات في تطبيقات الويب.', myNotes: 'بديل مجاني ممتاز لـ Burp.', tags: ['Web', 'Proxy'], license: 'Open Source' },
  { id: 'exploitdb', name: 'ExploitDB', category: 'Exploitation', subcategory: 'Vulnerability Database', platform: 'Cross-platform', description: 'قاعدة بيانات للثغرات المكتشفة مع أمثلة لاستغلالها.', myNotes: 'المصدر الأول للبحث عن الـ Exploits.', tags: ['Database', 'Exploits'], license: 'Free' },
  { id: 'core-impact', name: 'Core Impact', category: 'Exploitation', subcategory: 'Penetration Testing', platform: 'Windows / Linux', description: 'برنامج تجاري لاختبار الاختراق الآلي والمتقدم.', myNotes: 'مستخدم في البيئات المؤسسية.', tags: ['Commercial', 'PenTesting'], license: 'Commercial' },
  { id: 'cobalt-strike', name: 'Cobalt Strike', category: 'Exploitation', subcategory: 'Red Teaming', platform: 'Windows / Linux', description: 'برنامج يحاكي التهديدات المتقدمة (APT) وعمليات الـ Red Team.', myNotes: 'أساسي لعمليات الـ Red Teaming المتقدمة.', tags: ['Red Team', 'C2'], license: 'Commercial' },

  // --- 3. تكسير كلمات المرور ---
  { id: 'john', name: 'John The Ripper', category: 'Password Cracking', subcategory: 'Password Cracker', platform: 'CLI / Multi-OS', description: 'أداة شهيرة لفك وتكسير تشفير كلمات المرور.', myNotes: 'يدعم صيغ وتشفيرات متعددة.', tags: ['Cracking', 'Passwords'], license: 'Open Source' },
  { id: 'hydra', name: 'Hydra', category: 'Password Cracking', subcategory: 'Network Logon Cracker', platform: 'CLI / Multi-OS', description: 'أداة لكسر كلمات المرور للخدمات عبر الشبكة.', myNotes: 'ممتازة لـ SSH, FTP وغيرها.', tags: ['Bruteforce', 'Network'], license: 'Open Source' },
  { id: 'hashcat', name: 'Hashcat', category: 'Password Cracking', subcategory: 'Hash Cracker', platform: 'Cross-platform', description: 'أداة سريعة جداً لكسر الهاشات تعتمد على الـ GPU.', myNotes: 'الأسرع في كسر كلمات المرور.', tags: ['Cracking', 'GPU'], license: 'Open Source' },
  { id: 'ophcrack', name: 'OPHCrack', category: 'Password Cracking', subcategory: 'Windows Password Cracker', platform: 'Cross-platform', description: 'كسر كلمات مرور ويندوز باستخدام جداول Rainbow.', myNotes: 'سهل الاستخدام ويأتي بواجهة رسومية.', tags: ['Windows', 'Rainbow Tables'], license: 'Open Source' },
  { id: 'medusa', name: 'Medusa', category: 'Password Cracking', subcategory: 'Network Logon Cracker', platform: 'CLI / Multi-OS', description: 'أداة تكسير كلمات مرور سريعة تدعم خدمات شبكة متعددة.', myNotes: 'بديل رائع لـ Hydra.', tags: ['Bruteforce', 'Network'], license: 'Open Source' },
  { id: 'thc-hydra', name: 'THC-Hydra', category: 'Password Cracking', subcategory: 'Network Logon Cracker', platform: 'CLI / Multi-OS', description: 'نسخة مطورة من Hydra لدعم هجمات القوة العمياء على البروتوكولات.', myNotes: 'تدعم أكثر من 50 بروتوكول.', tags: ['Bruteforce', 'Protocols'], license: 'Open Source' },
  { id: 'cain-abel', name: 'Cain & Abel', category: 'Password Cracking', subcategory: 'Password Recovery', platform: 'Windows / Linux', description: 'أداة لاستعادة كلمات المرور وتحليل الشبكات.', myNotes: 'أداة قديمة لكنها كلاسيكية في كسر كلمات المرور محلياً.', tags: ['Recovery', 'Network'], license: 'Freeware' },

  // --- 4. مسح ثغرات الامنية ---
  { id: 'openvas', name: 'OpenVAS', category: 'Vulnerability Scanning', subcategory: 'Vulnerability Scanner', platform: 'Linux', description: 'نظام فحص ثغرات متكامل ومجاني.', myNotes: 'بديل مجاني لـ Nessus.', tags: ['Scanner', 'Vulnerabilities'], license: 'Open Source' },
  { id: 'nessus', name: 'Nessus', category: 'Vulnerability Scanning', subcategory: 'Vulnerability Scanner', platform: 'Cross-platform', description: 'أشهر أداة فحص ثغرات في العالم.', myNotes: 'معيار الصناعة لتقييم الثغرات.', tags: ['Scanner', 'Commercial'], license: 'Commercial/Free' },
  { id: 'appscan', name: 'AppScan', category: 'Vulnerability Scanning', subcategory: 'Web Scanner', platform: 'Windows / Linux', description: 'فحص ثغرات تطبيقات الويب، تطوير HCL (سابقاً IBM).', myNotes: 'تُستخدم بكثرة في بيئات المؤسسات.', tags: ['Web', 'Scanner'], license: 'Commercial' },
  { id: 'lynis', name: 'LYNIS', category: 'Vulnerability Scanning', subcategory: 'System Auditing', platform: 'Linux', description: 'أداة تدقيق أمني وفحص إعدادات أنظمة التشغيل.', myNotes: 'ممتازة لتحصين (Hardening) أنظمة لينكس.', tags: ['Auditing', 'Linux'], license: 'Open Source' },
  { id: 'retina', name: 'Retina', category: 'Vulnerability Scanning', subcategory: 'Vulnerability Scanner', platform: 'Windows / Linux', description: 'برنامج إدارة الثغرات وفحص الشبكات من BeyondTrust.', myNotes: 'يُستخدم للتدقيق الأمني المتقدم.', tags: ['Management', 'Scanner'], license: 'Commercial' },
  { id: 'nexpose', name: 'Nexpose', category: 'Vulnerability Scanning', subcategory: 'Vulnerability Management', platform: 'Cross-platform', description: 'أداة من Rapid7 لفحص وإدارة الثغرات الأمنية بشكل استباقي.', myNotes: 'تتكامل بشكل ممتاز مع Metasploit.', tags: ['Management', 'Rapid7'], license: 'Commercial' },

  // --- 5. الهندسة الاجتماعية ---
  { id: 'gophish', name: 'GoPhish', category: 'Social Engineering', subcategory: 'Phishing Framework', platform: 'Cross-platform', description: 'إطار عمل مفتوح المصدر لمحاكاة هجمات التصيد الاحتيالي.', myNotes: 'سهلة الاستخدام ومناسبة لتدريب الموظفين.', tags: ['Phishing', 'Training'], license: 'Open Source' },
  { id: 'hiddeneye', name: 'HiddenEye', category: 'Social Engineering', subcategory: 'Phishing', platform: 'CLI / Multi-OS', description: 'أداة لإنشاء صفحات تصيد متطورة.', myNotes: 'تستخدم في اختبار وعي المستخدمين.', tags: ['Phishing', 'Web'], license: 'Open Source' },
  { id: 'socialfish', name: 'SocialFish', category: 'Social Engineering', subcategory: 'Phishing', platform: 'CLI / Multi-OS', description: 'لإنشاء واجهات تصيد لمواقع التواصل الاجتماعي.', myNotes: 'تُستخدم في جمع حسابات السوشال ميديا في عمليات الاختبار.', tags: ['Phishing', 'Social Media'], license: 'Open Source' },
  { id: 'evilurl', name: 'EvilURL', category: 'Social Engineering', subcategory: 'Homograph Attacks', platform: 'CLI / Multi-OS', description: 'إنشاء روابط تبدو حقيقية لاختبار الهجمات بخداع الروابط.', myNotes: 'أداة هامة لمحاكاة هجمات انتحال الشخصية عبر الروابط.', tags: ['Spoofing', 'URLs'], license: 'Open Source' },
  { id: 'evilginx', name: 'Evilginx', category: 'Social Engineering', subcategory: 'Phishing & Proxy', platform: 'Cross-platform', description: 'إطار عمل متقدم يعتمد على Reverse Proxy لتجاوز الـ 2FA.', myNotes: 'الأداة الأخطر لتجاوز المصادقة الثنائية في التصيد.', tags: ['Phishing', '2FA', 'Proxy'], license: 'Open Source' },

  // --- 6. التحليل الجنائي ---
  { id: 'sleuthkit', name: 'SluethKit', category: 'Digital Forensics', subcategory: 'Digital Forensics', platform: 'CLI / Multi-OS', description: 'مجموعة أدوات لتحليل أنظمة الملفات والبحث في الأقراص.', myNotes: 'أساسية في أي تحقيق جنائي.', tags: ['Disk', 'Forensics'], license: 'Open Source' },
  { id: 'autopsy', name: 'Autopsy', category: 'Digital Forensics', subcategory: 'Digital Forensics', platform: 'Cross-platform', description: 'الواجهة الرسومية الشاملة لـ SleuthKit لتحليل الأدلة الجنائية.', myNotes: 'أسهل أداة للبدء في التحقيق الجنائي الرقمي.', tags: ['GUI', 'Forensics'], license: 'Open Source' },
  { id: 'volatility', name: 'Volatility', category: 'Digital Forensics', subcategory: 'Memory Forensics', platform: 'CLI / Multi-OS', description: 'إطار عمل لتحليل الذاكرة (RAM) العشوائية واكتشاف البرمجيات الخبيثة.', myNotes: 'لا غنى عنها في تحليل الذاكرة واستخراج البيانات المؤقتة.', tags: ['Memory', 'RAM', 'Forensics'], license: 'Open Source' },
  { id: 'guymager', name: 'Guymager', category: 'Digital Forensics', subcategory: 'Disk Imaging', platform: 'Linux', description: 'أداة للحصول على نسخ وصور للأقراص بطريقة آمنة وسريعة.', myNotes: 'واجهة بسيطة وتستخدم لأخذ النسخ الجنائية.', tags: ['Imaging', 'Disk'], license: 'Open Source' },
  { id: 'foremost', name: 'Foremost', category: 'Digital Forensics', subcategory: 'Data Recovery', platform: 'CLI / Multi-OS', description: 'أداة لاستعادة الملفات المحذوفة بناءً على الترويسات (Headers).', myNotes: 'قوية جداً في استخراج الملفات من الأقراص المعطوبة.', tags: ['Recovery', 'Files'], license: 'Open Source' },
  { id: 'binwalk', name: 'Binwalk', category: 'Digital Forensics', subcategory: 'Firmware Analysis', platform: 'CLI / Multi-OS', description: 'تحليل واستخراج البيانات المخفية والملفات داخل البرامج الثابتة (Firmware).', myNotes: 'أساسية في هندسة إنترنت الأشياء العكسية.', tags: ['Firmware', 'Extraction'], license: 'Open Source' },
  { id: 'wireshark-forensics', name: 'Wireshark', category: 'Digital Forensics', subcategory: 'Network Forensics', platform: 'Cross-platform', description: 'تحليل حزم البيانات في الشبكات لحل الجرائم الشبكية.', myNotes: 'برنامج التحليل الأول على مستوى العالم لحزم البيانات.', tags: ['Network', 'Packets'], license: 'Open Source' },

  // --- 7. القرصنة اللاسلكية ---
  { id: 'aircrack-ng', name: 'Aircrack-NG', category: 'Wireless Hacking', subcategory: 'Wireless Exploitation', platform: 'CLI / Multi-OS', description: 'حزمة أدوات شاملة لتقييم أمان شبكات الـ Wi-Fi.', myNotes: 'الأشهر على الإطلاق لاختراق شبكات WPA/WEP.', tags: ['Wi-Fi', 'Suite'], license: 'Open Source' },
  { id: 'wifite', name: 'Wifite', category: 'Wireless Hacking', subcategory: 'Automated Wi-Fi Cracking', platform: 'Linux', description: 'أداة أتمتة لعملية اختراق شبكات اللاسلكي تعتمد على Aircrack-ng.', myNotes: 'تسهل العملية وتجعلها آلية بالكامل.', tags: ['Automation', 'Wi-Fi'], license: 'Open Source' },
  { id: 'kismet', name: 'Kismet', category: 'Wireless Hacking', subcategory: 'Wireless Sniffing', platform: 'Linux', description: 'أداة رصد وتحليل لاكتشاف الشبكات اللاسلكية المخفية.', myNotes: 'رائعة في اكتشاف الأجهزة والشبكات بصمت.', tags: ['Sniffing', 'Wi-Fi'], license: 'Open Source' },
  { id: 'tcpdump', name: 'TCPDump', category: 'Wireless Hacking', subcategory: 'Network Packet Analyzer', platform: 'CLI / Multi-OS', description: 'التقاط وتحليل حزم البيانات في سطر الأوامر.', myNotes: 'مثل Wireshark ولكن للـ Terminal.', tags: ['Sniffing', 'Packets'], license: 'Open Source' },
  { id: 'airsnort', name: 'Airsnort', category: 'Wireless Hacking', subcategory: 'Wi-Fi Cracking', platform: 'Linux', description: 'أداة قديمة لكن معروفة في فك تشفير شبكات WEP.', myNotes: 'استُبدلت غالباً بـ Aircrack لكنها أداة كلاسيكية.', tags: ['Cracking', 'WEP'], license: 'Open Source' },
  { id: 'netstumbler', name: 'Netstumbler', category: 'Wireless Hacking', subcategory: 'Wardriving', platform: 'Windows / Linux', description: 'أداة لاكتشاف شبكات Wi-Fi وتحديد مواقعها لغرض الـ Wardriving.', myNotes: 'جيدة لاكتشاف التغطية اللاسلكية والشبكات غير المحمية.', tags: ['Wardriving', 'Wi-Fi'], license: 'Freeware' },
  { id: 'reaver', name: 'Reaver', category: 'Wireless Hacking', subcategory: 'WPS Bruteforce', platform: 'Linux', description: 'تنفيذ هجمات القوة العمياء ضد ثغرة الـ WPS.', myNotes: 'مفيدة لاختراق راوترات الـ WPS القديمة.', tags: ['WPS', 'Bruteforce'], license: 'Open Source' },

  // --- 8. تقييم حماية تطبيقات الويب ---
  { id: 'owasp-zap', name: 'OWASP ZAP', category: 'Web App Security Assessment', subcategory: 'Web Scanner', platform: 'Cross-platform', description: 'أداة مسح واختبار ثغرات مفتوحة المصدر برعاية OWASP.', myNotes: 'الأداة المفضلة لدى الكثيرين لمسح تطبيقات الويب.', tags: ['Web', 'Scanner', 'OWASP'], license: 'Open Source' },
  { id: 'burp-suite-web', name: 'Burp Suite', category: 'Web App Security Assessment', subcategory: 'Web Exploitation', platform: 'Cross-platform', description: 'إطار عمل لاختبار اختراق تطبيقات الويب.', myNotes: 'تم ذكرها مسبقاً، لا غنى عنها في تقييم تطبيقات الويب.', tags: ['Web', 'Proxy', 'Exploitation'], license: 'Commercial/Community' },
  { id: 'nikto', name: 'Nikto', category: 'Web App Security Assessment', subcategory: 'Web Server Scanner', platform: 'CLI / Multi-OS', description: 'فحص خوادم الويب الشامل واكتشاف الملفات والثغرات الشائعة.', myNotes: 'أداة سريعة لاكتشاف ثغرات الـ Web Servers.', tags: ['Web', 'Scanner'], license: 'Open Source' },
  { id: 'zap-web', name: 'ZAP', category: 'Web App Security Assessment', subcategory: 'Web Scanner', platform: 'Cross-platform', description: 'نفس OWASP ZAP (مذكورة مرتين).', myNotes: '', tags: ['Web', 'Scanner'], license: 'Open Source' },
  { id: 'wpscan', name: 'WPScan', category: 'Web App Security Assessment', subcategory: 'WordPress Scanner', platform: 'CLI / Multi-OS', description: 'أداة متخصصة لفحص ثغرات وتكوينات أنظمة إدارة المحتوى WordPress.', myNotes: 'أساسية عند اختبار أي موقع ووردبريس.', tags: ['WordPress', 'Scanner'], license: 'Open Source' },
  { id: 'gobuster-web', name: 'Gobuster', category: 'Web App Security Assessment', subcategory: 'Directory Bruteforce', platform: 'CLI / Multi-OS', description: 'مذكورة مسبقاً، لاكتشاف المسارات في تطبيقات الويب.', myNotes: '', tags: ['Bruteforce', 'Web'], license: 'Open Source' },
  { id: 'app-spider', name: 'App Spider', category: 'Web App Security Assessment', subcategory: 'Web Application Testing', platform: 'Cross-platform', description: 'حل متقدم لتقييم أمان التطبيقات من Rapid7 (حالياً InsightAppSec).', myNotes: 'أداة تجارية قوية لاكتشاف الثغرات في التطبيقات الحديثة.', tags: ['Web', 'Commercial'], license: 'Commercial' }
];

