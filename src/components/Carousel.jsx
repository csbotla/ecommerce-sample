import React, { useState } from "react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Carousel({ images }) {
  {
    console.log("&&&&&&&&&&", images);
  }
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        className="mySwiper"
      >
        {images.map((image, i) => {
          return (
            <SwiperSlide>
              {console.log(image)}
              <img
                key={i}
                src={image.download_url}
                width="auto"
                height="300px"
                alt={image.author}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
