/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { cloudINary } from "../../Utils/cloudinary";
import { Toaster, toast } from "sonner";

import { gql, useMutation } from "@apollo/client";
import { storeUserInfo } from "../../Utils/auth.helper";

const registrationGQL = gql`
  mutation Registration(
    $name: String!
    $email: String!
    $password: String!
    $image: String!
  ) {
    registration(
      name: $name
      email: $email
      password: $password
      image: $image
    ) {
      userError
      token
    }
  }
`;

type Inputs = {
  name: string;
  email: string;
  password: string;
  image: FileList;
};

const Registration: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [registration] = useMutation(registrationGQL);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const image: any = await cloudINary(data?.image[0]);

    if (image === null) {
      console.log("null");
      return toast.error("image not uploaded");
    }
    if (image) {
      console.log(image, "i");
      data.image = image;
      console.log(data);

      const registrationData = await registration({
        variables: data,
      });

      if (registrationData?.data?.registration?.token) {
        toast.success("registration successful");
        storeUserInfo(registrationData?.data?.registration?.token);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
      if (registrationData?.data?.registration?.userError) {
        toast.error(registrationData?.data?.registration?.userError);
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
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800 mb-2">
                  Sign Up
                </h3>
                <p className="text-gray-500">
                  Please register for your account.
                </p>
              </div>
              <div className="space-y-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="text"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-red-600">{errors.name.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="email"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="text-red-600">{errors.email.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="password"
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      {errors.password.message}
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
                    <span className="text-red-600">{errors.image.message}</span>
                  )}
                </div>
              </div>
              <section className="space-y-5 my-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      to="/login"
                      className="text-green-400 hover:text-green-500"
                    >
                      Already have an account? Please log in
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign up
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Registration;
