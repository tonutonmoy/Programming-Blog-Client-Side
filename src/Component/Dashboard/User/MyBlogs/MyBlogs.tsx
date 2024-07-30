/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useMutation, useQuery } from "@apollo/client";
import BlogCard from "../../../Card/BlogCard";
import { Toaster, toast } from "sonner";
import Container from "../../../../SharedComponent/Container";
import Loading from "../../../../SharedComponent/Loading/Loading";
import NotAvailable from "../../../../SharedComponent/NotAvailable/NotAvailable";

const MyBlogsGQL = gql`
  query MyPosts {
    myPosts {
      result {
        content
        id
        createdAt
        image
        title
        published
      }
      userError
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

const MyBlogs = () => {
  const { loading, error, data, refetch } = useQuery(MyBlogsGQL, {
    fetchPolicy: "no-cache",
  });

  const [DeleteBlog] = useMutation(DeleteBlogGQL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.error(error);
    return null;
  }

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
      <section className=" grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3  gap-20 my-20">
        {data?.myPosts?.result?.map((a: any) => (
          <BlogCard
            key={a?.id}
            data={a}
            action="myBlogs"
            deleteHandler={deleteHandler}
          />
        ))}
        <Toaster position="top-right" />
      </section>
      {data?.myPosts?.result?.length < 1 && <NotAvailable text="Blogs" />}
    </Container>
  );
};

export default MyBlogs;
