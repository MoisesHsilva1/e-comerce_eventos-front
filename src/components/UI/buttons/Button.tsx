interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  textButton?: string;
}

const Button: React.FC<ButtonProps> = ({ className = "", textButton, type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={`${className} bg-[#7D8184] text-white rounded-sm p-2 hover:bg-gray-500`}
      {...props}
    >
      {textButton}
    </button>
  );
};

export default Button;
