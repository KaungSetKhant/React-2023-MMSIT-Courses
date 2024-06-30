// import React from 'react'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contant from './pages/Contant'
// import "./style.css"
// import { Routes,Route } from 'react-router-dom'

// const App = () => {
//   return (

//      <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contant' element={<Contant/>}/>

//      </Routes>

//   )
// }

// export default App

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contant from "./pages/Contant";
import Service from "./pages/Service";
// import Admin from "./components/Admin";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contant" element={<Contant />} />
        <Route path="/service" element={<Service />} />

        {/* <Route path="/admin" element={<Admin />} /> */}

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;



