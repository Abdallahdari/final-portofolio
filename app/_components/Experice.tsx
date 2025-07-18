export const dynamic = "force-dynamic"; // <-- add this line

import React from "react";
import { Timeline } from "../components/ui/Timeline";
import { GetExperience } from "../_lib/data";
export default async function Experience() {
  const data = await GetExperience();

  return (
    <div id="Expericne">
      <Timeline data={data} />
    </div>
  );
}
