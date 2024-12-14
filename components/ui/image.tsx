"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function Image({ className, alt, fallback = "", ...props }: ImageProps) {
  const [error, setError] = useState(false);

  return (
    <img
      className={cn("object-cover", className)}
      alt={alt}
      onError={() => setError(true)}
      src={error ? fallback : props.src}
      {...props}
    />
  );
}