"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  titile: string;
  Content: React.ReactNode;
  image: string;
  Discritiption: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div
      className="w-full  border-[.1px]  border-amber-50 px-12  rounded-xl my-32  font-sans overflow-hidden  "
      ref={containerRef}
    >
      <div className="  py-20 ">
        <h2 className="text-lg md:text-4xl mb-4 uppercase text-neutral-700 dark:text-neutral-300 font-semibold max-w-4xl">
          Collaborative Project Development{" "}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
          Over the past few years, I have worked on two major projects: a
          collaborative project with my team and a self-driven project. Below is
          a timeline of both, showcasing the milestones and achievements of
          each. This is the main project.
        </p>
      </div>

      <div ref={ref} className="relative flex flex-col gap-4  pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start pt-10 md:pt-40 md:gap-40"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.titile}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 ">
              <div className="mb-3 flex flex-col gap-1">
                <p className="text-2xl uppercase font-semibold text-white">
                  {item.Content}
                </p>
                <p className="text-gray-200">{item.Discritiption}</p>
              </div>

              <div className="h-48">
                <img
                  src={item.image}
                  alt={item.titile}
                  className="object-cover h-full rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};
