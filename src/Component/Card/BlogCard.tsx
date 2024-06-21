import moment from "moment";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BlogCard = ({ data, action, deleteHandler, publishedHandler }: any) => {
  const createdAt = data?.createdAt;
  console.log("Raw createdAt:", createdAt);

  let formattedDate = "Date not available";
  if (createdAt) {
    const date = moment(Number(createdAt));
    if (date.isValid()) {
      formattedDate = date.format("MMMM Do YYYY,h:mm:ss a");
    } else {
      console.error("Invalid date format:", createdAt);
    }
  }

  return (
    <div className="block space-x-0   my-5  shadow-xl    ">
      <img
        src={data?.image}
        className="rounded h-[300px] w-full"
        alt="Latest news 1"
      />
      <div className="rounded w-full  py-4   bg-white px-5">
        <section className="pt-4  pl-0 ">
          <h2 className="font-bold text-2xl text-gray-800">{data?.title}</h2>
          <p className="text-gray-700 mt-2 h-[220px] md:h-[200px] lg:h-[110px] xl:h-[120px] 2xl:h-[100px]">
            {data?.content.slice(0, 250)} ...
          </p>
        </section>
        <section className=" flex  justify-around items-center mt-5">
          {action === "myBlogs" ? (
            <p className="block w-full py-2 rounded font-medium mt-2 ml-auto">
              {" "}
              {data?.published === "true" ? (
                <span className=" text-green-500 ">Approve </span>
              ) : (
                <span className=" text-red-500">Pending</span>
              )}{" "}
            </p>
          ) : (
            <Link
              to={`/blogDetails/${data?.id}`}
              className="block w-full py-2 rounded text-green-400 hover:text-green-500 font-medium mt-2 ml-auto"
            >
              {" "}
              Read more{" "}
            </Link>
          )}

          <span className=" block w-full text-end  text-sm text-gray-500 me-5">
            {formattedDate}
          </span>
        </section>

        {action === "publishedBlogs" && (
          <section className="mt-5 ">
            <button
              onClick={() => deleteHandler(data?.id)}
              className="  w-full flex justify-center bg-red-500 hover:bg-red-700 text-gray-100  rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500  py-2 px-5 "
            >
              Delete
            </button>
          </section>
        )}

        {action === "myBlogs" ? (
          <section className=" flex  justify-around items-center gap-10  md:gap-10   lg:gap-10  xl:gap-10  2xl:gap-20    mt-5">
            <Link
              to={`/dashboard/updateBlog/${data?.id}`}
              className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100  rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5"
            >
              {" "}
              Edit
            </Link>

            <button
              onClick={() => deleteHandler(data?.id)}
              className="w-full flex justify-center bg-red-500 hover:bg-red-700 text-gray-100  rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5"
            >
              Delete
            </button>
          </section>
        ) : (
          ""
        )}
        {action === "requestedBlogs" ? (
          <section className=" flex  justify-around items-center gap-10  md:gap-10   lg:gap-10  xl:gap-10  2xl:gap-20    mt-5">
            <button
              onClick={() => publishedHandler(data?.id)}
              className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100  rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5"
            >
              {" "}
              Approve
            </button>

            <button
              onClick={() => deleteHandler(data?.id)}
              className="w-full flex justify-center bg-red-500 hover:bg-red-700 text-gray-100  rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5"
            >
              Delete
            </button>
          </section>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BlogCard;
