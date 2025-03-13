import React from "react";

interface IconProps {
  id: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  id,
  width = "100%",
  height = "auto",
  className,
}) => {

  return (
    <svg
      width={width}
      height={height}
      aria-label={id}
      className={` transition-all easy-in-out ${className}`}
    >
      <use xlinkHref={`/icons/sprite.svg#${id}`} />
    </svg>
  );
};
