import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-blue-800 text-white py-8'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Company Info */}
          <div className='mb-6 md:mb-0'>
            <h4 className='text-lg font-semibold'>Contact Us</h4>
            <p className='mt-2'>Plumber Co.</p>
            <p>1234 Main St, Suite 100</p>
            <p>City, State, ZIP</p>
          </div>

          {/* Contact Details */}
          <div className='mb-6 md:mb-0'>
            <h4 className='text-lg font-semibold'>Get in Touch</h4>
            <p className='mt-2'>Phone: (123) 456-7890</p>
            <p>Email: info@plumberco.com</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className='text-lg font-semibold'>Follow Us</h4>
            <div className='flex space-x-4 mt-2'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='w-6 h-6 text-white hover:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  {/* Facebook Icon */}
                  <path d='M22.675 0h-21.35C.595 0 0 .594 0 1.325v21.351C0 23.406.595 24 1.325 24H12v-9.294H9.293v-3.623H12V8.413c0-2.667 1.633-4.121 4.015-4.121 1.142 0 2.123.085 2.406.123v2.788H15.79c-1.371 0-1.637.651-1.637 1.606v2.105h3.293l-.429 3.623h-2.864V24h5.623c.73 0 1.325-.594 1.325-1.324V1.325C24 .595 23.406 0 22.675 0z' />
                </svg>
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='w-6 h-6 text-white hover:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  {/* Twitter Icon */}
                  <path d='M24 4.557a9.836 9.836 0 01-2.828.775 4.933 4.933 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195A4.917 4.917 0 0016.616 3c-2.72 0-4.928 2.205-4.928 4.917 0 .385.045.761.128 1.122-4.094-.206-7.72-2.168-10.141-5.144A4.822 4.822 0 00.964 6.03a4.897 4.897 0 002.189 4.073 4.934 4.934 0 01-2.231-.616v.061c0 2.281 1.631 4.185 3.789 4.617a4.934 4.934 0 01-2.224.085 4.929 4.929 0 004.604 3.417A9.869 9.869 0 010 21.539a13.929 13.929 0 007.548 2.212c9.056 0 14.01-7.499 14.01-13.987 0-.213-.004-.425-.015-.636A9.936 9.936 0 0024 4.557z' />
                </svg>
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='w-6 h-6 text-white hover:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  {/* Instagram Icon */}
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.308 3.608 1.282.975.975 1.22 2.242 1.282 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.308 2.633-1.282 3.608-.975.975-2.242 1.22-3.608 1.282-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.308-3.608-1.282-.975-.975-1.22-2.242-1.282-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.308-2.633 1.282-3.608C5.377 2.471 6.644 2.226 8.01 2.164 9.276 2.106 9.656 2.093 12 2.093m0-2.163C8.737 0 8.332.012 7.052.072 5.773.132 4.673.332 3.74 1.266c-.933.933-1.133 2.033-1.193 3.312C2.488 6.332 2.476 6.737 2.476 10s.012 3.668.071 4.948c.06 1.279.26 2.379 1.193 3.312.933.933 2.033 1.133 3.312 1.193 1.28.06 1.685.071 4.948.071s3.668-.012 4.948-.071c1.279-.06 2.379-.26 3.312-1.193.933-.933 1.133-2.033 1.193-3.312.06-1.28.071-1.685.071-4.948s-.012-3.668-.071-4.948c-.06-1.279-.26-2.379-1.193-3.312-.933-.933-2.033-1.133-3.312-1.193C15.668.012 15.263 0 12 0z' />
                  <path d='M12 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.163a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
