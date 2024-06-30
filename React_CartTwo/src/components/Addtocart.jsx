import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Addtocart = () => {
  const { cartItems,totalAmount } = useSelector((state) => state.cart);
  
  if(cartItems.length === 0) {
    return(
        <div className=" flex justify-center h-screen items-center">
            <div className=" flex flex-col gap-4 items-center">
                <h1 className="text-3xl tracking-wider">Your cart is empty</h1>
                <Link to={"/"}>
                    <button className=" rounded mx-auto px-4 py-1 bg-violet-600 text-white">
                        Add to Cart
                    </button>
                </Link>
            </div>
        </div>
    )
  }
  return (
    <div>
      <div className="mb-10">
        {cartItems.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>

      <hr className=" border-b-4 border-b-violet-300 " />

      <div className="mt-10 flex justify-around items-center mx-auto">
        <h2 className="text-2xl text-violet-500">Total</h2>
        <h4 className="text-2xl text-violet-500">${totalAmount.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default Addtocart;
