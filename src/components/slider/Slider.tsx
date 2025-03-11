"use client";

// import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
// import { Swiper as SwiperCore } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
// import { Icon } from "../ui/Icon";
// import { techStackIconsArray } from "@/content/techStackIconsArray";

interface MySliderProps<T> {
  contentArray: T[];
  slide: (item: T, index: number) => React.ReactNode;
  config: object;
  className?: string;
}

export const MySlider =<T,> ({
  contentArray,
  slide,
  config,
  className,
}: MySliderProps<T>) => {
  // const swiperRef = useRef<SwiperCore | null>(null);
// console.log("config", config);
  return (
    <div className="relative w-full mx-auto">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        // spaceBetween={20}
        // slidesPerView={7}
        // loop={true}
        // freeMode={true}
        // autoplay={{
        //   delay: 0,
        // }}
        // speed={6800}
        {...config}
        className={`${className} mySwiper w-full`}
      >
        {contentArray.map((item: T, index: number) => (
          <SwiperSlide key={index}>
            {/* <div className="p-8 w-40"> */}
            {slide(item, index)}
            {/* <Icon id={item} width={130} height={60} /> */}
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


 {
   /* <div className="flex justify-center gap-4 mt-4">
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
      </div> */
 }

// interface CustomSwiperProps {
//   slidesArray: ;
// slide: React.ReactNode[]
//   config?: object;
//   className?: string;
// }

// const CustomSwiper: React.FC<CustomSwiperProps> = ({
//   slides,
//   config,
//   className,
// }) => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       {...config}
//       className={className}
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>{slide}</SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// Vertical setup
/* {
    speed:18000,
		direction: 'horizontal',
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
		zoom: true,
		keyboard: 
		{
			enabled: true,
			onlyInViewport: false,
		},
		mousewheel: 
		{
			invert: true,
		},
    autoplay: 
    {
      delay: 0,
    },
    loop: true,
    slidesPerView: 3,
    freeMode: true,
	}); */
