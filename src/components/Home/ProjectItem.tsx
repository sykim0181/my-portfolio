import styled from "styled-components";
import { useSetAtom } from "jotai";
import { curProject } from "./Projects";

const Wrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  box-shadow: 0px 10px 20px #9e9e9e;
  position: relative;
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

  return (
    <Wrapper onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
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
