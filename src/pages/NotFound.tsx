import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center bg-ink overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        
        <div className="page-container relative z-10 text-center">
          <AnimatedSection>
            <span className="font-mono text-8xl md:text-9xl font-medium text-cool/30 mb-8 block">
              404
            </span>
            <h1 className="font-serif text-display-sm md:text-display font-semibold text-warm-white mb-6">
              Page not found
            </h1>
            <p className="text-body-lg text-cool leading-relaxed max-w-md mx-auto mb-10 font-sans">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn-primary-light">
              Return to Home
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;
