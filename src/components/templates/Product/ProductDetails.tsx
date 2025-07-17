import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { CartContext } from "../../../context/CartContext";

import { useProductID } from "../../../hooks/useProductID";
import ProductCardDetails from "../../UI/molecules/ProductCardDetails";
import SortByProducts from "../../UI/molecules/SortByProducts";
import ProductCard from "../../UI/molecules/ProductCard";
import { useAllProducts } from "../../../hooks/useAllProducts";

function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [qtd, setQtd] = useState(1);

  const { data: product } = useProductID(params.id as string);
  const { data: products, isLoading, error } = useAllProducts();
  const { addItem } = useContext(CartContext);

  const sendProductCart = () => {
    const productData = product?.map((prod) => ({
      id: prod._id,
      name: prod.name,
      price: prod.price,
      qtd: qtd,
    }));

    productData?.forEach((item) => addItem(item));

    navigate("/carrinho");
  };

  return (
    <main className="px-4 md:px-20">
      <section className="mb-8">
        {isLoading && <h1>Carregando...</h1>}
        {error && <h1>Error</h1>}
        {product?.map((item, index) => (
          <ProductCardDetails
            qtd={qtd}
            qtdDown={() => setQtd((prev) => Math.max(prev - 1, 1))}
            qtdUp={() => setQtd((prev) => prev + 1)}
            key={index}
            image={item.image}
            title={item.name}
            price={item.price}
            description={item.description}
            onClick={sendProductCart}
          />
        ))}
      </section>
      <section className="flex flex-col">
        <div className="ml-0 md:ml-34">
          <SortByProducts text="Outros produtos" />
        </div>
        <div className="flex flex-row overflow-x-auto ml-0 md:ml-30 pb-12 gap-4 scrollbar-hide">
          {products?.slice(0, 3).map((item) => (
            <ProductCard
              key={item._id}
              image={item.image}
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
