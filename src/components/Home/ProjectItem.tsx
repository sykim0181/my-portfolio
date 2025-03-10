import styled from "styled-components";
import { useSetAtom } from "jotai";
import { motion, Variants } from "motion/react";

import { curProject } from "./Projects";

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: scale 0.3s linear;

  &:hover {
    scale: 1.1;
  }
`;

interface Props {
  href: string;
  imgSrc: string;
  name: string;
}

const ProjectItem = (props: Props) => {
  const { href, imgSrc, name } = props;

  const setCurProject = useSetAtom(curProject);

  const onMouseMove = (e: React.MouseEvent) => {
    setCurProject({
      name,
      position: {
        x: e.clientX,
        y: e.clientY,
      },
    });
  };

  const onMouseLeave = () => {
    setCurProject(null);
  };

  const variants: Variants = {
    offscreen: {
      scale: 0.5
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring"
      }
    }
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        borderRadius: "10px",
        width: "100%",
        aspectRatio: "1 / 1",
        overflow: "hidden",
        boxShadow: "0px 10px 20px #9e9e9e",
        position: "relative",
      }}
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
    >
      <a href={href}>
        <ProjectImg
          src={imgSrc}
          alt={`프로젝트 ${name} 이미지`}
          loading="lazy"
        />
      </a>
    </motion.div>
  );
};

export default ProjectItem;
