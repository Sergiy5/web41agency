import { Nav } from "./headerComponents/Nav";
import { Logo } from "../ui/Logo";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center max-w-[1280px] mx-auto w-full pl-4 pr-2 py-2 rounded-[100px] bg-bg_header/30 backdrop-blur-[100px]">
      <Logo />

      <nav>
        <Nav />
      </nav>
    </div>
  );
};
