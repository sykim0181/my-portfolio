import Skill from "./Skill";
import AboutMe from "./AboutMe";
import Profile from "./Profile";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-[3rem]">
      <h2 className="mb-[2rem] text-white font-[PartialSansKR-Regular] text-[min(15vw,6rem)] font-normal">About</h2>
      <div className="w-(--default-width) max-w-(--max-width) my-0 mx-auto flex flex-col gap-[6rem]">
        <AboutMe />
        <Skill />
        <Profile />
      </div>
    </section>
  );
};

export default AboutSection;
