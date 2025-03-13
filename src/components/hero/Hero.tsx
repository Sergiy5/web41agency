import dynamic from "next/dynamic";
import { Circle } from "../circle/Circle";
import { Button } from "../ui/Button";

const DynamicHeroAnimation = dynamic(
  () => import("./heroComponents/HeroAnimation").then((mod) => mod.HeroAnimation),
);

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="relative container flex flex-col items-center pt-[66px] pb-20 overflow-hidden w-full ">
        <Circle className="absolute z-0 -top-1 left-3 w-full max-w-[260px]" />
        <div className="relative flex gap-24">
          {/* Left side ============================================== */}
          <h1 className="w-full max-w-[760px] font-extrabold text-left text-[72px]">
            <span className="text-[#656973]/12">Custom</span>
            <span className="text-black"> Websites &amp; Web Apps – </span>
            <span className="text-[#656973]/12">Built to Perform</span>
          </h1>
          {/* Right side ============================================== */}
          <div className="flex flex-col justify-between items-start py-6">
            <p className="w-full max-w-[410px] opacity-80 text-lg text-left text-black">
              From sleek Webflow sites to full-stack JS solutions, we design,
              develop, and launch websites that grow.
            </p>
            <div className="flex justify-start items-center self-stretch ">
              <Button text="Free Consultation" fill />
              <Button text="View Projects" />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Slider */}
      <DynamicHeroAnimation />
    </div>
  );
};
