import { ProductOrder } from '../Routes/Store/Cart/AddProductToCart/createProductOrder';

export interface UserType {
  email: string;
  username: string;
}

export interface CartType {
  items: ProductOrder[];
  subtotal: number | null;
}
