"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { techStackIconsArray } from "@/content/techStackIconsArray";
import { Icon } from "../ui/Icon";

const MySlider: React.FC = ( ) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="relative w-full mx-auto">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={7}
        loop={true} // Enables infinite looping
        loopPreventsSliding={true}
        // loopedSlides={7} // Adjust this based on number of slides
        // autoplay={{
        //   delay: 0, // 3s delay
        //   disableOnInteraction: false, // Keeps autoplay running after interaction
        // }}
        // freeModeMomentum={false} // Ensures smooth, consistent movement
        freeMode={true} // Removes snapping, allowing continuous motion
        speed={800}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {techStackIconsArray.map((icon, index) => (
          <SwiperSlide key={index}>
            <div className="p-8">
              <Icon id={icon} width={130} height={60} />
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <div className="p-6 bg-gray-200 rounded-lg">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-gray-300 rounded-lg">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-gray-400 rounded-lg">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-gray-400 rounded-lg">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-gray-400 rounded-lg">Slide 5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-gray-400 rounded-lg">Slide 6</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-gray-400 rounded-lg">Slide 7</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-gray-400 rounded-lg">Slide 8</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-gray-400 rounded-lg">Slide 9</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-gray-400 rounded-lg">Slide 10</div>
        </SwiperSlide>*/}
      </Swiper>

      {/* External Controls */}
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
    </div>
  );
};

export default MySlider;
