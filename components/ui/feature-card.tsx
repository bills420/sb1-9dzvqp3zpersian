"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

export function FeatureCard({ title, description, icon: Icon, iconColor = "#40cde2" }: FeatureCardProps) {
  return (
    <Card className="p-6">
      <div className="flex gap-4">
        <div className="mt-1">
          <Icon className="w-6 h-6" style={{ color: iconColor }} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}