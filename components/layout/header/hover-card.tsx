"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { getMenuContent } from "@/lib/menu-content";

interface HoverCardProps {
  item: {
    href: string;
    label: string;
  };
  onClose: () => void;
}

export function HoverCard({ item, onClose }: HoverCardProps) {
  const menuContent = getMenuContent(item.href);
  const cardRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50"
      role="menu"
      aria-label={`${item.label} submenu`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-card" />
      <Card className="p-4 shadow-lg">
        <div className="space-y-4">
          {menuContent.links.map((link, index) => (
            <Link
              key={link.href}
              ref={index === 0 ? firstLinkRef : null}
              href={`${item.href}${link.href}`}
              className="block hover:bg-muted p-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              role="menuitem"
              onClick={onClose}
            >
              <div className="font-medium">{link.title}</div>
              <div className="text-sm text-muted-foreground">{link.description}</div>
            </Link>
          ))}
          <Button
            asChild
            className="w-full gap-2 mt-2"
            role="menuitem"
            onClick={onClose}
          >
            <Link href={item.href}>
              <span>View All {item.label}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}