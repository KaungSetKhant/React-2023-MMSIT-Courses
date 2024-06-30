import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contant from './pages/Contant'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contant' element={<Contant/>}/>
      </Routes>
   
  );
};

export default App;