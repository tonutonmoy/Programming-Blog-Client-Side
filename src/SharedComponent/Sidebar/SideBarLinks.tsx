import { Link, useLocation } from "react-router-dom";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";
import { gql, useQuery } from "@apollo/client";

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
      <ul className="menu p-4   w-52 md:w-80 lg:w-80  xl:w-80 2xl:w-80   min-h-full h-screen  bg-green-400 text-gray-50">
        <aside className="py-4 w-full md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-gray-100 top-12 rounded-md">
            <>
              <Link to="/" className="pl-3 mb-4 text-2xl font-semibold ">
                Home
              </Link>
            </>
            {data?.singleUser?.role === "user" && (
              <>
                <Link
                  to="/dashboard/myBlogs"
                  className={`flex items-center px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/myBlogs" &&
                    "text-gray-100 bg-green-500 border rounded-full"
                  }  `}
                >
                  My Blogs
                </Link>

                <Link
                  to="/dashboard/profile"
                  className={`flex items-center px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/profile" &&
                    "text-gray-100 bg-green-500 border rounded-full"
                  }  `}
                >
                  Profile
                </Link>
              </>
            )}

            {data?.singleUser?.role === "admin" && (
              <>
                <Link
                  to="/dashboard/manageUsers"
                  className={`flex items-center px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/manageUsers" &&
                    "text-gray-100 bg-green-500 border rounded-full"
                  }  `}
                >
                  Manage Users
                </Link>
                <Link
                  to="/dashboard/publishedBlogs"
                  className={`flex items-center px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/publishedBlogs" &&
                    "text-gray-100 bg-green-500 border rounded-full"
                  }  `}
                >
                  Published Blogs
                </Link>
                <Link
                  to="/dashboard/RequestedBlogs"
                  className={`flex items-center px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/RequestedBlogs" &&
                    "text-gray-100 bg-green-500 border rounded-full"
                  }  `}
                >
                  Requested Blogs
                </Link>
                <Link
                  to="/dashboard/profile"
                  className={`flex items-center px-3 py-2.5 font-semibold ${
                    location?.pathname === "/dashboard/profile" &&
                    "text-gray-100 bg-green-500 border rounded-full"
                  }  `}
                >
                  Profile
                </Link>
              </>
            )}
          </div>
          <div className="  flex items-center px-10  pt-40 font-semibold">
            <LoginAndLogout />
          </div>
        </aside>
      </ul>
    </div>
  );
};

export default SidebarAllLinks;
