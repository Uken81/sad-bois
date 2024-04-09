import { ProductOrder } from '../Routes/Store/Cart/AddProductToCart/createProductOrder';

export interface UserType {
  email: string;
  username: string;
}

export interface CartType {
  items: ProductOrder[];
  subtotal: number | null | undefined;
}

export type ProductCategory = 'all' | 'clothing' | 'mugs' | 'stickers' | 'misc';
