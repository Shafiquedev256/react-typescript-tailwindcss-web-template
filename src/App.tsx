import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceSection";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/Whychooseus";
import TestimonialSection from "./components/testimonialSection";
import { useScroll } from "./Hooks/useScroll";

const App: React.FC = () => {
  const { services, aboutUs, testimonials } = useScroll();
  return (
    <div className='App'>
      <Header
        services={services}
        aboutUs={aboutUs}
        testimonials={testimonials}
      />
      <HeroSection />
      <div ref={services}>
        <ServiceCard />
      </div>
      <div ref={aboutUs}>
        <AboutUs />
      </div>

      <WhyChooseUs />
      <div ref={testimonials}>
        <TestimonialSection />
      </div>

      <Footer />
    </div>
  );
};

export default App;
