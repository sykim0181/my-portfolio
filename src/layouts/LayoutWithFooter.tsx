import { Outlet } from "react-router";
import Footer from "../components/Common/Footer";

const LayoutWithFooter = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutWithFooter;
