import { useState } from "react";
import Divider from "../../../UI/atoms/Divider";
import SortByProducts from "../../../UI/molecules/SortByProducts";
import ProductCard from "../../../UI/molecules/ProductCard";
import Button from "../../../UI/atoms/buttons/Button";
import useAllProducts from "../../../../hooks/useAllProducts";
import { useNavigate } from "react-router";

function Home() {
  const [allProducts, setAllProducts] = useState(4);
  const [bestProducts, setBestProducts] = useState(4);
  const { products, isLoading } = useAllProducts();

  const navigate = useNavigate();

  const handleBestSellers = () => {
    setBestProducts((prev) => prev + 2);
  };

  const handleExploreProducts = () => {
    setAllProducts((prev) => prev + 4);
  };

  return (
    <>
      <main className="p-4">
        <section>
          <article className="flex flex-col ml-4 md:ml-0">
            <SortByProducts text="Este mês" />
            <div className="flex justify-between items-center flex-wrap">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Mais vendidos
              </h1>
              {allProducts < products.length && (
                <Button
                  textButton="Ver todos"
                  className="text-white w-32 md:w-44 h-10 mr-4 md:mr-14"
                  onClick={handleBestSellers}
                />
              )}
            </div>
          </article>
          <figure className="flex flex-wrap overflow-auto gap-4 p-2 md:p-4">
            {isLoading && <h1>Carregando...</h1>}
            {products.slice(0, bestProducts).map((item) => (
              <ProductCard
                key={item._id}
                image={item.imageUrl || "/placeholder.png"}
                nameProduct={item.name}
                price={item.price}
                onClick={() => navigate(`/produto/${item._id}`)}
              />
            ))}
          </figure>
          <Divider className="my-10" />
          <article className="flex flex-col ml-4 md:ml-0">
            <SortByProducts text="Outros produtos" />
            <div className="flex justify-between items-center flex-wrap">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Explore os produtos
              </h1>
            </div>
          </article>
          <figure className="flex flex-wrap overflow-auto gap-4 p-2 md:p-4">
            {isLoading && <h1>Carregando...</h1>}
            {products.slice(0, allProducts).map((item) => (
              <ProductCard
                key={item._id}
                image={item.imageUrl || "/placeholder.png"}
                nameProduct={item.name}
                price={item.price}
                onClick={() => navigate(`/produto/${item._id}`)}
              />
            ))} 
          </figure>
          <div className="flex justify-center items-center my-10 md:my-20">
            <Button
              textButton="Ver todos os produtos"
              onClick={handleExploreProducts}
              className="w-40 text-white md:w-70 h-12 md:h-14"
            />
          </div>
        </section>
      </main>
    </>
  );
}
export default Home;
