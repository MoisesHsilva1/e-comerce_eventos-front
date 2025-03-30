import ProductStock from "../../components/Admin/productStock/ProductStock";
import HeaderClient from "../../components/Admin/header/HeaderClient";
import VerticalBar from "../../components/Admin/verticalBar/VerticalBar";

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
