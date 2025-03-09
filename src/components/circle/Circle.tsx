interface CircleProps {
    title?: string;
    description?: string;
    childern?: React.ReactNode;
    className?: string;
}
export const Circle: React.FC<CircleProps> = ({
  title,
  description,
  childern,
  className,
}) => {
  return (
    <div
      className={`bg-accent rounded-full flex flex-col justify-center items-center aspect-square ${className}`}
    >
      {" "}
      {title && <h4>{title}</h4>} {description && <p>{description}</p>}{" "}
      {childern}{" "}
    </div>
  );
};