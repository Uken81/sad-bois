import { Outlet } from 'react-router';
import { Navbar } from '../../Components/NavBar/Navbar';
import { Dispatch, SetStateAction, useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import { Footer } from '../../Components/Footer';
import { ProductOrder } from '../../Hooks/useAddStoreItem';

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
      <Navbar userDetailsContext={{ userDetails, setUserDetails }} cart={cart}>
        <Outlet context={{ userDetails, setUserDetails, cart, setCart }} />
        <Footer />
        <ScrollRestoration />
      </Navbar>
    </>
  );
};
