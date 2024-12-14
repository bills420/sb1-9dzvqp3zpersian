"use client";

import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { navItems } from "./nav-items";
import { NavLink } from "./nav-link";
import { HoverCard } from "./hover-card";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import { useMenuHover } from "@/hooks/use-menu-hover";

export function NavMenu() {
  const { hoveredItem, handleHover } = useMenuHover();
  const menuRef = useRef<HTMLDivElement>(null);

  useKeyboardNavigation(menuRef, () => handleHover(null));

  return (
    <div
      ref={menuRef}
      className="hidden md:flex items-center gap-6 h-16"
      role="navigation"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <div
          key={item.href}
          className="relative h-full flex items-center"
          onMouseEnter={() => handleHover(item.href)}
          onMouseLeave={() => handleHover(null)}
          onFocus={() => handleHover(item.href)}
        >
          <NavLink href={item.href} aria-expanded={hoveredItem === item.href}>
            {item.label}
          </NavLink>
          <AnimatePresence>
            {hoveredItem === item.href && (
              <HoverCard item={item} onClose={() => handleHover(null)} />
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}