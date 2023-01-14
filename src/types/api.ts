import { ProductType } from "./index";

export type ProductsResponse = {
  meta: {
    end: boolean;
    last_offset_id: string;
    limit: number;
  };
  products: ProductType[];
};
