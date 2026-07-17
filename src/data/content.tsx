import {
  Activity,
  Award,
  Brain,
  Building2,
  Crown,
  Flame,
  Flower2,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Languages,
  Lightbulb,
  MessageCircle,
  MoonStar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sunrise,
  TrendingUp,
  Users,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type SectionId = "features" | "solutions" | "plans" | "learning";

export interface SectionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  meta?: string;
}

export interface Plan {
  icon: LucideIcon;
  name: string;
  price: string;
  unit?: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  soon?: boolean;
}

export interface SectionData {
  id: SectionId;
  nav: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accent: string; // gradient classes for the icon chip
  glow: string; // radial glow colour on hover
  items?: SectionItem[];
  plans?: Plan[];
}

export const SECTIONS: SectionData[] = [
  {
    id: "features",
    nav: "ویژگی‌ها",
    title: "ویژگی‌ها",
    tagline: "به‌زودی منتشر می‌شود",
    description:
      "علی‌پسی با ترکیب مدل‌های زبانی پیشرفته و چارچوب‌های علمی روانشناسی، تجربه‌ای امن، همدلانه و شخصی‌سازی‌شده می‌سازد.",
    icon: Sparkles,
    accent: "from-indigo-500 to-violet-500",
    glow: "bg-indigo-500",
    items: [
      {
        icon: Brain,
        title: "تحلیل هوشمند احساسات",
        desc: "پردازش گفتار و متن برای درک لحظه‌ای وضعیت هیجانی شما و واکنش متناسب با آن.",
        meta: "هوش مصنوعی",
      },
      {
        icon: MessageCircle,
        title: "گفت‌وگوی همدلانه",
        desc: "پاسخ‌های انسانی و بدون قضاوت، در هر ساعت از شبانه‌روز؛ حتی سخت‌ترین لحظه‌ها.",
        meta: "۲۴ / ۷",
      },
      {
        icon: Activity,
        title: "ردیابی پیشرفت",
        desc: "نمودار خلق‌وخو و روند بهبود شما در طول زمان، با گزارش‌های هفتگی خوانا.",
        meta: "تحلیل روند",
      },
      {
        icon: ShieldCheck,
        title: "حریم خصوصی مطلق",
        desc: "رمزنگاری کامل گفت‌وگوها؛ هیچ داده حساسی بدون اجازه شما ذخیره نمی‌شود.",
        meta: "۱۰۰٪ محرمانه",
      },
      {
        icon: Languages,
        title: "دوزبانه؛ فارسی و انگلیسی",
        desc: "درک عمیق فرهنگ و زبان فارسی، در کنار پشتیبانی کامل از انگلیسی.",
        meta: "FA / EN",
      },
      {
        icon: Zap,
        title: "پاسخ آنی",
        desc: "بدون نوبت، بدون انتظار؛ کافی است بنویسید تا همراهی آغاز شود.",
        meta: "بدون انتظار",
      },
    ],
  },
  {
    id: "solutions",
    nav: "راهکارها",
    title: "راهکارها",
    tagline: "درمان با تکنیک‌های علمی",
    description:
      "برنامه‌های هدایت‌شده بر پایه رویکردهای اثبات‌شده روانشناسی؛ از CBT تا ذهن‌آگاهی، متناسب با نیاز شما.",
    icon: HeartPulse,
    accent: "from-fuchsia-500 to-rose-500",
    glow: "bg-fuchsia-500",
    items: [
      {
        icon: HeartPulse,
        title: "درمان اضطراب",
        desc: "تکنیک‌های CBT، تنفس هدایت‌شده و مواجهه تدریجی برای کاهش نشانه‌های اضطراب.",
        meta: "برنامه ۴ هفته‌ای",
      },
      {
        icon: Sunrise,
        title: "غلبه بر افسردگی",
        desc: "فعال‌سازی رفتاری و ردیابی خلق برای بازگرداندن انرژی و معنا به روزهای شما.",
        meta: "برنامه ۶ هفته‌ای",
      },
      {
        icon: Wind,
        title: "کنترل استرس",
        desc: "تمرین‌های ذهن‌آگاهی و مدیتیشن کوتاه روزانه برای آرام‌سازی سیستم عصبی.",
        meta: "روزانه ۱۰ دقیقه",
      },
      {
        icon: MoonStar,
        title: "خواب آرام",
        desc: "بهداشت خواب، روال‌های شب‌گاهی و صداهای تمرکز برای خوابی عمیق‌تر.",
        meta: "روال شبانه",
      },
      {
        icon: Users,
        title: "مهارت‌های رابطه",
        desc: "گوش دادن فعال، مرزبندی سالم و حل تعارض در روابط عاطفی و کاری.",
        meta: "تمرین تعاملی",
      },
      {
        icon: Flame,
        title: "مدیریت خشم",
        desc: "شناسایی محرک‌ها، مکث آگاهانه و بازتنظیم هیجان پیش از واکنش.",
        meta: "برنامه ۳ هفته‌ای",
      },
    ],
  },
  {
    id: "plans",
    nav: "طرح‌ها",
    title: "طرح‌ها",
    tagline: "متناسب با هر نیاز",
    description:
      "مسیر خود را انتخاب کنید؛ از شروع ساده تا همراهی کامل. همه طرح‌ها شامل پشتیبانی اختصاصی در تلگرام هستند.",
    icon: Crown,
    accent: "from-amber-400 to-orange-500",
    glow: "bg-amber-400",
    plans: [
      {
        icon: Rocket,
        name: "پلن A — پایه",
        price: "۵٬۰۰۰٬۰۰۰",
        unit: "تومان",
        features: [
          "گفت‌وگوی نامحدود با دستیار",
          "تمرین‌های روزانه خودشناسی",
          "ردیابی خلق‌وخو هفتگی",
          "پشتیبانی در تلگرام",
        ],
      },
      {
        icon: Crown,
        name: "پلن B — پیشرفته",
        price: "۱۰٬۰۰۰٬۰۰۰",
        unit: "تومان",
        highlight: true,
        badge: "پیشنهاد ویژه",
        features: [
          "تمام امکانات پلن پایه",
          "برنامه درمانی شخصی‌سازی‌شده",
          "گزارش پیشرفت تحلیلی ماهانه",
          "جلسه ماهانه با روانشناس",
          "اولویت پشتیبانی اختصاصی",
        ],
      },
      {
        icon: Building2,
        name: "پلن سازمانی",
        price: "به‌زودی",
        soon: true,
        features: [
          "داشبورد سلامت روان سازمان",
          "کارگاه‌های آموزشی گروهی",
          "گزارش‌گیری ناشناس برای مدیران",
        ],
      },
    ],
  },
  {
    id: "learning",
    nav: "یادگیری",
    title: "یادگیری",
    tagline: "مهارت‌هایی برای تمام عمر",
    description:
      "دوره‌های کوتاه و کاربردی با زبان ساده؛ هر مسیر شامل تمرین عملی و آزمون خودارزیابی است.",
    icon: GraduationCap,
    accent: "from-emerald-400 to-teal-500",
    glow: "bg-emerald-400",
    items: [
      {
        icon: Wind,
        title: "مدیریت استرس",
        desc: "شناخت چرخه استرس و ابزارهای عملی برای شکستن آن در لحظه.",
        meta: "۸ جلسه",
      },
      {
        icon: Award,
        title: "اعتماد به نفس",
        desc: "بازسازی گفت‌وگوی درونی و قدم‌های کوچک برای حضور قاطع‌تر.",
        meta: "۶ جلسه",
      },
      {
        icon: Lightbulb,
        title: "کنترل افکار",
        desc: "شناسایی خطاهای شناختی و تکنیک توقف فکر برای ذهنی آرام‌تر.",
        meta: "۷ جلسه",
      },
      {
        icon: HeartHandshake,
        title: "هوش هیجانی",
        desc: "درک، نام‌گذاری و مدیریت هیجان‌ها برای تصمیم‌های بهتر.",
        meta: "۹ جلسه",
      },
      {
        icon: Flower2,
        title: "ذهن‌آگاهی",
        desc: "زندگی در لحظه حال با مدیتیشن‌های کوتاه و هدایت‌شده.",
        meta: "۵ جلسه",
      },
      {
        icon: TrendingUp,
        title: "رشد فردی",
        desc: "هدف‌گذاری معنادار و عادت‌سازی پایدار برای نسخه بهتر خودتان.",
        meta: "۱۰ جلسه",
      },
    ],
  },
];

export const TELEGRAM_REGISTER = "https://t.me/s_alipsy_ai";
export const TELEGRAM_SUPPORT = "https://t.me/alipsy405_ir";
