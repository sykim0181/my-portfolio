import { Outlet } from "react-router";
import styled from "styled-components";

import Footer from "../components/Common/Footer";
import RootErrorBoundary from "../components/Common/RootErrorBoundary";
import Cursor from "../components/Common/Cursor";

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
      <Footer />

      <Cursor />
    </>
  );
};

export default MainLayout;
