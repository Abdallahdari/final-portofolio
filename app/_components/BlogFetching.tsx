import React from "react";

import { HoverEffect2 } from "../components/ui/HoverEffect2";
import { Blogs } from "../_lib/data";

export default async function BlogFetching() {
  const Blog = await Blogs();
  console.log(Blogs);
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold uppercase text-white">
        Blogs
      </h1>
      <HoverEffect2 Blog={Blog} />
    </div>
  );
}
