import { useLocation, useNavigate } from "react-router";
import { useSearchProductName } from "../../../hooks/useSearchProductName";
import ProductCard from "../../UI/molecules/ProductCard";

function SearchResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchProduct = location.state?.searchTerm || "";
  const { data: products, isLoading, error } = useSearchProductName(searchProduct);

  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-screen-2xl mx-auto">
      <section className="py-6">
        <article className="text-xl sm:text-2xl md:text-3xl font-bold flex flex-col mb-6 text-center sm:text-left">
          Produtos encontrados:
        </article>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <h1 className="text-lg sm:text-xl md:text-2xl">Carregando...</h1>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center h-64">
            <h1 className="text-lg sm:text-xl md:text-2xl">
              Erro ao carregar produtos.
            </h1>
          </div>
        )}

        {!isLoading && !error && (
          <figure
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-3
              xl:grid-cols-4
              2xl:grid-cols-5
              gap-6
              py-4
            "
          >
            {products?.map((item) => (
              <ProductCard
                key={item._id}
                image={item.image}
                nameProduct={item.name}
                price={item.price}
                className="min-h-[200px] p-4"
                onClick={() => navigate(`/produto/${item._id}`)}
              />
            ))}
          </figure>
        )}
      </section>
    </main>
  );
}

export default SearchResult;
