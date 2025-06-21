import { useQuery } from "@tanstack/react-query";
import { getAllProductsUseCase } from "../useCases/product/getAllProductsUseCase";

export const useAllProducts = () => {
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => getAllProductsUseCase(),
  });
};
