import React from 'react'
import { StateContextCustom } from '../Context/StateContext'
import Product from './Product'

const Products = () => {
  const {state : {products}} = StateContextCustom()
  console.log(products)
  return (
    <div className='flex flex-wrap gap-7 mt-20 justify-center'>
      {products?.map(pd => {
        return(
          <Product key={pd.id} {...pd} />
        )
      })}
    </div>
  )
}

export default Products
