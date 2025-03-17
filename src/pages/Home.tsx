import First from "../components/Home/First";
import About from "../components/Home/About";
import Profile from "../components/Home/Profile";
import Last from "../components/Home/Last";
import useScrollHome from "../hooks/useScrollHome";

const sections = [First, About, Profile, Last];

const Home = () => {
  const { Sections } = useScrollHome({ sections });

  return <>{Sections}</>;
};

export default Home;
