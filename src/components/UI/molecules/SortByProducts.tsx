const SortByProducts = ({
  className,
  text,
}: {
  className?: string;
  text?: string;
}) => {
  return (
    <>
      <div className={`flex flex-row ${className}`}>
        <div
          className={`flex justify-start items-start bg-[#7D8184] w-5 h-10 rounded-md ${className}`}
        ></div>
        <div
          className={`flex justify-start items-center p-4 text-sm text-[#7D8184] font-semibold ${className}`}
        >
          {text}
        </div>
      </div>
    </>
  );
};
export default SortByProducts;
