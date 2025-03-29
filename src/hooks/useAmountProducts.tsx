import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function useAmountProducts(name?: string) {
  const apiUrl = import.meta.env.VITE_GET_AMOUNT_PRODUCT_API_URL;

  const {
    data: amountProducts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getAmountProducts"],
    queryFn: async () => {
      const { data: response } = await axios.get(`${apiUrl}?name=${name}`);
      return response;
    },
  });

  return { amountProducts, error, isLoading };
}
export default useAmountProducts;
