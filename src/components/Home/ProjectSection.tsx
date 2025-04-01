import ProjectItem from "./ProjectItem";
import { projectData } from "@/data/project";

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full box-border py-[3rem]">
      <h2 className="text-white font-[PartialSansKR-Regular] text-[min(15vw,6rem)] font-normal">
        Project
      </h2>
      <div className="w-(--default-width) max-w-(--max-width) flex flex-col items-center mx-auto mt-[2rem]">
        <div className="grid gap-[min(10vw,3rem)] w-full grid-cols-2 md:grid-cols-3">
          {projectData.map((project) => (
            <ProjectItem
              key={project.name}
              id={project.id}
              name={project.name}
              imgSrc={project.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
