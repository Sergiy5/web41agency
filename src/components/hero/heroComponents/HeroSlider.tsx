// import Image from "next/image";
// import { MySlider } from "@/components/slider/Slider";
import {
  heroImagesArray_1,
  heroImagesArray_2,
  heroImagesArray_3,
  heroImagesArray_4,
} from "@/content/heroImagesArray";
import { HeroAnimation } from "./HeroAnimation";

export const HeroSlider: React.FC = () => {
  return (
    <div className=" bg-bg_hero w-lvw">
      <div className="relative container gap-4 h-[500px]">
        <HeroAnimation arraySrc={heroImagesArray_1} speed={85} />

        <HeroAnimation arraySrc={heroImagesArray_2} speed={80} revers={true} />

        <HeroAnimation arraySrc={heroImagesArray_3} speed={95} />

        <HeroAnimation arraySrc={heroImagesArray_4} speed={90} revers={true} />
      </div>
    </div>
  );
};
