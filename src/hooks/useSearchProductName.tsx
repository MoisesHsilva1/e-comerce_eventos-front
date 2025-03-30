import { searchByProductName } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Product {
  name?: string;
  description?: string;
  category?: string;
  price?: number;
}

function useSearchProductName(name?: string) {
  const apiUrl = searchByProductName();

  const {
    data: product,
    error,
    isLoading,
  } = useQuery<Product, Error>({
    queryKey: ["searchByProductName", name],
    queryFn: async () => {
      if (!name) return null; 
      const { data } = await axios.get(`${apiUrl}?name=${encodeURIComponent(name)}`);
      return data; 
    },
  });
  const products = product ? [product] : []

  return { products, error, isLoading };
}

export default useSearchProductName;
