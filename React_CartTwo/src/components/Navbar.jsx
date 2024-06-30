import React from 'react'
import {BsFillHandbagFill} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'




const Navbar = () => {
  const {cartItems} = useSelector(state => state.cart)

  const [products,setProducts] = useState([])

  const [search,setSearch] = useState('')

  useEffect(() => {
      fetchProduct()
  })

  const fetchProduct = async() => {
      const api = await fetch(`https://fakestoreapi.com/products`)
      const data = await api.json()
      setProducts(data)
  }

  const navigate = useNavigate()
  const filterProduct = products.filter( item => item.title.toLowerCase().includes(search))
  

  const searchHandler = e => {
    e.preventDefault()
    navigate(`/search`,{state : {filterProduct}})
    console.log(filterProduct)
  }


  return (
    <div className=' flex justify-around p-7 shadow-lg'>
      <Link to='/'>
        <h2 className=" text-3xl text-purple-800 hover:text-purple-500 transition cursor-pointer">Comfity</h2>
      </Link>
      <div className=' flex gap-5 items-center'>
        <form onSubmit={searchHandler}>
           <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder='Search here...' className=' outline-none border-b-4 border-b-violet-600 ps-2' />
        </form>
        <Link to='/addtocart'>
        <div className="relative">
          <span className='absolute bottom-5 bg-white rounded-[100%] w-5 text-center left-4 text-red-300 text-2xl'>{cartItems.length}</span>
          <BsFillHandbagFill className=' text-3xl text-violet-800' />
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
