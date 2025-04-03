interface InputProps {
  label?: string;
  typeInput?: "text" | "email" | "password" | "number";
  value?: string;
  placeholder?: string;
  className?: string;
  pattern?: string;
  htmlFor?: string;
  id?: string;
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
  className = "w-[330px] h-[50px] bg-[#F5F5F5] border rounded-sm border-gray-300 focus:border-black focus:ring-2 focus:ring-black px-4",
}: InputProps) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        onClick={onClick}
        id={id}
        onKeyDown={onKeyDown}
        className={className}
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
