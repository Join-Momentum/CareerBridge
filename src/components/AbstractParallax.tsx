import { motion, useScroll, useTransform } from "framer-motion";

const AbstractParallax = () => {
  const { scrollYProgress } = useScroll();

  // very slow parallax — barely perceptible
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.35, 0.25]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large soft circle */}
      <motion.div
        style={{ y: ySlow, opacity }}
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-accent-teal/20"
      />

      {/* Medium offset ring */}
      <motion.div
        style={{ y: yFast, opacity }}
        className="absolute top-1/2 -left-40 w-[420px] h-[420px] rounded-full border border-subtle"
      />

      {/* Subtle diagonal grid */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-[linear-gradient(120deg,transparent_48%,rgba(0,0,0,0.03)_50%,transparent_52%)] bg-[length:120px_120px]"
      />
    </div>
  );
};

export default AbstractParallax;