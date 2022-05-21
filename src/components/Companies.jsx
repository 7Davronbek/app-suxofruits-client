import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper";

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
                    <SwiperSlide><h2 className="bold">Главные Агрофирма ООО «URGUT AGRO-VET SERVIS»  (для Сухофрукты) 2015-г</h2></SwiperSlide>
                    <SwiperSlide><h2 className="bold">ООО «ZARBDOR UNIVERSAL LOGISTIKA»  2017-г (Гидропонная тепличная-ферма выращивает помидоры, огурцы  и другие свежую плодоовощную продукцию) </h2></SwiperSlide>
                    <SwiperSlide><h2 className="bold">ООО «ZARBDOR BARAKA AGROEKSPORT»  2020-г (для Сухофрукты)</h2></SwiperSlide>
                </Swiper>

            </div>

        </>
    )
}

export default Companies