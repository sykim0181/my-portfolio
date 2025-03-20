import styled from "styled-components";
import FirstSection from "../components/Home/FirstSection";
import AboutSection from "../components/Home/AboutSection";
import ProfileSection from "../components/Home/ProfileSection";
import LastSection from "../components/Home/LastSection";
import useScrollHome from "../hooks/useScrollHome";

const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
`;

const sections = [FirstSection, AboutSection, ProfileSection, LastSection];

const Home = () => {
  const { Sections } = useScrollHome({ sections });

  return (
    <Wrapper id="content-root">
      {Sections}
    </Wrapper>
  );
};

export default Home;
