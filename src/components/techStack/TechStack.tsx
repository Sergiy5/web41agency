"use client";

import { MySlider } from "../slider/Slider";
import { techStackIconsArray } from "@/content/techStackIconsArray";
import { Icon } from "../ui/Icon";

export const TechStack = () => {

  return (
    <section className=" flex-col justify-between items-start h-[547px] py-40">
      <h2 className="container text-6xl font-semibold text-left text-black">
        Tech Stack
      </h2>
      <div className="relative w-full ">
        <div className="absolute flex z-10 top-0 h-full gradient-techstack_slider w-full " />
        <MySlider
          contentArray={techStackIconsArray}
          className="w-full max-w-[1440px]"
          config={{
            slidesPerView: 7,
            spaceBetween: 16,
            loop: true,
            // freeMode: true,
            autoplay: {
              delay: 0,
            },
            speed: 6800,
            breakpoints: {
              320: { slidesPerView: 2 }, // For mobile screens
              480: { slidesPerView: 3 }, // Small tablets
              768: { slidesPerView: 4 }, // Tablets
              1024: { slidesPerView: 6 }, // Small laptops
              1280: { slidesPerView: 7 }, // Large screens
            },
          }}
          slide={(item) => <Icon id={item} className="max-w-[130px] w-full " />}
        />
      </div>
    </section>
  );
};
