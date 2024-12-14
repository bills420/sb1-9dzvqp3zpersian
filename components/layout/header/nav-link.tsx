"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative py-1.5 text-muted-foreground transition-colors hover:text-foreground",
        isActive && "text-foreground font-medium",
        "group",
        "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-center",
        "after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300",
        "hover:after:scale-x-100",
        isActive && "after:scale-x-100"
      )}
    >
      {children}
    </Link>
  );
}