import { GraduationCap, Heart, Send } from "lucide-react";
import { SECTIONS, TELEGRAM_REGISTER, TELEGRAM_SUPPORT } from "../data/content";

export default function Footer() {
  const goTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.06] bg-gradient-to-b from-transparent to-[#0a0424]/80">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-violet-700/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/25">
              <GraduationCap className="h-5 w-5 text-white" strokeWidth={2.2} />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-white">دانشگاه آزاد اسلامی قم</p>
              <p
                dir="ltr"
                className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45"
              >
                Alipsy AI
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#8d8798]">
            پروژه‌ای از دانشگاه آزاد اسلامی قم برای دسترسی آسان‌تر به حمایت
            روانی؛ علمی، امن و همیشه در دسترس.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold text-white">دسترسی سریع</h4>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => goTo(s.id)}
                  className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {s.nav}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold text-white">ارتباط با ما</h4>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={TELEGRAM_REGISTER}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-3.5 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              <span className="flex items-center gap-3 text-sm text-white/80">
                <Send className="h-4 w-4 text-violet-300" />
                کانال ثبت‌نام
              </span>
              <span dir="ltr" className="text-xs text-white/40 transition-colors group-hover:text-white/70">
                @s_alipsy_ai
              </span>
            </a>
            <a
              href={TELEGRAM_SUPPORT}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-3.5 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              <span className="flex items-center gap-3 text-sm text-white/80">
                <Send className="h-4 w-4 text-violet-300" />
                پشتیبانی
              </span>
              <span dir="ltr" className="text-xs text-white/40 transition-colors group-hover:text-white/70">
                @alipsy405_ir
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/35 sm:flex-row sm:px-8">
          <p>© ۱۴۰۵ دانشگاه آزاد اسلامی قم — تمامی حقوق محفوظ است.</p>
          <p className="flex items-center gap-1.5">
            ساخته‌شده با
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
            برای سلامت روان شما
          </p>
        </div>
      </div>
    </footer>
  );
}
