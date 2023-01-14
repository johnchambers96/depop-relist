import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import {
  ProductsResponse,
  DetailedProductType,
  StoredUser,
  DetailedProduct,
} from "../types";

/**
 * Fetch list of products from users store
 * @param userId
 * @returns productsResponse
 */
export const fetchProducts = async (
  userId: number,
  offSetId?: string
): Promise<AxiosResponse<ProductsResponse>> => {
  return await axios.get(
    `https://webapi.depop.com/api/v1/shop/${userId}/products`,
    {
      params: {
        offset_id: offSetId,
        limit: 24,
      },
    }
  );
};

/**
 * Fetch more detailed information of single product
 * @returns
 */
export const fetchProduct = async (
  slug: string
): Promise<AxiosResponse<DetailedProductType>> => {
  return await axios.get(`https://webapi.depop.com/api/v2/products/${slug}/`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${Cookies.get("access_token") as string}`,
      "x-px-cookie": Cookies.get("_px2") as string,
    },
  });
};

/**
 * Updated single product on user's store
 * @param slug
 * @param payload
 * @returns void
 */
export const updateProducts = async (
  slug: string,
  payload: Partial<DetailedProduct>
): Promise<AxiosResponse<void>> => {
  return await axios.put(
    `https://webapi.depop.com/api/v2/products/${slug}`,
    payload,
    {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${Cookies.get("access_token") as string}`,
        "x-px-cookie": Cookies.get("_px2") as string,
      },
    }
  );
};

/**
 * Fetch user's shop information
 * @param username
 * @returns
 */
export const fetchUser = async (
  username: string
): Promise<AxiosResponse<StoredUser>> => {
  return await axios.get(`https://webapi.depop.com/api/v1/shop/${username}/`);
};
