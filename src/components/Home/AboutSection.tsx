import styled from "styled-components";
import { motion } from "motion/react";
import Skill from "./Skill";
import AboutMe from "./AboutMe";
import { appearMotionProps } from "../../constants/motionConfig";
import Profile from "./Profile";

const Wrapper = styled.section`
  width: 100%;
  padding: 3rem 0;
  position: relative;
`;

const AboutText = styled(motion.h2)`
  color: white;
  font-family: "PartialSansKR-Regular";
  font-size: min(15vw, 6rem);
  font-weight: normal;
  margin-bottom: 2rem;
`;

const InnerContainer = styled.div`
  width: var(--default-width);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const AboutSection = () => {
  return (
    <Wrapper id="about">
      <AboutText {...appearMotionProps}>About</AboutText>
      <InnerContainer>
        <AboutMe />
        <Skill />
        <Profile />
      </InnerContainer>
    </Wrapper>
  );
};

export default AboutSection;
