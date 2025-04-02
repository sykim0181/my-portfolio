"use client";

import { useMemo, useRef } from "react";
import AboutSection from "@/components/Home/AboutSection";
import ProjectSection from "@/components/Home/ProjectSection";
import LastSection from "@/components/Home/LastSection";
import FirstSection from "@/components/Home/FirstSection";
import Cursor from "@/components/Common/Cursor";
import Navigation from "@/components/Home/Navigation";

export default function Page() {
  const refs = Array(3)
    .fill(0)
    .map(() => useRef<HTMLDivElement>(null));
  const sections = useMemo(
    () => [
      { name: "ABOUT", id: "about", ref: refs[0] },
      { name: "PROJECT", id: "projects", ref: refs[1] },
      { name: "CONTACT", id: "contact", ref: refs[2] },
    ],
    []
  );

  return (
    <div className="relative">
      <FirstSection />
      <AboutSection ref={refs[0]} />
      <ProjectSection ref={refs[1]} />
      <LastSection ref={refs[2]} />

      <Cursor />
      <Navigation sections={sections} />
    </div>
  );
}
