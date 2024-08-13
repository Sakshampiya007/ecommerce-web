import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'

const Slider = () => {
    const arrowStyle = 'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer'
    return (
        <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
            {/* left div */}
            <div className={arrowStyle}>
                <ArrowLeftOutlined style= {{fontSize: '50px'}}/>
            </div>
            {/* slide div */}
            <div className='wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative'>
                    
            </div>
            {/* right Arrow */}
            <div className={arrowStyle}>
                <ArrowRightOutlined style={{fontSize: '50px'}}/>
            </div>
        </div>
    )
}

export default Slider