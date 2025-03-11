"use client";

import { MySlider } from "../slider/Slider";
import { techStackIconsArray } from "@/content/techStackIconsArray";
import { Icon } from "../ui/Icon";

export const TechStack = () => {

  return (
    <section className="container flex flex-col justify-between items-start h-[547px] px-20 py-40">
      <h2 className="text-6xl font-semibold text-left text-black">
        Tech Stack
      </h2>
      <div className="relative w-full  ">
        <div className="absolute z-10 top-0 h-full bg-tech-stack_slider w-full">
          </div>
          <MySlider
            contentArray={techStackIconsArray}
            className=""
            config={{
              slidesPerView: 7,
              loop: true,
              freeMode: true,
              autoplay: {
                delay: 0,
              },
              speed: 6800,
            }}
            slide={(item) => <Icon id={item} width={130} height={60} />}
          />
      </div>
    </section>
  );
};
