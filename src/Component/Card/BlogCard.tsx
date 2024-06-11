import moment from "moment";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BlogCard = ({ data }: any) => {
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
  console.log(data?.createdAt);
  return (
    <div className="block space-x-0 lg:flex lg:space-x-6">
      <div className="rounded w-full  p-4 lg:p-0">
        <img src={data?.image} className="rounded" alt="Latest news 1" />
        <section className="p-4 pl-0">
          <h2 className="font-bold text-2xl text-gray-800">{data?.title}</h2>
          <p className="text-gray-700 mt-2">{data?.content.slice(0, 250)}</p>
        </section>
        <section className=" flex  justify-around items-center">
          <Link
            to={`/blogDetails/${data?.id}`}
            className="block w-full py-2 rounded text-green-900 font-medium mt-2 ml-auto"
          >
            {" "}
            Read more{" "}
          </Link>

          <span className=" block w-full text-end  text-sm text-gray-500 me-5">
            {formattedDate}
          </span>
        </section>
      </div>
    </div>
  );
};

export default BlogCard;
