import { useState } from "react";
import axios from "axios";

const useAllProducts = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_GET_PRODUCT_API_URL || "";

  const fetchProductData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(apiUrl, {
        headers: { "Content-Type": "application/json" },
      });
      setResponse(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao requsitar produtos");
      console.error(err);
    }
    setLoading(false);
  };

  return { response, loading, error, fetchProductData };
};
export default useAllProducts;
