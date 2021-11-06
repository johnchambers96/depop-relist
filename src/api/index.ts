import { productsResponse, productType } from "../types";
import Cookies from "js-cookie";

/**
 * Fetch list of products from users store
 * @param userId
 * @returns productsResponse
 */
export const fetchProducts = async (
  userId: number
): Promise<productsResponse> => {
  return fetch(
    `https://webapi.depop.com/api/v1/shop/${userId}/products?limit=2000`
  ).then((res) => res.json().catch((err) => new Error(err)));
};

/**
 * Fetch more detailed information of single product
 * @returns
 */
export const fetchProduct = async (slug: string): Promise<productType> => {
  return fetch(`https://webapi.depop.com/api/v2/products/${slug}/`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${Cookies.get("access_token") as string}`,
      "x-px-cookie": Cookies.get("_px2") as string,
    },
  }).then((res) => res.json());
};

/**
 * Updated single product on user's store
 * @param slug
 * @param payload
 * @returns void
 */
export const updateProducts = async (
  slug: string,
  payload: Partial<productType>
): Promise<void> => {
  return fetch(`https://webapi.depop.com/api/v1/products/${slug}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${Cookies.get("access_token") as string}`,
      "x-px-cookie": Cookies.get("_px2") as string,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => new Error(err));
};
