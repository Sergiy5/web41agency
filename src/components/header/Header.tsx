import { NavBar } from "../navBar/NavBar";
import { Logo } from "../ui/Logo";

export const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center max-w-[1280px] w-full mx-auto pl-4 pr-2 py-2 rounded-[100px] bg-bg_header/30 backdrop-blur-[100px]">
        <Logo />

        <nav className="lg:max-w-[670px] w-full xl:max-w-[793px]">
          <NavBar />
        </nav>
      </div>
    </div>
  );
};
