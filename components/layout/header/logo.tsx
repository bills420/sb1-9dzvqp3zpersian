"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
        Bills Co. LTD
      </Link>
    </motion.div>
  );
}