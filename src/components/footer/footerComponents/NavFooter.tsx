interface NavFooterProps {
    navList: string[];
}

export const NavFooter:React.FC<NavFooterProps> = ({ navList }) => {

    return (
      <ul className="flex flex-col justify-start items-start gap-4">
        {navList.map((item, index) => (
          <li
            key={index}
            className="flex justify-center items-center text-base text-white"
          >
            <p className=" ">{item}</p>
          </li>
        ))}
      </ul>
    );
}