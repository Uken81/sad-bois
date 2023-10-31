import { CartType } from '../../../Context/CartContext';

export const createOrUpdateLocalCart = (cart: CartType | undefined) => {
  if (!cart) {
    console.log('Passed undefined cart to CreateOrUpdateLocalCart.');
    return;
  }
  const cartData = JSON.stringify(cart);
  localStorage.setItem('cart', cartData);

  console.log('cart updated in local;');
};
