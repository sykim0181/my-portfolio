import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100dvh;
  box-sizing: border-box;
  overflow-y: scroll;
`;

interface HomeSectionProps {
  ref?: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
  id: string;
}

const HomeSection = (props: HomeSectionProps) => {
  const { ref, children, id } = props;

  return (
    <Wrapper ref={ref} className="hide_scrollbar" id={id}>
      {children}
    </Wrapper>
  );
};

export default HomeSection;
