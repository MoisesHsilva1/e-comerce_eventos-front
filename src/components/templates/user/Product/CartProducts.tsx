import FieldCartProduct from "../../../UI/molecules/FieldCartProduct";
import CardCartConfirmation from "../../../UI/molecules/CardCartConfirmation";
import Input from "../../../UI/atoms/Inputs/Input";
import Button from "../../../UI/atoms/buttons/Button";

function CartProducts() {
  return (
    <>
      <main className="p-4">
        <section className="flex justify-start items-start p-10 mx-10">
          <h1 className="text-gray-500 font-bold text-2xl">Carrinho</h1>
        </section>
        <section className="flex justify-center items-center">
          <article>
            <FieldCartProduct
              productName="Monitor"
              price={10}
              qtd={1}
              total={100}
            />
          </article>
        </section>
        <section className="flex justify-between mx-8 p-10">
          <section className="flex justify-start items-start">
            <span className="flex gap-2">
              <Input typeInput="number" placeholder="Digite seu CEP" />
              <Button textButton="Buscar" className="text-white" />
            </span>
          </section>
          <section className="flex justify-end items-end">
            <CardCartConfirmation subTotal={10} delivery={100} total={100} />
          </section>
        </section>
      </main>
    </>
  );
}
export default CartProducts;
