import { Outlet } from "react-router";
import RootErrorBoundary from "../components/Common/RootErrorBoundary";
import Cursor from "../components/Common/Cursor";
import ScrollTo from "../components/Common/ScrollTo";
import RootModal from "../components/Common/RootModal";

const MainLayout = () => {
  return (
    <>      
      <RootErrorBoundary>
        <Outlet />
      </RootErrorBoundary>

      <RootModal />
      <Cursor />
      <ScrollTo />
    </>
  );
};

export default MainLayout;
