import { useNavigate } from "react-router";
import Divider from "../atoms/Divider";
import Button from "../atoms/buttons/Button";
import ButtonAmount from "../atoms/buttons/ButtonAmount";

interface ProductCardProps {
  title?: string;
  description?: string;
  price?: number;
}

const ProductCardDetails = ({
  title,
  description,
  price,
}: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <>
      <main className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-4 p-6 lg:p-12 pb-4">
        <article className="flex flex-col lg:flex-row gap-4">
          <div className="flex justify-end items-start flex-row lg:flex-col gap-2">
            <figure className="bg-gray-100 w-24 h-24 lg:w-30 lg:h-30"></figure>
            <figure className="bg-gray-100 w-24 h-20 lg:w-30 lg:h-28"></figure>
            <figure className="bg-gray-100 w-24 h-20 lg:w-30 lg:h-28"></figure>
          </div>
          <figure className="bg-gray-100 w-full h-60 lg:w-100 lg:h-90"></figure>
        </article>
        <section className="flex flex-col gap-2 p-6 lg:p-12 w-full lg:w-auto">
          <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
          <p className="text-lg">R$ {price}</p>
          <p>{description}</p>
          <Divider />
          <span className="flex flex-col sm:flex-row gap-4 mt-2">
            <ButtonAmount />
            <Button
              textButton="Comprar"
              className="w-full text-white sm:w-36"
              onClick={() => navigate("/carrinho")}
            />
          </span>
        </section>
      </main>
    </>
  );
};

export default ProductCardDetails;
