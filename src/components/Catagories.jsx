import React from 'react'
import  { ApiCategories } from '../apifolder/CatagoriesApi'
import Catagory from './Catagory'

const Catagories = () => {
  return (
    <div className='flex items-center justify-between p-5'>
        {
            ApiCategories.map((catagory, index)=>{
                return <Catagory item={catagory} key={index} />
            })
        }
    </div>
  )
}

export default Catagories