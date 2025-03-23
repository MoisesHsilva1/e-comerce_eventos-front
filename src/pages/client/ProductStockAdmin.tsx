import ProductStock from "../../components/client/productStock/ProductStock";
import HeaderClient from "../../components/client/header/HeaderClient";
import VerticalBar from "../../components/client/verticalBar/VerticalBar";

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
