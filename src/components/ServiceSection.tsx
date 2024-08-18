import React from "react";
import leakrepairIcone from "../assets/icones/pipe-leak-svgrepo-com.svg";
import pipeIcone from "../assets/icones/pipe-svgrepo-com.svg";
import drainIcome from "../assets/icones/waste-pipe-svgrepo-com.svg";
import toiletIcone from "../assets/icones/toilet-bowl-svgrepo-com.svg";
import plumberIcone from "../assets/icones/plumber-svgrepo-com.svg";
const ServiceCard: React.FC<any> = () => {
  const services = [
    {
      title: "Leak Repairs",
      description: "Fixing all types of leaks.",
      icone: leakrepairIcone,
    },
    {
      title: "Drain Cleaning",
      description: "Unclogging and cleaning drains.",
      icone: drainIcome,
    },
    {
      title: "Pipe Installation",
      description: "Installing new pipes and fixtures.",
      icone: pipeIcone,
    },
    {
      title: "Toilet Repair & Installation",
      description: "Repairing or installing toilets.",
      icone: toiletIcone,
    },
    {
      title: "Water Heater Installation",
      description: " Installing Water heaters.",
      icone: plumberIcone,
    },
  ];
  return (
    <>
      <section id='services' className='bg-white  p-6'>
        <h2 className='font-bold text-gray-800 text-center text-2xl m'>
          Our Services and not limited
        </h2>
        <div className='text-center text-gray-700 font-semibold w-[100%]'>
          Contact us for all plumbing services.
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center my-5'>
          {services.map((item) => (
            <div
              key={item.description}
              className='my-2 p-6 rounded-md w-60 h-60 flex flex-col justify-center space-y-3 items-center border border-blue-500'
            >
              <img src={item.icone} className='' />
              <div className='font-semibold text-lg'>{item.title}</div>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
