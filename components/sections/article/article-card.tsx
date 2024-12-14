"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
  image: string;
  index?: number;
}

export function ArticleCard({
  title,
  excerpt,
  category,
  date,
  href,
  image,
  index = 0,
}: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span>{category}</span>
            <span>•</span>
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{excerpt}</p>
          <Button asChild variant="ghost" className="gap-2">
            <Link href={href}>
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}