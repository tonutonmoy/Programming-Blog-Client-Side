/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import BlogCard from "../../Card/BlogCard";
import { gql, useQuery } from "@apollo/client";

const BlogsGQL = gql`
  query Posts {
    posts {
      id
      image
      createdAt
      content
      title
    }
  }
`;

const HomePopularNews = () => {
  const { loading, error, data } = useQuery(BlogsGQL);

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <>
      <section className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 className="font-bold text-3xl">Popular news</h2>
        <Link
          to="/allBlogs"
          className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer"
        >
          View all
        </Link>
      </section>
      <section className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10">
        {data?.posts?.map((a: any) => (
          <BlogCard key={a?.id} data={a} />
        ))}
      </section>
    </>
  );
};

export default HomePopularNews;