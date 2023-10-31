import { useContext } from 'react';
import { CartContext, CartContextType } from '../Context/CartContext';

/**
 * A custom hook that gets the cart from local storage if it exists and sets the cart context with the results.
 */

export const useRefreshCart = () => {
  const { setCart } = useContext(CartContext) as CartContextType;

  return () => {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      setCart(JSON.parse(localCart));
      return;
    }

    console.log('Local cart is undefined.');
  };
};
