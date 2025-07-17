import { Route, Routes } from "react-router";
import HomePage from "../components/pages/HomePage";
import SearchResultPage from "../components/pages/SearchResultPage";
import ProductDetailsPage from "../components/pages/ProductDetailsPage";
import CartProductsPage from "../components/pages/CartProductsPage";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/busca" element={<SearchResultPage />}></Route>
      <Route path="/produto/:id" element={<ProductDetailsPage />}></Route>
      <Route path="/carrinho" element={<CartProductsPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/cadastro" element={<RegisterPage />}></Route>
    </Routes>
  );
}
export default AppRoutes;
