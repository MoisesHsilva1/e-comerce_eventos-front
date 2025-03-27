import ProductStock from "../../components/Admin/productStock/ProductStock";
import HeaderClient from "../../components/Admin/header/HeaderClient";
import VerticalBar from "../../components/Admin/verticalBar/VerticalBar";

function ProductStockAdmin() {
  return (
    <>
      <HeaderClient />
      <VerticalBar />
      <ProductStock />
    </>
  );
}
export default ProductStockAdmin;
