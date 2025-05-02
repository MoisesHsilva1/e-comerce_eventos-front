import { useMutation } from "@tanstack/react-query";
import { createProductUrl } from "../utils/api";
import axios from "axios";

interface ProductFormData {
  name: string;
  description: string;
  category: string;
  price: number;
  image: File;
}

const sendProductData = async (productData: ProductFormData) => {
  const apiUrl = createProductUrl();
  const formData = new FormData();

  formData.append("name", productData.name);
  formData.append("description", productData.description);
  formData.append("category", productData.category);
  formData.append("price", productData.price.toString());
  formData.append("image", productData.image); 

  const res = await axios.post(apiUrl, formData, {
    headers: { "Content-Type": "multipart/form-data" },
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
