export * from "./api";
/**
 * User data stored in session storage
 */
export type storedUser = {
  country: string;
  email: string;
  fName: string;
  followers: number;
  following: number;
  lName: string;
  lang: string;
  picture: string;
  sellingCount: number;
  soldCount: number;
  terms: boolean;
  userId: number;
  username: string;
};

export type detailedProductType = {
  id: number;
  status: string;
  slug: string;
  address: string;
  attributes: Record<keyof unknown, unknown>;
  brand: string;
  brandId: number;
  categoryId: number;
  countryCode: string;
  description: string;
  gender: string;
  group: string;
  isKids: boolean;
  pictures: {
    id: number;
    width: number;
    height: number;
  }[][];
  productType: string;
  shippingMethods: {
    parcelSizeId: string;
    payer: string;
    shipFromAddressId: number;
    shippingProviderId: string;
  }[];
  variantSetId: number;
  variants: Record<keyof number, number>;
};

export type productType = {
  id: number;
  preview: {
    150: string;
    210: string;
    320: string;
    480: string;
    640: string;
    960: string;
    1280: string;
  };
  price: {
    currency_name: string;
    currency_symbol: string;
    discount_percentage: string | null;
    discounted_price_amount: string | null;
    international_shipping_cost: string | null;
    national_shipping_cost: string;
    price_amount: string;
  };
  slug: string;
  sold: boolean;
  status: string;
};
