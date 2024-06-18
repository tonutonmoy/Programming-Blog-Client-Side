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
  const { loading, error, data } = useQuery(BlogsGQL, {
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <>
      <section className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between ">
        <h2 className="font-bold text-3xl">Popular news</h2>
        <Link
          to="/allBlogs"
          className=" w-[100px]  text-center inline-block bg-green-400 hover:bg-green-500 text-gray-100 px-0 py-1 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
        >
          View all
        </Link>
      </section>
      <section className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 mb-20">
        {data?.posts?.slice(0, 6)?.map((a: any) => (
          <BlogCard key={a?.id} data={a} />
        ))}
      </section>
    </>
  );
};

export default HomePopularNews;
