import { Link } from "react-router-dom";
import Container from "../Container";

import NavbarListForSmallDevice from "./NavbarListForSmallDevice";
import NavbarList from "./NavbarList";
import NavbarImage from "./NavbarImage";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-100">
      <Container>
        <div className="navbar bg-gray-900 p-0">
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
            <Link to="/" className="font-semibold text-xl">
              Travel-Buddy
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
