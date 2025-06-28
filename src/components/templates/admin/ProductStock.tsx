import { useAllProducts } from "../../../hooks/useAllProducts";
import Button from "../../UI/atoms/buttons/Button";

function ProductStock() {
  const { data: products = [], isLoading, error } = useAllProducts();

  const uniqueProducts = products.filter(
    (item, index, self) => index === self.findIndex((p) => p.name === item.name)
  );

  const quantityMap = products.reduce<Record<string, number>>((acc, product) => {
    acc[product.name] = (acc[product.name] || 0) + 1;
    return acc;
  }, {});

  return (
    <section className="flex justify-center items-center -my-35 ml-80 p-6 bg-[#FAFAFA] rounded-xl w-200">
      <article className="w-full">
        <h1 className="text-2xl font-bold mb-4 -mt-2 text-center">
          Estoque de Produtos
        </h1>

        {isLoading ? (
          <div className="text-center text-gray-500">Carregando...</div>
        ) : error ? (
          <div className="text-center text-red-500">
            Ocorreu um erro ao carregar os produtos.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 p-3">Produto</th>
                  <th className="border border-gray-300 p-3">Categoria</th>
                  <th className="border border-gray-300 p-3">Quantidade</th>
                  <th className="border border-gray-300 p-3">Preço Unitário</th>
                  <th className="border border-gray-300 p-3">Remover Produtos</th>
                </tr>
              </thead>
              <tbody>
                {uniqueProducts.map((item, index) => {
                  const qtd = quantityMap[item.name] ?? 0;

                  return (
                    <tr key={index} className="odd:bg-white even:bg-gray-100">
                      <td className="border border-gray-300 p-3">{item.name}</td>
                      <td className="border border-gray-300 p-3">{item.category}</td>
                      <td className="border border-gray-300 p-3">{qtd}</td>
                      <td className="border border-gray-300 p-3">R$ {item.price}</td>
                      <td className="border border-gray-300 p-3">
                        <Button
                          type="button"
                          className="bg-red-500 text-white hover:bg-red-700"
                          textButton="Excluir"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </article>
    </section>
  );
}

export default ProductStock;
