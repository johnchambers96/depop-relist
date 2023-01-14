import { fetchProducts } from "../api";
import {
  DetailedProduct,
  DetailedProductType,
  ProductsResponse,
  ProductType,
} from "../types";

export const getAllProducts = async (userId: number) => {
  let end = false;
  let lastOffsetId = undefined;
  let filteredProducts = [];

  while (!end) {
    const {
      data: { products, meta },
    }: { data: ProductsResponse } = await fetchProducts(userId, lastOffsetId);

    const filtered = products.filter((product) => product.status === "ONSALE");

    filteredProducts.push(...filtered);
    lastOffsetId = meta.last_offset_id;
    if (meta.end) end = true;
  }

  return filteredProducts;
};

export const formatProducts = (
  product: DetailedProductType
): DetailedProduct => {
  const price = {
    nationalShippingCost: product?.price?.nationalShippingCost || "0",
    priceAmount: product?.price?.priceAmount || "0",
    priceCurrency: product?.price?.currencyName || "0",
  };

  const pictures = {
    pictureIds: [...new Set(product?.pictures?.flat().map((item) => item.id))],
  };

  delete product.price;
  delete product.pictures;

  return {
    ...product,
    ...price,
    ...pictures,
  };
};
