import { Outlet } from "react-router-dom";
import SidebarAllLinks from "./SideBarLinks";
import Container from "../Container";

const Sidebar = () => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Container>
            {" "}
            <Outlet />
          </Container>{" "}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <SidebarAllLinks />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
