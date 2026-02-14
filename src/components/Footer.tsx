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
    <footer className="bg-foreground text-primary-foreground">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded gradient-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">CB</span>
              </div>
              <span className="font-serif font-bold text-lg">Career Bridge Foundation</span>
            </div>
            <div className="text-sm opacity-70 space-y-1">
              <p>Community Interest Company (CIC)</p>
              <p>Registered in England and Wales</p>
              <p>Registration Number: [Insert Number]</p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Career Bridge Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
