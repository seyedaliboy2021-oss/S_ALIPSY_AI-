import { useEffect, useRef } from "react";

export const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

interface Props {
  className?: string;
  /** seconds to fade in over */
  fadeMs?: number;
}

/**
 * Ambient looping background video.
 * Fades in on first play, and on `ended` rewinds + replays with a soft fade
 * (same behaviour as the original landing page).
 */
export default function VideoBackground({ className = "", fadeMs = 900 }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let raf = 0;
    let restartTimer: ReturnType<typeof setTimeout> | undefined;

    const handlePlay = () => {
      let start: number | null = null;
      const fade = (ts: number) => {
        if (start === null) start = ts;
        const p = (ts - start) / fadeMs;
        video.style.opacity = String(Math.min(p, 1));
        if (p < 1) raf = requestAnimationFrame(fade);
      };
      raf = requestAnimationFrame(fade);
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      restartTimer = setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 120);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});

    return () => {
      cancelAnimationFrame(raf);
      if (restartTimer) clearTimeout(restartTimer);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
    };
  }, [fadeMs]);

  return (
    <video
      ref={ref}
      className={className}
      style={{ opacity: 0 }}
      muted
      playsInline
      autoPlay
      preload="auto"
      aria-hidden="true"
    >
      <source src={VIDEO_SRC} type="video/mp4" />
    </video>
  );
}
