"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingCard({ children, className = "" }: GlowingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 ease-out transform hover:scale-[1.01] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? `0 0 15px rgba(6, 182, 212, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)`
          : "none", // Remove default shadow when not hovered
        border: isHovered
          ? "1px solid rgba(6, 182, 212, 0.5)"
          : "1px solid var(--border)", // Add a subtle border on hover
      }}
    >
      <div
        className={`absolute -inset-px rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity duration-300 ${
          isHovered ? "opacity-20" : ""
        }`}
        style={{ filter: "blur(3px)" }} // Reduced blur for a sharper glow
      />
      <CardContent className="relative z-10">{children}</CardContent>
    </Card>
  );
}
