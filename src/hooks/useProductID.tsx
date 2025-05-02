import { useQuery } from "@tanstack/react-query";
import { searchByProductID } from "../utils/api";
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
  data: Product | null;
}

const useProductID = (id?: string) => {
  const apiUrl = id ? searchByProductID(id) : null;

  const { data, error, isLoading } = useQuery<ApiResponse, Error>({
    queryKey: ["searchByProductID", id],
    queryFn: async () => {
      if (!apiUrl) return { success: false, data: null };
      const { data } = await axios.get<ApiResponse>(apiUrl);
      return data;
    },
    enabled: !!id,
  });

  const product = data?.data ? [data.data] : [];

  return { product, error, isLoading };
};

export default useProductID;
