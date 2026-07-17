import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Send } from "lucide-react";
import VideoBackground from "./VideoBackground";
import Marquee from "./Marquee";
import { TELEGRAM_REGISTER, TELEGRAM_SUPPORT } from "../data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="noise relative flex min-h-screen flex-col overflow-hidden">
      {/* Video background */}
      <VideoBackground className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050110]/60 via-transparent to-[#050110]" />

      {/* Center blur blob (signature look) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[92vw] max-w-[984px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black opacity-90 blur-[82px] sm:h-[527px]" />

      {/* Ambient corner glows */}
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-16 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-amber-300/20 bg-amber-300/[0.07] px-4 py-2 text-xs font-medium text-amber-200 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-amber-300" />
          نسخه آزمایشی — در حال به‌روزرسانی
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease }}
          dir="ltr"
          className="font-display text-[clamp(3.2rem,11vw,8.5rem)] font-semibold leading-none tracking-tight text-white"
        >
          s_alipsy_<span className="text-gradient-ai">AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease }}
          className="mt-6 max-w-xl text-balance text-base leading-8 text-[#c9c4cf] sm:text-lg sm:leading-9"
        >
          دستیار هوشمند سلامت روان؛ همراه علمی شما برای خودشناسی، آرامش و رشد
          فردی — هر زمان، هر کجا.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={TELEGRAM_SUPPORT}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-l from-indigo-500 via-violet-500 to-fuchsia-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-600/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-violet-500/50"
          >
            <MessageCircle className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-6" />
            پشتیبانی
          </a>
          <a
            href={TELEGRAM_REGISTER}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
          >
            <Send className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
            ثبت‌نام
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        onClick={() =>
          document.getElementById("sections")?.scrollIntoView({ behavior: "smooth" })
        }
        className="relative z-10 mx-auto mb-6 flex flex-col items-center gap-1 text-white/40 transition-colors hover:text-white/80"
        aria-label="مشاهده بخش‌ها"
      >
        <span className="text-[11px] tracking-wide">کشف کنید</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.button>

      {/* Marquee */}
      <div className="relative z-10">
        <Marquee />
      </div>
    </section>
  );
}
