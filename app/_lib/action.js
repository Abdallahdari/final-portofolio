"use server";
export async function SendMassege() {
  const { data, error } = await supabase
    .from("massages")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();
  if (error) {
    throw new Error("Cannot send the message: ", error.message);
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
