"use client";

import {
  IoVideocam,
  IoLogoGithub,
  IoOpenOutline,
  IoClose,
} from "react-icons/io5";
import { Project } from "@/types/commonTypes";
import { CloseButton } from "@/components/Common/Modal";

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader = (props: ProjectHeaderProps) => {
  const { project } = props;

  const buttonStyle =
    "flex justify-center items-center text-black text-[1.5rem] xs:text-[2rem]";

  const Button = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} target="_blank" className={buttonStyle}>
      {children}
    </a>
  );

  return (
    <div className="w-full box-border py-[1rem] px-[2rem] sticky top-0 left-0 flex gap-[1rem] items-center bg-white">
      <div className="flex-1 text-[1rem] xs:text-[1.2rem] md:text-[1.5rem]">
        {project.name}
      </div>
      <div className="flex gap-[1rem]">
        {project?.github && (
          <Button href={project.github}>
            <IoLogoGithub />
          </Button>
        )}
        {project?.video_url && (
          <Button href={project.video_url}>
            <IoVideocam />
          </Button>
        )}
        {project?.deployment && (
          <Button href={project.deployment}>
            <IoOpenOutline />
          </Button>
        )}
        <CloseButton className={buttonStyle}>
          <IoClose />
        </CloseButton>
      </div>
    </div>
  );
};

export default ProjectHeader;
