import { HowItWorksItem, HowItWorksItemProps } from "./howItWorksItem";

interface HowItWorksListProps {
  howItWorksArray: HowItWorksItemProps[];
}
export const HowItWorksList: React.FC<HowItWorksListProps> = ({
  howItWorksArray,
}) => {

  return (
    <ul className="flex flex-wrap justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
      {howItWorksArray.map((item) => (
        <li key={item.logoId}>
          <HowItWorksItem
            logoId={item.logoId}
            title={item.title}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};
