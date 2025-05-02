import React from 'react'
import { lab1 } from '../../assets';

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-full h-auto pt-10">
      <h1 className="font-poppins font-semibold md:text-6xl text-4xl">Meet The Team</h1>
      <img 
        className="w-full md:h-160 sm:h-100 h-70 object-cover"
        src={lab1} 
        alt="Team Working" />
    </section>
  );
}

export default Hero
