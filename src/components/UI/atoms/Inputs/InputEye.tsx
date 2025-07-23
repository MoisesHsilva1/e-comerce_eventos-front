import { useState } from "react";
import IconOpenEye from "../Icons/IconOpenEye";
import IconCloseEye from "../Icons/IconClose";

interface InputProps {
  label?: string;
  typeInput?: "text" | "email" | "password" | "number";
  value?: string;
  placeholder?: string;
  className?: string;
  pattern?: string;
  htmlFor?: string;
  id?: string;
  name?: string;
  onClick?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputEye = ({
  label,
  typeInput,
  id,
  htmlFor,
  value,
  placeholder,
  onChange,
  onClick,
  pattern,
  onKeyDown,
  name,
  className = "",
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const actualType =
    typeInput === "password" && showPassword ? "text" : typeInput;

  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor}>{label}</label>
      <div className="relative flex items-center">
        <input
          name={name}
          onClick={onClick}
          id={id}
          onKeyDown={onKeyDown}
          className={`${className} h-[50px] w-[330px] bg-[#F5F5F5] border rounded-sm border-gray-300 focus:border-gray-600 focus:ring-2 focus:ring-gray-600 px-4 pr-10 py-2`}
          type={actualType}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          pattern={pattern}
        />
        {typeInput === "password" && (
          <div
            className="absolute right-16 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IconCloseEye /> : <IconOpenEye />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputEye;
