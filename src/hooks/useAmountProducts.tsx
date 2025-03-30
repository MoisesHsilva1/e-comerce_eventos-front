import axios from "axios";
import { getAmountProductUrl } from "../utils/api";
import { useQuery } from "@tanstack/react-query";

function useAmountProducts(name?: string) {
  const apiUrl = getAmountProductUrl();

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
