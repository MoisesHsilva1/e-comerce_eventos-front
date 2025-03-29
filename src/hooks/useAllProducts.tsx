import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Product {
  _id?: string;
  name?: string;
  description?: string;
  category?: string;
  price?: number;
}

function useAllProducts() {
  const apiUrl = import.meta.env.VITE_GET_PRODUCT_API_URL;

  const { data: products = [], error, isLoading } = useQuery<Product[], Error>({
    queryKey: ["getProducts"], 
    queryFn: async () => {
      const { data: response } = await axios.get(apiUrl);
      return response && Array.isArray(response.products) ? response.products : [];
    },
  });

  return { products, error, isLoading };
}

export default useAllProducts;
