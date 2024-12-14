"use client";

import { motion } from "framer-motion";
import { ArticleCard } from "./article-card";

const articles = [
  {
    title: "The Future of Labour Management",
    excerpt: "Exploring innovative approaches to workforce optimization and project efficiency.",
    category: "Labour",
    date: "2024-02-28",
    href: "/blog/future-of-labour",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "Sustainable Beautification Practices",
    excerpt: "How eco-friendly approaches are transforming urban and residential spaces.",
    category: "Beautification",
    date: "2024-02-25",
    href: "/blog/sustainable-beautification",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "Web Development Trends 2024",
    excerpt: "Latest technologies and methodologies shaping the digital landscape.",
    category: "Web Development",
    date: "2024-02-22",
    href: "/blog/web-development-trends",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=400",
  },
];

export function ArticleSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest thoughts on industry trends, innovations, and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.href} {...article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}