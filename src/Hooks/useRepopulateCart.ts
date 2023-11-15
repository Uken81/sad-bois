import { useContext } from 'react';
import { CartContext, CartContextType } from '../Context/CartContext';
import { getSessionData } from '../Utils/getSessionData';

/**
 * A custom hook that gets the data from session storage if it exists and sets the cart context with the results.
 */

export const useRepopulateCart = () => {
  const { setCart } = useContext(CartContext) as CartContextType;

  return () => {
    const sessionCart = getSessionData('cart');
    if (sessionCart) {
      setCart(JSON.parse(sessionCart));
      return;
    }

    console.log('Session cart is undefined.');
  };
};
