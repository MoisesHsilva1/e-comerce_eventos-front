import { useNavigate } from "react-router";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import FieldCartProduct from "../../UI/molecules/FieldCartProduct";
import CardCartConfirmation from "../../UI/molecules/CardCartConfirmation";
import Input from "../../UI/atoms/Inputs/Input";
import Button from "../../UI/atoms/buttons/Button";

function CartProducts() {
  const navigate = useNavigate();
  const { cartItems, removeItem, clearCart } = useContext(CartContext);

  const calculatePriceTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.qtd, 0);
  };


  const total = calculatePriceTotal();

  return (
    <main className="p-4">
      <section className="flex justify-start items-start p-10 mx-10">
        <h1 className="text-gray-500 font-bold text-2xl">Carrinho</h1>
      </section>

      <section className="flex justify-center items-center">
        <article>
          {cartItems.map((item, index) => (
            <FieldCartProduct
              key={index}
              productName={item.name}
              price={item.price}
              qtd={item.qtd}
              total={item.price * item.qtd}
              onClick={() => removeItem(item.id)}
            />

          ))}
          <div className="flex justify-between gap-2">
            <Button
              className=" border-1 bg-white border-gray-400"
              onClick={() => navigate("/")}
              textButton="Voltar para loja"
            />
            <Button
              className="border-1 bg-white border-gray-400 hover:bg-red-500"
              onClick={() => clearCart()}
              textButton="Limpar Tudo"
            />
          </div>
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
          <CardCartConfirmation
            subTotal={total}
            delivery={0}
            total={total}
          />
        </section>
      </section>
    </main>
  );
}

export default CartProducts;
