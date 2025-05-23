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

const Input = ({
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
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        name={name}
        onClick={onClick}
        id={id}
        onKeyDown={onKeyDown}
        className={`${className} w-[330px] h-[50px] bg-[#F5F5F5] border rounded-sm border-gray-300 focus:border-gray-600 focus:ring-2 focus:ring-gray-600 px-4`}
        type={typeInput}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        pattern={pattern}
      />
    </>
  );
};
export default Input;
