import { Route, Routes } from "react-router";
import HomePage from "../pages/user/HomePage";
import HomeAdmin from "../pages/Admin/HomeAdmin";
import ProductStockAdmin from "../pages/Admin/ProductStockAdmin";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/admin" element={<HomeAdmin />}></Route>
      <Route path="/estoque" element={<ProductStockAdmin/>}></Route>
    </Routes>
  );
}
export default AppRoutes;
