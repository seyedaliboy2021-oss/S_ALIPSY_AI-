import {
  Brain,
  Flower2,
  HeartHandshake,
  HeartPulse,
  MoonStar,
  Sparkles,
  TrendingUp,
  Wind,
} from "lucide-react";

const ITEMS = [
  { icon: Brain, label: "روانشناسی" },
  { icon: TrendingUp, label: "رشد فردی" },
  { icon: HeartPulse, label: "درمان اضطراب" },
  { icon: Wind, label: "کنترل استرس" },
  { icon: Sparkles, label: "خودشناسی" },
  { icon: HeartHandshake, label: "هوش هیجانی" },
  { icon: MoonStar, label: "خواب آرام" },
  { icon: Flower2, label: "ذهن‌آگاهی" },
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div
      dir="ltr"
      className="mask-fade-x relative overflow-hidden border-y border-white/[0.06] bg-black/25 py-4 backdrop-blur-sm"
    >
      <div className="flex w-max animate-marquee gap-4 pl-4">
        {track.map((item, i) => (
          <div
            key={i}
            dir="rtl"
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.04] px-5 py-2.5"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 text-violet-300">
              <item.icon className="h-3.5 w-3.5" strokeWidth={2.2} />
            </span>
            <span className="whitespace-nowrap text-sm text-white/80">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
