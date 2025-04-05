import ProductStock from "../../templates/admin/ProductStock";
import HeaderClient from "../../UI/organisms/admin/HeaderClient";
import VerticalBar from "../../UI/molecules/VerticalBar";

const ProductStockPage = () => {
  return (
    <>
      <HeaderClient />
      <VerticalBar />
      <ProductStock />
    </>
  );
}
export default ProductStockPage;
