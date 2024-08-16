import React from 'react'
import {ApiTopProducts} from '../apifolder/TopProductApi'
import Product from './Product'

const Products = () => {
  return (
    <div className='p-5 flex flex-wrap items-center justify-center'>
        {ApiTopProducts.map((product, index)=>(
            <Product item={product} key={index}/>
        ))
      
        }
       
    </div>
  )
}

export default Products