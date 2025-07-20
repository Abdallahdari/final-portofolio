"use client";
import { cn } from "@/app/lib/utilt";
import { SquareTerminal } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Loader from "../loading";
import Link from "next/link";
import { Suspense, useState } from "react";

export const HoverEffect3 = ({
  items,
  className,
}: {
  items: {
    Topic: string;
    Desctrition: string;
    image: string;
    id: number;
    Links: string;
    GitLinks: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10",
          className
        )}
      >
        <Suspense fallback={<Loader count={items.length} />}>
          {/* Render each item with hover effect */}
          {items.map((item, idx) => (
            <Link
              href={`${item.Links}`}
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
              <Card className="group">
                <div className="h-52 overflow-hidden">
                  {" "}
                  <Image
                    src={item.image}
                    height={2040}
                    width={2040}
                    className="h-full group-hover:scale-110 transition-all duration-300 w-full object-cover "
                    alt={item.image}
                  />
                </div>
                <div className="flex px-4 flex-col justify-between pb-7">
                  <CardTitle className="">{item.Topic}</CardTitle>
                  <CardDescription className="my-3">
                    {item.Desctrition.length > 40
                      ? item.Desctrition.slice(0, 40) + "...."
                      : item.Desctrition}
                  </CardDescription>
                  <div className=" flex flex-wrap gap-2">
                    {item.Skills &&
                      item.Skills.map((skill: string, i: number) => (
                        <span
                          key={i}
                          className="text-gray-500 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                  <Link
                    className="flex items-center text-gray-300 gap-2  group-hover:text-[#06B6D4] transition-all duration-300 mt-4"
                    href={item.GitLinks || ""}
                  >
                    <SquareTerminal size={16} />
                    <p className="text-[13px]">View sourc</p>
                  </Link>
                </div>
              </Card>
            </Link>
          ))}
        </Suspense>
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
        "rounded-2xl h-full w-full  overflow-hidden bg-[#27272A] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
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
