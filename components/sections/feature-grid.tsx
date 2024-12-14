"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/feature-card";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

export function FeatureGrid({ features, columns = 2 }: FeatureGridProps) {
  return (
    <div className={`grid md:grid-cols-${columns} gap-8`}>
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </div>
  );
}