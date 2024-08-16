import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
    const SocialStyle = 'm-3 p-2 cursor-pointer rounded-full text-white'
    return (
        <div className='flex items-center justify-around p-2'>
            <div className='flex-1 flex-col flex-wrap p-2'>
                {/* Store informantion */}
                <h1 className='font-bold text-[25px]'>SakshamCode</h1>
                <p>This is to inform you that all the good will be delivered with a warenty for all the subscribed customers</p>
                <div className='flex mt-3 self-start'>
                    <div className={SocialStyle + ' bg-blue-700'}>
                        <Facebook />
                    </div>
                    <div className={SocialStyle + ' bg-red-700'}>
                        <Instagram />
                    </div>
                    <div className={SocialStyle + ' bg-blue-300'}>
                        <Twitter />
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col p-2'>
                {/* contact information */}
                <div className='flex m-3'>
                    <LocationOnOutlined />
                    <p className='pl-3'>Kathmandu City</p>
                </div>
                <div className='flex m-3'>
                    <LocalPhoneOutlined />
                    <p className='pl-3'>+977 9876543211</p>
                </div>
                <div className='flex m-3'>
                    <EmailOutlined />
                    <p className='pl-3'>piya.saksham007@gmail.com</p>
                </div>

            </div>
        </div>
    )
}

export default Footer