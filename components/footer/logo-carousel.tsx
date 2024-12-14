"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

const logos = [
  {
    name: "Company 1",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop&auto=format&q=80",
  },
  {
    name: "Company 2",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop&auto=format&q=80",
  },
  {
    name: "Company 3",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop&auto=format&q=80",
  },
  {
    name: "Company 4",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop&auto=format&q=80",
  },
  {
    name: "Company 5",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop&auto=format&q=80",
  },
  {
    name: "Company 6",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop&auto=format&q=80",
  },
] as const;

export function LogoCarousel() {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const startAnimation = async () => {
      const contentWidth = contentRef.current?.offsetWidth || 0;
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const distance = contentWidth / 2;

      await controls.start({
        x: -distance,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <div className="relative overflow-hidden py-8 bg-muted/30" ref={containerRef}>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        ref={contentRef}
        className="flex items-center gap-12"
        animate={controls}
      >
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center gap-12 shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`${groupIndex}-${index}`}
                className={cn(
                  "w-24 h-24 rounded-lg bg-background p-4",
                  "flex items-center justify-center",
                  "border shadow-sm transition-shadow hover:shadow-md"
                )}
              >
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  className="w-full h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}