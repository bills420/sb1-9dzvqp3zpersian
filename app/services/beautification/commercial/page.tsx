import { Card } from "@/components/ui/card";
import { Building2, Users, Clock, TreePine } from "lucide-react";

export default function CommercialPage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Commercial Projects</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Large-scale beautification solutions for commercial properties. We enhance
          corporate spaces with professional landscaping and maintenance services that
          create lasting impressions.
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
    title: "Corporate Spaces",
    description: "Professional landscaping for office buildings and corporate campuses.",
    icon: <Building2 className="w-6 h-6 text-green-500" />,
  },
  {
    title: "High Traffic Areas",
    description: "Durable designs for spaces with heavy foot traffic.",
    icon: <Users className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Year-Round Appeal",
    description: "Seasonal planning for continuous visual appeal.",
    icon: <Clock className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Sustainable Solutions",
    description: "Eco-friendly approaches to commercial landscaping.",
    icon: <TreePine className="w-6 h-6 text-green-500" />,
  },
];