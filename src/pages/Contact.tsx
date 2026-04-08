import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <PageTransition>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        <div className="page-container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
          <AnimatedSection>
            {/* Accent line + Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-accent-teal" />
              <p className="text-label font-sans uppercase text-accent-teal">
                Get in Touch
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-hero-sm md:text-[3.5rem] lg:text-hero font-semibold text-warm-white leading-[1.1] max-w-3xl text-balance">
              Contact Career Bridge
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTACT SECTION ────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* LEFT: Contact Information */}
            <div>
              <AnimatedSection>
                <div className="section-label">Contact Information</div>
                
                {/* General Enquiries */}
                <div className="mb-10">
                  <h3 className="text-label font-sans uppercase text-slate mb-3">
                    General Enquiries
                  </h3>
                  <a
                    href="mailto:helpdesk.careerbridgefoundation.com"
                    className="font-serif text-2xl text-ink hover:text-accent-teal transition-colors duration-300"
                  >
                    helpdesk.careerbridgefoundation.com
                  </a>
                </div>

                {/* Partnership Enquiries */}
                <div className="mb-10">
                  <h3 className="text-label font-sans uppercase text-slate mb-3">
                    Partnership Enquiries
                  </h3>
                  <a
                    href="mailto:outreach@careerbridgefoundation.com"
                    className="font-serif text-2xl text-ink hover:text-accent-teal transition-colors duration-300"
                  >
                    outreach@careerbridgefoundation.com
                  </a>
                </div>

                {/* Registered Address */}
                <div className="mb-10">
                  <h3 className="text-label font-sans uppercase text-slate mb-3">
                    Registered Address
                  </h3>
                  <address className="not-italic text-body text-slate leading-relaxed font-sans">
                    Career Bridge Foundation CIC<br />
                    Lytchett House, 13 Freeland Park,<br />
                    Wareham Road, Poole, <br />
                    Dorset, BH16 6FA<br />
                    United Kingdom
                  </address>
                </div>

                {/* Registration */}
                <div className="pt-8 border-t border-subtle">
                  <p className="text-sm text-slate font-sans">
                    <span className="text-cool">Company Number:</span> 16939467<br />
                    <span className="text-cool">Registered in:</span> England and Wales
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT: Contact Form */}
            <div>
              <AnimatedSection delay={0.1}>
                <div className="section-label">Send a Message</div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-label font-sans uppercase text-slate mb-2">
                      Name <span className="text-accent-teal">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-subtle bg-warm-white text-ink font-sans text-body focus:border-accent-teal focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-label font-sans uppercase text-slate mb-2">
                      Email <span className="text-accent-teal">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-subtle bg-warm-white text-ink font-sans text-body focus:border-accent-teal focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Organisation */}
                  <div>
                    <label htmlFor="organisation" className="block text-label font-sans uppercase text-slate mb-2">
                      Organisation <span className="text-cool">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-subtle bg-warm-white text-ink font-sans text-body focus:border-accent-teal focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label htmlFor="enquiryType" className="block text-label font-sans uppercase text-slate mb-2">
                      Enquiry Type <span className="text-accent-teal">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-subtle bg-warm-white text-ink font-sans text-body focus:border-accent-teal focus:outline-none transition-colors appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.25rem",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <option value="">Select an option</option>
                      <option value="general">General Enquiry</option>
                      <option value="partnership">Partnership Enquiry</option>
                      <option value="application">Application Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-label font-sans uppercase text-slate mb-2">
                      Message <span className="text-accent-teal">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-subtle bg-warm-white text-ink font-sans text-body focus:border-accent-teal focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-sm text-cool font-sans italic">
                    All enquiries are subject to review and response based on organisational scope and alignment.
                  </p>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
