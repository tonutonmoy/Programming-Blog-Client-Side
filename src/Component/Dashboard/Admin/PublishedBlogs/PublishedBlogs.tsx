/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useMutation, useQuery } from "@apollo/client";
import BlogCard from "../../../Card/BlogCard";
import { Toaster, toast } from "sonner";
import Container from "../../../../SharedComponent/Container";

const BlogsGQL = gql`
  query Posts {
    posts {
      id
      image
      createdAt
      content
      title
      published
    }
  }
`;

const DeleteBlogGQL = gql`
  mutation DeletePost($postId: ID!) {
    deletePost(postId: $postId) {
      result {
        id
      }
      userError
    }
  }
`;

const PublishedBlogs = () => {
  const { loading, error, data, refetch } = useQuery(BlogsGQL, {
    fetchPolicy: "no-cache",
  });
  const [DeleteBlog] = useMutation(DeleteBlogGQL);

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data?.posts, "ll");

  const deleteHandler = async (postId: string) => {
    const deleteData = await DeleteBlog({
      variables: { postId },
    });

    console.log(deleteData?.data?.deletePost?.result?.id);
    if (deleteData?.data?.deletePost?.result?.id) {
      toast.success("Deleted successful");
      refetch();

      if (deleteData?.data?.deletePost?.userError) {
        toast.error(deleteData?.data?.deletePost?.userError);
      }
    }
  };

  return (
    <Container>
      <section className=" grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-20 my-20">
        {data?.posts?.map((a: any) => (
          <BlogCard
            key={a?.id}
            data={a}
            action="publishedBlogs"
            deleteHandler={deleteHandler}
          />
        ))}
        <Toaster position="top-right" />
      </section>
    </Container>
  );
};

export default PublishedBlogs;
