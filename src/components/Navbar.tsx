import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Partners", path: "/partners" },
  { label: "Governance", path: "/governance" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on a page with a dark hero
  const isDarkHero = ["/", "/how-it-works", "/partners", "/governance", "/contact", "/apply"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navClasses = scrolled
    ? "bg-white border-b border-subtle"
    : isDarkHero
      ? "bg-transparent"
      : "bg-white border-b border-subtle";

  const textClasses = scrolled
    ? "text-ink"
    : isDarkHero
      ? "text-warm-white"
      : "text-ink";

  const textMutedClasses = scrolled
    ? "text-slate"
    : isDarkHero
      ? "text-warm-white/60"
      : "text-slate";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
        <div className="page-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1">
              <img src={scrolled ? "/CBLogoBlack.png" : "/CBLogoWhite.png"} alt="Career Bridge Foundation Logo" className="object-contain h-10" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[13px] font-sans font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
                    location.pathname === link.path
                      ? scrolled || !isDarkHero
                        ? "text-accent-teal"
                        : "text-warm-white"
                      : textMutedClasses
                  } hover:${scrolled || !isDarkHero ? "text-ink" : "text-warm-white"}`}
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
              <Link
                to="/apply"
                className={`ml-2 px-6 py-2.5 text-[12px] font-sans font-medium uppercase tracking-[0.1em] rounded-sm transition-all duration-300 ${
                  scrolled || !isDarkHero
                    ? "bg-ink text-warm-white hover:bg-accent-teal"
                    : "bg-warm-white text-ink hover:bg-accent-teal hover:text-white"
                }`}
              >
                Apply
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${textClasses}`}
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
            className="fixed inset-0 z-40 lg:hidden bg-ink"
          >
            <div className="flex flex-col items-center justify-center min-h-screen pt-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-4 text-2xl font-serif font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-accent-teal"
                        : "text-warm-white/70 hover:text-warm-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                className="mt-8"
              >
                <Link
                  to="/apply"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary-light"
                >
                  Apply to the Pathway
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
