"use client";

import Image from "next/image";
import { Circle } from "../circle/Circle";
import { MySlider } from "../slider/Slider";
import { Button } from "../ui/Button";
import { heroImagesArray_1 } from "@/content/heroImagesArray";

export const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center gap-[88px] pt-[66px]  overflow-hidden ">
      <Circle className="absolute z-0 -top-1 left-3 w-[260px]" />
      <div className="relative flex gap-24">
        {/* Left side ============================================== */}
        <h1 className=" w-[760px] font-extrabold text-left text-[72px]">
          <span className="text-[#656973]/12">Custom</span>
          <span className="text-black"> Websites &amp; Web Apps – </span>
          <span className="text-[#656973]/12">Built to Perform</span>
        </h1>
        {/* Right side ============================================== */}
        <div className="flex flex-col justify-between items-start py-6">
          <p className=" w-[410px] opacity-80 text-lg text-left text-black">
            From sleek Webflow sites to full-stack JS solutions, we design,
            develop, and launch websites that grow.
          </p>
          <div className="flex justify-start items-center self-stretch ">
            <Button text="Free Consultation" fill />
            <Button text="View Projects" />
          </div>
        </div>
      </div>
      <div className="relative container flex  w-full h-[497px] bg-bg_hero overflow-hidden">
        <MySlider
          contentArray={heroImagesArray_1}
          config={{
            direction: "vertical",
            slidesPerView: 2,
            // spaceBetween: 10,
            freeMode: true,
            autoplay: {
              delay: 0,
            },
            loop: true,
            speed: 3800,
          }}
          className="w-full h-[636px]"
          slide={(item) => (
              <Image
                src={item}
                width={308}
                height={308}
                alt="hero image projects"
                className=""
              />
          )}
        />
      </div>
    </div>
  );
};
