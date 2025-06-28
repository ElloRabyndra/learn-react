import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(defaultUrl);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch(defaultUrl);

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [url]);

  return { products, loading, url, setUrl };
};

export const defaultUrl = "https://fakestoreapi.in/api/products?limit=44";
