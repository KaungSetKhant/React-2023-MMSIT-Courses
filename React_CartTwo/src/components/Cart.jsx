import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { removeFromCart,addItemsQuantity, substractItemQuantity } from '../feature/services/cartSlice'

const Cart = (props) => {
    const {id,image,price,title,quantity} = props
    const {cartItems} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const oneItemPrice = price * quantity

    return (
    <div className=' flex w-[70%] mx-auto mt-20 justify-around'>
        <div className=' flex justify-around items-center gap-10 w-[100&]'>
            <div className=" w-32 mx-auto">
                <img src={image} className='max-w-[100px] h-[100px]' />
            </div>
            <div className="mx-auto">
                <h3 className="">{title.substring(0,20)}...</h3>
                <p className=" text-violet-800">{oneItemPrice.toFixed(2)}</p>
                <p onClick={() => dispatch(removeFromCart(props))} className=" cursor-pointer select-none text-red-600">Remove</p>
            </div>
        </div>
        

        <div className="flex flex-col items-center justify-center gap-3">
            <p onClick={() => dispatch(addItemsQuantity(props))} className='cursor-pointer select-none w-20 rounded text-center bg-violet-500 text-white text-2xl'>+</p>
            <p className='cursor-pointer text-xl'>{quantity}</p>
            <p onClick={() => quantity > 1 && dispatch(substractItemQuantity(props)) } className='cursor-pointer w-20 rounded text-center bg-violet-500 text-white text-2xl'>-</p>
        </div>
    </div>
  )
}

export default Cart
