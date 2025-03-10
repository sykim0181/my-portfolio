import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
