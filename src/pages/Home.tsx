import styled from "styled-components";
import FirstSection from "../components/Home/FirstSection";
import AboutSection from "../components/Home/AboutSection";
import LastSection from "../components/Home/LastSection";
import Navigation from "../components/Home/Navigation";
import ProjectSection from "../components/Home/ProjectSection";

const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  position: relative;
`;

const Home = () => {
  return (
    <Wrapper id="content-root">
      <FirstSection />
      <AboutSection />
      <ProjectSection />
      <LastSection />

      <Navigation />
    </Wrapper>
  );
};

export default Home;
