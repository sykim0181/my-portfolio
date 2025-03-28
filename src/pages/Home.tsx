import { useRef } from "react";
import styled from "styled-components";
import FirstSection from "../components/Home/FirstSection";
import AboutSection from "../components/Home/AboutSection";
import LastSection from "../components/Home/LastSection";
import Navigation from "../components/Home/Navigation";
import ProjectSection from "../components/Home/ProjectSection";
import HomeSection from "../components/Home/HomeSection";

const Wrapper = styled.div`
  overflow: hidden;
  height: 100dvh;
  position: relative;
`;

const Home = () => {
  const sectionRefs = Array(3).fill(0).map(() => useRef<HTMLDivElement>(null));

  return (
    <Wrapper id="content-root">
      <HomeSection id="first">
        <FirstSection />
      </HomeSection>

      <HomeSection id="about" ref={sectionRefs[0]}>
        <AboutSection />
      </HomeSection>

      <HomeSection id="projects" ref={sectionRefs[1]}>
        <ProjectSection />
      </HomeSection>

      <HomeSection id="contact" ref={sectionRefs[2]}>
        <LastSection />
      </HomeSection>

      <Navigation sectionRefs={sectionRefs} />
    </Wrapper>
  );
};

export default Home;
