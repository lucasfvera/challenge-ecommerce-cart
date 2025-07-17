import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "secondaryDestroy" | "tertiary";
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
  const baseClasses =
    "text-button-mobile md:text-button-desktop rounded-lg disabled:bg-neutral-disabled";

  const widthClasses = {
    default: "w-full lg:w-fit",
    full: "w-full",
  };

  const variantClasses = {
    primary: "text-white bg-primary hover:bg-primary-hover ",
    secondary:
      "border border-neutral-dark text-neutral-dark hover:bg-neutral-light",
    secondaryDestroy: "border border-danger text-danger hover:bg-danger-hover",
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
