"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Hammer, Paintbrush, Code } from "lucide-react";

export function Services() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions across labour, beautification, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-primary/10">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Labour Services",
    description:
      "Professional workforce solutions for construction, maintenance, and industrial projects.",
    icon: <Hammer className="w-6 h-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "Beautification",
    description:
      "Transform spaces with our expert landscaping and aesthetic enhancement services.",
    icon: <Paintbrush className="w-6 h-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "Web Development",
    description:
      "Custom web solutions built with cutting-edge technologies for your digital presence.",
    icon: <Code className="w-6 h-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=400",
  },
];