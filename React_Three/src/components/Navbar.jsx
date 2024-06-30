import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const nav = useNavigate();


  const submitHandler = e => {
    e.preventDefault();
    nav(`/search/` + search)
  }

  return (
    <div className=" flex justify-around p-7 rounded shadow items-center align-middle bg-blue-500">
      <Link to="/">
        <GiKnifeFork className=" text-3xl text-white" />
      </Link>
      <div>
        <form onSubmit={submitHandler}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className=" bg-white rounded w-[150%] h-[30px] shadow outline-none border-b-2 "
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
