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

const useProductID = (id?: string) => {
  const apiUrl = id ? searchByProductID(id) : null;

  const {
    data: product = [],
    error,
    isLoading,
  } = useQuery<Product[], Error>({
    queryKey: ["searchByProductID", id],
    queryFn: async () => {
      if (!apiUrl) throw new Error("URL inválida");
      const res = await axios.get(apiUrl);
      return res.data;
    },
    enabled: !!id,
  });

  return { product, error, isLoading };
};

export default useProductID;
