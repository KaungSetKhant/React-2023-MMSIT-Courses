import React from "react";
import { useGetBlogsQuery } from "../feature/services/blogApi";
import BlogsCard from "./BlogsCard";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();
  // console.log(blogs);
  return (
    <>
      <Link to={"/create"}>
        <div className="flex justify-center mt-10 items-center">
          <button className=" bg-gray-400 text-white font-semibold shadow-md px-5 py-1 shadow rounded">
            Create
          </button>
        </div>
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-8 mt-20 ">
        {blogs?.map((blog) => {
          return <BlogsCard key={blog.id} blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Blogs;
