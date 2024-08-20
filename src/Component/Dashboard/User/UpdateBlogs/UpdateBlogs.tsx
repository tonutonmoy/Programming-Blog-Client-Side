/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Toaster, toast } from "sonner";
import { cloudINary } from "../../../../Utils/cloudinary";
import Loading from "../../../../SharedComponent/Loading/Loading";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill CSS for proper styling
import { useEffect, useState } from "react";

const BlogDetailsGQL = gql`
  query SinglePostDetails($postId: ID!) {
    singlePost(postId: $postId) {
      content
      title
      image
      id
    }
  }
`;
const UpdateBlogGQL = gql`
  mutation UpdatePost($postId: ID!, $post: PostInput!) {
    updatePost(postId: $postId, post: $post) {
      userError
      result {
        id
      }
    }
  }
`;

interface FormValues {
  content: string;
  image?: any;
  title: string;
}

const UpdateBlogs: React.FC = () => {
  const { postId } = useParams();
  const { loading, error, data, refetch } = useQuery(BlogDetailsGQL, {
    variables: { postId },
    skip: !postId,
  });
  const [updateBlog] = useMutation(UpdateBlogGQL);
  const { register, handleSubmit } = useForm<FormValues>();
  const [detail, setDetail] = useState("");
  console.log(data?.singlePost?.content,'llllll')
  
  useEffect(() => {
    setDetail(data?.singlePost?.content);
  }, [data]);


  const onSubmit = async (formData: FormValues) => {
    console.log(formData, "tonu");

    if (formData?.image.length > 0) {
      console.log("hoise");
      const image = await cloudINary(formData?.image[0]);
      if (image === null) {
        toast.error("Image not uploaded");
        return;
      }
      formData.image = image;
    }

    if (typeof formData.image !== "string") {
      delete formData.image;
    }

    console.log(formData, "from data");

    formData.content= detail

    const updateData = await updateBlog({
      variables: { postId, post: formData },
    });

    console.log(updateData, "updatedata");

    if (updateData?.data?.updatePost?.result?.id) {
      toast.success("Blog updated successfully");
      refetch();
    }
    if (updateData?.data?.updatePost?.userError) {
      toast.error(updateData?.data?.updatePost?.userError);
    }
  };
  // -------------------------
  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.error(error);
    return;
  }

  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)",
        }}
      >
        <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-0 md:opacity-75 lg:opacity-75 xl:opacity-75 2xl:opacity-75 md:inset-0 lg:inset-0 xl:inset-0 2xl:inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center w-full">
          <div className="flex  justify-center self-center z-10 w-full">
            <div className="px-12 pt-12 pb-7 bg-white mx-auto rounded-2xl w-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <section className="grid gap-6 mb-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  my-10">
                  <section className="space-y-5">
                    <div className=" flex justify-center ">
                      <div>
                        <img
                          className="h-[300px]  rounded-md"
                          src={data?.singlePost?.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        defaultValue={data?.singlePost?.title}
                        {...register("title")}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your title"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Image
                      </label>
                      <input
                        {...register("image")}
                        id="fileInput"
                        type="file"
                        className="w-full overflow-clip rounded-xl border border-slate-300 bg-slate-100/50 text-sm text-slate-700 file:mr-4 file:cursor-pointer file:border-none file:bg-slate-100 file:px-4 file:py-2 file:font-medium file:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-75 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:file:bg-slate-800 dark:file:text-white dark:focus-visible:outline-blue-600"
                      />
                    </div>
                  </section>
                  <section>
          <div className="text-center my-5">
            <p className="text-[18px] font-[500] mb-3">Detail</p>
            <ReactQuill
              value={detail}
              onChange={setDetail}
              theme="snow"
              placeholder="Enter your content"
              style={{
                height: "250px",
                color: "black",
                background: "white",
                width: "90%",
                margin: "auto",
              }} // Set the height of the editor
            />
          </div>
        </section>
                </section>
                <section className="mt-20 ">
                  <button
                    type="submit"
                    className="w-full md:w-[30%] mx-auto  flex justify-center bg-green-400 hover:bg-green-500 text-gray-100  rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5"
                  >
                    Update Blog
                  </button>
                </section>
              </form>
            </div>
          </div>
        </div>
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default UpdateBlogs;
