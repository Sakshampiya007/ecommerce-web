import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import './Slider.css'
import { ApiSlides } from '../apifolder/SliderApi'


const Slider = () => {

    //Style
    // const slideStyle = "slide flex items-center justify-center h-[100%]";
    const arrowStyle = 'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer'

    //UseState hooks
    const [slides] = useState(ApiSlides)
    const [activeSlide, setActiveSlide] = useState(0)

    const prevSlide = () => {
        if (activeSlide === 0) {
          setActiveSlide(slides.length - 1);
        } else {
          setActiveSlide(activeSlide - 1);
        }
      };
      const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
          setActiveSlide(0);
        } else {
          setActiveSlide(activeSlide + 1);
        }
      };
    
    return (
        <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
            {/* left div */}
            <div className={arrowStyle} onClick={prevSlide}>
                <ArrowLeftOutlined style={{ fontSize: '50px' }} />
            </div>
            {/* slide div */}
            {slides.map((slide, index) => {
                if (index === activeSlide) {
                    return (
                        <div key={slide.id} className={'wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative' + slide.background}>
                            <div className="slide flex items-center justify-center h-[100%]">
                                <div className=" flex flex-1 items-center justify-center h-[100%]">

                                    <img className="h-[100%] object-cover"
                                        src={slide.src} alt='slide_image' />
                                </div>
                                <div className="dev flex flex-col flex-1 place-items-start justify-center ml-11">
                                    <h2 className='text-[55px] text-white'>{slide.content.h2} </h2>
                                    <p className='text-[30px] text-white'>{slide.content.p} </p>
                                    <button className='btn'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                return null; 
            })}
            {/* right Arrow */}
            <div className={arrowStyle} onClick={nextSlide}>
                <ArrowRightOutlined style={{ fontSize: '50px' }} />
            </div>
        </div>
    )
}

export default Slider
