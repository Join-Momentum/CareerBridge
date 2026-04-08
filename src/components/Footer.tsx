import { Link } from "react-router-dom";
import {FaInstagram, FaLinkedin, FaFacebook} from "react-icons/fa";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Partners", path: "/partners" },
  { label: "Governance", path: "/governance" },
  { label: "Apply", path: "/apply" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { label: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/careerbridgefoundation/" },
  { label: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/company/careerbridgefoundation/?viewAsMember=true" },
  { label: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/careerbridgefoundation" },
];

const policyLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Use", path: "/terms-of-use" },
  { label: "Safeguarding Policy", path: "/safeguarding-policy" },
  { label: "Data Protection", path: "/data-protection" },
  { label: "Complaints Procedure", path: "/complaints-procedure" },
  { label: "Other Policies", path: "/policies" },
];

const Footer = () => {
  return (
    <footer className="bg-ink-light">
      <div className="page-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src="/CBLogoWhite.png" alt="Career Bridge Foundation Logo" className="object-contain h-10" />
            </div>
            <p className="text-label font-sans font-bold uppercase text-cool/60 mb-4">
              Community Interest Company
            </p>
            <div className="text-sm text-cool/50 font-sans space-y-1">
              <p>Registered in England and Wales</p>
              <p>Company Number: 16939467</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-label font-sans font-bold uppercase text-cool/60 mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-cool hover:text-warm-white transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <p className="text-label font-sans font-bold uppercase text-cool/60 mb-6">
              Policies
            </p>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-cool hover:text-warm-white transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-label font-sans font-bold uppercase text-cool/60 mb-6">
              Contact
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-cool/50 font-sans mb-1">General Enquiries</p>
                <a
                  href="mailto:helpdesk.careerbridgefoundation.com"
                  className="text-sm text-warm-white hover:text-accent-teal transition-colors duration-300 font-sans"
                >
                  helpdesk.careerbridgefoundation.com
                </a>
              </div>
              <div>
                <p className="text-xs text-cool/50 font-sans mb-1">Partnership Enquiries</p>
                <a
                  href="mailto:outreach@careerbridgefoundation.com"
                  className="text-sm text-warm-white hover:text-accent-teal transition-colors duration-300 font-sans"
                >
                  outreach@careerbridgefoundation.com
                </a>
              </div>
              <div>
                <p className="text-sm text-cool/50 font-sans mb-1">Follow Us</p>
                <div className="flex mt-3 space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cool text-xl hover:text-warm-white transition-colors duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-cool/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-cool/40 font-sans">
            © {new Date().getFullYear()} Career Bridge Foundation CIC. All rights reserved.
          </p>
          <p className="text-xs text-cool/40 font-sans">
            Registered Company Number: 16939467
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
