import { Link } from "react-router-dom";
import Container from "../Container";

import NavbarListForSmallDevice from "./NavbarListForSmallDevice";
import NavbarList from "./NavbarList";
import NavbarImage from "./NavbarImage";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";

import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-green-400 text-gray-100  z-10 w-full ">
      <Container>
        <div className="navbar   p-0   bg-gradient-to-r from-green-500 to-green-400  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <NavbarListForSmallDevice />
            </div>
            <Link to="/" className="font-semibold text-xl  relative ">
              {/* Programming-Blog */}
              <img
                className=" w-[100px] h-[20px]  md:w-[250px] md:h-[30px]  "
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <NavbarList />
          </div>
          <div className="navbar-end gap-10">
            <section className="avatar">
              <div className="w-12 rounded-full">
                <Link to="/dashboard/profile">
                  <NavbarImage />
                </Link>
              </div>
            </section>
            <section className="hidden md:inline lg:inline xl:inline 2xl:inline">
              <LoginAndLogout />
            </section>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
