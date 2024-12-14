"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LogoItemProps {
  name: string;
  logo: string;
}

export function LogoItem({ name, logo }: LogoItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        "w-32 h-20 rounded-lg bg-background p-4",
        "flex items-center justify-center",
        "border shadow-sm transition-shadow hover:shadow-md"
      )}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
      />
    </motion.div>
  );
}