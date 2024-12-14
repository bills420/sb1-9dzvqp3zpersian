import { Briefcase, HardHat, Users, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function LabourPage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Labour Services</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Professional workforce solutions for construction, maintenance, and industrial projects.
          We provide skilled labor and project management services.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="flex gap-4">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    title: "Skilled Workforce",
    description: "Access to experienced and certified professionals across various trades.",
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Project Management",
    description: "Comprehensive project oversight from planning to completion.",
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Safety First",
    description: "Strict adherence to safety protocols and industry standards.",
    icon: <HardHat className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Equipment & Tools",
    description: "Access to modern equipment and tools for efficient project execution.",
    icon: <Wrench className="w-6 h-6 text-blue-500" />,
  },
];