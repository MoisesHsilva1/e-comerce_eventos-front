import { useMutation } from "@tanstack/react-query";
import { createProductUrl } from "../utils/api";
import axios from "axios";

const sendProductData = async (productData: Record<string, void>) => {
    const apiUrl = createProductUrl()

    const res = await axios.post(apiUrl, productData, {
      headers: { "Content-Type": "application/json" },
    });

    return res.data;
  };

const useCreateProduct = () => {
    const mutation =  useMutation({
      mutationFn: sendProductData,
      onSuccess(data: string) {
        console.log("Product created successfully", data);
      },
      onError(error: string) {
        console.error("Error creating product", error);
      },
    })

    return {
      createProduct: mutation.mutate,
      isError: mutation.isError,
      error: mutation.error,
      data: mutation.data,
    };

};

export default useCreateProduct;
