import { Card } from "@/components/ui/card";
import { Shield, BookOpen, AlertTriangle } from "lucide-react";

export default function SafetyPage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Safety Standards</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Industry-leading safety protocols and practices. We prioritize the well-being
          of our workers and maintain strict compliance with safety regulations.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
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
    title: "Safety Protocols",
    description: "Comprehensive safety guidelines and procedures.",
    icon: <Shield className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Regular Training",
    description: "Ongoing safety education and certification programs.",
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Risk Management",
    description: "Proactive identification and mitigation of safety risks.",
    icon: <AlertTriangle className="w-6 h-6 text-blue-500" />,
  },
];