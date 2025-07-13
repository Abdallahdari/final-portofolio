export const dynamic = "force-dynamic"; // <-- add this line

import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import { GetProject } from "../_lib/data";

export async function CardHoverEffectDemo() {
  const items = await GetProject();
  return (
    <div id="Project" className="max-w-5xl mx-auto px-8">
      <h1 className="text-center text-2xl font-semibold uppercase text-white">
        Finished Projects
      </h1>
      <HoverEffect items={items} />
    </div>
  );
}
