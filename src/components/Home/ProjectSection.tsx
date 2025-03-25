import styled from "styled-components";
import { motion } from "motion/react";
import ProjectItem from "./ProjectItem";
import useResponsive from "../../hooks/useResponsive";
import { appearMotionProps } from "../../constants/motionConfig";

const projectDatas: {
  id: number;
  name: string;
  imgSrc: string;
}[] = [
  {
    id: 7,
    name: "포트폴리오",
    imgSrc: "/projects/my-portfolio.png",
  },
  {
    id: 5,
    name: "GAIA Office 선 도형 기능 고도화",
    imgSrc: "/projects/advancing-connector.gif",
  },
  {
    id: 6,
    name: "GAIA Office 기능 유지 보수",
    imgSrc: "/projects/gaia-office.png",
  },
  {
    id: 1,
    name: "music-archiving",
    imgSrc: "/projects/music-archiving.gif",
  },
  {
    id: 2,
    name: "XSO - e-commerce",
    imgSrc: "/projects/xso.webp",
  },
  {
    id: 3,
    name: "Aiku",
    imgSrc: "/projects/aiku.webp",
  },
  {
    id: 4,
    name: "SyncSchedule",
    imgSrc: "/projects/sync-schedule.webp",
  },
];

const Wrapper = styled(motion.section)`
  padding: 2rem 0;
  height: 100dvh;
  box-sizing: border-box;
  overflow-y: scroll;
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
  color: white;
  font-family: "PartialSansKR-Regular";
  font-size: min(15vw, 6rem);
  font-weight: normal;
  margin-bottom: 2rem;
`;

const DefaultProjectList = styled.div`
  display: grid;
  gap: min(10vw, 3rem);
  width: 100%;
`;

const ProjectListForPC = styled(DefaultProjectList)`
  grid-template-columns: repeat(3, 1fr);
`;

const ProjectListForMobile = styled(DefaultProjectList)`
  grid-template-columns: repeat(2, 1fr);
`;

const ProjectSection = () => {
  const { isTablet } = useResponsive();
  const ProjectList = isTablet ? ProjectListForMobile : ProjectListForPC;

  return (
    <Wrapper id="projects" className="hide_scrollbar" {...appearMotionProps}>
      <Title>Project</Title>
      <InnerContainer>
        <ProjectList>
          {projectDatas.map((project) => (
            <ProjectItem
              key={project.name}
              id={project.id}
              name={project.name}
              imgSrc={project.imgSrc}
            />
          ))}
        </ProjectList>
      </InnerContainer>
    </Wrapper>
  );
};

export default ProjectSection;
