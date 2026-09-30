import { AchievementItem } from '../types';

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-01",
    title: "أكاديمية PortSwigger لأمان الويب: مسارا المتدرب والممارس (Apprentice & Practitioner)",
    issuer: "PortSwigger",
    date: "2025",
    category: "Course",
    description: "إتمام المختبرات العملية المكثفة التي تغطي ثغرات SQLi، و XSS، و CSRF، و SSRF، و CORS، وهجمات كسر الصلاحيات، وخداع التخزين المؤقت.",
    verificationUrl: "https://portswigger.net/web-security"
  },
  {
    id: "ach-02",
    title: "مسارات أساسيات الأمان ومسار المبتدئ الشامل على منصة TryHackMe",
    issuer: "TryHackMe",
    date: "2024",
    category: "CTF Achievement",
    description: "إتمام الوحدات التدريبية المنهجية في أساسيات الشبكات، وسطر أوامر Linux، وأساسيات الويب، وتقنيات الهجوم والدفاع الأولية.",
    verificationUrl: "https://tryhackme.com"
  },
  {
    id: "ach-03",
    title: "مختبرات Hack The Box: نقطة البداية وخوادم Tier I/II",
    issuer: "Hack The Box",
    date: "2025",
    category: "CTF Achievement",
    description: "حل أجهزة مختبرات Linux و Windows التعليمية بنجاح عبر استطلاع الخدمات المفتوحة، واكتشاف الأخطاء التكوينية، ورفع الصلاحيات محلياً.",
    verificationUrl: "https://app.hackthebox.com"
  },
  {
    id: "ach-04",
    title: "[مكان مخصص للشهادات المعتمدة القادمة - مثال: CompTIA Security+ / eJPT / OSCP]",
    issuer: "[الجهة المانحة]",
    date: "[التاريخ المستهدف]",
    category: "Certification",
    description: "خانة مجهزة لإضافة الشهادات الاحترافية فور الحصول عليها مع رابط التحقق الرسمي؛ يمكن تعديلها بسهولة عبر ملف src/data/achievements.ts.",
    isPlaceholder: true
  },
  {
    id: "ach-05",
    title: "[مكان مخصص لتقديرات برامج صيد الثغرات - Hall of Fame / VDP]",
    issuer: "[المنصة / المؤسسة]",
    date: "[السنة]",
    category: "Bug Bounty",
    description: "خانة مخصصة لتوثيق الإفصاحات المسؤولة أو شكر المؤسسات في لوحات الشرف الخاصة بها عند التبليغ عن ثغرات أمنية.",
    isPlaceholder: true
  }
];

