import FirstSection from "../components/Home/FirstSection";
import AboutSection from "../components/Home/AboutSection";
import ProfileSection from "../components/Home/ProfileSection";
import LastSection from "../components/Home/LastSection";
import useScrollHome from "../hooks/useScrollHome";

const sections = [FirstSection, AboutSection, ProfileSection, LastSection];

const Home = () => {
  const { Sections } = useScrollHome({ sections });

  return <>{Sections}</>;
};

export default Home;
