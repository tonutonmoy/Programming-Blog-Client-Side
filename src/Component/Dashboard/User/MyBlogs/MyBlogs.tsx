/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useMutation, useQuery } from "@apollo/client";
import BlogCard from "../../../Card/BlogCard";
import { Toaster, toast } from "sonner";

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
  mutation Mutation($postId: ID!) {
    deletePost(postId: $postId) {
      result {
        id
      }
      userError
    }
  }
`;

const MyBlogs = () => {
  const { loading, error, data, refetch } = useQuery(MyBlogsGQL);
  const [DeleteBlog] = useMutation(DeleteBlogGQL);

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data?.myPosts?.result, "ll");

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
    <section className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-20 my-20">
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
  );
};

export default MyBlogs;
