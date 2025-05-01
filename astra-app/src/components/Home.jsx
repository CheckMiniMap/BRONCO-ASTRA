import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { carousel1, carousel2, carousel3, placeholder } from '../assets';
import { homeContent } from '../constants';

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
          delay: 5000, // 3 seconds between slides
          disableOnInteraction: false, // keeps autoplay after user swipes
        }}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="" // mySwiper
      >
        <SwiperSlide>
          <img src={carousel1} alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="absolute md:top-8 top-5 md:left-27 left-15 font-medium md:text-7xl text-3xl text-left text-white z-2">
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

const HomeContent = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-5 w-full h-auto pt-10">
      <img src={placeholder} alt="Placeholder" className="w-full lg:w-1/2 object-cover" />
      <div className="">
        <h1 className="font-poppins font-semibold text-6xl">ABOUT</h1>
        <p className="pt-5">{homeContent.p1}</p>
        <p className="pt-5">{homeContent.p2}</p>
        <p className="pt-5">{homeContent.p3}</p>
      </div>
    </section>
  )
}

const HomeFooter = () => {
  return (
    <section className="flex flex-col lg:justify-center items-center lg:flex-row lg:gap-20 gap-10 w-full pt-15 pb-20">
      <div className="flex flex-col sm:w-[420px] w-9/10">
        <h1 className="font-poppins font-semibold text-3xl lg:min-w-[387px]">Contact Project Lead</h1>
        <h4 className="pl-5 pt-1.5 font-semibold">Project Lead / Chief Engineer</h4>
        <p className="pl-10">Matthew Romero: macornejo1@cpp.edu</p>
      </div>
      <div className="flex flex-col sm:w-[420px] w-9/10">
        <h1 className="font-poppins font-semibold text-3xl lg:min-w-[387px]">Location</h1>
        <p className="pl-5 pt-1.5 italic">California State Polytechnic University of Pomona</p>
        <p className="pl-10">3801 West Temple Ave, Pomona, CA, 91768</p>
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <div className="relative w-full mt-26">
      <div className="absolute top-5 right-5 font-semibold md:text-5xl text-3xl text-right text-white z-2">
        <h1 className="font-poppins">PROJECT</h1>
        <h1 className="font-poppins pt-3">ASTRA 2025</h1>
      </div>
      <Carousel />
      <HomeContent />
      <HomeFooter />
    </div>
  )
}

export default Home
