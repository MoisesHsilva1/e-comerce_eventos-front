import { useState } from "react";
import Divider from "../../UI/Divider";
import SortByProducts from "../../UI/SortByProducts";
import ProductCard from "../../UI/ProductCard";
import Button from "../../UI/buttons/Button";
import useAllProducts from "../../../hooks/useAllProducts";

function Home() {
  const [allProducts, setAllProducts] = useState(4);
  const [bestProducts, setBestProducts] = useState(4);
  const { products, isLoading } = useAllProducts();

  const handleBestSellers = () => {
    setBestProducts((prev) => prev + 2);
  };

  const handleExploreProducts = () => {
    setAllProducts((prev) => prev + 2);
  };

  return (
    <>
      <main className="p-4">
        <section>
          <article className="flex flex-col ml-4 md:ml-0">
            <SortByProducts text="Este mês" />
            <div className="flex justify-between items-center flex-wrap">
              <h1 className="text-2xl md:text-4xl font-semibold">Mais vendidos</h1>
              {allProducts < products.length && (
                <Button
                  textButton="Ver todos"
                  className="w-32 md:w-44 h-10 mr-4 md:mr-14"
                  onClick={handleBestSellers}
                />
              )}
            </div>
          </article>
          <figure className="flex flex-wrap overflow-auto gap-4 p-2 md:p-4">
            {isLoading && <h1>Carregando...</h1>}
            {products.slice(0, bestProducts).map((item, index) => (
              <ProductCard
                key={index}
                alt=""
                nameProduct={item.name}
                price={item.price}
              />
            ))}
          </figure>
          <Divider className="my-10" />
          <article className="flex flex-col ml-4 md:ml-0">
            <SortByProducts text="Outros produtos" />
            <div className="flex justify-between items-center flex-wrap">
              <h1 className="text-2xl md:text-4xl font-semibold">Explore os produtos</h1>
            </div>
          </article>
          <figure className="flex flex-wrap overflow-auto gap-4 p-2 md:p-4">
            {isLoading && <h1>Carregando...</h1>}
            {products.slice(0, allProducts).map((item, index) => (
              <ProductCard
                key={index}
                alt=""
                nameProduct={item.name}
                price={item.price}
              />
            ))}
          </figure>
          <div className="flex justify-center items-center my-10 md:my-20">
            <Button
              textButton="Ver todos os produtos"
              onClick={handleExploreProducts}
              className="w-40 md:w-70 h-12 md:h-14"
            />
          </div>
        </section>
      </main>
    </>
  );
}
export default Home;
