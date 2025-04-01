import AboutSection from "@/components/Home/AboutSection";
import ProjectSection from "@/components/Home/ProjectSection";
import LastSection from "@/components/Home/LastSection";
import FirstSection from "@/components/Home/FirstSection";
import Cursor from "@/components/Common/Cursor";

export default function Page() {
  return (
    <div className="relative">
      <FirstSection />
      <AboutSection />
      <ProjectSection />
      <LastSection />

      <Cursor />
    </div>
  );
}
