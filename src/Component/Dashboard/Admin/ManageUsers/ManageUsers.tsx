/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useMutation, useQuery } from "@apollo/client";
import { Toaster, toast } from "sonner";
const AllUsersGQL = gql`
  query Users {
    users {
      name
      role
      email
      id
      profile {
        image
      }
    }
  }
`;
const UpdateUserRoleGQL = gql`
  mutation UpdateUserRole($userId: ID!, $userRole: String!) {
    updateUserRole(userId: $userId, userRole: $userRole) {
      userError
      result {
        id
      }
    }
  }
`;

const ManageUsers = () => {
  const { loading, error, data, refetch } = useQuery(AllUsersGQL, {
    fetchPolicy: "no-cache",
  });
  const [updateUserRole] = useMutation(UpdateUserRoleGQL);

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }
  console.log(data?.users);

  const roleHandler = async (userId: string, userRole: string) => {
    console.log(userId, userRole);
    const updateData = await updateUserRole({
      variables: { userId, userRole },
    });

    console.log(updateData, "updatedata");

    if (updateData?.data?.updateUserRole?.result?.id) {
      toast.success("Role updated successfully");
      refetch();
    }
    if (updateData?.data?.updateUserRole?.userError) {
      toast.error(updateData?.data?.updateUserRole?.userError);
    }
  };

  return (
    <section className="relative py-16 bg-blueGray-50">
      <div className="w-full mb-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-700 text-white">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-lg text-center text-white"></h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 align-center text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  bg-gray-800  border-pink-700">
                    Name
                  </th>
                  <th className="px-6 text-center align-middle border border-solid py-3 text-xs uppercase  border-r-0 whitespace-nowrap font-semibold  bg-gray-800  border-pink-700 border-l-pink-700">
                    Email
                  </th>
                  <th className="px-6 text-center align-middle border border-solid py-3 text-xs uppercase border-r-0 whitespace-nowrap font-semibold  bg-gray-800  border-pink-700 border-l-pink-700">
                    Role
                  </th>
                  <th className="px-6 text-center align-middle border border-solid py-3 text-xs uppercase border-r-0 whitespace-nowrap font-semibold  bg-gray-800  border-pink-700 border-l-pink-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.users?.map((project: any) => (
                  <tr key={project?.id}>
                    <th className="border m-4  rounded-lg px-6 align-middle  text-xs whitespace-nowrap p-4 text-left flex items-center w-[90%]  overflow-x-auto shadow-xl ">
                      <img
                        src={project?.profile?.image}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      />
                      <span className="ml-3 w-full font-bold text-white block">
                        {project?.name}
                      </span>
                    </th>
                    <td>
                      <p className="px-6 align-middle   text-sm whitespace-nowrap p-4  border m-4  rounded-lg shadow-xl">
                        {project?.email}
                      </p>
                    </td>
                    <td>
                      <p className="px-6 align-middle  text-center  text-sm whitespace-nowrap p-4  border m-4  rounded-lg shadow-xl">
                        {project?.role}
                      </p>
                    </td>
                    <td>
                      <p className="px-6 align-middle flex justify-center    text-xs whitespace-nowrap p-4  border m-4  rounded-lg shadow-xl">
                        {project?.role === "admin" && (
                          <button
                            onClick={() => roleHandler(project?.id, "user")}
                            className="w-[130px] flex justify-center bg-blue-400 hover:bg-blue-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                          >
                            Make user
                          </button>
                        )}
                        {project?.role === "user" && (
                          <button
                            onClick={() => roleHandler(project?.id, "admin")}
                            className="w-[130px] flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                          >
                            Make Admin
                          </button>
                        )}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
};

export default ManageUsers;
