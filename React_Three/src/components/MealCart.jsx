import React from "react";
import { BiSearch } from "react-icons/bi";
import "./MealCart.css";
import { Link } from "react-router-dom";

const MealCart = ({ name, image,id }) => {
   
    return (
    <div className="relative parent">
      <img src={image} alt="" className="h-[300px] object-cover rounded-lg" />
      <Link to={`/detail/${id}`}>
        <p className=" icon bg-blue-500 h-12 w-12 rounded-[100%] flex align-middle justify-center items-center absolute top-[45%] right-[40%]">
          <BiSearch className="text-3xl text-white" />
        </p>
      </Link>
    </div>
  );
};

export default MealCart;
