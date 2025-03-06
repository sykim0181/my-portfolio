import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>{/* footer */}</footer>
    </>
  );
};

export default MainLayout;
