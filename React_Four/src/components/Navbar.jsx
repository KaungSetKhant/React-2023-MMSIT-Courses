import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({setItems,items}) => {
    const nav = useNavigate()
    const [search,setSearch] = useState('')
    // const [items,setItems] = useState([])
   
    // useEffect(() => {
    //     fetchData()
    //     nav()
    // },[])
    const submitHandler = e => {
      e.preventDefault()
      const filterPd = items.filter(item => item.title.toLowerCase().includes(search))
      setItems(filterPd)
    }

    // const fetchData = async () => {
    //     const api = await fetch(`https://fakestoreapi.com/products`)
    //     const data = await api.json()
    //     setItems(data)
    //     console.log(data)
    // }

    return (
    <div className="flex items-center p-7 shadow rounded justify-around">
      <Link to={'/'}>
        <h2>Comfity</h2>
      </Link>
      <form onSubmit={submitHandler}>
        <input value={search} onChange={e=> setSearch(e.target.value)}
          type="text"
          className="outline-none bg-transparent border-b-2 border-b-teal-500"
        />
      </form>
    </div>
  );
};

export default Navbar;
