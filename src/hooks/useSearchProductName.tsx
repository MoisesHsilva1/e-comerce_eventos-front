import { searchByProductName } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useSearchProductName(name?: string) {
  const apiUrl = searchByProductName();

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["searchByProductName"],
    queryFn: async () => {
      const { data: response } = await axios.get(`${apiUrl}?name=${name}`);
      return response;
    },
  });

  return { products, error, isLoading };
}
export default useSearchProductName;
