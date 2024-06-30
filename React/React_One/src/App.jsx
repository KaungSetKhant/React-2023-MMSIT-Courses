// import React from "react";
// import "./style.css";
// import Home from "./Home";

// const App = () => {
//   const name = "Mg Mg";
//   const arr = ["One", "Two", "Three", "Four"];
//   const fun = () => {
//     console.log("Function Par");
//   };
//   fun();

//   const obj = {
//     name:"John",
//     age:26,
//     gender:"gay",
//   }
//   return (
//     <div>
//       <button onClick={() => fun()}>Click Me</button>
//       <h1>Hello React {name}</h1>
//       <h1>{true? "True Par" : "False Par"}</h1>
//       <h1>{true && "Hey"}</h1>
//       <ul>
//         {arr.map(item => <li> {item} </li>)}
//         {arr.map((item) => (
//           <>
//             <li>{item}</li> <p>Hey</p>
//           </>
//         ))}
//       </ul>
//     </div>

//     <div>
//       <h1 style={{color:"red", backgroundColor:"black"}}>React</h1>
//     </div>

//     <div>
//       <h1>React</h1>
//       <h2 className="heading">React</h2>
//       <label htmlFor="label">Label</label>
//     </div>

//     <div>
//        {arr.map((item,i) => (
//       <div className="card" key={i}>
//         <img src="https://motionbgs.com/i/c/364x205/media/1412/luffys-mighty-gear-5.jpg" alt="" />
//         <h1 className="heading">Card Title</h1>
//         <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi, explicabo minima id delectus ipsum perferendis. Enim corrupti quos temporibus!</p>
//       </div>

//        ))}
//       <Home name={"Kaung Set Khant"} age={22} info={obj} />
//     </div>
//   );
// };

// export default App;

// import {useState} from 'react'
// import Navbar from './components/Navbar'
// import Proucts from './components/Proucts'
// import Footer from './components/Footer'
// import "../src/style.css"

// const App = () => {
//   // return (
//   //   <div className='container'>
//   //     <Navbar/>
//   //    <Proucts/>
//   //    <Footer/>
//   //   </div>
//   // )

//   // const [check,setCheck] = useState("Hello");
//   // return (
//   //   <div className="container">
//   //     <h1>{check}</h1>
//   //     <button onClick={() => setCheck("Hi")}>Click Me</button>
//   //   </div>
//   // );

//   // const [count,setCount] = useState(0);
//   // const incrementCount = () => {
//   //   setCount(count + 1);
//   // }
//   // return (
//   //   <div className="container">
//   //     <h1 className='text-primary'>{count}</h1>
//   //     <button className='btn btn-primary me-2 ' onClick={incrementCount}>Increment</button>
//   //     <button className='btn btn-danger me-2' onClick={() => setCount(0)}>Reset</button>
//   //     <button className='btn btn-secondary' onClick={() => setCount(count - 1)}>Decrement</button>
//   //   </div>
//   // );

//   // const [che,setChe] = useState(true);
//   // return (
//   //   <div className="container">
//   //     {che}
//   //     <p>{che? "Hello" : "Hi"}</p>
//   //     <button onClick={() => setChe(!che)}>Click</button>
//   //   </div>
//   // );

//   // const [items,setItems] = useState([
//   //   {
//   //     id: 1,
//   //     name: "mg mg",
//   //   },
//   //    {
//   //     id: 2,
//   //     name: "hla hla",
//   //   },
//   //    {
//   //     id: 3,
//   //     name: "thida",
//   //   },
//   //    {
//   //     id: 4,
//   //     name: "yamin",
//   //   },
//   // ]);
//   // const [additems,setAddItems] = useState('');
//   // const onSubmitHandler = (e) => {
//   //   e.preventDefault();
//   //   const newAddItems = {id:Date.now(),name:additems};
//   //   setItems([...items,newAddItems]);
//   // }
//   // return (
//   //   <div className="container">
//   //     <form onSubmit={onSubmitHandler}>
//   //       <input type="text" placeholder='Enter your name' value={additems} onChange={(e) => setAddItems(e.target.value)} />
//   //       <p>{additems}</p>
//   //     <button type="submit" className="btn btn-primary">Create</button>

//   //     </form>
//   //     <ul>
//   //       {items.map(item => {
//   //         return (
//   //           <li key={item.id}>{item.name}</li>
//   //         )
//   //       })}
//   //     </ul>
//   //   </div>
//   // );

// };

// export default App;

import { useEffect, useState } from "react";
import "./style.css";

const App = () => {
  // useEffect(() => {},) first way
  // useEffect(() => {},[]) second way
  // useEffect(() => {},[test]) third way

  const [items, setItems] = useState([]);
  const [color, setColor] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setItems(data);
    console.log(data);
  };
  return (
    <div className="container">
      {items.map((item) => {
        return (
          <>
            <img src={item.image} alt="" width={"100px"} />
            <h1>{item.title}</h1>
            <p className="text-truncate">{item.description}...</p>
            <button onClick={() => setColor(!color)}>
              {color ? "Add to Cart" : "Remove from Cart"}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default App;



