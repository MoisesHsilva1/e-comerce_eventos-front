import { useQuery } from "@tanstack/react-query";
import { getProductIdUseCase } from "../useCases/product/geProductIdUseCase";

export const useProductID = (id: string) => {
  return useQuery({
    queryKey: ["getByProductID", id],
    queryFn: () => getProductIdUseCase(id),
    enabled: !!id,
  });
};

