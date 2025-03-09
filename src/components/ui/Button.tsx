interface ButtonProps {
  width?: string;
  height?: string;
  fill?: boolean;
  bg?: string;
  text: string;
  children?: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({
  text,
  width = "w-[220px]",
  height = "h-14",
  fill,
  bg = "bg-black",
  children,
}) => {
    
  return (
    <button
      type="button"
      aria-label={text + "button"}
      className={`flex justify-center items-center gap-2.5 px-6 py-4 rounded-full cursor-pointer
              text-lg font-bold ${width} ${height}
             
             ${fill ? `${bg} text-white` : "bg-red text-black"}  `}
    >
      {children}
      {text}
    </button>
  );
};
