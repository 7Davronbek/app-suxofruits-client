import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Products = () => {
    return (
        <>

            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: false,
                                }}
                                modules={[Autoplay, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide><a href={`/see-catalog/1/`} ><img src="/assets/image/1586884282_11-p-sukhofrukti-31.jpg" className='w-100' alt="" /></a></SwiperSlide>
                                <SwiperSlide><a href={`/see-catalog/1/`} ><img src="/assets/image/1586884282_11-p-sukhofrukti-31.jpg" className='w-100' alt="" /></a></SwiperSlide>
                                <SwiperSlide><a href={`/see-catalog/1/`} ><img src="/assets/image/1586884282_11-p-sukhofrukti-31.jpg" className='w-100' alt="" /></a></SwiperSlide>
                                <SwiperSlide><a href={`/see-catalog/1/`} ><img src="/assets/image/1586884282_11-p-sukhofrukti-31.jpg" className='w-100' alt="" /></a></SwiperSlide>
                                <SwiperSlide><a href={`/see-catalog/1/`} ><img src="/assets/image/1586884282_11-p-sukhofrukti-31.jpg" className='w-100' alt="" /></a></SwiperSlide>
                                <SwiperSlide><a href={`/see-catalog/1/`} ><img src="/assets/image/1586884282_11-p-sukhofrukti-31.jpg" className='w-100' alt="" /></a></SwiperSlide>
                                <SwiperSlide><a href={`/see-catalog/1/`} ><img src="/assets/image/1586884282_11-p-sukhofrukti-31.jpg" className='w-100' alt="" /></a></SwiperSlide>
                                <SwiperSlide><a href={`/see-catalog/1/`} ><img src="/assets/image/1586884282_11-p-sukhofrukti-31.jpg" className='w-100' alt="" /></a></SwiperSlide>
                                <SwiperSlide><a href={`/see-catalog/1/`} ><img src="/assets/image/1586884282_11-p-sukhofrukti-31.jpg" className='w-100' alt="" /></a></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products