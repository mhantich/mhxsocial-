import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import WedgetNews from "./components/WedgetNews";
import { useSelector } from "react-redux";

function AppLayout() {
  const showbar = useSelector((state) => state.globalReducer.showSideBar);
  return (
    <>
      <NavBar  />
      <div
        className={` ${
          showbar ? "translate-x-0 " : "-translate-x-full "
        } duration-700 py-6   bg-white fit-content md:translate-x-0 xs:left-0 xs:top-0  fixed md:-bottom-20 h-full z-30 `}
      >
        <WedgetNews />
      </div>
      <Outlet />
    </>
  );
}

export default AppLayout;
