import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [items,setItems] = useState({})

    const {id} = useParams()

    useEffect(()=>{
      fetchData()
    },[])

    const fetchData = async() => {
      const api = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await api.json()
      setItems(data)
    }
  return (
    <div>
     <h2>{items.title}</h2>
    </div>
  )
}

export default Detail
