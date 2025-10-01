import React from "react";
import { Timeline } from "../components/ui/Timeline";
import { GetExperience } from "../_lib/data";
export const dynamic = "force-dynamic";

export default async function Experience() {
  const data = await GetExperience();

  return (
    <div id="Expericne">
      <Timeline data={data} />
    </div>
  );
}
