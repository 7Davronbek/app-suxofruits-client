import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper";
import { getText } from '../locales';

const Companies = () => {
    return (
        <>

            <div className="companies">

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    // autoplay={{
                    //     delay: 2000,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><h2 className="bold">{getText("companies1")}</h2></SwiperSlide>
                    <SwiperSlide><h2 className="bold">{getText("companies2")}</h2></SwiperSlide>
                    <SwiperSlide><h2 className="bold">{getText("companies3")}</h2></SwiperSlide>
                </Swiper>

            </div>

        </>
    )
}

export default Companies