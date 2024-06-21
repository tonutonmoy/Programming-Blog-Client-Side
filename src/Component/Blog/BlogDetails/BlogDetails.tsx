import { useParams } from "react-router-dom";
import Container from "../../../SharedComponent/Container";

import { gql, useQuery } from "@apollo/client";

const BlogDetailsGQL = gql`
  query SinglePost($postId: ID!) {
    singlePost(postId: $postId) {
      content
      createdAt
      image
      title
      author {
        email
        name
        profile {
          image
          number
          country
          city
          bio
        }
      }
    }
  }
`;

const BlogDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(BlogDetailsGQL, {
    variables: { postId: id },
    skip: !id, // Skip the query if userId is not available
  });

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }
  console.log(data?.singlePost, "data");

  return (
    <Container>
      <section className="my-10 ">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {data?.singlePost?.title}
            </h2>
            <span className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
              Cryptocurrency
            </span>
          </div>

          <img
            src={data?.singlePost?.image}
            className="w-full object-cover lg:rounded"
            style={{ height: "28em" }}
            alt="Post Cover"
          />
        </div>

        <div className="flex flex-col xl:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full xl:w-3/4">
            <p className="pb-6">{data?.singlePost?.content}</p>
          </div>

          <div className="w-full  xl:w-1/4  m-auto mt-12 max-w-screen-sm  shadow-xl  ">
            <div className="p-4 border-t border-b md:border md:rounded">
              <section className="flex py-2">
                <img
                  src={data?.singlePost?.author?.profile?.image}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="Author"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    {" "}
                    {data?.singlePost?.author?.name}
                  </p>
                  <p className="font-semibold text-gray-600 text-xs">
                    {" "}
                    Editor{" "}
                  </p>
                </div>
              </section>
              <section className=" space-y-1 my-3 ">
                <p className="text-gray-700  text-sm">
                  <span className=" font-[500] text-gray-700">Email:</span>{" "}
                  {data?.singlePost?.author?.email}
                </p>
                <p className="text-gray-700  text-sm">
                  <span className=" font-[500] text-gray-700">Country:</span>{" "}
                  {data?.singlePost?.author?.profile?.country}
                </p>
                <p className="text-gray-700  text-sm">
                  <span className=" font-[500] text-gray-700">City:</span>{" "}
                  {data?.singlePost?.author?.profile?.city}
                </p>
                <p className="text-gray-700  text-sm">
                  <span className=" font-[500] text-gray-700">Number:</span>{" "}
                  {data?.singlePost?.author?.profile?.number}
                </p>
                <p className="text-gray-700  text-sm">
                  <span className=" font-[500] text-gray-700">Bio:</span>{" "}
                  {data?.singlePost?.author?.profile?.bio}
                </p>
              </section>

              <button className="px-2 py-1 duration-500 text-gray-100 rounded-full bg-green-400 hover:bg-green-500 flex w-full items-center justify-center ">
                Follow
                {/* Assuming you have an icon library like react-icons installed */}
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default BlogDetails;
