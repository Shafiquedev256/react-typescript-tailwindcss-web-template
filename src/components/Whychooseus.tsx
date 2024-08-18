import qualityIcone from "../assets/icones/plumber-svgrepo-com.svg";
import teamIcone from "../assets/icones/team-svgrepo-com (1).svg";
import assuredIcone from "../assets/icones/quality-diamond-svgrepo-com.svg";
import techIcone from "../assets/icones/home-svgrepo-com.svg";
import plumber from "../assets/58251.jpg";
const WhyChooseUs = () => {
  return (
    <>
      <div className='my-4 pb-4 flex flex-col items-center space-y-3'>
        <h1 className='font-bold text-center text-gray-800 text-3xl p-2 my-4'>
          WHY CHOOSE US
        </h1>
        <p className=' text-center font-semibold w-[90%] md:w-[50%] mb-4'>
          Max clean operates in USA and provides a variety of cleaning services.
          Choose us because of our reputation for excellence.
        </p>
        <div className=' md:flex md:flex-row md:space-x-4 md:items-center md:justify-center md:py-3'>
          <div className='flex flex-col justify-evenly items-center md:w-3/6'>
            <div className=' py-3 '>
              <div className='flex flex-col items-center'>
                <img src={qualityIcone} alt='' />
                <div className=' text-2xl text-gray-800 text-center w-[60%]'>
                  SPOTLESS SERVICE
                </div>
                <div className='text-sm text-gray-600 font-semibold  w-[70%] text-center'>
                  Our plumbers are fully licensed and insured, giving you peace
                  of mind that your property is in the hands of trusted
                  professionals. You can rely on us to handle any job, big or
                  small, with care and precision.
                </div>
              </div>
            </div>
            <div className='py-4 '>
              <div className='flex flex-col items-center'>
                <img src={techIcone} alt='' />
                <div className=' text-2xl text-gray-800 text-center w-[60%]'>
                  CUTTING-EDGE TECHNOLOGY
                </div>
                <div className='text-sm text-gray-600 font-semibold w-[60%] text-center'>
                  We utilize the latest plumbing technologies and equipment,
                  including advanced leak detection, eco-friendly solutions, and
                  high-efficiency fixtures, to provide you with top-notch
                  service and long-lasting results.
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center w-3/7'>
            <img
              src={plumber}
              className='hidden  md:w-60 md:h-60 md:rounded-full  md:block'
            />
          </div>

          <div className='flex flex-col justify-evenly items-center md:w-3/6'>
            <div className=' py-4'>
              <div className='flex flex-col items-center'>
                <img src={teamIcone} alt='' />
                <div className=' text-2xl text-gray-800 text-center w-[70%]'>
                  EXPERT PLUMBERS
                </div>
                <div className='text-sm text-gray-600 font-semibold w-[70%] text-center'>
                  Our skilled and experienced team is dedicated to understanding
                  and meeting your unique plumbing needs. We pride ourselves on
                  reliability, attention to detail, and a commitment to
                  delivering outstanding results every time.
                </div>
              </div>
            </div>
            <div className='py-4 '>
              <div className='flex flex-col items-center'>
                <img src={assuredIcone} alt='' />
                <div className=' text-2xl text-gray-800 text-center w-[70%]'>
                  LICENSED AND INSURED
                </div>
                <div className='text-sm text-gray-600 font-semibold w-[70%] text-center'>
                  Our plumbers are fully licensed and insured, giving you peace
                  of mind that your property is in the hands of trusted
                  professionals. You can rely on us to handle any job, big or
                  small, with care and precision.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
