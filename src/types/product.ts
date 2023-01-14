export type DetailedProduct = {
  description: string;
  id: number;
  variantSetId: number;
  variants: Record<string, number>;
  slug: string;
  address: string;
  countryCode: string;
  categoryId: number;
  shippingMethods: ShippingMethod[];
  brandId: number;
  status: string;
  brand: string;
  group: string;
  attributes: Attributes;
  productType: string;
  gender: string;
  isKids: boolean;
  nationalShippingCost: string;
  priceAmount: string;
  priceCurrency: string;
  pictureIds: number[];
};

type ShippingMethod = {
  payer: string;
  shipFromAddressId: number;
  shippingProviderId: string;
  parcelSizeId: string;
};

type Attributes = {};

export type DetailedProductType = {
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
  price?: {
    nationalShippingCost: string | null;
    priceAmount: string;
    currencyName: string;
  };
  pictures?: {
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

export type ProductType = {
  id: number;
  preview: Record<number, string>;
  description: string;
  variantSetId: string;
  variants: string;
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
