interface ProductCardProps {
  image?: string;
  alt?: string;
  nameProduct?: string;
  price?: string;
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
    <>
      <div>
        <div className={`flex flex-row bg-[#F5F5F5] w-64 h-52 ${className}`}>
          <img className={className} src={image} alt={alt} />
        </div>
        <div className={`mt-4 ${className}`}>
          <h1>{nameProduct}</h1>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
