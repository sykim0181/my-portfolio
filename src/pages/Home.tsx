import First from "../components/Home/First";
import About from "../components/Home/About";
import Profile from "../components/Home/Profile";
import useScrollHome from "../hooks/useScrollHome";

const sections = [First, About, Profile];

const Home = () => {
  const { Sections } = useScrollHome({ sections });

  return <>{Sections}</>;
};

export default Home;
