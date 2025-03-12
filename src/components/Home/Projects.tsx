import styled from "styled-components";
import { useEffect, useRef } from "react";
import { atom, useAtomValue } from "jotai";
import { AnimatePresence, motion, useMotionValue } from "motion/react";

import ProjectItem from "./ProjectItem";
import useResponsive from "../../hooks/useResponsive";
import { Position } from "../../types/commonTypes";

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

type CurrentProject = {
  name: string;
  position: Position;
};

export const curProject = atom<CurrentProject | null>(null);

const Wrapper = styled.section`
  background-color: ivory;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
  font-family: "Montserrat";
  font-weight: 300;
  font-style: italic;
`;

const DefaultProjectList = styled.div`
  display: grid;
  gap: min(10vw, 8rem);
  width: var(--default-width);
`;

const ProjectListForPC = styled(DefaultProjectList)`
  grid-template-columns: repeat(3, 1fr);
`;

const ProjectListForMobile = styled(DefaultProjectList)`
  grid-template-columns: repeat(2, 1fr);
`;

const Projects = () => {
  const { isMobile } = useResponsive();
  const ProjectList = isMobile ? ProjectListForMobile : ProjectListForPC;

  return (
    <Wrapper>
      <Title>(Projects)</Title>

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

      <ProjectCursor />
    </Wrapper>
  );
};

const ProjectCursor = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const currentProject = useAtomValue(curProject);

  const hoverOnProject = currentProject !== null;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (currentProject) {
      const translateXY = getTranslateXY()!;
      x.set(translateXY.translateX);
      y.set(translateXY.translateY);
    }
  }, [currentProject]);

  function getTranslateXY() {
    if (!ref.current || !hoverOnProject) {
      return;
    }

    const wrapper = ref.current.getBoundingClientRect();
    const translateX = currentProject.position.x - wrapper.x;
    const translateY = currentProject.position.y - wrapper.y;

    return { translateX, translateY };
  }

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <AnimatePresence>
        {hoverOnProject && (
          <motion.div
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "2.5rem",
              padding: "1rem 2rem",
              width: "fit-content",
              x,
              y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.1,
            }}
          >
            {currentProject.name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
