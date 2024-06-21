import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { Toaster, toast } from "sonner";

import { gql, useMutation } from "@apollo/client";
import { storeUserInfo } from "../../Utils/auth.helper";

const loginGQL = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userError
    }
  }
`;

type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [login] = useMutation(loginGQL);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    const loginData = await login({
      variables: data,
    });

    console.log(loginData);
    if (loginData?.data?.login?.token) {
      toast.success("login successful");
      storeUserInfo(loginData?.data?.login?.token);

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1500);
    }
    if (loginData?.data?.login?.userError) {
      toast.error(loginData?.data?.login?.userError);
    }
  };

  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)",
      }}
    >
      <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-0 md:opacity-75 lg:opacity-75 xl:opacity-75 2xl:opacity-75 md:inset-0 lg:inset-0 xl:inset-0 2xl:inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex justify-center self-center z-10">
          <div className="px-12 pt-12 pb-5 bg-white mx-auto rounded-2xl w-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800 mb-2">
                  Sign In
                </h3>
                <p className="text-gray-500">
                  Please login in to your account.
                </p>
              </div>
              <div className="space-y-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="email"
                    placeholder="mail@gmail.com"
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
              </div>
              <section className=" space-y-5 my-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      to="/registration"
                      className="text-green-400 hover:text-green-500"
                    >
                      {" "}
                      New here? please register
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100  rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5"
                  >
                    Sign in
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

export default Login;
