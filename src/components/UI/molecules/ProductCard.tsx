interface ProductCardProps {
  _id?: number;
  image?: string;
  alt?: string;
  nameProduct?: string;
  price?: number;
  className?: string;
  onClick?: () => void;
}

const ProductCard = ({
  _id,
  image,
  alt,
  nameProduct,
  price,
  className,
  onClick,
}: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center p-4 rounded-lg hover:bg-gray-200 shadow-md ${className} w-70 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg`}
    >
      <div className="w-full h-48 flex justify-center items-center overflow-hidden  ">
        <img
          className="w-full bg-[#F5F5F5] h-full object-cover"
          src={image || "/placeholder.png"}
          alt={alt || "imagem do produto"}
        />
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-lg font-semibold">{nameProduct}</h1>
        <p className="text-gray-700 text-md">R$ {price}</p>
        <p>{_id}</p>
      </div>
    </div>
  );
};

export default ProductCard;
