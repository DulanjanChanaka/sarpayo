import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Ads.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
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
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://images.pexels.com/photos/19085784/pexels-photo-19085784/free-photo-of-a-snake-between-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></SwiperSlide>
        <SwiperSlide><img src='https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></SwiperSlide>
        <SwiperSlide><img src='https://images.pexels.com/photos/12149595/pexels-photo-12149595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></SwiperSlide>
        
      </Swiper>
    </>
  );
}
