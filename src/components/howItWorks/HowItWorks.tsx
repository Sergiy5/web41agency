import { HowItWorksItemProps } from "./howItWorksComponents/howItWorksItem";
import { HowItWorksList } from "./howItWorksComponents/HowItWorksList";

interface HowItWorksProps {
  content: {
    sectionTitle: string;
    mainContent: HowItWorksItemProps[];
  };
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ content }) => {
  const { sectionTitle, mainContent } = content;

  return (
    <div className="container flex flex-col justify-start items-start bg-white gap-10 py-40">
      <h2 className="self-stretch flex-grow-0 flex-shrink-0 w-[1280px] text-6xl font-semibold text-left text-black">
        {sectionTitle}
      </h2>
      <HowItWorksList howItWorksArray={mainContent} />
    </div>
  );
};
