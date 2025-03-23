import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  _id?: string;
  name?: string;
  description?: string;
  category?: string;
  price?: number;
}

function useAllProducts() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product[]>([]);

  const apiUrl = import.meta.env.VITE_GET_PRODUCT_API_URL;

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(apiUrl);

      if (response && Array.isArray(response.products)) {
        setProduct(response.products);
      }
    } catch (error: any) {
      console.error("Erro ao buscar produtos:", error.message);
      setProduct([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, product };
}

export default useAllProducts;
