"use client";

import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutSection from "../../components/Home/AboutSection";
import ProjectSection from "../../components/Home/ProjectSection";
import LastSection from "../../components/Home/LastSection";
import FirstSection from "../../components/Home/FirstSection";
import Cursor from "../../components/Common/Cursor";

const Wrapper = styled.div`
  position: relative;
`;

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <FirstSection />
        <AboutSection />
        <ProjectSection />
        <LastSection />

        <Cursor />
      </Wrapper>
    </QueryClientProvider>
  );
}
