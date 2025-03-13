import { PrivacyAndTerms } from "./footerComponents/PrivacyAndTerms";
import { SocialList } from "./footerComponents/SocialList";
import { Logo } from "../ui/Logo";
import { NavBar } from "../navBar/NavBar";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 h-full w-full py-14 bg-black">
      <div className="container h-full flex justify-between items-center">
        <Logo
          widthIcon={196}
          heightIcon={196}
          color={"text-white"}
          fontSize={"text-9xl"}
        />
        <NavBar isFooter />
        <div className="h-full">
          <SocialList />
        </div>
      </div>
      <PrivacyAndTerms />
    </div>
  );
};
