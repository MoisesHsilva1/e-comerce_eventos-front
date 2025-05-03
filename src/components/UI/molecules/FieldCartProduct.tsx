import Button from "../atoms/buttons/Button";

interface CartDetails {
  productName?: string;
  price?: number;
  qtd?: number;
  total?: number;
  onClick: () => void;
}

const FieldCartProduct = ({
  productName,
  price,
  qtd,
  total,
  onClick,
}: CartDetails) => {
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
      </main>
      <section className="flex justify-end py-2 mt-6">
        <Button
          className="border-1 bg-red-500 text-white hover:bg-red-400 border-gray-400"
          onClick={onClick}
          textButton="Remover"
        />
      </section>
    </>
  );
};
export default FieldCartProduct;
