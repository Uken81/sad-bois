import { Outlet } from 'react-router';
import { Navbar } from '../../Components/NavBar/Navbar';
import { Dispatch, SetStateAction, useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import { Footer } from '../../Components/Footer';
import { ProductOrder } from '../Store/Cart/AddProductToCart/createProductOrder';
import { UserType } from '../../Types/types';

export interface UserContextType {
  userDetails: UserType | null;
  setUserDetails: Dispatch<SetStateAction<UserType | null>>;
}

export interface CartType {
  items: ProductOrder[];
  subtotal: number | null;
}

export interface CartContextType {
  cart: CartType | null;
  setCart: Dispatch<SetStateAction<CartType | null>>;
}

export const RootWrapper: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserType | null>(null);
  const [cart, setCart] = useState<CartType | null>(null);

  return (
    <>
      <Navbar cart={cart}>
        <Outlet context={{ userDetails, setUserDetails, cart, setCart }} />
        <Footer />
        <ScrollRestoration />
      </Navbar>
    </>
  );
};
