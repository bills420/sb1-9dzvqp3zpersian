import { Card } from "@/components/ui/card";
import { Database, Cloud, Users, Layers } from "lucide-react";

export default function WebApplicationsPage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Web Applications</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Complex web applications built for performance and scalability. We develop
          custom solutions that automate processes and enhance productivity.
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
    title: "Data Management",
    description: "Robust database solutions for efficient data handling.",
    icon: <Database className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud-based solutions for optimal performance.",
    icon: <Cloud className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "User Management",
    description: "Comprehensive user authentication and authorization systems.",
    icon: <Users className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "API Integration",
    description: "Seamless integration with third-party services and APIs.",
    icon: <Layers className="w-6 h-6 text-purple-500" />,
  },
];