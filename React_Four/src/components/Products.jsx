import React from 'react'
import Product from './Product'
const Products = ({products}) => {
 
    
    return (
    <div className='flex flex-wrap gap-10 justify-center mt-20'>
      {products.map( item => {
        return(
           <Product key={item.id} {...item} />
        )
      })}

    </div>
    
  )
}

export default Products
