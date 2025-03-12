// import Link from "next/link";
// import { Icon } from "../ui/Icon";
import { PrivacyAndTerms } from "./footerComponents/PrivacyAndTerms";
import { NavFooter } from "./footerComponents/NavFooter";
import { footerNavArray } from "@/content/footerNavArray";
import { SocialList } from "./footerComponents/SocialList";
import { Logo } from "../ui/Logo";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 w-full py-14 bg-black">
      <div className="container flex justify-between items-start">
       
        <Logo
          widthIcon={196}
          heightIcon={196}
          color={"text-white"}
          fontSize={"text-9xl"}
        />

        <NavFooter navList={footerNavArray} />

        <SocialList />
      </div>
      <PrivacyAndTerms />
    </div>
  );
};
