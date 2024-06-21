/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

import { cloudINary } from "../../../Utils/cloudinary";

import { Toaster, toast } from "sonner";

import { gql, useMutation } from "@apollo/client";

const addPostGQL = gql`
  mutation AddPost($post: PostInput!) {
    addPost(post: $post) {
      result {
        id
      }
      userError
    }
  }
`;

interface FormValues {
  content: string;
  image: string;
  title: string;
}
const CreateBlog: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [addPost] = useMutation(addPostGQL);

  const onSubmit = async (data: FormValues) => {
    const image: any = await cloudINary(data?.image[0]);

    if (image === null) {
      console.log("null");
      return toast.error("image not uploaded");
    }
    if (image) {
      console.log(image, "i");
      data.image = image;
      console.log(data);

      const postData = await addPost({
        variables: { post: data },
      });
      console.log(postData);

      if (postData?.data?.addPost?.result?.id) {
        toast.success("blog created successfully");
      }
      if (postData?.data?.addPost?.userError) {
        toast.error(postData?.data?.addPost?.userError);
      }
    }
  };
  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)",
      }}
    >
      <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-0 md:opacity-75 lg:opacity-75 xl:opacity-75 2xl:opacity-75 md:inset-0 lg:inset-0 xl:inset-0 2xl:inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex justify-center self-center z-10 w-full">
          <div className="px-12 pt-12 pb-7 bg-white mx-auto rounded-2xl w-[100%] md:w-[90%] lg:w-[90%] xl:w-[70%] 2xl:w-[60%]  ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <section className=" space-y-5">
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
                      {...register("title", { required: "Title is required" })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your title"
                    />
                    {errors.title && (
                      <span className="text-red-600">
                        {errors.title.message}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Image
                    </label>
                    <input
                      {...register("image", {
                        required: "Image is required",
                      })}
                      id="fileInput"
                      type="file"
                      className="w-full overflow-clip rounded-xl border border-slate-300 bg-slate-100/50 text-sm text-slate-700 file:mr-4 file:cursor-pointer file:border-none file:bg-slate-100 file:px-4 file:py-2 file:font-medium file:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-75 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:file:bg-slate-800 dark:file:text-white dark:focus-visible:outline-blue-600"
                    />
                    {errors.image && (
                      <span className="text-red-600">
                        {errors.image.message}
                      </span>
                    )}
                  </div>
                </section>
                <section>
                  <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Content
                  </label>
                  <textarea
                    id="content"
                    {...register("content", {
                      required: "Content is required",
                    })}
                    className="bg-gray-50 border border-gray-300 h-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your content"
                  />
                  {errors.content && (
                    <span className="text-red-600">
                      {errors.content.message}
                    </span>
                  )}
                </section>
              </div>
              <div className=" mt-20">
                <button
                  type="submit"
                  className="w-full md:w-[30%] mx-auto  flex justify-center bg-green-400 hover:bg-green-500 text-gray-100  rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5"
                >
                  Add Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default CreateBlog;
