import React from "react";

const Movie = ({ name, price,img }) => {
  return (
    <div  className=" flex justify-center align-middle text-center h-screen mb-20"> 
      <ul>
        <li>Movie Name - {name}</li>
        <img src={img} className=" w-[100%] h-[50%] object-cover rounded" />
        <li className=" text-blue-600">${price}</li>
      </ul>
    </div>
  );
};

export default Movie;
