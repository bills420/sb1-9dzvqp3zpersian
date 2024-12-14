"use client";

import { PARTNER_LOGOS } from "@/lib/constants/logos";
import { LogoItem } from "./logo-item";
import { motion } from "framer-motion";

interface LogoTrackProps {
  animate: any;
}

export function LogoTrack({ animate }: LogoTrackProps) {
  return (
    <motion.div
      className="flex items-center gap-12"
      animate={animate}
    >
      {[...Array(2)].map((_, groupIndex) => (
        <div key={groupIndex} className="flex items-center gap-12 shrink-0">
          {PARTNER_LOGOS.map((logo, index) => (
            <LogoItem key={`${groupIndex}-${index}`} {...logo} />
          ))}
        </div>
      ))}
    </motion.div>
  );
}