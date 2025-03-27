import axios from "axios";
import { useEffect, useState } from "react";

function useAmountProducts(productName?: string) {
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_GET_AMOUNT_PRODUCT_API_URL || "";

  const fetchAmountProduct = async () => {
    if (!productName) return;
    setLoading(true);
    setError(null);

    try {
      const { data: response } = await axios.get(
        `${apiUrl}?name=${productName}`
      );
      setAmount(response.amount);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Err in fetch amount product"
      );
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAmountProduct();
  }, [productName]);

  return { amount, loading, error };
}

export default useAmountProducts;
