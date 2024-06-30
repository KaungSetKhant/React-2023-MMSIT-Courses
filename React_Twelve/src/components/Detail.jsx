import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../feature/services/blogApi";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  return (
    <div className=" flex flex-wrap justify-center items-center gap-10 mt-20">
      <div className=" flex flex-col   w-72 text-center bg-teal-300 shadow-lg">
        <img
          src={blog?.image}
          className=" h-[250px] shadow-lg rounded-md mb-3"
        />
        <div className=" flex flex-col gap-4   p-4">
          <h2 className="text-white font-semibold text-2xl">{blog?.title}</h2>
          <p className="">{blog?.desc}</p>

          <div className="flex gap-3 mx-auto">
            <Link to={`/`}>
              <button className=" bg-gray-400 text-white font-semibold shadow-md px-4 py-1 rounded">
                Back
              </button>
            </Link>
            <Link to={`/edit/${blog?.id}`}>
              <button className=" bg-purple-600 text-white font-semibold shadow-md px-4 py-1 rounded">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
