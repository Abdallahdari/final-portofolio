"use server";

import { supabase } from "./supabase";

export async function SendMassege(formData) {
  console.log("Form Data:", formData);
  const email = formData.get("Email");
  const phone = formData.get("Phone");

  const { data, error } = await supabase
    .from("massages")
    .insert([{ email: email, PhoneNumber: phone }])
    .select();

  if (error) {
    throw new Error(`Cannot send the message: ${error.message}`);
  }

  return data;
}
export async function Cvcounter() {
  const { data, error } = await supabase
    .from("Cv")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();
  if (error) {
    throw new Error("Cannot send the message: ", error.message);
  }

  return data;
}
