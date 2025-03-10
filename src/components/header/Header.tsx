import Link from "next/link";
import { Icon } from "../ui/Icon";
import { Nav } from "./headerComponents/Nav";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center max-w-[1280px] mx-auto w-full pl-4 pr-2 py-2 rounded-[100px] bg-[#ededee]/30 backdrop-blur-[100px]">
      {/* LOGO */}
      <Link
        href="/"
        className="flex justify-center items-center"
        aria-label="Logo link"
      >
        <Icon id="icon-logo" width={30} height={30} />
        <p className="text-[20px] font-medium text-black ml-2">web41</p>
      </Link>
      <nav>
        <Nav />
      </nav>
    </div>
  );
};
