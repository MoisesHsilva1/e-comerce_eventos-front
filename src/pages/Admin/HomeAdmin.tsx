import HeaderClient from "../../components/Admin/header/HeaderClient";
import VerticalBar from "../../components/Admin/verticalBar/VerticalBar";
import RegisterProduct from "../../components/Admin/registerProduct/RegisterProduct";

function HomeAdmin() {
  return (
    <>
      <HeaderClient />
      <VerticalBar />
      <RegisterProduct />
    </>
  );
}
export default HomeAdmin;
