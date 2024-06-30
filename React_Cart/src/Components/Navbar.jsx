import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { StateContextCustom } from '../Context/StateContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {search,setSearch,state : {cart}} = StateContextCustom()
  // console.log(cart)
  return (
    <div className=' flex justify-around shadow rounded p-10 items-center'>
      <Link to={'/'}><h2 className=" text-3xl text-teal-500 font-bold">Shop</h2></Link>
      <div className=' flex gap-5'>
        <input type="text" className='outline-none border-b-2 border-b-teal-500 rounded shadow' value={search} onChange={e => setSearch(e.target.value)} />
        <Link to={'/addtocart'}>
        <div className=' relative'>
          <AiOutlineShoppingCart className=' text-3xl'/>
          <span className=' absolute bottom-5 left-5 text-2xl bg-teal-500 w-10 px-1 py-1 rounded-[50%] text-center text-white'>{cart.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
