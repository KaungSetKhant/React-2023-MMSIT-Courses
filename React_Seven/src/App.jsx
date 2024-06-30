import React from "react";
import IncreaseValue from "./Components/IncreaseValue";
import { StateContextCustom } from "./Context/StateContext";
// import { StateContextCustom } from "./Context/StateContext";

const App = () => {
  
  const {state} = StateContextCustom()
  
  
  return (
    <div className=" text-center mb-10">
      <h2 className=" text-3xl">This is App Page</h2>
      <h2 className=" text-3xl">{state.value}</h2>
      {/* <div className="text-center">
        <h2 className=" text-3xl">{state.count}</h2>
        <button
          onClick={() => dispatch({ type: "increase" })}
          className=" bg-blue-500 text-white px-6 py-1 rounded shadow me-2"
        >
          Increase by count
        </button>

        <button
          onClick={() => dispatch({ type: "decrease", payload: 10 })}
          className=" bg-red-500 text-white px-6 py-1 rounded shadow me-2"
        >
          Decrease by count
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className=" bg-purple-500 text-white px-6 py-1 rounded shadow"
        >
          Reset by count
        </button>
      </div> */}

      {/* <div className="text-center">
        <h2 className=" text-3xl">{state.value}</h2>
        <button
          onClick={() => dispatch({ type: "increase by value" })}
          className=" bg-teal-500 text-white px-6 py-1 rounded shadow me-2"
        >
          Increase by value
        </button>

        <button
          onClick={() => dispatch({ type: "reset by value" })}
          className=" bg-orange-500 text-white px-6 py-1 rounded shadow"
        >
          Reset by value
        </button>
      </div> */}
    <IncreaseValue/>
    </div>
  );
};

export default App;
