import axios from "axios";
import { useState } from "react";

const useCreateProduct = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_CREATE_PRODUCT_API_URL || "";

  const fetchProductData = async (productData: Record<string, any>) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(apiUrl, productData, {
        headers: { "Content-Type": "application/json" },
      });
      setResponse(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao cadastrar produto");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, fetchProductData };
};

export default useCreateProduct;
