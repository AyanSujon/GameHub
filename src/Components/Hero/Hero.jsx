import React, { useEffect, useRef } from "react";



const Hero = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const scrollInterval = 3000; // 3 seconds

    const handleScroll = () => {
      if (carousel) {
        const scrollStep = carousel.offsetWidth; // width of one slide
        if (carousel.scrollLeft + scrollStep >= carousel.scrollWidth) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(handleScroll, scrollInterval);
    return () => clearInterval(interval);
  }, []);



 
  return (

    <div className="w-full h-[70%] flex justify-center items-center overflow-hidden">
      <div ref={carouselRef} className="carousel w-full h-full">
        <div className="carousel-item w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/ZRTDtG3p/slider1.webp"
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/1YRVF1vW/slider2.webp"
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/1YRVF1vW/slider3.webp"
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
        </div>
        <div className="carousel-item w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/1YRVF1vW/slider4.webp"
            className="w-full h-full object-cover"
            alt="Slide 4"
          />
        </div>
        <div className="carousel-item w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/1YRVF1vW/slider5.webp"
            className="w-full h-full object-cover"
            alt="Slide 5"
          />
        </div>
      </div>
    </div>

  );
};

export default Hero;
