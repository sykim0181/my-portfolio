import styled from "styled-components";

import ProjectItem from "./ProjectItem";
import useResponsive from "../../hooks/useResponsive";

const projectDatas: {
  name: string;
  imgSrc: string;
  href: string;
}[] = [
  {
    name: "music-archiving",
    href: "/project/1",
    imgSrc: "/projects/music-archiving.gif",
  },
  {
    name: "XSO - e-commerce",
    href: "/project/2",
    imgSrc: "/projects/xso.webp",
  },
  {
    name: "Aiku",
    href: "/project/3",
    imgSrc: "/projects/aiku.webp",
  },
  {
    name: "SyncSchedule",
    href: "/project/4",
    imgSrc: "/projects/sync-schedule.webp",
  },
];

const Wrapper = styled.section`
  position: relative;
`;

const InnerContainer = styled.div`
  width: var(--default-width);
  max-width: var(--max-width);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 5rem;
`;

const DefaultProjectList = styled.div`
  display: grid;
  gap: min(10vw, 3rem);
`;

const ProjectListForPC = styled(DefaultProjectList)`
  grid-template-columns: repeat(3, 1fr);
`;

const ProjectListForMobile = styled(DefaultProjectList)`
  grid-template-columns: repeat(2, 1fr);
`;

const Projects = () => {
  const { isTablet } = useResponsive();
  const ProjectList = isTablet ? ProjectListForMobile : ProjectListForPC;

  return (
    <Wrapper>
      <InnerContainer>
        <Title>Project</Title>

        <ProjectList>
          {projectDatas.map((project) => (
            <ProjectItem
              key={project.name}
              name={project.name}
              imgSrc={project.imgSrc}
              href={project.href}
            />
          ))}
        </ProjectList>
      </InnerContainer>
    </Wrapper>
  );
};

export default Projects;
