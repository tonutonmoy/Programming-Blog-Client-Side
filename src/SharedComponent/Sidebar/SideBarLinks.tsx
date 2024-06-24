import { Link, useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import {
  FaHome,
  FaUser,
  FaUsers,
  FaFileAlt,
  FaFileSignature,
  FaBook,
} from "react-icons/fa";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";

const SingleGQL = gql`
  query SingleUser {
    singleUser {
      role
    }
  }
`;

const SidebarAllLinks = () => {
  const { loading, error, data } = useQuery(SingleGQL);
  const location = useLocation();

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div>
      <ul className="menu p-4 w-52 md:w-80 lg:w-80 xl:w-80 2xl:w-80 min-h-full h-screen bg-green-400 ">
        <aside className="py-4 w-full md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-gray-100 top-12 rounded-md">
            <Link
              to="/"
              className="pl-3 mb-4 text-2xl text-white  font-semibold flex items-center"
            >
              <FaHome className="mr-2 " /> Home
            </Link>

            {data?.singleUser?.role === "user" && (
              <>
                <Link
                  to="/dashboard/myBlogs"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/myBlogs" &&
                    " bg-green-500 border rounded-full"
                  }`}
                >
                  <FaBook className="mr-2 text-lg" /> My Blogs
                </Link>

                <Link
                  to="/dashboard/profile"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/profile" &&
                    " bg-green-500 border rounded-full"
                  }`}
                >
                  <FaUser className="mr-2 text-lg" /> Profile
                </Link>
              </>
            )}

            {data?.singleUser?.role === "admin" && (
              <>
                <Link
                  to="/dashboard/manageUsers"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/manageUsers" &&
                    " bg-green-500 border rounded-full"
                  }`}
                >
                  <FaUsers className="mr-2 text-lg" /> Manage Users
                </Link>

                <Link
                  to="/dashboard/publishedBlogs"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/publishedBlogs" &&
                    " bg-green-500 border rounded-full"
                  }`}
                >
                  <FaFileAlt className="mr-2 text-lg" /> Published Blogs
                </Link>

                <Link
                  to="/dashboard/RequestedBlogs"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/RequestedBlogs" &&
                    "t bg-green-500 border rounded-full"
                  }`}
                >
                  <FaFileSignature className="mr-2 text-lg" /> Requested Blogs
                </Link>

                <Link
                  to="/dashboard/profile"
                  className={`flex items-center px-3 text-white py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/profile" &&
                    " bg-green-500 border rounded-full"
                  }`}
                >
                  <FaUser className="mr-2 text-lg" /> Profile
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center px-10 pt-40 font-semibold">
            <LoginAndLogout />
          </div>
        </aside>
      </ul>
    </div>
  );
};

export default SidebarAllLinks;
