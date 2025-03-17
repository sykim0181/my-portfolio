import styled from "styled-components";
import { motion } from "motion/react";
import Skill from "./Skill";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import { DivRefProps } from "../../types/interface";
import { appearMotionProps } from "../../constants/motionConfig";

const Wrapper = styled.section`
  padding: 6rem 0;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: scroll;
  position: relative;
`;

const AboutText = styled(motion.h2)`
  color: white;
  font-family: "PartialSansKR-Regular";
  font-size: min(15vw, 8rem);
  font-weight: normal;
  line-height: min(15vw, 8rem);
  position: absolute;
  top: max(-5vw, -1rem);
`;

const InnerContainer = styled.div`
  width: var(--default-width);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

interface AboutProps extends DivRefProps {}

const About = ({ ref }: AboutProps) => {
  return (
    <Wrapper id="about" ref={ref} className="hide_scrollbar home_section">
      <AboutText {...appearMotionProps}>About</AboutText>
      <InnerContainer>
        <AboutMe />
        <Skill />
        <Projects />
      </InnerContainer>
    </Wrapper>
  );
};

export default About;
