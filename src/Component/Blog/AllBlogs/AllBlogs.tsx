/* eslint-disable @typescript-eslint/no-explicit-any */

import BlogCard from "../../Card/BlogCard";

import { gql, useQuery } from "@apollo/client";
import Container from "../../../SharedComponent/Container";
import Loading from "../../../SharedComponent/Loading/Loading";
import NotAvailable from "../../../SharedComponent/NotAvailable/NotAvailable";

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
    return <Loading />;
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
      {data?.posts?.length < 1 && <NotAvailable text="Blogs" />}
    </Container>
  );
};

export default AllBlogs;
