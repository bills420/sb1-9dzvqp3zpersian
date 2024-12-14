"use client";

import { useState, useCallback } from "react";

export function useMenuHover() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleHover = useCallback((href: string | null) => {
    setHoveredItem(href);
  }, []);

  return {
    hoveredItem,
    handleHover,
  };
}