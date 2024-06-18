/* eslint-disable @typescript-eslint/no-explicit-any */

import BlogCard from "../../Card/BlogCard";

import { gql, useQuery } from "@apollo/client";
import Container from "../../../SharedComponent/Container";

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
const AllBlogs = () => {
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
    <Container>
      <section className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 my-20">
        {data?.posts?.map((a: any) => (
          <BlogCard key={a?.id} data={a} />
        ))}
      </section>
    </Container>
  );
};

export default AllBlogs;
