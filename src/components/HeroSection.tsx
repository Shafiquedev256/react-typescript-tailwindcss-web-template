import React from "react";
import Button from "./Button";
import PlumberImage from "../assets/plumber-pointing-lateral.png";
const HeroSection: React.FC = () => {
  return (
    <section className='bg-blue-100  flex md:flex-row items-center h-[60vh] md:h-[90vh]'>
      <div className='md:w-3/5  '>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Reliable Plumbing Services
          </h2>
          <p className='text-sm md:text-lg mb-6 font-semibold'>
            24/7 emergency services available
          </p>
          <Button
            text='Call +123 4567890'
            onClick={() => alert("Quote Request")}
          />
        </div>
      </div>
      <img
        src={PlumberImage}
        alt='Plumber pointing left'
        className='hidden md:block md:w-2/5 md:h-[95%] md:animate-pulse'
      />
    </section>
  );
};

export default HeroSection;
