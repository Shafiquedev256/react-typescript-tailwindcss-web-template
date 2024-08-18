import React, { useState } from "react";
import { useScrollPosition } from "../Hooks/useScrollPosition";

type Props = {
  services: any;
  testimonials: any;
  aboutUs: any;
};

const Header: React.FC<Props> = ({ services, testimonials, aboutUs }) => {
  const [isopen, setIsopen] = useState(false);
  const scrollPosition = useScrollPosition();
  const scrollServices = () => {
    if (services.current) {
      services.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsopen(false);
  };
  const scrollToTestimonials = () => {
    if (testimonials.current) {
      testimonials.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsopen(false);
  };
  const scrollToAboutUs = () => {
    if (aboutUs.current) {
      aboutUs.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsopen(false);
  };
  return (
    <header
      className={`relative px-3 ${scrollPosition > 0 ? "  bg-blue-200  " : "bg-blue-100 text-black "} transition ease-in-out delay-150  sticky top-0 z-10   py-4`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>He plumber</h1>
        <div
          className='font-semibold md:hidden'
          onClick={() => setIsopen(true)}
        >
          Menu
        </div>
        <nav
          className={`${isopen ? " translate-y-0 " : "translate-x-full "} transition ease-linear delay-200 bg-gray-200 justify-center items-center space-y-6 md:space-y-0 md:translate-x-0 py-5 text-lg ju md:py-0 h-[50vh] md:h-fit w-[100%] left-0 z-50 md:bg-opacity-0 md:w-3/5 flex flex-col md:relative absolute top-0 md:flex-row p-2 md:items-center md:justify-between font-semibold`}
        >
          <span
            className='font-light text-2xl md:hidden p-2'
            onClick={() => setIsopen(false)}
          >
            Close
          </span>
          <span className='w-fit hover:underline' onClick={scrollServices}>
            Services
          </span>
          <span
            className='w-fit hover:underline'
            onClick={scrollToTestimonials}
          >
            Testimonials
          </span>
          <span className='w-fit hover:underline' onClick={scrollToAboutUs}>
            About Us
          </span>
          <span className='w-fit hover:underline'>contact us</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
