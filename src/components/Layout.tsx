import { ReactNode, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnnouncementBanner from "./AnnouncementBanner";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Measure the banner's real rendered height (it wraps to more lines on
  // narrow viewports) so the navbar and page content shift down by exactly
  // that amount — no hardcoded offset, no overlap at any breakpoint.
  useEffect(() => {
    if (!bannerVisible) {
      setBannerHeight(0);
      return;
    }
    const el = bannerRef.current;
    if (!el) return;

    const update = () => setBannerHeight(el.offsetHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [bannerVisible]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {bannerVisible && <AnnouncementBanner ref={bannerRef} onClose={() => setBannerVisible(false)} />}
      <Navbar offsetTop={bannerVisible ? bannerHeight : 0} />
      <main className="flex-1 transition-[margin-top] duration-300" style={{ marginTop: bannerVisible ? bannerHeight : 0 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
