import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();

  const [meals, setMeals] = useState({});

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setMeals(meals[0]);
    console.log(meals[0]);
  };
  return (
    <div className="w-[80%] mx-auto flex gap-10 items-center h-screen">
      <img src={meals.strMealThumb} alt="" className="rounded object-cover" />
      <div>
        <h2 className="text-2xl font-semibold text-gray-300 tracking-wide mb-5">
          {meals.strMeal}
        </h2>
        <h2 className="text-lg font-semibold text-gray-300 tracking-wide mb-5">
          {meals.strArea}
        </h2>
        <p className="text-base font-semibold text-gray-300 tracking-wide mb-5">
          {meals.strCategory}
        </p>
        <p className="text-2xl text-gray-300 tracking-wide leading-8">
          {meals.strInstructions}
        </p>
        <a href={meals.strYoutube}>
            <BsYoutube className="text-red-500 text-4xl"/>
        </a>
      </div>
    </div>
  );
};

export default Detail;
