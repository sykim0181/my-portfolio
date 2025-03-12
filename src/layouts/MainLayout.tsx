import { Outlet } from "react-router";
import styled from "styled-components";

import Footer from "../components/Common/Footer";
import RootErrorBoundary from "../components/Common/RootErrorBoundary";

const Wrapper = styled.main`
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
    </>
  );
};

export default MainLayout;
