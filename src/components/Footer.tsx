import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Use", path: "/terms-of-use" },
  { label: "Safeguarding Policy", path: "/safeguarding-policy" },
  { label: "Data Protection Statement", path: "/data-protection" },
  { label: "Complaints Procedure", path: "/complaints-procedure" },
  { label: "Governance & CIC Commitment", path: "/governance" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="page-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Wordmark */}
          <div className="md:col-span-1">
            <p className="font-serif font-semibold text-lg text-primary-foreground mb-1">
              Career Bridge Foundation
            </p>
            <p className="text-xs text-primary-foreground/50 font-sans mb-4 tracking-wide uppercase">
              A Community Interest Company
            </p>
            <div className="text-xs text-primary-foreground/40 font-sans space-y-0.5">
              <p>Registered in England and Wales</p>
              <p>Registration Number: [Insert Number]</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4 font-sans">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Apply", path: "/contact" },
                { label: "Partner with Us", path: "/partners" },
                { label: "How It Works", path: "/how-it-works" },
                { label: "Governance", path: "/governance" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path + link.label}
                  to={link.path}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="md:col-span-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4 font-sans">
              Policies
            </p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-xs text-primary-foreground/40 font-sans">
            © {new Date().getFullYear()} Career Bridge Foundation CIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
