import { useParams } from "react-router";
import useProductID from "../../../../hooks/useProductID";
import ProductCardDetails from "../../../UI/molecules/ProductCardDetails";
import SortByProducts from "../../../UI/molecules/SortByProducts";
import ProductCard from "../../../UI/molecules/ProductCard";
import useAllProducts from "../../../../hooks/useAllProducts";
import { useNavigate } from "react-router";

function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const { product } = useProductID(params.id);
  const { products, isLoading, error } = useAllProducts();

  return (
    <main className="px-4 md:px-20">
      <section className="mb-8">
        {isLoading && <h1>Carregando...</h1>}
        {error && <h1>Error</h1>}
        {product.map((item, index) => (
          <ProductCardDetails
            key={index}
            image={item.imageUrl}
            title={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </section>
      <section className="flex flex-col">
        <div className="ml-0 md:ml-34">
          <SortByProducts text="Outros produtos" />
        </div>
        <div className="flex flex-row overflow-x-auto ml-0 md:ml-30 pb-12 gap-4 scrollbar-hide">
          {products.slice(0, 3).map((item) => (
            <ProductCard
              key={item._id}
              image={item.imageUrl}
              nameProduct={item.name}
              price={item.price}
              onClick={() => navigate(`/produto/${item._id}`)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
