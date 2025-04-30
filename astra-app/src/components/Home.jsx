import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { carousel1, carousel2, carousel3 } from '../assets';

const Carousel = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000, // 3 seconds between slides
          disableOnInteraction: false, // keeps autoplay after user swipes
        }}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="border-t-2 border-green-950" // mySwiper
      >
        <SwiperSlide>
          <img src={carousel1} alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="absolute md:top-8 top-30 md:left-27 left-5 font-medium text-7xl text-left text-white z-2">
          <h1 className="font-playfair">Quick</h1>
          <h1 className="font-playfair pt-1">& Easy</h1>
          <div 
            className="flex justify-center items-center w-35 h-10 border-1 border-white 
            hover:bg-white hover:text-black duration-300 ease-in-out mt-3"
          >
            <h3 className="font-playfair font-normal text-lg">Read More</h3>
          </div>
        </div>
          <img src={carousel3} alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const Home = () => {
  return (
    <div className="relative w-full h-175 mt-35">
      <div className="absolute top-5 right-5 font-semibold text-5xl text-right text-white z-2">
        <h1 className="font-poppins">PROJECT</h1>
        <h1 className="font-poppins pt-3">ASTRA 2025</h1>
      </div>
      <Carousel />

    </div>
  )
}

export default Home
