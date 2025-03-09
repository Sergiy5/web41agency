import { About } from "@/components/about/About";
import { Faq } from "@/components/faq/Faq";
import { Hero } from "@/components/hero/Hero";
import { HowItWorks } from "@/components/howItWorks/HowItWorks";
import { Services } from "@/components/services/Services";
import { TechStack } from "@/components/techStack/TechStack";
import { WhyChoose } from "@/components/whyChoose/WhyChoose";
// import HorizontalSlider from "@/components/slider/Slider";

export default function Home() {
  return (
    <div className="max-w-[1440px] items-center justify-items-center pb-40 gap-16">
      <Hero />
      <About />
      <Services />
      <TechStack />
      <HowItWorks />
      <Faq />
      <WhyChoose />
      
      {/* <HorizontalSlider /> */}
    </div>
  );
}
