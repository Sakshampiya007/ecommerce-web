import React from 'react'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Counter from '../components/Counter'

const ProductPage = () => {
    return (
        <div>
            <Announce />
            <Navbar />
            <div className='flex justify-center'>
                <div className='flex flex-1 items-center justify-center'>
                    <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812" alt="product_image" className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300' />
                </div>
                <div className='flex-[1.3] items-start justify-items-start flex-col mt-10'>
                    <h1 className='title text-[40px]'>Black Hoodie Original </h1>
                    <p className='pr-[4rem] text-justify mt-4'>This hoodie is made of 100% cotton. the brand name is Nepali Cotton from Kathmandu. This hoodie is made of 100% cotton. the brand name is Nepali Cotton from Kathmandu. Available in very affortable price. </p>
                    <p className='mt-7 text-3xl'> Price <b>Rs 2000</b></p>

                    {/* Color Varient */}
                    <div className='flex text-2xl mt-5'>
                        Colors
                        <div className='bg-red-600 w-[1.5rem] h-[1.5rem] rounded-full border-2 m-1 cursor-pointer hover:border-[#8a4af3]'></div>
                        <div className='bg-yellow-200 w-[1.5rem] h-[1.5rem] border-2 rounded-full m-1 cursor-pointer hover:border-[#8a4af3]'></div>
                        <div className='bg-blue-500 w-[1.5rem] h-[1.5rem] border-2 rounded-full m-1 cursor-pointer hover:border-[#8a4af3]'></div>
                    </div>
                    <div className='flex mt-5 text-2xl'>
                        Size
                        <select className='ml-5 border-2'>
                            <option selected disabled>select</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>
                    <div className='flex mt-5'>
                        <Counter />
                    </div>
                    <button className='btn mt-5'>Add to Cart</button>
                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default ProductPage