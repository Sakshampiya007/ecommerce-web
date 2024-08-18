import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Counter from '../components/Counter'

const Cart = () => {
    const summary = 'flex justify-between mt-3 w-[100%]'
    return (
        <div>
            <Announce />
            <Navbar />
            <div className='p-5'>
                <div className='flex justify-center text-5xl'>
                    Cart
                </div>
                <div className='flex items-center justify-between mt-4 '>
                    <button className='btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white'>Continue Shoping</button>
                    <div className='flex underline text-lg cursor-pointer'>
                        <p>Items in your cart : 2</p>
                        <p className='ml-5'>Whitlist Item: 0</p>
                    </div>
                    <button className='btn'>Checkout</button>
                </div>
                {/* Central Div */}
                <div className='flex mt-7'>
                    <div className='flex flex-col flex-1'>
                        {/* List of Products */}
                        <div className='flex w-[100%] h-auto items-center'>
                            <div className='product flex self-start p-5'>
                                <img
                                    className='w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300  '
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812" alt="product_image"  />
                                <div className='description flex flex-col ml-5 h-auto justify-between'>
                                    <p>
                                        <b className='mr-2'>ID:</b>123345679
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product</b>Sky Shirt
                                    </p>
                                    <p className='flex items-center justify-start'>
                                        <b className='mr-2'>Color</b>
                                        <div className='rounded-full border-2 w-[20px] h-[20px] cursor-pointer p-[10px] ml-1 bg-black'></div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size</b>Large
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center flex-auto'>
                                <Counter />
                                <p className='flex items-center justify-center text-4xl mt-3'>
                                    <b>Rs3000</b>
                                </p>
                            </div>
                        </div>
                        <hr className='mt-7 mb-7'></hr>

                        {/* 2nd Product list */}

                        <div className='flex w-[100%] h-auto items-center'>
                            <div className='product flex self-start p-5'>
                                <img
                                    className='w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300  '
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824" alt='product_img' />
                                <div className='description flex flex-col ml-5 h-auto justify-between'>
                                    <p>
                                        <b className='mr-2'>ID:</b>123345679
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product</b>Sky Shirt
                                    </p>
                                    <p className='flex items-center justify-start'>
                                        <b className='mr-2'>Color</b>
                                        <div className='rounded-full border-2 w-[20px] h-[20px] cursor-pointer p-[10px] ml-1 bg-blue-400'></div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size</b>Large
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center flex-auto'>
                                <Counter />
                                <p className='flex items-center justify-center text-4xl mt-3'>
                                    <b>Rs3000</b>
                                </p>
                            </div>
                        </div>
                        <hr className='mt-7 mb-7'></hr>

                    </div>
                    <div className='p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center'>
                        <h1 className='text-[2rem]'>Summary</h1>
                        <div className={summary}>
                            <p>Sub-Total</p>
                            <p>Rs 6000</p>
                        </div>
                        <div className={summary}>
                            <p>Shipping</p>
                            <p>Rs 300</p>
                        </div>
                        <div className={summary}>
                            <p>Discout</p>
                            <p>Rs 250</p>
                        </div>
                        <div className={summary + ' text-2xl font-bold'}>
                            <p>Total</p>
                            <p>Rs 6050</p>
                        </div>
                    </div>
                </div>

            </div>

            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Cart