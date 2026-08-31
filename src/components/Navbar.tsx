import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "How It Works", path: "/how-it-works" },
  { label: "For Organisations", path: "/partners" },
  { label: "Governance", path: "/governance" },
  { label: "Contact", path: "/contact" },
];

const portfolioDropdown = [
  { label: "Cyber Threat Intelligence", path: "/portfolio-simulations/cyber-threat-intelligence" },
];

// ── Portfolio nav item with dropdown ─────────────────────────

function PortfolioNavItem({
  isDarkHero,
}: {
  isDarkHero: boolean;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive =
    location.pathname === "/portfolio-simulations" ||
    location.pathname.startsWith("/portfolio-simulations/");

  const linkClass = `text-[12px] font-sans font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
    isActive
      ? "text-accent-teal"
      : isDarkHero
      ? "text-warm-white/60 hover:text-warm-white"
      : "text-slate hover:text-ink"
  }`;

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center gap-1">
        {/* Main link */}
        <Link to="/portfolio-simulations" className={`relative ${linkClass}`}>
          Work Experience
          {isActive && (
            <motion.div
              layoutId="nav-indicator"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-teal"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
        </Link>

        {/* Chevron toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle portfolio submenu"
          className={`p-0.5 transition-colors duration-200 ${
            isActive
              ? "text-accent-teal"
              : isDarkHero
              ? "text-warm-white/60 hover:text-warm-white"
              : "text-slate hover:text-ink"
          }`}
        >
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </button>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 mt-3 min-w-[250px] bg-white border border-subtle shadow-card z-50"
          >
            {/* Top accent line */}
            <div className="h-px bg-accent-teal" />
            {portfolioDropdown.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-5 py-3.5 text-[10px] font-sans font-medium uppercase tracking-[0.1em] transition-colors duration-200 ${
                  location.pathname === path
                    ? "text-accent-teal bg-warm-grey"
                    : "text-slate hover:text-ink hover:bg-warm-grey"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shrink-0" />
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isDarkHero = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobilePortfolioOpen(false);
  }, [location.pathname]);

  const navClasses = isDarkHero
    ? scrolled ? "bg-ink border-none" : "bg-transparent"
    : "bg-white border-b border-subtle";

  const textClasses = isDarkHero ? "text-warm-white" : "text-ink";

  const isPortfolioActive =
    location.pathname === "/portfolio-simulations" ||
    location.pathname.startsWith("/portfolio-simulations/");

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
        <div className="page-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1">
              <img
                src={isDarkHero ? "/CBLogoWhite.png" : "/CBLogoBlack.png"}
                alt="Career Bridge Foundation Logo"
                className="object-contain h-10"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[12px] font-sans font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-accent-teal"
                      : isDarkHero
                      ? "text-warm-white/60 hover:text-warm-white"
                      : "text-slate hover:text-ink"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-teal"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              ))}

              {/* Portfolio Simulations with dropdown */}
              <PortfolioNavItem isDarkHero={isDarkHero} scrolled={scrolled} />

              {/* Apply button */}
              {location.pathname === "/apply" ? (
                <a
                  href="http://apply.careerbridgefoundation.com/jobs/Careers/"
                  className={`ml-2 px-6 py-2.5 text-[12px] font-sans font-medium uppercase tracking-[0.1em] rounded-sm transition-all duration-300 ${
                    isDarkHero && !scrolled
                      ? "bg-warm-white text-ink hover:bg-accent-teal hover:text-white"
                      : "bg-ink text-warm-white hover:bg-accent-teal"
                  }`}
                >
                  Apply
                </a>
              ) : (
                <Link
                  to="/apply"
                  className={`ml-2 px-6 py-2.5 text-[12px] font-sans font-medium uppercase tracking-[0.1em] rounded-sm transition-all duration-300 ${
                    isDarkHero && !scrolled
                      ? "bg-warm-white text-ink hover:bg-accent-teal hover:text-white"
                      : "bg-ink text-warm-white hover:bg-accent-teal"
                  }`}
                >
                  Apply
                </Link>
              )}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden p-2 transition-colors duration-300 ${textClasses}`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className={`block h-[1.5px] w-full transition-colors duration-300 ${
                    scrolled || !isDarkHero ? "bg-ink" : "bg-warm-white"
                  }`}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`block h-[1.5px] w-full transition-colors duration-300 ${
                    scrolled || !isDarkHero ? "bg-ink" : "bg-warm-white"
                  }`}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className={`block h-[1.5px] w-full transition-colors duration-300 ${
                    scrolled || !isDarkHero ? "bg-ink" : "bg-warm-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden bg-ink overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen pt-20 pb-10 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 text-2xl font-serif font-medium transition-colors text-center ${
                      location.pathname === link.path
                        ? "text-accent-teal"
                        : "text-warm-white/70 hover:text-warm-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Portfolio Simulations — expandable in mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.07 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center gap-2">
                  <Link
                    to="/portfolio-simulations"
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 text-2xl font-serif font-medium transition-colors ${
                      isPortfolioActive ? "text-accent-teal" : "text-warm-white/70 hover:text-warm-white"
                    }`}
                  >
                    Work Experience
                  </Link>
                  <button
                    onClick={() => setMobilePortfolioOpen((o) => !o)}
                    className="text-warm-white/50 hover:text-warm-white transition-colors p-1"
                    aria-label="Expand portfolio submenu"
                  >
                    <motion.svg
                      animate={{ rotate: mobilePortfolioOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </button>
                </div>

                <AnimatePresence>
                  {mobilePortfolioOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden flex flex-col items-center"
                    >
                      {portfolioDropdown.map(({ label, path }) => (
                        <Link
                          key={path}
                          to={path}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-2 py-2 text-base font-sans font-medium uppercase tracking-[0.1em] transition-colors ${
                            location.pathname === path
                              ? "text-accent-teal"
                              : "text-warm-white/50 hover:text-warm-white"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shrink-0" />
                          {label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
