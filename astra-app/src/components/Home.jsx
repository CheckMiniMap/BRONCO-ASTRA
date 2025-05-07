import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { carousel1, carousel2, carousel3, logo, placeholder } from '../assets';
import { homeContent } from '../constants';
import { Footer } from '../components';

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
          <img src={carousel1} alt="Slide 1" className="object-[20%_80%]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="Slide 2" className="object-top" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel3} alt="Slide 3" className="object-top" />
        {/* <div className="absolute md:top-8 top-5 md:left-27 left-15 font-medium md:text-7xl text-3xl text-left text-white z-2">
          <h1 className="font-playfair">Quick</h1>
          <h1 className="font-playfair pt-1">& Easy</h1>
          <div 
            className="flex justify-center items-center w-35 h-10 border-1 border-white 
            hover:bg-white hover:text-black duration-300 ease-in-out mt-3 cursor-pointer"
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                const offset = element.offsetTop; // Get the element's position relative to the top of the page
                window.scrollTo({
                  top: offset,
                  behavior: 'smooth', // Use 'smooth' for a smooth scroll effect
                });
                //element.scrollIntoView({ behavior: 'instant', block: 'start' });
              }
            }}
          >
            <h3 className="font-playfair font-normal text-lg">Read More</h3>
          </div>
        </div> */}
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const HomeContent = () => {
  return (
    <section className="grid justify-items-center items-center lg:grid-cols-2 grid-cols-1 gap-5 w-full h-auto pt-10" id="about">
      <img src={logo} alt="Bronco Astra Logo" className="w-full md:max-w-[600px] max-w-[70%] object-cover" />{/*w-8/10 lg:w-full*/}
      <div className="w-auto">
        <h1 className="font-poppins font-semibold text-6xl ">ABOUT</h1>
        <p className="pt-5">{homeContent.p1}</p>
        <p className="pt-5">{homeContent.p2}</p>
        <p className="pt-5">{homeContent.p3}</p>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <div className="relative w-full mt-26">{/*  h-150 */}
      <div className="absolute sm:top-5 top-2 right-5 font-semibold sm:text-3xl lg:text-5xl text-xl text-right text-white z-2">
        <h1 className="font-poppins drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">PROJECT</h1>
        <h1 className="font-poppins sm:pt-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">ASTRA 2025</h1>
      </div>
      <Carousel />
      <HomeContent />
      <Footer />
    </div>
  )
}

export default Home
