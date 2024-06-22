import { Link } from "react-router-dom";
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
          className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-gray-500 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          aria-current="page"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/allBlogs"
          className="block py-2 px-3 text-gray-100rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 hover:text-gray-500 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Blogs
        </Link>
      </li>

      <li>
        <Link
          to="/about"
          className="block py-2 px-3 text-gray-100rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 hover:text-gray-500 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
                className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 hover:text-gray-500 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Create Blog
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/dashboard/dashboard"
              className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-gray-500 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
