import { Outlet } from "react-router-dom";
import SidebarAllLinks from "./SideBarLinks";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="drawer lg:drawer-open ">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          onChange={toggleSidebar}
        />
        <div className="drawer-content  h-screen md:h-screen  lg:h-full  xl:h-full  2xl:h-full  ">
          {" "}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-5  rounded-full bg-green-400 hover:bg-green-500 duration-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none lg:hidden  fixed top-3 left-3"
          >
            Menu
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <SidebarAllLinks />
          {isOpen && (
            <label
              htmlFor="my-drawer-2"
              className=" left-3  top-3  align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-full bg-red-500 hover:bg-red-600 duration-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none lg:hidden fixed "
            >
              x
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
