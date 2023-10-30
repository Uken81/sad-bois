import { CartType } from '../../../Context/CartContext';

export const createOrUpdateLocalCart = (cart: CartType) => {
  const cartData = JSON.stringify(cart);
  localStorage.setItem('cart', cartData);

  console.log('cart updated in local;');
};
