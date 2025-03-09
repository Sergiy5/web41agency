import Link from "next/link";

interface NavItemProps {
  link: string;
  text: string;
  isActive: boolean;
}
export const NavItem: React.FC<NavItemProps> = ({ link, text, isActive }) => {
  return (
    <div className="flex flex-col justify-between">
      <Link
        href={link}
        className="flex justify-center items-center text-base text-left text-black px-4 py-2"
      >
        {text}
      </Link>
      {isActive && <div className=""></div>}
    </div>
  );
};
