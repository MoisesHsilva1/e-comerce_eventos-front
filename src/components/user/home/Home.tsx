import Divider from "../../UI/Divider";
import SortByProducts from "../../UI/SortByProducts";
import ProductCard from "../../UI/ProductCard";
import Button from "../../UI/buttons/Button";
import useAllProducts from "../../../hooks/useAllProducts";

function Home() {
  const products = [
    { image: "", description: "Jogo de talhares", price: "R$950" },
    { image: "", description: "Jogo de talhares", price: "R$950" },
    { image: "", description: "Jogo de talhares", price: "R$950" },
    { image: "", description: "Jogo de talhares", price: "R$950" },
  ];

  return (
    <>
      <main>
        <section>
          <article className="flex justify-start flex-col ml-4">
            <SortByProducts text="Este mês" />
            <div className="flex justify-between">
              <h1 className="text-4xl font-semibold">Mais vendidos</h1>
              <Button textButton="Ver todos" className=" w-44 h-10 mr-14" />
            </div>
          </article>
          <figure className="flex justify-start items-start flex-row m-4 gap-6">
            {products.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                alt=""
                nameProduct={item.description}
                price={item.price}
              />
            ))}
          </figure>
          <Divider className="my-10" />
          <article className="flex justify-start flex-col ml-4">
            <SortByProducts text="Outros produtos" />
            <div className="flex justify-between">
              <h1 className="text-4xl font-semibold">Explore os produtos</h1>
            </div>
          </article>
          <figure className="flex justify-start items-start flex-row m-4 gap-6">
            {products.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                alt=""
                nameProduct={item.description}
                price={item.price}
              />
            ))}
          </figure>
          <div className="flex justify-center items-center my-20">
            <Button
              textButton="Ver todos os produtos"
              className="w-70 h-14"
            />
          </div>
        </section>
      </main>
    </>
  );
}
export default Home;
