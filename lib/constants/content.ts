export const COMPANY_INFO = {
  name: "Bills Co. LTD",
  tagline: "Building Dreams Together",
  description: "From labour to beautification and web development, we bring your vision to life.",
  contact: {
    email: "contact@billsco.example.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Business Street",
      suite: "Suite 100",
      city: "Business City",
      state: "BC",
      zip: "12345",
    },
  },
} as const;

export const SERVICES = [
  {
    title: "Labour Services",
    description: "Professional workforce solutions for construction, maintenance, and industrial projects.",
    icon: "Hammer",
    color: "blue",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "Beautification",
    description: "Transform spaces with our expert landscaping and aesthetic enhancement services.",
    icon: "Paintbrush",
    color: "green",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "Web Development",
    description: "Custom web solutions built with cutting-edge technologies for your digital presence.",
    icon: "Code",
    color: "purple",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=400",
  },
] as const;