import React from "react";
import { Timeline } from "../components/ui/Timeline";
import { GetExperience } from "../_lib/data";

export default async function Experience() {
  const data = await GetExperience();
  console.log(data);
  return (
    <div id="Expericne">
      <Timeline data={data} />
    </div>
  );
}
