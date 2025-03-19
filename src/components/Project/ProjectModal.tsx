import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { getProject } from "../../API/supabase";
import ProjectErrorBoundary from "./ProjectErrorBoundary";
import ProjectModalContent from "./ProjectModalContent";
import ProjectModalHeader from "./ProjectModalHeader";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: calc(100% - 30px);
  background-color: white;
  position: absolute;
  bottom: 0;
  overflow-y: scroll;
`;

const ContentWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

interface ProjectModalProps {
  projectId: number;
}

const ProjectModal = (props: ProjectModalProps) => {
  const { projectId } = props;

  const { data, error, isFetching } = useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      const project = await getProject(projectId);
      return project;
    },
    staleTime: 1000 * 60 * 10,
  });

  return (
    <Wrapper
      id="project-modal"
      initial={{ translateY: "100%" }}
      animate={{
        translateY: 0,
      }}
      exit={{ translateY: "100%" }}
      transition={{
        type: "spring",
        bounce: 0,
      }}
    >
      <ProjectModalHeader project={data} />

      <ContentWrapper>
        <ProjectErrorBoundary>
          <ProjectModalContent
            project={data}
            isFetching={isFetching}
            error={error}
          />
        </ProjectErrorBoundary>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProjectModal;
