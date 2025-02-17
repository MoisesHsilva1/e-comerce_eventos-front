const Button = ({ className, textButton }: { className?: string, textButton?: string }) => {
  return (
    <>
      <button
        className={`${className} bg-[#7D8184] text-white rounded-sm p-2 hover:bg-gray-500 `}
      >
        {textButton}
      </button>
    </>
  );
};
export default Button;
