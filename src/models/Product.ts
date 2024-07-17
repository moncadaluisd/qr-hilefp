import { Category } from "./Category";

export interface Product {
  id: number;
  name: string;
  description: string;
  slug?: string;
  sku?: string;
  image: string;
  price: number;
  stock?: number;
  is_active: boolean;
  user_id?: number;
  tenant_id?: number;
  category?: Category;
  category_id?: number;
}
