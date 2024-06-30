import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetEditBlogMutation, useGetSingleBlogQuery } from "../feature/services/blogApi";

const Edit = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  
  const [getEditBlog] = useGetEditBlogMutation()

  const {data : blog} = useGetSingleBlogQuery(id)

  const nav = useNavigate()

  useEffect(() => {
    setTitle(blog?.title)
    setDesc(blog?.desc)
    setImage(blog?.image)
  },[blog])

  
  const editBlogHandler = (e) => {
    e.preventDefault()
    const newData = {id,title,desc,image}
    getEditBlog(newData)
    nav('/')
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={editBlogHandler} className=" flex flex-col gap-10 p-7 w-96 shadow-lg">
        <h2 className="text-2xl text-gray-700 font-semibold">Edit Blogs</h2>
        <input
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title..."
          type="text"
          className=" outline-none border-b border-b-gray-700"
        />
        <input
          defaultValue={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter Desc..."
          type="text"
          className=" outline-none border-b border-b-gray-700"
        />
        <input
          defaultValue={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image..."
          type="text"
          className=" outline-none border-b border-b-gray-700"
        />
        <div className="flex gap-3">
          <button className="bg-blue-700 text-white px-4 py-1 shadow-lg rounded" type="submit">
            Done
          </button>
          <Link to={"/"}>
            <button className="bg-black text-white px-4 py-1 shadow-lg rounded" type="submit">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
