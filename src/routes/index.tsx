import { Route, Routes } from "react-router";
import HomePage from "../pages/user/HomePage";
import HomeAdmin from "../pages/client/HomeAdmin";
import ProductStockAdmin from "../pages/client/ProductStockAdmin";

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
