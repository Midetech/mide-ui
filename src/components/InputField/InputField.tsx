import { cn } from "@lib/utils";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: "text" | "password" | "email" | "number";
  label?: string;
}
const InputField = ({
  className,
  type = "text",
  label,
  ...rest
}: InputProps) => {
  return (
    <div className={cn(`${className} flex flex-col`)}>
      <label className="text-lg">{label}</label>
      <input
        type={type}
        {...rest}
        className={cn(
          `${className} w-full h-12 border border-gray-300 rounded-md px-4 mt-2 `
        )}
      />
    </div>
  );
};
export default InputField;
