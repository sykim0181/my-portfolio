import styled from "styled-components";
import { motion, Variants } from "motion/react";
import { useSetAtom } from "jotai";
import { cursorTextAtom, cursorTypeAtom } from "../../atoms/cursorAtom";

const Wrapper = styled(motion.div)`
  border-radius: 10px;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  box-shadow: 0px 10px 20px #9e9e9e;
`;

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
  const setCursorType = useSetAtom(cursorTypeAtom);
  const setCursorText = useSetAtom(cursorTextAtom);

  const onMouseMove = () => {
    setCursorType("project");
    setCursorText(name);
  };

  const onMouseLeave = () => {
    setCursorType("default");
    setCursorText("");
  };

  const variants: Variants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <Wrapper
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
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
    </Wrapper>
  );
};

export default ProjectItem;
