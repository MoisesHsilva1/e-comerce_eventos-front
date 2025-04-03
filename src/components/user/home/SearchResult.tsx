import { useLocation } from "react-router";
import useSearchProductName from "../../../hooks/useSearchProductName";
import ProductCard from "../../UI/ProductCard";

function SearchResult() {
  const location = useLocation();
  const searchProduct = location.state?.searchTerm || "";
  const { products, isLoading, error } = useSearchProductName(searchProduct);

  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-16">
      <section>
        <article className="text-xl sm:text-2xl md:text-3xl font-bold flex flex-col mb-6">
          Produtos encontrados:
        </article>
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <h1 className="text-lg sm:text-xl md:text-2xl">Carregando...</h1>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center h-64">
            <h1 className="text-lg sm:text-xl md:text-2xl">Erro ao carregar produtos.</h1>
          </div>
        )}
        {!isLoading && !error && (
          <figure className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 py-4 gap-4 sm:gap-6">
            {products.map((item, index) => (
              <ProductCard key={index} alt="" nameProduct={item.name} price={item.price} />
            ))}
          </figure>
        )}
      </section>
    </main>
  );
}

export default SearchResult;