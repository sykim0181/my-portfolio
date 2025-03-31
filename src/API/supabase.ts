import { createClient } from "@supabase/supabase-js";
import { Project } from "../types/commonTypes";
import { Database } from "../types/supabase";

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
);

export async function getProject(id: number): Promise<Project> {
  const { data, error } = await supabase.from("Project").select().eq("id", id);
  console.log("project", data);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  if (data.length === 0) {
    throw new Error("No Matching Project");
  }

  return data[0] as Project;
}
