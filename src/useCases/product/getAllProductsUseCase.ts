import { productService } from "../../services/productService";

export const getAllProductsUseCase = async () => {
  return await productService.getAllProducts();
};
