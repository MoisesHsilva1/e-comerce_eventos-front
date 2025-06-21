import { productService } from "../../services/productService";

export const findByProductName = async (name: string) => {
  return await productService.searchByProductName(name);
};
