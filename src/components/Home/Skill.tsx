import { useState } from "react";
import styled from "styled-components";
import { motion, MotionProps } from "motion/react";
import useResponsive from "../../hooks/useResponsive";
import { appearMotionProps } from "../../constants/motionConfig";

type Skill = {
  name: string;
  src: string;
};

const skillData: Skill[] = [
  {
    name: "React",
    src: "/skills/react.svg",
  },
  {
    name: "Next.js",
    src: "/skills/nextjs.svg",
  },
  {
    name: "Javascript",
    src: "/skills/javascript.svg",
  },
  {
    name: "Typescript",
    src: "/skills/typescript.svg",
  },
  {
    name: "HTML",
    src: "/skills/html5.svg",
  },
  {
    name: "CSS",
    src: "/skills/css3.svg",
  },
  {
    name: "Sass",
    src: "/skills/sass.svg",
  },
  {
    name: "Styled-components",
    src: "/skills/styled-components.svg",
  },
  {
    name: "tailwind css",
    src: "/skills/tailwind.svg",
  },
  {
    name: "Mobx",
    src: "/skills/mobx.svg",
  },
  {
    name: "Redux",
    src: "/skills/redux.svg",
  },
  {
    name: "Jotai",
    src: "/skills/jotai.png",
  },
  {
    name: "Recoil",
    src: "/skills/recoil.png",
  },
  {
    name: "Tanstack Query",
    src: "/skills/tanstack-query.png",
  },
  {
    name: "React Native",
    src: "/skills/react-native.svg",
  },
  {
    name: "SQL",
    src: "/skills/sql.svg",
  },
  {
    name: "git",
    src: "/skills/git.svg",
  },
  {
    name: "supabase",
    src: "/skills/supabase.png",
  },
  {
    name: "Firebase",
    src: "/skills/firebase.svg",
  },
];

const Wrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h3`
  font-size: 2.5rem;
`;

const DescriptionForTablet = styled.p`
  font-size: 1.2rem;
`;
const DescriptionForMobile = styled.p`
  font-size: 1rem;
`;

const WrapperMotionProps: MotionProps = {
  ...appearMotionProps,
  transition: {
    ...appearMotionProps["transition"],
    delay: 0.5,
  },
};

const Skill = () => {
  const { isMobile } = useResponsive();

  const Description = isMobile ? DescriptionForMobile : DescriptionForTablet;

  return (
    <Wrapper {...WrapperMotionProps}>
      <Title>Skill</Title>
      <Description>아래의 기술을 사용해본 경험이 있습니다.</Description>
      <SkillList />
    </Wrapper>
  );
};

const CommonSkillListWrapper = styled.div`
  display: grid;
  gap: 1rem;
`;
const SkillListWrapperForPC = styled(CommonSkillListWrapper)`
  grid-template-columns: repeat(8, 1fr);
`;
const SkillListWrapperForTablet = styled(CommonSkillListWrapper)`
  grid-template-columns: repeat(5, 1fr);
`;
const SkillListWrapperForMobile = styled(CommonSkillListWrapper)`
  grid-template-columns: repeat(4, 1fr);
`;

const SkillList = () => {
  const { isTablet, isMobile } = useResponsive();

  const SkillListWrapper = isMobile
    ? SkillListWrapperForMobile
    : isTablet
      ? SkillListWrapperForTablet
      : SkillListWrapperForPC;

  return (
    <SkillListWrapper>
      {skillData.map((skill) => (
        <SkillItem skill={skill} key={skill.name} />
      ))}
    </SkillListWrapper>
  );
};

const SkillItemWrapper = styled.div`
  position: relative;
`;

const SkillImageWrapper = styled.div`
  height: 3rem;
  aspect-ratio: 1 / 1;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SkillImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SkillName = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  pointer-events: none;
  background-color: black;
  color: white;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 10px;
  transform: translate(-50%, 0);
  white-space: nowrap;
  z-index: 100;
`;

const SkillItem = ({ skill }: { skill: Skill }) => {
  const [isHover, setIsHover] = useState(false);

  const showName = () => setIsHover(true);
  const hideName = () => setIsHover(false);

  const onTouch = () => setIsHover((prev) => !prev);

  return (
    <SkillItemWrapper id="skills">
      <SkillImageWrapper
        onMouseEnter={showName}
        onMouseLeave={hideName}
        onTouchStart={onTouch}
      >
        <SkillImg src={skill.src} alt={`${skill.name}`} loading="lazy" />
      </SkillImageWrapper>

      {isHover && <SkillName>{skill.name}</SkillName>}
    </SkillItemWrapper>
  );
};

export default Skill;
