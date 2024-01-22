import React from 'react'
import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Header = () => {
    return (
        <header id='header'>

            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='center'>
                        <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" />
                        <div className="headerbox">
                            <h1>Get your <span>Education</span> today!</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='center'>
                        <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" />
                        <div className="headerbox">
                            <h1>Get your <span>Education</span> today!</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='center'>
                        <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" />
                        <div className="headerbox">
                            <h1>Get your <span>Education</span> today!</h1>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </header>
    )
}

export default Header