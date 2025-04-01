import { createClient } from "@/libs/supabase/server";
import ProjectContent from "@/components/Project/ProjectContent";
import ProjectHeader from "@/components/Project/ProjectHeader";
import { Project } from "@/types/commonTypes";
import { Root } from "@/components/Common/Modal";
import ProjectModal from "@/components/Project/ProjectModal";

async function getProjectById(id: number) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("Project").select().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data[0] as Project;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  return (
    <Root>
      <ProjectModal>
        <ProjectHeader project={project} />
        <ProjectContent project={project} />
      </ProjectModal>
    </Root>
  );
};

export default Page;
