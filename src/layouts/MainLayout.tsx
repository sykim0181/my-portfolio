import { Outlet } from "react-router";
import styled from "styled-components";

import RootErrorBoundary from "../components/Common/RootErrorBoundary";
import Cursor from "../components/Common/Cursor";
import ScrollTo from "../components/Common/ScrollTo";
import RootModal from "../components/Common/RootModal";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const MainLayout = () => {
  return (
    <>      
      <RootErrorBoundary>
        <Wrapper id="content-root">
          <Outlet />
        </Wrapper>
      </RootErrorBoundary>

      <RootModal />
      <Cursor />
      <ScrollTo />
    </>
  );
};

export default MainLayout;
