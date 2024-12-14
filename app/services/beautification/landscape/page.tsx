import { Card } from "@/components/ui/card";
import { TreePine, Ruler, Palette, Leaf } from "lucide-react";

export default function LandscapePage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Landscape Design</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Transform your outdoor spaces with our expert landscape design services. We create
          harmonious and sustainable landscapes that enhance the natural beauty of your property.
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
    title: "Custom Design",
    description: "Personalized landscape designs that reflect your style and needs.",
    icon: <Palette className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Site Planning",
    description: "Detailed site analysis and strategic space planning.",
    icon: <Ruler className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Native Plants",
    description: "Selection of climate-appropriate and native plant species.",
    icon: <Leaf className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Sustainable Design",
    description: "Eco-friendly approaches to landscape development.",
    icon: <TreePine className="w-6 h-6 text-green-500" />,
  },
];