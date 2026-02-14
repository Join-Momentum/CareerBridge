import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const TermsOfUse = () => (
  <PageTransition>
    <section className="section-spacing">
      <div className="page-container max-w-3xl">
        <AnimatedSection>
          <h1 className="text-4xl font-serif font-bold text-foreground mb-6">Terms of Use</h1>
          <p className="text-muted-foreground leading-relaxed">
            This page will contain the Terms of Use for Career Bridge Foundation. Content to be provided.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default TermsOfUse;
