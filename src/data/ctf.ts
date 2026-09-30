import { CTFItem } from '../types';

export const ctfData: CTFItem[] = [
  {
    id: "ctf-001",
    title: "مختبر PortSwigger: حقن SQL الأعمى مع الأخطاء الشرطية",
    platform: "PortSwigger Web Academy",
    category: "Web",
    difficulty: "Medium",
    date: "2025-10-12",
    synopsis: "استغلال ثغرة حقن SQL غير مباشرة داخل كعكة تتبع الجلسة، حيث لا يرجع التطبيق أي مخرجات من قاعدة البيانات، بل يتغير سلوكه البرمجي عند إحداث خطأ تشغيلي متعمد عبر القسمة على الصفر في خوادم Oracle.",
    techniques: [
      "حقن SQL الأعمى (Blind SQLi)",
      "إحداث أخطاء القسمة على الصفر في Oracle",
      "التقييم الشرطي CASE WHEN",
      "استخراج المحارف باستخدام البحث الثنائي (Binary Search)"
    ],
    flagsCaptured: 1,
    solved: true
  },
  {
    id: "ctf-002",
    title: "تحدي HackTheBox: Crafty - استغلال ثغرة Log4j وتنفيذ الأوامر",
    platform: "HackTheBox",
    category: "Web",
    difficulty: "Easy",
    date: "2025-08-20",
    synopsis: "استغلال ثغرة Log4Shell (CVE-2021-44228) عبر خادم محادثة مخصص في لعبة Minecraft للحصول على اتصال عكسي أولي، ثم رفع الصلاحيات عبر استغلال بيانات الاعتماد المحفوظة في خدمة Windows RunAs.",
    techniques: [
      "حقن استعلامات Log4j JNDI",
      "إنشاء خادم LDAP خبيث للتحويل",
      "رفع الصلاحيات في بيئة Windows",
      "تحليل العمليات الجارية"
    ],
    flagsCaptured: 2,
    solved: true
  },
  {
    id: "ctf-003",
    title: "تحدي TryHackMe: RootMe - رفع قذيفة الويب واستغلال SUID",
    platform: "TryHackMe",
    category: "Web",
    difficulty: "Easy",
    date: "2025-07-04",
    synopsis: "تجاوز فلاتر رفع الملفات البسيطة باستخدام امتداد PHP بديل (.phtml)، والحصول على قذيفة عكسية للمستخدم العادي، ثم استغلال مفسر Python الذي يحمل بت SUID للوصول لصلاحيات root الكاملة.",
    techniques: [
      "تجاوز فلاتر امتدادات الملفات",
      "إنشاء قذيفة عكسية (Reverse Shell)",
      "البحث عن ملفات SUID الخطرة",
      "استغلال Python للتحول إلى root"
    ],
    flagsCaptured: 2,
    solved: true
  },
  {
    id: "ctf-004",
    title: "تحدي PicoCTF: Stonks - ثغرة سلاسل التنسيق في لغة C",
    platform: "PicoCTF",
    category: "Pwn",
    difficulty: "Medium",
    date: "2025-05-18",
    synopsis: "تحليل برنامج تنفيذي بلغة C يستدعي دالة printf مباشرة مع مدخلات المستخدم دون تحديد محددات التنسيق، مما يسمح بقراءة عناوين الذاكرة المكدسة (Stack) واستخراج نص الراية.",
    techniques: [
      "استغلال سلاسل التنسيق Format Strings (%x, %s, %p)",
      "فحص ذاكرة المكدس (Stack)",
      "عكس ترتيب البايتات (Endianness)",
      "التنقيح باستخدام مصحح GDB"
    ],
    flagsCaptured: 1,
    solved: true
  },
  {
    id: "ctf-005",
    title: "تحدي TryHackMe: Overpass - كسر التشفير الضعيف للمفاتيح",
    platform: "TryHackMe",
    category: "Cryptography",
    difficulty: "Medium",
    date: "2025-03-29",
    synopsis: "اكتشاف خلل في توليد توكنات تسجيل الدخول في كود جافاسكريبت بالمتصفح، واستخراج مفتاح SSH مشفر، ثم كسر عبارة المرور باستخدام أداة John the Ripper.",
    techniques: [
      "تجاوز المصادقة من جانب العميل",
      "كسر عبارات مرور مفاتيح SSH",
      "استغلال المهام المجدولة (Cron Jobs)",
      "رفع الصلاحيات المحلية"
    ],
    flagsCaptured: 2,
    solved: true
  }
];

