import { useMutation } from "@tanstack/react-query";
import { createProductUrl } from "../utils/api";
import axios from "axios";

interface Product {
  name: string;
  description: string;
  category: string;
  price: number;
}

const sendProductData = async (productData: Product) => {
  const apiUrl = createProductUrl();

  const res = await axios.post(apiUrl, productData, {
    headers: { "Content-Type": "application/json" },
  });

  return res.data;
};

const useCreateProduct = () => {
  const mutation = useMutation({
    mutationFn: sendProductData,
    onSuccess(data) {
      console.log("Product created successfully", data);
    },
    onError(error: unknown) {
      console.error("Error creating product", error);
    },
  });

  return {
    createProduct: mutation.mutate,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data,
  };
};

export default useCreateProduct;
