import { Card } from "@/components/ui/card";
import { ShoppingCart, CreditCard, BarChart3, Shield } from "lucide-react";

export default function EcommercePage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">E-commerce Solutions</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Powerful e-commerce platforms that drive sales and growth. We build secure,
          scalable online stores with seamless payment processing and inventory management.
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
    title: "Shopping Experience",
    description: "Intuitive user interface for seamless shopping experience.",
    icon: <ShoppingCart className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Secure Payments",
    description: "Multiple payment gateways with robust security measures.",
    icon: <CreditCard className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Analytics & Insights",
    description: "Detailed reporting and analytics for business intelligence.",
    icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Security First",
    description: "Advanced security features to protect your business and customers.",
    icon: <Shield className="w-6 h-6 text-purple-500" />,
  },
];