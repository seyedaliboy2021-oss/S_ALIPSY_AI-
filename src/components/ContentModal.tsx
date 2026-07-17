import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Send, X } from "lucide-react";
import VideoBackground from "./VideoBackground";
import { TELEGRAM_REGISTER, type SectionData } from "../data/content";

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  section: SectionData;
  onClose: () => void;
}

export default function ContentModal({ section, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {/* Backdrop */}
      <motion.button
        aria-label="بستن"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md"
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        transition={{ duration: 0.35 }}
      />

      {/* Panel — carries the same video background */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={section.title}
        variants={{
          hidden: { opacity: 0, y: 64, scale: 0.96 },
          show: { opacity: 1, y: 0, scale: 1 },
        }}
        transition={{ duration: 0.55, ease }}
        className="noise relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-[28px] border border-white/10 bg-[#07021a] shadow-2xl shadow-black/60 sm:max-h-[85vh] sm:rounded-[28px]"
      >
        {/* Same ambient video as the hero */}
        <VideoBackground className="absolute inset-0 h-full w-full object-cover" fadeMs={1200} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07021a]/85 via-[#07021a]/75 to-[#07021a]/95" />

        {/* Content */}
        <div className="relative flex min-h-0 flex-1 flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] px-6 py-5 sm:px-9 sm:py-6">
            <div className="flex items-center gap-4">
              <span
                className={`grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${section.accent} p-3 text-white shadow-lg`}
              >
                <section.icon className="h-6 w-6" strokeWidth={2.1} />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {section.title}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-amber-200/80 sm:text-sm">
                  {section.tagline}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="بستن پنجره"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur transition-all duration-300 hover:rotate-90 hover:border-white/25 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="thin-scroll min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-9 sm:py-8">
            <p className="max-w-2xl text-sm leading-8 text-[#c9c4cf] sm:text-base sm:leading-9">
              {section.description}
            </p>

            {/* Items grid */}
            {section.items && (
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {section.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease }}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${section.accent} text-white opacity-90`}
                      >
                        <item.icon className="h-4.5 w-4.5" strokeWidth={2.1} />
                      </span>
                      {item.meta && (
                        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] text-white/60">
                          {item.meta}
                        </span>
                      )}
                    </div>
                    <h4 className="mt-4 font-bold text-white">{item.title}</h4>
                    <p className="mt-2 text-[13px] leading-6.5 text-[#8d8798]">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Plans */}
            {section.plans && (
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {section.plans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease }}
                    className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1 ${
                      plan.highlight
                        ? "border-amber-300/30 bg-gradient-to-b from-amber-300/[0.08] to-transparent shadow-xl shadow-amber-500/10"
                        : "border-white/[0.08] bg-white/[0.04]"
                    } ${plan.soon ? "opacity-70" : ""}`}
                  >
                    {plan.badge && (
                      <span className="absolute -top-3 right-5 rounded-full bg-gradient-to-l from-amber-400 to-orange-400 px-3 py-1 text-[11px] font-bold text-black">
                        {plan.badge}
                      </span>
                    )}
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${section.accent} text-white`}
                    >
                      <plan.icon className="h-5 w-5" strokeWidth={2.1} />
                    </span>
                    <h4 className="mt-4 font-bold text-white">{plan.name}</h4>
                    <div className="mt-3 flex items-baseline gap-1.5" dir="ltr">
                      <span className="font-display text-2xl font-semibold text-white">
                        {plan.price}
                      </span>
                      {plan.unit && (
                        <span className="text-xs text-white/50">{plan.unit}</span>
                      )}
                    </div>
                    <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-[13px] leading-6 text-[#c9c4cf]"
                        >
                          <Check
                            className={`mt-1 h-3.5 w-3.5 shrink-0 ${
                              plan.highlight ? "text-amber-300" : "text-emerald-400"
                            }`}
                            strokeWidth={3}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                    {!plan.soon && (
                      <a
                        href={TELEGRAM_REGISTER}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                          plan.highlight
                            ? "bg-gradient-to-l from-amber-400 to-orange-400 text-black hover:shadow-lg hover:shadow-amber-500/30"
                            : "border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.12]"
                        }`}
                      >
                        <Send className="h-4 w-4" />
                        انتخاب طرح
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] bg-black/30 px-6 py-4 backdrop-blur sm:flex-row sm:px-9">
            <p className="text-xs text-white/50 sm:text-sm">
              برای شروع یا مشاوره، همین حالا در تلگرام پیام دهید.
            </p>
            <a
              href={TELEGRAM_REGISTER}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-indigo-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-violet-500/40"
            >
              <Send className="h-4 w-4" />
              ثبت‌نام در تلگرام
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
