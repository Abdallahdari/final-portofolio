import { supabase } from "./supabase";

export async function GetAll() {
  const { data, error } = await supabase.from("Projects").select("*");
  if (error) {
    throw new Error("Cannot fetch the Projects: ", error.message);
  }
  return data;
}

export async function GetExperience() {
  const { data, error } = await supabase.from("Workexperice").select("*");

  if (error) {
    throw new Error("Cannot fetch the Project: ", error.message);
  }
  console.log(data);
  return data;
}

export async function GetProject() {
  const { data, error } = await supabase.from("Projects").select("*");

  if (error) {
    throw new Error("Cannot fetch the Project: ", error.message);
  }
  console.log(data);
  return data;
}

export async function Blogs() {
  const { data, error } = await supabase.from("Blogs").select("*");
  if (error) {
    throw new Error("Cannot fetch the Project: ", error.message);
  }
  console.log(data);
  return data;
}
