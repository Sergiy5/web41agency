"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

interface MySliderProps<T> {
  contentArray: T[];
  slide: (item: T, index: number) => React.ReactNode;
  config: object;
  buttons?: boolean;
  className?: string;
}

export const MySlider = <T,>({
  contentArray,
  slide,
  config,
  buttons,
  className,
}: MySliderProps<T>) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="relative w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        // spaceBetween={20}
        {...config}
        className={`${className}`}
      >
        {contentArray.map((item: T, index: number) => (
          <SwiperSlide key={index}>

            {slide(item, index)}
            
          </SwiperSlide>
        ))}
      </Swiper>
      {buttons && (
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => swiperRef.current?.slideNext()}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};


// Vertical setup
/* {
    speed:18000,
		direction: 'horizontal',
    autoplay: 
    {
      delay: 0,
    },
    loop: true,
    slidesPerView: 3,
    freeMode: true,
    zoom: true,
    
		navigation: 
		{
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		pagination: 
		{
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		keyboard: 
		{
			enabled: true,
			onlyInViewport: false,
		},
		mousewheel: 
		{
			invert: true,
		},
	}); */
