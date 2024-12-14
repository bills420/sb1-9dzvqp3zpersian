import { FeatureGrid } from "@/components/sections/feature-grid";
import { projectManagementFeatures } from "@/lib/features/project-management";

export default function ProjectManagementPage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Project Management</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Comprehensive project oversight from planning to completion. Our experienced project
          managers ensure efficient execution and timely delivery of your projects.
        </p>

        <FeatureGrid features={projectManagementFeatures} columns={3} />
      </div>
    </main>
  );
}