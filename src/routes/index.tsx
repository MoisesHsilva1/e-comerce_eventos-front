import { Route, Routes } from "react-router";
import HomePage from "../pages/user/HomePage";
import HomeAdmin from "../pages/client/HomeAdmin";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/admin" element={<HomeAdmin />}></Route>
    </Routes>
  );
}
export default AppRoutes;
