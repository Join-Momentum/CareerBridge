import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const DataProtection = () => (
  <PageTransition>
    <section className="section-spacing">
      <div className="page-container max-w-3xl">
        <AnimatedSection>
          <h1 className="text-4xl font-serif font-bold text-foreground mb-6">Data Protection Statement</h1>
          <p className="text-muted-foreground leading-relaxed">
            This page will contain the Data Protection Statement for Career Bridge Foundation. Content to be provided.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default DataProtection;
