import { useQuery } from "@tanstack/react-query";
import { findByProductName } from "../useCases/product/findByProductNameUseCase";

export const useSearchProductName = (name: string) => {
  return useQuery({
    queryKey: ["searchByProductName", name],
    queryFn: () => findByProductName(name),
  });
};

