export * from "./api";
/**
 * User data stored in session storage
 */
export type storedUser = {
  bio: string;
  first_name: string;
  followers: number;
  following: number;
  id: number;
  initials: string;
  items_sold: number;
  last_name: string;
  last_seen: string;
  picture: Record<number, string>;
  reviews_rating: number;
  reviews_total: number;
  username: string;
  verified: boolean;
  website: string;
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
  variants: Record<number, number>;
};

export type productType = {
  id: number;
  preview:  Record<number, string>;
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
