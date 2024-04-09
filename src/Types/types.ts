import { ProductOrder } from '../Routes/Store/Cart/AddProductToCart/createProductOrder';

export interface UserType {
  email: string;
  username: string;
}

export interface CartType {
  items: ProductOrder[];
  subtotal: number | null | undefined;
}

export interface CustomerType {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  apartment: string;
  suburb: string;
  state: string;
  postcode: string;
}

export interface ShippingOptionsType {
  type: string;
  name: string;
  shippingPrice: number;
}

export type ProductCategory = 'all' | 'clothing' | 'mugs' | 'stickers' | 'misc';
