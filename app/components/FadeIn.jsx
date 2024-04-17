"use client";
import { useInView } from 'react-intersection-observer';

export const FadeIn = ({ children }) => {
  const { ref, inView } = useInView({
    rootMargin: '-50px',
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`${inView ? "opacity-100" : "opacity-0 translate-y-[50%]"} duration-[1s]`}>
      {children}
    </div>
  );
};

export default FadeIn;
