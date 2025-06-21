import { ProductFormData } from "../types/formData/ProductFormData";
import { ProductResponse } from "../types/interface/product/ProductResponse";
import { api } from "./api";

export const productService = {
  getAllProducts: async (): Promise<ProductResponse[]> => {
    const response = await api.get("/products/listAll");
    return response.data;
  },
  searchByProductName: async (name: string): Promise<ProductResponse[]> => {
    const response = await api.get(
      `/searchByName?name=${encodeURIComponent(name)}`
    );

    return response.data;
  },
  getProductID: async (id: string): Promise<ProductResponse[]> => {
    const response = await api.get(`/products/id/${id}`);

    return response.data;
  },
  createProduct: async (
    productData: ProductFormData
  ): Promise<ProductResponse[]> => {
    const formData = new FormData();

    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("category", productData.category);
    formData.append("price", productData.price.toString());
    formData.append("image", productData.image);

    const response = await api.post("/products/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },
};
