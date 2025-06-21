import { useMutation } from "@tanstack/react-query";
import { createProductUseCase } from "../useCases/product/createProductUseCase";
import { ProductFormData } from "../types/formData/ProductFormData";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (productData: ProductFormData) =>
      createProductUseCase(productData),
  });
};

