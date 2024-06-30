import React from "react";
import { useState } from "react";
import { useGetCreateBlogMutation } from "../feature/services/blogApi";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const  [title, setTitle]  = useState("");
  const  [desc, setDesc]  = useState("");
  const  [image, setImage]  = useState("");

  const [getCreateBlog] = useGetCreateBlogMutation();

  const nav = useNavigate();

  const createBlogHandler = (e) => {
    e.preventDefault();
    console.log(title, image, desc);
    const newData = { id: Date.now(), title, desc, image };
    getCreateBlog(newData);
    nav("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={createBlogHandler}
        className=" flex flex-col gap-10 p-7 w-96 shadow-lg"
      >
        <h2 className="text-2xl text-gray-700 font-semibold">Create Blogs</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title..."
          type="text"
          className=" outline-none border-b border-b-gray-700"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter Desc..."
          type="text"
          className=" outline-none border-b border-b-gray-700"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image..."
          type="text"
          className=" outline-none border-b border-b-gray-700"
        />
        <button className="bg-blue-700 text-white px-4 py-1" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
