import React, { useEffect, useState } from "react";
import { StateContextCustom } from "../Context/StateContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Addtocart = () => {
  const {
    state: { cart }, dispatch
  } = StateContextCustom();

  const [mainTotal,setMainTotal] = useState(0);

  useEffect( () => {
    setMainTotal(total)
  },[]);

  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price)
  }

  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price)
  }

  const total = () => cart?.reduce((pv,cv) => pv + cv.price, 0)
  return (
  <> 
    {cart.length >= 1 ? (
    <div >
      <div className=" flex flex-col justify-center align-middle mt-20">
        {cart?.map((item) => {
          return <Cart key={item.id} item={item} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}/>;
        })}
      </div>

      <hr className="w-[60%] mx-auto" />
  
      <div className=" flex justify-around">
        <h2 className="">Total</h2>
        <p className="">${mainTotal.toFixed(2)}</p>
      </div>
       
        <div className=" flex justify-center mt-5">
          <button onClick={()=> dispatch({type : "CLEAR_CART"})} className=" border-2 border-red-500 text-red-500 shadow rounded-lg px-5 py-1">Clear Cart</button>
        </div>

    </div>) : 
    (<div className=" flex flex-col justify-center items-center mt-[300px]">
      <div className=" mb-10">
       <p className=" text-3xl text-orange-500">Please Add to Cart...</p>
      </div>
      <Link to='/'>
      <div>
        <button className=" bg-teal-500 text-white rounded shadow px-3 py-2">Add to Cart</button>
      </div>
      </Link>
    </div>)}
  </>
  );
};
export default Addtocart;

