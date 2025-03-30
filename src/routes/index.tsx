import { Route, Routes } from "react-router";
import HomePage from "../pages/user/HomePage";
import HomePageAdmin from "../pages/Admin/HomePageAdmin";
import ProductStockPage from "../pages/Admin/ProductStockPage";
import SearchResultPage from "../pages/user/SearchResultPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/admin" element={<HomePageAdmin />}></Route>
      <Route path="/estoque" element={<ProductStockPage/>}></Route>
      <Route path="/pesquisa" element={<SearchResultPage />}></Route>
    </Routes>
  );
}
export default AppRoutes;
