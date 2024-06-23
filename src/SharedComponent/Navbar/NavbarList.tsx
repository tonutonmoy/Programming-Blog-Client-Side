import { Link, useLocation } from "react-router-dom";
import { getUserInfo } from "../../Utils/auth.helper";
import { gql, useQuery } from "@apollo/client";

const SingleUserGQL = gql`
  query SingleUser {
    singleUser {
      role
    }
  }
`;

const NavbarList = () => {
  const token = getUserInfo();
  const location = useLocation();
  const { loading, error, data } = useQuery(SingleUserGQL, {
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
  }

  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-gray-100  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link
          to="/"
          className={`${
            location?.pathname === "/" && "     text-gray-500 font-bold  "
          } block py-2 px-3 text-gray-100  md:p-0  `}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/allBlogs"
          className={`${
            location?.pathname === "/allBlogs" &&
            "     text-gray-500 font-bold "
          } block py-2 px-3 text-gray-100  md:p-0  `}
        >
          Blogs
        </Link>
      </li>

      <li>
        <Link
          to="/about"
          className={`${
            location?.pathname === "/about" && "     text-gray-500 font-bold "
          } block py-2 px-3 text-gray-100  md:p-0  `}
        >
          About
        </Link>
      </li>
      {token && (
        <>
          {data?.singleUser?.role === "user" && (
            <li>
              <Link
                to="/createBlog"
                className={`${
                  location?.pathname === "/createBlog" &&
                  "     text-gray-500 font-bold "
                } block py-2 px-3 text-gray-100  md:p-0  `}
              >
                Create Blog
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/dashboard/dashboard"
              className="block py-2 px-3 text-gray-100  md:p-0 "
            >
              Dashboard
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavbarList;
