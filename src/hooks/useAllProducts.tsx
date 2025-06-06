import { useQuery } from "@tanstack/react-query";
import { getProductUrl } from "../utils/api";
import axios from "axios";

interface Product {
  _id: string;
  name?: string;
  description?: string;
  category?: string;
  price?: number;
  imageUrl?: string;
}

function useAllProducts() {
  const apiUrl = getProductUrl();

  const {
    data: products = [],
    error,
    isLoading,
  } = useQuery<Product[], Error>({
    queryKey: ["getProducts"],
    queryFn: async () => {
      const { data: response } = await axios.get(apiUrl);
      return response;
    },
  });

  return { products, error, isLoading };
}

export default useAllProducts;
