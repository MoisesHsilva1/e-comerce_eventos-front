import HeaderClient from "../../components/Admin/header/HeaderClient";
import VerticalBar from "../../components/Admin/verticalBar/VerticalBar";
import RegisterProduct from "../../components/Admin/registerProduct/RegisterProduct";

const HomePageAdmin = () => {
  return (
    <>
      <HeaderClient />
      <VerticalBar />
      <RegisterProduct />
    </>
  );
}
export default HomePageAdmin;
