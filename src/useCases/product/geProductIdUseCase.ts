import { productService } from "../../services/productService";

export const getProductIdUseCase = async (id: string) => {
  return await productService.getProductID(id);
};
