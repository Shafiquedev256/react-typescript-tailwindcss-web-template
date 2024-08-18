import { useRef } from "react";

export const useScroll = () => {
  const services = useRef<HTMLDivElement | null>(null);
  const testimonials = useRef<HTMLDivElement | null>(null);
  const aboutUs = useRef<HTMLDivElement | null>(null);

  return { services, testimonials, aboutUs };
};
