import { Route, Routes } from "react-router";
import HomePage from "../components/pages/user/HomePage";
import HomePageAdmin from "../components/pages/Admin/HomePageAdmin";
import ProductStockPage from "../components/pages/Admin/ProductStockPage";
import SearchResultPage from "../components/pages/user/SearchResultPage";
import ProductDetailsPage from "../components/pages/user/ProductDetailsPage";
import CartProductsPage from "../components/pages/user/CartProductsPage";
import LoginPage from "../components/pages/user/LoginPage";
import RegisterPage from "../components/pages/user/RegisterPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/admin" element={<HomePageAdmin />}></Route>
      <Route path="/estoque" element={<ProductStockPage />}></Route>
      <Route path="/busca" element={<SearchResultPage />}></Route>
      <Route path="/produto/:id" element={<ProductDetailsPage />}></Route>
      <Route path="/carrinho" element={<CartProductsPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/cadastro" element={<RegisterPage />}></Route>
    </Routes>
  );
}
export default AppRoutes;
