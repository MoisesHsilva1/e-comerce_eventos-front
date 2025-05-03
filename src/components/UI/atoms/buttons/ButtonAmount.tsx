
interface ButtonAmountProps {
  className?: string;
  count?: number;
  setCountUp: () => void;
  setCountDown: () => void;
}

const ButtonAmount = ({ className = "", count, setCountDown, setCountUp }: ButtonAmountProps) => {
  // const [count, setCount] = useState(0);

  return (
    <section
      className={`flex items-center border border-gray-500 rounded w-36 ${className}`}
    >
      <button
        onClick={setCountDown}
        className="w-10 h-10 flex justify-center items-center border-r border-gray-600"
      >
        –
      </button>

      <p className="flex-1 text-center">{count}</p>

      <button
        onClick={setCountUp}
        className="w-10 h-10 flex justify-center items-center bg-[#7D8184] text-white border-l border-gray-600"
      >
        +
      </button>
    </section>
  );
};

export default ButtonAmount;
