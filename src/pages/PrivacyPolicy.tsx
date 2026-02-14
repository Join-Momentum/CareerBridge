import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => (
  <PageTransition>
    <section className="section-spacing">
      <div className="page-container max-w-3xl">
        <AnimatedSection>
          <h1 className="text-4xl font-serif font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground leading-relaxed">
            This page will contain the Privacy Policy for Career Bridge Foundation. Content to be provided.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default PrivacyPolicy;
