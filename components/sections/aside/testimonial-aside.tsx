"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bills Co. LTD transformed our workspace with their beautification services. The results exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Facility Manager",
    company: "Tech Solutions Inc.",
  },
  {
    quote: "Their web development team delivered a stunning website that perfectly captures our brand identity.",
    author: "Michael Chen",
    role: "Marketing Director",
    company: "Global Innovations",
  },
];

export function TestimonialAside() {
  return (
    <aside className="py-12 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <blockquote className="mb-4 text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <footer>
                  <cite className="not-italic">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </cite>
                </footer>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </aside>
  );
}