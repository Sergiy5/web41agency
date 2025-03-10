interface CircleProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
}
export const Circle: React.FC<CircleProps> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <div
      className={`bg-accent rounded-full flex flex-col justify-center items-center aspect-square ${className}`}
    >
      {" "}
      {title && <h4>{title}</h4>} {description && <p>{description}</p>}{" "}
      {children}{" "}
    </div>
  );
};