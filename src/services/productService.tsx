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
};
