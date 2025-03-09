import { NavItem } from "./NavItem";

interface NavProps {
  children?: React.ReactNode;
}
export const Nav: React.FC<NavProps> = () => {
  
    const navList = [
    { link: "", text: "About Us" },
    { link: "", text: "Services" },
    { link: "", text: "Portfolio" },
    { link: "", text: "Contacts" },
    { link: "", text: "Blog" },
  ];
    
  return (
    <ul className="flex justify-start items-center gap-6">
      {navList.map((item, index) => (
        <li key={index}>
          <NavItem link={item.link} text={item.text} isActive={false} />
        </li>
      ))}
      <li>
        <button
          type="button"
          aria-label="Free Quote"
          className="flex justify-center items-center gap-2.5 px-4 py-2 rounded-[100px] bg-black"
        >
          <p className="text-base text-left text-white">Free Quote</p>
        </button>
      </li>
    </ul>
  );
};
