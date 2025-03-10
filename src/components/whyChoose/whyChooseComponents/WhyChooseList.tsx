import { WhyChooseItem } from "./WhyChooseItem";

interface HowItWorksList {
  mainContent: {
    iconId: string;
    title: string;
    description: {
      text: string;
      highlight: boolean;
    }[];
  }[];
}
export const WhyChooseList: React.FC<HowItWorksList> = ({ mainContent }) => {
  return (
    <ul className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
      {mainContent.map((item) => (
        <li key={item.iconId}>
          <WhyChooseItem
            iconId={item.iconId}
            title={item.title}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};
