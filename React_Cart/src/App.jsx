import React from 'react'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Products from './Components/Products'
import Navbar from './Components/Navbar'
import Addtocart from './Components/Addtocart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/addtocart' element={<Addtocart/>} />
      </Routes>
    </div>
  )
}

export default App
