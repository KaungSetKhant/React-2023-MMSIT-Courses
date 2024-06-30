import React from "react";
import { Link } from "react-router-dom";
import { useGetDeleteBlogMutation } from "../feature/services/blogApi";

const BlogsCard = ({ blog }) => {
  const [getDeleteBlog] = useGetDeleteBlogMutation()
  return (
    <div className=" flex flex-col   w-72 text-center bg-teal-300 shadow-lg">
      <img src={blog?.image} className=" h-[250px] shadow-lg rounded-md mb-3" />
      <div className=" flex flex-col gap-4   p-4">
        <h2 className="text-white font-semibold text-2xl">{blog.title}</h2>
        <p className="">{blog.desc}</p>

        <div className=" flex gap-3 mx-auto">
          <Link to={`/detail/${blog?.id}`}>
            <button className=" bg-gray-400 text-white font-semibold shadow-md px-4 py-1 shadow rounded">
              Detail
            </button>
          </Link>

          <button onClick={() => getDeleteBlog(blog?.id)} className="bg-red-600 text-white font-semibold shadow-md px-4 py-1 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
