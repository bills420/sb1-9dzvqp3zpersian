import Link from "next/link";
import { LogoCarousel } from "./logo-carousel";

export function Footer() {
  return (
    <footer className="bg-secondary">
      <LogoCarousel />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Bills Co. LTD</h3>
            <p className="text-muted-foreground">
              Building, enhancing, and connecting to bring your vision to life.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/labour" className="text-muted-foreground hover:text-foreground transition-colors">
                  Labour
                </Link>
              </li>
              <li>
                <Link href="/services/beautification" className="text-muted-foreground hover:text-foreground transition-colors">
                  Beautification
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bills Co. LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}