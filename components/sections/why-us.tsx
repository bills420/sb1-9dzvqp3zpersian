"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Clock, Users, Trophy } from "lucide-react";

export function WhyUs() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With years of experience and a commitment to excellence, we deliver exceptional
            results across all our service areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-background hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  {feature.stat && (
                    <p className="text-3xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                      {feature.stat}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Proven Experience",
    description: "Years of expertise across multiple industries and projects.",
    icon: <Trophy className="w-6 h-6 text-primary" />,
    stat: "15+ Years",
  },
  {
    title: "Quality Guaranteed",
    description: "Commitment to excellence in every project we undertake.",
    icon: <Shield className="w-6 h-6 text-primary" />,
    stat: "100% Satisfaction",
  },
  {
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on schedule.",
    icon: <Clock className="w-6 h-6 text-primary" />,
    stat: "98% On Time",
  },
  {
    title: "Expert Team",
    description: "Skilled professionals dedicated to your success.",
    icon: <Users className="w-6 h-6 text-primary" />,
    stat: "50+ Experts",
  },
];