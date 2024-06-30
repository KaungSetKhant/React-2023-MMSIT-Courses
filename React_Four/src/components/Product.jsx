import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, title, image, price }) => {
  return (
    <div className="">
      <div className=" w-64 rounded-lg shadow">
        <img src={image} className="w-[200px] h-[200px] object-cover" />
        <div>
          <p className=" truncate">{title}...</p>
          <p>${price}</p>
          <button className="px-6 py-1 text-white bg-teal-500 shadow rounded mr-2">
            Add to cart
          </button>
          <Link to={`/detail/${id}`}>
            <button className="px-6 py-1 text-white bg-teal-500 shadow rounded">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
