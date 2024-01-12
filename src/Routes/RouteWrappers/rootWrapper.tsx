import { Outlet } from 'react-router';
import { Navbar } from '../../Components/NavBar/Navbar';
import { Dispatch, SetStateAction, useState } from 'react';
import { ProductOrder } from '../Merchandise/ProductOrders/AddToCart/AddToCart';

export interface UserType {
  email: string;
  username: string;
}

export interface UserContextType {
  userDetails: UserType | null;
  setUserDetails: Dispatch<SetStateAction<UserType | null>>;
}

export interface CartType {
  items: ProductOrder[];
  subtotal: number;
}

export interface CartContextType {
  cart: CartType | null;
  setCart: Dispatch<SetStateAction<CartType | null>>;
}

export const Root: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserType | null>(null);
  const [cart, setCart] = useState<CartType | null>(null);

  return (
    <>
      <Navbar userDetailsContext={{ userDetails, setUserDetails }} cart={cart}>
        <Outlet context={{ userDetails, setUserDetails, cart, setCart }} />
      </Navbar>
    </>
  );
};
