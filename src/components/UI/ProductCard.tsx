interface ProductCardProps {
  image?: string;
  alt?: string;
  nameProduct?: string;
  price?: number;
  className?: string;
}

const ProductCard = ({
  image,
  alt,
  nameProduct,
  price,
  className,
}: ProductCardProps) => {
  return (
    <div
      className={`flex flex-col items-center  p-4 rounded-lg shadow-md ${className} w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg`}
    >
      <div className="w-full h-48 flex justify-center items-center overflow-hidden  ">
        <img
          className="w-full bg-[#F5F5F5] h-full object-cover"
          src={image}
          alt={alt}
        />
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-lg font-semibold">{nameProduct}</h1>
        <p className="text-gray-700 text-md">R$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
