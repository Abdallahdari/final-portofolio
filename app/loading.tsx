import React from "react";

export default function Loader({ count = 3 }) {
  return (
    <div className="h-[calc(100vh-15rem) flex items-center justify-center]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-xl border border-gray-700 bg-gray-800 p-6 space-y-4"
          >
            <div className="h-6 bg-gray-700 rounded w-3/4" />
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-5/6" />
            <div className="flex flex-wrap gap-2 pt-4">
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="h-6 w-16 bg-gray-700 rounded-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
