const Divider = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={`border-t w-full border-gray-200 ${className}`}
      ></div>
    </>
  );
};
export default Divider;
