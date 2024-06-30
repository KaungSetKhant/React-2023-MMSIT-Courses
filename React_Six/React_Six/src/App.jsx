// import React from 'react'
// import One from './Components/One'
// import Two from './Components/Two'
// import Three from './Components/Three'

// const App = () => {
//   return (
//     <div>
//       <One/>
//       <Two/>
//       <Three/>
//     </div>
//   )
// }

// export default App

import React, { useReducer } from "react";

const Reducer = () => {
  const InitialState = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return state + 1;
      case "decrease":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <div className="text-center">
      <h1 className=" text-blue-700 text-lg">{state}</h1>
      <button
        className=" bg-blue-500 text-white p-3 rounded me-3"
        onClick={() => dispatch({ type: "increase" })}
      >
        increase
      </button>
      <button
        className=" bg-red-500 text-white p-3 rounded me-3"
        onClick={() => dispatch({ type: "decrease" })}
      >
        Decrease
      </button>
      <button
        className=" bg-lime-500 text-white p-3 rounded"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Reducer;
