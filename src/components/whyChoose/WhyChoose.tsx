import { Button } from "../ui/Button";
import { WhyChooseList } from "./whyChooseComponents/WhyChooseList";

export interface IWhyChooseContent {
  sectionTitle: string;
  textButton: string;
  mainContent: {
    iconId: string;
    title: string;
    description: {
      text: string;
      highlight: boolean;
    }[];
  }[];
}

interface WhyChooseProps {
  content: IWhyChooseContent;
}
export const WhyChoose: React.FC<WhyChooseProps> = ({ content }) => {
  const { sectionTitle, textButton, mainContent } = content;

  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-10 px-20 py-40">
      <h2 className="self-stretch flex-grow-0 flex-shrink-0 w-[1280px] text-6xl font-semibold text-left text-black">
        {sectionTitle}
      </h2>
      <WhyChooseList mainContent={mainContent} />
      <Button text={textButton} fill />
    </div>
  );
};
