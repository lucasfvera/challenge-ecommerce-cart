import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
  width?: "default" | "full";
  customClasses?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  width = "default",
  customClasses = "",
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = "text-button-mobile md:text-button-desktop rounded-lg";

  const widthClasses = {
    default: "w-full lg:w-fit",
    full: "w-full",
  };

  const variantClasses = {
    primary: "text-white bg-[#585660] hover:bg-[#3E3C44] ",
    secondary: "border border-[#3B3B3B] text-[#3B3B3B] hover:bg-[#EEEEEE]",
    tertiary: "",
  };

  const sizeClasses = {
    sm: "px-6 py-2",
    md: "px-6 py-4",
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClasses[width],
    customClasses,
  ].join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
