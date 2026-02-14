import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  return (
    <PageTransition>
      <section className="section-spacing">
        <div className="page-container max-w-3xl">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-12">
              Contact Career Bridge
            </h1>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h2 className="text-lg font-semibold text-foreground mb-2">General Enquiries</h2>
                <p className="text-muted-foreground text-sm">[Email Address]</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h2 className="text-lg font-semibold text-foreground mb-2">Partnership Enquiries</h2>
                <p className="text-muted-foreground text-sm">[Dedicated Email or Form]</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h2 className="text-lg font-semibold text-foreground mb-2">Registered Address</h2>
                <p className="text-muted-foreground text-sm">[Insert Address]</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-sm text-muted-foreground italic">
                All enquiries are subject to review and response based on organisational scope and alignment.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
