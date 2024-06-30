import React, { useEffect, useState } from 'react'
import MealCart from './MealCart'

const Meal = () => {
    const [meals,setMeals] = useState([])

    useEffect( () => {
        fetchData()
    },[])

    const fetchData = async () => {
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        const {meals} = await api.json()
        setMeals(meals)
        console.log(meals)
    }
    return (
    <div className='flex flex-wrap gap-10 justify-center mt-20'>
      {meals.map( meal => {
        return(
            // <img src={meal.strMealThumb} alt="" />
            <MealCart key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} id={meal.idMeal}/>
        )
      })}
    </div>
  )
}

export default Meal

