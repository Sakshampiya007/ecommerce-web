import React from 'react'

const Counter = () => {
  return (
    <div className='flex items-center justify-center text-2xl'>
        Quantity
        <div className='flex ml-5 shadow-md'>
            <div className='flex items-center justify-center w-8 text-white cursor-pointer bg-[#8a4af3] rounded-l-md'>-</div>
            <div className='flex items-center justify-center w-8 border-[1px] border-[#8a4af3]'>1</div>
            <div className='flex items-center justify-center w-8 text-white cursor-pointer bg-[#8a4af3] rounded-r-md'>+</div>
        </div>
    </div>
  )
}

export default Counter