import { useMutation } from "@tanstack/react-query";
import axios from "axios";

  const sendProductData = async (productData: Record<string, any>) => {
    const apiUrl = import.meta.env.VITE_CREATE_PRODUCT_API_URL || "";

    const res = await axios.post(apiUrl, productData, {
      headers: { "Content-Type": "application/json" },
    });

    return res.data;
  };

const useCreateProduct = () => {
    const mutation =  useMutation({
      mutationFn: sendProductData,
      onSuccess(data: any) {
        console.log("Product created successfully", data);
      },
      onError(error: any) {
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
