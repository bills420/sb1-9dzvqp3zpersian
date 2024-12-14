import { Code, Globe, Laptop, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function WebDevelopmentPage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Web Development Services</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Custom web solutions built with cutting-edge technologies. We create responsive,
          scalable, and user-friendly websites and applications tailored to your needs.
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
    title: "Custom Development",
    description: "Tailored web solutions built with modern frameworks and technologies.",
    icon: <Code className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Responsive Design",
    description: "Websites that look and function perfectly on all devices.",
    icon: <Smartphone className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Web Applications",
    description: "Powerful web applications that solve complex business problems.",
    icon: <Laptop className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "SEO Optimization",
    description: "Built-in SEO best practices to improve your online visibility.",
    icon: <Globe className="w-6 h-6 text-purple-500" />,
  },
];