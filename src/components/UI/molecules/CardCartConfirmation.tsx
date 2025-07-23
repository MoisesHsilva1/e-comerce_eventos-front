import Divider from "../atoms/Divider";
import Button from "../atoms/buttons/Button";

interface CardCartDetails {
  subTotal: number;
  delivery: number;
  total: number;
}

const CardCartConfirmation = ({
  subTotal,
  delivery,
  total,
}: CardCartDetails) => {
  return (
    <>
      <main className="flex flex-col border-1 w-60 h-full p-4 gap-2">
        <section className="mb-2">
          <h1 className="font-bold">Total do carrinho</h1>
        </section>
        <section className="flex flex-row justify-between">
          <p>Subtotal:</p>
          <p>R$ {subTotal}</p>
        </section>
        <Divider className="border-gray-300" />
        <section className="flex flex-row justify-between">
          <p>Entrega:</p>
          <p>{delivery}</p>
        </section>
        <Divider className="border-gray-300" />
        <section className="flex flex-row justify-between">
          <p>Total:</p>
          <p>R$ {total}</p>
        </section>
        <section className="flex justify-center items-center my-2">
          <Button textButton="Confirmar comprar" className="text-white" />
        </section>
      </main>
    </>
  );
};
export default CardCartConfirmation;
