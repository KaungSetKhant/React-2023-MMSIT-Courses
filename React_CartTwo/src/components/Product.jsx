import React from "react";
import {useDispatch} from 'react-redux'
import { addtoCart } from "../feature/services/cartSlice";

const Product = (props) => {
  const { id, image, title, price, description } = props

  const dispatch = useDispatch()
  return (
    <div className=" flex flex-col w-72 shadow p-7">
      <img src={image} className=" max-w-[180px] h-[200px]" />
      <div className="mt-3 flex flex-col gap-3">
        <h2 className="">{title.substring(0, 25)}...</h2>
        <p className="">${price}</p>
        <button onClick={() => dispatch(addtoCart(props))} className=" text-white shadow rounded bg-violet-600 px-6 py-1">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
