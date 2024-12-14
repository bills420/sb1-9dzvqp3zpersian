import { Card } from "@/components/ui/card";
import { Scissors, Calendar, Droplets, Shovel } from "lucide-react";

export default function MaintenancePage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Garden Maintenance</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Keep your outdoor spaces looking their best with our comprehensive maintenance
          services. We provide regular care and upkeep to ensure your landscape thrives
          year-round.
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
    title: "Regular Maintenance",
    description: "Scheduled maintenance to keep your garden in perfect condition.",
    icon: <Calendar className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Pruning & Trimming",
    description: "Expert pruning services for healthy plant growth.",
    icon: <Scissors className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Irrigation",
    description: "Efficient watering systems and maintenance.",
    icon: <Droplets className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Soil Care",
    description: "Soil health management and fertilization services.",
    icon: <Shovel className="w-6 h-6 text-green-500" />,
  },
];