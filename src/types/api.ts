import { detailedProductType, productType } from "./index";

export type productResponse = detailedProductType;

export type productsResponse = {
  meta: {
    end: boolean;
    last_offset_id: string;
    limit: number;
  };
  products: productType[];
};
