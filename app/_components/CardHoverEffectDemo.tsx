import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import { GetProject } from "../_lib/data";
export const dynamic = "force-dynamic";

export async function CardHoverEffectDemo() {
  const project = await GetProject();
  const items = project.slice(0, 3);
  return (
    <div id="Project" className="max-w-5xl mx-auto px-8">
      <h1 className="text-center text-2xl font-semibold uppercase text-white">
        I&apos;ve been building a lot of things
      </h1>
      <HoverEffect items={items} />
    </div>
  );
}
