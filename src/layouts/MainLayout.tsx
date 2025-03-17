import { Outlet } from "react-router";
import styled from "styled-components";

import RootErrorBoundary from "../components/Common/RootErrorBoundary";
import Cursor from "../components/Common/Cursor";
import ScrollTo from "../components/Common/ScrollTo";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const MainLayout = () => {
  return (
    <>
      <RootErrorBoundary>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </RootErrorBoundary>

      <Cursor />
      <ScrollTo />
    </>
  );
};

export default MainLayout;
