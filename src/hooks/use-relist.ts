import { useState } from "react";
import { getAllProducts, formatProducts } from "../utils";

import { fetchProduct, updateProducts } from "../api";

type UseRelistProps = {
  userId: number;
};

type UseRelistState = {
  error: string | null;
  isLoading: boolean;
  productCount: Record<"total" | "relisted", number>;
};

export const useRelist = ({ userId }: UseRelistProps) => {
  const [state, setState] = useState<UseRelistState>({
    error: null,
    isLoading: false,
    productCount: { total: 0, relisted: 0 },
  });

  const relistItems = async () => {
    setState((prevState) => ({ ...prevState, error: null, isLoading: true }));

    try {
      const products = await getAllProducts(userId);

      setState((prevState) => ({
        ...prevState,
        productCount: { total: products.length, relisted: 0 },
      }));

      for (const product of products) {
        const { data } = await fetchProduct(product.slug);
        await updateProducts(product.slug, formatProducts(data));
        setState((prevState) => ({
          ...prevState,
          productCount: {
            total: products.length,
            relisted: prevState.productCount.relisted + 1,
          },
        }));
      }
      location.reload();
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      else message = String(message);
      setState((prevState) => ({ ...prevState, error: message }));
    } finally {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  return {
    ...state,
    relistItems,
  };
};
