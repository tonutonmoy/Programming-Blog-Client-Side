import { Link } from "react-router-dom";
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

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data?.singleUser?.role);

  return (
    <div>
      <ul className="menu p-4   w-52 md:w-80 lg:w-80  xl:w-80 2xl:w-80   min-h-full bg-base-200 text-base-content">
        <aside className="py-4 w-full md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <>
              <Link to="/" className="pl-3 mb-4 text-2xl font-semibold ">
                Travel-Buddy
              </Link>
            </>
            {data?.singleUser?.role === "user" && (
              <>
                <Link
                  to="/dashboard/myBlogs"
                  className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
                >
                  My Blogs
                </Link>

                <Link
                  to="/dashboard/profile"
                  className="flex items-center px-3 py-2.5 font-bold hover:text-indigo-900 hover:border rounded-full"
                >
                  Profile
                </Link>
              </>
            )}

            {data?.singleUser?.role === "admin" && (
              <>
                <Link
                  to="/dashboard/manageUsers"
                  className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
                >
                  Manage Users
                </Link>
                <Link
                  to="/dashboard/publishedBlogs"
                  className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
                >
                  Published Blogs
                </Link>
                <Link
                  to="/dashboard/RequestedBlogs"
                  className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
                >
                  Requested Blogs
                </Link>
                <Link
                  to="/dashboard/profile"
                  className="flex items-center px-3 py-2.5 font-bold hover:text-indigo-900 hover:border rounded-full"
                >
                  Profile
                </Link>
              </>
            )}
          </div>
          <div className="  flex items-center px-10  pt-40 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
            <LoginAndLogout />
          </div>
        </aside>
      </ul>
    </div>
  );
};

export default SidebarAllLinks;
