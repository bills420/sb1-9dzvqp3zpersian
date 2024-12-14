import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavMenu } from "./nav-menu";

export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-6">
      <NavMenu />
      <Button asChild>
        <Link href="/contact">Contact Us</Link>
      </Button>
    </div>
  );
}