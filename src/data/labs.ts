export interface LabModule {
  id: string;
  slug: string;
  title: string;
  category: 
    | 'Web Security'
    | 'Network Security'
    | 'Networking'
    | 'Linux'
    | 'OSINT'
    | 'Programming'
    | 'Application Security'
    | 'Defensive Security'
    | 'Security Research';
  categoryArabic: string;
  level: 'Fundamental' | 'Intermediate' | 'Advanced';
  levelArabic: string;
  description: string;
  concepts: string[];
  toolsUsed: string[];
  interactiveDemo?: {
    type: 'input-simulator' | 'code-sandbox' | 'command-runner' | 'visualizer';
    title: string;
    description: string;
    defaultInput?: string;
    sampleOutput?: string;
  };
  content: {
    sectionTitle: string;
    markdown: string;
  }[];
}

export const labsData: LabModule[] = [
  {
    id: "lab-osint-01",
    slug: "passive-reconnaissance-methodology",
    title: "مختبر الـ OSINT: منهجية الاستطلاع السلبي واستخبارات النطاقات",
    category: "OSINT",
    categoryArabic: "استخبارات المصادر المفتوحة",
    level: "Fundamental",
    levelArabic: "أساسي",
    description: "منهجيات استطلاع وجمع معلومات منهجية عبر سجلات DNS العامة، وسجلات شفافية الشهادات (Certificate Transparency)، والتحليل التاريخي للـ WHOIS، واستعلامات محركات البحث المتقدمة (Dorking) دون أي أثر مباشر على أنظمة الهدف.",
    concepts: [
      "تحليل سجلات شفافية الشهادات التشفيرية (crt.sh)",
      "تعداد سجلات الـ DNS الشاملة (A, AAAA, MX, TXT, CNAME, SPF, DMARC)",
      "التجميع العنقودي لسجلات WHOIS وأرقام النظم المستقلة (ASN)",
      "تقنيات الـ Dorking لكشف التكوينات والبيانات الحساسة المعروضة علناً",
      "أرشفة واجهات الويب واسترجاع نقاط النهاية التاريخية عبر Wayback Machine"
    ],
    toolsUsed: ["crt.sh", "Amass", "Sublist3r", "whois", "dig", "Shodan", "Waybackurls"],
    interactiveDemo: {
      type: "input-simulator",
      title: "محاكي استعلامات سجلات الشهادات (CT Logs) واستخبارات DNS",
      description: "استكشف كيف تكشف سجلات الشهادات العامة النطاقات الفرعية الداخلية والبيئات التجريبية للمؤسسات فورياً.",
      defaultInput: "target-enterprise.com",
      sampleOutput: `[+] جاري فحص سجلات crt.sh للنطاق: %target-enterprise.com...
تم العثور على 14 نطاقاً فرعياً موثقاً بشهادات أمان نشطة:
- api.target-enterprise.com (صلاحية الشهادة: 2025 -> 2026)
- dev-internal.target-enterprise.com [قيمة استخباراتية عالية: بيئة تطوير معرضة للـ DNS]
- staging-auth.target-enterprise.com (بوابة تسجيل الدخول التجريبية)
- vpn.target-enterprise.com (بوابة الوصول عن بعد)
- mail.target-enterprise.com (خادم البريد الإلكتروني)

[+] فحص سجلات CNAME المعلقة:
النطاق dev-internal يشير إلى: unresolved-s3-bucket.amazonaws.com (مرشح محتمل لثغرة الاستيلاء على النطاقات الفرعية!)
[+] إجمالي الحزم المرسلة لخادم الهدف الأصلي: 0 حزمة (استطلاع سلبي 100%).`
    },
    content: [
      {
        sectionTitle: "1. فلسفة وقواعد الاستطلاع السلبي (Passive Recon)",
        markdown: `يعتمد الاستطلاع السلبي بالكامل على مصادر البيانات الخارجية التي قامت بفهرسة وأرشفة معلومات المؤسسة مسبقاً، دون إرسال حزمة بيانات واحدة مباشرة لخوادم الهدف.

**أهم المبادئ الأساسية:**
- **انعدام الأثر على أنظمة الرصد (Zero Footprint)**: لا يمكن لأنظمة جدران الحماية (WAF) أو كشف التسلل (IDS) تسجيل أي نشاط، لأن الاستعلامات تتجه لخوادم طرف ثالث مثل Google و crt.sh و Shodan و VirusTotal.
- **الاستطلاع الزمني (Temporal Recon)**: دراسة كيفية تطور البنية التحتية للمؤسسة عبر السنوات تكشف نطاقات قديمة مهملة تعمل ببرمجيات غير محدثة تم نسيان إغلاقها.`
      },
      {
        sectionTitle: "2. الغوص العميق في سجلات شفافية الشهادات (Certificate Transparency)",
        markdown: `عندما تصدر أي هيئة شهادات رقمية (CA) مثل Let's Encrypt أو DigiCert شهادة TLS لنطاق معين، تفرض المعايير الدولية نشر تلك الشهادة فوراً في سجلات عامة غير قابلة للتعديل أو الحذف (Append-Only Logs).

يستفيد الباحث الأمني من ذلك لرصد البنية التحتية الجديدة لحظة تدشينها عبر أوامر بسيطة:
\`\`\`bash
# استعلام مباشر لسجلات crt.sh عبر curl وأداة jq
curl -s "https://crt.sh/?q=%25.target-enterprise.com&output=json" | jq -r '.[].name_value' | sort -u
\`\`\``
      },
      {
        sectionTitle: "3. استخبارات سجلات SPF و TXT في خوادم الأسماء",
        markdown: `غالباً ما تكشف سجلات TXT الخاصة بنطاق الهدف عن قائمة الخدمات السحابية الخارجية التي تستعين بها المؤسسة:
- \`include:_spf.google.com\` -> استخدام بريد Google Workspace
- \`include:servers.mcsv.net\` -> استخدام منصة Mailchimp
- \`include:sendgrid.net\` -> استخدام خدمة SendGrid
- رموز التحقق الخاصة بمنصات مثل Atlassian و Microsoft 365 و DocuSign.`
      }
    ]
  },
  {
    id: "lab-linux-01",
    slug: "linux-privilege-mechanisms-and-hardening",
    title: "مختبر Linux: صلاحيات النواة، إمكانيات POSIX، والتحصين الأمني",
    category: "Linux",
    categoryArabic: "أنظمة لينكس والنواة",
    level: "Intermediate",
    levelArabic: "متوسط",
    description: "دراسة متقدمة في مبادئ الأمان لنظام تشغيل Linux: آليات تشغيل ملفات SUID/SGID، إمكانيات POSIX Capabilities كبديل آمن لصلاحية root الكاملة، وتحصين النواة عبر sysctl ومراقبة نداءات النظام باستخدام auditd.",
    concepts: [
      "آلية عمل واستغلال بت الصلاحية المرتفعة SUID/SGID",
      "إمكانيات POSIX Capabilities (cap_net_raw, cap_setuid, cap_sys_admin)",
      "تحصين معلمات النواة عبر /etc/sysctl.d (ASLR، قيود dmesg، وحماية ptrace)",
      "صياغة قواعد التدقيق في نظام auditd لتعقب عمليات رفع الصلاحيات",
      "مبادئ عزل العمليات (Namespaces) والحاويات (cgroups)"
    ],
    toolsUsed: ["auditd", "getcap / setcap", "find", "strace", "sysctl", "pscap"],
    interactiveDemo: {
      type: "command-runner",
      title: "محاكي فحص صلاحيات وإمكانيات Linux (Capabilities & SUID)",
      description: "اختر أمراً لتشخيصه واكتشاف الثغرات في إعدادات صلاحيات الملفات التنفيذية.",
      defaultInput: "getcap -r /usr/bin 2>/dev/null",
      sampleOutput: `/usr/bin/ping cap_net_raw+ep
/usr/bin/dumpcap cap_net_admin,cap_net_raw+eip
/usr/bin/python3.11 cap_setuid+ep [تحذير حرج: الملف التنفيذي يمتلك إمكانية CAP_SETUID! يسمح لأي مستخدم عادي بالتحول إلى root فوراً بدون الحاجة لبت الـ SUID]`
    },
    content: [
      {
        sectionTitle: "1. المقارنة بين بت الـ SUID وإمكانيات POSIX Capabilities",
        markdown: `تاريخياً في أنظمة UNIX، كان نموذج الصلاحيات ثنائياً: إما أن المستخدم عادي بلا صلاحيات، أو أنه مستخدم فائق (root UID 0). فإذا كان برنامج مثل \`ping\` بحاجة لفتح مقابس شبكية منخفضة، كان لزاماً منحه صلاحية SUID root كاملة (\`chmod 4755 /bin/ping\`)، مما يعني أنه في حال وجود أي ثغرة في البرنامج فإن المهاجم يسيطر على النظام بالكامل.

**إمكانيات POSIX Capabilities** تقسم صلاحيات root الشاملة إلى امتيازات مستقلة ومحدودة:
- \`CAP_NET_RAW\`: تتيح فتح المقابس الشبكية المباشرة دون الحاجة لأي صلاحيات إدارية أخرى.
- \`CAP_SETUID\`: تتيح للعملية تغيير معرّف المستخدم (UID) بحرية، ويجب الحذر الشديد عند إعطائها لأي لغة برمجة نصية مثل Python أو Bash.`
      },
      {
        sectionTitle: "2. التوصيات الأساسية لتحصين نواة Linux عبر sysctl",
        markdown: `إعدادات أمان حيوية يتم تضمينها في ملف \`/etc/sysctl.d/99-security.conf\`:
\`\`\`ini
# تفعيل التوزيع العشوائي لمساحة العناوين (ASLR) بشكل كامل
kernel.randomize_va_space = 2

# حظر وصول المستخدمين العاديين لسجلات النواة dmesg
kernel.dmesg_restrict = 1

# تقييد تتبع العمليات ptrace لمنع حقن الشيفرات الخبيثة بين العمليات
kernel.yama.ptrace_scope = 2

# تعطيل تشغيل eBPF للمستخدمين غير المصرح لهم لحماية ذاكرة النواة
kernel.unprivileged_bpf_disabled = 1

# حماية النظام من هجمات الروابط الصلبة والرمزية (Symlink / Hardlink TOCTOU)
fs.protected_hardlinks = 1
fs.protected_symlinks = 1
\`\`\``
      }
    ]
  },
  {
    id: "lab-net-01",
    slug: "network-traffic-dissection-and-protocols",
    title: "مختبر الشبكات: تشريح حزمة بروتوكولات TCP/IP وفحص الحزم",
    category: "Networking",
    categoryArabic: "أمان الشبكات والبروتوكولات",
    level: "Fundamental",
    levelArabic: "أساسي",
    description: "تحليل عميق لبروتوكولات طبقة النقل والتطبيقات: المصافحة الثلاثية لبروتوكول TCP، الدفاع ضد هجمات الـ SYN Flood عبر SYN Cookies، ودورة التفاوض التشفيري لبروتوكول TLS 1.3.",
    concepts: [
      "المصافحة الثلاثية لـ TCP (SYN, SYN-ACK, ACK) وإنهاء الاتصال",
      "أرقام التسلسل والإشعار (Sequence & Acknowledgment Numbers)",
      "الاستعلامات التكرارية والعودية في DNS ودفاعات تسميم الذاكرة المخبأة",
      "تبادل المفاتيح التشفيرية في TLS 1.3 عبر منحنيات ECDHE",
      "جدران الحماية القائمة على الحالة (Stateful) وتصفية الحزم عبر iptables"
    ],
    toolsUsed: ["Wireshark", "tcpdump", "tshark", "iptables / nftables", "scapy", "dig"],
    interactiveDemo: {
      type: "visualizer",
      title: "محاكي تسلسل حزم المصافحة الثلاثية وبروتوكول TLS 1.3",
      description: "رسم تسلسلي يوضح أعلام TCP وتدفق المفاتيح التشفيرية عند تأسيس الاتصال المشفر.",
      defaultInput: "curl -v https://api.secure-endpoint.io",
      sampleOutput: `[الخطوة 1] العميل -> الخادم: [SYN] Seq=0 Win=64240 Len=0 MSS=1460 (بدء طلب الاتصال)
[الخطوة 2] الخادم -> العميل: [SYN, ACK] Seq=0 Ack=1 Win=65160 Len=0 MSS=1460 (الموافقة والإشعار)
[الخطوة 3] العميل -> الخادم: [ACK] Seq=1 Ack=1 Win=64240 Len=0 (اكتمال المصافحة ودخول حالة ESTABLISHED)
[الخطوة 4] العميل -> الخادم: [TLS 1.3 Client Hello] خوارزميات التشفير: TLS_AES_256_GCM_SHA384
[الخطوة 5] الخادم -> العميل: [TLS 1.3 Server Hello] تبادل المفتاح عبر منحنى x25519 وبدء التشفير التام`
    },
    content: [
      {
        sectionTitle: "1. تشريح حالات اتصال بروتوكول TCP",
        markdown: `يعد TCP بروتوكولاً موجهاً للاتصال يوفر نقلاً موثوقاً للبيانات، حيث يعتمد على أرقام تسلسل بطول 32 بت لضمان وصول الحزم بترتيبها الصحيح والتعرف على أي حزم مفقودة لإعادة إرسالها.

في هجمات الـ SYN Flood، يقوم المهاجم بإغراق الخادم بآلاف طلبات الاتصال الأولية (SYN) بعناوين وهمية دون إتمام الخطوة الثالثة (ACK)، مما يستنزف مساحة طابور الانتظار في الخادم.
**الحل الدفاعي: كعكات SYN (SYN Cookies)**: حيث يقوم الخادم بتشفير معلومات الاتصال داخل رقم التسلسل الأولي (ISN) دون حجز مساحة في الذاكرة حتى يعود العميل بطلب الـ ACK الصحيح.`
      },
      {
        sectionTitle: "2. فحص وتصفية الحزم باحترافية عبر أداة tcpdump",
        markdown: `صيغ وتعبيرات تصفية ضرورية للتحليل الأمني السريع:
\`\`\`bash
# التقاط حزم بدء الاتصال فقط (SYN بدون ACK) لرصد عمليات المسح
tcpdump -nn -i eth0 'tcp[tcpflags] & (tcp-syn) != 0 and tcp[tcpflags] & (tcp-ack) == 0'

# التقاط طلبات واستجابات DNS على المنفذ 53
tcpdump -vv -i eth0 udp port 53

# عرض محتوى ترويسات طلبات HTTP النصية
tcpdump -A -s 0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12:2]&0xf0)>>2)) != 0)'
\`\`\``
      }
    ]
  },
  {
    id: "lab-web-01",
    slug: "web-security-owasp-deep-dive",
    title: "مختبر أمان الويب: ثغرات OWASP Top 10 والهندسة الدفاعية",
    category: "Web Security",
    categoryArabic: "أمان تطبيقات الويب",
    level: "Intermediate",
    levelArabic: "متوسط",
    description: "مختبر عملي ودفاعي يغطي ثغرات حقن النصوص البرمجية (XSS بأنواعها الثلاثة)، وحقن قواعد البيانات (SQLi)، وأخطاء مشاركة الموارد عبر الأصول (CORS)، وهندسة سياسة أمان المحتوى الصارمة (CSP).",
    concepts: [
      "الهروب من النصوص بحسب السياق (Context-Aware Output Encoding)",
      "مصادر ومستنقعات ثغرات DOM XSS (innerHTML, eval, document.write)",
      "حقن قواعد البيانات واستخدام الاستعلامات المهيأة (Prepared Statements)",
      "تكوينات CORS الكارثية (قبول Null أو التجاوب مع أي Origin)",
      "تصميم سياسة Content Security Policy متقدمة بالاعتماد على Nonces"
    ],
    toolsUsed: ["Burp Suite", "OWASP ZAP", "ffuf", "sqlmap", "Postman", "Browser DevTools"],
    interactiveDemo: {
      type: "code-sandbox",
      title: "محاكي الهروب التشفيري المعتمد على السياق للحماية من XSS",
      description: "اختبر كيف تتطلب سياقات عرض المتصفح المختلفة (HTML Body, Attribute, JavaScript) قواعد تعقيم منفصلة.",
      defaultInput: `<script>alert(document.domain)</script>`,
      sampleOutput: `السياق 1: داخل جسم الصفحة (HTML Body)
الناتج المعقم: &lt;script&gt;alert(document.domain)&lt;/script&gt; [آمن تماماً]

السياق 2: داخل خاصية عنصر (<input value="USER_INPUT">)
الناتج المعقم: &quot;&gt;&lt;script&gt;alert(document.domain)&lt;/script&gt; [آمن تماماً]

السياق 3: داخل كود جافاسكريبت المضمن (let user = 'USER_INPUT';)
الناتج المعقم: \\x3cscript\\x3ealert(document.domain)\\x3c/script\\x3e [آمن عبر الترميز السداسي عشر]`
    },
    content: [
      {
        sectionTitle: "1. تشريح هجمات XSS وأسباب فشل الفلاتر البسيطة",
        markdown: `تتيح ثغرات حقن النصوص البرمجية (XSS) للمهاجم تنفيذ شيفرات جافاسكريبت خبيثة داخل متصفح الضحية في سياق جلسته المصرح بها.
السبب الجذري دوماً هو خلط البيانات القادمة من المستخدم غير الموثوق مع الشيفرات البرمجية القابلة للتنفيذ في شجرة الـ DOM:
- **Reflected XSS**: ترتد الحمولة مباشرة من رابط الطلب وتنعكس في استجابة الصفحة.
- **Stored XSS**: تُخزن الحمولة في قاعدة البيانات وتُعرض لكافة المستخدمين لاحقاً.
- **DOM-based XSS**: تحدث بالكامل داخل متصفح المستخدم عندما تقرأ كود JS محلي مدخلات غير موثوقة (مثل \`location.hash\`) وتمررها لدوال غير آمنة (مثل \`innerHTML\`).`
      },
      {
        sectionTitle: "2. المخطط الهندسي لسياسة أمان المحتوى الصارمة (CSP)",
        markdown: `توفر سياسة CSP خط دفاع استباقي يفرضه المتصفح لمنع تنفيذ الأكواد المحقونة حتى لو وجدت ثغرة إدخال في الخادم:
\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-rAnd0mSecretKey'; object-src 'none'; base-uri 'self'; frame-ancestors 'none';
\`\`\`
- \`object-src 'none'\`: تمنع استغلال ملحقات المتصفح القديمة مثل Flash.
- \`base-uri 'self'\`: تمنع إعادة توجيه الروابط النسبية عبر حقن وسم \`<base>\`.
- \`frame-ancestors 'none'\`: تمنع تضمين موقعك داخل iframes لحمايته من هجمات الاختطاف بالنقرات (Clickjacking).`
      }
    ]
  },
  {
    id: "lab-prog-01",
    slug: "security-scripting-and-automation",
    title: "مختبر البرمجة: سكربتات Python و Bash لأتمتة الأمن السيبراني",
    category: "Programming",
    categoryArabic: "البرمجة والأتمتة الأمنية",
    level: "Intermediate",
    levelArabic: "متوسط",
    description: "تطوير أدوات وسكربتات أمنية متقدمة: ماسحات منافذ غير متزامنة، محركات تخمين الترويسات (Fuzzers)، فاحصات السجلات، وتطبيقات التشفير الآمنة بلغات البرمجة الحديثة.",
    concepts: [
      "البرمجة الشبكية غير المتزامنة عبر مكتبات asyncio و aiohttp في Python",
      "معالجة سجلات القياس وتحليل الفوارق الزمنية آلياً",
      "المعايير الصارمة لكتابة سكربتات Bash دفاعية (set -euo pipefail و trap)",
      "توليد المفاتيح التشفيرية الآمنة باستخدام Argon2 و PBKDF2",
      "أتمتة الفحوصات الأمنية في بيئات التكامل المستمر (CI/CD GitHub Actions)"
    ],
    toolsUsed: ["Python 3", "Bash", "asyncio", "cryptography library", "pytest", "Docker"],
    interactiveDemo: {
      type: "code-sandbox",
      title: "أداة فحص المنافذ الشبكية غير المتزامنة (Asyncio Port Probe)",
      description: "شيفرة بايثون تستخدم حلقة الأحداث (Event Loop) لفحص مئات المقابس الشبكية في أجزاء من الثانية.",
      defaultInput: `import asyncio

async def check_port(host, port):
    try:
        reader, writer = await asyncio.wait_for(
            asyncio.open_connection(host, port), timeout=1.0
        )
        print(f"[+] المنفذ {port} مفتوح على {host}")
        writer.close()
        await writer.wait_closed()
    except (asyncio.TimeoutError, ConnectionRefusedError, OSError):
        pass

async def main():
    target = "api.security-test.local"
    ports = [22, 80, 443, 8080, 8443]
    await asyncio.gather(*(check_port(target, p) for p in ports))

asyncio.run(main())`,
      sampleOutput: `[+] المنفذ 22 مفتوح على api.security-test.local (SSH-2.0-OpenSSH)
[+] المنفذ 80 مفتوح على api.security-test.local (HTTP)
[+] المنفذ 443 مفتوح على api.security-test.local (HTTPS / TLS 1.3)
[+] المنفذ 8443 مفتوح على api.security-test.local (Alt-HTTPS)
اكتمل الفحص بالكامل في 0.12 ثانية بدون حجز مسارات Threads متعددة.`
    },
    content: [
      {
        sectionTitle: "1. لماذا تعد البرمجة غير المتزامنة (Async I/O) ضرورة لأدوات الأمان؟",
        markdown: `تقضي السكربتات الأمنية التقليدية المتزامنة أكثر من 90% من وقت تشغيلها في انتظار استجابات الشبكة (Network Latency) وزمن انتهاء الاتصال (Timeouts).
يتيح استخدام \`asyncio\` لخيط معالجة فردي إدارة آلاف اتصالات المقابس الشبكية المفتوحة بالتوازي دون استهلاك ذاكرة النظام أو حمل تبديل السياق بين المسارات (Thread Context Switching).`
      },
      {
        sectionTitle: "2. المعايير القياسية لكتابة سكربتات Bash الدفاعية",
        markdown: `ابدأ دائماً أي سكربت أمني بهذه الأعلام الدفاعية لضمان التوقف عند أول خطأ وتنظيف الملفات المؤقتة:
\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\\n\\t'

# تنظيف المجلدات المؤقتة تلقائياً عند انتهاء السكربت أو مقاطعته
trap 'rm -rf "\${TEMP_DIR:-}"' EXIT INT TERM

TEMP_DIR=$(mktemp -d)
\`\`\``
      }
    ]
  },
  {
    id: "lab-appsec-01",
    slug: "application-security-sast-and-secrets",
    title: "مختبر أمان التطبيقات: فحص الشفرات الثابت (SAST) وإدارة الأسرار",
    category: "Application Security",
    categoryArabic: "أمان التطبيقات والبرمجيات",
    level: "Advanced",
    levelArabic: "متقدم",
    description: "بناء مسارات فحص الشفرات المصدرية الثابتة (SAST)، تحليل شجرة الاعتماديات (SCA)، رصد تسريب المفاتيح والأسرار التشفيرية، وضبط معايير الأمان في خطوط الإنتاج البرمجي.",
    concepts: [
      "فحص الشفرة الدلالي المتقدم عبر محرك قواعد Semgrep",
      "تحليل شجرة الاعتماديات ومطابقة ثغرات CVE في المكتبات الخارجية",
      "رصد تسريب مفاتيح API وعينات JWT باستخدام التعبيرات النمطية وحساب الإنتروبيا",
      "تطبيق ضوابط توقيع الحزم والتأكد من سلسلة التوريد (Software Supply Chain)"
    ],
    toolsUsed: ["Semgrep", "Trivy", "Gitleaks", "Cosign"],
    interactiveDemo: {
      type: "code-sandbox",
      title: "محاكي فحص قواعد Semgrep لكشف الثغرات الدلالية",
      description: "اكتشف كيف تلتقط قواعد Semgrep استدعاءات الدوال غير الآمنة حتى مع تغيير أسماء المتغيرات.",
      defaultInput: `def handle_query(request):
    user_id = request.GET.get('id')
    query = f"SELECT * FROM users WHERE id = {user_id}"
    cursor.execute(query) # Vulnerability!`,
      sampleOutput: `[!] ALERT: Rule "sql-injection-raw-string-format" matched:
السطر 3: تم اكتشاف صياغة استعلام SQL باستخدام تنسيق النصوص الخام f-string!
الخطورة: HIGH (CWE-89)
الحل المقترح: استخدم الاستعلامات المعلمة (Parameterized Queries):
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))`
    },
    content: [
      {
        sectionTitle: "1. التحليل الدلالي للشفرات مقابل التعبيرات النمطية",
        markdown: `تتجاوز أدوات SAST الحديثة مثل Semgrep مجرد البحث بالنصوص أو Regex، حيث تقوم ببناء شجرة الإعراب التجريدية (AST) لفهم تدفق البيانات وتتبع مصادر المدخلات غير الموثوقة (Sources) حتى وصولها لنقاط التنفيذ الحساسة (Sinks).`
      }
    ]
  },
  {
    id: "lab-defense-01",
    slug: "defensive-detection-engineering-sigma",
    title: "مختبر الأمان الدفاعي: هندسة قواعد الكشف والرصد الاستباقي",
    category: "Defensive Security",
    categoryArabic: "الأمان الدفاعي وهندسة الكشف",
    level: "Advanced",
    levelArabic: "متقدم",
    description: "صياغة قواعد الكشف الموحدة بصيغة Sigma، تحليل سلوك العمليات المشبوهة، ربط أحداث سجلات Sysmon و Windows Event Logs، وهندسة استجابة للحوادث مبنية على إطار MITRE ATT&CK.",
    concepts: [
      "بناء قواعد Sigma المحايدة وتحويلها لمحركات Splunk و Elastic و QRadar",
      "تحليل سجلات Sysmon لرصد تقنيات Process Injection و Hollow Processes",
      "مراقبة استدعاءات PowerShell المشفرة ومحاولات تجاوز AMSI",
      "رصد الاتصالات المشبوهة لمنافذ القيادة والتحكم (C2 Beaconing)"
    ],
    toolsUsed: ["Sigma", "Suricata", "Wazuh", "Sysmon", "Elasticsearch"],
    interactiveDemo: {
      type: "code-sandbox",
      title: "محاكي فحص مطابقة قواعد Sigma مع سجلات الأحداث",
      description: "شاهد كيف تكتشف قاعدة Sigma محاولات تشغيل PowerShell بترميز Base64 المخادع.",
      defaultInput: `powershell.exe -NoP -NonI -W Hidden -Enc SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQA...`,
      sampleOutput: `[!] DETECTED: MITRE ATT&CK T1059.001 - PowerShell Obfuscation
القاعدة: Suspicious Encoded PowerShell Command-Line
النتيجة: تم رصد راية -Enc مع نافذة مخفية (-W Hidden) ونمط اتصال بالذاكرة.
الإجراء الدفاعي: عزل نقطة النهاية آلياً ورفع تنبيه حرج لمركز العمليات الأمنية (SOC).`
    },
    content: [
      {
        sectionTitle: "1. مبادئ هندسة الكشف الحديثة (Detection as Code)",
        markdown: `التحول من مجرد مراقبة التنبيهات إلى معاملة قواعد الكشف كبرمجيات تخضع لاختبارات الوحدة (Unit Testing)، ومراجعة الشفرة، وتتبع النسخ عبر Git، مما يقلل الإنذارات الكاذبة بنسبة تتجاوز 80%.`
      }
    ]
  },
  {
    id: "lab-research-01",
    slug: "vulnerability-research-root-cause-analysis",
    title: "مختبر أبحاث الثغرات: تشريح الأسباب الجذرية واستكشاف الأخطاء المعمارية",
    category: "Security Research",
    categoryArabic: "أبحاث الثغرات والتحليل الأمني",
    level: "Advanced",
    levelArabic: "متقدم",
    description: "منهجيات متقدمة لتفكيك الثغرات الأمنية المعقدة: ظروف السباق (Race Conditions)، تناقضات بروتوكولات HTTP/2 (Request Smuggling)، وتصنيف الثغرات المعمارية لتطوير حلول دفاعية مستدامة.",
    concepts: [
      "إعادة إنتاج الثغرات وتوثيق سيناريو الاستغلال في بيئات معزولة (PoC)",
      "تحليل تناقضات محركات التحليل بين خوادم الـ Reverse Proxy والـ Backend",
      "قياس وتوثيق درجات الخطورة وفق نظام CVSS v3.1 بدقة",
      "صياغة تقارير الإفصاح الأمني المسؤول (Responsible Disclosure Reports)"
    ],
    toolsUsed: ["AFL++", "GDB", "Wireshark", "Burp Suite Turbo Intruder"],
    interactiveDemo: {
      type: "code-sandbox",
      title: "محاكي تحليل تناقضات ترويسات Content-Length و Transfer-Encoding",
      description: "استكشف كيف تسبب تباينات تفسير الترويسات بين خوادم الوكيل ومخدمات التطبيقات ثغرات تهريب الطلبات.",
      defaultInput: `POST / HTTP/1.1
Host: vulnerable-cdn.com
Content-Length: 13
Transfer-Encoding: chunked

0

SMUGGLED_REQ`,
      sampleOutput: `[+] تحليل تدفق الطلب عبر طبقات المعمارية:
1. الوكيل الأمامي (Frontend): اعتمد Content-Length: 13 وقام بتمرير الحزمة بالكامل.
2. الخادم الخلفي (Backend): اعتمد Transfer-Encoding: chunked واعتبر "0\\r\\n\\r\\n" نهاية الطلب!
[!] النتيجة: البيانات المتبقية "SMUGGLED_REQ" تم تفسيرها كبداية للطلب التالي لمستخدم بريء!
التقييم: Critical (CVSS 9.8) - ثغرة HTTP Request Smuggling مؤكدة.`
    },
    content: [
      {
        sectionTitle: "1. الفلسفة البحثية: من كشف الثغرة إلى التحصين المعماري",
        markdown: `لا تقتصر أبحاث الأمان على إثبات إمكانية كسر النظام، بل تركز على الإجابة عن السؤال الجوهري: "لماذا فشل النظام المعماري في منع هذا السلوك؟"، وتوثيق الحل البرمجي الذي يمنع فئة الثغرة كاملة وليس فقط المتجه المحدد.`
      }
    ]
  }
];

