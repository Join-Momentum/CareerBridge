import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

/**
 * Shared animation primitives for the Work Experience programme pages
 * (the hub and every discipline pathway page). Extracted so the parent
 * hub and the pathway template stay visually identical without
 * duplicating the same motion code in every file.
 */

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export function MediaPlaceholder({
  label,
  type = "image",
  aspect = "video",
  light = false,
  className = "",
  src,
}: {
  label: string;
  type?: "image" | "video";
  aspect?: "video" | "square" | "tall";
  light?: boolean;
  className?: string;
  src?: string;
}) {
  const bg = light ? "bg-ink/[0.04] border-ink/[0.07]" : "bg-white/[0.04] border-white/[0.08]";
  const cb = light ? "border-accent-teal/40" : "border-accent-teal/55";
  const tc = light ? "text-ink/22" : "text-white/18";
  const is = light ? "rgba(15,23,42,0.16)" : "rgba(255,255,255,0.13)";
  const aspectClass = aspect === "video" ? "aspect-video" : aspect === "square" ? "aspect-square" : "aspect-[3/4]";

  const corners = [
    "top-4 left-4 border-t border-l",
    "top-4 right-4 border-t border-r",
    "bottom-4 left-4 border-b border-l",
    "bottom-4 right-4 border-b border-r",
  ];

  return (
    <div className={`relative overflow-hidden border ${bg} ${aspectClass} ${className}`}>
      {src && type === "image" && (
        <img src={src} alt={label} className="absolute inset-0 w-full h-full object-cover" />
      )}
      {src && type === "video" && (
        <video src={src} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
      )}
      {!src && (
        <>
          <motion.div
            animate={{ top: ["-2px", "100%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 0.8 }}
            className={`absolute left-0 right-0 h-px z-10 pointer-events-none ${
              light
                ? "bg-gradient-to-r from-transparent via-accent-teal/50 to-transparent"
                : "bg-gradient-to-r from-transparent via-accent-teal/70 to-transparent"
            }`}
          />
          {corners.map((pos, i) => (
            <motion.div
              key={pos}
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
              className={`absolute w-5 h-5 ${pos} ${cb}`}
            />
          ))}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 select-none">
            {type === "video" ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={is} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill={is} stroke="none" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={is} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            )}
            <p className={`text-[9px] font-medium uppercase tracking-[0.22em] ${tc} text-center max-w-[140px] leading-[1.9]`}>
              {label}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
