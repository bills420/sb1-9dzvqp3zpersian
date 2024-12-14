import { Flower2, Paintbrush, Scissors, TreePine } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function BeautificationPage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Beautification Services</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Transform your spaces with our expert beautification services. We specialize in
          landscaping, garden design, and aesthetic enhancements for both residential and
          commercial properties.
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
    title: "Landscape Design",
    description: "Custom landscape designs that enhance the natural beauty of your space.",
    icon: <TreePine className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Garden Maintenance",
    description: "Regular maintenance services to keep your gardens looking their best.",
    icon: <Scissors className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Seasonal Planting",
    description: "Strategic planting services to ensure year-round beauty.",
    icon: <Flower2 className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Aesthetic Enhancement",
    description: "Artistic touches that elevate the visual appeal of your property.",
    icon: <Paintbrush className="w-6 h-6 text-green-500" />,
  },
];