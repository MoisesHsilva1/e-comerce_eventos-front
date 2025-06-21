import { productService } from "../../services/productService";
import { ProductFormData } from "../../types/formData/ProductFormData";

export const createProductUseCase = async (productData: ProductFormData) => {
  return await productService.createProduct(productData);
};
