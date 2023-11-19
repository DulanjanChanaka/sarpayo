import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { pythondata } from './snakeSwiperData';

const Pythonswiper = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }}]
  };

  return (
    <div>
      <Slider {...settings}>
        {pythondata.map((data) => (
          <div key={data.id} className=''>
            <div >
              <img src={data.link} alt={`Python Image ${data.id}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Pythonswiper;
