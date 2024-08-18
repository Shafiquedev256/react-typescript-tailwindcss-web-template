import plumberImg from "../assets/2149176718.jpg";
const AboutUs = () => {
  return (
    <section className='bg-green-100 py-12 flex flex-col items-center md:flex-row-reverse'>
      <div className=' px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900'>About Us</h2>
          <p className='mt-4 text-lg text-gray-600'>
            At <span className='font-semibold'>[Your Company Name]</span>, we
            pride ourselves on being a trusted plumbing service provider in{" "}
            <span className='font-semibold'>[Your City/Area]</span>. With over{" "}
            <span className='font-semibold'>[X]</span> years of experience, our
            team of skilled and licensed plumbers is dedicated to delivering
            top-notch service and customer satisfaction.
          </p>
        </div>
        <div className='flex justify-center items-center my-4 md:my-0'>
          <img
            src={plumberImg}
            alt='plumber showing his tool bag'
            className='md:hidden  rounded-full w-60 h-60'
          />
        </div>

        <div className='mt-8 text-gray-700 text-sm font-semibold'>
          <p className='mb-4'>
            Whether it’s a minor leak or a major plumbing emergency, we approach
            every job with professionalism, precision, and care. Our commitment
            to excellence is reflected in our prompt response times, transparent
            pricing, and meticulous attention to detail.
          </p>
          <p className='mb-4'>
            We believe in building lasting relationships with our clients, which
            is why we treat every home as if it were our own. From routine
            maintenance to complex installations, we’ve got you covered.
          </p>
          <p>
            At <span className='font-semibold'>[Your Company Name]</span>, no
            job is too big or too small. We are passionate about what we do and
            are always ready to help with all your plumbing needs. Trust us to
            keep your pipes flowing smoothly!
          </p>
        </div>
      </div>
      <img
        src={plumberImg}
        alt='plumber showing his tool bag'
        className='hidden md:w-2/5 md:block'
      />
    </section>
  );
};

export default AboutUs;
