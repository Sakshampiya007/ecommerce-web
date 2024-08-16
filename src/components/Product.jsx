import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { React, useState } from 'react'

const Product = ({ item }) => {
    const [hoverEffect, setHoverEffects] = useState(' opacity-0')
    const handleHoverEnter = () => {
        setHoverEffects(' opacity-1 hover:bg-[rgba(0,0,0,0.2)]')
    }
    const handleHoverExit = () => {
        setHoverEffects(' opacity-0')
    }
    const iconStyle = 'w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full m-3 cursor-pointer'


    return (
        <div className='flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative'  
        onMouseEnter={handleHoverEnter} 
        onMouseLeave={handleHoverExit}>
            <img src={item.src} alt="product_image" />

            <div className={'flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100' + hoverEffect}>
                {/*        icons         */}
                <div className={iconStyle}>
                    <ShoppingCartOutlined />
                </div>
                <div className={iconStyle}>
                    <FavoriteBorderOutlined />
                </div>
                <div className={iconStyle}>
                    <SearchOutlined />
                </div>
            </div>
        </div>
    )
}

export default Product