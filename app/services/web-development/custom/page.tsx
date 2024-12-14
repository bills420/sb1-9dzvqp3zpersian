import { FeatureGrid } from "@/components/sections/feature-grid";
import { customDevelopmentFeatures } from "@/lib/features/custom-development";

export default function CustomDevelopmentPage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Custom Development</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Tailored web solutions built with modern technologies. We create custom websites
          and applications that perfectly match your business needs and goals.
        </p>

        <FeatureGrid features={customDevelopmentFeatures} columns={2} />
      </div>
    </main>
  );
}