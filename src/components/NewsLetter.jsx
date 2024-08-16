import { Send } from '@mui/icons-material'
import React from 'react'

const NewsLetter = () => {
    return (
        <div className='flex items-center justify-center w-[100%] h-[350px] flex-col bg-[#c4a4f9]'>
            <h1 className='font-bold text-[50px] text-white'>
                NEWSLETTER
            </h1>
            <h2 className='text-[20px] mt-2 text-white'>Always in touch with us, for your favorite product</h2>
            <div className='flex  mt-[3rem] items-center justify-center min-w-[30rem] min-h-[2rem] bg-[white] border-[#cccccc] rounded-[5px] overflow-hidden]'>
                <input className='border-none pl-[20px] flex-[7] outline-none' type="email" placeholder='Email' />
                <button className='flex-1 bg-[#27a42b] h-[100%]'>
                    <Send className='text-white' />
                </button>
            </div>

        </div>
    )
}

export default NewsLetter