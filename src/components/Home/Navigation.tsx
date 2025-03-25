import { NavLink, useLocation } from "react-router";
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

const Navigation = () => {
  const { hash } = useLocation();
  const id = hash.replace("#", "");

  return (
    <Wrapper>
      <List>
        <ListItem className={id === "about" ? "selected" : undefined}>
          <NavLink to="/#about">About</NavLink>
        </ListItem>
        <ListItem className={id === "projects" ? "selected" : undefined}>
          <NavLink to="/#projects">Project</NavLink>
        </ListItem>
        <ListItem className={id === "navigation" ? "selected" : undefined}>
          <NavLink to="/#contact">Contact</NavLink>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Navigation;
