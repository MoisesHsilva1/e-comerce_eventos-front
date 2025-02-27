import HeaderClient from "../../components/client/header/HeaderClient";
import VerticalBar from "../../components/client/verticalBar/VerticalBar";
import RegisterProduct from "../../components/client/registerProduct/RegisterProduct";

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
