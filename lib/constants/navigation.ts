export const NAV_ITEMS = [
  { label: "Labour", href: "/services/labour" },
  { label: "Beautification", href: "/services/beautification" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Labour", href: "/services/labour" },
    { label: "Beautification", href: "/services/beautification" },
    { label: "Web Development", href: "/services/web-development" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ],
} as const;