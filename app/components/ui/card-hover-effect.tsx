"use client";
import { cn } from "@/app/lib/utilt";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    Topic: string;
    Desctrition: string;
    image: string;
    id: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<string>("All");
  const Cat = ["All", ...new Set(items.map((item) => item.Catogery))];
  const filteredItems =
    selected === "All"
      ? items
      : items.filter((item) => item.Catogery === selected);

  return (
    <div>
      <div className="flex items-center justify-center gap-4 mt-6">
        {" "}
        {Cat.map((item) => (
          <button
            key={item}
            type="button"
            className={`${
              selected === item ? "bg-[#bac8ff]   text-black" : "text-white"
            } border border-gray-400 rounded-lg  px-4 py-2 transition-all duration-500  `}
            onClick={() => setSelected(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
          className
        )}
      >
        {filteredItems.map((item, idx) => (
          <Link
            href={""}
            key={item.id}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="h-48 ">
                {" "}
                <Image
                  src={item.image}
                  height={2040}
                  width={2040}
                  className="h-full w-full object-cover "
                  alt={item.image}
                />
              </div>

              <CardTitle>{item.Topic}</CardTitle>
              <CardDescription>
                {item.Desctrition.length > 90
                  ? item.Desctrition.slice(0, 80) + "...."
                  : item.Desctrition}
              </CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
