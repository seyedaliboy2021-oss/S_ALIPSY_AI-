import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Menu, Send, X } from "lucide-react";
import { SECTIONS, TELEGRAM_REGISTER } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#050110]/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3 text-right"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/25 transition-transform duration-300 group-hover:scale-105">
            <GraduationCap className="h-5 w-5 text-white" strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white">
              دانشگاه آزاد اسلامی قم
            </span>
            <span
              dir="ltr"
              className="block font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45"
            >
              Alipsy AI
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              {s.nav}
            </button>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href={TELEGRAM_REGISTER}
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/20 hover:shadow-lg hover:shadow-violet-500/20 sm:inline-flex"
          >
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
            ثبت‌نام
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white md:hidden"
            aria-label="منو"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/[0.06] bg-[#050110]/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5 pt-2">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goTo(s.id)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-right text-sm text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {s.nav}
                  <s.icon className="h-4 w-4 text-white/40" />
                </button>
              ))}
              <a
                href={TELEGRAM_REGISTER}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-indigo-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white"
              >
                <Send className="h-4 w-4" />
                ثبت‌نام در تلگرام
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
