import { Card } from "@/components/ui/card";
import { Users, Certificate, Tools } from "lucide-react";

export default function SkilledWorkforcePage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Skilled Workforce</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Access to experienced and certified professionals across various trades.
          Our workforce is carefully selected and trained to meet the highest industry standards.
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
    title: "Expert Teams",
    description: "Highly skilled professionals with years of industry experience.",
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Certified Workers",
    description: "All workers are certified and regularly trained on latest practices.",
    icon: <Certificate className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Equipment Proficiency",
    description: "Trained in using modern tools and equipment efficiently.",
    icon: <Tools className="w-6 h-6 text-blue-500" />,
  },
];