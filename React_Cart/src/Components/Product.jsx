import React from 'react'
import { StateContextCustom } from '../Context/StateContext'

const Product = (props) => {
    const {id,thumbnail,description,title,price} = props
    const {dispatch} = StateContextCustom()
    return (
    <div>
      <div className='max-w-[100%] shadow rounded flex flex-col p-7 items-center'>
        <img src={thumbnail} className='max-w-[150px] h-[150px]' />
        <div>
            <h2 className="text-gray-500 text-2xl font-semibold">{title.substring(0,25)}...</h2>
            <p>${price}</p>
            <button onClick={() => dispatch({type : "ADD_TO_CART", payload : props})} className=" px-6 py-2 bg-teal-500 rounded shadow text-white mr-2">Add to Cart</button>
            <button className=" px-6 py-2 bg-teal-500 rounded shadow text-white">Detail</button>
        </div>
      </div>
    </div>
  )
}

export default Product
