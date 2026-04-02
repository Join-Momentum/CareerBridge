import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import HowItWorks from "@/pages/HowItWorks";
import Partners from "@/pages/Partners";
import Governance from "@/pages/Governance";
import Contact from "@/pages/Contact";
import Apply from "@/pages/Apply";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import SafeguardingPolicy from "@/pages/SafeguardingPolicy";
import DataProtection from "@/pages/DataProtection";
import ComplaintsProcedure from "@/pages/ComplaintsProcedure";
import Policies from "./pages/Policies";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/safeguarding-policy" element={<SafeguardingPolicy />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/complaints-procedure" element={<ComplaintsProcedure />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
