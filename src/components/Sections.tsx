import { motion } from "framer-motion";
import { ArrowUpLeft, Clock3, Lock, MessagesSquare } from "lucide-react";
import { SECTIONS, type SectionId } from "../data/content";

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { icon: MessagesSquare, value: "۲۴ / ۷", label: "پاسخ‌گویی همیشگی" },
  { icon: Lock, value: "۱۰۰٪", label: "محرمانگی گفت‌وگوها" },
  { icon: Clock3, value: "+۴۰", label: "جلسه آموزشی و تمرین" },
];

interface Props {
  onOpen: (id: SectionId) => void;
}

export default function Sections({ onOpen }: Props) {
  return (
    <section id="sections" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-violet-700/10 blur-[120px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <span className="text-xs font-semibold tracking-[0.3em] text-amber-300/80">
          خدمات علی‌پسی
        </span>
        <h2 className="mt-4 text-balance text-3xl font-bold leading-snug text-white sm:text-5xl sm:leading-tight">
          هر آنچه برای آرامش ذهن نیاز دارید
        </h2>
        <p className="mt-5 text-pretty leading-8 text-[#8d8798]">
          چهار مسیر مکمل؛ از یادگیری مهارت‌ها تا همراهی درمانی. روی هر بخش
          بزنید تا جزئیات کامل آن باز شود.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="relative mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            className="glass flex items-center gap-4 rounded-2xl px-5 py-4"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-violet-300">
              <s.icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold text-white">
                {s.value}
              </span>
              <span className="block text-xs text-[#8d8798]">{s.label}</span>
            </span>
          </div>
        ))}
      </motion.div>

      {/* Cards */}
      <div className="relative mt-14 grid gap-5 md:grid-cols-2">
        {SECTIONS.map((section, i) => (
          <motion.article
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease }}
            onClick={() => onOpen(section.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen(section.id);
              }
            }}
            role="button"
            tabIndex={0}
            className="group relative cursor-pointer scroll-mt-28 overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.03] p-7 outline-none backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.16] hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-violet-900/30 focus-visible:border-violet-400/50 sm:p-9"
          >
            {/* hover glow */}
            <div
              className={`pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full ${section.glow} opacity-0 blur-[90px] transition-opacity duration-700 group-hover:opacity-25`}
            />

            <div className="relative flex items-start justify-between gap-4">
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${section.accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}
              >
                <section.icon className="h-6 w-6" strokeWidth={2.1} />
              </span>
              <span className="font-display text-sm font-medium tracking-widest text-white/25">
                ۰{["۱", "۲", "۳", "۴"][i]}
              </span>
            </div>

            <h3 className="relative mt-6 text-2xl font-bold text-white">
              {section.title}
            </h3>
            <p className="relative mt-1.5 text-sm font-medium text-amber-200/80">
              {section.tagline}
            </p>
            <p className="relative mt-4 text-sm leading-7 text-[#8d8798]">
              {section.description}
            </p>

            <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
              <span className="text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                مشاهده جزئیات
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-500 group-hover:border-violet-400/40 group-hover:bg-violet-500/20 group-hover:text-white">
                <ArrowUpLeft className="h-4.5 w-4.5 transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
