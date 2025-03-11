import { About } from "@/components/about/About";
import { Faq } from "@/components/faq/Faq";
import { Hero } from "@/components/hero/Hero";
import { HowItWorks } from "@/components/howItWorks/HowItWorks";
import { Services } from "@/components/services/Services";
// import {MySlider} from "@/components/slider/Slider";
import { TechStack } from "@/components/techStack/TechStack";
import { WhyChoose } from "@/components/whyChoose/WhyChoose";
import { howItWorksContent } from "@/content/howItWorksContent";
import { whyChooseContent } from "@/content/whyChooseContent";
// import HorizontalSlider from "@/components/slider/Slider";

export default function Home() {
  return (
    <div className="max-w-[1440px] items-center justify-items-center pb-40 gap-16">
      <Hero />
      <About />
      <Services />
      {/* <MySlider /> */}
      <TechStack />
      <HowItWorks content={howItWorksContent} />
      <Faq />
      <WhyChoose content={whyChooseContent} />

      {/* <HorizontalSlider /> */}
    </div>
  );
}
