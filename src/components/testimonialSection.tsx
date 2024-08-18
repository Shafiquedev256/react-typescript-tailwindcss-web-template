import React from "react";

type Testimonial = {
  name: string;
  feedback: string;
  location: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    feedback:
      "Excellent service! The plumber was prompt, professional, and fixed my leak quickly.",
    location: "New York, NY",
    avatar: "https://via.placeholder.com/150", // Placeholder image, replace with actual avatar
  },
  {
    name: "Jane Smith",
    feedback:
      "Great experience. The team was knowledgeable and offered useful advice for maintaining my plumbing.",
    location: "Los Angeles, CA",
    avatar: "https://via.placeholder.com/150", // Placeholder image, replace with actual avatar
  },
  {
    name: "Michael Johnson",
    feedback:
      "Highly recommend! They were on time and the pricing was very reasonable.",
    location: "Chicago, IL",
    avatar: "https://via.placeholder.com/150", // Placeholder image, replace with actual avatar
  },
];

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  feedback,
  location,
  avatar,
}) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 mb-6 max-w-sm'>
      <img
        src={avatar}
        alt={name}
        className='w-16 h-16 rounded-full mx-auto mb-4'
      />
      <p className='text-gray-700 text-lg text-center mb-2'>"{feedback}"</p>
      <div className='text-center'>
        <h3 className='text-xl font-semibold text-gray-900'>{name}</h3>
        <p className='text-gray-600'>{location}</p>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-semibold text-center text-gray-800 mb-8'>
          What Our Customers Say
        </h2>
        <div className='flex flex-wrap justify-center gap-6'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
