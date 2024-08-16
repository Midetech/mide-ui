import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  color?: string;
  bgColor?: string;
  variant?: "success" | "warning" | "danger" | "primary";
}
const Button = ({
  children,
  size,
  className,
  type = "button",
  color = "text-white",
  bgColor = "bg-slate-400",
  variant = "primary",
  ...props
}: ButtonProps) => {
  const buttonSize = (size?: string) => {
    switch (size) {
      case "sm":
        return "h-[30px] min-w-[100px] text-sm";
      case "md":
        return "h-[45px] min-w-[150px] text-base";
      case "lg":
        return "h-[60px] min-w-[200px] text-lg";
      default:
        return "h-[45px] min-w-[150px] text-base";
    }
  };

  const setVariant = (variant?: string) => {
    switch (variant) {
      case "success":
        return "bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400";
      case "warning":
        return "bg-yellow-400 text-black hover:bg-yellow-500 disabled:bg-yellow-400";
      case "danger":
        return "bg-red-400 text-white hover:bg-red-500 disabled:bg-red-400";
      case "primary":
        return "bg-blue-400 text-white hover:bg-blue-500 disabled:bg-blue-400";
      default:
        return "bg-slate-400 text-white hover:bg-slate-500 disabled:bg-slate-400";
    }
  };
  return (
    <button
      type={type}
      {...props}
      className={cn(
        `${className} ${buttonSize(size)} ${color} ${bgColor} ${setVariant(
          variant
        )} min-w-[150px]  rounded-4px border-none  text-base shadow-sm`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
