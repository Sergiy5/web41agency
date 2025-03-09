import { Nav } from "./headerComponents/Nav";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center max-w-[1280px] mx-auto w-full pl-4 pr-2 py-2 rounded-[100px] bg-[#ededee]/30 backdrop-blur-[100px]">
      {/* LOGO */}
      <div className="flex justify-start items-center gap-[5px]">
        <svg
          width={30}
          height={30}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[30px] h-[30px]"
          preserveAspectRatio="none"
        >
          <rect width={30} height={30} rx={15} fill="black" />
          <path
            d="M12.0244 14.4783L9.70789 14.478L9.70667 24.5547L16.6213 19.3425L15.1822 17.5035L12.312 19.631L12.0237 19.631L12.0244 14.4783Z"
            fill="white"
          />
          <path
            d="M9.70898 5.44373L9.70799 13.6672L12.0245 13.6675L12.0246 12.5093L12.2563 12.5093L20.4121 22.7794L22.2909 21.2874L9.70898 5.44373Z"
            fill="white"
          />
          <path
            d="M18.3752 15.1159L20.6086 13.4461L21.9957 15.3014L19.7816 16.9517L18.3752 15.1159Z"
            fill="white"
          />
        </svg>
        <p className="text-xl text-left text-black">web41</p>
      </div>
      <nav>
<Nav />
      </nav>
    </div>
  );
};
