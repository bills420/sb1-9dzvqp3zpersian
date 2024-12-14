"use client";

import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScroll();

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200",
        scrolled
          ? "bg-background/80 backdrop-blur-sm border-b shadow-sm"
          : "bg-background/0"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 relative">
          <Logo />
          <DesktopNav />
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}