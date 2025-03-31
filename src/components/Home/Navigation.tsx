import { useInView } from "motion/react";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const List = styled.ul`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  margin: 0;
  border-radius: 100px;
  overflow: hidden;
  background-color: black;
  color: white;
`;

const ListItem = styled.li`
  width: 80px;
  list-style: none;
  padding: 0.5rem;
  border-radius: 100px;
  display: flex;
  justify-content: center;

  & a {
    display: block;
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
  }

  &:hover,
  &.selected {
    background-color: white;
    & a {
      color: black;
    }
  }
`;

interface NavigationProps {
  sectionRefs: React.RefObject<HTMLDivElement | null>[];
}

const Navigation = (props: NavigationProps) => {
  const { sectionRefs } = props;

  const sectionsInView = sectionRefs.map((ref) =>
    useInView(ref, { amount: "all" })
  );

  return (
    <Wrapper>
      <List>
        <ListItem className={sectionsInView[0] ? "selected" : undefined}>
          {/* <NavLink to="/#about">About</NavLink> */}
        </ListItem>
        <ListItem className={sectionsInView[1] ? "selected" : undefined}>
          {/* <NavLink to="/#projects">Project</NavLink> */}
        </ListItem>
        <ListItem className={sectionsInView[2] ? "selected" : undefined}>
          {/* <NavLink to="/#contact">Contact</NavLink> */}
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Navigation;
