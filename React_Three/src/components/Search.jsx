import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
  
  const {name} = useParams()

  const [item,setItem] = useState({})

  useEffect(() => {
    fetchData()
  },[]);


  const fetchData = async () => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    const {meals} = await data.json()
    setItem(meals[0])
  }
  return (
    <div>
      <p>{item.strMeal}</p>
    </div>
  )
}

export default Search
