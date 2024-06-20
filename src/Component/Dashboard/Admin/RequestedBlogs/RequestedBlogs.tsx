/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useMutation, useQuery } from "@apollo/client";
import BlogCard from "../../../Card/BlogCard";
import { Toaster, toast } from "sonner";
import Container from "../../../../SharedComponent/Container";

const AllRequestedGQL = gql`
  query RequestedPosts {
    requestedPosts {
      userError
      result {
        content
        id
        createdAt
        image
        title
        published
      }
    }
  }
`;

const PublishedBlogGQL = gql`
  mutation PublishPost($postId: ID!) {
    publishPost(postId: $postId) {
      userError
      result {
        id
      }
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

const RequestedBlogs = () => {
  const { loading, error, data, refetch } = useQuery(AllRequestedGQL, {
    fetchPolicy: "no-cache",
  });
  const [DeleteBlog] = useMutation(DeleteBlogGQL);
  const [PublishedBlog] = useMutation(PublishedBlogGQL);

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data?.requestedPosts?.result, "ll");

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

  const publishedHandler = async (postId: string) => {
    const publishedData = await PublishedBlog({
      variables: { postId },
    });

    console.log(publishedData?.data?.publishPost?.result?.id);
    if (publishedData?.data?.publishPost?.result?.id) {
      toast.success("Approved successful");
      refetch();

      if (publishedData?.data?.deletePost?.userError) {
        toast.error(publishedData?.data?.publishPost?.userError);
      }
    }
  };

  return (
    <Container>
      <section className=" grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-20 my-20">
        {data?.requestedPosts?.result?.map((a: any) => (
          <BlogCard
            key={a?.id}
            data={a}
            action="requestedBlogs"
            deleteHandler={deleteHandler}
            publishedHandler={publishedHandler}
          />
        ))}
        <Toaster position="top-right" />
      </section>
    </Container>
  );
};

export default RequestedBlogs;
