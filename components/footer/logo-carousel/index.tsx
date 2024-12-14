"use client";

import { useEffect, useRef } from "react";
import { useAnimationControls } from "framer-motion";
import { LogoTrack } from "./logo-track";

export function LogoCarousel() {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const startAnimation = async () => {
      const distance = containerRef.current?.scrollWidth || 0;
      
      await controls.start({
        x: -distance / 4,
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
      
      <LogoTrack animate={controls} />
    </div>
  );
}