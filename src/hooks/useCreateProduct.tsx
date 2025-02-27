import axios from "axios";
import { useState } from "react";

const useCreateProduct = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.CREATE_PRODUCT_API_URL || "";

  const fetchProductData = async (productData: any) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(apiUrl, productData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponse(res.data);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, fetchProductData };
};

export default useCreateProduct;
