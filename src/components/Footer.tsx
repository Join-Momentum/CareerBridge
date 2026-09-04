import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const workExperienceLinks = [
  { label: "Programme overview", path: "/simulation-based-work-experience" },
  { label: "Product Management", path: "/simulation-based-work-experience/product-management" },
  { label: "Project Management", path: "/simulation-based-work-experience/project-management" },
  { label: "Business Analysis", path: "/simulation-based-work-experience/business-analysis" },
  { label: "Cyber Threat Intelligence", path: "/portfolio-simulations/cyber-threat-intelligence" },
  { label: "Virtual Administrative Assistant", path: "/simulation-based-work-experience/virtual-administrative-assistant" },
];

const organisationLinks = [
  { label: "How it works", path: "/how-it-works" },
  { label: "For organisations", path: "/partners" },
  // No dedicated "About us" page exists yet — pointed at Governance (the
  // closest existing content: legal status, structure, CIC info) as a
  // stand-in. Redirect this once a real About page exists.
  { label: "About us", path: "/governance" },
  { label: "Governance", path: "/governance" },
  { label: "Contact", path: "/contact" },
  { label: "Apply free", path: "/apply" },
];

const policyLinks = [
  { label: "Policies", path: "/policies" },
  { label: "Safeguarding", path: "/safeguarding-policy" },
  { label: "Data protection", path: "/data-protection" },
  { label: "Complaints procedure", path: "/complaints-procedure" },
  { label: "Terms and conditions", path: "/terms-of-use" },
  // No dedicated Accessibility page exists yet — pointed at the general
  // Policies hub as a stand-in. Redirect this once a real page exists.
  { label: "Accessibility", path: "/policies" },
];

// Real, confirmed account URLs only — Facebook kept rather than swapped for
// YouTube, since there's no confirmed YouTube URL for the organisation.
const socialLinks = [
  { label: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/company/careerbridgefoundation/?viewAsMember=true" },
  { label: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/careerbridgefoundation/" },
  { label: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/careerbridgefoundation" },
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
            <p className="text-sm text-cool/60 font-sans leading-relaxed mb-6 max-w-[220px]">
              Build experience. Prove your skills. Progress your career.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-9 h-9 text-cool text-lg hover:text-warm-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <p className="text-label font-sans font-bold uppercase text-cool/60 mb-6">
              Work Experience
            </p>
            <ul className="space-y-3">
              {workExperienceLinks.map((link) => (
                <li key={link.label}>
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

          {/* Organisation */}
          <div>
            <p className="text-label font-sans font-bold uppercase text-cool/60 mb-6">
              Organisation
            </p>
            <ul className="space-y-3">
              {organisationLinks.map((link) => (
                <li key={link.label}>
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
                <li key={link.label}>
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
        </div>

        {/* Legal bar */}
        <div className="border-t border-cool/10 pt-8 space-y-4">
          <p className="text-xs text-cool/50 font-sans leading-relaxed max-w-3xl">
            Career Bridge Foundation delivers work experience through simulation. It is not employment, a paid
            role, an internship, an apprenticeship or a job placement, and participation does not guarantee
            employment or recruitment outcomes.
          </p>
          <p className="text-xs text-cool/40 font-sans">
            Career Bridge Foundation is the public-facing name of Career Bridge CIC · Community Interest Company
            registered in England and Wales · Company Number 16939467 ·{" "}
            <Link
              to="/contact"
              className="text-cool/40 hover:text-warm-white underline underline-offset-2 transition-colors duration-300"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
