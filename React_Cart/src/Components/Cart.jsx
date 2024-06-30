import React, { useState } from 'react'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import { StateContextCustom } from '../Context/StateContext'

const Cart = ({item,increaseTotal,decreaseTotal}) => {
  const [quantity,setQuantity] = useState(1)

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
    increaseTotal(item.price)
  }

  const decreaseQuantity = () => {
    if(quantity > 1){
      setQuantity(quantity - 1);
      decreaseTotal(item.price)
    }
  }

  const oneItemPrice = item.price * quantity


  const {dispatch} = StateContextCustom()


  const delBtn = () => {
    dispatch({type : "REMOVE_FROM_CART", payload : item})
    decreaseTotal(oneItemPrice)
  }

  return (
    <div className=' flex justify-center items-center mb-7 '>
      <div className=' flex gap-7 items-center mb-7 w-[50%]'>
        <img src={item.thumbnail} className='max-w-[100px] h-[100px] rounded shadow select-none' />
        <div className=''>
        <p className=' text-teal-500 font-semibold'>{item.title.substring(0,20)}...</p>
        <p className=' text-gray-500 font-semibold'>${oneItemPrice.toFixed(2)}</p>
        <p onClick={delBtn} className=" cursor-pointer text-red-500 font-semibold">Remove</p>
        </div>
      </div>
      <div className=' flex flex-col items-center justify-center'>
        <p onClick={increaseQuantity} className=' cursor-pointer'><IoIosArrowUp className=' text-2xl'/></p>
        <p className=' text-teal-500 font-semibold text-xl select-none'>{quantity}</p>
        <p onClick={decreaseQuantity} className=' cursor-pointer'><IoIosArrowDown className=' text-2xl'/></p>
      </div>
    </div>
  )
}

export default Cart
