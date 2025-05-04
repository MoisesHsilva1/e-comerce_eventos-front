import { searchByProductName } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
}

interface ApiResponse {
  success: boolean;
  data: Product[];
}

function useSearchProductName(name?: string) {
  const apiUrl = searchByProductName();

  const { data, error, isLoading } = useQuery<ApiResponse, Error>({
    queryKey: ["searchByProductName", name],
    queryFn: async () => {
      if (!name) return { success: false, data: [] };
      const { data } = await axios.get<ApiResponse>(
        `${apiUrl}?name=${encodeURIComponent(name)}`
      );
      return data;
    },
  });

  const products = data;

  return { products, error, isLoading };
}

export default useSearchProductName;
