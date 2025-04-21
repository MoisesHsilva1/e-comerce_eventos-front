import Button from "../atoms/buttons/Button";
import { useNavigate } from "react-router";

interface CartDetails {
  productName?: string;
  price?: number;
  qtd?: number;
  total?: number;
}

const FieldCartProduct = ({ productName, price, qtd, total }: CartDetails) => {
  const navigate = useNavigate();

  return (
    <>
      <main className="w-294 h-full">
        <article className="flex flex-col justify-center h-16 bg-gray-50 rounded shadow-sm mb-8">
          <div className="flex flex-row justify-between p-2">
            <h1>Produto</h1>
            <h1>Preço</h1>
            <h1>Quantidade</h1>
            <h1>Subtotal</h1>
          </div>
        </article>
        <article className="flex flex-col justify-center h-16 mb-4 rounded shadow-sm">
          <div className="flex flex-wrap justify-between p-2">
            <h1>{productName}</h1>
            <h1>R${price}</h1>
            <h1>{qtd}</h1>
            <h1>R${total}</h1>
          </div>
        </article>
        <section className="py-2 mt-6">
          <Button
            className="border-1 bg-white border-gray-400"
            onClick={() => navigate("/")}
            textButton="Voltar para loja"
          />
        </section>
      </main>
    </>
  );
};
export default FieldCartProduct;
